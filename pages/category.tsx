import { MainCategorySection } from "@/components/Category/MainCategorySection/MainCategorySection";
import { Navbar } from "@/components/Common/Navbar/Navbar";
import { SecondFooter } from "@/components/Common/SecondFooter/SecondFooter";
import { TopBanner } from "@/components/Common/TopBanner/TopBanner";
import Head from "next/head";
import React from "react";

const category = () => {
  return (
    <>
      <Head>
        <title>Exams solutions - category</title>
      </Head>
      <Navbar />
      <TopBanner
        bannerImg="/BannerCategory1.png"
        bannerHeading="Peng. Technical Exams"
        bannerPara={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et varius magna, at facilisis lorem. Aenean cursus lectus eget diam maximus imperdiet. Proin pretium purus in urna iaculis maximus. Aenean cursus.`}
      />
      <MainCategorySection />
      <SecondFooter />
    </>
  );
};
export default category;
