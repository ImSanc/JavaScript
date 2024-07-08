import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let idCounter = 4;
function App() {
 const [todos,setTodos] = useState([
  { 
    id : 1,
  title : "sanchit",
  description : "Sanchit needs to work"
  },
  {
    id : 2,
    title : "DevSan",
    description : "Sanchit needs to dev"
  }, {
    id : 3,
    title : "chillSan",
    description : "Sanchit needs to chill"
  }

]);

function addTodo ()
{
  setTodos([...todos,{
    id : idCounter++,
    title : "new todo ",
    description : "Added new Todo"
  }])
}

return (
  <div>
    <button onClick={addTodo}>Add Todo</button>
    { todos.map( (todo)=>(<Todo title={todo.title} description ={todo.description} > </Todo>)) }
  </div>
);


}

function Todo ({title,description}) {
  return ( <div>
    <h1>
      {title}
    </h1>
    <h5>{description}</h5>
  </div>)
}

export default App
