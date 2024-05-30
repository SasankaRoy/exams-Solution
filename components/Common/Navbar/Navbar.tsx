import Image from "next/image";
import Link from "next/link";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [scrollPositionY, setScrollPositionY] = useState(0);

  useEffect(() => {
    const scrollhandler = () => {
      setScrollPositionY(window.scrollY);
    };
    window.addEventListener("scroll", scrollhandler);
    return () => {
      window.removeEventListener("scroll", scrollhandler);
    };
  }, []);

  return (
    <div className={`fixed left-0 z-50 top-0 w-full ${scrollPositionY >= 5?'bg-[#000000]':'bg-transparent'}  py-4 transition-all duration-300 ease-in-out`}>
      <nav className="flex justify-between items-center  w-[90%] mx-auto">
        <div className="relative h-20 w-36">
          <Image
            fill
            src="/Logo.png"
            className="object-contain w-full h-full"
            alt="Logo"
          />
        </div>
        <div className="flex justify-center items-center gap-4 w-[50%]">
          <ul className="flex justify-center items-center gap-3">
            {[{title:"Home",path:'/'}, {title:"Category",path:'/category'}, {title:"Shop",path:'/shop'}, {title:"About Us",path:'/about-us'}, {title:"Contact Us",path:'/contact-us'}].map(
              (cur, id) => (
                <Link
                  href={cur.path}
                  key={id}
                  className="text-white font-[Bakbak One] font-[500] text-lg"
                >
                  {cur.title}
                </Link>
              )
            )}
          </ul>
          <div className="searchInputWrapper flex justify-center items-center gap-1 rounded-3xl w-[33%]">
            <span>
              <SearchOutlinedIcon className="text-white" />
            </span>
            <input
              type="text"
              className="bg-transparent w-[80%] outline-none border-none p-2 text-[#FFF] placeholder:text-[#FFF] font-[Poppins] font-[400]"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-3">
          <button className="border-[1.5px] border-[#FFF] rounded-3xl text-[#FFF] px-6 py-2  font-[Bakbak One] font-[500]">
            Sign Up
          </button>
          <button className="text-[#FFF] px-6 py-2 flex justify-center items-center gap-2 font-[Bakbak One] font-[500] navLoginBTN">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M4 12H14M14 12L11 9M14 12L11 15"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};
