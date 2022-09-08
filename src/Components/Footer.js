import React from 'react'
import MLCOriginal from '../Assets/MLCOriginal.png'
import {IonIcon} from "react-ion-icon";

const Footer = () => {
  return (
      //Main Container
    <div className='font-gilroy md:p-16 p-10 bg-herosection'>
       {/* Footer Content */}
         <div className='md:flex justify-between'>
            
            {/* Logo and social media icons */}
                <div>
                     {/* Logo  */}
                    <section className='flex'>
                        <img
                        className=''
                        alt=''
                        src={MLCOriginal}
                        />
                    </section>
                     {/* Logo */}
                     
                     <section className='flex mt-6 text-primary text-xl'>
                    <span className='mr-3'>
                    <IonIcon name='logo-whatsapp'/>
                    </span>
                    <span className='mr-3'>

                     <IonIcon name='logo-instagram'/>
                    </span>
                     <span className='mr-3'>

                     <IonIcon name='logo-twitter'/>
                     </span>
                     <span className='mr-3'>

                     <IonIcon name='logo-facebook'/>
                     </span>
                     </section>
                     
                </div>
              {/* Logo and social media icons */}


               <div className='flex '>

               {/* Center */}
               <div className='text-sm font-gilroysemibold mr-20'> 
                 <h2 className='text-primary'>Center</h2>

                 <ul className='mt-3'>
                   <li className='cursor-pointer hover:text-primary'>Item one</li>
                   <li className='cursor-pointer hover:text-primary'>Item one</li>
                   <li className='cursor-pointer hover:text-primary'>Item one</li>
                   <li className='cursor-pointer hover:text-primary'>Item one</li>
                 </ul>
               </div>
                 {/* Center */}

                   {/* Right */}
                   <div className='text-sm font-gilroysemibold mr-20 '> 
                 <h2 className='text-primary'>Right</h2>

                 <ul className='mt-3'>
                 <li className='cursor-pointer hover:text-primary'>Item one</li>
                   <li className='cursor-pointer hover:text-primary'>Item one</li>
                   <li className='cursor-pointer hover:text-primary'>Item one</li>
                   <li className='cursor-pointer hover:text-primary'>Item one</li>
                 </ul>
               </div>
                    {/* Right */}

                      {/* Right */}
                   <div className='text-sm font-gilroysemibold'> 
                 <h2 className='text-primary'>Right</h2>

                 <ul className='mt-3'>
                 <li className='cursor-pointer hover:text-primary'>Item one</li>
                   <li className='cursor-pointer hover:text-primary'>Item one</li>
                   <li className='cursor-pointer hover:text-primary'>Item one</li>
                   <li className='cursor-pointer hover:text-primary'>Item one</li>
                 </ul>
               </div>
                    {/* Right */}
               </div>


                     {/* Contact Support */}
                     <div className='text-sm font-gilroysemibold float-right md:mt-0 mt-10'> 
                 <h2 className='text-primary'>Contact Us</h2>
                 <p className='text-gray-300'>Please drop a message and we will get back to you</p>
                       <input className='w-[70%] p-2 mt-2 border-primary border-2 rounded-md' placeholder='Email address'/>
                       <input className='w-[70%] p-2 mt-2 border-primary border-2 rounded-md' placeholder='Phone number'/>
                       <textarea className='w-[70%] p-2 mt-2 border-primary border-2 rounded-md' placeholder='Message'/>
               </div>
                      {/* Contact Support */}

         </div>
         {/* Footer Content */}

        <h2 className='mt-10 text-center font-gilroysemibold text-sm'> Majorlink © 2022</h2>
    </div>
     //Main Container
  )
}

export default Footer