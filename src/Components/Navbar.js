import React, { useState, useEffect } from 'react'
import MLCOriginal from '../Assets/MLCOriginal.png'
import {IonIcon} from "react-ion-icon";
// eslint-disable-next-line
import { Link, useLocation } from 'react-router-dom';
import Aos from 'aos'
import "aos/dist/aos.css"

const Navbar = () => {

     //This open controls the menu icon when using mobile devices
  const [open, setOpen] = useState(true)

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

 {/*const location = useLocation();
  useEffect(() => {
      // eslint-disable-next-line
     console.log(open ? 'close': setOpen(!open))
     // eslint-disable-next-line
  }, [location]);
*/}
  return (
      //Container for Navbar
    <div>
        {/*Navbar Box*/}
        <div className='bg-primary flex justify-between items-center md:px-20 px-2 text-white font-raleway md:p-0 py-2'>
            {/*Logo*/}
            <span className='md:w-[6%] w-[10%] flex font-poppins font-bold cursor-pointer items-center'>
                <img
                className='text-center'
                src={MLCOriginal}
                alt='logo'
                />
                <p className='md:mt-0 mb-1 md:mb-2'>MajorLink</p>
            </span>
          
             {/*Logo*/}

                  {/*NavLinks*/}
                   <ul className={`md:flex mt-0 justify-around font-Poppins font-thin transition-all duration-500 ease-in hidden`}>
                       <li className='mr-8 hover:underline cursor-pointer'>Products</li>
                       <li className='mr-8 hover:underline cursor-pointer'>Price</li>
                       <li className='mr-8 hover:underline cursor-pointer'>Learn</li>
                       <li className='hover:underline cursor-pointer'>Support</li>
                   </ul>
                  {/*NavLinks*/}


                        {/*Buttons*/}
                           <div className='flex md:mr-10 items-center font-poppins'>
                            <button className='md:mr-6 mr-4 hover:underline md:block hidden'>Sign In</button>
                            <button className='border-2 border-border p-1 md:px-5 px-3 rounded-md md:h-10 md:mt-0 md:mr-0 mr-6 hover:border-gray-400'>Buy Now</button>

                             {/*Menu Icon*/}
                              <span className='mt-3 text-3xl md:hidden cursor-pointer' onClick={() => setOpen(!open)}>
                                  <IonIcon name={open ? 'menu': 'close'}/>
                              </span>
                             {/*Menu Icon*/}
                           </div>
                         {/*Buttons*/}
        </div>
         {/*Navbar Box for PC*/}


            {/* Menu bar for mobile devices */}
            <div data-aos="fade-left" className='bg-white h-full text-black float-right fixed right-0 top-0 z-10  block motion-safe:animate-fadeIn'>
                 <div className={`${open ? 'hidden transition-all duration-500 ease-in': 'm-12 transition-all duration-500 ease-in'} transition-all duration-500 ease-in`}>
                        <span onClick={() => setOpen(!open)} className='pr-10 pt-10 transition-all duration-500 ease-in cursor-pointer'>
                        <ion-icon name={open ? 'menu': 'close'}></ion-icon>
                        </span>
                              <ul className={`${open ? 'hidden':'float-left pl-12 pr-16 mt-32 font-semibold text-base transition-all duration-500 ease-in'}`}>
                                <li className='cursor-pointer'> 
                                Products
                             </li>
                                <li  className='mt-10 cursor-pointer'> 
                               Price
                                </li>
                                <li  className='mt-10 cursor-pointer'> 
                                Learn
                                </li>
                                <li  className='mt-10 cursor-pointer'>
                                Support
                                </li>
                             </ul>
                             </div>
               </div>
          {/* Menu bar for mobile devices */}


    </div>
      //Container for Navbar
  )
}

export default Navbar