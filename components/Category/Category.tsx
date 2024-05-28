import React from "react";

export const Category = () => {
  return (
    <div className="h-[85vh] bg-[#1C1C1C]">
      <div className="w-full flex justify-center items-center flex-col gap-4">
        <h2 className="text-[#FFF] font-[Bakbak One] font-[600] text-5xl">
          Category
        </h2>
        <p className="font-[Poppins] font-[400] text-[#FFF] text-md">
          List of all the exam solutions available for you to access
        </p>
      </div>
      <div className="relative top-0 left-0 w-full h-[86%]">
        <div className="bg-red-200 absolute w-[20%] h-[25%] top-[30%] left-[40%] circelBgColor  rounded-full" />
        <div className="absolute w-full h-full top-0 left-0">
            <div className="w-[90%] h-full grid grid-cols-4 mx-auto">
                <div className="borderBgColor w-full h-full">
                    <div className="w-full h-full absolute top-0 left-0 z-10">jfdjffh</div>
                </div>
                <div>dfgfdgdfd</div>
                <div>gsdfgsdfsdf</div>
                <div>fdgsfdsdg</div>
                <div>dfgdfgrtgrt</div>
                <div>dgdsfgfd</div>
            </div>
        </div>
      </div>
    </div>
  );
};
