import React, { useState } from "react";

export const FAQ = () => {
  const [showFAQInfo, setShowFAQInfo] = useState(false);

  return (
    <div className="bg-[#1C1C1C] min-h-[60vh] max-h-screen">
      <div className="flex justify-between items-start w-[90%] gap-4 mx-auto">
        <div className="w-[50%] ">
          <div className="w-[60%]">
            <h2 className="text-[#FFF] Font-[Bakbak One] font-[600] text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="text-[#FFF] text-sm font-[Poppins] font-[400] my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
              varius magna, at facilisis lorem.
            </p>
          </div>
        </div>

        <div className="w-[50%]">
          <div className=" w-[90%] mx-auto flex flex-col justify-start items-start gap-6 py-2 px-4">
            <div className="w-full">
              <div className="flex justify-between items-center">
                <h2 className="text-[#FFF] font-[600] font-[Poppins] text-xl">
                  Lorem ipsum dolor sit amet?
                </h2>
                <button onClick={() => setShowFAQInfo(!showFAQInfo)}>
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
                <div className="w-full my-3">
                  <p className="text-[#FFF] font-[Poppins] font-[400] text-[12px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptas iusto ad cumque, natus officiis quae saepe tenetur
                    aut, sequi ipsam vitae ipsum ut facere, maxime perspiciatis
                    quos eligendi minus beatae!
                  </p>
                </div>
              )}
            </div>

            <div className="w-full">
              <div className="flex justify-between items-center">
                <h2 className="text-[#FFF] font-[600] font-[Poppins] text-xl">
                  Lorem ipsum dolor sit amet?
                </h2>
                <button onClick={() => setShowFAQInfo(!showFAQInfo)}>
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
                <div className="w-full my-3">
                  <p className="text-[#FFF] font-[Poppins] font-[400] text-[12px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptas iusto ad cumque, natus officiis quae saepe tenetur
                    aut, sequi ipsam vitae ipsum ut facere, maxime perspiciatis
                    quos eligendi minus beatae!
                  </p>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center w-full">
              <h2 className="text-[#FFF] font-[600] font-[Poppins] text-xl">
                Praesent sapien massa convallis?
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

            <div className="flex justify-between items-center w-full">
              <h2 className="text-[#FFF] font-[600] font-[Poppins] text-xl">
                Pellentesque in ipsum id orci porta?
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

            <div className="flex justify-between items-center w-full">
              <h2 className="text-[#FFF] font-[600] font-[Poppins] text-xl">
                Delulussc in ipsum id orci porta?
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
      </div>
    </div>
  );
};
