'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.logout = exports.emailVerification = exports.register = exports.login = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _models = require('../../models');

var _bcrypt = require('bcrypt');

var _randomstring = require('randomstring');

var _randomstring2 = _interopRequireDefault(_randomstring);

var _jsonwebtoken = require('jsonwebtoken');

var _helper = require('../../common/helper');

var _authHelper = require('./auth-helper');

var helper = _interopRequireWildcard(_authHelper);

var _constants = require('../../constants');

var CONST = _interopRequireWildcard(_constants);

var _Messages = require('../../common/Messages');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = exports.login = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
        var USER_NOT_EXIST, WRONG_PASSWORD, ERROR_WITH_CUSTOM_MESSAGE, SUCCESS_MESSAGE, _req$body, email, password, user, token, _id, first_name, last_name, data;

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        USER_NOT_EXIST = _Messages.MESSAGES.USER_NOT_EXIST, WRONG_PASSWORD = _Messages.MESSAGES.WRONG_PASSWORD, ERROR_WITH_CUSTOM_MESSAGE = _Messages.MESSAGES.ERROR_WITH_CUSTOM_MESSAGE, SUCCESS_MESSAGE = _Messages.MESSAGES.SUCCESS_MESSAGE;
                        _context.prev = 1;
                        _req$body = req.body, email = _req$body.email, password = _req$body.password;
                        _context.next = 5;
                        return _models.User.findOne({ email: email });

                    case 5:
                        user = _context.sent;

                        if (user) {
                            _context.next = 8;
                            break;
                        }

                        return _context.abrupt('return', res.json(USER_NOT_EXIST));

                    case 8:
                        if ((0, _bcrypt.compareSync)(password, user.password)) {
                            _context.next = 10;
                            break;
                        }

                        return _context.abrupt('return', res.json(WRONG_PASSWORD));

                    case 10:
                        token = (0, _jsonwebtoken.sign)({ id: user._id }, 'simplejoke', { expiresIn: '2m' });
                        _id = user._id, first_name = user.first_name, last_name = user.last_name;
                        data = {
                            _id: _id,
                            first_name: first_name,
                            last_name: last_name,
                            email: email,
                            token: token
                        };
                        return _context.abrupt('return', res.json((0, _extends3.default)({}, SUCCESS_MESSAGE('Login'), { data: data })));

                    case 16:
                        _context.prev = 16;
                        _context.t0 = _context['catch'](1);
                        return _context.abrupt('return', res.json(ERROR_WITH_CUSTOM_MESSAGE(_context.t0.message)));

                    case 19:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[1, 16]]);
    }));

    return function login(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var register = exports.register = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
        var USER_ALREADY_REGISTERED, SUCCESS_MESSAGE, ERROR_WITH_CUSTOM_MESSAGE, _req$body2, email, password, first_name, last_name, isUser, userResponse, _id, verification_link, tokenResponse, data, token;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        USER_ALREADY_REGISTERED = _Messages.MESSAGES.USER_ALREADY_REGISTERED, SUCCESS_MESSAGE = _Messages.MESSAGES.SUCCESS_MESSAGE, ERROR_WITH_CUSTOM_MESSAGE = _Messages.MESSAGES.ERROR_WITH_CUSTOM_MESSAGE;
                        _context2.prev = 1;
                        _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password, first_name = _req$body2.first_name, last_name = _req$body2.last_name;
                        _context2.next = 5;
                        return _models.User.findOne({ email: email });

                    case 5:
                        isUser = _context2.sent;

                        if (!isUser) {
                            _context2.next = 8;
                            break;
                        }

                        return _context2.abrupt('return', res.json({
                            code: 400,
                            success: false,
                            message: 'User is already registered.'
                        }));

                    case 8:
                        _context2.next = 10;
                        return _models.User.create({
                            first_name: first_name,
                            last_name: last_name,
                            email: email,
                            password: password,
                            verification_link: _randomstring2.default.generate(10)
                        });

                    case 10:
                        userResponse = _context2.sent;
                        _id = userResponse._id, verification_link = userResponse.verification_link;
                        _context2.next = 14;
                        return _models.UserToken.create({
                            user_id: _id,
                            expired: false,
                            token: _randomstring2.default.generate(20)
                        });

                    case 14:
                        tokenResponse = _context2.sent;
                        data = {
                            _id: _id,
                            first_name: first_name,
                            last_name: last_name,
                            email: email,
                            token: token
                        };
                        token = tokenResponse.token;

                        console.log('ssssss');
                        // await sendEmail(helper.registerEmail(email, first_name, verification_link), { email, subject: 'Claim You Email Verification' });
                        return _context2.abrupt('return', res.json((0, _extends3.default)({}, SUCCESS_MESSAGE('Registered'), { data: data, token: token })));

                    case 21:
                        _context2.prev = 21;
                        _context2.t0 = _context2['catch'](1);
                        return _context2.abrupt('return', res.json(ERROR_WITH_CUSTOM_MESSAGE(_context2.t0.message)));

                    case 24:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined, [[1, 21]]);
    }));

    return function register(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var emailVerification = exports.emailVerification = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
        var link, isUser, verified;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.prev = 0;
                        link = req.query.link;
                        _context3.next = 4;
                        return _models.User.findOne({ verification_link: link });

                    case 4:
                        isUser = _context3.sent;

                        if (isUser) {
                            _context3.next = 7;
                            break;
                        }

                        return _context3.abrupt('return', res.json({ success: false, message: CONST.ERRORS['LINK_DOWN'] }));

                    case 7:
                        if (!(isUser.status == CONST.USER_STATUS[1])) {
                            _context3.next = 9;
                            break;
                        }

                        return _context3.abrupt('return', res.json({ success: false, message: 'You are already verfied' }));

                    case 9:
                        _context3.next = 11;
                        return _models.User.findByIdAndUpdate({ _id: isUser._id }, { status: CONST.USER_STATUS[1] });

                    case 11:
                        verified = _context3.sent;

                        if (verified) {
                            _context3.next = 14;
                            break;
                        }

                        return _context3.abrupt('return', res.json({ success: false, message: CONST.ERRORS['LINK_DOWN'] }));

                    case 14:
                        return _context3.abrupt('return', res.json({ success: true, message: "Congratulations! Your account is verified." }));

                    case 17:
                        _context3.prev = 17;
                        _context3.t0 = _context3['catch'](0);
                        return _context3.abrupt('return', res.json({ success: false, message: _context3.t0.message }));

                    case 20:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined, [[0, 17]]);
    }));

    return function emailVerification(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

var logout = exports.logout = function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
        var token, tokenResponse, update;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.prev = 0;
                        token = req.headers.token;
                        _context4.next = 4;
                        return _models.UserToken.findOne({ token: token });

                    case 4:
                        tokenResponse = _context4.sent;

                        if (tokenResponse) {
                            _context4.next = 7;
                            break;
                        }

                        return _context4.abrupt('return', res.json({ success: false, message: 'provided token not found.' }));

                    case 7:
                        if (!tokenResponse.expired) {
                            _context4.next = 9;
                            break;
                        }

                        return _context4.abrupt('return', res.json({ success: false, message: 'This account is already logged out.' }));

                    case 9:
                        _context4.next = 11;
                        return _models.UserToken.findByIdAndUpdate({ _id: tokenResponse.id }, { expired: true });

                    case 11:
                        update = _context4.sent;

                        if (!update) {
                            _context4.next = 14;
                            break;
                        }

                        return _context4.abrupt('return', res.json({ success: true, message: 'successfully logged out.' }));

                    case 14:
                        return _context4.abrupt('return', res.json({ success: false, message: 'did not updated successfully.' }));

                    case 17:
                        _context4.prev = 17;
                        _context4.t0 = _context4['catch'](0);
                        return _context4.abrupt('return', res.json({ success: false, message: _context4.t0.message }));

                    case 20:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined, [[0, 17]]);
    }));

    return function logout(_x7, _x8) {
        return _ref4.apply(this, arguments);
    };
}();