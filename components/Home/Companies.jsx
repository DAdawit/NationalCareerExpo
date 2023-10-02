"use client";
import React from "react";
import JobsList from "../ListComponents/JobsList";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import { jobs } from "@/data/jobs";
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
            {jobs.map((item, index) => (
              <div key={index}>
                <AnimationOnScroll
                  animateOnce
                  animateIn="animate__animated  animate__fadeInUp animate__delay-0.3s animate__slow	0.5s"
                >
                  <JobsList key={index} item={item} />
                </AnimationOnScroll>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Companies;
