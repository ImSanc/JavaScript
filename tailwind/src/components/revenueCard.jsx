
export const RevenueCard = ({
    title,
    amount,
    orderCount,
    isMainCard,
    payoutDate}
) => {
   return <div className= {`rounded-sm m-3 p-3  shadow-md card ${isMainCard ? 'bg-blue-700 text-white hover:bg-blue-600' : 'bg-white text-black' }`}>
        <div className = { `${isMainCard ? 'text-white' : ' text-gray-600' }`}>
            {title}
            <svg className=" h-4 w-4 inline mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>
        </div>

        <div className="flex justify-between mt-3 ">
            <div className="flex font-semibold text-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" size-5 mt-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg> {amount}
            </div>

            { (orderCount) ? <div className = {`flex underline ${isMainCard ? 'text-white' : 'text-blue-600' } text-sm`}>
                {`${orderCount} orders`}
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div>  : null } 
        </div>
         { (isMainCard) ? <div className="flex justify-between text-white bg-blue-900 p-2">
                    <div >
                        Next payout date:
                    </div> 
                    <div >
                       {payoutDate}
                    </div> 
         </div>: null}
        
    </div>
}