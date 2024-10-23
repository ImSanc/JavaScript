import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Sanchit:sanchit%4017@cluster0.8djn6b3.mongodb.net/todos");


const TodoSchema = new mongoose.Schema({
    title : String
});

export const Todo = mongoose.model('Todo',TodoSchema);