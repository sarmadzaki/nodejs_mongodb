'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTodo = exports.deleteTodo = exports.getTodo = exports.addTodo = undefined;

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
    var _req$body, title, description, id, response;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, title = _req$body.title, description = _req$body.description;
            id = req.id;

            if (!(title && description)) {
              _context.next = 9;
              break;
            }

            _context.next = 6;
            return _models.TodoSchema.create({
              title: title,
              description: description,
              user_id: id
            });

          case 6:
            response = _context.sent;

            if (!response) {
              _context.next = 9;
              break;
            }

            return _context.abrupt('return', res.json({
              code: 201,
              success: true,
              message: 'Todo is created successfully',
              data: response
            }));

          case 9:
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context['catch'](0);

            res.json({
              code: 400,
              success: false,
              message: _context.t0.message,
              data: []
            });

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 11]]);
  }));

  return function addTodo(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getTodo = exports.getTodo = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
    var id, response;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.id;
            _context2.next = 4;
            return _models.TodoSchema.find({ user_id: id });

          case 4:
            response = _context2.sent;

            if (!response) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt('return', res.json({
              code: 200,
              success: true,
              message: 'Todo is fetched successfully',
              data: response
            }));

          case 7:
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2['catch'](0);

            res.json({
              code: 400,
              success: false,
              message: _context2.t0.message,
              data: []
            });

          case 12:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 9]]);
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
            return _models.TodoSchema.findOneAndDelete({ _id: id, user_id: req.id });

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
var updateTodo = exports.updateTodo = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
    var _req$body2, id, title, response, message;

    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _req$body2 = req.body, id = _req$body2.id, title = _req$body2.title;

            if (id) {
              _context4.next = 4;
              break;
            }

            return _context4.abrupt('return', res.json(ERROR_WITH_CUSTOM_MESSAGE('Id is not provided')));

          case 4:
            _context4.next = 6;
            return _models.TodoSchema.findOneAndUpdate({ id: id, user_id: req.id }, { title: title }, { new: true });

          case 6:
            response = _context4.sent;
            message = 'Todo of ID ' + id + ' not found.';

            if (response) {
              _context4.next = 10;
              break;
            }

            return _context4.abrupt('return', res.json(ERROR_WITH_CUSTOM_MESSAGE(message)));

          case 10:
            return _context4.abrupt('return', res.json({
              code: 201,
              success: true,
              message: 'Todo is updated successfully',
              data: response
            }));

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4['catch'](0);

            res.json({
              code: 400,
              success: false,
              message: _context4.t0.message,
              data: []
            });

          case 16:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined, [[0, 13]]);
  }));

  return function updateTodo(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();