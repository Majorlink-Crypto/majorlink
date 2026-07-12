import React from 'react';
import { CTA_BANNER_CONTENT } from '../../data/content';
import { TEXT_STYLES, textStyle } from '../../data/constants';

const { headingPart1, headingPart2, headingLine2, appStore, playStore } = CTA_BANNER_CONTENT;

const CtaBanner = () => {
  return (
    <section
      className="w-full bg-[#4B5DFF] px-6 md:px-20 py-16 flex flex-col items-center justify-center text-center"
      aria-label="Download the app"
    >
      {/* Heading with phone image inline */}
      <h2 className="mb-2" style={textStyle(TEXT_STYLES.ctaHeading)}>
        <span>{headingPart1} </span>
        <img
          src="/images/phone_small.png"
          alt="Majorlink app"
          className="inline-block w-8 md:w-10 align-middle mx-1 -rotate-12"
        />
        <span> {headingPart2}</span>
      </h2>
      <h2 className="mb-10" style={textStyle(TEXT_STYLES.ctaHeading)}>
        {headingLine2}
      </h2>

      {/* Store buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* App Store */}
        <a
          href={appStore.url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-3 bg-white text-[#273046] rounded-xl px-4 py-2.5 hover:bg-gray-100 transition-colors"
        >
          <img src="/logo/apple_black.svg" alt="Apple" className="w-5 h-5 object-contain" />
          <div className="flex flex-col text-left leading-tight">
            <span style={textStyle(TEXT_STYLES.storeSubLight)}>{appStore.sublabel}</span>
            <span style={textStyle(TEXT_STYLES.storeMainLight)}>{appStore.mainLabel}</span>
          </div>
        </a>

        {/* Google Play */}
        <a
          href={playStore.url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-3 bg-white text-[#273046] rounded-xl px-4 py-2.5 hover:bg-gray-100 transition-colors"
        >
          <img src="/logo/play_store_black.svg" alt="Google Play" className="w-5 h-5 object-contain" />
          <div className="flex flex-col text-left leading-tight">
            <span style={textStyle(TEXT_STYLES.storeSubLight)}>{playStore.sublabel}</span>
            <span style={textStyle(TEXT_STYLES.storeMainLight)}>{playStore.mainLabel}</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default CtaBanner;
