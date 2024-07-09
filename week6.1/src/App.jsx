import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [id,setId] = useState('');
  const [todos , setTodo] = useState([]);

  useEffect( () => {
    if(id){
    fetch("https://sum-server.100xdevs.com/todos?id=" + id)
    .then( async (response)=>{
       const newTodo = await response.json();
       setTodo(newTodo.todos);
    })
  }
  },[id]);

  return <div>
    <input type="text" placeholder="ID" onChange={ (e)=>{
                const value = e.target.value;
                setId(e.target.value);
            }}/>
        {    todos.map( (todo)=>( <Todo title={todo.title} description={todo.description}></Todo>  )) }
  </div>
}

function Todo ({title , description})
{
  return <div>
    <h1> {title} </h1>
    <h4> {description} </h4>
  </div>
}

export default App
