import { ContactDetails } from "@/components/Contact/ContactForm/ContactDetails";
import { FormContainer } from "@/components/Contact/ContactForm/FormContainer";
import { Hero } from "@/components/Contact/Hero/Hero";
import { Navbar } from "@/components/Common/Navbar/Navbar";
import { SecondFooter } from "@/components/Common/SecondFooter/SecondFooter";
import Head from "next/head";
import React from "react";
import { FAQ } from "@/components/Contact/FAQ/FAQ";

const Contactus = () => {
  return (
    <>
      <Head>
        <title>Exams Solution - Contactus</title>
      </Head>
      <Navbar />
      <Hero />
      <div className="h-screen bg-[#1C1C1C]">
        <div className="w-[90%] h-[90%]  mx-auto flex justify-between items-center px-3">
          <FormContainer />
          <ContactDetails />
        </div>
      </div>
      <FAQ />
      <SecondFooter />
    </>
  );
};

export default Contactus;
