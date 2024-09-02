import { useEffect } from "react";

export function FunctionalEffect(){

    useEffect( ()=>{
        console.log("Component had mounted");

        return () => {
            console.log("Component has been unmounted");
        }
    },[]);

    return <div>
            This is an Functional Component
        </div>
}