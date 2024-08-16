import classNames from "classnames"

export function Button({color,changeBackGround}){

    const colorClasses = {
        red : 'bg-red-500',
        green : 'bg-green-500',
        purple : 'bg-purple-500',
        blue : 'bg-blue-500',
        orange : 'bg-orange-500',
        gray : 'bg-gray-500',
        yellow : 'bg-yellow-500',
        default : 'bg-white',
    }

    return (
            <button className={classNames(
                colorClasses[color],
                'rounded-lg p-3 w-36 mr-8 shadow-md'
            )} onClick={()=>{changeBackGround(color)}}>
               { color[0].toUpperCase()+color.slice(1,color.length)}
            </button>
    )
}