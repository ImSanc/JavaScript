
import React, { Suspense, useEffect, useState } from 'react'
import axios from 'axios'
import { useTodos } from './Hooks/useTodos'
import { useOnline } from './Hooks/useOnline';
import { useMouse } from './Hooks/useMouse';
import { useTimer } from './Hooks/useTImer';
import { useDeBounce } from '../../src/hooks/useDebounce';

function App() {

  const [value,setValue] = useState("");
  const debouncedValue = useDeBounce(value,500);
  console.log("component rerender "+ value);
  return <div>
    <input type='text' placeholder='Enter value' onChange={(e)=>{setValue(e.target.value) }}></input>
    <div> Here is debounced value : {debouncedValue}</div>
  </div>
}

export default App
