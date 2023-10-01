import Image from "next/image";
import React from "react";

const AboutEvent = () => {
  return (
    <section className="container mx-auto px-8  mt-16 ">
      <div className="mt-24 mb-8 md:mb-16">
        <h1 className="gridiantText text-center text-5xl font-semibold mb-3  ">
          Welcome to the National Career Expo 2023!
        </h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center gap-x-16 gap-y-8">
        <div className="w-full">
          <div className="flex justify-center rounded-lg">
            <Image
              src="/banner4.jpg"
              alt="heroImage"
              height={2000}
              width={2000}
              className="h-80 object-cover self-center rounded-xl"
            />
          </div>
        </div>
        <div className="w-full ">
          <p className="text-center text-base sm:text-lg text-gray-600 max-w-xl">
            The National Career Expo is an exciting event that aims to bridge
            the gap between fresh graduates and employers in the digital age.
            Taking place on October 18 and 19, 2022, at Millennium Hall in Addis
            Ababa, this expo will provide a platform for job seekers to explore
            various job sectors, network with employers, and enhance their
            employability and career development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutEvent;
