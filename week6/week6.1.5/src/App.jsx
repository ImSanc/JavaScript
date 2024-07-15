import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react';

function App() {
  const [incomeTax , setIncomeTax] = useState(10000);
  const divRef = useRef();

  setTimeout( ()=>{
    divRef.current.innerHTML = 'your income tax is 500'
  },5000)

  return <div ref={divRef}>
    your income tax is {incomeTax}
  </div>
}

export default App
