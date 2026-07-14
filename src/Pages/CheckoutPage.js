import React, { useState, useEffect } from 'react';
import spiral from '../Assets/spiral.png'
import '../Assets/Styles/hero.css'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios'

function CheckoutPage() {

  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [rateType, setRateType] = useState('buy');
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState('');

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const init = async () => {
      try {
        const res = await axios.get('/v1/crypto/rates', {
          headers: {
            "Content-Type": "application/json",
            accept: "application/json"
          }
        });
        const assets = res.data?.data?.assets;
        const data = Array.isArray(assets) ? assets : [];
        setOptions(data);
        if (data.length > 0) setSelectedOption(data[0]);
      } catch (e) {
        console.error(e);
      }
    }
    init();
  }, []);

  const calculateNairaAmount = () => {
    const rate = selectedOption?.ngnSellRate || 0;
    return amount * rate;
  };

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const checkout = async () => {
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

    const transactionType = rateType === 'buy' ? "purchase" : "sell";
    const baseMessage = `Good day, I'd like to ${transactionType} $${amount} worth of ${selectedOption.name}. Could you provide further assistance regarding the procedure and any other relevant details? Thank you.`;
    const encodedMessage = encodeURIComponent(baseMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+2349071504491&text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');

    toast.success('Success! Redirecting to WhatsApp...');
    setAmount("")
  }

  return (
    <div className="flex h-screen">
      <div className="hidden md:flex md:w-[40%] bg-[#4B5DFF] h-full flex-shrink-0 flex-col overflow-hidden relative">
        <img src={spiral} alt='Spiral' className='w-40 h-40 flex-shrink-0' />
        <div className='flex flex-col justify-end flex-1 px-12 pb-20'>
          <h2 className='text-xl font-grifter tracking-wide text-white'>Trade your GiftCards &amp; Crypto</h2>
          <h2 className='text-[#b4bbf3] text-4xl mt-4 font-grifter tracking-wide'>Easy with Speed.</h2>
          <p className='text-white text-base font-aeonikregular mt-4 tracking-wide leading-relaxed max-w-[280px]'>
            Start trading now to enjoy the best rates. We provide the best and fastest service across the world in swapping e-currencies.
          </p>
        </div>
      </div>

      <div className="flex-grow overflow-y-auto bg-white md:w-[60%] md:px-16 px-6 pb-20 pt-10">
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
          <div className="relative mt-10 border border-[#DDDDDD] py-3 px-3 rounded-xl w-[95%] focus:outline-none focus:ring-0 cursor-pointer" onClick={toggleDropdown}>
            {selectedOption ? (
              <>
                <img src={selectedOption.image} alt={selectedOption.name} className="inline-block mr-2 h-6 items-center rounded-full w-6" />
                {selectedOption.name}
              </>
            ) : 'Select a currency'}

            {isOpen && (
              <div className="absolute w-full mt-2 border border-[#DDDDDD] rounded-xl bg-white z-10 right-1">
                {options.map(option => (
                  <div key={option.id} className="py-3 px-3 cursor-pointer hover:bg-[#f3f3f3]" onClick={() => { setSelectedOption(option); setIsOpen(false) }}>
                    <img src={option.image} alt={option.name} className="inline-block mr-2 h-6 items-center rounded-full w-6" />
                    {option.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative mt-5">
            <select
              value={rateType}
              onChange={(e) => setRateType(e.target.value)}
              className="appearance-none border border-[#DDDDDD] py-3 px-3 rounded-xl w-[95%] focus:outline-none focus:ring-0"
            >
              <option value="buy" className="text-[#737D96] text-aeonikregular">Buy @ ₦{selectedOption?.ngnSellRate || 0}/$</option>
              <option value="sell" className="text-[#737D96] text-aeonikregular">Sell @ ₦{selectedOption?.ngnSellRate || 0}/$</option>
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

          <div className="mt-10">
            <h1 className='font-aeonikregular text-[#273046]'>
              {rateType === 'buy' ? "What you'll receive in Naira" : "What you will send in Naira"}
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
