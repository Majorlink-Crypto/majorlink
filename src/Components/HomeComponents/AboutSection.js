import React, { useEffect } from 'react'
import arrow from '../../Assets/arrow.png'
import learnaboutuscard from '../../Assets/learnaboutuscard.png'
import Aos from 'aos'
import "aos/dist/aos.css"
import abtright from '../../Assets/abtright.png'

const AboutSection = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
      }, []);
  return (
      //Container
    <div className='p-10 md:mt-0 mt-16'>
        {/*Div and its content*/}
            <div className='bg-about bg-cover md:p-8 md:flex'>
                
                 {/*Left Section*/}

                <div>
                {/*MajorLinkHeader teaxt*/}
                <span>
                    <h2 className='text-5xl text-primary'>Majorlink</h2>
                </span>
                 {/*MajorLinkHeader teaxt*/}

                 {/*sECOND hEADER*/}
                 <span>
                    <h2 className='text-3xl'>is for everything crypto</h2>
                </span>
                  {/*sECOND hEADER*/}

                 {/*text*/}
                 <div className='md:w-[60%] w-[76%] mt-2'>
                    <h2 className='text-sm font-gilroy text-gray-300'>We provide users the opportunities to purchase any cryptocurrency,
                     converting and swapping currencies with speed, breaking international
                    borders for you and any banking intermediaries. Trade Fast and Easy.</h2>
                </div>
                   {/*text*/}

                    <div className='flex'>
 
                    {/*Arrow*/}
                    <span data-aos="fade-down">
                        <img
                        className='mt-3'
                        src={arrow}
                        alt=''
                        />
                    </span>
                     {/*Arrow*/}

                      {/*About us Card*/}
                         <div className='md:ml-2 md:w-[40%] mt-10' data-aos="fade-up">
                             <img
                                 className='mt-0'
                                 src={learnaboutuscard}
                                 alt=''
                             />
                         </div>
                       {/*About us Card*/}
                    </div>
                </div>

                  {/*Left Section*/}

                    {/*Right Section*/}
                        <div className='w-[90%]'>
                            <img
                            className=''
                            alt=''
                            src={abtright}
                            />
                        </div>
                     {/*Right Section*/}

            </div>
        {/*Div and its content*/}
    </div>
    //Container
  )
}

export default AboutSection