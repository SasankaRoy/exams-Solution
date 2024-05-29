import Image from "next/image";
import Link from "next/link";

export const MainFooter = () => {
  return (
    <div className=" relative h-screen">
      <div className="absolute w-full h-full flex flex-col justify-center items-center">
        <div className=" h-[50%] w-full bg-[#1c1c1c]">the top div</div>
        <div className="mainFooter__BgColor h-[50%] w-full relative">
          <Image
            src="/FooterBg1.png"
            className="object-cover"
            style={{ opacity: 0.2 }}
            fill
            loading="lazy"
            alt="footer-bg"
          />
          <div className="w-full h-full absolute z-10">
            <div className="w-[90%] h-full mx-auto flex flex-col justify-end items-center">
              <div className="relative w-[30%] h-[30%]">
                <Image
                  src="/LogoWhite.png"
                  fill
                  loading="lazy"
                  className="object-contain"
                  alt="logo-png"
                />
              </div>
              <div className="w-[50%]">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
