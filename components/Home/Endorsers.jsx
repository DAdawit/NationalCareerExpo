import Image from "next/image";
import React from "react";

const Endorsers = () => {
  return (
    <>
      <section>
        <div>
          <div className="flex flex-col justify-center items-center gap-5 pt-16 ">
            <h1 className="gridiantText text-6xl font-serif font-extrabold">
              Endorsers
            </h1>
          </div>
          <div className="flex justify-evenly items-center max-w-3xl mx-auto">
            <Image
              src="/mlsLogo.png"
              height={1000}
              width={1000}
              alt="mister of labour and skill"
              className="h-48 w-28 object-contain"
            />

            <Image
              src="/logo2.png"
              height={1000}
              width={1000}
              alt="mister of labour and skill"
              className="h-28 w-28 object-contain"
            />
            <Image
              src="/mcLogo2.png"
              height={1000}
              width={1000}
              alt="mister of labour and skill"
              className="h-28 w-28 object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Endorsers;
