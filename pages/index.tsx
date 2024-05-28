import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar/Navbar";
import { Hero } from "@/components/Hero/Hero";
import { Category } from "@/components/Category/Category";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
    </>
  );
}
