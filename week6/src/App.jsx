import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

 
  return (
    <>
     <HeaderWithButton></HeaderWithButton>
     <Header title = "Sanchit" ></Header>
     </>
  )
}

function HeaderWithButton() {
  const [title, setTitle] = useState("Sanchit")

  function changeHeader() {
    const random = Math.random();
    setTitle(random);
  }

  return (
    <>
    <button onClick= { changeHeader} >Click on me to change the title </button>
     <Header title = {title} ></Header>
    </>
  )
}



function Header(props)
{
  return (<div>
    <h1>{props.title}</h1>
  </div>)
}

export default App
