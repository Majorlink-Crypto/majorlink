import React from 'react';
import { FEATURES_CONTENT } from '../../data/content';
import Ethereum from '../../Assets/Ethereum.png';
import { TEXT_STYLES, textStyle } from '../../data/constants';

const FeaturesSection = () => {
  return (
    <section className="w-full bg-white px-6 md:px-20 py-10" aria-label="Features">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {FEATURES_CONTENT.map((feature, index) => (
          <div
            key={index}
            className="bg-[#F4F4F8] rounded-2xl p-6 flex flex-col"
          >
            {/* Icon */}
            <div className="mb-8">
              <img src={Ethereum} alt="icon" className="w-6 h-6 opacity-70" />
            </div>

            {/* Text */}
            <div>
              <h3
                className="mb-1"
                style={textStyle(TEXT_STYLES.featureTitle)}
              >
                {feature.title}
              </h3>
              <p style={textStyle(TEXT_STYLES.featureDesc)}>
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
