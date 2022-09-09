import React from 'react'

const Greeting = () => {
  return (
      //Container
    <div className='md:mt-10 mt-6'>
        {/* Div */}
          <div className='md:px-20 px-6'>
              <h2 className='text-3xl'> Welcome back! Admin </h2>
              <p className='mt-3 font-gilroysemibold text-sm text-black'> Here is a summary of all your sites information</p>
              <input className='w-[50%] p-3 border-2 border-border rounded-md mt-6 font-gilroysemibold text-sm' placeholder='search' />
          </div>
         {/* Div */}
    </div>
     //Container
  )
}

export default Greeting