import React from 'react';
import { HERO_STATS } from '../../data/content';
import { TEXT_STYLES, textStyle } from '../../data/constants';

const StatsBar = () => {
  return (
    <section
      className="w-full bg-[#FAFAFA]"
      aria-label="Key statistics"
    >
      <div className="max-w-5xl mx-auto px-8 py-8 grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4">
        {HERO_STATS.map((stat, index) => (
          <div key={index} className="flex flex-col items-start">
            <span style={textStyle(TEXT_STYLES.statValue)}>
              {stat.value}
            </span>
            <span
              className="mt-1"
              style={textStyle(TEXT_STYLES.statLabel)}
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
