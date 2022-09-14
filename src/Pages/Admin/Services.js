import React from 'react'
import ServicesComponent from '../../Components/AdminComponents/Services'
import { Helmet } from 'react-helmet';
import Navbar from '../../Components/AdminComponents/Navbar';

const Services = () => {
  return (
    <div>
        <Helmet>
        <title>Currencies | Admin</title>
      </Helmet>
      <Navbar/>
        <ServicesComponent/>
    </div>
  )
}

export default Services