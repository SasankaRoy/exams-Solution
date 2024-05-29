import { Avatar } from "@mui/material";
import Image from "next/image";

export const Testimonial = () => {
  return (
    <div className="h-screen  relative overflow-hidden bg-[#1c1c1c]">
      <img
        src="/TestimonialBg1.png"
        className="absolute object-cover w-[28%]  right-0 top-0"
        alt="testimonial-bg"
      />
      <img
        src="/TestimonialBg2.png"
        className="absolute object-cover w-[28%] bottom-0 left-0"
        alt="testimonial-bg"
      />
      <div
        className="absolute w-[30%] h-[35%] top-[40%] left-[37%] circelBgColor rounded-full "
        style={{ opacity: 0.4 }}
      />
      <div className="w-[90%] h-full flex flex-col gap-4 justify-evenly items-center mx-auto z-10">
        <div className="flex flex-col justify-center items-center gap-3 w-[50%]">
          <h2 className="text-[#FFF] font-[Bakbak One] font-[700] text-4xl text-center">
            Read from our satisfied{" "}
            <span className="textBgColorTestimonial">students</span>
          </h2>
          <p className="text-center text-[#FFF] font-[Poppins] text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
            varius magna, at facilisis lorem. Aenean cursus lectus eget diam
            maximus imperdiet.
          </p>
        </div>
        <div className="flex justify-evenly items-center w-full max-h-[80%]">
          <button className="cursor-pointer z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
            >
              <circle cx="26" cy="26" r="25" stroke="white" stroke-width="2" />
              <path
                d="M17.3333 26L23.8333 32.5M17.3333 26L23.8333 19.5M17.3333 26H28.7083M34.6666 26H31.9583"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div className="grid grid-cols-2 gap-3 w-[50%] h-full overflow-y-auto scroll-smooth hideScrollBarTestimonial__SliderWrapper">
            <div className="testimonialClient__reviewBg  py-2 px-2 rounded-md mb-8">
              <div className="flex justify-start items-center gap-3 headingBottomBorder py-3">
                <Avatar
                  src="/ClientImg1.png"
                  sx={{ height: "43px", width: "43px" }}
                />
                <div className="flex justify-start items-start flex-col">
                  <h3 className="text-[#FFF] font-[700] font-[Bakbak One] text-lg">
                    Jenny Mendaz
                  </h3>
                  <p className="text-[12px] text-[#FFF] font-[Poppins] font-[400]">
                    CEO of Vison code
                  </p>
                </div>
              </div>
              <p className="font-[Poppins] text-[#FFF] font-[400] text-[13px] my-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                et varius magna, at facilisis lorem. Aenean cursus lectus eget
                diam maximus imperdiet. Proin pretium purus in urna iaculis
                maximus. Aenean cursus lectus eget diam.
              </p>
            </div>

            <div className="testimonialClient__reviewBg py-2 px-2 rounded-md mt-8">
              <div className="flex justify-start items-center gap-3 headingBottomBorder py-3">
                <Avatar
                  src="/ClientImg2.png"
                  sx={{ height: "43px", width: "43px" }}
                />
                <div className="flex justify-start items-start flex-col">
                  <h3 className="text-[#FFF] font-[700] font-[Bakbak One] text-lg">
                    Sam Witwiky
                  </h3>
                  <p className="text-[12px] text-[#FFF] font-[Poppins] font-[400]">
                    Manager at BKB Electronics
                  </p>
                </div>
              </div>
              <p className="font-[Poppins] text-[#FFF] font-[400] text-[13px] my-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                et varius magna, at facilisis lorem. Aenean cursus lectus eget
                diam maximus imperdiet. Proin pretium purus in urna iaculis
                maximus. Aenean cursus lectus eget diam.Magna, at facilisis
                lorem. Aenean cursus lectusAenean cursus lectus eget diam.Magna,
                at facilisis lorem. Aenean cursus lectus
              </p>
            </div>

            <div className="testimonialClient__reviewBg py-2 px-2 rounded-md mb-8">
              <div className="flex justify-start items-center gap-3 headingBottomBorder py-3">
                <Avatar
                  src="/ClientImg2.png"
                  sx={{ height: "43px", width: "43px" }}
                />
                <div className="flex justify-start items-start flex-col">
                  <h3 className="text-[#FFF] font-[700] font-[Bakbak One] text-lg">
                    Jimmy kyle
                  </h3>
                  <p className="text-[12px] text-[#FFF] font-[Poppins] font-[400]">
                    Owner at JJK
                  </p>
                </div>
              </div>
              <p className="font-[Poppins] text-[#FFF] font-[400] text-[13px] my-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                et varius magna, at facilisis lorem. Aenean cursus lectus eget
                diam maximus imperdiet. Proin pretium purus in urna iaculis
                maximus. Aenean cursus lectus eget diam.Magna, at facilisis
                lorem. Aenean cursus lectusAenean cursus lectus eget diam.Magna,
                at facilisis lorem. Aenean cursus lectus maximus. Aenean cursus
                lectus eget diam.Magna, at facilisis lorem. Aenean cursus
                lectusAenean cursus lectus eget diam.Magna, at facilisis lorem.
                Aenean cursus lectus
              </p>
            </div>

            <div className="testimonialClient__reviewBg max-h-[100%] min-h-max py-2 px-2 rounded-md mt-8">
              <div className="flex justify-start items-center gap-3 headingBottomBorder py-3">
                <Avatar
                  src="/ClientImg2.png"
                  sx={{ height: "43px", width: "43px" }}
                />
                <div className="flex justify-start items-start flex-col">
                  <h3 className="text-[#FFF] font-[700] font-[Bakbak One] text-lg">
                    Melissa White
                  </h3>
                  <p className="text-[12px] text-[#FFF] font-[Poppins] font-[400]">
                    Owner at KKLM
                  </p>
                </div>
              </div>
              <p className="font-[Poppins] text-[#FFF] font-[400] text-[13px] my-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                et varius magna, at facilisis lorem. Aenean cursus lectus eget
                diam maximus imperdiet.
              </p>
            </div>

            <div className="testimonialClient__reviewBg py-2 px-2 rounded-md mb-8">
              <div className="flex justify-start items-center gap-3 headingBottomBorder py-3">
                <Avatar
                  src="/ClientImg2.png"
                  sx={{ height: "43px", width: "43px" }}
                />
                <div className="flex justify-start items-start flex-col">
                  <h3 className="text-[#FFF] font-[700] font-[Bakbak One] text-lg">
                    Sam Witwiky
                  </h3>
                  <p className="text-[12px] text-[#FFF] font-[Poppins] font-[400]">
                    Manager at BKB Electronics
                  </p>
                </div>
              </div>
              <p className="font-[Poppins] text-[#FFF] font-[400] text-[13px] my-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                et varius magna, at facilisis lorem. Aenean cursus lectus eget
                diam maximus imperdiet. Proin pretium purus in urna iaculis
                maximus. Aenean cursus lectus eget diam.Magna, at facilisis
                lorem. Aenean cursus lectusAenean cursus lectus eget diam.Magna,
                at facilisis lorem. Aenean cursus lectus
              </p>
            </div>

            <div className="testimonialClient__reviewBg py-2 px-2 rounded-md mt-8">
              <div className="flex justify-start items-center gap-3 headingBottomBorder py-3">
                <Avatar
                  src="/ClientImg2.png"
                  sx={{ height: "43px", width: "43px" }}
                />
                <div className="flex justify-start items-start flex-col">
                  <h3 className="text-[#FFF] font-[700] font-[Bakbak One] text-lg">
                    Sam Witwiky
                  </h3>
                  <p className="text-[12px] text-[#FFF] font-[Poppins] font-[400]">
                    Manager at BKB Electronics
                  </p>
                </div>
              </div>
              <p className="font-[Poppins] text-[#FFF] font-[400] text-[13px] my-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                et varius magna, at facilisis lorem. Aenean cursus lectus eget
                diam maximus imperdiet. Proin pretium purus in urna iaculis
                maximus. Aenean cursus lectus eget diam.Magna, at facilisis
                lorem. Aenean cursus lectusAenean cursus lectus eget diam.Magna,
                at facilisis lorem. Aenean cursus lectus
              </p>
            </div>
          </div>
          <button className="cursor-pointer z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="53"
              height="52"
              viewBox="0 0 53 52"
              fill="none"
            >
              <circle
                cx="26.7998"
                cy="26"
                r="25"
                transform="rotate(-180 26.7998 26)"
                stroke="white"
                stroke-width="2"
              />
              <path
                d="M35.4665 26L28.9665 19.5M35.4665 26L28.9665 32.5M35.4665 26H24.0915M18.1332 26H20.8415"
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
  );
};
