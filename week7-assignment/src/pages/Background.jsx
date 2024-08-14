import { useState } from "react";

export function BackGround(){
    const [color,setColor] = useState("white");
    
    function changeBackGround(color){
        setColor(color);
    }

    return (
        <div className={`bg-${color}-500 h-screen w-screen flex flex-col justify-between`}>
            <div className="flex-grow"></div> 
            <div className="flex justify-between px-20 py-4 mx-16 mb-4 bg-white shadow-xl rounded-lg ">
                <button className="bg-red-500 rounded-lg p-3 w-36 mr-8 shadow-md" onClick={()=>{changeBackGround("red")}}>Red</button>
                <button className="bg-green-500 rounded-lg p-3 w-36  mr-8 shadow-md" onClick={()=>{changeBackGround("green")}}>Green</button>
                <button className="bg-gray-500 rounded-lg p-3 w-36  mr-8 shadow-md" onClick={()=>{changeBackGround("gray")}}>Gray</button>
                <button className="bg-yellow-500 rounded-lg p-3 w-36  mr-8 shadow-md" onClick={()=>{changeBackGround("yellow")}}>Yellow</button>
                <button className="bg-orange-500 rounded-lg p-3 w-36  mr-8 shadow-md" onClick={()=>{changeBackGround("orange")}}>Orange</button>
                <button className="bg-blue-500 rounded-lg p-3 w-36  mr-8 shadow-md" onClick={()=>{changeBackGround("blue")}}>Blue</button>
                <button className="bg-purple-500 rounded-lg p-3 w-36  mr-8 shadow-md" onClick={()=>{changeBackGround("purple")}}>purple</button>
                <button className="bg-white-500 rounded-lg p-3 w-36  mr-8 shadow-md" onClick={()=>{changeBackGround("white")}}>Default</button>
            </div>
        </div>
    )
}