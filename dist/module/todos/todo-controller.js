'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTodo = exports.getTodo = exports.addTodo = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _models = require('../../models');

var _Messages = require('../../common/Messages');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ERROR_WITH_CUSTOM_MESSAGE = _Messages.MESSAGES.ERROR_WITH_CUSTOM_MESSAGE;
var addTodo = exports.addTodo = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var _req$body, title, description, response;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, title = _req$body.title, description = _req$body.description;

            if (!(title && description)) {
              _context.next = 8;
              break;
            }

            _context.next = 5;
            return _models.TodoSchema.create({
              title: title,
              description: description
            });

          case 5:
            response = _context.sent;

            if (!response) {
              _context.next = 8;
              break;
            }

            return _context.abrupt('return', res.json({
              code: 201,
              success: true,
              message: 'Todo is created successfully',
              data: response
            }));

          case 8:
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context['catch'](0);

            res.json({
              code: 400,
              success: false,
              message: _context.t0.message,
              data: []
            });

          case 13:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 10]]);
  }));

  return function addTodo(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getTodo = exports.getTodo = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
    var response;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _models.TodoSchema.find();

          case 3:
            response = _context2.sent;

            if (!response) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt('return', res.json({
              code: 200,
              success: true,
              message: 'Todo is fetched successfully',
              data: response
            }));

          case 6:
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2['catch'](0);

            res.json({
              code: 400,
              success: false,
              message: _context2.t0.message,
              data: []
            });

          case 11:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 8]]);
  }));

  return function getTodo(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var deleteTodo = exports.deleteTodo = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
    var id, response, message;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.body.id;

            if (id) {
              _context3.next = 4;
              break;
            }

            return _context3.abrupt('return', res.json(ERROR_WITH_CUSTOM_MESSAGE('Id is not provided')));

          case 4:
            _context3.next = 6;
            return _models.TodoSchema.findOneAndDelete({ _id: id });

          case 6:
            response = _context3.sent;
            message = 'Todo of ID ' + id + ' not found.';

            if (response) {
              _context3.next = 10;
              break;
            }

            return _context3.abrupt('return', res.json(ERROR_WITH_CUSTOM_MESSAGE(message)));

          case 10:
            return _context3.abrupt('return', res.json({
              code: 200,
              success: true,
              message: 'Todo of ID ' + id + ' is deleted successfully.',
              data: response
            }));

          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3['catch'](0);

            res.json(ERROR_WITH_CUSTOM_MESSAGE(_context3.t0.message));

          case 16:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[0, 13]]);
  }));

  return function deleteTodo(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();