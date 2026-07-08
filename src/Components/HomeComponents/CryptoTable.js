import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { RATES_SECTION_CONTENT } from "../../data/content";
import { TEXT_STYLES, textStyle } from "../../data/constants";

const { cryptoTable: t, coins } = RATES_SECTION_CONTENT;

const formatRate = (value) => {
  if (!value) return "—";
  return "₦" + Number(value).toLocaleString("en-NG");
};

const CryptoTable = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        const res = await axios.get("https://main.majorlink.co/api/services/list", {
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
        });
        setServices(res.data.filter((item) => item.type === "Crypto"));
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  return (
    <div className="bg-[#F4F4F8] rounded-2xl overflow-hidden">
      {/* Table header */}
      <div className="grid grid-cols-3 px-5 py-3 border-b border-[#E4E4ED]">
        <span style={textStyle(TEXT_STYLES.ratesTableHeader)}>{t.columnAsset}</span>
        <span style={textStyle(TEXT_STYLES.ratesTableHeader)}>{t.columnBuyRate}</span>
        <span style={textStyle(TEXT_STYLES.ratesTableHeader)}>{t.columnSellRate}</span>
      </div>

      {/* Rows */}
      {loading ? (
        <div className="flex justify-center items-center py-10 text-sm text-[#8A90A4]">
          {t.loadingText}
        </div>
      ) : services.length === 0 ? (
        <div className="flex justify-center items-center py-10 text-sm text-[#8A90A4]">
          {t.emptyText}
        </div>
      ) : (
        services.map((service, i) => {
          const coin = coins[service.name];
          return (
            <Link to="/checkout" key={i}>
              <div className="grid grid-cols-3 items-center px-5 py-3 hover:bg-[#EBEBF5] transition-colors duration-150 cursor-pointer border-b border-[#E4E4ED] last:border-0">
                <div className="flex items-center space-x-3">
                  <img
                    src={coin?.icon}
                    alt={service.name}
                    className="w-7 h-7 rounded-full"
                  />
                  <span style={textStyle(TEXT_STYLES.ratesTableValue)}>
                    {coin?.symbol || service.name}
                  </span>
                </div>
                <span className="animate-pulse" style={textStyle(TEXT_STYLES.ratesTableValue)}>
                  {formatRate(service.web_buy)}
                </span>
                <span className="animate-pulse" style={textStyle(TEXT_STYLES.ratesTableValue)}>
                  {formatRate(service.web_sell)}
                </span>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default CryptoTable;
