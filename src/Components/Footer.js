import React from 'react'
import MLCOriginal from '../Assets/iconblue.png'
import axios from 'axios'
import { IonIcon } from "react-ion-icon";
import { Link } from 'react-router-dom'
// import { toast } from 'react-toastify';

import apple from '../Assets/appstoren.png'
import google from '../Assets/playstoren.png'

const Footer = () => {

  const whatsapp = () => {
    window.open("https://wa.me/+2349071504491")
  }
  const instagram = () => {
    window.open("https://instagram.com/majorlink.co?igshid=YmMyMTA2M2Y=")
  }
  const twitter = () => {
    window.open("https://wa.me/+2349071504491")
  }
  const facebook = () => {
    window.open("https://wa.me/+2349071504491")
  }

  axios.defaults.baseURL = "https://main.majorlink.co/api";
  //const { token } = JSON.parse(localStorage.getItem('user'));

  // const [email] = useState('')
  // const [phone] = useState('')
  // const [message] = useState('')

  // const send = async () => {
  //   const item = { email, message, phone }
  //   if (email === '') {
  //     toast.error('Please Fill in Email')
  //   } else if (phone === '') {
  //     toast.error('Please Fill in Phone')
  //   } else if (message === '') {
  //     toast.error('Please Fill in Message')
  //   } else {
  //     try {
  //       await axios.post(`/contact_us`, item, {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         }
  //       });
  //       toast.success(`Message sent successfully`);

  //     } catch (err) {
  //       if (err.response) {
  //         toast.error("something went wrong, please check that your email is correct and try again");
  //       }
  //     }
  //   }
  // }

  return (
    //Main Container
    <div className='lg:mx-12 lg:mt-40 lg:p-10 mt-20'>
      <div className='lg:block hidden'>
        {/* Footer Content */}
        <div className='lg:flex justify-between'>

          {/* Logo and social media icons */}
          <div className='lg:mr-1 mr-0'>
            {/* Logo  */}
            <section className='flex items-center space-x-2'>
              <img
                className='w-7'
                alt=''
                src={MLCOriginal}
              />
              <h1 className='font-grifter text-lg mt-1 text-[#4B5DFF]'>Majorlink</h1>
            </section>
            {/* Logo */}

            <p className='font-aeonikregular text-sm mt-3'>Majorlink allows you to trade your gift</p>
            <p className='font-aeonikregular text-sm mt-1'>cards & crypto to cash instantly.</p>

            {/*  <section className='flex mt-6 text-black text-xl'>
                  <span className='mr-3 cursor-pointer' onClick={whatsapp}>
                  <IonIcon name='logo-whatsapp'/>
                  </span>
                  <span className='mr-3 cursor-pointer' onClick={instagram}>

                   <IonIcon name='logo-instagram'/>
                  </span>
                   <span className='mr-3 cursor-pointer' onClick={twitter}>

                   <IonIcon name='logo-twitter'/>
                   </span>
                   <span className='mr-3 cursor-pointer' onClick={facebook}>

                   <IonIcon name='logo-facebook'/>
                   </span>
                   </section>*/}
          </div>
          {/* Logo and social media icons */}

          {/* Center */}
          <div className='text-sm font-aeonikmedium lg:mr-20 mr-0'>
            <h2 className='text-[#151923]'>Features</h2>

            <ul className='mt-4 text-[#3B455C] space-y-4'>
              <li className='cursor-pointer hover:text-[#4B5DFF]'><Link to={'/checkout'}>Buy Gift cards</Link></li>
              <li className='cursor-pointer hover:text-[#4B5DFF]'><Link to={'/checkout'}>Sell Gift cards</Link></li>
              <li className='cursor-pointer hover:text-[#4B5DFF]'><Link to={'/checkout'}>Trade Crypto</Link></li>
            </ul>
          </div>
          {/* Center */}

          {/* Right */}
          <div className='text-sm font-gilroysemibold lg:mr-20 mr-0 lg:block hidden'>
            <h2 className='text-[#151923]'>Company</h2>

            <ul className='mt-4 text-[#3B455C] space-y-4'>
              <li className='cursor-pointer hover:text-[#4B5DFF]'><Link to={'/'}>About</Link></li>
              <li className='cursor-pointer hover:text-[#4B5DFF]'><Link to={'/gallery'}>Gallery</Link></li>
            </ul>
          </div>
          {/* Right */}

          {/* Right */}
          <div className='text-sm font-gilroysemibold lg:mr-10 mr-0'>
            <h2 className='text-[#151923]'>Legal</h2>

            <ul className='mt-4 text-[#3B455C] space-y-4'>
              <li className='cursor-pointer hover:text-[#4B5DFF]'><Link to={'/terms'}>Terms and Conditions</Link></li>
              <li className='cursor-pointer hover:text-[#4B5DFF]'><Link to={'/privacy'}>Privacy Policy</Link></li>
              <li className='cursor-pointer hover:text-[#4B5DFF]'><Link to={'/aml'}>AML Policy</Link></li>
            </ul>
          </div>
          {/* Right */}

          {/* Contact Support */}
          <div className='text-sm font-gilroysemibold lg:mt-0 mt-10 lg:pb-0 pb-4 flex flex-col'>
            <h2 className='text-[#151923]'>Support</h2>

            <ul className='mt-4 text-[#3B455C] space-y-4'>
              <li className='cursor-pointer hover:text-[#4B5DFF]'><Link to={'/'}>FAQs</Link></li>
              <li className='cursor-pointer hover:text-[#4B5DFF]'><Link to={'/contact'}>Contact Us</Link></li>
              <li className='cursor-pointer hover:text-[#4B5DFF]'>+2349071504491</li>
              <li className='cursor-pointer hover:text-[#4B5DFF]'>+905338239262</li>
            </ul>
          </div>
          {/* Contact Support */}

        </div>
        {/* Footer Content */}

        <div className='flex justify-between mt-52 items-baseline'>
          <h2 className='text-start font-gilroysemibold text-sm text-[#3B455C] mt-10'> © 2024 MajorLink Technologies, Ltd.</h2>

          <div className='flex items-center space-x-5 mb-10'>
            <section className='flex mt-6 text-[#646464] text-xl mb-4'>
              <span className='mr-4 cursor-pointer' onClick={whatsapp}>
                <IonIcon name='logo-whatsapp' color='#eeee' />
              </span>
              <span className='mr-4 cursor-pointer' onClick={instagram}>

                <IonIcon name='logo-instagram' color='#273046' />
              </span>
              <span className='mr-4 cursor-pointer' onClick={twitter}>

                <IonIcon name='logo-twitter' color='#273046' />
              </span>
              <span className='mr-4 cursor-pointer' onClick={facebook}>

                <IonIcon name='logo-facebook' color='#273046' />
              </span>
            </section>
            <a href='https://play.google.com/store/apps/details?id=com.olamide81.MajorlinkApp'>
              <span className='rounded-full py-4 px-6 flex items-center space-x-3 bg-[#273046] cursor-pointer'>
                <img src={google} alt="google" className='h-5' />
                <div>
                  <p className='font-aeonikmedium text-sm text-[#ffffff]'>Play Store</p>
                </div>
              </span>
            </a>
            <a href='https://apps.apple.com/us/app/majorlink/id6472656224'>
              <span className='rounded-full py-4 px-6 flex items-center space-x-3 bg-[#273046] cursor-pointer'>
                <img src={apple} alt="apple" className='h-5' />
                <div>

                  <p className='font-aeonikmedium text-sm text-[#ffffff]'>App Store</p>
                </div>
              </span>
            </a>

          </div>
        </div>

      </div>


      {/*MOBILE DEVICE FOOTER*/}

      <div className='lg:hidden mb-10'>
        <div className='items-center flex px-2 flex-col justify-center text-center'>
          <div>
            {/* Logo  */}
            <section className='flex items-center space-x-2 justify-center'>
              <img
                className='w-7'
                alt=''
                src={MLCOriginal}
              />
              <h1 className='font-grifter text-lg mt-1 text-[#4B5DFF]'>Majorlink</h1>
            </section>
            {/* Logo */}

            <p className='font-aeonikregular text-sm mt-3 text-center'>Majorlink allows you to trade your gift</p>
            <p className='font-aeonikregular text-sm mt-1 text-center'>cards & crypto to cash instantly.</p>
          </div>

          <div style={{
            // gridTemplateColumns: '4'
          }} className='mt-14 w-[95%] mm:grid-cols-3 grid-cols-2 sm:grid-cols-4 min-w-[320px] md:w-[80%] grid text-left gap-9'>
            {/* Center */}
            <div className='text-sm font-aeonikmedium lg:mr-20 mr-0'>
              <h2 className='text-[#151923]'>Features</h2>

              <ul className='mt-4 text-[#3B455C] space-y-4'>
                <li className='cursor-pointer hover:text-[#4B5DFF]'><Link to={'/checkout'}>Buy Gift cards</Link></li>
                <li className='cursor-pointer hover:text-[#4B5DFF]'><Link to={'/checkout'}>Sell Gift cards</Link></li>
                <li className='cursor-pointer hover:text-[#4B5DFF]'><Link to={'/checkout'}>Trade Crypto</Link></li>
              </ul>
            </div>
            {/* Center */}

            {/* Right */}
            <div className='text-sm font-gilroysemibold lg:mr-20 mr-0'>
              <h2 className='text-[#151923]'>Company</h2>

              <ul className='mt-4 text-[#3B455C] space-y-4'>
                <li className='cursor-pointer hover:text-[#4B5DFF]'><Link to={'/'}>About</Link></li>
                <li className='cursor-pointer hover:text-[#4B5DFF]'><Link to={'/gallery'}>Gallery</Link></li>
              </ul>
            </div>
            {/* Right */}

            {/* Right */}
            <div className='text-sm font-gilroysemibold lg:mr-10 mr-0'>
              <h2 className='text-[#151923]'>Legal</h2>

              <ul className='mt-4 text-[#3B455C] space-y-4'>
                <li className='cursor-pointer hover:text-[#4B5DFF]'><Link to={'/terms'}>Terms and Conditions</Link></li>
                <li className='cursor-pointer hover:text-[#4B5DFF]'><Link to={'/privacy'}>Privacy Policy</Link></li>
                <li className='cursor-pointer hover:text-[#4B5DFF]'><Link to={'/aml'}>AML Policy</Link></li>
              </ul>
            </div>
            {/* Right */}

            <div className='text-sm font-gilroysemibold lg:mr-10 mr-0'>
            <h2 className='text-[#151923]'>Support</h2>

            <ul className='mt-4 text-[#3B455C] space-y-4'>
              <li className='cursor-pointer hover:text-[#4B5DFF]'><Link to={'/'}>FAQs</Link></li>
              <li className='cursor-pointer hover:text-[#4B5DFF]'><Link to={'/contact'}>Contact Us</Link></li>
                <li className='cursor-pointer hover:text-[#4B5DFF]'><Link to={'tel:+2349071504491'}>+2349071504491</Link></li>
                <li className='cursor-pointer hover:text-[#4B5DFF]'><Link to={'tel:+905338239262'}>+905338239262</Link></li>
            </ul>
          </div>
          </div>

        </div>
      

        <div className='mt-10 items-center flex flex-col justify-center text-center'>
          <h2 className='text-start font-gilroysemibold text-sm text-[#3B455C] mt-10'> © 2024 MajorLink Technologies, Ltd.</h2>
          <section className='flex mt-6 text-[#646464] text-xl mb-4'>
            <span className='mr-4 cursor-pointer' onClick={whatsapp}>
              <IonIcon name='logo-whatsapp' color='#eeee' />
            </span>
            <span className='mr-4 cursor-pointer' onClick={instagram}>

              <IonIcon name='logo-instagram' color='#273046' />
            </span>
            <span className='mr-4 cursor-pointer' onClick={twitter}>

              <IonIcon name='logo-twitter' color='#273046' />
            </span>
            <span className='mr-4 cursor-pointer' onClick={facebook}>

              <IonIcon name='logo-facebook' color='#273046' />
            </span>
          </section>
          <div className='flex items-center mt-6 space-x-4'>
            <a href='https://play.google.com/store/apps/details?id=com.olamide81.MajorlinkApp'>
              <span className='rounded-full py-4 px-6 flex items-center space-x-3 bg-[#273046] cursor-pointer'>
                <img alt={'play store'} src={google} className='h-5' />
                <div>
                  <p className='font-aeonikmedium lg:text-sm text-xs text-[#ffffff]'>Play Store</p>
                </div>
              </span>
            </a>
            <a href='https://apps.apple.com/us/app/majorlink/id6472656224'>
              <span className='rounded-full py-4 px-6 flex items-center space-x-3 bg-[#273046] cursor-pointer'>
                <img src={apple} alt={'app store'} className='h-5' />
                <div>

                  <p className='font-aeonikmedium lg:text-sm text-xs text-[#ffffff]'>App Store</p>
                </div>
              </span>
            </a>

          </div>
        </div>
      </div>
    </div>
    //Main Container
  )
}

export default Footer