
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { UseTodos } from './hooks/hooks';
import { useOnline } from './hooks/onlineHook';
import { useMouseHook } from './hooks/isMouseHook';
import { useDimensionHook } from './hooks/useDimensionHook';
import { useInterval } from './hooks/useInterval';
import { useDeBounce } from './hooks/useDebounce';

function App() {

  const [value,setValue] = useState("");
  const debouncedValue = useDeBounce(value,500);

  return (<div>
    <div>
      Debounce is {debouncedValue}
    </div>
    <div>
      <input type='text' onChange={(e)=>{
       setValue(e.target.value);
      }}/>
    </div>
  </div>)
}


export default App
