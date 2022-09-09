import React from 'react'

const DashboardCards = () => {
  return (
      //Dashboard Card Container
    <div className='mt-10'>
        {/*Main Div */}
        <div className='md:flex md:px-20 px-8'>

            {/*Card*/}
            <section className='bg-newsletter bg-cover text-white text-sm font-gilroysemibold flex p-3 rounded-md md:mr-16 mr-0 items-center justify-center cursor-pointer'>
                  <span className='mr-4 text-xl'>
                  <ion-icon name={'people-circle-outline'}></ion-icon>
                  </span>

                  <span className='mr-4'>
                      Number of Users
                      <p className='hover:text-green-400'>View all</p>
                  </span>

                  <span className='text-2xl'>
                      110k
                  </span>
            </section>
             {/*Card*/}

              {/*Card*/}
              <section className='bg-primary text-white text-sm md:mt-0 mt-6 font-gilroysemibold flex p-3 rounded-md md:mr-16 mr-0 items-center justify-center cursor-pointer'>
                  <span className='mr-2 text-xl'>
                  <ion-icon name={'bookmarks-outline'}></ion-icon>
                  </span>

                  <span className='mr-2'>
                      Number of Services
                      <p className='hover:text-green-400'>View all</p>
                  </span>

                  <span className='text-2xl'>
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