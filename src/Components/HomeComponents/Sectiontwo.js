import React, { useEffect } from 'react'
import majone from '../../Assets/majone.png'
import majtwo from '../../Assets/majtwo.png'
import majthree from '../../Assets/majthree.png'
import Aos from 'aos'
import "aos/dist/aos.css"
import Carousel from 'better-react-carousel'


const Sectiontwo = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    //Main Container
    <div data-aos="fade-up" className='mt-32 mb-16 md:mx-10 mx-6 items-center justify-center flex flex-col'>

      {/*Contents wrapper*/}
      <h1 className='text-[#273046] font-aeonikmedium text-base'>Testimonials</h1>
      <h1 className='text-[#273046] font-grifter text-4xl mt-4 text-center'>Voice of Success!</h1>

      <p className='text-[#273046] font-aeonikregular text-sm text-center mt-2 tracking-wide md:mx-28'>Every day is a celebration of success! We open our doors to new users, each embarking on their unique crypto journey. With our personalized, flexible approach, we ensure everyone begins their adventure in a way that fits just right. Join us and fuel your path to crypto triumph!</p>
      {/*Contents wrapper*/}

      <div className='items-center justify-center flex flex-col md:mx-10 mx-4'>
        <Carousel
          cols={1}
          //autoplay={20000}
          responsiveLayout={[
            {
              breakpoint: 800,
              cols: 3,
              rows: 1,
              //gap: 10,
              loop: true,
              autoplay: 1000
            }
          ]}
          rows={1}
          gap={8}
          loop hideArrow={false} showDots={false} >
          <Carousel.Item className='flex items-center justify-center text-center'>
            {/*Card*/}
            <div className='mt-16 bg-[#273046] flex flex-col items-center justify-center text-center md:w-[88%] md:ml-16 rounded-3xl py-14 md:mx-0 w-[110%]'>
              <div className='flex relative items-center'>
                <div className=''>
                  <img src={majone} className='w-16' />
                </div>
                <div className='absolute left-6 w-20'>
                  <img src={majthree} />
                </div>
                <div>
                  <img src={majtwo} className='w-16' />
                </div>
              </div>

              <div className='md:text-2xl text-base mt-10 text-white md:w-[60%] w-[80%]'>
                <h1>“I was always scared to try trading online, but Majorlink changed that. Everything is clear, and their team is always ready to help. Whether you're in Cyprus or Nigeria, Majorlink is the real deal for crypto and gift card trades.”</h1>
              </div>

              <div className='mt-10 text-white'>
                <h1 className='text-sm'>Caramel Plug</h1>
                <h1 className='text-xs font-aeonikregular mt-1'>Influencer & Brand ambassador</h1>
              </div>
            </div>
            {/*Card*/}
          </Carousel.Item>
          <Carousel.Item className='flex items-center justify-center text-center'>
            {/*Card*/}
            <div className='mt-16 bg-[#273046] flex flex-col items-center justify-center text-center md:w-[88%] md:ml-16 rounded-3xl py-14 md:mx-0 w-[110%]'>
              <div className='flex relative items-center'>
                <div className=''>
                  <img src={majone} className='w-16' />
                </div>
                <div className='absolute left-6 w-20'>
                  <img src={majthree} />
                </div>
                <div>
                  <img src={majtwo} className='w-16' />
                </div>
              </div>

              <div className='md:text-2xl text-base mt-10 text-white md:w-[60%] w-[80%]'>
                <h1>“Before Majorlink, I was lost in the crypto world. Now, buying and selling cryptocurrencies and gift cards has become so easy for me. Every time I use Majorlink, I know my money is safe. If you're in Cyprus or Nigeria, this is the platform to use!”</h1>
              </div>

              <div className='mt-10 text-white'>
                <h1 className='text-sm'>PHOEBE</h1>
                <h1 className='text-xs font-aeonikregular mt-1'>Influencer & Brand ambassador</h1>
              </div>
            </div>
            {/*Card*/}
          </Carousel.Item>
          <Carousel.Item className='flex items-center justify-center text-center'>
            {/*Card*/}
            <div className='mt-16 bg-[#273046] flex flex-col items-center justify-center text-center md:w-[88%] md:ml-16 rounded-3xl py-14 md:mx-0 w-[110%]'>
              <div className='flex relative items-center'>
                <div className=''>
                  <img src={majone} className='w-16' />
                </div>
                <div className='absolute left-6 w-20'>
                  <img src={majthree} />
                </div>
                <div>
                  <img src={majtwo} className='w-16' />
                </div>
              </div>

              <div className='md:text-2xl text-base mt-10 text-white md:w-[60%] w-[80%]'>
                <h1>“I've tried a few different places to buy and sell crypto and gift cards, but nothing beats Majorlink. It's easy to use, fast, and I always get the best rates. Big thumbs up from me, especially for my fellow Nigerians !”</h1>
              </div>

              <div className='mt-10 text-white'>
                <h1 className='text-sm'>Daniel Adebisi</h1>
                <h1 className='text-xs font-aeonikregular mt-1'>Medical Doctor</h1>
              </div>
            </div>
            {/*Card*/}
          </Carousel.Item>
          <Carousel.Item className='flex items-center justify-center text-center'>
            {/*Card*/}
            <div className='mt-16 bg-[#273046] flex flex-col items-center justify-center text-center md:w-[88%] md:ml-16 rounded-3xl py-14 md:mx-0 w-[110%]'>
              <div className='flex relative items-center'>
                <div className=''>
                  <img src={majone} className='w-16' />
                </div>
                <div className='absolute left-6 w-20'>
                  <img src={majthree} />
                </div>
                <div>
                  <img src={majtwo} className='w-16' />
                </div>
              </div>

              <div className='md:text-2xl text-base mt-10 text-white md:w-[60%] w-[80%]'>
                <h1>“All my friends in Nigeria and Cyprus are using Majorlink, and now I know why! It's the simplest way to deal with cryptocurrencies and gift cards. No headaches, just smooth transactions every time.”</h1>
              </div>

              <div className='mt-10 text-white'>
                <h1 className='text-sm'>Ngozi Chukwu</h1>
                <h1 className='text-xs font-aeonikregular mt-1'>Business Woman</h1>
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