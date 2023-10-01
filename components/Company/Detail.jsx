import React from "react";
import { company } from "./data";
const Detail = () => {
  return (
    <>
      <section className="container mx-auto px-5">
        <h1 className="gridiantText text-5xl font-extrabold pt-16 pb-8">
          {company?.companyName} Vacancy 2023
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className=" col-span-2">
            <p className="text-gray-700">{company?.description} </p>
            <div className="mt-5">
              <ol className="list-disc ">
                {company.details.map((item, index) => (
                  <li key={index} className="text-gray-700 mt-2">
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <section className="col-span-1 bg-white"></section>
        </div>
      </section>
    </>
  );
};

export default Detail;
