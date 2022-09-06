import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import CookieConsent from 'react-cookie-consent'
import HeroSection from '../Components/HomeComponents/HeroSection'
import Sectiontwo from '../Components/HomeComponents/Sectiontwo'
import Sectionthree from '../Components/HomeComponents/Sectionthree'
import Sectionfour from '../Components/HomeComponents/Sectionfour'
import AboutSection from '../Components/HomeComponents/AboutSection'
import Testimonials from '../Components/HomeComponents/Testimonials'
import Newsletter from '../Components/HomeComponents/Newsletter'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <AboutSection/>
        <Sectiontwo/>
        <Sectionthree/>
        <Sectionfour/>
        <Testimonials/>
        <Newsletter/>
        <CookieConsent debug={true} className='motion-safe:animate-fadeIn'>
      By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.
      </CookieConsent >
    </div>
  )
}

export default HomePage