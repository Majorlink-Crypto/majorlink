import React from 'react'
import { Helmet } from 'react-helmet';
import Navbar from '../Components/Navbar';

const Unauthorized = () => {
  return (
    <div>
<Navbar/>
    <div className='mt-4 mb-4 flex flex-col items-center justify-center text-center p-20'>
      <Helmet>
        <title>Unauthorized</title>
      </Helmet>
         <h2 className='text-5xl font-bold'> You are Unauthorized to view this page, Please log in</h2>
    </div>
    </div>
  )
}

export default Unauthorized