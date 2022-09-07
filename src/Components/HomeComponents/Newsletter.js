import React from 'react'

const Newsletter = () => {
  return (
      //Container
    <div className='md:m-20 md:mt-0 mt-20 md:mx-0 mx-1'>
        <div className='md:m-20 bg-newsletter bg-cover md:p-10 p-6 rounded-md '>
             {/*Header*/}
                 <div className='md:w-[40%]'>
                 <h1 className='text-white text-3xl'>Subscribe to newsletter</h1>
                 </div>

                 <p className='text-border text-sm font-poppins'>Recieve latest news and updates from us and amazing offers</p>

                 <div className='font-gilroy mt-8 flex mb-10'>
                     <input className='p-2 rounded-md mr-8 md:w-[40%] w-[65%]' placeholder='email'>
                     </input>

                     <button className='bg-white text-black p-2 rounded-md font-bold font-poppins md:px-10'> Subscribe</button>
                 </div>
              {/*Header*/}
        </div>
    </div>
     //Container
  )
}

export default Newsletter