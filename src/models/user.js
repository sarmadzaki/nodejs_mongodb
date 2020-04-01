import mongoose, { Schema } from "mongoose";
import * as CONST from "../constants";
import { hashSync } from "bcrypt";

const UserSchema = new Schema({
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
UserSchema.pre("save", function(next) {
  this.password = hashSync(this.password, 10);
  next();
});

export const userSchema = mongoose.model("User", UserSchema);
