import React, { useState, useEffect } from 'react'
import arrowright from '../../Assets/arrowright.png'
import Bitcoin from '../../Assets/Bitcoin.png'
import Ethereum from '../../Assets/Ethereum.png'
import Tether from '../../Assets/Tether.png'
import MLCOriginal from '../../Assets/MLCOriginal.png'
import Aos from 'aos'
import "aos/dist/aos.css"
import bince from '../../Assets/bince.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const HeroSection = () => {

     const [name, setname] = useState('')

     const whatsapp = () => {
          if(name === ''){
               toast.error('Please input your Name')
          }else {
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
        Aos.init({duration: 1000});

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
    <div className='md:p-20 pt-12 md:px-20 px-3 bg-herosection pb-10' > 
         {/*Hero Contents*/}
         <div>
              {/*Hero Header TagLine with side Image*/}
            <div className='md:flex flex flex-col md:flex-row justify-start items-start'>
                 <div className='text-black text-start'>
                     <h2 className='md:text-5xl text-4xl'>Use <span className='text-primary'>Majorlink</span></h2>
                     <h2 className='md:text-5xl text-4xl mt-2'>for all things Crypto</h2>
                     <h4 className='md:text-3xl text-xl mt-2'>Start trading now to enjoy the best rates</h4>
                    <p className='text-gray-300 font-gilroy text-start md:w-[80%] w-[75%] md:block hidden'>We provide the best and fastest service across the world in swapping e-currencies.
                    We are a registered international company with partners all around</p>
                   <div className='md:flex'>
                   <input className='bg-white border-primary border-2 p-3 rounded-md mt-6 md:w-[46%] w-[100%] text-black font-gilroy text-sm mr-6' placeholder='Name' value={name} onChange={(e) => setname(e.target.value)}/>
                    <button className='bg-primary p-3 rounded-md md:mt-6 mt-2 md:w-[30%] w-[100%] text-white font-gilroy ' onClick={whatsapp}> Get Started </button>
                    </div>
                 </div>

                <span className='md:w-[80%] w-fit md:mt-0 mt-6' data-aos="fade-up">
                     <img
                     className='mt-[-20]'
                     src={bince}
                     alt='image'
                     />
                 </span>
            </div>
              {/*Hero Header TagLine with side Image*/}

                {/*Hero Currencies section*/}
            <div className='md:mt-10 mt-12' data-aos="fade-up">

                  {/*Explore currencies tag and icon*/}
                <span className='flex'>
                <h4 className='font-gilroysemibold text-sm hover:text-gray-500 cursor-pointer'>Explore Currencies</h4>
                 <span className='text-sm'> 
                 </span>
                </span>
                  {/*Explore currencies tag and icon*/}


                {/*Currency cards*/}
                <div className='md:flex font-gilroy mt-0'>

                    {services.length && (
                         services.map((service, id) => {
                              if(service.active){
                                   return (<section key={id} className='bg-primary p-3 pr-6 rounded-lg text-white md:w-[35%] md:mr-5 md:mt-0 mt-5'>

                                        {/*Top section containing nametage, icon and rate*/}
                                        <span className='flex justify-between'>

                                             {/*Top section containing nametage and icon*/}
                                             <span className='flex'>
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

                                                  <h2 className='drop-shadow-lg capitalize'>{service.name}</h2>
                                             </span>
                                             {/*Top section containing nametage and icon*/}

                                             {/*Top section containing rate*/}
                                             <h4 className='animate-pulse'>{service.buy}/$</h4>
                                             {/*Top section containing rate*/}

                                        </span>
                                        {/*Top section containing nametage, icon and rate*/}

                                        {/*Down section containing trade span and date*/}
                                        <span className='flex justify-between ml-1'>
                                             <h2 className='text-sm'>{devDate(service.created_at)}<span className='text-green-400'>Active</span></h2>

                                             {/*Trade Button*/}
                                             <span className='bg-green-500 hover:bg-green-300 underline px-4 rounded-lg cursor-pointer'>
                                                  <Link to={'/checkout'}> TRADE</Link>
                                             </span>
                                             {/*Trade Button*/}


                                        </span>
                                        {/*Down section containing trade span and date*/}

                                   </section>)
                              }else {
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