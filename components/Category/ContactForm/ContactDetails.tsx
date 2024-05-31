import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";

export const ContactDetails = () => {
  return (
    <div className="w-[50%] border-l-2 border-[#FFF]/50 py-4">
      <div className="w-[80%] mx-auto flex flex-col justify-start items-start gap-3">
        <div>
          <h2 className="text-[#FFF] font-[Poppins] font-[600] text-xl">
            Call Us
          </h2>
          <p className="text-[#FFF] font-[Poppins] font-[300] text-sm my-3">
            Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi,
            pretium ut lacinia in, elementum id enim. Done
          </p>

          <Link
            href="tel:+1 (289) 352-1293"
            className="flex justify-start items-center text-[#FFF] gap-3 font-[500] font-[Poppins] text-base my-4"
          >
            <LocalPhoneIcon />
            <span>+1 (289) 352-1293</span>
          </Link>
        </div>

        <div>
          <h2 className="text-[#FFF] font-[Poppins] font-[600] text-xl">
            Email
          </h2>
          <p className="text-[#FFF] font-[Poppins] font-[300] text-sm my-3">
            Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi,
            pretium ut lacinia in, elementum id enim. Done
          </p>

          <Link
            href="mailto:support@examssolutions.ca"
            className="flex justify-start items-center text-[#FFF] gap-3 font-[500] font-[Poppins] text-base"
          >
            <EmailIcon />
            <span>support@examssolutions.ca</span>
          </Link>
        </div>

        <div>
          <h2 className="text-[#FFF] font-[Poppins] font-[600] text-xl">
            Visit Us
          </h2>
          <p className="text-[#FFF] font-[Poppins] font-[300] text-sm my-3">
            Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi,
            pretium ut lacinia in, elementum id enim. Done
          </p>

          <Link
            href="/"
            className="flex justify-start items-center text-[#FFF] gap-3 font-[500] font-[Poppins] text-base"
          >
            <LocationOnIcon />
            <span>Mississauga, ON, Canada</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
