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
                <div className='md:mr-10 mr-0'>
                     {/* Logo  */}
                    <section className='flex'>
                        <img
                        className=''
                        alt=''
                        src={MLCOriginal}
                        />
                    </section>
                     {/* Logo */}
                     
                     <section className='flex mt-6 text-black text-xl'>
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
                     <h2 className='mt-3 text-start font-gilroysemibold text-sm text-gray-400'> Majorlink © 2022</h2>
                </div>
              {/* Logo and social media icons */}


               <div className='flex justify-between md:mt-0 mt-6 '>

               {/* Center */}
               <div className='text-sm font-gilroysemibold md:mr-20 mr-0'> 
                 <h2 className='text-primary'>About us</h2>

                 <ul className='mt-2'>
                   <li className='cursor-pointer hover:text-primary'>Who we are</li>
                   <li className='cursor-pointer hover:text-primary'>Partners</li>
                   <li className='cursor-pointer hover:text-primary'>Careers</li>
                   <li className='cursor-pointer hover:text-primary'>Terms & Conditions</li>
                   <li className='cursor-pointer hover:text-primary'>Privacy policy</li>
                 </ul>
               </div>
                 {/* Center */}

                   {/* Right */}
                   <div className='text-sm font-gilroysemibold md:mr-20 mr-0'> 
                 <h2 className='text-primary'>Quick Links</h2>

                 <ul className='mt-2'>
                 <li className='cursor-pointer hover:text-primary'>Buy Btc</li>
                   <li className='cursor-pointer hover:text-primary'>Sell Btc</li>
                   <li className='cursor-pointer hover:text-primary'>Log in</li>
                   <li className='cursor-pointer hover:text-primary'>Create acount</li>
                 </ul>
               </div>
                    {/* Right */}

                      {/* Right */}
                   <div className='text-sm font-gilroysemibold md:mr-10 mr-0'> 
                 <h2 className='text-primary'>Tools</h2>

                 <ul className='mt-2'>
                 <li className='cursor-pointer hover:text-primary'>Rates Calculator</li>
                   <li className='cursor-pointer hover:text-primary'>How to trade ?</li>
                   <li className='cursor-pointer hover:text-primary'>How to use Trust wallet</li>
                 </ul>
               </div>
                    {/* Right */}
               </div>


                     {/* Contact Support */}
                     <div className='text-sm font-gilroysemibold md:mt-0 mt-10 md:pb-0 pb-4 flex flex-col'> 
                 <h2 className='text-primary'>Contact Us</h2>
                 <p className='text-gray-300'>Please drop a message and we will get back to you</p>
                       <input className='md:w-[80%] w-[90%] p-2 mt-2 border-primary border-2 rounded-md' placeholder='Email address'/>
                       <input className='md:w-[80%] w-[90%]  p-2 mt-2 border-primary border-2 rounded-md' placeholder='Phone number'/>
                       <textarea className='md:w-[80%] w-[90%]  p-2 mt-2 border-primary border-2 rounded-md' placeholder='Message'/>
                       <button className='mt-3 p-3 bg-primary text-white rounded-md'> Send message</button>
               </div>
                      {/* Contact Support */}
                      
         </div>
         {/* Footer Content */}
    </div>
     //Main Container
  )
}

export default Footer