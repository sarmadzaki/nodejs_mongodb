'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.registerEmail = undefined;

var _ejs = require('ejs');

var _ejs2 = _interopRequireDefault(_ejs);

var _path = require('path');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registerEmail = exports.registerEmail = function registerEmail(email, username, verification_link) {
    var folder_path = (0, _path.join)(process.cwd(), '/templates/verification-email.ejs');
    var template = void 0;
    var data = {
        username: username,
        email: email,
        verification_link: process.env.BASE_URL + '/email-verification/?link=' + verification_link
    };
    _ejs2.default.renderFile(folder_path, data, {}, function (error, responsemain) {
        if (error) return console.log("error", error);
        template = responsemain;
    });
    return template;
};