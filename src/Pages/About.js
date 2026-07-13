import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Sectionfour from '../Components/HomeComponents/Sectionfour';
import FeaturesSection from '../Components/HomeComponents/FeaturesSection';
import CtaBanner from '../Components/HomeComponents/CtaBanner';
import { ABOUT_PAGE_CONTENT } from '../data/content';
import { TEXT_STYLES, textStyle } from '../data/constants';

const About = () => {
  const { hero } = ABOUT_PAGE_CONTENT;

  return (
    <div className="bg-white min-h-screen flex flex-col font-aeonikmedium">
      <Navbar />

      {/* About Hero Section */}
      <section 
        className="w-full pt-28 pb-16 px-6 md:px-20"
        aria-label="About Us Hero"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left Column: Heading and Description */}
          <div className="flex flex-col justify-end text-left">
            <h1 className="mb-6" style={textStyle(TEXT_STYLES.aboutHeading)}>
              {hero.heading}
            </h1>
            <p style={textStyle(TEXT_STYLES.aboutBody)}>
              {hero.description}
            </p>
          </div>

          {/* Right Column: App mockup / Visual illustration */}
          <div className="flex items-center justify-center">
            <img 
              src="/images/phone_w_bg.webp" 
              alt="Majorlink App Transactions illustration" 
              className="w-full max-w-lg object-contain"
            />
          </div>
        </div>
      </section>

      {/* Simple Solutions in a Digital Age section (2-column layout) */}
      <Sectionfour />

      {/* FeaturesSection (Fast Transactions, Secure Platform...) */}
      <FeaturesSection />

      {/* CtaBanner (The Faster Way to Send, Swap & Trade) */}
      <CtaBanner />

      {/* Rebuilt Footer */}
      <Footer />
    </div>
  );
};

export default About;