
import { useEffect, useState } from 'react';
import './App.css'
 function  App() {
  const [todo, setTodos] = useState([]);

  useEffect( () => {
    
   const intervalId = setInterval( () =>{ fetch("https://sum-server.100xdevs.com/todos")
   .then( async (response) => {
     const todoList = await response.json();

     setTodos(todoList.todos);
   });
},2000)
},[]);

return <div>
{ todo.map( (todo)=>( <Todo key={todo.id} title={todo.title} description={todo.description} completed={todo.completed}></Todo>)) } 
</div>
}

function Todo( {title , description,completed})
{
  return <div>
    <h1>{title}</h1>
    <h4>{description}</h4>
    <h4>{completed}</h4>
  </div>
}

export default App
