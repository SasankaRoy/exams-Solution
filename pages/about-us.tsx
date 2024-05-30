import { AboutInfo } from "@/components/About/AboutInfo/AboutInfo";
import { Hero } from "@/components/About/Hero/Hero";
import { OurCommitments } from "@/components/About/OurCommitments/OurCommitments";
import { Navbar } from "@/components/Common/Navbar/Navbar";
import { SecondFooter } from "@/components/Common/SecondFooter/SecondFooter";
import React from "react";

const Aboutus = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutInfo />
      <OurCommitments />
      <SecondFooter />
    </>
  );
};
export default Aboutus;
