import React, { useState, useEffect } from 'react'
import img1 from '../../Assets/GiftCards/googleplay.png';
import img2 from '../../Assets/GiftCards/amazon.png';
import img3 from '../../Assets/GiftCards/itunes.png';
import img4 from '../../Assets/GiftCards/visa.png';
import img5 from '../../Assets/GiftCards/ebay.png';
import img6 from '../../Assets/GiftCards/razer.png';
import img7 from '../../Assets/GiftCards/steam.png';
import img8 from '../../Assets/GiftCards/sephora.png';
import img9 from '../../Assets/GiftCards/nike.png';
import img10 from '../../Assets/GiftCards/macy.png';
import img11 from '../../Assets/GiftCards/nordstrom.png';
import img12 from '../../Assets/GiftCards/footlocker.png';
import img13 from '../../Assets/GiftCards/amex.png';

import apple from '../../Assets/apple.png'
import google from '../../Assets/google.png'


const Newsletter = () => {

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13];

  const whatsapp = () => {
    window.open("https://wa.me/+2349071504491")
  }

  return (
    //Container
    <div className='md:mt-28 mt-20 md:mx-0 mx-6'>
      <div className='flex items-center justify-center flex-col'>
        <h1 className='font-grifter text-[#273046] text-lg'>Explore over 30+ GiftCards</h1>
        <p className='font-aeonikregular text-sm text-center'>Trade with a large amount of options for your digital assets</p>
      </div>

      <div className='mt-14 mb-14 flex flex-col items-center overflow-scroll no-scrollbar'>
        <div className="flex space-x-4">
          {images.slice(0, 7).map(img => (
            <img key={img} src={img} alt="" className="h-12 w-34" />
          ))}
        </div>
        <div className="flex space-x-4 mt-4">
          {/* The first image in this row will have a negative margin to make it halfway off the screen */}
          <img src={images[7]} alt="" className="h-12 w-34" />
          {images.slice(8).map(img => (
            <img key={img} src={img} alt="" className="h-12 w-34" />
          ))}
        </div>
      </div>

      <div className='flex items-center justify-center flex-col md:mt-48 mt-28'>
        <h1 className='font-grifter text-[#273046] text-lg'>Access with convenience</h1>
        <p className='font-aeonikregular text-sm text-center'>Available to you on any device for the best of convenience</p>

        <div className='md:flex items-center md:space-x-5 mt-8 md:space-y-0 space-y-4'>
          <span className='bg-[#fff] rounded-full py-3 px-6 flex items-center space-x-3 border border-[#4B5DFF] cursor-pointer'>
            <img src={google} className='h-5' />
            <div>
              <p className='font-aeonikmedium text-sm text-[#4B5DFF]'>Google Play Store</p>
            </div>
          </span>
          <span className='bg-[#fff] rounded-full py-3 px-6 flex items-center space-x-3 border border-[#4B5DFF] cursor-pointer'>
            <img src={apple} className='h-5' />
            <div>
              <p className='font-aeonikmedium text-sm text-[#4B5DFF]'>Apple App Store</p>
            </div>
          </span>

          <span onClick={whatsapp} className='bg-[#fff] rounded-full text-[#4B5DFF] py-3 px-6 flex items-center space-x-3 cursor-pointer border border-[#4B5DFF]'>
            <ion-icon name="globe-outline"></ion-icon>
            <div>
              <p className='font-aeonikmedium text-sm text-[#4B5DFF]'>Trade on the web</p>
            </div>
          </span>

        </div>
      </div>

    </div>
    //Container
  )
}

export default Newsletter