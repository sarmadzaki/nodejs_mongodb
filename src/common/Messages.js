export const MESSAGES = {
    SESSION_EXPIRED: {
        code: 401,
        success: false,
        message: "Your session is expired. Please login again.",
    },
    RESOURCE_NOT_FOUNT: {
        code: 400,
        success: false,
        message: 'Resource not found.',
    },
    ERROR_WITH_CUSTOM_MESSAGE: message => ({
        code: 400,
        success: false,
        message: message,
    }),
    USER_NOT_EXIST: {
        code: 400,
        success: false,
        message: 'User does not exist.'
    },
    USER_ALREAD_REGISTERED: {
        code:400,
        success: false,
        message: 'User is already registered.'
    },
    WRONG_PASSWORD: {
        code: 400,
        success: false,
        message: 'Password did not match.'
    },
    SUCCESS_MESSAGE: field => ({
        code: 200,
        success: true,
        message: `${field} Login in sucessfully.`
    }),
}