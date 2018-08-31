import { User, UserToken } from '../../models'
import { hashSync, compareSync } from 'bcrypt'
import randomstring from 'randomstring'

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
        let userResponse = await User.create({ first_name, last_name, email, password });
        let { _id } = userResponse;
        let tokenResponse = await UserToken.create({ user_id: _id, expired: false, token: randomstring.generate(20) });
        let { token } = tokenResponse;
        let data = { _id, first_name, last_name, email, token };
        return res.json({ success: true, data: data, message: 'Registered successfully' });
    }
    catch (dberror) {
        console.log('error', dberror);
        return res.json({ success: false, message: dberror.message });
    }
}