"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isLoggedIn = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _userToken = require("../../models/userToken");

var _Messages = require("../../common/Messages");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isLoggedIn = exports.isLoggedIn = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
        var token, SESSION_EXPIRED, ERROR_WITH_CUSTOM_MESSAGE, isToken;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        token = req.headers.token;
                        SESSION_EXPIRED = _Messages.MESSAGES.SESSION_EXPIRED, ERROR_WITH_CUSTOM_MESSAGE = _Messages.MESSAGES.ERROR_WITH_CUSTOM_MESSAGE;
                        _context.prev = 2;
                        _context.next = 5;
                        return _userToken.userToken.findOne({ token: token });

                    case 5:
                        isToken = _context.sent;

                        if (isToken.expired) {
                            _context.next = 8;
                            break;
                        }

                        return _context.abrupt("return", res.json(SESSION_EXPIRED));

                    case 8:
                        next();
                        _context.next = 14;
                        break;

                    case 11:
                        _context.prev = 11;
                        _context.t0 = _context["catch"](2);

                        res.json(ERROR_WITH_CUSTOM_MESSAGE(_context.t0.message));

                    case 14:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[2, 11]]);
    }));

    return function isLoggedIn(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();