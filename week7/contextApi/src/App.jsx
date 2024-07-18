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
  const [count,setCount] = useState(0);
  return <div>
    <CountRenderer count= {count} ></CountRenderer>
    <Button setCount={setCount} count={count}> </Button>
  </div>
}

function Button( {count , setCount})
{
  return <div>
    <button onClick={ ()=>{ 
       setCount(count+1)
    }}>Increment</button>

    <button onClick={ ()=>{ 
        setCount(count-1)
    }}>decrement</button>
  </div>
}

function CountRenderer({count}) {
  return <div>
    {count}
  </div>
}

export default App
