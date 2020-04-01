'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = undefined;

var _express = require('express');

var _authController = require('./auth-controller');

var controller = _interopRequireWildcard(_authController);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = (0, _express.Router)();

router.post('/login', controller.login);
router.post('/register', controller.register);
router.get('/email-verification', controller.emailVerification);
router.get('/logout', controller.logout);

exports.router = router;