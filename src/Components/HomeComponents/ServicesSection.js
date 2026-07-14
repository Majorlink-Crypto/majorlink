import React from 'react';
import { SERVICES_CONTENT } from '../../data/content';
import { TEXT_STYLES, textStyle } from '../../data/constants';

const ServicesSection = () => {
  return (
    <section className="w-full bg-[#FAFAFA] px-4 sm:px-6 md:px-20 py-8 md:py-10 animate-fadeIn" aria-label="Services">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1240px] mx-auto w-full">
        {SERVICES_CONTENT.map((service, index) => (
          <div
            key={index}
            className="flex flex-col max-w-[413px] mx-auto w-full"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay={index * 150}
          >
            {/* Card image container */}
            <div className="bg-[#F4F4F8] rounded-2xl overflow-hidden w-full h-auto md:h-[450px] flex items-end justify-center">
              <img
                src={service.image}
                alt={service.imageAlt}
                className="w-full object-cover"
              />
            </div>
            {/* Text area below card */}
            <div className="mt-4 text-left">
              <h3
                className="font-onest font-bold"
                style={{
                  fontSize: 'clamp(18px, 3vw, 22px)',
                  lineHeight: '100%',
                  color: '#18181B',
                }}
              >
                {service.title}
              </h3>
              <p
                className="mt-1 font-archivo"
                style={{
                  fontSize: 'clamp(15px, 3vw, 19px)',
                  lineHeight: '140%',
                  fontWeight: 400,
                  color: '#18181B',
                }}
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
