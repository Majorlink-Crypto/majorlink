import React, { useState, useEffect } from 'react';
import spiral from '../Assets/spiral.png'
import '../Assets/Styles/hero.css'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import axios from 'axios'
import Bitcoin from '../Assets/Bitcoin.png'
import Tether from '../Assets/Tether.png'

function CheckoutPage() {

  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [rateType, setRateType] = useState('buy');  // default to 'buy'
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState('');

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {

    const init = async () => {
      axios.defaults.baseURL = "https://main.majorlink.co/api"

      const res = await axios.get('/services/list', {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json"
        }
      });

      setOptions(res.data);
      setSelectedOption(res.data[0]);  // default to the first option
    }

    init();

  }, []);


  const calculateNairaAmount = () => {
    const rate = rateType === 'buy' ? selectedOption?.buy : selectedOption?.sell;
    return amount * rate;
  };

  // Function to format numbers with commas
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const checkout = async () => {
    // Check for missing or invalid inputs
    if (!selectedOption) {
        toast.error('Please select a currency.');
        return;
    }

    if (!rateType) {
        toast.error('Please select a rate type.');
        return;
    }

    if (!amount || amount <= 0) {
        toast.error('Please enter a valid transaction amount.');
        return;
    }

    // Main logic: initiate WhatsApp conversation (or any other primary action)
    const transactionType = rateType === 'buy' ? "purchase" : "sell";
    const baseMessage = `Good day, I'd like to ${transactionType} $${amount} worth of ${selectedOption.name}. Could you provide further assistance regarding the procedure and any other relevant details? Thank you.`;
    const encodedMessage = encodeURIComponent(baseMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+2349071504491&text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');

    // If the main logic executes without issues
    toast.success('Success! Redirecting to WhatsApp...');
    setAmount("")
}




  return (
    <div className="flex h-screen">

      {/* Left side (45% width, full height, blue background) */}
      <div className="hidden md:flex md:w-[40%] bg-[#4B5DFF] h-full flex-shrink-0 overflow-x-hidden">
        {/* Image in the left side */}
        <img src={spiral} alt='Spiral' className='w-40 h-40' />

        <div className='items-center justify-center absolute bottom-32 left-12 right-6 self-center'>
          <h2 className='md:text-xl text-xl font-grifter tracking-wide md:mt-20 mt-10 text-white'>Trade your GiftCards & Crypto</h2>
          <h2 className='text-[#b4bbf3] md:text-4xl text-5xl mt-4 font-grifter tracking-wide'>Easy with Speed.</h2>
          <p className='text-[#ffffff] text-base font-aeonikregular text-start mt-4 tracking-wide w-[38%]'>Start trading now to enjoy the best rates. We provide the best and
            fastest service across the world in swapping e-currencies.</p>
        </div>
      </div>

      {/* Right side (remaining width, full height, white background, scrollable) */}
      <div className="flex-grow  overflow-y-auto bg-white  md:w-[60%] md:px-16 px-6 pb-20 pt-10">
        {/* Content for the right side */}


        <Link to={'/'}>
          <h1 className='mt-4'>Go back to website</h1>
        </Link>

        <h1 className='mt-16 font-grifter text-3xl'>Guided Checkout</h1>
        <p className='font-aeonikregular text-[#273046] text-xs tracking-wide leading-5'>Quickly start trading, through the guided checkout, scared of how trading online
          feels so insecure, well we set a guided checkout that leads you straight to us.</p>

        <div className='items-center md:flex md:space-x-4 mt-8 md:space-y-0 space-y-3'>
          <div className='cursor-pointer items-center flex space-x-2 bg-[#EEF0FF] rounded-full py-2 md:px-6 px-3 border border-[#1B30F5] justify-center md:w-auto w-[50%]'>
            <span className='md:border-4 border-2 border-[#1B30F5] rounded-full p-1'></span>
            <h1 className='md:text-sm text-xs text-[#1B30F5]'>Crypto &</h1>
            <span className='md:border-4 border-2 border-[#1B30F5] rounded-full p-1'></span>
            <h1 className='md:text-sm text-xs text-[#1B30F5]'>Gift Cards</h1>
          </div>
        </div>

        <div>
          {/* Custom Dropdown for Coin Selection */}
          <div className="relative mt-10 border border-[#DDDDDD] py-3 px-3 rounded-xl w-[95%] focus:outline-none focus:ring-0 cursor-pointer" onClick={toggleDropdown}>
            {selectedOption ? (
              <>
                <img src={selectedOption.icon} alt={selectedOption.name} className="inline-block mr-2 h-6 items-center rounded-full w-6" />
                {selectedOption.name}
              </>
            ) : 'Select a currency'}

            {isOpen && (
              <div className="absolute w-full mt-2 border border-[#DDDDDD] rounded-xl bg-white z-10 right-1">
                {options.map(option => (
                  <div key={option.id} className="py-3 px-3 cursor-pointer hover:bg-[#f3f3f3]" onClick={() => { setSelectedOption(option); setIsOpen(false) }}>
                    <img src={option.icon} alt={option.name} className="inline-block mr-2 h-6 items-center rounded-full w-6" />
                    {option.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Dropdown for Rate Type Selection & Display Rate */}
          <div className="relative mt-5">
            <select
              value={`${rateType} @ ₦${rateType === 'buy' ? selectedOption?.buy : selectedOption?.sell}/$`}
              onChange={(e) => {
                const newRateType = e.target.value.startsWith('buy') ? 'buy' : 'sell';
                setRateType(newRateType);
              }}
              className="appearance-none border border-[#DDDDDD] py-3 px-3 rounded-xl w-[95%] focus:outline-none focus:ring-0"
            >
              {selectedOption && [
                <option key="buy" value={`buy @ ₦${selectedOption?.buy}/$`} className="text-[#737D96] text-aeonikregular">Buy @ ₦{selectedOption?.buy}/$</option>,
                <option key="sell" value={`sell @ ₦${selectedOption?.sell}/$`} className="text-[#737D96] text-aeonikregular">Sell @ ₦{selectedOption?.sell}/$</option>
              ]}
            </select>
          </div>

          <div className="relative mt-5 border border-[#DDDDDD] py-3 px-3 rounded-xl w-[95%] flex items-center space-x-4">
            <span className='text-[#7C9D1D]'>$</span>
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-transparent focus:outline-none"
            />
          </div>

          {/* Display information and amount in Naira */}
          <div className="mt-10">
            <h1 className='font-aeonikregular text-[#273046]'>
              {rateType === 'buy' ? "What you’ll receive in Naira" : "What you will send in Naira"}
            </h1>
            <p className='font-aeonikregular text-xs text-[#7280A0] mt-1'>Average confirmation time: 5 to 10 mins.</p>
            <h1 className="md:text-3xl text-2xl mt-6 font-grifter text-[#323948]">
              ₦{numberWithCommas(calculateNairaAmount().toFixed(2))}
            </h1>
          </div>
        </div>

        <div onClick={checkout} className='bg-[#4B5DFF] py-4 flex cursor-pointer items-center justify-center mt-20 rounded-lg'>
          <h1 className='text-white'>Continue to WhatsApp</h1>
        </div>


        <div className='mt-14'>
          <h1 className='text-[#273046] font-aeonikregular'>Trading on the website directs you to our official WhatsApp contact at
            <span className='text-black font-aeonikbold'> +2349071504491 </span> Please be aware of scammers, and kindly confirm the phone number is same on our contact page, and the website you are currently on should be www.majorlink.co/checkout</h1>
        </div>
      </div>

    </div>
  );
}

export default CheckoutPage;
