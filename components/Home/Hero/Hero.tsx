import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="h-[100vh] relative bg-[#000000]/90 overflow-hidden w-full">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute w-full h-full top-0 left-0"
      >
        <Image fill src="/heroBg.png" alt="Hero-bg" />
      </motion.div>
      <div className=" absolute w-[20%] h-[45%] -left-44 circelBgColor top-5 rounded-full" />
      <div className=" absolute w-[20%] h-[45%] -right-44 circelBgColor bottom-3 rounded-full" />

      <div className="w-full absolute h-full flex justify-center items-center top-0 left-0">
        <div className="w-[90%] h-full flex justify-center items-center mx-auto gap-3">
          <div className="w-[50%]">
            <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:.4,delay:.2}} className="text-[#FFF] text-5xl font-[500] font-[Bakbak One] lineHeight">
              Simplify your exam preparation process with
            </motion.h1>
            <h2 className="text-5xl font-[500] font-[Bakbak One] textBgColor my-3">
              ExamsSolutions.ca.
            </h2>
            <p className="text-base font-[Poppins] text-[#FFF] font-[400]">
              Explore our past technical exam solutions and enhance your study
              with practice tests. Gain confidence by familiarizing yourself
              with common patterns, formats, and content.
            </p>

            <button className="w-[25%] py-3 my-4 font-[Bakbak One] font-[600] text-md text-[#FFF] getStartedBtn">
              Get Started
            </button>
          </div>
          <div className="w-[50%] h-full flex justify-center items-center">
            <div className="w-[90%]  h-[45%] rounded-2xl relative videoWrapper">
              <div className="bg-white w-full h-full rounded-2xl overflow-hidden">
                <video
                  src="/Examsolution.mp4"
                  autoPlay
                  loop
                  className="w-full h-full object-fill "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};
