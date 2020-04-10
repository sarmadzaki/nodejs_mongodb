import { verify } from "jsonwebtoken";

export const checkAuthorization = (req, res, next) => {
    try {
        const { token } = req.headers;
        if (!token) return res.json({
            message: "You are not authorize to complete this actions",
            success: false,
        });
        const verifiedToken = verify(token, 'simplejoke');
        req.id = verifiedToken.id;
        next();
    } catch (error) {
        console.log(error);
        return res.json({
            message: error.message == "jwt expired" ? "Your session has been expired" : error.message,
            success: false,
        });
    }
}