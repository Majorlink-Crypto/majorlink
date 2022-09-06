import React, { useEffect } from 'react'
import rightm from '../../Assets/rightm.png'
import Aos from 'aos'
import "aos/dist/aos.css"

const Sectiontwo = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);
  return (
      //Main Container
    <div data-aos="fade-up" className='mt-10'>

        {/*Contents wrapper*/}
        <div className='md:flex'>

            {/*Left*/}
            <div className='md:ml-20 md:mx-0 mx-5 md:w-[100%] mt-20 '>
  
                {/*Header*/}
               <div className='md:w-[88%] text-headertext'>
                   <h2 className='md:text-5xl text-3xl'>
                   The Most Trusted Cryptocurrency Platform
                   </h2>
               </div>
                {/*Header*/}

                 {/*Sections*/}
                 <div className='mt-20'>

                      {/*Sections*/}
                     <section className='flex'>

                       <span>
                       <h2 className='text-numbers pr-6'>
                             1
                         </h2>
                       </span>

                     <div>

                     <h2>
                          Quick Checkout
                      </h2>

                      <p className='text-sm font-gilroy mt-1'>
                      Quickly checkout through whatsapp or telegram 
                      </p>
                     </div>
                     </section>
                      {/*Sections*/}

                      <hr className='mt-6 w-[75%]'></hr>
 
                        {/*Sections*/}
                      <section className='flex mt-5'>

                           <span>
                        <h2 className='text-numbers pr-6'>
                           2
                           </h2>
                           </span>

                          <div>

                          <h2>
                          More focus, less struggles 
                          </h2>

                          <p className='text-sm font-gilroy mt-1'>                          
                          No ads, just crypto.
                          </p>
                          </div>
                          </section>
                           {/*Sections*/}


                           <hr className='mt-6 w-[75%]'></hr>
                         {/*Sections*/}
                        <section className='flex mt-5'>

                        <span>
                        <h2 className='text-numbers pr-6'>
                              3
                          </h2>
                        </span>

                        <div>

                        <h2>
                        Security by default
                        </h2>

                       <div className='md:w-[44%] w-[80%]'>
                       <p className='text-sm font-gilroy mt-1'>
                        Sign up and have your information securedly stored, signing up makes transactions easier.
                        </p>
                       </div>
                        </div>
                        </section>
                         {/*Sections*/}

                        
                 </div>
                 {/*Sections*/}
            </div>
            {/*Left*/}

             {/*Right*/}
             <div data-aos="fade-up" className='bg-right h-full md:mt-0 mt-10 md:w-[100%] w-fit md:p-20 p-10 flex items-center justify-center text-center'>
                     <img
                     className=''
                     src={rightm}
                     alt='right'
                     />
                </div>
              {/*Right*/}
        </div>
         {/*Contents wrapper*/}

    </div>
     //Main Container
  )
}

export default Sectiontwo