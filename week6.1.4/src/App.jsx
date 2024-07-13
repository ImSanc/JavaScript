import { useState } from 'react'
import './App.css'
import { memo } from 'react';
import { useCallback } from 'react';

const ButtonComponent = memo( ({onClick})=>{
  console.log('rendering button compo');
  return <div>
    <button onClick={onClick}>Click me</button>
  </div>
})

function App() {
  console.log("Render app")

  const[count ,setCount] = useState(0);
  const[input, setInput] = useState("");

   const   buttonClicked = useCallback( ()=>{
    setCount(count+1) }
  ,[count])

  return <div>
    <h1>Here i'm testing useCallback</h1>
    <input placeholder='text' onChange={ (e)=> {
      console.log("change of text")
      setInput(e.target.value)
    }}></input>
    <ButtonComponent onClick ={ buttonClicked} ></ButtonComponent>
  </div>
}

export default App
