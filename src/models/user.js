import mongoose, { Schema } from 'mongoose';
import * as CONST from '../constants';

const UserSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    user_name: String,
    password: String,
    role: { type: String, default: CONST.USER_ROLE[1]},
    status: {type: String, default: CONST.USER_STATUS[0]},
    verification_link: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    social_id: String
});

export const userSchema =  mongoose.model('User', UserSchema);
