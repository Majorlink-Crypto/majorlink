import React, { useState, useEffect } from 'react'
import MLCOriginal from '../Assets/icon.png'
import { IonIcon } from "react-ion-icon";
// eslint-disable-next-line
import { Link } from 'react-router-dom';
import Aos from 'aos'
import "aos/dist/aos.css"

const Navbar = () => {

  //This open controls the menu icon when using mobile devices
  const [open, setOpen] = useState(true)

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  {/*const location = useLocation();
  useEffect(() => {
      // eslint-disable-next-line
     console.log(open ? 'close': setOpen(!open))
     // eslint-disable-next-line
  }, [location]);
*/}
  const whatsapp = () => {
    window.open(`https://wa.me/+905338239262?text=Hello,%20Majorlink%20I%20will%20like%20to%20trade%20my%20to%20cryptocurrency%20&%20giftcards%20`, "_blank")
  }
  return (
    //Container for Navbar
    <div>
      {/*Navbar Box*/}
      <div className='pt-6 pb-5 bg-[#4B5DFF] border-b-[#7D89F3] border-b flex justify-between items-center md:px-20 px-4  text-white fixed w-[100%] z-10'>
        {/*Logo*/}
        <span className='md:w-[28%] w-[27%] flex cursor-pointer items-center'>
          <Link to={'/'} className='flex items-center space-x-2'>
            <img
              className='text-center w-7'
              src={MLCOriginal}
              alt='logo'
            />
            <h1 className='font-grifter text-lg mt-1 tracking-wide text-[#ffffff]'>Majorlink</h1>
          </Link>

        </span>
        {/*Logo*/}

        {/*NavLinks*/}
        <ul className={`md:flex mt-0 font-aeonikmedium text-sm transition-all duration-500 ease-in hidden`}>
          <li className='mr-12 hover:text-black cursor-pointer'><Link to={'/'}>Features</Link></li>
          <li className='mr-12 hover:text-black cursor-pointer'><Link to={'/'}>About</Link></li>
          <li className='mr-12 hover:text-black cursor-pointer'><Link to={'/'}>Blog</Link></li>
          <li className='mr-12 hover:text-black cursor-pointer'><Link to={'/'}>FAQs</Link></li>
          <li className='mr-12 hover:text-black cursor-pointer'><Link to={'/'}>Contact</Link></li>
          <li className='hover:text-black cursor-pointer' onClick={whatsapp}>Support</li>
        </ul>
        {/*NavLinks*/}
        <div className='flex items-center space-x-4'>


          {/*Buttons*/}
          <div className='flex md:mr-0 items-center font-aeonikmedium text-sm'>
            <button onClick={whatsapp} className=' text-black bg-[#fff]  md:block hidden p-1 md:px-8 px-6 rounded-full md:h-10 md:mt-0 md:mr-0  hover:border-gray-400'>Trade now</button>

            {/*Menu Icon*/}
            <span className='mt-3 text-3xl md:hidden cursor-pointer' onClick={() => setOpen(!open)}>
              <IonIcon name={open ? 'menu' : 'close'} />
            </span>
            {/*Menu Icon*/}
          </div>
          {/*Buttons*/}
        </div>
      </div>
      {/*Navbar Box for PC*/}


      {/* Menu bar for mobile devices */}
      <div data-aos="fade-left" className='bg-[#4B5DFF] h-full text-[#fff] float-right fixed right-0 top-0 z-10  block motion-safe:animate-fadeIn w-[100%] md:hidden'>
        <div className={`${open ? 'hidden transition-all duration-500 ease-in' : 'm-12 transition-all duration-500 ease-in'} transition-all duration-500 ease-in`}>
          <div className='flex items-center justify-between'>
            <Link to={'/'} className='flex items-center space-x-2'>
              <img
                className='text-center w-7'
                src={MLCOriginal}
                alt='logo'
              />
              <h1 className='font-grifter text-lg mt-1 tracking-wide text-[#ffffff]'>Majorlink</h1>
            </Link>
            <span onClick={() => setOpen(!open)} className='transition-all duration-500 ease-in cursor-pointer text-3xl'>
              <ion-icon name={open ? 'menu' : 'close'}></ion-icon>
            </span>
          </div>
          <div className='flex flex-col items-center justify-center text-center mt-20 space-y-10'>
            <ul className={`${open ? 'hidden' : 'float-left font-aeonikmedium text-lg transition-all duration-500 ease-in space-y-10'}`}>
              <li className='hover:text-black cursor-pointer'><Link to={'/'}>Features</Link></li>
              <li className='hover:text-black cursor-pointer'><Link to={'/'}>About</Link></li>
              <li className='hover:text-black cursor-pointer'><Link to={'/'}>Blog</Link></li>
              <li className='hover:text-black cursor-pointer'><Link to={'/'}>FAQs</Link></li>
              <li className='hover:text-black cursor-pointer'><Link to={'/'}>Contact</Link></li>
              <li className='hover:text-black cursor-pointer' onClick={whatsapp}>Support</li>
            </ul>
            <button onClick={whatsapp} className=' text-black bg-[#fff] py-4 md:px-8 px-12 rounded-full md:h-10 md:mt-0 md:mr-0 mr-6 hover:border-gray-400'>Trade now</button>
          </div>
        </div>
      </div>
      {/* Menu bar for mobile devices */}


    </div>
    //Container for Navbar
  )
}

export default Navbar