'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = undefined;

var _express = require('express');

var _todoController = require('./todo-controller');

var controller = _interopRequireWildcard(_todoController);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = (0, _express.Router)();

router.get('/todo', controller.getTodo);
router.post('/todo', controller.addTodo);
router.delete('/todo', controller.deleteTodo);
exports.router = router;