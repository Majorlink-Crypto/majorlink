import React, { useEffect } from 'react'
import arrow from '../../Assets/arrow.png'
import learnaboutuscard from '../../Assets/learnaboutuscard.png'
import Aos from 'aos'
import "aos/dist/aos.css"
import abtright from '../../Assets/abtright.png'

const AboutSection = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        //Container
        <div data-aos="fade-up" className='md:mt-32 mt-16 items-center justify-center flex flex-col mb-10'>
            {/*Div and its content*/}
            <div className='rounded-t-lg py-8 md:px-6 items-center justify-center'>
                <div className='items-center justify-center flex flex-col text-center'>
                    <h1 className='text-2xl font-grifter text-[#273046]'>Seamless process.</h1>
                    <h1 className='text-2xl font-grifter text-[#273046]'>Flawless experience.</h1>
                    <p className='text-[#273046] font-aeonikregular text-sm tracking-wide mt-2 w-[66%]'>We meet you at the exact trading point of need,  and takes you on the go.
                    Majorlink forever with you</p>
                </div>
            </div>
            {/*Div and its content*/}
            <div className='bg-[#FAFAFA] pt-12 pb-12 mt-2 px-8 md:flex items-center md:space-x-8 md:space-y-0 space-y-14 md:w-[90%] rounded-b-lg'>
                <div className='md:flex items-center md:space-x-6'>
                    <div>
                        <div className='flex items-center justify-between space-x-20'>
                            <h1 className='text-[#273046] text-xl font-grifter'>Security</h1>
                            <span className='text-[#273046] text-2xl mt-1'>
                                <ion-icon name="lock-closed-outline" ></ion-icon>
                            </span>
                        </div>
                        <div>
                            <p className='text-[#273046] text-sm mt-0 font-aeonikregular'>We safeguard your crypto using top-tier industry security measures. Only the best serve at Majorlink.</p>
                            <div className='cursor-pointer border border-[#273046] rounded-full py-2 px-8 mt-6 items-center justify-center inline-block'>
                                <h1 className='text-[#273046] font-aeonikmedium text-sm'>Learn more</h1>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#273046] h-24 w-0.5 md:block hidden'></div>
                </div>
                <div className='flex items-center md:space-x-6'>
                    <div>
                        <div className='flex items-center justify-between md:space-x-20'>
                            <h1 className='text-[#273046] text-xl font-grifter'>Speed</h1>
                            <span className='text-[#273046] text-2xl mt-1'>
                            <ion-icon name="medal-outline"></ion-icon>
                            </span>
                        </div>
                        <div>
                            <p className='text-[#273046] text-sm font-aeonikregular'>Majorlink delivers ultra-fast, efficient trading of crypto and gift cards, elevating your e-currency experience.</p>
                            <div className='cursor-pointer border border-[#273046] rounded-full py-2 px-8 mt-6 items-center justify-center inline-block'>
                                <h1 className='text-[#273046] font-aeonikmedium text-sm'>Learn more</h1>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#273046] h-24 w-0.5 md:block hidden'></div>
                </div>
                <div className='flex items-center space-x-6'>
                    <div>
                        <div className='flex items-center justify-between space-x-20'>
                            <h1 className='text-[#273046] text-xl font-grifter'>Customer Service</h1>
                            <span className='text-[#273046] text-2xl mt-1'>
                                <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                            </span>
                        </div>
                        <div>
                            <p className='text-[#273046] text-sm font-aeonikregular'>Our dedicated support team is always ready to assist you, ensuring a smooth and seamless trading process.</p>
                            <div className='cursor-pointer border border-[#273046] rounded-full py-2 px-8 mt-6 items-center justify-center inline-block'>
                                <h1 className='text-[#273046] font-aeonikmedium text-sm'>Learn more</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        //Container
    )
}

export default AboutSection