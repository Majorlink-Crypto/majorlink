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
          if (name === '') {
               toast.error('Please input your Name')
          } else {
               window.open(`https://wa.me/+905338239262?text=Hello,%20I%20am%20${name}%20and%20I%20will%20like%20to%20start%20trading%20with%20Majorlink%20`, "_blank")
          }
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
          <div className='md:p-20 pt-12 items-center justify-center px-3 bg-[#fff] pb-10' >
               {/*Hero Contents*/}
               {/*Hero Header TagLine with side Image*/}
               <div className='md:flex flex flex-col md:flex-row justify-center space-x-8 items-center px-10'>
                    <div className='text-[#150d40] text-start '>
                         <h2 className='md:text-6xl text-4xl font-gilroy tracking-wide'>Trade Quick,</h2>
                         <h2 className='md:text-6xl text-4xl mt-4 font-gilroy tracking-wide'>Trade Smart with</h2>
                         <h2 className='md:text-6xl text-4xl mt-4 font-gilroy tracking-wide' data-aos="fade-up">Majorlink 🔥</h2>
                         <p className='text-gray-800 text-base font-aeonik text-start md:w-[60%] w-[75%] mt-8 tracking-wide' data-aos="fade-up">Start trading now to enjoy the best rates. We provide the best and fastest service across the world in swapping e-currencies</p>


                         <div className='mt-10' data-aos="fade-up">
                              <button className='bg-[#111031] py-3 rounded-2xl px-5 text-white font-aeonik flex items-center space-x-3' onClick={whatsapp}>
                                   <ion-icon name="globe-outline"></ion-icon>

                                   <h1> Trade on website</h1> </button>
                              <div className='flex items-center space-x-6 mt-6'>
                                   <span className='bg-[#111031] rounded-lg py-2 px-10 flex items-center space-x-4'>
                                        <img src={google} />
                                        <div>
                                             <p className='font-aeonik text-sm text-white'>Get it on</p>
                                             <p className='font-aeonik text-lg text-white'>Play Store</p>
                                        </div>
                                   </span>
                                   <span className='bg-[#111031] rounded-lg py-2 px-10 flex items-center space-x-4'>
                                        <img src={apple} />
                                        <div>
                                             <p className='font-aeonik text-sm text-white'>Get it on</p>
                                             <p className='font-aeonik text-lg text-white'>App Store</p>
                                        </div>
                                   </span>

                              </div>
                         </div>

                         {/*RATING*/}

                         <div className='mt-20 flex items-center'>
                              <h1 className='text-5xl text-[#150d40] font-gilroy'>4.5</h1>
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
                    <div className='md:mt-40 mt-12 ml-10' data-aos="fade-up">

                         {/*Explore currencies tag and icon*/}
                         <span className='flex'>
                              <h4 className='font-gilroy text-sm hover:text-gray-500 cursor-pointer'>Explore Currencies</h4>
                              <span className='text-sm'>
                              </span>
                         </span>
                         {/*Explore currencies tag and icon*/}


                         {/*Currency cards*/}
                         <div className='md:flex font-gilroy mt-2'>

                              {services.length && (
                                   services.map((service, id) => {
                                        if (service.active) {
                                             return (<section key={id} className='bg-white shadow-sm p-3 pr-6 rounded-lg text-black md:w-[35%] md:mr-5 md:mt-0 mt-5'>

                                                  {/*Top section containing nametage, icon and rate*/}
                                                  <span className='flex justify-between mt-2'>

                                                       {/*Top section containing nametage and icon*/}
                                                       <span className='flex items-center space-x-3'>
                                                            {(service.name).toLowerCase() === 'bitcoin' && <img
                                                                 className=''
                                                                 src={Bitcoin}
                                                                 alt='icon'
                                                            />}

                                                            {(service.name).toLowerCase() === 'ethereum' && <img
                                                                 className=''
                                                                 src={Ethereum}
                                                                 alt='icon'
                                                            />}

                                                            {(service.name).toLowerCase() === 'usdt' && <img
                                                                 className=''
                                                                 src={Tether}
                                                                 alt='icon'
                                                            />}

                                                            <h2 className='font-aeonik'>{service.name}</h2>
                                                       </span>
                                                       {/*Top section containing nametage and icon*/}

                                                       {/*Top section containing rate*/}
                                                       <h4 className='animate-pulse'>{service.buy}/$</h4>
                                                       {/*Top section containing rate*/}

                                                  </span>
                                                  {/*Top section containing nametage, icon and rate*/}

                                                  {/*Down section containing trade span and date*/}
                                                  <span className='flex justify-between ml-10 items-center'>
                                                       <div>
                                                            <h2 className='text-sm font-aeonik'>{devDate(service.updated_at)}</h2>
                                                            <p className='text-green-800 font-aeonik'>Active</p>
                                                       </div>

                                                       {/*Trade Button*/}
                                                       <span className='bg-[#111031] hover:bg-green-300 px-6 py-1 rounded-lg cursor-pointer items-center justify-center flex'>
                                                            <Link to={'/checkout'} className='text-white'> Trade</Link>
                                                       </span>
                                                       {/*Trade Button*/}


                                                  </span>
                                                  {/*Down section containing trade span and date*/}

                                             </section>)
                                        } else {
                                             return null;
                                        }
                                   })
                              )}

                              {/*Bitcoin*/}
                              {/* <section className='bg-primary p-3 pr-6 rounded-lg text-white md:w-[35%] md:mr-5 md:mt-0 mt-5'>
           
                         <span className='flex justify-between'>

                              <span className='flex'>
                                   <img
                                   className=''
                                   src={Bitcoin}
                                   alt='icon'
                                   />
                                   <h2 className='drop-shadow-lg capitalize'>Bitcoin</h2>
                              </span>
                               <h4 className='animate-pulse'>680/$</h4>

                         </span>

                             <span className='flex justify-between ml-1'>
                                 <h2 className='text-sm'>May 3, 2022 1:41PM . <span className='text-green-400'>Active</span></h2>

                                  <span className='bg-green-500 hover:bg-green-300 underline px-4 rounded-lg cursor-pointer'>
                                    <Link to={'/checkout'}> TRADE</Link>
                                  </span>


                              </span>

                    </section> */}
                              {/*Bitcoin*/}


                         </div>
                         {/*Currency cards*/}

                    </div>

                    {/*Hero Currencies section*/}
               </div>
               {/*Hero Contents*/}
          </div>
          //Main Hero Container
     )
}

export default HeroSection