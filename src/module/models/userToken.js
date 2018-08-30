import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;



const userTokenSchema = new Schema({
    token: String,
    expired: Boolean,
    created_at: {
        type: Date,
        default: Date.now
    },
});

export default mongoose.model('userToken', userTokenSchema);