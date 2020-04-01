"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userSchema = undefined;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _constants = require("../constants");

var CONST = _interopRequireWildcard(_constants);

var _bcrypt = require("bcrypt");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserSchema = new _mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  user_name: String,
  password: {
    type: String,
    trim: true,
    required: true
  },
  role: { type: String, default: CONST.USER_ROLE[1] },
  status: { type: String, default: CONST.USER_STATUS[0] },
  verification_link: String,
  created_at: {
    type: Date,
    default: Date.now
  },
  social_id: String
});

//hashing user password before saving into database
UserSchema.pre("save", function (next) {
  this.password = (0, _bcrypt.hashSync)(this.password, 10);
  next();
});

var userSchema = exports.userSchema = _mongoose2.default.model("User", UserSchema);