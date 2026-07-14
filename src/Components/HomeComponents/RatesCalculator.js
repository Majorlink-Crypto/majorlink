import React, { useState, useEffect } from 'react';
import axios from 'axios'

function RatesCalculator() {

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

  return (
    <div className="">
      <div className="bg-white md:w-[60%] pb-20">
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
      </div>
    </div>
  );
}

export default RatesCalculator;
