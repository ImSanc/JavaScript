import { useEffect, useState } from "react";

export function useDeBounce(value,timer){
    const [debounce , setDebounce] = useState(value);

    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            setDebounce(value);
        },timer);

        return(()=>{
            clearTimeout(timeOut);
        })
    },[value,timer]);
    return debounce;
}