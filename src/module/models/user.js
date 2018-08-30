import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;


const userSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    user_name: String,
    password: String,
    role: { type: String, default: "user" },
    created_at: {
        type: Date,
        default: Date.now
    },
    social_id: String
});

export default mongoose.model('user', userSchema);
