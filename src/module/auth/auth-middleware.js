import { userToken } from "../../models/userToken";
import { MESSAGES } from '../../common/Messages';

export const isLoggedIn = async (req, res, next) => {
    let { token } = req.headers;
    const { SESSION_EXPIRED, ERROR_WITH_CUSTOM_MESSAGE } = MESSAGES;
    try {
        let isToken = await userToken.findOne({ token });
        if (!isToken.expired) return res.json(SESSION_EXPIRED);
        next();
    }
    catch (error) {
        res.json(ERROR_WITH_CUSTOM_MESSAGE(error.message));
    }
}