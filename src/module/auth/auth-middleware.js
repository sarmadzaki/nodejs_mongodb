import { userToken } from "../../models/userToken";


export const isLoggedIn = async (req, res, next) => {
    let { token } = req.headers;
    try {

        let isToken = await userToken.findOne({ token });
        if (!isToken.expired) return res.json({ success: false, status: 404, message: 'User session has been expired. Please Login again.' })
        next();
    }
    catch (querrError) {
        res.json({ success: false, status: 400, message: querrError.message })
    }
}