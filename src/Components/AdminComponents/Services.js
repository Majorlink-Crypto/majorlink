import React, { useEffect, useState } from 'react'
import Bitcoin from '../../Assets/Bitcoin.png'
import Ethereum from '../../Assets/Ethereum.png'
import Tether from '../../Assets/Tether.png'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import BounceLoader from "react-spinners/BounceLoader";

const Services = () => {

     const navigate = useNavigate()
     const [services, setservices] = useState([])
     const user = JSON.parse(localStorage.getItem('user'))
     const token = user.success.token
     const [name, addname] = useState('')
     const [buy, addbuy] = useState('')
     const [sell, addsell] = useState('')
     const [symbol, addsymbol] = useState('')
     const [loading, setLoading] = useState(false);  
     const APIURL = ('https://main.majorlink.co/api/admin/services/add')

     useEffect(() => {
       const init = async () => {
          try {
               const result = await fetch('https://main.majorlink.co/api/services/list', {
                    method: 'GET',
               })
               const dx = await result.json()

               setservices(dx)
            } catch (error) {
                 toast.error(error)
            }
       }

       init()
     }, [])

     // service list
     const hello = services 
     console.log(hello, 'leo')

     async function create () {
          try {
               if(name === ''){
                    toast.error('Name is missing')
               } else if (buy === ''){
                    toast.error('')
               } else if (sell === ''){
                    toast.error('Sell is missing')
               } else if (symbol === ''){
                    toast.error('Symbol is missing')
               }else {
                    const item = {name, buy, sell, symbol}
                    await fetch((APIURL, { 
                         method: 'POST',
                         body:JSON.stringify(item),
                         headers: {
                            Authorization: `Bearer ${token}`,
                           "Content-Type": 'application/json'
                         }.then(res => res.json())
                         .then(data => { 
                           setLoading(false)
                           if(data.error == true ){
                             setLoading(false)
                             toast.info(data.message)
                           }else{
                               toast.success('success')
                               setLoading(false)
                               navigate('/admindashboard')
                           }
                         })
                    }))
               }
          } catch (error) {
               toast.error(error)
          }
     }

     const populate = []
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

       <div>
       {
          populate.map((data, index) => ([
               <section key={index} value={data.name} className='bg-white p-3 pr-6 rounded-lg text-black border-2 border-primary md:w-[65%] md:mr-5 md:mt-0 mt-5 font-gilroysemibold'>
                          
               {/*Top section containing nametage, icon and rate*/}
               <span className='flex justify-between'>
    
                    {/*Top section containing nametage and icon*/}
                    <span className='flex'>
                         <img
                         className=''
                         src={Ethereum}
                         alt='icon'
                         />
                         <h2 className='drop-shadow-lg'>{data.name}</h2>
                    </span>
                     {/*Top section containing nametage and icon*/}
    
                     {/*Top section containing rate*/}
                     <h4 className=''>{data.buy}</h4>
                      {/*Top section containing rate*/}
    
               </span>
                {/*Top section containing nametage, icon and rate*/}
    
                   {/*Down section containing rate*/}
                   <span className='flex justify-between ml-1'>
                        <h2 className='text-sm'> <span className='text-green-400 ml-2'>Active</span></h2>
     
                           {/*Trade Button*/}
                           <h4 className=''>{data.sell}</h4>
                          {/*Trade Button*/}
     
     
                     </span>
                      {/*Down section containing rate*/}
    
          </section>
         ])
         )
      }
   
       </div>

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
                  <input type='text' className='p-2 border-primary border-2 rounded-md' value={name} onChange={(e) => addname(e.target.value)}/>
                  </section>

                  <section className='flex flex-col mt-3'>
                  <label>
                     Buy rate
                  </label>
                  <input type='number'className='p-2 border-primary border-2 rounded-md' value={buy} onChange={(e) => addbuy(e.target.value)}/>
                  </section>

                  <section className='flex flex-col mt-3'>
                  <label>
                      Sell rate
                  </label>
                  <input type='number'className='p-2 border-primary border-2 rounded-md' value={sell} onChange={(e) => addsell(e.target.value)}/>
                  </section>

                  <section className='flex flex-col mt-3'>
                  <label>
                      Symbol
                  </label>
                  <input type='text'className='p-2 border-primary border-2 rounded-md' value={symbol} onChange={(e) => addsymbol(e.target.value)}/>
                  </section>

                  <button className='bg-primary mt-4 text-base rounded-md p-3 text-white md:w-[fit] w-[100%] flex items-center text-center justify-center' onClick={create}> <ion-icon name={'add'}></ion-icon>Create</button>
            </div>
                   {/*Create Service*/}
                   <BounceLoader color="#2752E7" loading={loading}/>
    </div>
    //Main Container
  )
}

export default Services