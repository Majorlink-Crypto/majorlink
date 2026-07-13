import React from 'react';
import { FEATURES_CONTENT } from '../../data/content';
import Ethereum from '../../Assets/Ethereum.png';
import { TEXT_STYLES, textStyle } from '../../data/constants';

const FeaturesSection = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-20 py-8 md:py-10" aria-label="Features">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {FEATURES_CONTENT.map((feature, index) => (
          <div
            key={index}
            className="bg-[#F4F4F8] rounded-2xl p-5 md:p-6 flex flex-col"
          >
            {/* Icon */}
            <div className="mb-6 md:mb-8">
              <img src={Ethereum} alt="icon" className="w-6 h-6 opacity-70" />
            </div>

            {/* Text */}
            <div>
              <h3
                className="mb-1 font-archivo font-semibold"
                style={{
                  fontSize: 'clamp(16px, 3vw, 19px)',
                  lineHeight: '140%',
                  color: '#18181B',
                }}
              >
                {feature.title}
              </h3>
              <p
                className="font-archivo font-medium"
                style={{
                  fontSize: 'clamp(14px, 2.5vw, 17px)',
                  lineHeight: '140%',
                  color: '#71717A',
                }}
              >
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
