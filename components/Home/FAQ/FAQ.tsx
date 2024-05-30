import Image from "next/image";
import React, { useState } from "react";

export const FAQ = () => {
  const [showFAQInfo, setShowFAQInfo] = useState(false);
  return (
    <div className="p-2 relative h-screen flex flex-col justify-evenly items-center overflow-hidden bg-[#1c1c1c]">
      <Image fill loading="lazy" src="/FAQBg.png" alt="faq-bg-pic" />
      <div className="bg-red-200 absolute w-[20%] h-[45%] -right-44 circelBgColor top-10 rounded-full" />
      <div className="bg-red-200 absolute w-[20%] h-[45%] -left-44 circelBgColor bottom-3 rounded-full" />

      <div className=" w-[90%] mx-auto z-10">
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-start items-start gap-3">
            <h2 className="text-[#FFF] font-[Bakbak One] text-5xl font-[600]">
              Frequently Asked Questions
            </h2>
            <p className="font-[Poppins] font-[400] text-[#FFF] text-md ">
              List of commonly asked questions that most students have
            </p>
          </div>
          <button className="getStartedBtn w-[12%] text-[#FFF] py-2 font-[Bakbak One] font-[500] text-md">
            Learn More
          </button>
        </div>
      </div>

      <div className="w-[90%] flex flex-col justify-center items-center gap-4 mx-auto mt-10 rounded-lg p-2 faqMainWrapper z-10">
        <div className="flex flex-col gap-3 justify-between items-center p-2 w-[99%]">
          <div className="flex justify-between items-center w-full">
            <h2 className="text-[#FFF] font-[Bakbak One] font-[600] text-2xl">
              Can I preview the exam solutions before making a purchase?
            </h2>
            <button
              onClick={() => setShowFAQInfo(true)}
              className="cursor-pointer "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
              >
                <g clip-path="url(#clip0_335_18)">
                  <path
                    d="M15.4 13.1V7.5H14H12.6V13.1H7V15.9H12.6V21.5H14H15.4V15.9H21V13.1H15.4ZM14 28.5C10.287 28.5 6.72601 27.025 4.1005 24.3995C1.475 21.774 0 18.213 0 14.5C0 10.787 1.475 7.22601 4.1005 4.6005C6.72601 1.975 10.287 0.5 14 0.5C17.713 0.5 21.274 1.975 23.8995 4.6005C26.525 7.22601 28 10.787 28 14.5C28 18.213 26.525 21.774 23.8995 24.3995C21.274 27.025 17.713 28.5 14 28.5Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_335_18">
                    <rect
                      width="28"
                      height="28"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          {showFAQInfo && (
            <div>
              <p className="font-[Poppins] font-[500] text-[#FFF] text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus culpa quibusdam quisquam sed quaerat corrupti eius
                necessitatibus, esse aut debitis voluptatum officiis! Incidunt
                odit tenetur quae iusto rem maiores vitae.
              </p>
            </div>
          )}
        </div>
        <div className="flex justify-between items-center p-2 w-[99%]">
          <h2 className="text-[#FFF] font-[Bakbak One] font-[600] text-2xl">
            What payment methods do you accept on your website?
          </h2>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
            >
              <g clip-path="url(#clip0_335_18)">
                <path
                  d="M15.4 13.1V7.5H14H12.6V13.1H7V15.9H12.6V21.5H14H15.4V15.9H21V13.1H15.4ZM14 28.5C10.287 28.5 6.72601 27.025 4.1005 24.3995C1.475 21.774 0 18.213 0 14.5C0 10.787 1.475 7.22601 4.1005 4.6005C6.72601 1.975 10.287 0.5 14 0.5C17.713 0.5 21.274 1.975 23.8995 4.6005C26.525 7.22601 28 10.787 28 14.5C28 18.213 26.525 21.774 23.8995 24.3995C21.274 27.025 17.713 28.5 14 28.5Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_335_18">
                  <rect
                    width="28"
                    height="28"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <div className="flex justify-between items-center p-2 w-[99%]">
          <h2 className="text-[#FFF] font-[Bakbak One] font-[600] text-2xl">
            Are the prices on your website in Canadian dollars?
          </h2>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
            >
              <g clip-path="url(#clip0_335_18)">
                <path
                  d="M15.4 13.1V7.5H14H12.6V13.1H7V15.9H12.6V21.5H14H15.4V15.9H21V13.1H15.4ZM14 28.5C10.287 28.5 6.72601 27.025 4.1005 24.3995C1.475 21.774 0 18.213 0 14.5C0 10.787 1.475 7.22601 4.1005 4.6005C6.72601 1.975 10.287 0.5 14 0.5C17.713 0.5 21.274 1.975 23.8995 4.6005C26.525 7.22601 28 10.787 28 14.5C28 18.213 26.525 21.774 23.8995 24.3995C21.274 27.025 17.713 28.5 14 28.5Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_335_18">
                  <rect
                    width="28"
                    height="28"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <div className="flex justify-between items-center p-2 w-[99%]">
          <h2 className="text-[#FFF] font-[Bakbak One] font-[600] text-2xl">
            How will I access the exam solutions after purchasing them?
          </h2>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
            >
              <g clip-path="url(#clip0_335_18)">
                <path
                  d="M15.4 13.1V7.5H14H12.6V13.1H7V15.9H12.6V21.5H14H15.4V15.9H21V13.1H15.4ZM14 28.5C10.287 28.5 6.72601 27.025 4.1005 24.3995C1.475 21.774 0 18.213 0 14.5C0 10.787 1.475 7.22601 4.1005 4.6005C6.72601 1.975 10.287 0.5 14 0.5C17.713 0.5 21.274 1.975 23.8995 4.6005C26.525 7.22601 28 10.787 28 14.5C28 18.213 26.525 21.774 23.8995 24.3995C21.274 27.025 17.713 28.5 14 28.5Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_335_18">
                  <rect
                    width="28"
                    height="28"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <div className="flex justify-between items-center p-2 w-[99%]">
          <h2 className="text-[#FFF] font-[Bakbak One] font-[600] text-2xl">
            Can I get a refund after purchasing the exam solutions?
          </h2>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
            >
              <g clip-path="url(#clip0_335_18)">
                <path
                  d="M15.4 13.1V7.5H14H12.6V13.1H7V15.9H12.6V21.5H14H15.4V15.9H21V13.1H15.4ZM14 28.5C10.287 28.5 6.72601 27.025 4.1005 24.3995C1.475 21.774 0 18.213 0 14.5C0 10.787 1.475 7.22601 4.1005 4.6005C6.72601 1.975 10.287 0.5 14 0.5C17.713 0.5 21.274 1.975 23.8995 4.6005C26.525 7.22601 28 10.787 28 14.5C28 18.213 26.525 21.774 23.8995 24.3995C21.274 27.025 17.713 28.5 14 28.5Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_335_18">
                  <rect
                    width="28"
                    height="28"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <div className="flex justify-between items-center p-2 w-[99%]">
          <h2 className="text-[#FFF] font-[Bakbak One] font-[600] text-2xl">
            How can I contact your customer support?
          </h2>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
            >
              <g clip-path="url(#clip0_335_18)">
                <path
                  d="M15.4 13.1V7.5H14H12.6V13.1H7V15.9H12.6V21.5H14H15.4V15.9H21V13.1H15.4ZM14 28.5C10.287 28.5 6.72601 27.025 4.1005 24.3995C1.475 21.774 0 18.213 0 14.5C0 10.787 1.475 7.22601 4.1005 4.6005C6.72601 1.975 10.287 0.5 14 0.5C17.713 0.5 21.274 1.975 23.8995 4.6005C26.525 7.22601 28 10.787 28 14.5C28 18.213 26.525 21.774 23.8995 24.3995C21.274 27.025 17.713 28.5 14 28.5Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_335_18">
                  <rect
                    width="28"
                    height="28"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <div className="flex justify-between items-center p-2 w-[99%]">
          <h2 className="text-[#FFF] font-[Bakbak One] font-[600] text-2xl">
            Can I share the exam solutions with others?
          </h2>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
            >
              <g clip-path="url(#clip0_335_18)">
                <path
                  d="M15.4 13.1V7.5H14H12.6V13.1H7V15.9H12.6V21.5H14H15.4V15.9H21V13.1H15.4ZM14 28.5C10.287 28.5 6.72601 27.025 4.1005 24.3995C1.475 21.774 0 18.213 0 14.5C0 10.787 1.475 7.22601 4.1005 4.6005C6.72601 1.975 10.287 0.5 14 0.5C17.713 0.5 21.274 1.975 23.8995 4.6005C26.525 7.22601 28 10.787 28 14.5C28 18.213 26.525 21.774 23.8995 24.3995C21.274 27.025 17.713 28.5 14 28.5Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_335_18">
                  <rect
                    width="28"
                    height="28"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
