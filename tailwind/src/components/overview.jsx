export const OverView = ()=>{
    return <div className="flex justify-between items-center p-5">
                <div id="overView element" className=" font-semibold">
                    Overview
                </div>
                <div className="  flex rounded border-solid border-2 pr-2 pl-2 pt-1 pb-1">
                    This Month 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                </div>
    </div>
}