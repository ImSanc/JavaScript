import { useState } from "react";
import { Button } from "../components/Button";

export function BackgroundComp(){
    const [color,setColor] = useState("white");
    
    function changeBackGround(color){
        setColor(color);
    }

    return (
        <div className={`bg-${color}-500 h-screen w-screen flex flex-col justify-between`}>
            <div className="flex-grow"></div> 
            <div className="flex justify-between px-20 py-4 mx-16 mb-4 bg-white shadow-xl rounded-lg w-[100%] sm:w-[50%] md:w-[90%] ">
                <Button color={"red"} changeBackGround={changeBackGround}/>
                <Button color={"green"} changeBackGround={changeBackGround}/>
                <Button color={"gray"} changeBackGround={changeBackGround}/>
                <Button color={"yellow"} changeBackGround={changeBackGround}/>
                <Button color={"orange"} changeBackGround={changeBackGround}/>
                <Button color={"blue"} changeBackGround={changeBackGround}/>
                <Button color={"purple"} changeBackGround={changeBackGround}/>
                <Button color={"white"} changeBackGround={changeBackGround}/>
        
            </div>
        </div>
    )
}