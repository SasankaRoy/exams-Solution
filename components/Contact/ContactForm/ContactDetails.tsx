import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";

export const ContactDetails = () => {
  return (
    <div className="w-[50%] border-l-2 border-[#FFF]/50 py-4">
      <div className="w-[80%] mx-auto flex flex-col justify-start items-start gap-5">
        <div className="contactShadow w-[75%] py-3 px-4 rounded-lg">
          <h2 className="text-[#FFF] font-[Poppins] font-[600] text-xl">
            Call Us
          </h2>

          <Link
            href="tel:+1 (289) 352-1293"
            className="flex justify-start items-center text-[#FFF] gap-3 font-[500] font-[Poppins] text-base my-4"
          >
            <LocalPhoneIcon />
            <span>+1 (289) 352-1293</span>
          </Link>
        </div>

        <div className="contactShadow w-[75%] py-3 px-4 rounded-lg">
          <h2 className="text-[#FFF] font-[Poppins] font-[600] text-xl">
            Email
          </h2>
          

          <Link
            href="mailto:support@examssolutions.ca"
            className="flex justify-start items-center text-[#FFF] gap-3 font-[500] font-[Poppins] text-base my-4"
          >
            <EmailIcon />
            <span>support@examssolutions.ca</span>
          </Link>
        </div>

        <div className="contactShadow w-[75%] py-3 px-4 rounded-lg">
          <h2 className="text-[#FFF] font-[Poppins] font-[600] text-xl">
            Visit Us
          </h2>
          

          <Link
            href="/"
            className="flex justify-start items-center text-[#FFF] gap-3 font-[500] font-[Poppins] text-base my-4"
          >
            <LocationOnIcon />
            <span>Mississauga, ON, Canada</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
