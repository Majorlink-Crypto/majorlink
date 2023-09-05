import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import AMLPolicy from '../Components/LegalComponents/AMLPolicy'

function Aml() {
  return (
    <div>
        <Navbar/>
        <AMLPolicy/>
        <Footer/>
    </div>
  )
}

export default Aml