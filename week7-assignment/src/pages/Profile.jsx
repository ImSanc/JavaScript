export function Profile(){
    return (
        <div className='flex justify-center items-center h-screen'>
       <div className=' font-bold h-[90%] w-[90%] sm:w-[70%] sm:h-[70%] md:w-[30%] md:h-[60%] shadow-lg border-solid rounded-md'>
          <div className='bg-seaGreen h-[30%] w-[100%] flex justify-center relative z-10'>
            <div className=' flex justify-center items-center  border-2 border-transparent shadow-glow'>
              <img src ="../img.jpeg" className = ' w-52 h-52 rounded-full  absolute mt-32 '/>
            </div>
          </div>
          <div className='bg-white flex-grow h-[70%] w-[100%] '>
            <div className='border-b-2 border-b-gray-200 px-10 pb-8'>
                <div className='flex justify-center items-center font-semibold text-xl pt-28'>
                  <div className="mx-3">
                    Sanchit Mishra
                  </div>
                  <div className='text-gray-400'>
                    24
                  </div>
                </div>
                <div className='flex justify-center items-center font-medium text-gray-400'>
                  London
                </div>
            </div>
            <div className='flex justify-between px-10 pt-6'>
              <div>
                <div className='flex justify-center items-center'>
                  80K
                </div>
                <div className='font-medium text-gray-400'>
                  Followers
                </div>
              </div>
              <div>
                <div className='flex justify-center items-center'>
                  803K
                </div>
                <div className='font-medium text-gray-400'>
                  Likes
                </div>
              </div>
              <div>
                <div className='flex justify-center items-center'>
                  1.4K
                </div>
                <div className='font-medium text-gray-400'>
                  Photos
                </div>
              </div>
            </div>
          </div>
       </div>
    </div>
    )
}