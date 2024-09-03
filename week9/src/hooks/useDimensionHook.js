import { useEffect, useState } from "react";

export function useDimensionHook (){
    const [dimension,setDimension] = useState( { w : 0, h : 0 } );

    const handleDimension = () => {
        setDimension( { w: window.innerWidth , h : window.innerHeight })
    }

    useEffect( ()=>{
        window.addEventListener("resize",handleDimension);

        return ( ()=>{
            window.removeEventListener("resize",handleDimension);
        })
    })

    return dimension;
}