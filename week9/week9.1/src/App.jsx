
import React, { Suspense, useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [todos , setTodo] = useState([]);
  useEffect( ()=>{
    getTodos();
    const interval = setInterval( ()=>{
      getTodos();
    },2000);

    return () => {
      clearInterval(interval);
    }

  },[])

  const getTodos = async () => {
    const result  = await axios.get("http://localhost:8080/get-todos");
    const newTodos = result.data.todos;
    setTodo(newTodos);
  }

  return <>
    <Suspense fallback={<div>Loading Todos...</div>}>
      {todos.map( todo =>( <div>{todo.title}</div>))}
    </Suspense>
  </>
}

export default App
