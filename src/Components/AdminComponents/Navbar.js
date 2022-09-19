import React, { useState, useEffect } from 'react'
import MLCOriginal from '../../Assets/MLCOriginal.png'
import {IonIcon} from "react-ion-icon";
// eslint-disable-next-line
import { Link, useNavigate} from 'react-router-dom';
import Aos from 'aos'
import "aos/dist/aos.css"

const Navbar = () => {

  const navigate = useNavigate()

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

const logout = () => {
  localStorage.clear()
   navigate('/adminye')
}
  return (
      //Container for Navbar
    <div>
        {/*Navbar Box*/}
        <div className=' bg-white flex justify-between items-center md:px-20 px-4  text-black font-raleway md:p-2 py-2'>
            {/*Logo*/}
            <span className='md:w-[10%] w-[27%] flex font-poppins font-bold cursor-pointer items-center'>
                <Link to={'/'}>
                <img
                className='text-center'
                src={MLCOriginal}
                alt='logo'
                />

                </Link>
          
            </span>
             {/*Logo*/}

                  {/*NavLinks*/}
                   <ul className={`md:flex mt-0 font-gilroysemibold font-semibold text-sm transition-all duration-500 ease-in hidden`}>
                       <li className='mr-8 hover:text-primary cursor-pointer'> <Link to={'/admindashboard'}>Dashboard</Link> <span className='bg-primary p-1 rounded-lg text-white'>Home</span> </li>
                       <li className='mr-8 hover:text-primary cursor-pointer'><Link to={'/services'}>Services</Link></li>
                       <li className='mr-8 hover:text-primary cursor-pointer'><Link to={'/construction'}>Email</Link></li>
                       <li className='mr-8 hover:text-primary cursor-pointer'><Link to={'/construction'}>Settings</Link></li>
                       <li className='hover:text-primary cursor-pointer'><Link to={'www.tawk.to'}>Support</Link></li>
                   </ul>
                  {/*NavLinks*/}


                        {/*Buttons*/}
                           <div className='flex md:mr-10 items-center font-gilroysemibold text-sm'>
                            <button className='md:mr-6 mr-4 hover:underline md:block hidden hover:text-primary' onClick={logout}>Log out</button>
                            <button className=' text-white bg-primary  md:block hidden p-1 md:px-5 px-3 rounded-lg md:h-10 md:mt-0 md:mr-0 mr-6 hover:border-gray-400'><ion-icon name={'people-circle-outline'}></ion-icon> Profile</button>

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
            <div data-aos="fade-left" className='bg-white h-full text-black float-left fixed left-0 top-0 z-10  block motion-safe:animate-fadeIn'>
                 <div className={`${open ? 'hidden transition-all duration-500 ease-in': 'm-12 transition-all duration-500 ease-in'} transition-all duration-500 ease-in`}>
                        <span onClick={() => setOpen(!open)} className='pr-10 pt-10 transition-all duration-500 ease-in cursor-pointer'>
                        <ion-icon name={open ? 'menu': 'close'}></ion-icon>
                        </span>
                              <ul className={`${open ? 'hidden':'float-left pl-12 pr-16 mt-12 font-gilroysemibold text-base transition-all duration-500 ease-in'}`}>
                              <li className='mr-8 hover:text-primary cursor-pointer flex items-center justify-center text-2xl font-poppins'> <Link to={'/admindashboard'}> <ion-icon name={'home-outline'}></ion-icon>  Home</Link>  </li>
                              <li className='mr-8  hover:text-primary cursor-pointer mt-8 items-center justify-center text-2xl font-poppins '> <Link to={'/services'} > <ion-icon name={'bookmarks-outline'}></ion-icon>  Services </Link></li>
                            {/*  <li className='mr-8 hover:text-primary cursor-pointer mt-8  text-2xl font-poppins'> <Link to={'/construction'} > <ion-icon name={'mail-outline'}></ion-icon>  Emails </Link> </li>
                              <li className='mr-8 hover:text-primary cursor-pointer mt-8  text-2xl font-poppins'> <Link to={'/construction'} > <ion-icon name={'cog-outline'}></ion-icon>   Settings </Link> </li>
                              <li className='mr-8 hover:text-primary cursor-pointer mt-8  text-2xl font-poppins'> <Link to={'/construction'} > <ion-icon name={'ticket-outline'}></ion-icon>   Support</Link> </li>
                              <li className='mr-8 hover:text-primary cursor-pointer mt-8  text-2xl font-poppins'> <Link to={'/construction'} > <ion-icon name={'people-circle-outline'}></ion-icon>    Profile </Link> </li>*/}
                              <li className='hover:text-primary cursor-pointer mt-8  text-2xl font-poppins' onClick={logout}> <ion-icon name={'log-out-outline'}></ion-icon>   Logout</li>
                             </ul>
                             </div>
               </div>
          {/* Menu bar for mobile devices */}


    </div>
      //Container for Navbar
  )
}

export default Navbar