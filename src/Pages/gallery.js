import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import FeaturesSection from '../Components/HomeComponents/FeaturesSection';
import CtaBanner from '../Components/HomeComponents/CtaBanner';
import Footer from '../Components/Footer';
import { RATES_PAGE_CONTENT, RATES_SECTION_CONTENT } from '../data/content';
import { EXTERNAL_LINKS, TEXT_STYLES, textStyle } from '../data/constants';

const { heading, headingLine2, tabs, card, panel } = RATES_PAGE_CONTENT;
const { coins } = RATES_SECTION_CONTENT;

const formatRate = (value) => {
  if (!value && value !== 0) return '—';
  return '₦' + Number(value).toLocaleString('en-NG');
};

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('crypto');
  const [cryptoServices, setCryptoServices] = useState([]);
  const [giftCardServices, setGiftCardServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState(null);
  const [tradeType, setTradeType] = useState('buy'); // 'buy' | 'sell'
  const [inputAmount, setInputAmount] = useState('');

  useEffect(() => {
    const init = async () => {
      try {
        const res = await axios.get('https://main.majorlink.co/api/services/list', {
          headers: { 'Content-Type': 'application/json', accept: 'application/json' },
        });
        setCryptoServices(res.data.filter((s) => s.type === 'Crypto'));
        setGiftCardServices(res.data.filter((s) => s.type === 'GiftCard'));
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  const services = activeTab === 'crypto' ? cryptoServices : giftCardServices;

  // Compute the rate for the selected service based on buy/sell
  const getRate = (service) => {
    if (!service) return 0;
    if (activeTab === 'crypto') {
      return tradeType === 'buy' ? service.web_buy : service.web_sell;
    }
    return tradeType === 'buy' ? service.buy : service.sell;
  };

  const rate = getRate(selectedService);
  const receivedAmount = inputAmount && rate ? (parseFloat(inputAmount) / rate).toFixed(6) : '';

  const openWhatsApp = () => {
    if (!selectedService) return;
    const msg = `Hi, I would like to ${tradeType} ${selectedService.name} at ₦${rate}. Amount: ₦${inputAmount || '0'}`;
    window.open(`${EXTERNAL_LINKS.whatsapp}&text=${encodeURIComponent(msg)}`);
  };

  const getCoinMeta = (name) => coins[name] || null;

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* ── Main content area ── */}
      <div className="flex pt-24 min-h-screen relative">

        {/* Left / Main rates area */}
        <div
          className="flex-1 px-6 md:px-16 py-10 transition-all duration-300"
          style={{ filter: selectedService ? 'brightness(0.6)' : 'none' }}
          onClick={() => selectedService && setSelectedService(null)}
        >
          {/* Page heading */}
          <h1 className="mb-10" style={textStyle(TEXT_STYLES.ratesPageHeading)}>
            {heading}<br />{headingLine2}
          </h1>

          {/* Tab switcher */}
          <div className="flex items-center border-b border-[#E4E4ED] mb-8">
            <button
              onClick={(e) => { e.stopPropagation(); setActiveTab('crypto'); setSelectedService(null); }}
              className={`pb-3 mr-8 transition-colors ${
                activeTab === 'crypto'
                  ? 'border-b-2 border-[#4B5DFF]'
                  : ''
              }`}
              style={activeTab === 'crypto' ? textStyle(TEXT_STYLES.ratesTabActive) : textStyle(TEXT_STYLES.ratesTabInactive)}
            >
              {tabs.crypto}
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setActiveTab('giftCard'); setSelectedService(null); }}
              className={`pb-3 transition-colors ${
                activeTab === 'giftCard'
                  ? 'border-b-2 border-[#27272A]'
                  : ''
              }`}
              style={activeTab === 'giftCard' ? textStyle(TEXT_STYLES.ratesTabActive) : textStyle(TEXT_STYLES.ratesTabInactive)}
            >
              {tabs.giftCard}
            </button>
          </div>

          {/* Card grid */}
          {loading ? (
            <p className="text-sm text-[#8A90A4] font-aeonikmedium">{panel.loadingText}</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {services.map((service, i) => {
                const meta = getCoinMeta(service.name);
                const buyRate  = activeTab === 'crypto' ? service.web_buy  : service.buy;
                const sellRate = activeTab === 'crypto' ? service.web_sell : service.sell;
                const isSelected = selectedService?.id === service.id;

                return (
                  <div
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setSelectedService(service); setTradeType('buy'); setInputAmount(''); }}
                    className={`bg-[#F4F4F8] rounded-2xl p-5 cursor-pointer transition-all duration-200 ${
                      isSelected ? 'ring-2 ring-[#1B30F5]' : 'hover:bg-[#EBEBF5]'
                    }`}
                  >
                    {/* Coin icon */}
                    <img
                      src={meta?.icon || service.imageurl}
                      alt={service.name}
                      className="w-10 h-10 rounded-full mb-3"
                      onError={(e) => { e.target.onerror = null; e.target.src = service.imageurl; }}
                    />

                    {/* Name */}
                    <p className="mb-4" style={textStyle(TEXT_STYLES.ratesCardTitle)}>
                      {service.name}{meta ? ` (${meta.symbol})` : ''}
                    </p>

                    {/* Rates row */}
                    <div className="flex space-x-6">
                      <div>
                        <p className="mb-1" style={textStyle(TEXT_STYLES.ratesCardLabel)}>{card.buyRateLabel}</p>
                        <p style={textStyle(TEXT_STYLES.ratesCardValue)}>
                          {formatRate(buyRate)}
                        </p>
                      </div>
                      <div>
                        <p className="mb-1" style={textStyle(TEXT_STYLES.ratesCardLabel)}>{card.sellRateLabel}</p>
                        <p style={textStyle(TEXT_STYLES.ratesCardValue)}>
                          {formatRate(sellRate)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* ── Right slide-in panel ── */}
        <div
          className={`fixed top-0 right-0 h-full w-full md:w-[380px] bg-white shadow-2xl z-50 flex flex-col p-8 pt-24 transition-transform duration-400 ease-in-out ${
            selectedService ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
          style={{ transitionDuration: '350ms' }}
        >
          {selectedService && (
            <>
              {/* Coin header */}
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src={getCoinMeta(selectedService.name)?.icon || selectedService.imageurl}
                  alt={selectedService.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p style={textStyle(TEXT_STYLES.ratesCardTitle)}>
                    {selectedService.name}
                    {getCoinMeta(selectedService.name) && ` (${getCoinMeta(selectedService.name).symbol})`}
                  </p>
                </div>
              </div>

              {/* Buy / Sell toggle */}
              <div className="flex items-center space-x-3 mb-6">
                <button
                  onClick={() => { setTradeType('buy'); setInputAmount(''); }}
                  className={`px-4 py-1 rounded-full text-sm font-aeonikmedium border transition-colors ${
                    tradeType === 'buy'
                      ? 'bg-white border-[#273046] text-[#273046]'
                      : 'border-[#E4E4ED] text-[#8A90A4]'
                  }`}
                >
                  {panel.buyLabel}
                </button>
                <button
                  onClick={() => { setTradeType('sell'); setInputAmount(''); }}
                  className={`px-4 py-1 rounded-full text-sm font-aeonikmedium border transition-colors ${
                    tradeType === 'sell'
                      ? 'bg-white border-[#273046] text-[#273046]'
                      : 'border-[#E4E4ED] text-[#8A90A4]'
                  }`}
                >
                  {panel.sellLabel}
                </button>
              </div>

              {/* Amount input */}
              <div className="mb-2">
                <div className="flex items-center">
                  <span className="text-[#273046] font-gilroy text-3xl font-bold mr-1">₦</span>
                  <input
                    type="number"
                    value={inputAmount}
                    onChange={(e) => setInputAmount(e.target.value)}
                    placeholder={panel.inputPlaceholder}
                    className="text-[#C0C5D0] font-gilroy text-3xl font-bold w-full outline-none bg-transparent placeholder-[#C0C5D0]"
                  />
                </div>
                <p className="mt-1" style={textStyle(TEXT_STYLES.ratesCardLabel)}>
                  {formatRate(rate)}/{getCoinMeta(selectedService.name)?.symbol || selectedService.name}
                </p>
              </div>

              {/* You will receive */}
              <div className="bg-[#F4F4F8] rounded-xl p-4 mb-8 mt-4">
                <p className="mb-2" style={textStyle(TEXT_STYLES.ratesCardLabel)}>{panel.youWillReceiveLabel}</p>
                <div className="flex items-center">
                  <span className="text-[#C0C5D0] font-gilroy text-2xl font-bold mr-1">₦</span>
                  <span className="text-[#C0C5D0] font-gilroy text-2xl font-bold">
                    {receivedAmount || panel.inputPlaceholder}
                  </span>
                </div>
              </div>

              {/* CTA button */}
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

      {/* Features, CTA, Footer */}
      <FeaturesSection />
      <CtaBanner />
      <Footer />
    </div>
  );
};

export default Gallery;