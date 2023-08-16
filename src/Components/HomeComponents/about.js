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
          <div className='md:p-20 pt-12 items-center justify-center px-3 bg-[#fafafa] pb-6' >
               {/*Hero Contents*/}
               {/*Hero Header TagLine with side Image*/}
               <div className='md:flex flex flex-col md:flex-row justify-center space-x-8 items-center px-10'>
                    <div className='text-[#2c3288] text-start '>
                         <h2 className='md:text-6xl text-4xl font-gilroy tracking-wide'>Trade Quick,</h2>
                         <h2 className='md:text-6xl text-4xl mt-4 font-gilroy tracking-wide'>Trade Smart with</h2>
                         <h2 className='md:text-6xl text-4xl mt-4 font-gilroy tracking-wide' data-aos="fade-up">Majorlink 🔥</h2>
                         <p className='text-[#2c3288] text-base font-aeonik text-start md:w-[66%] w-[75%] mt-8 tracking-wide' data-aos="fade-up">Start trading now to enjoy the best rates. We provide the best and fastest service across the world in swapping e-currencies.</p>


                         <div className='mt-10' data-aos="fade-up">
                              {/*   <button className='bg-[#0040E3] py-3 rounded-2xl px-5 text-white font-aeonik flex items-center space-x-3' onClick={whatsapp}>
                                   <ion-icon name="globe-outline"></ion-icon>

                                   <h1> Trade on website</h1> </button>*/}
                              <div className='flex items-center space-x-6 mt-6'>
                                   <span className='bg-[#0040E3] rounded-lg py-2 px-14 flex items-center space-x-4'>
                                        <img src={google} />
                                        <div>
                                             <p className='font-aeonik text-sm text-white'>Get it on</p>
                                             <p className='font-aeonik text-base text-white'>Play Store</p>
                                        </div>
                                   </span>
                                   <span className='bg-[#0040E3] rounded-lg py-2 px-14 flex items-center space-x-4'>
                                        <img src={apple} />
                                        <div>
                                             <p className='font-aeonik text-sm text-white'>Get it on</p>
                                             <p className='font-aeonik text-base text-white'>App Store</p>
                                        </div>
                                   </span>

                              </div>
                         </div>

                         {/*RATING*/}

                         <div className='mt-20 flex items-center'>
                              <h1 className='text-5xl text-[#150d40] font-gilroy'>4.5</h1>
                              <div>
                                   <div className='flex items-center space-x-1 ml-4 text-[#f2b12d] text-xl'>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star-half"></ion-icon>
                                   </div>
                                   <h1 className='mt-1 ml-1 text-[#919191] flex text-lg items-baseline'>/5 {" "}<p className='font-aeonik text-xs ml-2'>Google Playstore & iOS store</p></h1>
                              </div>
                         </div>

                    </div>

                    <span className='md:mt-0 mt-6' data-aos="fade-left">
                         <img
                              className='mt-[-20] w-[100%]'
                              src={bince}
                              alt='image'
                         />
                    </span>
               </div>
               {/*Hero Header TagLine with side Image*/}
               <div>

                    {/*Hero Currencies section*/}
                    <div data-aos="fade-up" className='flex items-start justify-between mt-20 font-gilroy mx-10'>
                         <div className='w-[20%]'>
                              <h1 className='text-[#2c3288] text-2xl font-gilroy'>$200 Million</h1>
                              <p className='text-[#2c3288] text-sm mt-1 font-aeonik'>Majorlink's daily trade volume.</p>
                         </div>
                         <div className='w-[20%]'>
                              <h1 className='text-[#2c3288] text-2xl font-gilroy'>200K</h1>
                              <p className='text-[#2c3288] text-sm mt-1 font-aeonik'>Our growing user base.</p>
                         </div>
                         <div className='w-[20%]'>
                              <h1 className='text-[#2c3288] text-2xl font-gilroy'>10 Min</h1>
                              <p className='text-[#2c3288] text-sm mt-1 font-aeonik'>Average completion time.</p>
                         </div>
                         <div className='w-[20%]'>
                              <h1 className='text-[#2c3288] text-2xl font-gilroy'>99.9%</h1>
                              <p className='text-[#2c3288] text-sm mt-1 font-aeonik'>Guaranteed uptime.</p>
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