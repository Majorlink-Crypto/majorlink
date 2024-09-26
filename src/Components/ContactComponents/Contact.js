import React from "react";

function Contact() {
  return (
    <div>
      <div className="md:pt-60 md:px-20 px-6 pt-40">
        <h1 className="text-[#273046] text-2xl font-grifter">
          Reach out to our support
        </h1>
        <p className="text-[#273046] text-sm font-aeonikmedium mt-1 md:w-[40%]">
          Get in contact to our support team if you need any assistance for
          trading.
        </p>

        <div className="md:flex items-start md:justify-between md:space-y-0 space-y-8 rounded-2xl mt-14 bg-[#F9F9FE] font-gilroy py-10 px-6 z-10">
          <div className="md:w-[20%]">
            <h1 className="text-[#4354ED] text-2xl font-grifter">Call us at</h1>
            <p className="text-[#5B64AF] text-sm md:mt-1 font-aeonikmedium">
              +2349071504491
            </p>
          </div>
          <div className="md:w-[20%]">
            <h1 className="text-[#4354ED] text-2xl font-grifter">
              Social Media
            </h1>
            <p className="text-[#5B64AF] text-sm md:mt-1 font-aeonikmedium">
              @majorlinkapp
            </p>
            <p className="text-[#5B64AF] text-sm md:mt-1 font-aeonikmedium">
              @majorlinktrading
            </p>
          </div>
          <div className="md:w-[20%]">
            <h1 className="text-[#4354ED] text-2xl font-grifter">Whatsapp</h1>
            <p className="text-[#5B64AF] text-sm md:mt-1 font-aeonikmedium">
              +2349071504491
            </p>
          </div>
          <div className="md:w-[20%]">
            <h1 className="text-[#4354ED] text-2xl font-grifter">24/7</h1>
            <p className="text-[#5B64AF] text-sm md:mt-1 font-aeonikmedium">
              Live Chat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
