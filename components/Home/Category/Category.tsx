import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
export const Category = () => {
  return (
    <div className="h-[125vh] overflow-y-hidden flex flex-col justify-evenly items-center w-full relative bg-[#1C1C1C]">
      <motion.div initial={{y:-50,opacity:0}} whileInView={{y:0,opacity:[0,1]}} transition={{duration:1,delay:.2,ease:'backIn'}} className="w-full flex justify-center items-center flex-col gap-4 py-3">
        <h2 className="text-[#FFF] font-[Bakbak One] font-[600] text-5xl">
          Category
        </h2>
        <p className="font-[Poppins] font-[400] text-[#FFF] text-md">
          List of all the exam solutions available for you to access
        </p>
      </motion.div>
      <img
        src="/categoryBg1.png"
        className="absolute top-0 left-0 h-full"
        alt="category-bg-1"
      />
      <img
        src="/categoryBg1.png"
        className="absolute top-0 right-0 h-full"
        alt="category-bg-1"
      />

      <div className="relative top-0 left-0 w-full h-[70%] ">
        <motion.div
          initial={{ scale: 0.3, opacity: 0.1, rotate: "0deg" }}
          whileInView={{ scale: 1, opacity: 0.5, rotate: "360deg" }}
          transition={{ duration: 0.5, ease: "backInOut", delay: 0.2 }}
          className="absolute w-[30%] h-[35%] top-[30%] left-[37%] circelBgColor  rounded-full"
        />
        <div className="absolute w-full h-full top-0 left-0">
          <div className="w-[90%] h-full grid grid-cols-4 gap-5 mx-auto">
            <motion.div initial={{x:-300}} whileInView={{x:0}} transition={{duration:1.2,ease:'backInOut'}} className="overflow-hidden rounded-xl">
              <div className="borderBgColor  w-full h-full flex flex-col justify-evenly items-center">
                <div className="w-[90%] h-[60%] relative  mx-auto ">
                  <Image
                    fill
                    loading="lazy"
                    src="/Category1.png"
                    alt="category-pic"
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex justify-between w-[85%] h-[20%] items-center">
                  <h2 className="text-2xl font-[600] font-[Bakbak One] text-[#FFF]">
                    Sample
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
            </motion.div>

            <motion.div initial={{x:-500}} whileInView={{x:0}} transition={{duration:1.2,ease:'backInOut'}} className="overflow-hidden rounded-xl">
              <div className="borderBgColor  w-full h-full flex flex-col justify-evenly items-center">
                <div className="w-[90%] h-[60%] relative  mx-auto ">
                  <Image
                    fill
                    loading="lazy"
                    src="/Category2.png"
                    alt="category-pic"
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex justify-between w-[85%] h-[20%] items-center">
                  <h2 className="text-2xl font-[600] font-[Bakbak One] text-[#FFF]">
                    Basic Exam
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
            </motion.div>

            <motion.div initial={{x:-500}} whileInView={{x:0}} transition={{duration:1.2,ease:'backInOut'}} className="overflow-hidden rounded-xl">
              <div className="borderBgColor  w-full h-full flex flex-col justify-evenly items-center">
                <div className="w-[90%] h-[60%] relative  mx-auto ">
                  <Image
                    fill
                    loading="lazy"
                    src="/Category3.png"
                    alt="category-pic"
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex justify-between w-[85%] h-[20%] items-center">
                  <h2 className="text-2xl font-[600] font-[Bakbak One] text-[#FFF]">
                    Mechanical Engineering
                  </h2>
                  <button className="categorBTNBg w-[15%] flex flex-shrink-0 justify-center items-center py-3 rounded-full">
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
            </motion.div>

            <motion.div initial={{x:-500}} whileInView={{x:0}} transition={{duration:1.2,ease:'backInOut'}} className="overflow-hidden rounded-xl">
              <div className="borderBgColor  w-full h-full flex flex-col justify-evenly items-center">
                <div className="w-[90%] h-[60%] relative  mx-auto ">
                  <Image
                    fill
                    loading="lazy"
                    src="/Category4.png"
                    alt="category-pic"
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex justify-between w-[85%] h-[20%] items-center">
                  <h2 className="text-2xl font-[600] font-[Bakbak One] text-[#FFF]">
                    Manufacturing Engineering
                  </h2>
                  <button className="categorBTNBg w-[15%] flex flex-shrink-0 justify-center items-center py-3 rounded-full">
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
            </motion.div>

            <motion.div initial={{x:500}} whileInView={{x:0}} transition={{duration:1.2,ease:'backInOut'}} className="overflow-hidden rounded-xl">
              <div className="borderBgColor  w-full h-full flex flex-col justify-evenly items-center">
                <div className="w-[90%] h-[60%] relative  mx-auto ">
                  <Image
                    fill
                    loading="lazy"
                    src="/Category4.png"
                    alt="category-pic"
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex justify-between w-[85%] h-[20%] items-center">
                  <h2 className="text-2xl font-[600] font-[Bakbak One] text-[#FFF]">
                    Industrial Engineering
                  </h2>
                  <button className="categorBTNBg w-[15%] flex flex-shrink-0 justify-center items-center py-3 rounded-full">
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
            </motion.div>

            <motion.div initial={{x:500}} whileInView={{x:0}} transition={{duration:1.2,ease:'backInOut'}} className="overflow-hidden rounded-xl">
              <div className="borderBgColor  w-full h-full flex flex-col justify-evenly items-center">
                <div className="w-[90%] h-[60%] relative  mx-auto ">
                  <Image
                    fill
                    loading="lazy"
                    src="/Category5.png"
                    alt="category-pic"
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex justify-between w-[85%] h-[20%] items-center">
                  <h2 className="text-2xl font-[600] font-[Bakbak One] text-[#FFF]">
                    Electrical Engineering
                  </h2>
                  <button className="categorBTNBg w-[15%] flex flex-shrink-0 justify-center items-center py-3 rounded-full">
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
            </motion.div>

            <motion.div initial={{x:500}} whileInView={{x:0}} transition={{duration:1.2,ease:'backInOut'}} className="overflow-hidden rounded-xl">
              <div className="borderBgColor  w-full h-full flex flex-col justify-evenly items-center">
                <div className="w-[90%] h-[60%] relative  mx-auto ">
                  <Image
                    fill
                    loading="lazy"
                    src="/Category6.png"
                    alt="category-pic"
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex justify-between w-[85%] h-[20%] items-center">
                  <h2 className="text-2xl font-[600] font-[Bakbak One] text-[#FFF]">
                    Civil Engineering
                  </h2>
                  <button className="categorBTNBg w-[15%] flex flex-shrink-0 justify-center items-center py-3 rounded-full">
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
            </motion.div>

            <motion.div initial={{x:300}} whileInView={{x:0}} transition={{duration:1.2,ease:'backInOut'}} className="overflow-hidden rounded-xl">
              <div className="borderBgColor  w-full h-full flex flex-col justify-evenly items-center">
                <div className="w-[90%] h-[60%] relative  mx-auto ">
                  <Image
                    fill
                    loading="lazy"
                    src="/Category7.png"
                    alt="category-pic"
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex justify-between w-[85%] h-[20%] items-center">
                  <h2 className="text-2xl font-[600] font-[Bakbak One] text-[#FFF]">
                    Solid Works
                  </h2>
                  <button className="categorBTNBg w-[15%] flex flex-shrink-0 justify-center items-center py-3 rounded-full">
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
            </motion.div>
          </div>
        </div>
      </div>

      <button className="getStartedBtn w-[8%] mt-3 text-[#FFF] font-[Bakbak One] font-[500] py-2 text-lg">
        View All
      </button>
    </div>
  );
};
