import React, { useEffect, useState } from "react";
import transact from "../../Assets/transact.png";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Bitcoin from "../../Assets/Bitcoin.png";
import Ethereum from "../../Assets/Ethereum.png";
import Tether from "../../Assets/Tether.png";
import { Link } from "react-router-dom";
import CryptoTable from "./CryptoTable";
import RatesCalculator from "./RatesCalculator";
import GiftCardTable from "./GiftCardTable";
import Marquee from "react-fast-marquee";
//import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';

const Sectionthree = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [services, setServices] = useState([]);
  const [navmenu, setnavmenu] = useState("Crypto");
  const [bitcoin, setBitcoin] = useState([]);
  const [ethereum, setEth] = useState([]);
  const [tether, setTether] = useState([]);
  const [bnb, setBnb] = useState([]);
  const [ltc, setLtc] = useState([]);
  const [matic, setMatic] = useState([]);
  const [trx, setTrx] = useState([]);


  useEffect(() => {
    Aos.init({ duration: 1000 });

    const init = async () => {
      axios.defaults.baseURL = "https://main.majorlink.co/api";

      const res = await axios.get("/services/list", {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      });

      setServices(res.data);
    };

    init();
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
    Bitcoininit();
    Ethereuminit();
    UsdtInit();
    BNBInit();
    TRXInit();
    LitecoinInit();
    MaticInit();
  }, []);

  const Bitcoininit = async () => {
    axios.defaults.baseURL = "https://main.majorlink.co/api/";

    const res = await axios.get("/getcryptorates/BTC", {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    setBitcoin(res.data.data);
  };

  const Ethereuminit = async () => {
    axios.defaults.baseURL = "https://main.majorlink.co/api/";

    const res = await axios.get("/getcryptorates/ETH", {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    setEth(res.data.data);
 
  };

  const UsdtInit = async () => {
    axios.defaults.baseURL = "https://main.majorlink.co/api/";

    const res = await axios.get("/getcryptorates/USDT", {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    setTether(res.data.data);
 
  };

  const BNBInit = async () => {
    axios.defaults.baseURL = "https://main.majorlink.co/api/";

    const res = await axios.get("/getcryptorates/BNB", {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    setBnb(res.data.data);

  };

  const TRXInit = async () => {
    axios.defaults.baseURL = "https://main.majorlink.co/api/";

    const res = await axios.get("/getcryptorates/TRX", {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    setTrx(res.data.data);
 
  };

  const LitecoinInit = async () => {
    axios.defaults.baseURL = "https://main.majorlink.co/api/";

    const res = await axios.get("/getcryptorates/LTC", {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    setLtc(res.data.data);
 
  };

  const MaticInit = async () => {
    axios.defaults.baseURL = "https://main.majorlink.co/api/";

    const res = await axios.get("/getcryptorates/MATIC", {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    setMatic(res.data.data);
 
  };

  const getIcon = (name) => {
    switch (name) {
      case "Bitcoin":
        return <img src={Bitcoin} alt="Bitcoin Icon" className="h-6" />;
      case "USDT":
        return <img src={Tether} alt="USDT Icon" className="h-6" />;
      default:
        return null;
    }
  };

  const renderComponent = () => {
    switch (navmenu) {
      case "Crypto":
        return <CryptoTable />;
      case "GiftCard":
        return <GiftCardTable />;
      case "Rates Calculator":
        return <RatesCalculator />;
      default:
        return <CryptoTable />;
    }
  };

  const boxselected =
    "cursor-pointer items-center flex space-x-2 bg-[#EEF0FF] rounded-full py-2 md:px-6 px-3 border border-[#1B30F5] justify-center md:w-auto w-[50%]";
  const boxnotselected =
    "cursor-pointer items-center flex space-x-2 bg-[#ffffff] rounded-full py-2 px-6 border border-[#9DA4E3] justify-center md:w-auto w-[50%]";
  const spanselected = "md:border-4 border-2 border-[#1B30F5] rounded-full p-1";
  const spannotselected =
    "md:border-4 border-2 border-[#9DA4E3] rounded-full p-1";
  const textselected = "md:text-base text-xs text-[#1B30F5]";
  const textnotselected = "md:text-base text-xs text-[#9DA4E3]";

  return (
    //Section Container
    <div className="md:mt-0 mt-10 mb-10" data-aos="fade-up">
      <div className="md:mt-48 mt-10 md:mb-0 mb-10">
        <Marquee autoFill={true} pauseOnHover={true} direction="left">
          <div className="space-x-24 flex items-center">
            <div className="space-x-3 flex items-center pl-24">
              <img src={Bitcoin} alt="Bitcoin Icon" className="h-6" />
              <div className="">
                <h1 className="text-[#273046] text-sm font-aeonikmedium">
                  Bitcoin (BTC)
                </h1>
                <h1 className="text-[#273046] text-md font-aeonikmedium">
                 ${bitcoin[0]?.quote?.USD?.price !== undefined
                    ? bitcoin[0]?.quote?.USD?.price
                        .toFixed(2)
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    : "Getting the price..."}
                </h1>
              </div>
            </div>

            <div className="space-x-3 flex items-center">
              <img src={Ethereum} alt="Bitcoin Icon" className="h-6" />
              <div className="space-y-1">
                <h1 className="text-[#273046] text-sm font-aeonikmedium">
                  Ethereum (ETH)
                </h1>
                <h1 className="text-[#273046] text-md font-aeonikmedium">
                  ${ethereum[0]?.quote?.USD?.price !== undefined
                    ? ethereum[0]?.quote?.USD?.price
                        .toFixed(2)
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    : "Getting the price..."}
                </h1>
              </div>
            </div>

            <div className="space-x-3 flex items-center">
              <img src={Tether} alt="Bitcoin Icon" className="h-6" />
              <div className="space-y-1">
                <h1 className="text-[#273046] text-sm font-aeonikmedium">
                  USDT ($)
                </h1>
                <h1 className="text-[#273046] text-md font-aeonikmedium">
                  ${tether[0]?.quote?.USD?.price !== undefined
                    ? tether[0]?.quote?.USD?.price
                        .toFixed(2)
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    : "Getting the price..."}
                </h1>
              </div>
            </div>

            <div className="space-x-3 flex items-center">
              <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png" alt="Bitcoin Icon" className="h-6" />
              <div className="space-y-1">
                <h1 className="text-[#273046] text-sm font-aeonikmedium">
                  BNB (BNB)
                </h1>
                <h1 className="text-[#273046] text-md font-aeonikmedium">
                  ${bnb[0]?.quote?.USD?.price !== undefined
                    ? bnb[0]?.quote?.USD?.price
                        .toFixed(2)
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    : "Getting the price..."}
                </h1>
              </div>
            </div>

            <div className="space-x-3 flex items-center">
              <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/2.png" alt="Bitcoin Icon" className="h-6" />
              <div className="space-y-1">
                <h1 className="text-[#273046] text-sm font-aeonikmedium">
                  Litecoin (LTC)
                </h1>
                <h1 className="text-[#273046] text-md font-aeonikmedium">
                  ${ltc[0]?.quote?.USD?.price !== undefined
                    ? ltc[0]?.quote?.USD?.price
                        .toFixed(2)
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    : "Getting the price..."}
                </h1>
              </div>
            </div>

          </div>
        </Marquee>
      </div>
      {/*Div and contents*/}

      <div className="md:mx-20 mx-6">
        <div className="items-center md:mt-28 ">
          <h1 className="text-[#273046] text-2xl font-grifter">
            Digital Assets Rates
          </h1>
          <p className="text-[#273046] text-sm font-aeonikmedium mt-1 md:w-[40%]">
            Get the current market rate as well as calculate your transaction
            amount based on the rate.
          </p>
          <div className="items-center md:flex md:space-x-4 md:mt-10 mt-8 md:space-y-0 space-y-3">
            <div
              onClick={() => setnavmenu("Crypto")}
              className={navmenu === "Crypto" ? boxselected : boxnotselected}
            >
              <span
                className={
                  navmenu === "Crypto" ? spanselected : spannotselected
                }
              ></span>
              <h1
                className={
                  navmenu === "Crypto" ? textselected : textnotselected
                }
              >
                Crypto
              </h1>
            </div>
            <div
              onClick={() => setnavmenu("GiftCard")}
              className={navmenu === "GiftCard" ? boxselected : boxnotselected}
            >
              <span
                className={
                  navmenu === "GiftCard" ? spanselected : spannotselected
                }
              ></span>
              <h1
                className={
                  navmenu === "GiftCard" ? textselected : textnotselected
                }
              >
                Gift Cards
              </h1>
            </div>
            <div
              onClick={() => setnavmenu("Rates Calculator")}
              className={
                navmenu === "Rates Calculator" ? boxselected : boxnotselected
              }
            >
              <span
                className={
                  navmenu === "Rates Calculator"
                    ? spanselected
                    : spannotselected
                }
              ></span>
              <h1
                className={
                  navmenu === "Rates Calculator"
                    ? textselected
                    : textnotselected
                }
              >
                Rates Calculator
              </h1>
            </div>
          </div>
        </div>
        {/*Div and contents*/}

        {renderComponent()}
      </div>
    </div>
    //Section Container
  );
};

export default Sectionthree;
