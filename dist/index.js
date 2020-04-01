'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _db = require('../config/db');

var _db2 = _interopRequireDefault(_db);

var _module = require('./module');

var _errorHandler = require('./common/errorHandler');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

//db connections
(0, _db2.default)();
app.use((0, _cors2.default)());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

// create log file
app.use((0, _morgan2.default)('common', {
    stream: _fs2.default.createWriteStream('./logger.log', { flags: 'a' })
}));
app.use((0, _morgan2.default)('dev'));

//Routes
app.get('/hello', function (req, res) {
    res.send('Hello World!');
});
app.use('/api/', [_module.AuthRouter, _module.TodoRouter]);

//Route Error
app.use('/', _errorHandler.errorRoute);

//server initialization
app.listen(3001, function () {
    return console.log('Example app listening on port 3001!');
});