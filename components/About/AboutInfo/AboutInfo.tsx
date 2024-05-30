import Image from "next/image";
import React from "react";

const dummyData = [
  {
    heading: "Complete Resources :",
    para: "Access expert notes, and past exam solutions in one place.",
  },
  {
    heading: "Expertise Proven :",
    para: "Benefit from our track record of guiding professionals to success.",
  },
  {
    heading: "Continuous Support :",
    para: "Receive dedicated support throughout your exam preparation journey.",
  },
  {
    heading: "Transparent and Affordable :",
    para: "Our clear pricing guarantees no hidden fees, making quality exam preparation accessible and stress-free for all.",
  },
];

export const AboutInfo = () => {
  return (
    <div className="bg-[#1C1C1C] flex justify-center items-center w-full h-screen">
      <div className="mx-auto w-[90%] h-[90%] flex justify-center items-center gap-1">
        {/* left div strat */}
        <div className="w-[50%] relative flex justify-center items-center h-full">
          <div
            className="absolute w-[30%] h-[32%] top-[40%] left-[33%] circelBgColor rounded-full "
            style={{ opacity: 0.8 }}
          />
          <div className="relative w-[65%] h-[55%] rounded-3xl overflow-hidden z-10">
            <Image
              fill
              src="/WhyUsImg.png"
              className="object-cover"
              alt="about-pic"
            />
          </div>

          <div className="absolute left-[8%] bottom-[15%] z-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="140"
              height="140"
              viewBox="0 0 244 244"
              fill="none"
            >
              <rect
                opacity="0.3"
                width="244"
                height="244"
                rx="16"
                fill="url(#paint0_linear_95_728)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_95_728"
                  x1="122"
                  y1="0"
                  x2="122"
                  y2="244"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E90029" />
                  <stop offset="1" stop-color="#9F0000" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute right-[10%] top-[15%] z-0">
            <svg
              width="90"
              height="90"
              viewBox="0 0 122 122"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.3"
                width="122"
                height="122"
                rx="16"
                fill="url(#paint0_linear_95_726)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_95_726"
                  x1="61"
                  y1="0"
                  x2="61"
                  y2="122"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E90029" />
                  <stop offset="1" stop-color="#9F0000" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        {/* left div end */}

        {/* right div start */}
        <div className="w-[50%]">
          <h2 className="text-[#FFF] font-[Bakbak One] font-[700] text-3xl my-3">
            Why choose us?
          </h2>
          <div className="my-4 flex flex-col gap-3 w-[85%]">
            {dummyData.map((cur, id) => (
              <div key={id} className="flex justify-start items-center gap-4">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 31 34"
                    fill="none"
                  >
                    <path
                      d="M2.43402 0.369988L30.45 16.13C30.6039 16.2172 30.7319 16.3437 30.821 16.4965C30.91 16.6494 30.957 16.8231 30.957 17C30.957 17.1769 30.91 17.3506 30.821 17.5035C30.7319 17.6563 30.6039 17.7828 30.45 17.87L2.43402 33.63C2.25441 33.7302 2.04826 33.7727 1.84367 33.7515C1.63907 33.7303 1.44598 33.6465 1.29073 33.5116C1.13547 33.3767 1.02559 33.1972 0.976078 32.9975C0.926561 32.7979 0.93981 32.5878 1.01402 32.396L6.85802 17.362C6.94845 17.1291 6.94845 16.8709 6.85802 16.638L1.01202 1.60399C0.93738 1.41191 0.923895 1.20146 0.973419 1.00143C1.02294 0.801402 1.13306 0.621555 1.2887 0.486493C1.44434 0.351431 1.6379 0.267749 1.84291 0.246895C2.04793 0.226041 2.25437 0.269032 2.43402 0.369988Z"
                      fill="url(#paint0_linear_377_2142)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_377_2142"
                        x1="11.135"
                        y1="17.0249"
                        x2="0.966265"
                        y2="16.5373"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FF7474" />
                        <stop offset="1" stop-color="#E90029" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <div>
                  <h3 className="text-[#FFF] font-[Poppins] font-[600]">
                    {cur.heading}
                  </h3>
                  <p className="text-[#FFF] font-[Poppins] font-[400] text-[13px]">
                    {cur.para}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="w-[20%]  rounded-full py-2 submitBtnBgColor text-[#FFF] font-[Bakbak One] font-[700] text-sm mt-3">
            Learn More
          </button>
        </div>
        {/* right div end */}
      </div>
    </div>
  );
};
