import React from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export const ShopMain = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[90%] flex justify-center items-center">
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
      </div>
    </div>
  );
};
