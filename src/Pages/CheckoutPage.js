import React from 'react'
import { Helmet } from 'react-helmet';
import {IonIcon} from "react-ion-icon";
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  return (
      //Checkout Main Container
    <div className='items-center justify-center flex'>
         <Helmet>
        <title>Checkout |</title>
      </Helmet>
        {/*Center Div*/}
        <div className='flex flex-col items-start w-fit justify-start mt-20 text-center rounded-md bg-herosection p-10'>
            <span className='text-sm font-gilroysemibold text-gray-400 cursor-pointer mb-3 hover:text-primary flex items-center'>
            <IonIcon name='arrow-back-outline'/>
            <h2 className='text-sm font-gilroysemibold text-gray-400 cursor-pointer ml-1 hover:text-primary'> <Link to={'/'}>Home</Link> </h2>
            </span>
             <h2 className='text-4xl text-primary text-center'>Quick Checkout</h2>
             <h2 className='text-2xl text-center'>The fastest checkout system</h2>
               
               <section className='mt-10 text-start'>
               <label className='text-sm font-gilroysemibold text-gray-300 text-start'>Your Name</label>
             <input className='text-sm font-gilroysemibold p-3 w-[126%] border-primary border-2 rounded-md' placeholder='Name'/>
               </section>

               <section className='mt-4 text-start'>
               <label className='text-sm font-gilroysemibold text-gray-300 text-start'>Your Email</label>
             <input className='text-sm font-gilroysemibold p-3 w-[136%] border-primary border-2 rounded-md' placeholder='youremail@example.com' type='email'/>
               </section>

               <section className='mt-4 text-start flex flex-col'>
               <label className='text-sm font-gilroysemibold text-gray-300 text-start'>Amount you want to transact</label>

               </section>

               <section className='mt-0 text-start flex flex-row'>
             <input className='text-sm font-gilroysemibold p-3 w-[106%] border-primary border-2 rounded-md mr-2' placeholder='Enter Amount' type='number'  />
             <span className='mr-3 bg-white text-bitcoin p-3 flex items-center justify-center border-2 border-primary rounded-md'>
               <IonIcon name='logo-bitcoin'/>
               </span> 
               </section>

               <section className='mt-4 text-start flex flex-col'>
               <label className='text-sm font-gilroysemibold text-gray-300 text-start'>Amount you will Get</label>

               </section>

               <section className='mt-0 text-start flex flex-row'>
             <input disabled className='text-sm font-gilroysemibold p-3 w-[106%] border-primary border-2 rounded-md mr-2' placeholder='400' type='number'  />
             <span className='mr-3 bg-white text-green-700 p-3 flex items-center justify-center border-2 border-primary rounded-md'>
               <IonIcon name='logo-usd'/>
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