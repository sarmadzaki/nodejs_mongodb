'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.userToken = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserTokenSchema = new _mongoose.Schema({
    token: String,
    expired: Boolean,
    user_id: {
        type: _mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

var userToken = exports.userToken = _mongoose2.default.model('userToken', UserTokenSchema);