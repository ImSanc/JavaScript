import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count,setCount] = useState(0);
  const [num ,setNum] = useState(0);
  console.log(num);
  function onNumberChange(e)
  {
    setNum(e.target.value);
  }

  function onClickOfCounter()
  {
    setCount(count+1);
  }

  function Sumdisplay( {num} )
  {
    let total = 0;
    while(num>0)
      {
        total+=num;
        --num;
      }
    return <div> <p>Sum is {total}</p>
    </div>
  }

  function CounterButton( {count} )
  {
    return <div>
    <button onClick={onClickOfCounter}>Counter {count}</button>
    </div>
  }

  return <div>
    <input type="text" placeholder='0' onChange={onNumberChange}></input>
    <Sumdisplay num = {parseInt( num)}></Sumdisplay>
    <CounterButton count ={count}></CounterButton>
  </div>
}

export default App
