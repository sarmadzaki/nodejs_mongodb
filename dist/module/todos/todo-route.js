'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.router = undefined;

var _express = require('express');

var _todoController = require('./todo-controller');

var controller = _interopRequireWildcard(_todoController);

var _todoMiddlewares = require('./todo-middlewares');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var addTodo = controller.addTodo,
    getTodo = controller.getTodo,
    deleteTodo = controller.deleteTodo,
    updateTodo = controller.updateTodo;

var router = (0, _express.Router)();

router.get('/todo', _todoMiddlewares.checkAuthorization, getTodo);
router.post('/todo', _todoMiddlewares.checkAuthorization, addTodo);
router.delete('/todo', _todoMiddlewares.checkAuthorization, deleteTodo);
router.put('/todo', _todoMiddlewares.checkAuthorization, updateTodo);
exports.router = router;