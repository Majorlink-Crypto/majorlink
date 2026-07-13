import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const AppShowcaseSection = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);
  return (
    <section
      className="w-full flex justify-center"
      aria-label="App showcase"
    >
      <div
        className="relative overflow-hidden w-full"
        style={{ height: 'clamp(400px, 60vw, 858px)' }}
      >
        {/* Background photo */}
        <img
          src="/images/background.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          style={{ zIndex: 0 }}
        />

        {/* Subtle overlay so the phone pops */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 1, background: 'rgba(0,0,0,0.08)' }}
        />

        {/* Phone mockup — centered, nudged upward */}
        <div
          className="relative flex items-center justify-center h-full"
          style={{ zIndex: 2, transform: 'translateY(8%)' }}
          data-aos="zoom-in"
          data-aos-duration="900"
        >
          <img
            src="/images/phone_big.png"
            alt="Majorlink app on phone showing wallet balance and transactions"
            style={{
              width: 'clamp(200px, 55vw, 780px)',
              marginBottom: 0,
              filter: 'drop-shadow(0 32px 72px rgba(0,0,0,0.32))',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default AppShowcaseSection;
