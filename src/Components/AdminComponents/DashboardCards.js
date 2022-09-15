import React from 'react'

import axios from 'axios';


const DashboardCards = () => {

    const [services, setServices] = React.useState([]);

    React.useEffect(() => {
        
     axios.get('https://main.majorlink.co/api/services/list', {
        header: {
            'Content-Type': 'application/json',
            'Accept': 'application/json' 
        }
     }).then(dx => {
        setServices(dx.data);
     });

    }, []);

  return (
      //Dashboard Card Container
    <div className='mt-6'>
        {/*Main Div */}
        <div className='md:flex md:px-16 px-4'>

              {/*Card*/}
              <section className='bg-newsletter bg-cover text-white text-sm font-gilroysemibold flex p-3 rounded-md md:mr-16 mr-0 items-center md:justify-center cursor-pointer md:mt-0 mt-4 md:ml-16 ml-0'>
                  <span className='mr-4 md:text-xl text-5xl'>
                  <ion-icon name={'people-circle-outline'}></ion-icon>
                  </span>

                  <span className='mr-4 text-xl font-poppins'>
                     Number of Users
                      <p className='hover:text-white text-green-300 text-sm font-gilroysemibold'>View all</p>
                  </span>

                  <span className='text-3xl pl-2'>
                      20
                  </span>
            </section>
             {/*Card*/}

              {/*Card*/}
              <section className='bg-newsletter bg-cover text-white text-sm font-gilroysemibold flex p-3 rounded-md md:mr-16 mr-0 items-center md:justify-center cursor-pointer md:mt-0 mt-4'>
                  <span className='mr-4 md:text-xl text-5xl'>
                  <ion-icon name={'people-circle-outline'}></ion-icon>
                  </span>

                  <span className='mr-4 text-xl font-poppins'>
                     Number of Services
                      <p className='hover:text-white text-green-300 text-sm font-gilroysemibold'>View all</p>
                  </span>

                  <span className='text-3xl pl-2'>
                      {services.length}
                  </span>
            </section>
             {/*Card*/}
        </div>
         {/*Main Div */}
    </div>
    //Dashboard Card Container
  )
}

export default DashboardCards