"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isLoggedIn = undefined;

var _userToken = require("../../models/userToken");

var _Messages = require("../../common/Messages");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var isLoggedIn = exports.isLoggedIn = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
        var token, SESSION_EXPIRED, ERROR_WITH_CUSTOM_MESSAGE, isToken;
        return regeneratorRuntime.wrap(function _callee$(_context) {
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