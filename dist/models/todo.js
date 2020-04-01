'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.todoSchema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodoSchema = new _mongoose.Schema({
    title: String,
    description: String
});

var todoSchema = exports.todoSchema = _mongoose2.default.model('Todos', TodoSchema);