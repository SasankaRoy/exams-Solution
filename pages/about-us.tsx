import { AboutInfo } from "@/components/About/AboutInfo/AboutInfo";
import { Hero } from "@/components/About/Hero/Hero";
import { OurCommitments } from "@/components/About/OurCommitments/OurCommitments";
import { Navbar } from "@/components/Common/Navbar/Navbar";
import React from "react";

const Aboutus = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutInfo />
      <OurCommitments />
    </>
  );
};
export default Aboutus;
