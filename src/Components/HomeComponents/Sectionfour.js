import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { TEXT_STYLES, textStyle } from '../../data/constants';

const Sectionfour = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="w-full bg-white px-6 md:px-20 py-16 md:py-24" data-aos="fade-up">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* Left Column: Heading */}
        <div>
          <h2 style={textStyle(TEXT_STYLES.sectionHeading)}>
            Simple Solutions<br />in a Digital Age
          </h2>
        </div>

        {/* Right Column: Paragraphs */}
        <div className="space-y-8" style={textStyle(TEXT_STYLES.aboutBodyLarge)}>
          <p>
            In the bustling space of digital exchange, Majorlink emerges with clarity and vision. Our credo is undeviating: regardless of who you are or where you hail from, when it comes to selling your cryptocurrency or gift cards, you deserve nothing less than the best. At Majorlink, every customer is a valued member of our expanding community.
          </p>
          <p>
            As Majorlink paves its path, we're not just setting standards; we're transcending them. We are more than a platform; we are a commitment. A commitment to authenticity, promptness, and top-tier service. Our objective? To be not just a name, but the epitome of cryptocurrency and gift card exchange in Nigeria.
          </p>
          <p>
            Every step Majorlink takes, every decision we make, it's all about our users. We initiated our journey with a single-minded focus: safeguarding and enhancing user experience. Operating tirelessly, our proficient team ensures swift and secure transactions. And, should you have a query or need assistance? Our customer support, a blend of efficiency and courtesy, is ever-present, be it through calls or our in-app live chat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sectionfour;