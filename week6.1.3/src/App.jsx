import { memo, useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function useTodos(){
  const [todo , setTodo] = useState(null);

  useEffect( ()=>{
    axios.get(`https://sum-server.100xdevs.com/todo?id=1`)
    .then( (response)=>{
      const fetchedTodo = response.data.todo;

      setTodo(fetchedTodo);
    })
  },[])

  return todo;
}

function App() {
  const todo = useTodos();
  if(todo== null )
    {
      return<div>Loading</div>
    }

  return <div>
    { JSON.stringify (todo)}
  </div>
}

export default App
