import { AboutInfo } from "@/components/About/AboutInfo/AboutInfo";
import { Hero } from "@/components/About/Hero/Hero";
import { OurCommitments } from "@/components/About/OurCommitments/OurCommitments";
import { Navbar } from "@/components/Common/Navbar/Navbar";
import { SecondFooter } from "@/components/Common/SecondFooter/SecondFooter";
import Head from "next/head";
import React from "react";

const Aboutus = () => {
  return (
    <>
    <Head>
      <title>
        Exams Solution - About us
      </title>
    </Head>
      <Navbar />
      <Hero />
      <AboutInfo />
      <OurCommitments />
      <SecondFooter />
    </>
  );
};
export default Aboutus;
