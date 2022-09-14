import React from 'react'
import Bitcoin from '../../Assets/Bitcoin.png'
import Ethereum from '../../Assets/Ethereum.png'
import Tether from '../../Assets/Tether.png'
import { Link } from 'react-router-dom'

const Services = () => {
  return (

      //Main Container
    <div className='mt-10 px-4 md:flex'>

        <div className='w-[100%]'>
        <h2 className='text-2xl'>All currencies</h2>
       <div className='flex'>
       <button className='bg-primary text-white text-sm font-gilroysemibold p-2 flex items-center justify-start text-center rounded-md mt-2 mr-3'>
        <ion-icon name={'add'}></ion-icon>
        Update
        </button>
        <button className='bg-primary text-white text-sm font-gilroysemibold p-2 flex items-center justify-start text-center rounded-md mt-2'>
        <ion-icon name={'trash'}></ion-icon>
        Delete
        </button>
       </div>

           {/*Bitcoin*/}
           <section className='bg-white p-3 pr-6 rounded-lg text-black border-2 border-black md:w-[65%] md:mr-5 md:mt-0 mt-5 font-gilroysemibold'>
                          
                          {/*Top section containing nametage, icon and rate*/}
                          <span className='flex justify-between'>
               
                               {/*Top section containing nametage and icon*/}
                               <span className='flex'>
                                    <img
                                    className=''
                                    src={Ethereum}
                                    alt='icon'
                                    />
                                    <h2 className='drop-shadow-lg'>Ethereum</h2>
                               </span>
                                {/*Top section containing nametage and icon*/}
               
                                {/*Top section containing rate*/}
                                <h4 className='text-green-500'>Buy @680/$</h4>
                                 {/*Top section containing rate*/}
               
                          </span>
                           {/*Top section containing nametage, icon and rate*/}
               
                              {/*Down section containing rate*/}
                              <span className='flex justify-between ml-1'>
                                   <h2 className='text-sm'> <span className='text-green-400 ml-2'>Active</span></h2>
                
                                      {/*Trade Button*/}
                                      <h4 className='text-red-300'>Sell @680/$</h4>
                                     {/*Trade Button*/}
                
                
                                </span>
                                 {/*Down section containing rate*/}
               
                     </section>
                  {/*Bitcoin*/}
   {/*Bitcoin*/}
   <section className='bg-white p-3 pr-6 rounded-lg text-black border-2 border-black md:w-[65%] md:mr-5 md:mt-0 mt-5 font-gilroysemibold'>
                          
                          {/*Top section containing nametage, icon and rate*/}
                          <span className='flex justify-between'>
               
                               {/*Top section containing nametage and icon*/}
                               <span className='flex'>
                                    <img
                                    className=''
                                    src={Ethereum}
                                    alt='icon'
                                    />
                                    <h2 className='drop-shadow-lg'>Ethereum</h2>
                               </span>
                                {/*Top section containing nametage and icon*/}
               
                                {/*Top section containing rate*/}
                                <h4 className='text-green-500'>Buy @680/$</h4>
                                 {/*Top section containing rate*/}
               
                          </span>
                           {/*Top section containing nametage, icon and rate*/}
               
                              {/*Down section containing rate*/}
                              <span className='flex justify-between ml-1'>
                                   <h2 className='text-sm'> <span className='text-green-400 ml-2'>Active</span></h2>
                
                                      {/*Trade Button*/}
                                      <h4 className='text-red-300'>Sell @680/$</h4>
                                     {/*Trade Button*/}
                
                
                                </span>
                                 {/*Down section containing rate*/}
               
                     </section>
                  {/*Bitcoin*/}

                  {/*Bitcoin*/}
           <section className='bg-white p-3 pr-6 rounded-lg text-black border-2 border-black md:w-[65%] md:mr-5 md:mt-0 mt-5 font-gilroysemibold'>
                          
                          {/*Top section containing nametage, icon and rate*/}
                          <span className='flex justify-between'>
               
                               {/*Top section containing nametage and icon*/}
                               <span className='flex'>
                                    <img
                                    className=''
                                    src={Ethereum}
                                    alt='icon'
                                    />
                                    <h2 className='drop-shadow-lg'>Ethereum</h2>
                               </span>
                                {/*Top section containing nametage and icon*/}
               
                                {/*Top section containing rate*/}
                                <h4 className='text-green-500'>Buy @680/$</h4>
                                 {/*Top section containing rate*/}
               
                          </span>
                           {/*Top section containing nametage, icon and rate*/}
               
                              {/*Down section containing rate*/}
                              <span className='flex justify-between ml-1'>
                                   <h2 className='text-sm'> <span className='text-green-400 ml-2'>Active</span></h2>
                
                                      {/*Trade Button*/}
                                      <h4 className='text-red-300'>Sell @680/$</h4>
                                     {/*Trade Button*/}
                
                
                                </span>
                                 {/*Down section containing rate*/}
               
                     </section>
                  {/*Bitcoin*/}
        </div>


                  {/*Create Service*/}
                  <div className='font-gilroysemibold text-sm w-[100%]'>
                      <h2 className='text-2xl mt-4'>Create New Currency</h2>
                  <section className='flex flex-col mt-1'>
                  <label>
                      Icon
                  </label>
                  <input type='file' className=''/>
                  </section>

                  <section className='flex flex-col mt-4'>
                  <label>
                      Name
                  </label>
                  <input type='text' className='p-2 border-primary border-2 rounded-md'/>
                  </section>

                  <section className='flex flex-col mt-3'>
                  <label>
                     Buy rate
                  </label>
                  <input type='number'className='p-2 border-primary border-2 rounded-md'/>
                  </section>

                  <section className='flex flex-col mt-3'>
                  <label>
                      Sell rate
                  </label>
                  <input type='number'className='p-2 border-primary border-2 rounded-md'/>
                  </section>

                  <button className='bg-primary mt-4 text-base rounded-md p-3 text-white md:w-[fit] w-[100%] flex items-center text-center justify-center'> <ion-icon name={'add'}></ion-icon>Create</button>
            </div>
                   {/*Create Service*/}
    </div>
    //Main Container
  )
}

export default Services