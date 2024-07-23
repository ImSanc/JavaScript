export const Orders = ({orders})=>{
    return <div className="bg-white m-6">
        <div className="flex justify-between">
            <div className="flex justify-strech border-solid border-2 rounded m-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="gray" className="h-6 w-6 mr-1 inline text-center">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input className="  text-center inline focus:outline-none p-1 w-full pr-40" type="text" placeholder="Order ID or Transaction ID" />
            </div>
            <div className="flex">
                <div className="flex p-2 m-2 border-solid border-2 rounded">
                    Sort 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                    </svg>
                </div>

                <div className="flex p-2 m-2 border-solid border-2 rounded">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                   </svg>
                </div>
            </div>
        </div>
    </div>
}