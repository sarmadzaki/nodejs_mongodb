import mongoose, { Schema } from 'mongoose';

const TodoSchema = new Schema({
    title: String,
    description: String,
});

export const todoSchema =  mongoose.model('Todos', TodoSchema);
