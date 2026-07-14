import React, { useEffect, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HomeComponents/HeroSection'
import StatsBar from '../Components/HomeComponents/StatsBar'
import FeaturesSection from '../Components/HomeComponents/FeaturesSection'
import ServicesSection from '../Components/HomeComponents/ServicesSection'
import HowItWorks from '../Components/HomeComponents/HowItWorks'
import Sectionthree from '../Components/HomeComponents/Sectionthree'
import FaqSection from '../Components/HomeComponents/FaqSection'
import AppShowcaseSection from '../Components/HomeComponents/AppShowcaseSection'
import TestimonialsSection from '../Components/HomeComponents/TestimonialsSection'
import CtaBanner from '../Components/HomeComponents/CtaBanner'
import Footer from '../Components/Footer'

const HomePage = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 800, once: true, startEvent: 'load' })
    Aos.refresh()

    const consent = localStorage.getItem('majorlink_cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('majorlink_cookie_consent', 'accepted');
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('majorlink_cookie_consent', 'rejected');
    setShowBanner(false);
  };

  return (
    <div>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <HowItWorks />
      <Sectionthree />
      <FeaturesSection />
      <FaqSection />
      <AppShowcaseSection />
      <TestimonialsSection />
      <CtaBanner />
      <Footer />

      {showBanner && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-[850px] z-50 bg-white border border-zinc-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.08)] rounded-full px-4 sm:px-5 py-3 flex flex-row items-center justify-between gap-4 font-archivo text-zinc-800 animate-fadeIn">
          {/* Left: Cookie Icon + Text */}
          <div className="flex items-center space-x-3 min-w-0">
            <div className="w-9 h-9 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600">
                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5Z" />
                <path d="M8.5 8.5v.01" />
                <path d="M16 15.5v.01" />
                <path d="M12 12v.01" />
                <path d="M11 17v.01" />
                <path d="M7 14v.01" />
              </svg>
            </div>
            <span className="truncate hidden md:inline text-[13px] font-medium tracking-tight">
              By clicking “Accept”, you agree to the storing of cookies on your device.
            </span>
            <span className="truncate md:hidden text-xs font-medium tracking-tight">
              We use cookies to improve your experience.
            </span>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center space-x-3 shrink-0">
            {/* Settings toggle icon */}
            <button className="text-zinc-400 hover:text-zinc-700 transition-colors p-1" aria-label="Cookie settings">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="21" x2="4" y2="14" />
                <line x1="4" y1="10" x2="4" y2="3" />
                <line x1="12" y1="21" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12" y2="3" />
                <line x1="20" y1="21" x2="20" y2="16" />
                <line x1="20" y1="12" x2="20" y2="3" />
                <line x1="2" y1="14" x2="6" y2="14" />
                <line x1="10" y1="8" x2="14" y2="8" />
                <line x1="18" y1="16" x2="22" y2="16" />
              </svg>
            </button>

            {/* Reject */}
            <button 
              onClick={handleReject}
              className="px-4 py-2 border border-zinc-200 hover:bg-zinc-50 active:bg-zinc-100 text-zinc-800 rounded-full font-medium transition-colors text-xs"
            >
              Reject
            </button>

            {/* Accept */}
            <button 
              onClick={handleAccept}
              className="px-5 py-2 bg-zinc-950 hover:bg-zinc-900 active:bg-black text-white rounded-full font-medium transition-colors text-xs"
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomePage