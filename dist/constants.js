'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var USER_STATUS = exports.USER_STATUS = {
    0: 'pending',
    1: 'verified',
    2: 'blocked'
};

var USER_ROLE = exports.USER_ROLE = {
    0: 'admin',
    1: 'user'
};

var ERRORS = exports.ERRORS = {
    'USER_ALREADY_EXISTS': 'This user already exists',
    'USER_ALREADY_LOGGEDIN': 'This user already logged in',
    'USER_NOT_REGISTERED': 'This user is not registered',
    'LINK_DOWN': 'Link is not working right please try later',
    'LINK_EXPIRED': 'This link has been expired',
    'INCORRECT_PASSOWRD': 'Incorrect Password'
};