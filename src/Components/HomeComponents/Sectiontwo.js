import React, { useEffect } from 'react'
import rightm from '../../Assets/customer.png'
import Aos from 'aos'
import "aos/dist/aos.css"
import Carousel from 'better-react-carousel'


const Sectiontwo = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    //Main Container
    <div data-aos="fade-up" className='mt-28 mb-16 mx-10 items-center justify-center flex flex-col'>

      {/*Contents wrapper*/}
      <h1 className='text-[#2c3288] font-aeonik text-base'>Testimonials</h1>
      <h1 className='text-[#2c3288] font-aeonik text-5xl mt-2'>Voice of Success!</h1>

      <p className='text-[#2c3288] font-aeonik text-sm text-center mt-4 tracking-wide mx-28'>Every day is a celebration of success! We open our doors to new users, each embarking on their unique crypto journey. With our personalized, flexible approach, we ensure everyone begins their adventure in a way that fits just right. Join us and fuel your path to crypto triumph!</p>
      {/*Contents wrapper*/}

      <div className='items-center justify-center flex flex-col mx-10'>
        <Carousel cols={1} rows={1} gap={8} loop hideArrow={false} showDots={false} autoplay={20000}>
          <Carousel.Item>
            {/*Card*/}
            <div className='mt-16 bg-[#fafafa] flex items-start w-[88%] ml-16 relative'>
              <div className='px-10 py-20'>
                <h1 className='text-[#2c3288] font-aeonik text-base'>MajorLink Customer</h1>
                <h1 className='text-[#2c3288] font-aeonik text-5xl mt-8'>“I definitely want to start acquiring cryptocurrencies like Bitcoin and Ethereum, and start doing monthly deposits.”</h1>
              </div>
              <div className='absolute right-10 top-10'>
                <img src={rightm} className='h-8' />
              </div>
            </div>
            {/*Card*/}
          </Carousel.Item>
          <Carousel.Item>
            {/*Card*/}
            <div className='mt-16 bg-[#fafafa] flex items-start w-[88%] ml-16 relative'>
              <div className='px-10 py-20'>
                <h1 className='text-[#2c3288] font-aeonik text-base'>MajorLink Customer</h1>
                <h1 className='text-[#2c3288] font-aeonik text-5xl mt-8'>“I definitely want to start acquiring cryptocurrencies like Bitcoin and Ethereum, and start doing monthly deposits.”</h1>
              </div>
              <div className='absolute right-10 top-10'>
                <img src={rightm} className='h-8' />
              </div>
            </div>
            {/*Card*/}
          </Carousel.Item>

        </Carousel>
      </div>
    </div>
    //Main Container
  )
}

export default Sectiontwo