import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import AboutSection from '../Components/HomeComponents/AboutSection'
import Sectiontwo from '../Components/HomeComponents/Sectiontwo'
import Sectionfour from '../Components/HomeComponents/Sectionfour'
import VideoPlaceholder from '../Components/AboutComponents/VideoPlaceholder'
import Newsletter from '../Components/HomeComponents/Newsletter'


const About = () => {
  return (
    <div>
      <Navbar />
      <VideoPlaceholder />
      <Sectionfour />
      <AboutSection />
      <Sectiontwo />
      <Newsletter/>
      <Footer />
    </div>
  )
}

export default About