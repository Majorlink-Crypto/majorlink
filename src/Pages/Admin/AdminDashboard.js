import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../Components/AdminComponents/Navbar';
import DashboardCards from '../../Components/AdminComponents/DashboardCards';
import Greeting from '../../Components/AdminComponents/Greeting';

const AdminDashboard = () => {
  
  return (

    <div className=''>
       <Helmet>
        <title>Unauthorized</title>
      </Helmet>
      <Navbar/>
      <Greeting/>
      <DashboardCards/>
    </div>
  )
}

export default AdminDashboard