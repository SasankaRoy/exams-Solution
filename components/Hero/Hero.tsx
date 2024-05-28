import Image from "next/image";

export const Hero = () => {
  return (
    <div className="h-[85vh] relative bg-[#000000]/90 overflow-hidden w-full">
      <Image fill src="/heroBg.png" alt="Hero-bg" />
      <div className="bg-red-200 absolute w-[20%] h-[45%] -left-44 circelBgColor top-5 rounded-full" />
      <div className="bg-red-200 absolute w-[20%] h-[45%] -right-44 circelBgColor bottom-3 rounded-full" />

      <div className="w-full absolute h-full flex justify-center items-center top-0 left-0">
        <div className="w-[90%] h-full flex justify-center items-center mx-auto gap-3">
          <div className="w-[50%]">
            <h1 className="text-[#FFF] text-6xl font-[500] font-[Bakbak One] lineHeight">
              Simplify your exam preparation process with
            </h1>
            <h2 className="text-6xl font-[500] font-[Bakbak One] textBgColor my-3">
              ExamsSolutions.ca.
            </h2>
            <p className="text-lg font-[Poppins] text-[#FFF] font-[400]">
              Explore our past technical exam solutions and enhance your study
              with practice tests. Gain confidence by familiarizing yourself
              with common patterns, formats, and content.
            </p>

            <button className="w-[25%] py-3 my-4 font-[Bakbak One] font-[500] text-lg text-[#FFF] getStartedBtn">
              Get Started
            </button>
          </div>
          <div className="w-[50%] h-full flex justify-center items-center">
            <div className="w-[90%]  h-[50%] rounded-2xl relative videoWrapper">
              <div className="bg-white w-full h-full rounded-2xl">
                <video></video>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};
