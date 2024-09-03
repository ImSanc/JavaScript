import { useEffect } from "react";

export function useInterval(funtn,timer){

    useEffect( ()=>{

        const val = setInterval( ()=>{
            funtn();
        },timer);
        funtn();

        return ( ()=>{
            clearTimeout(val);
        })

    },[]);
}