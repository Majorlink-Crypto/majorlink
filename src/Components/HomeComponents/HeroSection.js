import React from 'react';
import { HERO_CONTENT } from '../../data/content';
import { TEXT_STYLES, textStyle } from '../../data/constants';

// ── Store CTA Button ───────────────────────────────────────────────────────────
const StoreButton = ({ btn, iconSrc }) => (
  <a
    href={btn.url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={btn.ariaLabel}
  >
    <button
      className="
        flex items-center space-x-3
        bg-brand-blue hover:bg-brand-blueDark
        transition-colors duration-200
        rounded-xl px-4 py-2.5
        cursor-pointer
        border border-brand-blue
      "
    >
      <img src={iconSrc} alt="" className="w-5 h-5 object-contain shrink-0" />
      <span className="flex flex-col items-start">
        <span style={textStyle(TEXT_STYLES.storeSubDark)}>
          {btn.sublabel}
        </span>
        <span style={textStyle(TEXT_STYLES.storeMainDark)}>
          {btn.mainLabel}
        </span>
      </span>
    </button>
  </a>
);

// ── Main Hero Section ──────────────────────────────────────────────────────────
const HeroSection = () => {
  const { headline, body, appStore, playStore, bgImageAlt, cloudAlt } = HERO_CONTENT;

  return (
    <section
      className="relative w-full overflow-hidden bg-[#FAFAFA] pt-[65px] min-h-[600px] md:min-h-[800px] lg:min-h-[1024px]"
      aria-label="Hero section"
    >
      {/* Layer 1 — sky background */}
      <img
        src="/images/hero_bg.webp"
        alt={bgImageAlt}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ zIndex: 0, objectPosition: 'center -80px' }}
        aria-hidden="true"
      />

      {/* Layer 2 — cloud + crypto icons (all baked into the PNG) */}
      <img
        src="/images/hero_cloud.webp"
        alt={cloudAlt}
        className="absolute inset-0 w-full h-full object-cover object-top"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      />

      {/* Layer 3 — centered text content + CTAs */}
      <div
        className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 z-[2] min-h-[calc(600px-65px)] md:min-h-[calc(800px-65px)] lg:min-h-[calc(1024px-65px)] pb-20 md:pb-40 lg:pb-[260px]"
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
          <StoreButton btn={appStore}  iconSrc="/logo/apple.svg" />
          <StoreButton btn={playStore} iconSrc="/logo/play_store.svg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
