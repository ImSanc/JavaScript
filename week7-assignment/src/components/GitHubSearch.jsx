import { useState } from "react"
import { GitHubCard } from "./GitHubCard";

export function Search(){

    const [profile,setProfile] = useState("");
    const [visible,setVisible] = useState(false);

    return (
        <div className="flex-row justify-center items-center mx-52 mt-10">
            <div className="flex justify-center items-center">
                <input placeholder="Enter git-hub username" type='text' className=" rounded-lg border-2 border-solid w-full flex justify-center items-center p-3 mr-4" 
                onBlur={(e)=>{
                    setProfile(e.target.value);
                  
                }} onChange={()=>{
                    setVisible(false)
                }} >
                </input>
                <button className="bg-slate-800 w-24 h-12 text-white rounded-lg" onClick={ ()=>{
                    setVisible(true);
                }}>Generate</button>
            </div>
            <div>
            { visible && <GitHubCard userId={profile}></GitHubCard> }
            </div>
        </div>
    )
}