import React from 'react'

const DashboardCards = () => {
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
                      4
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