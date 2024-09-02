import { useState } from "react";

export function FunctionalComp(){
    const [count,setCount] = useState(0);

    const incrementCount = ()=>{
        setCount(count+1);
    }

    return <div>
        <p>This is functional based component</p>
        <p>count : {count}</p>
        <button onClick={incrementCount}>Increment</button>
    </div>
}