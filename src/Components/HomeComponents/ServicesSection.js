import React from 'react';
import { SERVICES_CONTENT } from '../../data/content';
import { TEXT_STYLES, textStyle } from '../../data/constants';

const ServicesSection = () => {
  return (
    <section className="w-full bg-white px-6 md:px-20 py-10 animate-fadeIn" aria-label="Services">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SERVICES_CONTENT.map((service, index) => (
          <div key={index} className="flex flex-col">
            {/* Card image container */}
            <div className="bg-[#F4F4F8] rounded-3xl overflow-hidden w-full max-w-[413px] h-[500px] flex items-end justify-center mx-auto">
              <img
                src={service.image}
                alt={service.imageAlt}
                className="w-full"
              />
            </div>
            {/* Text area below card */}
            <div className="mt-4 text-left">
              <h3 style={textStyle(TEXT_STYLES.serviceTitle)}>
                {service.title}
              </h3>
              <p
                className="mt-1"
                style={textStyle(TEXT_STYLES.serviceDesc)}
              >
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
