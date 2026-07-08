import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import CryptoTable from "./CryptoTable";
import GiftCardTable from "./GiftCardTable";
import { RATES_SECTION_CONTENT } from "../../data/content";
import { TEXT_STYLES, textStyle } from "../../data/constants";

const Sectionthree = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const { heading, subheading, viewAllLabel } = RATES_SECTION_CONTENT;

  return (
    //Section Container
    <div className="md:mt-0 mt-10 mb-10" data-aos="fade-up">
      {/* Rates Section */}
      <div className="md:mx-20 mx-6 md:mt-28 mt-10">
        {/* Heading Row */}
        <div className="flex items-start justify-between mb-8">
          <h1 style={textStyle(TEXT_STYLES.ratesHeading)}>
            {heading}<br />{subheading}
          </h1>
          <Link
            to="/checkout"
            className="hover:underline mt-1"
            style={textStyle(TEXT_STYLES.ratesLink)}
          >
            {viewAllLabel}
          </Link>
        </div>

        {/* Side-by-side tables */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <CryptoTable />
          <GiftCardTable />
        </div>
      </div>
    </div>
    //Section Container
  );
};

export default Sectionthree;
