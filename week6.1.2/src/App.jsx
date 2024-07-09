import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  return <>
  <CreateLayout></CreateLayout>
  </>
}

function CreateLayout()
{
  const [todo,setTodo] = useState(null);
  const [id,setId] = useState(0);

  useEffect( ()=>{
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then( (response)=>{
      const newTodo = response.data.todo;
      setTodo(newTodo);
    })
  },[id])


  return <div>
    <button onClick={ ()=> {setId(1)} } >1</button>
    <button onClick={ ()=> {setId(2)} } >2</button>
    <button onClick={ ()=> {setId(3)} } >3</button>
    <button onClick={ ()=> {setId(4)} } >4</button>
    {todo && <Todo title={todo.title} description={todo.description}></Todo> }
  </div>
}

function Todo ({title , description}){
  return <div>
    <h1>{title}</h1>
    {description}
  </div>
}

export default App
