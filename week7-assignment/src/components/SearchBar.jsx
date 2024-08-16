import { useState } from "react";

export function SearchBar(){

    const words = ['I','am','Sanchit','Mishra','!Sup'];
    const [paragraph,setParagraph] = useState("");
    const [count,setCount] = useState(0);

    function generateWords(count){
        const index = 5;
        let para = '';
        for( let i=0; i<count; i++ ){
            para+=words[ (i+index)%index ];
            para+=' ';
        }

        setParagraph(para);
    }

    return (
        <div className=" flex-col col-span-1 justify-between  items-center mx-52 ">
            <div className=" flex justify-between  items-center  ">
                <input type='text' className="p-3 w-full m-3 border-solid border-2 rounded-lg" placeholder="Enter Number of Words" onChange={ (e)=>{
                    setCount(e.target.value);
                }} />
                <button className="flex justify-center items-center text-white rounded-xl w-28 h-10 p-2 bg-slate-800" onClick ={()=>{
                    generateWords(parseInt(count));
                }}>
                    Generate 
                </button>
            </div>
            <div className="flex-col justify-center items-center mx-52">
                <p className=" rounded-xl w-full h-full p-2 text-lg ">
                    {paragraph}
                </p>
            </div>  
        </div>
    )
}