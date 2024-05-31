import Image from "next/image";
import React from "react";

export const MainCategorySection = () => {
  return (
    <div className="bg-[#1C1C1C] py-2">
      <div className="w-[90%] mx-auto p-2">
        <h2 className="font-[Bakbak One] font-[600] text-4xl text-center text-[#FFF]">
          Category
        </h2>
        <div className="flex flex-col justify-center items-center gap-5 my-4 max-w-[70%] mx-auto">
          <div className="flex flex-wrap  justify-center items-center gap-4">
            <button className="text-[#FFF] border-2 border-[#FFF] px-4 py-2 text-base font-[Poppins] font-[500] rounded-full">
              Peng. Technical Exams
            </button>
            <button className="text-[#FFF] border-2 border-[#FFF] px-4 py-2 text-base font-[Poppins] font-[500] rounded-full">
              NPPE
            </button>
            <button className="text-[#FFF] border-2 border-[#FFF] px-4 py-2 text-base font-[Poppins] font-[500] rounded-full">
              GD&T
            </button>
            <button className="text-[#FFF] border-2 border-[#FFF] px-4 py-2 text-base font-[Poppins] font-[500] rounded-full">
              SolidWorks
            </button>
            <button className="text-[#FFF] border-2 border-[#FFF] px-4 py-2 text-base font-[Poppins] font-[500] rounded-full">
              Project Management
            </button>
          </div>
          <div className="flex justify-center items-center gap-3  w-[60%]">
            <label className="font-[Bakbak one] text-[#FFF] font-[700] text-xl ">
              Select Sub-category
            </label>
            <select
              id="subCategory"
              className="inputBgColor w-[60%] px-4 text-base py-3 rounded-full font-[Poppins] font-[400] border-none outline-none text-[#FFF]"
            >
              <option value="Mechanical Engineering">
                Mechanical Engineering
              </option>
              <option value="Mechanical Engineering">
                Mechanical Engineering
              </option>
              <option value="Mechanical Engineering">
                Mechanical Engineering
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-[90%] mx-auto my-5  py-3 px-4">
        <div className="grid grid-cols-4 gap-5 w-full">
          {[
            {
              image: "/CategoryImg2.png",
              info: "16-Mec-A1 Applied Thermodynamics and Heat Transfer",
            },
            {
              image: "/Category3.png",
              info: "16-Mec-A1 Applied Thermodynamics and Heat Transfer",
            },
            {
              image: "/Category2.png",
              info: "16-Mec-A1 Applied Thermodynamics and Heat Transfer",
            },
            {
              image: "/CategoryImg3.png",
              info: "16-Mec-A1 Applied Thermodynamics and Heat Transfer",
            },
            {
              image: "/CategoryImg2.png",
              info: "16-Mec-A1 Applied Thermodynamics and Heat Transfer",
            },
            {
              image: "/Category3.png",
              info: "16-Mec-A1 Applied Thermodynamics and Heat Transfer",
            },
            {
              image: "/Category2.png",
              info: "16-Mec-A1 Applied Thermodynamics and Heat Transfer",
            },
            {
              image: "/CategoryImg3.png",
              info: "16-Mec-A1 Applied Thermodynamics and Heat Transfer",
            },
            {
              image: "/CategoryImg2.png",
              info: "16-Mec-A1 Applied Thermodynamics and Heat Transfer",
            },
            {
              image: "/Category3.png",
              info: "16-Mec-A1 Applied Thermodynamics and Heat Transfer",
            },
            {
              image: "/Category2.png",
              info: "16-Mec-A1 Applied Thermodynamics and Heat Transfer",
            },
            {
              image: "/CategoryImg3.png",
              info: "16-Mec-A1 Applied Thermodynamics and Heat Transfer",
            },
            ,
          ].map((cur, id) => (
            <div key={id} className="overflow-hidden rounded-xl">
              <div className="borderBgColor  w-full mx-auto  flex flex-col justify-evenly items-center gap-5 py-6">
                <div className="w-[90%] h-36 relative  mx-auto ">
                  <Image
                    fill
                    loading="lazy"
                    src={`${cur?.image}`}
                    alt="category-pic"
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-4 justify-start w-[85%]   items-start">
                  <h2 className="text-sm font-[600] font-[Bakbak One] text-[#FFF]">
                    {cur?.info}
                  </h2>
                  <button className="categorBTNBg w-[15%] flex flex-shrink-0  justify-center items-center py-3 rounded-full">
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
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
