import { useEffect, useState } from "react";

export function useOnline(){
    const [isOnline,setIsOnline] = useState(window.navigator.onLine);

    useEffect( ()=>{

        setInterval(()=>{

            const onlineEventListener =  window.addEventListener('online', ()=>{
                setIsOnline(true);
                console.log('Became online');
            });
    
            const offlineEventListener = window.addEventListener('offline', ()=>{
                setIsOnline(false);
                console.log('Became offline');
            });

            return ( ()=>{
                document.removeEventListener("online",onlineEventListener);
                document.removeEventListener("offline",offlineEventListener);
            })
    
        },5000);
    },[]);

    return isOnline;
}