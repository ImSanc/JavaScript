
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { UseTodos } from './hooks/hooks';

function App() {

  const {todos,loading} = UseTodos();

  if(loading){
    return <div>
      Loading
    </div>
  }

  return (
    <>
      {todos.map( todo=> <Track todo={todo}/>)}
    </>
  )
}

function Track({todo}){
  return <div>
    <div>{todo.title}</div>
    <div>{todo.description}</div>
  </div>
}

export default App
