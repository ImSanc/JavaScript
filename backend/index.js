import express from 'express';
import cors from 'cors'
import { Todo } from './db.js';

const app = express();

app.listen(8080);
app.use(express.json());
app.use(cors(
    'http://localhost:5173'
));
app.post("/addTodo" , async (request,response)=>{

    const {title} = request.body;

    try{
        await Todo.create({title});
        return response.status(200).json(
            {
                created : true,
                message : "Todo created successful"
            }
        )
    }
    catch( err ){
        return response.status(400).json({
            created : false,
            message : "Couldn't create Todo"
        })
    }
    
})

app.get("/get-todos", async (request,response)=>{
    const random =  Math.floor(Math.random()*10);

    try{
        const todos = await Todo.find();
        const todoList = todos.map( todo => { return { "title" : todo.title}});
        console.log(random);

        return response.status(200).json({
            found : true,
            todos : todoList.slice(0,random)
        });
    }
    catch( error ){
        return response.status(500).json({found : false});
    }
    
} )
