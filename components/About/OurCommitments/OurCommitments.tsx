import React from "react";

export const OurCommitments = () => {
  return (
    <div className="bg-[#1C1C1C] h-screen p-3 flex justify-center items-center">
      <div className="w-[90%] h-[80%]  mx-auto">
        <h2 className="text-center text-[#FFF] font-[600] text-4xl mt-5">
          Our commitment
        </h2>

        <div className="grid grid-cols-3 gap-4 my-8 p-2">

          <div className="commitmentCards__outterWrapper flex justify-center items-center w-full h-full">
            <div className=" flex justify-center items-center flex-col gap-2 bg-[#1C1C1C] h-[97%] w-[98%] z-10 py-7 rounded-2xl">
              <div className="w-[35%]">
                <img src="/EthicsIcon.png" alt="ethicsIcon" />
              </div>
              <h2 className="text-[#FFF] font-[Poppins] font-[500]">
                Ethical Practices
              </h2>
            </div>
          </div>

          <div className="commitmentCards__outterWrapper flex justify-center items-center w-full h-full">
            <div className=" flex justify-center items-center flex-col gap-2 bg-[#1C1C1C] h-[97%] w-[98%] z-10 py-7 rounded-2xl">
              <div className="w-[35%]">
                <img src="/NoHiddenCharges.png" alt="ethicsIcon" />
              </div>
              <h2 className="text-[#FFF] font-[Poppins] font-[500]">
              No Hidden Charges
              </h2>
            </div>
          </div>

          <div className="commitmentCards__outterWrapper flex justify-center items-center w-full h-full">
            <div className=" flex justify-center items-center flex-col gap-2 bg-[#1C1C1C] h-[97%] w-[98%] z-10 py-7 rounded-2xl">
              <div className="w-[35%]">
                <img src="/Satisfaction.png" alt="ethicsIcon" />
              </div>
              <h2 className="text-[#FFF] font-[Poppins] font-[500]">
              100% Customer Satisfaction
              </h2>
            </div>
          </div>

          <div className="commitmentCards__outterWrapper flex justify-center items-center w-full h-full">
            <div className=" flex justify-center items-center flex-col gap-2 bg-[#1C1C1C] h-[97%] w-[98%] z-10 py-7 rounded-2xl">
              <div className="w-[35%]">
                <img src="/Fast.png" alt="ethicsIcon" />
              </div>
              <h2 className="text-[#FFF] font-[Poppins] font-[500]">
              On-time Delivery
              </h2>
            </div>
          </div>

          <div className="commitmentCards__outterWrapper flex justify-center items-center w-full h-full">
            <div className=" flex justify-center items-center flex-col gap-2 bg-[#1C1C1C] h-[97%] w-[98%] z-10 py-7 rounded-2xl">
              <div className="w-[35%]">
                <img src="/ProjectManagement.png" alt="ethicsIcon" />
              </div>
              <h2 className="text-[#FFF] font-[Poppins] font-[500]">
              Innovation
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
