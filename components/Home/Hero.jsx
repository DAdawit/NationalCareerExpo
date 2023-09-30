import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Nunito, Rokkitt, Open_Sans } from "next/font/google";
// import NavDrawer from "@/common/NavDrawer";
const rokkitt = Open_Sans({
  subsets: ["greek"],
});
const Hero = () => {
  return (
    <div className="overflow-hidden">
      <div className="h-[100vh] w-screen relative ">
        <Image
          src="/banner2.jpg"
          alt="spector"
          fill
          className="w-screen h-[100vh] object-cover brightness-75 object-bottom"
          blurDataURL="/banner1.jpg"
        />
        <div className="absolute top-1/3 w-full">
          <div className="flex flex-col justify-center mx-10">
            <h1
              className={`text-start text-primary font-serif text-5xl font-extrabold text-white tracking-widest mt-10 ${rokkitt.className}`}
            >
              National Career Expo 2023!
            </h1>
            <h1 className="text-start mt-3 text-primary font-serif text-3xl font-bold tracking-widest text-white font-bolder">
              Recruitment in the Digital Age
              {/* <span className="text-red-700">$75 / day</span> */}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
