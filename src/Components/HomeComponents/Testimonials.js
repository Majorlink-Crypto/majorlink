import React, { useEffect } from 'react'
import testimonialm from '../../Assets/Testimonialm.png'
import Aos from 'aos'
import "aos/dist/aos.css"

const Testimonials = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
      }, []);
  return (
      //Container
    <div className='md:pt-2 pt-10 pb-3 bg-herosection md:block hidden'>
        {/* div */}
             <div className='flex flex-col md:p-10 p-4 text-center items-center justify-center'>
                 {/*Header*/}
                     <h2 className='md:text-4xl text-3xl'>What people say about us</h2>
                     <h2 className='text-border font-gilroy text-sm'>Our review rate is amazing</h2>
                  {/*Header*/}

                      {/*Image*/}
                     <div className='mt-10' data-aos="fade-up">
                         <img
                         className=''
                         src={testimonialm}
                         alt=''
                         />
                     </div>
                  {/*Image*/}
             </div>
         {/* div */}
    </div>
     //Container
  )
}

export default Testimonials