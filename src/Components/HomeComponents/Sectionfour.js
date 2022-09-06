import React, { useEffect } from 'react'
import transact from '../../Assets/transact.png'
import Aos from 'aos'
import "aos/dist/aos.css"

const Sectionfour = () => {
    useEffect(() => {
        Aos.init({duration: 3000});
      }, []);
  return (
         //Section Container
         <div className='md:m-20 md:mt-0 mt-10' data-aos="fade-up">

         {/*Div and contents*/}
             <div className='md:flex'>
 
                 {/*Left Image*/}
                    <div data-aos="fade-up" className='md:mx-0 mx-16'>
                        <img
                        className=''
                        src={transact}
                        alt='img'
                        />
                    </div>
                   {/*Left Image*/}
 
                    {/*Right Content*/}
                    <div className='md:p-20 p-6 mt-20' data-aos="fade-up">
                       
                        {/*Header*/}
                       <span>
                           <h2 className='text-3xl'>
                               Secured Information
                           </h2>
                       </span>
                        {/*Header*/}
 
                       <p className='font-poppins font-light'>
                       Safety, security and compliance. Buy and sell popular digital currencies, keep track of them in the one place.
                       </p>
 
                    </div>
                  {/*Right Content*/}
 
             </div>
         {/*Div and contents*/}
 
     </div>
     //Section Container
  )
}

export default Sectionfour