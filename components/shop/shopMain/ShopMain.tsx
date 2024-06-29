import React from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export const ShopMain = () => {
  return (
    <div className="w-full h-[80vh] flex justify-center items-start">
      <div className="w-[90%] flex flex-col justify-center items-center">
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

        <div className="flex justify-center items-start w-full my-2">
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
                  <input type="checkbox" className="w-5 h-5 text-blue-600 border-none outline-none bg-gray-100  rounded-md focus:ring-blue-500   focus:ring-1  " />
                  <label className="text-[#FFFFFF] font-[Poppins] text-lg">
                    Under $50
                  </label>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <input type="checkbox" className="w-5 h-5 text-blue-600 border-none outline-none bg-gray-100  rounded-md focus:ring-blue-500   focus:ring-1  " />
                  <label className="text-[#FFFFFF] font-[Poppins] text-lg">
                    $50 - $100
                  </label>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <input type="checkbox" className="w-5 h-5 text-blue-600 border-none outline-none bg-gray-100  rounded-md focus:ring-blue-500   focus:ring-1  " />
                  <label className="text-[#FFFFFF] font-[Poppins] text-lg">
                    $100 - $200
                  </label>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <input type="checkbox" className="w-5 h-5 text-blue-600 border-none outline-none bg-gray-100  rounded-md focus:ring-blue-500   focus:ring-1  " />
                  <label className="text-[#FFFFFF] font-[Poppins] text-lg">
                    $200 - $300
                  </label>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <input type="checkbox" className="w-5 h-5 text-blue-600 border-none outline-none bg-gray-100  rounded-md focus:ring-blue-500   focus:ring-1  " />
                  <label className="text-[#FFFFFF] font-[Poppins] text-lg">
                    Above $300
                  </label>
                </div>
               
              </div>
            </div>
          </div>
          <div className="w-[70%] bg-green-400">the right div</div>
        </div>
      </div>
    </div>
  );
};
