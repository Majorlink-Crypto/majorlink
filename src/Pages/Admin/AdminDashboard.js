import React from 'react'
import { Helmet } from 'react-helmet';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../Components/AdminComponents/Navbar';
import DashboardCards from '../../Components/AdminComponents/DashboardCards';
import Greeting from '../../Components/AdminComponents/Greeting';
import Image from '../../Components/AdminComponents/Image'
import Update from '../../Components/AdminComponents/Update';

const AdminDashboard = () => {
  
  return (

    <div className=''>
       <Helmet>
        <title>Admin Dashboard</title>
      </Helmet>
      <Navbar/>
      <Image/>
      <Greeting/>
      <DashboardCards/>
      <Update/>
      {/*
      
      <Idle></Idle>
      */}
    </div>
  )
}

export default AdminDashboard