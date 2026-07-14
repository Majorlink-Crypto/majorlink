import React from 'react';
import { HERO_CONTENT } from '../../data/content';
import { TEXT_STYLES, textStyle } from '../../data/constants';

// ── Store CTA Button ───────────────────────────────────────────────────────────
const StoreButton = ({ btn, imageSrc }) => (
  <a
    href={btn.url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={btn.ariaLabel}
    className="hover:opacity-90 transition-opacity duration-200 shrink-0"
  >
    <img
      src={imageSrc}
      alt={btn.ariaLabel}
      className="h-[48px] md:h-[54px] w-auto object-contain"
    />
  </a>
);

// ── Main Hero Section ──────────────────────────────────────────────────────────
const HeroSection = () => {
  const { headline, body, appStore, playStore, bgImageAlt, cloudAlt } = HERO_CONTENT;

  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-[#FAFAFA] pt-[65px] z-0"
      aria-label="Hero section"
    >
      {/* Layer 1 — sky background
      <img
        src="/images/hero_bg.webp"
        alt={bgImageAlt}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ zIndex: 0, objectPosition: 'center -80px' }}
        aria-hidden="true"
      />
      */}

      {/* Background Container — strictly clipped to hero section bounds */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none" 
        style={{ zIndex: 1 }}
      >
        {/* Cloud layer — h-full keeps it within hero bounds */}
        <img
          src="/images/hero_cloud.webp"
          alt={cloudAlt}
          className="absolute inset-0 w-full h-full object-cover object-top"
          aria-hidden="true"
        />

        {/* Outer rotating ring (hero_bg1) */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: 'translateY(-10%)' }}
        >
          <img
            src="/images/hero_bg1.webp"
            alt=""
            className="w-[73%] max-w-none object-contain animate-spin-clockwise opacity-60"
          />
        </div>

        {/* Inner rotating ring (hero_bg2) */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: 'translateY(-10%)' }}
        >
          <img
            src="/images/hero_bg2.webp"
            alt=""
            className="w-[55%] max-w-none object-contain animate-spin-counterclockwise opacity-80"
          />
        </div>
      </div>

      {/* Layer 3 — centered text content + CTAs */}
      <div
        className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 z-10 h-full pb-12"
      >
        {/* H1 headline */}
        <h1
          className="font-onest font-extrabold text-zinc-900 max-w-4xl mx-auto hero-fade-up"
          style={{
            fontSize: 'clamp(28px, 5.5vw, 68px)',
            lineHeight: '100%',
            letterSpacing: '-0.02em',
          }}
        >
          Move Crypto & <br /> Cash Without Limits
        </h1>

        {/* Body paragraph */}
        <p
          className="font-archivo text-zinc-900 mt-4 md:mt-6 max-w-[410px] mx-auto hero-fade-up-delay-1"
          style={{ fontSize: 'clamp(15px, 3.5vw, 19px)', lineHeight: '140%', fontWeight: 400 }}
        >
          {body}
        </p>

        {/* App Store + Google Play buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-8 md:mt-10 hero-fade-up-delay-2">
          <StoreButton btn={appStore}  imageSrc="/images/app_store_button.webp" />
          <StoreButton btn={playStore} imageSrc="/images/googe_button.webp" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
