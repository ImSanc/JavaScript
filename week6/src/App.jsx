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
  <Todo todos={todos}></Todo>
  </div>
);


}

function Todo ({todos}) {
  return ( <div> 
  { todos.map( (todo) => {
    
    return (<div>
      key = {todo.id}
      <h1>{todo.title}</h1>
      <h1>{todo.description}</h1>
      </div>
    )
  })}
    </div>)
}

export default App
