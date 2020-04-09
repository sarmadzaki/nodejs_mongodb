'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendEmail = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sendEmail = exports.sendEmail = function sendEmail(typeOfMail, data) {
    return new _promise2.default(function (resolve, reject) {
        var transporter = _nodemailer2.default.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_EMAIL,
                pass: process.env.MAIL_PASSWORD
            }
        });
        var mailOptions = {
            from: process.env.MAIL_FROM_NAME + ' <' + process.env.MAIL_EMAIL + '>',
            to: data.email || 'zaki.sarmad21@gmail.com',
            subject: data.subject || 'Test Checking',
            text: ' ',
            html: typeOfMail
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return reject(error);
            }
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', _nodemailer2.default.getTestMessageUrl(info));
            return resolve(true);
        });
    });
};