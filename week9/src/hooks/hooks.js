import axios from "axios";
import { useEffect, useState } from "react";

export function UseTodos(n){
    const [todos,setTodos] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect( () =>{

        //Generic way for clearing interval as it gives us a number which we use to clear on clean up function
        const interval = setInterval(()=>{
            axios.get("http://localhost:3000/api/v1/todos/getTodos")
            .then(res =>{
                setLoading(false);
                setTodos(res.data.todos);
            
            }) 
        },n*1000);

        //Need to run the request atleast once before it is called again otherwise it will keep loading till the first interval
        axios.get("http://localhost:3000/api/v1/todos/getTodos")
        .then(res =>{
            setLoading(false);
            setTodos(res.data.todos);
        })
        
        //Clean up is need to make sure that there is only one interval running at an time
        return ( ()=>{
            clearInterval(interval);
        })
       
    },[n]);
    
    return {todos,loading};
}