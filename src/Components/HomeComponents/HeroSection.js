import React, { useState, useEffect } from 'react'
import arrowright from '../../Assets/arrowright.png'
import Bitcoin from '../../Assets/Bitcoin.png'
import Ethereum from '../../Assets/Ethereum.png'
import Tether from '../../Assets/Tether.png'
import MLCOriginal from '../../Assets/blackicon.png'
import Aos from 'aos'
import "aos/dist/aos.css"
import bince from '../../Assets/bince.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { IonIcon } from "react-ion-icon";
import { toast } from 'react-toastify'
import apple from '../../Assets/apple.png'
import google from '../../Assets/google.png'

import '../../Assets/Styles/hero.css'


const HeroSection = () => {

     const [name, setname] = useState('')

     const whatsapp = () => {
          window.open(`https://wa.me/+905338239262?text=Hello,%20I%20am%20and%20I%20will%20like%20to%20start%20trading%20with%20Majorlink%20`, "_blank")
     }

     const devDate = (timestamp) => {
          const date = new Date(timestamp);
          const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec']

          const hour = date.getHours() % 12 || 12;

          return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${hour}:${date.getMinutes()}${hour >= 12 ? "PM" : "AM"}.`;

     }

     const [services, setServices] = useState([]);

     useEffect(() => {
          Aos.init({ duration: 1000 });

          const init = async () => {
               axios.defaults.baseURL = "https://main.majorlink.co/api"

               const res = await axios.get('/services/list', {
                    headers: {
                         "Content-Type": "application/json",
                         accept: "application/json"
                    }
               });

               setServices(res.data);

          }

          init();

     }, []);

     return (
          //Main Hero Container
          <div className='md:px-20 md:py-24 pt-32 items-center justify-center px-3 bg-[#4B5DFF] pb-6' >
               {/*Hero Contents*/}
               {/*Hero Header TagLine with side Image*/}
               <div className='md:flex flex flex-col md:flex-row md:justify-center md:space-x-4 md:items-center md:px-10 px-4'>
                    <div className='text-[#ffffff] md:w-[60%]'>

                         <h2 className='md:text-3xl text-xl font-grifter tracking-wide md:mt-20 mt-10'>Trade your GiftCards & Crypto</h2>
                         <h2 className='bigtext md:text-6xl text-5xl mt-4 font-grifter tracking-wide'>Easy with Speed.</h2>
                         <p className='text-[#ffffff] text-base font-aeonikregular text-start md:w-[78%] w-[95%] mt-4 tracking-wide' data-aos="fade-up">Start trading now to enjoy the best rates. We provide the best and
                              fastest service across the world in swapping e-currencies.</p>


                         <div className='mt-10' data-aos="fade-up">
                              {/*   <button className='bg-[#0040E3] py-3 rounded-2xl px-5 text-white font-aeonik flex items-center space-x-3' onClick={whatsapp}>
                                   <ion-icon name="globe-outline"></ion-icon>

                                   <h1> Trade on website</h1> </button>*/}
                              <div className='md:flex items-center md:space-x-6 mt-6 space-y-2'>
                                   <a href='https://play.google.com/store/apps/details?id=com.olamide81.MajorlinkApp'>
                                        <span className='bg-[#fff] rounded-full md:py-4 py-4 md:px-10 px-3 flex items-center justify-center space-x-2 md:w-auto w-[58%] cursor-pointer'>
                                             <img src={google} className='h-5' />
                                             <div>
                                                  <p className='font-aeonikmedium md:text-sm text-xs text-[#4B5DFF]'>Play Store</p>
                                             </div>
                                        </span>
                                   </a>
                                   <a href='https://apps.apple.com/us/app/majorlink/id6472656224'>
                                        <span className='bg-[#fff] rounded-full md:mt-0 mt-4 md:py-4 py-4 md:px-10 px-3 flex items-center justify-center space-x-2 md:w-auto w-[56%] cursor-pointer'>
                                             <img src={apple} className='h-5' />
                                             <div>
                                                  <p className='font-aeonikmedium md:text-sm text-xs text-[#4B5DFF]'>App Store</p>
                                             </div>
                                        </span>
                                   </a>

                              </div>
                         </div>

                         {/*RATING*/}

                         <div className='md:mt-20 mt-14 flex items-center'>
                              <h1 className='text-5xl text-[#edefff] font-grifter'>4.5</h1>
                              <div>
                                   <div className='flex items-center space-x-1 ml-4 text-[#E8D20E] text-xl'>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star-half"></ion-icon>
                                   </div>
                                   <h1 className='mt-1 ml-1 text-[#DBDEF9] flex text-lg items-baseline font-grifter'>/5 {" "}<p className='font-aeonik text-xs ml-2'>Google Playstore & iOS store</p></h1>
                              </div>
                         </div>

                    </div>

                    <span className='md:mt-0 mt-6 md:w-[40%]' data-aos="fade-left">
                         <img
                              className='mt-[-20] w-[90%] md:flex hidden'
                              src={bince}
                              alt='image'
                         />
                    </span>
               </div>
               {/*Hero Header TagLine with side Image*/}
               <div className='absolute w-[90%] md:block hidden'>

                    {/*Hero Currencies section*/}
                    <div className='flex items-start justify-between rounded-2xl mt-14 bg-[#F9F9FE] font-gilroy mx-6 py-10 px-10 z-10'>
                         <div className='w-[20%]'>
                              <h1 className='text-[#4354ED] text-2xl font-grifter'>$200k</h1>
                              <p className='text-[#5B64AF] text-sm mt-1 font-aeonikmedium'>Majorlink's daily trade volume.</p>
                         </div>
                         <div className='w-[20%]'>
                              <h1 className='text-[#4354ED] text-2xl font-grifter'>4.5K</h1>
                              <p className='text-[#5B64AF] text-sm mt-1 font-aeonikmedium'>Our growing user base.</p>
                         </div>
                         <div className='w-[20%]'>
                              <h1 className='text-[#4354ED] text-2xl font-grifter'>10 Min</h1>
                              <p className='text-[#5B64AF] text-sm mt-1 font-aeonikmedium'>Average completion time.</p>
                         </div>
                         <div className='w-[20%]'>
                              <h1 className='text-[#4354ED] text-2xl font-grifter'>99.9%</h1>
                              <p className='text-[#5B64AF] text-sm mt-1 font-aeonikmedium'>Guaranteed uptime.</p>
                         </div>

                    </div>
                    {/*Hero Currencies section*/}
               </div>
               {/*Hero Contents*/}
          </div>
          //Main Hero Container
     )
}

export default HeroSection