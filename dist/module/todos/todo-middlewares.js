"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkAuthorization = undefined;

var _jsonwebtoken = require("jsonwebtoken");

var checkAuthorization = exports.checkAuthorization = function checkAuthorization(req, res, next) {
    try {
        var token = req.headers.token;

        if (!token) return res.json({
            message: "You are not authorize to complete this actions",
            success: false
        });
        var verifiedToken = (0, _jsonwebtoken.verify)(token, 'simplejoke');
        req.id = verifiedToken.id;
        next();
    } catch (error) {
        console.log(error);
        return res.json({
            message: error.message == "jwt expired" ? "Your session has been expired" : error.message,
            success: false
        });
    }
};