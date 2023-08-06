import React, { useState, useEffect } from 'react'
import MLCOriginal from '../Assets/blackicon.png'
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
    window.open(`https://wa.me/+905338239262?text=Hello,%20Majorlink%20I%20will%20like%20to%20reach%20out%20to%20the%20Support%20team`, "_blank")
  }
  return (
    //Container for Navbar
    <div>
      {/*Navbar Box*/}
      <div className='mt-3 bg-white flex justify-between items-center md:px-20 px-4  text-black font-raleway md:p-2 py-2'>
        {/*Logo*/}
        <span className='md:w-[28%] w-[27%] flex cursor-pointer items-center'>
          <Link to={'/'} className='flex items-center space-x-1'>
            <img
              className='text-center'
              src={MLCOriginal}
              alt='logo'
            />
            <h1 className='font-gilroy text-lg tracking-wide text-[#111031]'>MajorLink</h1>
          </Link>

        </span>
        {/*Logo*/}

        <div className='flex items-center space-x-6'>
          {/*NavLinks*/}
          <ul className={`md:flex mt-0 font-aeonik text-sm transition-all duration-500 ease-in hidden`}>
            <li className='mr-8 hover:text-primary cursor-pointer'><Link to={'/'}>Features</Link></li>
            <li className='hover:text-primary cursor-pointer' onClick={whatsapp}>Support</li>
          </ul>
          {/*NavLinks*/}


          {/*Buttons*/}
          <div className='flex md:mr-10 items-center font-aeonik text-sm'>
            <button className='md:mr-6 mr-4 hover:underline md:block hidden hover:text-primary'><Link to={'/about'}>Learn</Link></button>
            <button className=' text-white bg-[#0040E3]  md:block hidden p-1 md:px-8 px-6 rounded-sm md:h-10 md:mt-0 md:mr-0 mr-6 hover:border-gray-400'><Link to={'/checkout'}>Trade now</Link></button>

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
      <div data-aos="fade-left" className='bg-white h-full text-black float-right fixed right-0 top-0 z-10  block motion-safe:animate-fadeIn'>
        <div className={`${open ? 'hidden transition-all duration-500 ease-in' : 'm-12 transition-all duration-500 ease-in'} transition-all duration-500 ease-in`}>
          <span onClick={() => setOpen(!open)} className='pr-10 pt-10 transition-all duration-500 ease-in cursor-pointer'>
            <ion-icon name={open ? 'menu' : 'close'}></ion-icon>
          </span>
          <ul className={`${open ? 'hidden' : 'float-left pl-12 pr-16 mt-32 font-gilroysemibold text-base transition-all duration-500 ease-in'}`}>
            <li className='mr-8 hover:text-primary cursor-pointer'> <Link to={'/checkout'}>Buy BTC</Link> <span className='bg-primary p-1 rounded-lg text-white'>USD</span> </li>
            <li className='mr-8 hover:text-primary cursor-pointer mt-4'><Link to={'/checkout'}>Buy USDT</Link></li>
            <li className='mr-8 hover:text-primary cursor-pointer mt-4'><Link to={'/checkout'}>Sell e-currencies</Link></li>
            <li className='mr-8 hover:text-primary cursor-pointer mt-4'><Link to={'/about'}>Learn</Link></li>
            <li className='hover:text-primary cursor-pointer mt-4' onClick={whatsapp}>Support</li>
          </ul>
        </div>
      </div>
      {/* Menu bar for mobile devices */}


    </div>
    //Container for Navbar
  )
}

export default Navbar