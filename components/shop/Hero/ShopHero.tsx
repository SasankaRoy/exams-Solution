import Image from 'next/image'
import React from 'react'

export const ShopHero = () => {
  return (
    <div className="h-[80vh] bg-[#1C1C1C] flex justify-center items-center">
      <div className="w-[90%] h-[60%] mt-[5%] rounded-2xl relative overflow-hidden">
        <Image
          fill
          src="/ShopHeroImg.png"
          alt="category-page-banner"
          className="object-cover"
        />
        <div className="absolute w-full h-full top-0 left-0 flex justify-start items-center px-14">
          <div className="w-[50%]  flex flex-col justify-start items-start">
            <h1 className="text-[#FFF] font-[Bakbak One] text-5xl font-[700] my-3">
              Our Shop
            </h1>
            <p className="text-[#FFF] font-[Poppins] font-[400] text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptate iste quisquam necessitatibus ipsam maxime debitis,
              mollitia similique aliquid cumque ducimus, qui temporibus
              molestiae vel voluptatum itaque a deleniti natus rem.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
