import React, { useState } from 'react';
import { FAQ_CONTENT } from '../../data/content';
import { EXTERNAL_LINKS, TEXT_STYLES, textStyle } from '../../data/constants';


const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="w-full bg-[#FAFAFA] px-6 md:px-20 py-16"
      aria-label="FAQ"
    >
      <div className="flex flex-col md:flex-row gap-12 md:gap-20">

        {/* ── Left Column ── */}
        <div className="md:w-[36%] flex-shrink-0">
          <h2 style={textStyle(TEXT_STYLES.faqHeading)}>
            Things You Might Be<br />Wondering About
          </h2>

          {/* App store buttons */}
          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href={EXTERNAL_LINKS.appStore}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 bg-[#1B30F5] text-white rounded-xl px-4 py-2.5"
            >
              <img src="/logo/apple.svg" alt="Apple" className="w-5 h-5 object-contain" />
              <div className="flex flex-col leading-tight">
                <span className="opacity-80" style={textStyle(TEXT_STYLES.storeSubDark)}>Download on the</span>
                <span style={textStyle(TEXT_STYLES.storeMainDark)}>App Store</span>
              </div>
            </a>

            <a
              href={EXTERNAL_LINKS.playStore}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 bg-[#1B30F5] text-white rounded-xl px-4 py-2.5"
            >
              <img src="/logo/play_store.svg" alt="Google Play" className="w-5 h-5 object-contain" />
              <div className="flex flex-col leading-tight">
                <span className="opacity-80" style={textStyle(TEXT_STYLES.storeSubDark)}>Download on</span>
                <span style={textStyle(TEXT_STYLES.storeMainDark)}>Google Play</span>
              </div>
            </a>
          </div>
        </div>

        {/* ── Right Column — Accordion ── */}
        <div className="flex-1 flex flex-col gap-4">
          {FAQ_CONTENT.map((item, i) => (
            <div key={i} className="bg-[#F7F7F7] rounded-2xl p-4">
              <button
                className="w-full flex items-start justify-between text-left gap-4"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span style={textStyle(TEXT_STYLES.faqQuestion)}>
                  {item.question}
                </span>
                <span
                  className="text-[#273046] mt-0.5 flex-shrink-0 transition-transform duration-300"
                  style={{ transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 5l5 5 5-5" stroke="#273046" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>

              {/* Answer */}
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: openIndex === i ? '200px' : '0px', opacity: openIndex === i ? 1 : 0 }}
              >
                <p className="mt-2" style={textStyle(TEXT_STYLES.faqAnswer)}>
                  {item.answer}
                </p>
              </div>


            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;
