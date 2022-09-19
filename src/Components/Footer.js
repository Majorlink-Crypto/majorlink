import React, { useState } from 'react'
import MLCOriginal from '../Assets/MLCOriginal.png'
import { post, defaults, AxiosError } from 'axios'
import {IonIcon} from "react-ion-icon";
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify';

const Footer = () => {

  const whatsapp = () => {
    window.open("https://wa.me/+905338239262")
  }
  const instagram = () => {
    window.open("https://instagram.com/majorlink.co?igshid=YmMyMTA2M2Y=")
  }
  const twitter = () => {
    window.open("https://wa.me/+905338239262")
  }
  const facebook = () => {
    window.open("https://wa.me/+905338239262")
  }
  
  defaults.baseURL = 'https://main.majorlink.co/api';
  const { token } = JSON.parse(localStorage.getItem('user'));

  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [message, setmessage] = useState('')

  const send = async () => {
    const item = {email, message, phone}
    if(email === ''){
       toast.error('Please Fill in Email')
    }else if(phone === '') {
      toast.error('Please Fill in Phone')
    }else if (message === ''){
      toast.error('Please Fill in Message')
    }else {
      try {
        await post(`/contact_us`, item, {
          headers: {
              'Content-Type': 'application/json',
          }
        });
        toast.success(`Message sent successfully`);
        
      }catch (err) {
        if(err.response){
          toast.error("something went wrong, please check that your email is correct and try again");
        }  
      }
    }
  }
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
                    <span className='mr-3 cursor-pointer' onClick={whatsapp}>
                    <IonIcon name='logo-whatsapp'/>
                    </span>
                    <span className='mr-3 cursor-pointer' onClick={instagram}>

                     <IonIcon name='logo-instagram'/>
                    </span>
                     <span className='mr-3 cursor-pointer' onClick={twitter}>

                     <IonIcon name='logo-twitter'/>
                     </span>
                     <span className='mr-3 cursor-pointer' onClick={facebook}>

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
                   <li className='cursor-pointer hover:text-primary'><Link to={'/about'}>Who we are</Link></li>
                   <li className='cursor-pointer hover:text-primary'>Terms & Conditions</li>
                   <li className='cursor-pointer hover:text-primary'>Privacy policy</li>
                 </ul>
               </div>
                 {/* Center */}

                   {/* Right */}
                   <div className='text-sm font-gilroysemibold md:mr-20 mr-0 md:block hidden'> 
                 <h2 className='text-primary'>Quick Links</h2>

                 <ul className='mt-2'>
                 <li className='cursor-pointer hover:text-primary'><Link to={'/checkout'}>Buy Btc</Link></li>
                 <li className='cursor-pointer hover:text-primary'><Link to={'/checkout'}>Buy USDT</Link></li>
                   <li className='cursor-pointer hover:text-primary'><Link to={'/checkout'}>Sell Btc</Link></li>
                   <li className='cursor-pointer hover:text-primary'><Link to={'/checkout'}>Sell USDT</Link></li>
                 </ul>
               </div>
                    {/* Right */}

                      {/* Right */}
                   <div className='text-sm font-gilroysemibold md:mr-10 mr-0'> 
                 <h2 className='text-primary'>Contact Us</h2>

                 <ul className='mt-2'>
                 <li className='cursor-pointer hover:text-primary'>+905338239262</li>
                   <li className='cursor-pointer hover:text-primary'>+2349071504491</li>
                   <li className='cursor-pointer hover:text-primary'>contact@majorlink.co</li>
                 </ul>
               </div>
                    {/* Right */}
               </div>


                     {/* Contact Support */}
                     <div className='text-sm font-gilroysemibold md:mt-0 mt-10 md:pb-0 pb-4 flex flex-col'> 
                 <h2 className='text-primary'>Contact Us</h2>
                 <p className='text-gray-300'>Please drop a message and we will get back to you</p>
                       <input className='md:w-[80%] w-[90%] p-2 mt-2 border-primary border-2 rounded-md' placeholder='Email address' value={email} onChange={(e) => setemail(e.target.value)}/>
                       <input className='md:w-[80%] w-[90%]  p-2 mt-2 border-primary border-2 rounded-md' placeholder='Phone number'  value={phone} onChange={(e) => setphone(e.target.value)}/>
                       <textarea className='md:w-[80%] w-[90%]  p-2 mt-2 border-primary border-2 rounded-md' placeholder='Message'  value={message} onChange={(e) => setmessage(e.target.value)}/>
                       <button className='mt-3 p-3 bg-primary text-white rounded-md' onClick={send}> Send message</button>
               </div>
                      {/* Contact Support */}
                      
         </div>
         {/* Footer Content */}
    </div>
     //Main Container
  )
}

export default Footer