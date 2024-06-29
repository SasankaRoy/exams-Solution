import React from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Image from "next/image";

const ProductCard = ({ productImg, keyID }: any) => {
  return (
    <>
      <div key={keyID} className="overflow-hidden rounded-xl">
        <div className="borderBgColor  w-full mx-auto cursor-pointer flex flex-col justify-evenly items-center gap-5 py-6">
          <div className="w-[90%] h-64 relative  mx-auto">
            <Image
              fill
              loading="lazy"
              src={productImg}
              alt="category-pic"
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2 justify-start w-[85%]   items-start">
            <h3 className="text-xl font-[600] font-[Poppins] text-[#FFF]">
              Lorem ipsum
            </h3>
            {/* <button className="categorBTNBg w-[15%] flex flex-shrink-0  justify-center items-center py-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
              >
                <path
                  d="M17 7L11 1M17 7L11 13M17 7L6.5 7M1 7H3.5"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button> */}
            <div>
              <Image
                height={90}
                width={90}
                src="/productRating.png"
                alt="ratting"
              />
            </div>
            <div className="flex justify-center items-center gap-3">
              <h3 className="text-[#B7B7B7] font-[300] font-[Poppins] text-lg">
                <del>$30</del>
              </h3>
              <h3 className="text-[#FFFFFF] font-[700] font-[Poppins] text-lg">
                $20
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const ShopMain = () => {
  return (
    <div className="w-full  flex justify-center items-start overflow-hidden">
      <div className="w-[90%] h-full flex flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center border-b-2 border-[#FFFFFF]/20 py-3.5">
          <div className="w-[30%]">
            <div className="flex justify-start items-center gap-3">
              <h3 className="text-[#FFFFFF] font-[400] text-[40px] font-[Bakbak One] ">
                Category
              </h3>
              <KeyboardArrowDownIcon className="text-5xl mt-3.5 text-[#FFFFFF]" />
            </div>
          </div>
          <div className="w-[70%] px-2">
            <div className="flex justify-between items-center w-full">
              <h3 className="text-[#FFFFFF] font-[400] text-[40px] font-[Bakbak One]">
                Exam products
              </h3>

              <div className="searchInputWrapper py-1 flex justify-start items-center gap-1 rounded-3xl w-[50%] overflow-hidden">
                <button className="w-[10%]">
                  <SearchOutlinedIcon className="text-white" />
                </button>
                <input
                  type="text"
                  className="bg-transparent w-[90%] outline-none border-none p-2 text-[#FFF] placeholder:text-[#FFF] font-[Poppins] font-[400]"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-start w-full h-[80%]  my-2">
          <div className="w-[30%]">
            <div>
              <ul className="flex flex-col justify-start items-start gap-1">
                {["1", "2", "3", "4", "5", "6"].map((cur, id) => (
                  <li
                    key={id}
                    className="text-[#FFFFFF] font-[Poppins] font-[400] text-lg cursor-pointer"
                  >
                    Lorem ipsum dolor {cur}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-[3%]">
              <div className="flex justify-start items-center gap-16">
                <h3 className="text-[#FFFFFF] font-[400] text-[40px] font-[Bakbak One] ">
                  Filters
                </h3>
                <KeyboardArrowDownIcon className="text-5xl mt-3.5 text-[#FFFFFF]" />
              </div>
              <div className="w-full grid grid-cols-2 gap-x-1 gap-y-3">
                <div className="flex justify-start items-center gap-3">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-blue-600 border-none outline-none bg-gray-100  rounded-md focus:ring-blue-500   focus:ring-1  "
                  />
                  <label className="text-[#FFFFFF] font-[Poppins] text-lg">
                    Under $50
                  </label>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-blue-600 border-none outline-none bg-gray-100  rounded-md focus:ring-blue-500   focus:ring-1  "
                  />
                  <label className="text-[#FFFFFF] font-[Poppins] text-lg">
                    $50 - $100
                  </label>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-blue-600 border-none outline-none bg-gray-100  rounded-md focus:ring-blue-500   focus:ring-1  "
                  />
                  <label className="text-[#FFFFFF] font-[Poppins] text-lg">
                    $100 - $200
                  </label>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-blue-600 border-none outline-none bg-gray-100  rounded-md focus:ring-blue-500   focus:ring-1  "
                  />
                  <label className="text-[#FFFFFF] font-[Poppins] text-lg">
                    $200 - $300
                  </label>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-blue-600 border-none outline-none bg-gray-100  rounded-md focus:ring-blue-500   focus:ring-1  "
                  />
                  <label className="text-[#FFFFFF] font-[Poppins] text-lg">
                    Above $300
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[70%] grid grid-cols-3 gap-x-3 gap-y-5 py-3 overflow-y-auto h-full">
            {[
              "/productImg1.png",
              "/productImg2.png",
              "/productImg3.png",
              "/productImg4.png",
              "/productImg5.png",
              "/productImg6.png",
            ].map((cur, id) => (
              <ProductCard productImg={cur} keyID={id} key={id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
