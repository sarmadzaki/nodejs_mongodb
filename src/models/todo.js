import mongoose, { Schema } from 'mongoose';

const TodoSchema = new Schema({
    title: String,
    description: String,
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

export const todoSchema =  mongoose.model('Todos', TodoSchema);
