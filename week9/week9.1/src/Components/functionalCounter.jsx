import { useState } from "react";

export function FunctionalComponent(){

    const [count,setCount] = useState(0);

    const incrementCount = () => {
        setCount(count+1);
    };

    function incrementCountfunction(){
        setCount(count+1);
    }

    return <div>
        <button onClick={incrementCountfunction}>count is {count}</button>
    </div>
}