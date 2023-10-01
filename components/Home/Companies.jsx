import React from "react";
import JobsList from "../ListComponents/JobsList";

const Companies = () => {
  return (
    <>
      <section>
        <div className="flex flex-col justify-center items-center gap-5 pt-16 ">
          <h1 className="gridiantText text-6xl font-serif font-extrabold">
            Companies
          </h1>
        </div>
        <div className="container  px-5 max-w-4xl mx-auto mt-8">
          <div className="grid gap-y-4">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <JobsList key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Companies;
