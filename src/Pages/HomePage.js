import React from 'react'
import Navbar from '../Components/Navbar'
import CookieConsent from 'react-cookie-consent'
import HeroSection from '../Components/HomeComponents/HeroSection'
import StatsBar from '../Components/HomeComponents/StatsBar'
import FeaturesSection from '../Components/HomeComponents/FeaturesSection'
import ServicesSection from '../Components/HomeComponents/ServicesSection'
import HowItWorks from '../Components/HomeComponents/HowItWorks'
import Sectionthree from '../Components/HomeComponents/Sectionthree'
import FaqSection from '../Components/HomeComponents/FaqSection'
import AppShowcaseSection from '../Components/HomeComponents/AppShowcaseSection'
import TestimonialsSection from '../Components/HomeComponents/TestimonialsSection'
import CtaBanner from '../Components/HomeComponents/CtaBanner'
import Footer from '../Components/Footer'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <HowItWorks />
      <Sectionthree />
      <FeaturesSection />
      <FaqSection />
      <AppShowcaseSection />
      <TestimonialsSection />
      <CtaBanner />
      <Footer />
      <CookieConsent debug={true} className="motion-safe:animate-fadeIn" containerClasses="mx-4 md:mx-10">
          By clicking "Accept All Cookies", you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.
        </CookieConsent>
    </div>
  )
}

export default HomePage