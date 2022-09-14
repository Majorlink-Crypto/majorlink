import React from 'react'
import { Helmet } from 'react-helmet';
import {IonIcon} from "react-ion-icon";
import { Link } from 'react-router-dom';
import Select from 'react-select'

const CheckoutPage = () => {

  const colorOptions = [
    { value: 'bitcoin', label: 'Bitcoin' },
    { value: 'usdt', label: 'USDT' },
    { value: 'ethereum', label: 'Ethereum' }
  ]
  
  return (
      //Checkout Main Container
    <div className='items-center justify-center flex'>
         <Helmet>
        <title>Checkout |</title>
      </Helmet>
        {/*Center Div*/}
        <div className='flex flex-col items-start w-fit justify-start md:mt-20 text-center rounded-md bg-herosection md:p-10 md:px-10 px-4 md:pt-10 pt-10 md:pb-10 pb-10'>
            <span className='text-sm font-gilroysemibold text-gray-400 cursor-pointer mb-3 hover:text-primary flex items-center'>
            <IonIcon name='arrow-back-outline'/>
            <h2 className='text-sm font-gilroysemibold text-gray-400 cursor-pointer ml-1 hover:text-primary'> <Link to={'/'}>Home</Link> </h2>
            </span>
             <h2 className='text-4xl text-primary text-center'>Quick Checkout</h2>
             <h2 className='text-2xl text-start'>The fastest checkout system</h2>
               
               <section className='mt-7 text-start'>
               <label className='text-sm font-gilroysemibold text-gray-300 text-start'>Your Name</label>
             <input className='text-sm font-gilroysemibold p-3 w-[106%] md:w-[126%] border-primary border-2 rounded-md' placeholder='Name'/>
               </section>

               <section className='mt-4 text-start'>
               <label className='text-sm font-gilroysemibold text-gray-300 text-start'>Your Email</label>
             <input className='text-sm font-gilroysemibold p-3 w-[106%] md:w-[136%] border-primary border-2 rounded-md' placeholder='youremail@example.com' type='email'/>
               </section>

               <section className='mt-4 text-start flex flex-col'>
               <label className='text-sm font-gilroysemibold text-gray-300 text-start'>Amount you want to transact</label>
               </section>


               <section className='mt-0 text-start flex flex-col text-sm font-gilroysemibold'>
               <Select
              //onChange={handleChanged}
              isClearable={false}
              //theme={selectThemeColors}
              //isMulti
              /* eslint-disable */
             // getOptionLabel={e => e.firstname + ' ' + e.lastname}
              /* eslint-enable */
              
             // getOptionValue={e => e.id}
              name='colors'
              options={colorOptions}
              className='react-select'
              classNamePrefix='select'
            />


             <input className='text-sm font-gilroysemibold p-3 mt-2 w-[106%] border-primary border-2 rounded-md mr-2' placeholder='Enter Amount' type='number'  />
               </section>

               <section className='mt-4 text-start flex flex-col'>
               <label className='text-sm font-gilroysemibold text-gray-300 text-start'>Amount you will Get in Naira</label>

               </section>

               <section className='mt-0 text-start flex flex-row'>
             <input disabled className='text-sm font-gilroysemibold p-3 w-[106%] border-primary border-2 rounded-md mr-2' placeholder='400' type='number'  />
             <span className='mr-3 bg-white text-green-700 p-3 flex items-center justify-center border-2 border-primary rounded-md'>
               <IonIcon name='cash-outline'/>
               </span> 
               </section>

                <section className='mt-3 flex font-gilroysemibold text-sm'>
                    <input type='checkbox' className='border-2 border-primary'/>
                    <p className='ml-2'>I agree to the <span className='hover:text-primary text-gray-400 cursor-pointer'> terms </span> and <span className='hover:text-primary text-gray-400 cursor-pointer'> conditions </span> </p>
                </section>

                <button className='p-3 bg-primary text-white text-sm font-gilroysemibold mt-4 rounded-md w-[fill]'>Order now</button>
        </div>
         {/*Center Div*/}
    </div>
     //Checkout Main Container
  )
}

export default CheckoutPage