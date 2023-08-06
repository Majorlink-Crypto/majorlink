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
        <div className='md:mt-16 mt-16 items-center justify-center flex flex-col mb-10'>
            {/*Div and its content*/}
            <div className='bg-[#0040E3] w-[90%] rounded-t-lg py-8 px-6 flex items-center justify-center'>
                <div>
                    <img src={abtright} className='w-[90%]' />
                </div>
                <div className=''>
                    <p className='text-sm font-aeonik text-white'>Why Majorlink ?</p>
                    <h1 className='text-white font-gilroy text-4xl mt-1'>Trading Made So Easy</h1>
                    <p className='text-[#f2f2f2] font-aeonik text-sm tracking-wide mt-2'>We provide users the opportunities to purchase any cryptocurrency, converting and swapping currencies with speed, breaking international borders for you and any banking intermediaries. Trade Fast and Easy.</p>
                </div>
            </div>
            {/*Div and its content*/}
            <div className='bg-[#fafafa] pt-10 pb-16 px-8 flex items-center space-x-8 w-[90%] rounded-b-lg'>
                <div className='flex items-center space-x-6'>
                    <div>
                        <div className='flex items-center justify-between space-x-20'>
                            <h1 className='text-[#2c3288] text-2xl font-gilroy'>Security</h1>
                            <span className='text-[#2c3288] text-2xl mt-1'>
                                <ion-icon name="lock-closed-outline" ></ion-icon>
                            </span>
                        </div>
                        <div>
                            <p className='text-[#2c3288] text-sm mt-2 font-aeonik'>We safeguard your crypto using top-tier industry security measures. Only the best serve at Majorlink.</p>
                            <div className='cursor-pointer border border-[#2c3288] rounded-full py-2 px-8 mt-6 items-center justify-center inline-block'>
                                <h1 className='text-[#2c3288] font-aeonik text-sm'>Download App</h1>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#6a6d98] h-24 w-0.5'></div>
                </div>
                <div className='flex items-center space-x-6'>
                    <div>
                        <div className='flex items-center justify-between space-x-20'>
                            <h1 className='text-[#2c3288] text-2xl font-gilroy'>Speed</h1>
                            <span className='text-[#2c3288] text-2xl mt-1'>
                            <ion-icon name="medal-outline"></ion-icon>
                            </span>
                        </div>
                        <div>
                            <p className='text-[#2c3288] text-sm mt-2 font-aeonik'>Majorlink delivers ultra-fast, efficient trading of crypto and gift cards, elevating your e-currency experience.</p>
                            <div className='border border-[#2c3288] rounded-full py-2 px-8 mt-6 items-center justify-center inline-block'>
                                <h1 className='text-[#2c3288] font-aeonik text-sm'>Download App</h1>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#6a6d98] h-24 w-0.5'></div>
                </div>
                <div className='flex items-center space-x-6'>
                    <div>
                        <div className='flex items-center justify-between space-x-20'>
                            <h1 className='text-[#2c3288] text-2xl font-gilroy'>Customer Service</h1>
                            <span className='text-[#2c3288] text-2xl mt-1'>
                                <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                            </span>
                        </div>
                        <div>
                            <p className='text-[#2c3288] text-sm mt-2 font-aeonik'>Our dedicated support team is always ready to assist you, ensuring a smooth and seamless trading process.</p>
                            <div className='border border-[#2c3288] rounded-full py-2 px-8 mt-6 items-center justify-center inline-block'>
                                <h1 className='text-[#2c3288] font-aeonik text-sm'>Download App</h1>
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