import axios from "axios";
import { useEffect, useState } from "react";

export function UseTodos(){
    const [todos,setTodos] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect( () =>{
      axios.get("http://localhost:3000/api/v1/todos/getTodos")
      .then(res =>{
       
        setTimeout( () => {
            setLoading(false);
            setTodos(res.data.todos);
        },2000);
       
      })
    },[]);
    
    return {todos,loading};
}