import { User, UserToken } from '../../models';
import { hashSync, compareSync } from 'bcrypt';
import randomstring from 'randomstring';
import { sendEmail } from '../../common/helper';
import * as helper from './auth-helper';
import * as CONST from '../../constants';

export const login = async (req, res) => {
    try {
        let { email, password } = req.body;
        let isUser = await User.findOne({ email });
        if (!isUser) return res.json({ success: false, message: 'User is not registered' });
        if (!compareSync(password, isUser.password)) return res.json({ success: false, message: 'password did not match' })
        let tokenResponse = await UserToken.create({ user_id: _id, expired: false, token: randomstring.generate(20) });
        let { _id, first_name, last_name } = isUser;
        let { token } = tokenResponse;
        let data = { _id, first_name, last_name, email, token };
        return res.json({ status: 200, success: true, data: data, message: "log in successfully" })
    }
    catch (error) {
        return res.json({ status: 200, success: false, message: error.message, line: error })
    }
}

export const register = async (req, res) => {
    try {
        let { email, password, first_name, last_name } = req.body;
        let isUser = await User.findOne({ email });
        if (isUser) return res.json({ success: false, message: 'User is already registered' });
        password = hashSync(password, 10);
        let userResponse = await User.create({ first_name, last_name, email, password, verification_link: randomstring.generate(10) });
        let { _id, verification_link } = userResponse;
        let tokenResponse = await UserToken.create({ user_id: _id, expired: false, token: randomstring.generate(20) });
        let data = { _id, first_name, last_name, email, token };
        let { token } = tokenResponse;
        await sendEmail(helper.registerEmail(email, first_name, verification_link), { email, subject: 'Claim You Email Verification' });
        return res.json({ success: true, data: data, message: 'Registered successfully' });
    }
    catch (dberror) {
        return res.json({ success: false, message: dberror.message });
    }
}

export const emailVerification = async (req, res) => {
    try {
        let { link } = req.query;
        let isUser = await User.findOne({ verification_link: link });
        if (!isUser) return res.json({ success: false, message: 'Verification link is not working right now' });
        if (isUser.status == CONST.USER_STATUS[1]) return res.json({ success: false, message: 'You are already verfied' });
        let verified = await User.findByIdAndUpdate({ _id: isUser._id }, { status: CONST.USER_STATUS[1] });
        if (!verified) return res.json({ success: false, message: 'Link is not working right now.' });
        return res.json({ success: true, message: "Congratulations! Your account is verified." });
    }
    catch (error) {
        return res.json({ success: false, message: error.message });
    }
}

export const logout = async (req, res) => {
    try {
        let { token } = req.headers;
        let tokenResponse = await UserToken.findOne({ token: token });
        if (!tokenResponse) return res.json({ success: false, message: 'provided token not found.' });
        if (tokenResponse.expired) return res.json({ success: false, message: 'This account is already logged out.' });
        let update = await UserToken.findByIdAndUpdate({ _id: tokenResponse.id }, { expired: true });
        if (update) return res.json({ success: true, message: 'successfully logged out.' });
        return res.json({ success: false, message: 'did not updated successfully.' });
    }
    catch (error) {
        return res.json({ success: false, message: error.message });
    }
}