import Image from "next/image";
import React from "react";

export const TopBanner = ({ bannerImg, bannerHeading, bannerPara }: any) => {
  return (
    <div className="h-screen relative bg-[#1C1C1C] flex justify-center items-center overflow-hidden">
      <div className="w-[90%] h-[50%] rounded-3xl relative z-10 overflow-hidden">
        <Image
          fill
          src={bannerImg}
          alt="category-page-banner"
          className="object-cover"
        />
        <div className="absolute w-full h-full top-0 left-0 flex justify-start items-center px-14">
          <div className="w-[50%]  flex flex-col justify-start items-start">
            <h1 className="text-[#FFF] font-[Bakbak One] text-5xl font-[700] my-3">
              {bannerHeading}
            </h1>
            <p className="text-[#FFF] font-[Poppins] font-[400] text-sm">
              {bannerPara}
            </p>
          </div>
        </div>
      </div>

      <div className=" absolute w-[20%] h-[45%] left-8 circelBgColor bottom-8 rounded-full" />
    </div>
  );
};
