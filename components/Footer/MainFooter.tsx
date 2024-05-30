import Image from "next/image";
import Link from "next/link";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { MailLockOutlined } from "@mui/icons-material";

export const MainFooter = () => {
  return (
    <div className=" relative h-screen">
      <div className="absolute w-full h-full flex flex-col justify-center items-center">
        <div className=" h-[50%] w-full bg-[#1c1c1c] py-3 px-2">
          <div className="w-[90%] mx-auto flex justify-between items-center">
            <div className="w-[40%]">
              <h2 className="text-[#FFF] font-[Bakbak One] font-[600] text-5xl">
                Get in touch
              </h2>
              <p className="text-[#FFF] font-[Poppins] text-[13px] my-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                et varius magna, at facilisis lorem. Aenean cursus lectus eget
                diam maximus imperdiet.
              </p>
              <ul className="my-4 flex flex-col justify-start items-start gap-3">
                <Link
                  href="tel:+1 (289) 352-1293"
                  className="flex justify-start items-center text-[#FFF] gap-3 font-[500] font-[Poppins] text-base"
                >
                  <LocalPhoneIcon />
                  <span>+1 (289) 352-1293</span>
                </Link>
                <Link
                  href="mailto:support@examssolutions.ca"
                  className="flex justify-start items-center text-[#FFF] gap-3 font-[500] font-[Poppins] text-base"
                >
                  <EmailIcon />
                  <span>support@examssolutions.ca</span>
                </Link>
                <Link
                  href="/"
                  className="flex justify-start items-center text-[#FFF] gap-3 font-[500] font-[Poppins] text-base"
                >
                  <LocationOnIcon />
                  <span>Mississauga, ON, Canada</span>
                </Link>
              </ul>
            </div>

            <div className="w-[50%] relative bg-red-400">
              <div className="bg-[#1C1C1C] tellUs__Wrapper absolute z-20 -top-20 right-[8%] w-[70%] rounded-2xl mx-auto py-5 px-5">
                <h3 className="text-[#FFF] font-[Bakbak One] font-[600] text-4xl">
                  Tell us
                </h3>
                <div className="flex flex-col justify-start items-start gap-4 my-3">
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="Your name..."
                      className="rounded-lg w-full px-3 py-2 inputBgColor font-[Poppins] text-[#FFF] placeholder:text-opacity-5 border-none outline-none"
                    />
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="Your Email ID..."
                      className="rounded-lg w-full px-3 py-2 inputBgColor font-[Poppins] text-[#FFF] placeholder:text-opacity-5 border-none outline-none"
                    />
                  </div>
                  <div className="w-full">
                    <textarea
                      rows={5}
                      name="message"
                      placeholder="Your Message..."
                      className="rounded-lg w-full px-3 py-2 inputBgColor font-[Poppins] text-[#FFF] placeholder:text-opacity-5 border-none outline-none"
                    ></textarea>
                  </div>
                  <button className="w-full py-2 submitBtnBgColor text-[#FFF] rounded-full font-[Bakbak One] font-[600] text-base">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mainFooter__BgColor h-[50%] w-full relative">
          <Image
            src="/FooterBg1.png"
            className="object-cover object-bottom"
            style={{ opacity: 0.32 }}
            fill
            loading="lazy"
            alt="footer-bg"
          />
          <div className="w-full h-full absolute z-10">
            <div className="w-[90%] h-full mx-auto flex flex-col justify-end items-center">
              <div className="relative w-[30%] h-[30%] my-2">
                <Image
                  src="/LogoWhite.png"
                  fill
                  loading="lazy"
                  className="object-contain"
                  alt="logo-png"
                />
              </div>
              <div className="w-[50%] my-2">
                <ul className="flex justify-evenly items-center gap-4 my-2">
                  {["Home", "Category", "Shop", "About Us", "Contact Us"].map(
                    (cur, id) => (
                      <Link
                        className="font-[Bakbak One] font-[600] text-lg text-[#FFF] "
                        href="/"
                        key={id}
                      >
                        {cur}
                      </Link>
                    )
                  )}
                </ul>
              </div>
              <div className="w-[35%] flex justify-evenly">
                <Link href="/">
                  <img
                    src="/faceBookIcon.png"
                    className="object-contain h-12 w-12"
                    alt="facebook-icon"
                  />
                </Link>
                <Link href="/">
                  <img
                    src="/InstaIcon.png"
                    className="object-contain h-12 w-12"
                    alt="facebook-icon"
                  />
                </Link>
                <Link href="/">
                  <img
                    src="/LinkedinIcon.png"
                    className="object-contain h-12 w-12"
                    alt="facebook-icon"
                  />
                </Link>
                <Link href="/">
                  <img
                    src="/TwitterIcon.png"
                    className="object-contain h-12 w-12"
                    alt="facebook-icon"
                  />
                </Link>
              </div>
              <div className=" flex justify-between items-center border-t my-2 border-[#FFF] w-[90%] mx-auto py-2">
                <div>
                  <p className="text-[#FFF] font-[Montserrat] text-[13px]">
                    Copyright © 2022 - 2024
                  </p>
                </div>
                <div>
                  <p className="text-[#FFF] font-[Montserrat] text-[13px]">
                    {" "}
                    Alrights reserved by Kyptronix
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
