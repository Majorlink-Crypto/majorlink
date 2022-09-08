import React from 'react'
import { Helmet } from 'react-helmet';
import Navbar from '../Components/Navbar';

const ErrorPage = () => {
  return (
    <div>
<Navbar/>
    <div className='mt-4 mb-4 flex flex-col items-center justify-center text-center p-20'>
      <Helmet>
        <title>404</title>
      </Helmet>
         <h2 className='text-5xl font-bold'> 404 Page Not Found </h2>
    </div>
    </div>
  )
}

export default ErrorPage