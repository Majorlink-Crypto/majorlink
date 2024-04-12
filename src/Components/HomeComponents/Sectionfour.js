import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"


const Sectionfour = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        //Section Container
        <div className='md:mt-28 mt-10' data-aos="fade-up">

            {/*Div and contents*/}
            <div className='space-y-1 md:mx-20 mx-6'>
                <h1 className='text-[#2c3288] font-grifter text-3xl mt-2'>Simple Solutions in a Digital Age</h1>
                <h1 className='text-[#2c3288] font-aeonikmedium text-base md:w-[70%]'>Trading your cryptocurrencies and gift cards for cash should be straightforward. We believe in eliminating complications.</h1>
            </div>
            <div className='space-y-1 mx-6 md:mx-20'>
                <h1 className='text-[#2c3288] font-grifter text-lg mt-16'>Welcome to Majorlink</h1>
                <h1 className='text-[#2c3288] font-aeonikregular text-sm md:w-[70%]'>In the bustling space of digital exchange, Majorlink emerges with clarity and vision. Our credo is undeviating: regardless of who you are or where you hail from, when it comes to selling your cryptocurrency or gift cards, you deserve nothing less than the best. At Majorlink, every customer is a valued member of our expanding community.</h1>
            </div>
            <div className='space-y-1 mx-6 md:mx-20'>
                <h1 className='text-[#2c3288] font-grifter text-lg mt-16'>Our Pledge</h1>
                <h1 className='text-[#2c3288] font-aeonikregular text-sm md:w-[70%]'>As Majorlink paves its path, we're not just setting standards; we're transcending them. We are more than a platform; we are a commitment. A commitment to authenticity, promptness, and top-tier service. Our objective? To be not just a name, but the epitome of cryptocurrency and gift card exchange in Nigeria.</h1>
            </div>
            <div className='space-y-1 mx-6 md:mx-20'>
                <h1 className='text-[#2c3288] font-grifter text-lg mt-16'>You're at Our Core</h1>
                <h1 className='text-[#2c3288] font-aeonikregular text-sm md:w-[70%]'>Every step Majorlink takes, every decision we make, it's all about our users. We initiated our journey with a single-minded focus: safeguarding and enhancing user experience. Operating tirelessly, our proficient team ensures swift and secure transactions. And, should you have a query or need assistance? Our customer support, a blend of efficiency and courtesy, is ever-present, be it through calls or our in-app live chat.</h1>
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
        </div>
        //Section Container
    )
}

export default Sectionfour