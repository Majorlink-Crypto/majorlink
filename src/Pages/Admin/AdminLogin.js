import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import {IonIcon} from "react-ion-icon";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import BounceLoader from "react-spinners/BounceLoader";


const AdminLogin = () => {

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()
    
    const APIURL = ('https://main.majorlink.co/api/admin/login')
    const [email, setemail] = useState('')
     const [password, setpassword] = useState('')

    
        async function login() {
            const item = {email, password}
            if (email.length) {
                if (email.match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) !== null) {
                  setLoading(true)
                await fetch((APIURL), {
                 method: 'POST',
                 body:JSON.stringify(item),
                 headers: {
                   "Content-Type": 'application/json'
                 }
              }).then(res => res.json())
                .then(data => { 
                  setLoading(false)
                  if(data.error == true ){
                    setLoading(false)
                    toast.info(data.message)
                  }else{
                      toast.success('success')
                      setLoading(false)
                      localStorage.setItem('user', JSON.stringify(data))
                      navigate('/admindashboard')
                  }
                })
            
            } else {
              toast.error('Email Address Is Invalid')
              setLoading(false)
            }
            } else {
              
              toast.error("Email Address Is Required")
              setLoading(false)
            }
            }
    

  return (
      //Checkout Main Container
    <div className='items-center justify-center flex pt-20 bg-herosection'>
      <BounceLoader color="#36d7b7" loading={loading}/>
         <Helmet>
        <title>Admin |</title>
      </Helmet>
        {/*Center Div*/}
        <div className='flex flex-col items-start w-fit justify-start md:mt-20 text-center rounded-md bg-herosection md:p-10 md:px-10 px-4 md:pt-10 pt-10 md:pb-10 pb-10'>
            <span className='text-sm font-gilroysemibold text-gray-400 cursor-pointer mb-3 hover:text-primary flex items-center'>
            <IonIcon name='arrow-back-outline'/>
            <h2 className='text-sm font-gilroysemibold text-gray-400 cursor-pointer ml-1 hover:text-primary'> <Link to={'/'}>Home</Link> </h2>
            </span>
             <h2 className='text-4xl text-primary text-start'>Welcome Back,</h2>
             <h2 className='text-2xl text-start'> Mr Samuel!</h2>
               
               <section className='mt-7 text-start'>
               <label className='text-sm font-gilroysemibold text-gray-300 text-start'>Email</label>
             <input className='text-sm font-gilroysemibold p-3 w-[106%] md:w-[126%] border-primary border-2 rounded-md' placeholder='email' type='email' value={email} onChange={(e) => setemail(e.target.value)}/>
               </section>

               <section className='mt-4 text-start'>
               <label className='text-sm font-gilroysemibold text-gray-300 text-start'>Password</label>
             <input className='text-sm font-gilroysemibold p-3 w-[106%] md:w-[136%] border-primary border-2 rounded-md' placeholder='******' type='password' value={password} onChange={(e) => setpassword(e.target.value)}/>
               </section>

                <button className='p-3 bg-primary text-white text-sm font-gilroysemibold mt-4 rounded-md w-[76%] md:w-[fill]' onClick={login}>Log In </button>
        </div>
         {/*Center Div*/}
    </div>
     //Checkout Main Container
  )
}

export default AdminLogin