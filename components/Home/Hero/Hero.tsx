import Image from "next/image";
import { motion } from "framer-motion";
// import HeroBg from "@assets/Examsolution.mp4";
// import HeroBg from '../../../assets/BannerCategory1.png'
import ReactPlayer from "react-player";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const vedioRef = useRef<HTMLVideoElement>(null);

  // const requestForSoundPermission = async () => {
  //   if (!("permissions" in navigator)) {
  //     console.error("This browser doest not supports the Permissions API");
  //     return;
  //   }

  //   try {
  //     const permissionStatus = await navigator.permissions.query({
  //       name: "notifications",
  //     });
  //     if (permissionStatus.state === "prompt") {
  //       const permission = await Notification.requestPermission();

  //       if (permission !== "granted") {
  //         console.log("User denied permission.");
  //         alert("Please enable notifications to receive updates.");
  //       }
  //     } else if (permissionStatus.state === "denied") {
  //       console.log("Permission to show notifications has been denied.");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   // requestForSoundPermission();
  //   vedioRef.current?.play().catch((err)=>{
  //     console.log(err);
  //     alert('allow the sound permission')
  //   });
  // }, []);
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
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "backOut" }}
              className="text-[#FFF] text-5xl font-[500] font-[Bakbak One] lineHeight"
            >
              Simplify your exam preparation process with
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "backOut" }}
              className="text-5xl font-[500] font-[Bakbak One] textBgColor my-3"
            >
              ExamsSolutions.ca.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: "backOut" }}
              className="text-base font-[Poppins] text-[#FFF] font-[400]"
            >
              Explore our past technical exam solutions and enhance your study
              with practice tests. Gain confidence by familiarizing yourself
              with common patterns, formats, and content.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "backOut" }}
              className="w-[25%] py-3 my-4 font-[Bakbak One] font-[600] text-md text-[#FFF] getStartedBtn"
            >
              Get Started
            </motion.button>
          </div>
          <div className="w-[50%] h-full flex justify-center items-center">
            <motion.div
              initial={{ scale: 0.3, opacity: 0.1 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: "backOut" }}
              className="w-[90%]  h-[45%] rounded-2xl relative videoWrapper"
            >
              <div className="bg-white w-full h-full rounded-2xl overflow-hidden">
                <video
                  src="./Examsolution.mp4"
                  autoPlay={true}
                  loop
                  className="w-full h-full object-fill "
                  ref={vedioRef}
                  controls
                >
                  <source src="./Examsolution.mp4" type="video/mp4" />
                  {/* Your browser does not support the video tag. Please upgrade
                  to a modern browser to view this video. */}
                </video>
                {/* <ReactPlayer url="https://www.youtube.com/watch?v=pgiaa06qP18" playing={true} loop={true} controls={false} /> */}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};
