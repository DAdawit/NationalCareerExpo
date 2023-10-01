import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#720627]">
        <div className="container mx-auto p-5 ">
          <div>
            <div className="flex gap-2">
              <Image
                src="/image004.png"
                height={1000}
                width={1000}
                alt="mister of labour and skill"
                className="h-24 w-24 object-contain"
              />
              <Image
                src="/image009.png"
                height={1000}
                width={1000}
                alt="mister of labour and skill"
                className="h-24 w-24 object-contain"
              />
              <Image
                src="/logo2.png"
                height={1000}
                width={1000}
                alt="mister of labour and skill"
                className="h-24 w-24 object-contain"
              />
            </div>
            <h1 className="text-gray-300 text-xl pt-8">
              National Career Expo 2023 !
            </h1>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
