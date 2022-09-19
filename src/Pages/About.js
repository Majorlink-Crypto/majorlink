import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import AboutSection from '../Components/HomeComponents/AboutSection'
import Sectiontwo from '../Components/HomeComponents/Sectiontwo'
import Sectionthree from '../Components/HomeComponents/Sectionthree'
import Sectionfour from '../Components/HomeComponents/Sectionfour'
import Testimonials from '../Components/HomeComponents/Testimonials'


const About = () => {
  return (
    <div>
         <Navbar/>
        <AboutSection/>
        <Sectiontwo/>
        <Sectionthree/>
        <Sectionfour/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default About