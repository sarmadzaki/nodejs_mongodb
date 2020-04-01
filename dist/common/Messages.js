'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var MESSAGES = exports.MESSAGES = {
    SESSION_EXPIRED: {
        code: 401,
        success: false,
        message: "Your session is expired. Please login again."
    },
    RESOURCE_NOT_FOUNT: {
        code: 400,
        success: false,
        message: 'Resource not found.'
    },
    ERROR_WITH_CUSTOM_MESSAGE: function ERROR_WITH_CUSTOM_MESSAGE(message) {
        return {
            code: 400,
            success: false,
            message: message,
            data: []
        };
    },
    USER_NOT_EXIST: {
        code: 400,
        success: false,
        message: 'User does not exist.'
    },
    USER_ALREAD_REGISTERED: {
        code: 400,
        success: false,
        message: 'User is already registered.'
    },
    WRONG_PASSWORD: {
        code: 400,
        success: false,
        message: 'Password did not match.'
    },
    SUCCESS_MESSAGE: function SUCCESS_MESSAGE(field) {
        return {
            code: 200,
            success: true,
            message: field + ' Login in sucessfully.'
        };
    }
};