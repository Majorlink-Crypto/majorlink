import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Bitcoin from "../../Assets/Bitcoin.png";
import Tether from "../../Assets/Tether.png";
import { Link } from "react-router-dom";

const CryptoTable = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [services, setServices] = useState([]);

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

      setServices(res.data.filter((item) => item.type === "Crypto"));
    };

    init();
  }, []);

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

  const getAbbreviation = (name) => {
    switch (name) {
      case "Bitcoin":
        return "BTC";
      case "USDT":
        return "USDT";
      default:
        return "";
    }
  };

  return (
    //Section Container
    <div className="">
      <div className="mt-14 w-[100%]">
        <div className="w-[100%] flex flex-col mt-8">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-2 rounded-2xl bg-[#F9F9FE]">
            <div className="py-5 align-middle inline-block min-w-full sm:px-6 lg:px-0">
              <div className="overflow-hidden sm:rounded-lg">
                <table className="min-w-full ">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-aeonikmedium text-[#5E6985] tracking-wider">
                        Asset
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-aeonikmedium text-[#5E6985] tracking-wider">
                        Buy Rate
                      </th>
                      <th className="px-6 py-3  text-sm font-aeonikmedium text-[#5E6985] tracking-wider text-center">
                        Sell Rate
                      </th>
                      <th className="sm:table-cell px-6 py-3 text-sm font-aeonikmedium text-[#5E6985] tracking-wider text-right md:block hidden">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {services.map((service, i) => (
                      <tr key={i} className="hover:bg-[#f2f2f2] cursor-pointer">
                        <Link to={"/checkout"}>
                          <td className="px-6 py-4 whitespace-nowrap flex items-center space-x-4 text-[#273046]">
                            {getIcon(service.name)}
                            <span className="text-sm font-aeonikmedium">
                              {service.name} ({getAbbreviation(service.name)})
                            </span>
                          </td>
                        </Link>
                        <td className="px-6 py-4 whitespace-nowrap font-gilroy animate-pulse text-[#273046] text-left">
                          ₦{service.web_buy}/$
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap font-gilroy animate-pulse text-[#273046] text-center">
                          ₦{service.web_sell}/$
                        </td>
                        <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap text-right">
                          <Link to={"/checkout"}>
                            <button className="text-indigo-600 hover:text-indigo-900 font-gilroy">
                              Trade
                            </button>
                          </Link>
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
  );
};

export default CryptoTable;
