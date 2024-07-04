import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Header title = "Sanchit" ></Header>
     <Header title = "Sanchit" ></Header>
     </div>
  )
}

function Header(props)
{
  return (<div>
    <h1>{props.title}</h1>
  </div>)
}

export default App
