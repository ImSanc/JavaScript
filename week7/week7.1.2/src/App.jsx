import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count , setCount]= useState(0);


  return <div>
    <Count count= {count} setCount={setCount}></Count>
    
  </div>
}

function Count( {count,setCount} ) {
  return <div>
    {count}
    <Button setCount={setCount} count={count}></Button>
  </div>
}

function Button( {count,setCount}){
  return <div>

  <button onClick={ ()=> {
    setCount(count+1)
  }}>Increment</button>

  <button onClick={ ()=>{
    setCount(count-1)
  }}>Decrement</button>
  </div>
}

export default App
