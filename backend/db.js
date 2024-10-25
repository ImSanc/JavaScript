import mongoose from "mongoose";

mongoose.connect();


const TodoSchema = new mongoose.Schema({
    title : String
});

export const Todo = mongoose.model('Todo',TodoSchema);