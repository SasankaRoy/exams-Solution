import { FormContainer } from "@/components/Category/ContactForm/FormContainer";
import { Hero } from "@/components/Category/Hero/Hero";
import { Navbar } from "@/components/Common/Navbar/Navbar";
import Head from "next/head";
import React from "react";

const Contactus = () => {
  return (
    <>
      <Head>
        <title>Exams Solution - Contactus</title>
      </Head>
      <Navbar />
      <Hero />
      <div className="h-screen bg-[#1C1C1C]">
        <div className="w-[90%] h-[80%]  mx-auto flex justify-between items-center">
          <FormContainer />
        </div>
      </div>
    </>
  );
};

export default Contactus;
