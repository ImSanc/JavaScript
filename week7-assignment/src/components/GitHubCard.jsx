import axios from "axios";
import { useEffect, useState } from "react";

export function GitHubCard({userId}){

    const [profile,setProfile] = useState(null);
    
    useEffect(()=>{
        try{
            axios.get(`https://api.github.com/users/${userId}`)
            .then((response)=>{
                setProfile(response.data);
            })
        }
        catch(error)
        {
            setProfile(null);
        }
    },[userId]);

    if(!profile){
        return null;
    }

    return (
        <div className="flex-row row-span-1 justify-center items-center mx-auto my-10 p-2 bg-slate-400 w-[30%] h-[70%] rounded-lg border-2 shadow-lg shadow-yellow-300">
            <div className="flex justify-center items-center font-bold text-2xl">
               { profile.name}
            </div>
            <div className="flex justify-center items-center" >
                <img src = {profile.avatar_url} className=" rounded-full w-40 h-25" />
            </div>
            <div className="flex justify-center items-center p-2 text-lg font-semibold" >
               Company : { profile.company}
            </div>
            <div className="flex justify-center items-center p-2 ml-[9%]">
                {profile.bio}
            </div>
            <div className="flex justify-between items-center p-2 text-lg font-semibold" >
              <div className=" flex-row justify-between items-center p-2">
                <div className="flex justify-between items-center">
                    Followers
                </div>
                <div className="flex justify-between items-center ml-[30%] text-blue-600">
                    {profile.followers}
                </div>
              </div>
              <div className=" flex-row justify-between items-center p-2">
                <div className="flex justify-between items-center">
                    Following
                </div>
                <div className="flex justify-between items-center ml-[30%] text-blue-600">
                    {profile.following}
                </div>
              </div>
            </div>
        </div>
    )
}