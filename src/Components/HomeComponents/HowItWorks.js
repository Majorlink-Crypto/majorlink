import React, { useState } from 'react';
import { HOW_IT_WORKS_CONTENT } from '../../data/content';
import { TEXT_STYLES, textStyle } from '../../data/constants';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { heading, subheading, steps } = HOW_IT_WORKS_CONTENT;
  const current = steps[activeStep];

  return (
    <section
      className="w-full py-12 md:py-20 px-4 sm:px-6 lg:px-16"
      style={{
        background: 'linear-gradient(180deg, #F0F0FF 0%, #F8F8FF 40%, #FFFFFF 100%)',
      }}
      aria-label="How it works"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center px-4 sm:px-0">

        {/* Heading */}
        <h2
          className="text-center font-onest font-bold"
          data-aos="fade-up"
          data-aos-duration="600"
          style={{
            fontSize: 'clamp(24px, 5vw, 34px)',
            lineHeight: '100%',
            color: '#18181B',
          }}
        >
          {heading}
        </h2>
        <p
          className="text-center mt-3 font-archivo"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          style={{
            fontSize: 'clamp(15px, 3vw, 19px)',
            lineHeight: '140%',
            fontWeight: 400,
            color: '#71717A',
          }}
        >
          {subheading}
        </p>

        {/* Step tabs */}
        <div className="w-full grid grid-cols-3 gap-6 sm:gap-12 md:gap-24 mt-8 md:mt-12 mb-8 md:mb-12">
          {steps.map((step, index) => {
            const isActive = index === activeStep;
            return (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className="flex flex-col items-center text-center cursor-pointer transition-all duration-300"
                aria-pressed={isActive}
              >
                <span
                  className="font-onest font-bold transition-colors duration-300"
                  style={{
                    fontSize: 'clamp(12px, 2vw, 16px)',
                    lineHeight: '120%',
                    color: isActive ? '#18181B' : '#A1A1AA',
                  }}
                >
                  {step.title}
                </span>
                <span
                  className="font-archivo mt-1 transition-colors duration-300 hidden sm:block max-w-[180px] mx-auto"
                  style={{
                    fontSize: 'clamp(11px, 1.5vw, 14px)',
                    lineHeight: '140%',
                    fontWeight: 400,
                    color: isActive ? '#18181B' : '#D4D4D8',
                  }}
                >
                  {step.description}
                </span>
              </button>
            );
          })}
        </div>

        {/* Phone mockup image */}
        <div
          className="flex items-center justify-center w-full"
          data-aos="zoom-in"
          data-aos-duration="700"
          data-aos-delay="200"
        >
          <img
            key={activeStep}
            src={current.image}
            alt={current.imageAlt}
            className="object-contain"
            style={{
              maxHeight: 'clamp(300px, 50vw, 540px)',
              maxWidth: 'clamp(200px, 40vw, 320px)',
              width: '100%',
              animation: 'fadeInUp 0.35s ease',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
