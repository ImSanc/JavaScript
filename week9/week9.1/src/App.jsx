
import React, { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [render ,setRender] = useState(true);

  useEffect(()=>{
    const interval = setInterval( ()=>{
      setRender((prevRender)=>(!prevRender));
    },2000);

    return ()=>{
      clearInterval(interval);
    }
  },[]);
  
  //{render && <MyComponent/>}
  return <>
     
    {render && <MyComponent1/>}
  </>
}

function MyComponent(){

  useEffect( ()=>{
    console.log("Component mounted");
    return ()=>{
      console.error("Component unmounted")
    }
  },[])

  return <div>
    Component
  </div>
}  

class MyComponent1 extends React.Component {

  componentDidMount(){
    console.log("Component mounted");
  }

  componentWillUnmount(){
    console.error("Component unmounted");
  }

  render() {
    return <div>
      hi there
    </div>
  }
}

export default App
