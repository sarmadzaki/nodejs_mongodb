'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("dotenv").config();
var username = process.env.DB_DEV_USERNAME,
    password = process.env.DB_DEV_PASSWORD,
    host = process.env.DB_DEV_HOST;

var url = 'mongodb://' + username + ':' + password + host;

exports.default = function () {
  _mongoose2.default.Promise = global.Promise;
  _mongoose2.default.connect(url, { useNewUrlParser: true });
  _mongoose2.default.set('debug', true);
  _mongoose2.default.connection.once('open', function () {
    return console.log('mongodb run');
  }).on('err', function (err) {
    return console.error('error', err);
  });
};