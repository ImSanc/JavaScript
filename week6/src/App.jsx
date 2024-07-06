import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState("Sanchit")

  function changeHeader()
{
  const random = Math.random();
  setTitle(random);
}

  return (
    <div>
     <button onClick= { changeHeader} >Click on me to change the title </button>
     <Header title = {title} ></Header>
     <Header title = "Sanchit" ></Header>
     <Header title = "Sanchit" ></Header>
     <Header title = "Sanchit" ></Header>
     <Header title = "Sanchit" ></Header>
     <Header title = "Sanchit" ></Header> 
     </div>
  )
}



const Header = React.memo(function Header(props)
{
  return (<div>
    <h1>{props.title}</h1>
  </div>)
})

export default App
