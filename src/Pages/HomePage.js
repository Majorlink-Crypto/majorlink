import React from 'react'
import Navbar from '../Components/Navbar'
import CookieConsent from 'react-cookie-consent'
import HeroSection from '../Components/HomeComponents/HeroSection'
import Sectiontwo from '../Components/HomeComponents/Sectiontwo'
import Sectionthree from '../Components/HomeComponents/Sectionthree'
import AboutSection from '../Components/HomeComponents/AboutSection'
import Newsletter from '../Components/HomeComponents/Newsletter'
import Footer from '../Components/Footer'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Sectionthree />
      <AboutSection />
      <Sectiontwo />
      <Newsletter />
      <Footer />
      <div className='mx-10'>
        <CookieConsent debug={true} className='motion-safe:animate-fadeIn'>
          By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.
        </CookieConsent>
      </div>
    </div>
  )
}

export default HomePage