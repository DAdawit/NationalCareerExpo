import React from "react";
import { company } from "./data";
import ApplicationForm from "./ApplicationForm";
const Detail = () => {
  return (
    <>
      <section className="container mx-auto px-8">
        <h1 className="text-green-500 text-5xl font-extrabold pt-16 pb-8">
          Heineken Breweries S.C Vacancy 2023
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
          <section className="col-span-1 bg-white h-max">
            <ApplicationForm />
          </section>
        </div>
      </section>
    </>
  );
};

export default Detail;
