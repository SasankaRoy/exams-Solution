import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Common/Navbar/Navbar";
import { Hero } from "@/components/Home/Hero/Hero";
import { Category } from "@/components/Home/Category/Category";
import { FAQ } from "@/components/Home/FAQ/FAQ";
import { Testimonial } from "@/components/Home/Testimonials/Testimonial";
import { MainFooter } from "@/components/Home/Footer/MainFooter";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Head>
      <title>Exams Solution - Home</title>
    </Head>
      <Navbar />
      <Hero />
      <Category />
      <FAQ />
      <Testimonial />
      <MainFooter />
    </>
  );
}
