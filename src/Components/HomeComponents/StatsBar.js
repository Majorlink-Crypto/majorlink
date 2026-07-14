import React from 'react';
import { HERO_STATS } from '../../data/content';
import { TEXT_STYLES, textStyle } from '../../data/constants';

const StatsBar = () => {
  return (
    <section
      className="w-full bg-[#FAFAFA]"
      aria-label="Key statistics"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-6 md:py-8 grid grid-cols-2 lg:grid-cols-4 gap-y-6 md:gap-y-8 gap-x-24">
        {HERO_STATS.map((stat, index) => (
          <div key={index} className="flex flex-col items-start">
            <span
              className="font-onest font-bold text-[#18181B] text-[17px] sm:text-[22px] md:text-[27px] lg:text-[30px] xl:text-[32px] leading-none"
            >
              {stat.value}
            </span>
            <span
              className="mt-1 font-archivo"
              style={{
                fontSize: 'clamp(14px, 2.5vw, 19px)',
                lineHeight: '140%',
                fontWeight: 400,
                color: '#52525B',
              }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
