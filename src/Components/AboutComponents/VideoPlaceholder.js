// VideoPlaceholder.js
import React from 'react';
import ambvideo from '../../Assets/videos/amb.mp4'
import { Link } from 'react-router-dom';

const VideoPlaceholder = () => {
  return (
    <div className="relative h-screen w-full pt-20">
      <video
        className="absolute top-0 left-0 w-full h-screen object-cover"
        autoPlay
        loop
        muted
      >
        <source src={ambvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black opacity overlay */}
      <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-50"></div>

      {/* Your text content */}
      <div className="absolute md:top-2/4 top-1/4 md:left-20 left-4">
        <h2 className="text-white text-4xl mb-4 font-grifter">Seamlessly Trade with Confidence</h2>
        <p className="text-white text-base font-aeonikmedium mb-6 md:w-[60%] leading-6 tracking-wide">Dive into the world of digital trading with Majorlink. Whether you're just starting out or a seasoned trader, our platform ensures a secure and straightforward experience. Ready to elevate your trading journey?</p>
        <div className='md:w-[16%] bg-white py-3 flex items-center space-x-3 justify-center rounded-full cursor-pointer'>
           <h1 className='text-[#4B5DFF] text-sm font-aeonikmedium'><Link to={"/contact"}>Contact us</Link></h1>
        </div>
      </div>
    </div>

  );
}

export default VideoPlaceholder;
