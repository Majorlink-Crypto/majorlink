import React from "react";
import { Link } from "react-router-dom";
import CryptoTable from "./CryptoTable";
import { RATES_SECTION_CONTENT } from "../../data/content";
import { TEXT_STYLES, textStyle } from "../../data/constants";

const Sectionthree = () => {

  const { heading, subheading, viewAllLabel } = RATES_SECTION_CONTENT;

  return (
    //Section Container
    <div className="md:mt-0 mt-10 mb-10" data-aos="fade-up">
      {/* Rates Section */}
      <div className="md:mx-20 mx-4 md:mx-6 md:mt-28 mt-10">
        {/* Heading Row */}
        <div className="flex items-start justify-between mb-6 md:mb-8 gap-4">
          <h1
            className="font-onest font-bold"
            style={{
              fontSize: 'clamp(24px, 5vw, 34px)',
              lineHeight: '100%',
              color: '#18181B',
            }}
          >
            {heading}<br className="hidden sm:block" />{' '}<span className="sm:hidden"> </span>{subheading}
          </h1>
          <Link
            to="/checkout"
            className="hover:underline mt-1"
            style={textStyle(TEXT_STYLES.ratesLink)}
          >
            {viewAllLabel}
          </Link>
        </div>

        {/* Single table */}
        <div className="w-full">
          <CryptoTable />
        </div>
      </div>
    </div>
    //Section Container
  );
};

export default Sectionthree;
