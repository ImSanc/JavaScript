import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return <div>
    <Count></Count> 
  </div>
}

function Count( ) {
  const [count , setCount]= useState(0);

  return <div>
    {count}
    <Button setCount={setCount} count={count}></Button>
  </div>
}

function Button( {count,setCount}){
  return <div>
    <br/> <br></br>
  <button onClick={ ()=> {
    setCount(count+1)
  }}>Increment</button>
<br/> <br></br>
  <button onClick={ ()=>{
    setCount(count-1)
  }}>Decrement</button>
  </div>
}

export default App
