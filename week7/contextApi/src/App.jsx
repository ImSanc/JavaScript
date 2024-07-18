import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from './context';
import { useContext } from 'react';

function App() {
  const [count,setCount] = useState(0);
  return <div>
    <CountContext.Provider value={ {count,setCount}}>
    <Count ></Count>
    </CountContext.Provider>
    </div>
}

function Count( ) {
  return <div>
    <CountRenderer ></CountRenderer>
    <Button> </Button>
  </div>
}

function Button()
{
  const {count,setCount} = useContext(CountContext)
  return <div>
    <button onClick={ ()=>{ 
       setCount(count+1)
    }}>Increment</button>

    <button onClick={ ()=>{ 
        setCount(count-1)
    }}>decrement</button>
  </div>
}

function CountRenderer() {

  const {count} = useContext(CountContext)
  return <div>
    {count}
  </div>
}

export default App
