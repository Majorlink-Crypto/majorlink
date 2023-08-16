import React, { useEffect } from 'react'
import security from '../../Assets/security.png'
import Aos from 'aos'
import "aos/dist/aos.css"

import exp1 from "../../Assets/exp1.jpeg"

const Sectionfour = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        //Section Container
        <div className='md:mt-28 mt-10' data-aos="fade-up">

            {/*Div and contents*/}
            <div className='space-y-2 mx-20'>
                <h1 className='text-[#2c3288] font-aeonik text-3xl mt-2'>Discover Majorlink: Our Story, Our People, Our Vision!</h1>
                <h1 className='text-[#2c3288] font-aeonik text-base w-[70%]'>Embark on a journey through Majorlink's dynamic world. Explore our compelling story, meet our dedicated team, and envision the future of crypto trading with us.</h1>
            </div>
            {/*Div and contents*/}

            {/* <div className='bg-[#000] flex items-center mt-16'>
                <div className='w-[50%]'>
                </div>
                <div className='w-[50%] h-[80%]'>
                <img src={exp1} className=''/>
                </div>
            </div>
*/}

            <div className='mx-20 border-2 border-[#f2f2f2]'>
                <video>
                </video>
            </div>
        </div>
        //Section Container
    )
}

export default Sectionfour