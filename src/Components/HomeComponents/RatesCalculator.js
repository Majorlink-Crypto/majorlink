import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import axios from 'axios'
import Bitcoin from '../../Assets/Bitcoin.png'
import Tether from '../../Assets/Tether.png'

function RatesCalculator() {

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
    <div className="">

      {/* Right side (remaining width, full height, white background, scrollable) */}
      <div className=" bg-white  md:w-[60%] pb-20">
        {/* Content for the right side */}

        <div>
          {/* Custom Dropdown for Coin Selection */}
          <div className="relative mt-10 border border-[#DDDDDD] py-3 px-3 rounded-xl w-[95%] focus:outline-none focus:ring-0 cursor-pointer" onClick={toggleDropdown}>
            {selectedOption ? (
              <>
                <img src={selectedOption.name === 'Bitcoin' ? Bitcoin : Tether} alt={selectedOption.name} className="inline-block mr-6 h-6" />
                {selectedOption.name}
              </>
            ) : 'Select a currency'}

            {isOpen && (
              <div className="absolute w-full mt-2 border border-[#DDDDDD] rounded-xl bg-white z-10 right-1">
                {options.map(option => (
                  <div key={option.id} className="py-3 px-3 cursor-pointer hover:bg-[#f3f3f3]" onClick={() => { setSelectedOption(option); setIsOpen(false) }}>
                    <img src={option.name === 'Bitcoin' ? Bitcoin : Tether} alt={option.name} className="inline-block mr-6 h-6 items-center" />
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

      </div>

    </div>
  );
}

export default RatesCalculator;
