'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _authRoute = require('./auth/auth-route');

Object.defineProperty(exports, 'AuthRouter', {
  enumerable: true,
  get: function get() {
    return _authRoute.router;
  }
});

var _todoRoute = require('./todos/todo-route');

Object.defineProperty(exports, 'TodoRouter', {
  enumerable: true,
  get: function get() {
    return _todoRoute.router;
  }
});