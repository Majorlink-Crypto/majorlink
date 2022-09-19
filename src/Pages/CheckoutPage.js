import React, {useState} from 'react'
import { patch, get, defaults, AxiosError } from 'axios'
import { Helmet } from 'react-helmet';
import {IonIcon} from "react-ion-icon";
import { Link } from 'react-router-dom';
import Select from 'react-select'
import { toast } from 'react-toastify';

const CheckoutPage = () => {
  defaults.baseURL = 'https://main.majorlink.co/api';
  const { token } = JSON.parse(localStorage.getItem('user'));

  const [data, setData] = useState([])
  const [options, setOption] = React.useState([]);
  const [update, setUpdate] = React.useState(false);
  const [value, setvalue] = React.useState(false);
  const [amount, setamount] = React.useState('')
  const [buyorsell, setbuyorsell] = React.useState('')
  const [checked, setchecked] = React.useState(false)
  const [name, setname] = useState('')
  const [email, setemail] = useState('')



  React.useEffect(() => {

    const init = async () => {

      const { data: dx } = await get("/services/list", {
        headers: {
          "Content-Type": "application/json"
        }
      })

      setData(dx)

      const opx = dx.map(({ name, id }, idx) => ({idx , id, value: name, label: name }));

      setOption(opx)
    
    }

    init();

  }, [update]);

     // handle selection
     const handleChanged = (e) => {
       setvalue(e)
       console.warn(value.label)
    }

    const handleChange = (e) => {
       setbuyorsell(e)
       console.warn(buyorsell.label)
    }
    
    const watb = buyorsell.label
    const wat = value.label

    const ooptions = [ 
      { value: 'Buy', label: 'Buy' },
      { value: 'Sell', label: 'Sell' },
    ]

    const checkout = () => {
     if(amount === ''){
        toast.error('Please fill in an amount')
     } else if(name === ''){
      toast.error('Please fill in your name')
     }if(email === ''){
     toast.error('Please fill in your email')
     }else if (wat === undefined){
       toast.error('Please Select the Currency you would like to trade')
     } else if (watb === undefined){
        toast.error('Please Select if you want to buy or sell')
     } else if (checked === false){
      toast.error('Please accept the terms and conditions')
      }else {
      window.open(`https://wa.me/+905338239262?text=Hello,%20Majorlink%20I%20am%20${name}%20and%20I%20want%20to%20${watb}%20${amount}%20${wat},%20here%20is%20my%20email%20${email}`, "_blank") 
      console.log(checked)
     }
    }
  
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
             <input className='text-sm font-gilroysemibold p-3 w-[106%] md:w-[126%] border-primary border-2 rounded-md' placeholder='Name' value={name} onChange={(e) => setname(e.target.value)}/>
               </section>

               <section className='mt-4 text-start'>
               <label className='text-sm font-gilroysemibold text-gray-300 text-start'>Your Email</label>
             <input className='text-sm font-gilroysemibold p-3 w-[106%] md:w-[136%] border-primary border-2 rounded-md' placeholder='youremail@example.com' type='email' value={email} onChange={(e) => setemail(e.target.value)}/>
               </section>

               <section className='mt-4 text-start flex flex-col'>
               <label className='text-sm font-gilroysemibold text-gray-300 text-start'>Amount you want to transact</label>
               </section>


               <section className='mt-0 text-start flex flex-col text-sm font-gilroysemibold'>
               <Select
              onChange={handleChanged}
              isClearable={false}
              name='colors'
              options={options}
              className='react-select'
              classNamePrefix='select'
            />

          <section className='mt-2'>
          <label className='text-sm font-gilroysemibold text-gray-300 text-start'>Buy or Sell ?</label>
          <Select
              onChange={handleChange}
              isClearable={false}
              name='colors'
              options={ooptions}
              className='react-select'
              classNamePrefix='select'
            />
          </section>
    
             <input className='text-sm font-gilroysemibold p-3 mt-2 w-[106%] border-primary border-2 rounded-md mr-2' placeholder='Enter Amount' type='number' value={amount} onChange={(e) => setamount(e.target.value)} />
               </section>

            {/*   <section className='mt-4 text-start flex flex-col'>
               <label className='text-sm font-gilroysemibold text-gray-300 text-start'>Amount you will Get in Naira</label>

               </section>

               <section className='mt-0 text-start flex flex-row'>
             <input disabled className='text-sm font-gilroysemibold p-3 w-[106%] border-primary border-2 rounded-md mr-2' placeholder='400' type='number'  />
             <span className='mr-3 bg-white text-green-700 p-3 flex items-center justify-center border-2 border-primary rounded-md'>
               <IonIcon name='cash-outline'/>
               </span> 
               </section>*/}

                <section className='mt-3 flex font-gilroysemibold text-sm'>
                    <input type='checkbox' className='border-2 border-primary' onClick={() => setchecked(!checked)}/>
                    <p className='ml-2'>I agree to the <span className='hover:text-primary text-gray-400 cursor-pointer'> terms </span> and <span className='hover:text-primary text-gray-400 cursor-pointer'> conditions </span> </p>
                </section>

                <button className='p-3 bg-primary text-white text-sm font-gilroysemibold mt-4 rounded-md w-[fill]' onClick={checkout}>Checkout</button>
        </div>
         {/*Center Div*/}
    </div>
     //Checkout Main Container
  )
}

export default CheckoutPage