export function Button({color,changeBackGround}){

    console.log(color);
    return (
            <button className={`bg-${color}-500 rounded-lg p-3 w-36 mr-8 shadow-md`} onClick={()=>{changeBackGround(color)}}>
               { color[0].toUpperCase()+color.slice(1,color.length)}
            </button>
    )
}