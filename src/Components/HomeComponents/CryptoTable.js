import React, { useEffect, useState } from "react";
import axios from "axios";
import { RATES_SECTION_CONTENT, RATES_PAGE_CONTENT } from "../../data/content";
import { EXTERNAL_LINKS, TEXT_STYLES, textStyle } from "../../data/constants";

const { cryptoTable: t } = RATES_SECTION_CONTENT;
const { panel } = RATES_PAGE_CONTENT;

const formatRate = (value) => {
  if (!value && value !== 0) return "—";
  return "₦" + Number(value).toLocaleString("en-NG");
};

const CryptoTable = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState(null);
  const [tradeType, setTradeType] = useState("buy");
  const [inputAmount, setInputAmount] = useState("");

  useEffect(() => {
    const init = async () => {
      try {
        const res = await axios.get("https://api.majorlink.co/v1/crypto/rates", {
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
        });
        const assets = res.data?.data?.assets;
        setServices(Array.isArray(assets) ? assets : []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  const getRate = (service) => {
    if (!service) return 0;
    return service.ngnSellRate || 0;
  };

  const rate = getRate(selectedService);
  const receivedAmount = inputAmount && rate
    ? (parseFloat(inputAmount) / rate).toFixed(6)
    : "";

  const openWhatsApp = () => {
    if (!selectedService) return;
    const msg = `Hi, I would like to ${tradeType} ${selectedService.name} at ₦${rate}. Amount: ₦${inputAmount || "0"}`;
    window.open(`${EXTERNAL_LINKS.whatsapp}&text=${encodeURIComponent(msg)}`);
  };

  const closePanel = () => {
    setSelectedService(null);
    setTradeType("buy");
    setInputAmount("");
  };

  const handleRowClick = (service) => {
    setSelectedService(service);
    setTradeType("buy");
    setInputAmount("");
  };

  return (
    <div className="relative">
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/30 z-40 transition-opacity duration-300"
          onClick={closePanel}
        />
      )}

      <div className="bg-[#F4F4F8] rounded-2xl overflow-hidden">
        <div className="grid grid-cols-3 px-3 sm:px-5 py-3 border-b border-[#E4E4ED]">
          <span className="text-xs sm:text-sm" style={textStyle(TEXT_STYLES.ratesTableHeader)}>{t.columnAsset}</span>
          <span className="text-xs sm:text-sm" style={textStyle(TEXT_STYLES.ratesTableHeader)}>{t.columnBuyRate}</span>
          <span className="text-xs sm:text-sm" style={textStyle(TEXT_STYLES.ratesTableHeader)}>{t.columnSellRate}</span>
        </div>

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
            const isSelected = selectedService?.id === service.id;
            return (
              <div
                key={service.id || i}
                onClick={() => handleRowClick(service)}
                className={`grid grid-cols-3 items-center px-3 sm:px-5 py-3 transition-colors duration-150 cursor-pointer border-b border-[#E4E4ED] last:border-0 ${
                  isSelected ? "bg-[#EBEBF5]" : "hover:bg-[#EBEBF5]"
                }`}
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-5 h-5 sm:w-7 sm:h-7 rounded-full"
                  />
                  <span className="text-xs sm:text-base" style={textStyle(TEXT_STYLES.ratesTableValue)}>
                    {service.asset || service.name}
                  </span>
                </div>
                <span className="text-xs sm:text-base" style={textStyle(TEXT_STYLES.ratesTableValue)}>
                  {formatRate(service.ngnSellRate)}
                </span>
                <span className="text-xs sm:text-base" style={textStyle(TEXT_STYLES.ratesTableValue)}>
                  {formatRate(service.ngnSellRate)}
                </span>
              </div>
            );
          })
        )}
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[380px] bg-white shadow-2xl z-50 flex flex-col p-6 sm:p-8 pt-20 sm:pt-24 transition-transform duration-350 ease-in-out ${
          selectedService ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transitionDuration: "350ms" }}
      >
        {selectedService && (
          <>
            <button
              onClick={closePanel}
              className="absolute top-5 right-5 sm:top-7 sm:right-7 text-[#71717A] hover:text-[#18181B] transition-colors"
              aria-label="Close panel"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            <div className="flex items-center space-x-3 mb-6">
              <img
                src={selectedService.image}
                alt={selectedService.name}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
              />
              <div>
                <p className="font-onest font-bold text-base sm:text-lg text-[#18181B]">
                  {selectedService.name}
                  {selectedService.asset && ` (${selectedService.asset})`}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 mb-6">
              <button
                onClick={() => { setTradeType("buy"); setInputAmount(""); }}
                className={`px-4 py-1.5 rounded-full text-sm font-aeonikmedium border transition-colors ${
                  tradeType === "buy"
                    ? "bg-white border-[#273046] text-[#273046]"
                    : "border-[#E4E4ED] text-[#8A90A4]"
                }`}
              >
                {panel.buyLabel}
              </button>
              <button
                onClick={() => { setTradeType("sell"); setInputAmount(""); }}
                className={`px-4 py-1.5 rounded-full text-sm font-aeonikmedium border transition-colors ${
                  tradeType === "sell"
                    ? "bg-white border-[#273046] text-[#273046]"
                    : "border-[#E4E4ED] text-[#8A90A4]"
                }`}
              >
                {panel.sellLabel}
              </button>
            </div>

            <div className="mb-2">
              <div className="flex items-center">
                <span className="text-[#273046] text-2xl sm:text-3xl font-bold mr-1">₦</span>
                <input
                  type="number"
                  value={inputAmount}
                  onChange={(e) => setInputAmount(e.target.value)}
                  placeholder={panel.inputPlaceholder}
                  className="text-[#C0C5D0] text-2xl sm:text-3xl font-bold w-full outline-none bg-transparent placeholder-[#C0C5D0]"
                />
              </div>
              <p className="mt-1 text-xs text-[#A1A1AA] font-archivo">
                {formatRate(rate)}/{selectedService.asset || selectedService.name}
              </p>
            </div>

            <div className="bg-[#F4F4F8] rounded-xl p-4 mb-6 sm:mb-8 mt-4">
              <p className="mb-2 text-xs text-[#A1A1AA] font-archivo">{panel.youWillReceiveLabel}</p>
              <div className="flex items-center gap-1">
                <span className="text-[#C0C5D0] text-xl sm:text-2xl font-bold">
                  {receivedAmount || panel.inputPlaceholder}
                </span>
                <span className="text-[#A1A1AA] text-sm font-archivo ml-1">
                  {selectedService.asset || selectedService.name}
                </span>
              </div>
            </div>

            <button
              onClick={openWhatsApp}
              className="w-full bg-[#1B30F5] text-white font-aeonikmedium text-sm py-4 rounded-xl hover:bg-[#1425CC] transition-colors"
            >
              {panel.ctaButton}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CryptoTable;
