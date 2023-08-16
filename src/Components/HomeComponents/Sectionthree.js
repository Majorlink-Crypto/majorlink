import React, { useEffect, useState } from 'react'
import transact from '../../Assets/transact.png'
import Aos from 'aos'
import "aos/dist/aos.css"
import axios from 'axios'
import Bitcoin from '../../Assets/Bitcoin.png'
import Ethereum from '../../Assets/Ethereum.png'
import Tether from '../../Assets/Tether.png'
//import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';

const Sectionthree = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const [services, setServices] = useState([]);

    useEffect(() => {
        Aos.init({ duration: 1000 });

        const init = async () => {
            axios.defaults.baseURL = "https://main.majorlink.co/api"

            const res = await axios.get('/services/list', {
                headers: {
                    "Content-Type": "application/json",
                    accept: "application/json"
                }
            });

            setServices(res.data);
            console.log(res.data)

        }

        init();

    }, []);

    const getIcon = (name) => {
        switch (name) {
            case 'Bitcoin':
                return <img src={Bitcoin} alt='Bitcoin Icon' className='h-6' />;
            case 'USDT':
                return <img src={Tether} alt='USDT Icon' className='h-6' />;
            default:
                return null;
        }
    };

    const getAbbreviation = (name) => {
        switch (name) {
            case 'Bitcoin':
                return 'BTC';
            case 'USDT':
                return 'USDT';
            default:
                return '';
        }
    };

    const whatsapp = () => {
        window.open("https://wa.me/+2349071504491")
      }
    return (
        //Section Container
        <div className='md:mx-20 mx-6 md:mt-0 mt-10 mb-10' data-aos="fade-up">

            {/*Div and contents*/}
            <div className='items-center md:mt-32'>
                <h1 className='text-[#273046] text-2xl font-grifter'>Digital Assets Rates</h1>
                <p className='text-[#273046] text-sm font-aeonikmedium mt-1 md:w-[40%]'>Get the current market rate as well as calculate your transaction
                    amount based on the rate.</p>
                <div className='items-center md:flex md:space-x-4 md:mt-10 mt-8 md:space-y-0 space-y-3'>
                    <div className='items-center flex space-x-2 bg-[#EEF0FF] rounded-full py-2 md:px-6 px-3 border border-[#1B30F5] justify-center md:w-auto w-[50%]'>
                        <span className='md:border-4 border-2 border-[#1B30F5] rounded-full p-1'></span>
                        <h1 className='md:text-base text-xs text-[#1B30F5]'>Crypto</h1>
                    </div>
                    <div className='items-center flex space-x-2 bg-[#ffffff] rounded-full py-2 md:px-6 px-3 border border-[#9DA4E3] justify-center md:w-auto w-[50%]'>
                        <span className='md:border-4 border-2 border-[#9DA4E3] rounded-full p-1'></span>
                        <h1 className='md:text-base text-xs text-[#9DA4E3]'>Gift Cards</h1>
                    </div>
                    <div className='items-center flex space-x-2 bg-[#ffffff] rounded-full py-2 px-6 border border-[#9DA4E3] justify-center md:w-auto w-[50%]'>
                        <span className='md:border-4 border-2 border-[#9DA4E3] rounded-full p-1'></span>
                        <h1 className='md:text-base text-xs text-[#9DA4E3]'>Rates Calculator</h1>
                    </div>
                </div>
            </div>
            {/*Div and contents*/}

            <div className='mt-14 w-[100%]'>
                <div className="w-[100%] flex flex-col mt-8">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-2 rounded-2xl bg-[#F9F9FE]">
                        <div className="py-5 align-middle inline-block min-w-full sm:px-6 lg:px-0">
                            <div className="overflow-hidden sm:rounded-lg">
                                <table className="min-w-full ">
                                    <thead>
                                        <tr>
                                            <th className="px-6 py-3 text-left text-sm font-aeonikmedium text-[#5E6985] tracking-wider">Asset</th>
                                            <th className="px-6 py-3 text-left text-sm font-aeonikmedium text-[#5E6985] tracking-wider">Buy Rate</th>
                                            <th className="px-6 py-3  text-sm font-aeonikmedium text-[#5E6985] tracking-wider text-center">Sell Rate</th>
                                            <th className="sm:table-cell px-6 py-3 text-sm font-aeonikmedium text-[#5E6985] tracking-wider text-right md:block hidden">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="">
                                        {services.map((service, i) => (
                                            <tr key={i} className='hover:bg-[#f2f2f2] cursor-pointer' onClick={whatsapp}>
                                                <td className="px-6 py-4 whitespace-nowrap flex items-center space-x-4 text-[#273046]">
                                                    {getIcon(service.name)}
                                                    <span className='text-sm font-aeonikmedium'>
                                                        {service.name} ({getAbbreviation(service.name)})
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap font-gilroy animate-pulse text-[#273046] text-left">₦{service.buy}/$</td>
                                                <td className="px-6 py-4 whitespace-nowrap font-gilroy animate-pulse text-[#273046] text-center">₦{service.sell}/$</td>
                                                <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap text-right">
                                                    <button className="text-indigo-600 hover:text-indigo-900 font-gilroy" onClick={whatsapp}>
                                                        Trade
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        //Section Container
    )
}

export default Sectionthree