import React, { useState, useEffect } from "react";
import MLCOriginal from "../Assets/icon.png";
import { IonIcon } from "react-ion-icon";
// eslint-disable-next-line
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  //This open controls the menu icon when using mobile devices
  const [open, setOpen] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // const whatsapp = () => {
  //   window.open(`https://wa.me/+2349071504491?text=Hello,%20Majorlink%20I%20would%20like%20to%20trade%20my%20cryptocurrency%20or%20giftcards.%20`, "_blank")
  // }

  // const whatsappsup = () => {
  //   window.open(`https://wa.me/+2349071504491?text=Hello,%20Majorlink%20I%20would%20like%20to%20reach%20out%20to%20the%20support%20team.%20`, "_blank")
  // }

  return (
    //Container for Navbar
    <div>
      {/*Navbar Box*/}
      <div className="pt-6 pb-5 bg-[#4B5DFF] border-b-[#7D89F3] border-b flex justify-between items-center lg:px-18 px-4  text-white fixed w-[100%] z-10">
        {/*Logo*/}
        <span className="lg:w-[28%] w-[27%] flex cursor-pointer items-center">
          <Link to={"/"} className="flex items-center space-x-2">
            <img className="text-center w-7" src={MLCOriginal} alt="logo" />
            <h1 className="font-grifter text-lg mt-1 tracking-wide text-[#ffffff]">
              Majorlink
            </h1>
          </Link>
        </span>
        {/*Logo*/}

        <div className="flex items-center space-x-8">
          {/*NavLinks*/}
          <ul
            className={`lg:flex mt-0 font-aeonikmedium text-sm transition-all duration-500 ease-in hidden`}
          >
            <li className="mr-12 hover:text-[#f2f2f2] cursor-pointer">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="mr-12 hover:text-[#f2f2f2] cursor-pointer">
              <Link to={"/gallery"}>Gallery</Link>
            </li>
            <li className="mr-12 hover:text-[#f2f2f2] cursor-pointer">
              <Link to={"/"}>FAQ</Link>
            </li>
            <li className="mr-12 hover:text-[#f2f2f2] cursor-pointer">
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
          {/*NavLinks*/}

          {/*Buttons*/}
          <div className="flex lg:mr-0 items-center font-aeonikmedium text-sm">
            <div className="flex items-center space-x-4">
              <a href="https://wa.me/+2349071504491?text=Hi,%20I%20would%20like%20to%20trade%20with%20you.%20What%20are%20your%20current%20rates%20and%20how%20do%20we%20proceed%20with%20the%20trade?">
                <button className="text-black bg-[#fff] lg:block hidden px-6 py-3 rounded-full lg:h-12 hover:bg-gray-100 hover:shadow-lg transition-all duration-300 font-semibold">
                  <div className="flex items-center space-x-2">
                    <span>Trade on WhatsApp</span>
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs text-green-600 font-medium">Verified</span>
                    </div>
                  </div>
                </button>
              </a>
              <a href="http://app.majorlink.co/">
                <button className="text-black bg-[#fff] lg:block hidden px-6 py-3 rounded-full lg:h-12 hover:bg-gray-100 hover:shadow-lg transition-all duration-300 font-semibold">
                  Trade on Web
                </button>
              </a>
            </div>

            {/*Menu Icon*/}
            <span
              className="mt-3 text-3xl lg:hidden cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <IonIcon name={open ? "menu" : "close"} />
            </span>
            {/*Menu Icon*/}
          </div>
          {/*Buttons*/}
        </div>
      </div>
      {/*Navbar Box for PC*/}

      {/* Menu bar for mobile devices */}
      {open === false ? (
        <div
          data-aos="fade-left"
          className="bg-[#4B5DFF] h-full lg:h-0 text-[#fff] float-right fixed right-0 top-0 z-10  block motion-safe:animate-fadeIn w-[100%] lg:w-0 lg:hidden"
        >
          <div
            className={`${
              open
                ? "hidden transition-all duration-500 ease-in"
                : "m-12 transition-all duration-500 ease-in"
            } transition-all duration-500 ease-in`}
          >
            <div className="flex items-center justify-between">
              <Link to={"/"} className="flex items-center space-x-2">
                <img className="text-center w-7" src={MLCOriginal} alt="logo" />
                <h1 className="font-grifter text-lg mt-1 tracking-wide text-[#ffffff]">
                  Majorlink
                </h1>
              </Link>
              <span
                onClick={() => setOpen(!open)}
                className="transition-all duration-500 ease-in cursor-pointer text-3xl"
              >
                <ion-icon name={open ? "menu" : "close"}></ion-icon>
              </span>
            </div>
            <div className="flex flex-col items-center justify-center text-center mt-20 space-y-10">
              <ul
                className={`${
                  open
                    ? "hidden"
                    : "float-left font-aeonikmedium text-lg transition-all duration-500 ease-in space-y-10"
                }`}
              >
                <li className="hover:text-black cursor-pointer">
                  <Link to={"/"}>Features</Link>
                </li>
                <li className="hover:text-black cursor-pointer">
                  <Link to={"/about"}>About</Link>
                </li>
                <li className="hover:text-black cursor-pointer">
                  <Link to={"/gallery"}>Gallery</Link>
                </li>
                <li className="hover:text-black cursor-pointer">
                  <Link to={"/"}>FAQs</Link>
                </li>
                <li className="hover:text-black cursor-pointer">
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
              <a href="https://wa.me/+2349071504491?text=Hi,%20I%20would%20like%20to%20trade%20with%20you.%20What%20are%20your%20current%20rates%20and%20how%20do%20we%20proceed%20with%20the%20trade?">
                <button className="text-black bg-[#fff] py-4 px-6 rounded-full lg:h-12 w-full hover:bg-gray-100 hover:shadow-lg transition-all duration-300 font-semibold">
                  <div className="flex items-center justify-center space-x-2">
                    <span>Trade on WhatsApp</span>
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs text-green-600 font-medium">Verified</span>
                    </div>
                  </div>
                </button>
              </a>
              <Link to={"/checkout"}>
                <button className=" text-black bg-[#fff] py-4 w-full lg:px-8 px-12 rounded-full lg:h-10 lg:mt-0 lg:mr-0 mr-6 hover:border-gray-400">
                  Trade now
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
      {/* Menu bar for mobile devices */}
    </div>
    //Container for Navbar
  );
};

export default Navbar;
