import mongoose, { Schema } from 'mongoose';

const UserTokenSchema = new Schema({
    token: String,
    expired: Boolean,
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    created_at: {
        type: Date,
        default: Date.now
    },
});

export const userToken = mongoose.model('userToken', UserTokenSchema);