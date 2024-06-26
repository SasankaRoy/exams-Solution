import { Navbar } from "@/components/Common/Navbar/Navbar";
import { SecondFooter } from "@/components/Common/SecondFooter/SecondFooter";
import { ShopHero } from "@/components/shop/Hero/ShopHero";
import { ShopMain } from "@/components/shop/shopMain/ShopMain";
import Head from "next/head";
import React from "react";

const shop = () => {
  return (
    <>
      <Head>
        <title>Exam Solution - shop</title>
      </Head>
      <Navbar />
      <ShopHero />
      <ShopMain />
      <SecondFooter />
    </>
  );
};

export default shop;
