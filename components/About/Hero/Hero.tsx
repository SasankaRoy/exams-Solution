import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <div className="bg-[#1C1C1C] relative w-full h-screen">
      <Image
        fill
        src="/CategoryPageBg.png"
        className="object-cover opacity-25"
        alt="category-page-bg"
      />
      <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center">
        <div className="w-[90%] h-[90%] flex flex-col justify-end items-center gap-8 mx-auto">
          <div>
            <h1 className="text-[#FFF] text-4xl font-[Bakbak one] font-[700] text-center my-3">
              About us
            </h1>
            <p className="font-[Poppins] text-[#FFF] text-base font-[400] text-center my-2">
              Our team of passionate engineers is dedicated to streamlining the
              exam preparation process for you. We offer a comprehensive suite
              of resources, expert study notes, handpicked reference websites,
              and past exam solutions, all tailored to help you prepare better
              and ace your exams.
            </p>
            <p className="font-[Poppins] text-[#FFF] text-base font-[400] text-center my-2">
              Our goal is to be your trusted partner in achieving professional
              success by offering everything you need in one place to ace your
              exam.
            </p>
          </div>
          <div className="relative w-full h-[60%] rounded-3xl overflow-hidden">
            <Image
              src="/CategoryBanner.png"
              fill
              className="object-cover"
              alt="banner-category"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
