import Image from "next/image";
import Link from "next/link";
import React from "react";

export const SecondFooter = () => {
  return (
    <div className="h-[40vh] relative bg-[#1C1C1C]">
      <Image
        fill
        src="/FooterBg2.png"
        className="opacity-15"
        alt="secondfooter-bg"
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
                    className="font-[Bakbak One] font-[600] text-md text-[#FFF] "
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
                src="/facebook2.png"
                className="object-contain h-12 w-12"
                alt="facebook-icon"
              />
            </Link>
            <Link href="/">
              <img
                src="/Insta2.png"
                className="object-contain h-12 w-12"
                alt="facebook-icon"
              />
            </Link>
            <Link href="/">
              <img
                src="/Linkedin2.png"
                className="object-contain h-12 w-12"
                alt="facebook-icon"
              />
            </Link>
            <Link href="/">
              <img
                src="/Twitter2.png"
                className="object-contain h-12 w-12"
                alt="facebook-icon"
              />
            </Link>
          </div>
          <div className=" flex justify-between items-center border-t-2 my-2 border-[#FFF] w-[90%] mx-auto py-2">
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
  );
};
