
import { useEffect, useState } from 'react'
import './App.css'
import { MyComponent } from './components/ClassBasedComp'
import { FunctionalComp } from './components/FunctionalComp'
import { FunctionalEffect } from './components/FunctionalEffect'
import { ClassBasedEffect } from './components/ClassBasedEffect'

function App() {

  const [showComp,setShowComp] = useState(true);

  useEffect( ()=>{
    const timer = setTimeout( ()=>{
      setShowComp(!showComp);
    },5000);

    return () => {
      clearTimeout(timer);
    }
  
  },[])
 
  return (
    <>
      { showComp && <ClassBasedEffect />}
    </>
  )
}

export default App
