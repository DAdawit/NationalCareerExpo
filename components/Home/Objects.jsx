"use client";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
const Objects = () => {
  return (
    <>
      <section className="container mx-auto px-5 mt-16">
        <AnimationOnScroll
          animateOnce
          animateIn="animate__animated  animate__fadeInUp animate__delay-0.3s animate__slow	0.5s"
        >
          <h1 className="gridiantText text-5xl text-center font-extrabold py-16">
            Our Objectives
          </h1>
        </AnimationOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 justify-items-center max-w-5xl mx-auto">
          <AnimationOnScroll
            animateOnce
            animateIn="animate__animated  animate__backInLeft animate__delay-0.3s animate__slow	0.5s"
          >
            <div className="shadow-lg grid  p-8 rounded-xl bg-white">
              <div className="flex justify-center items-center h-20">
                <h1 className="gridiantText text-2xl text-center font-bold">
                  Forge Face-to-Face <br /> Connections
                </h1>
              </div>
              <p className="text-base text-gray-500 text-center  tracking-wide">
                In a world dominated by digital interactions, we believe in the
                power of genuine human connections. The expo provides an
                unparalleled opportunity for job seekers to meet employers
                face-to-face, creating a lasting impact and making it easier to
                secure dream jobs.
              </p>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateOnce
            animateIn="animate__animated  animate__backInRight animate__delay-0.3s animate__slow	0.5s"
          >
            <div className="shadow-lg grid  p-8 rounded-xl bg-white">
              <div className="flex justify-center items-center h-20">
                <h1 className="gridiantText text-2xl text-center font-bold">
                  Illuminate the Fresh Graduate <br /> Advantage
                </h1>
              </div>
              <p className="text-base text-gray-500 text-center  tracking-wide">
                Fresh graduates possess untapped potential, innovative thinking,
                and a hunger to excel. We aim to showcase their talents,
                enlightening employers about the myriad benefits of hiring these
                rising stars.
              </p>
            </div>
          </AnimationOnScroll>

          <AnimationOnScroll
            animateOnce
            animateIn="animate__animated  animate__backInLeft animate__delay-0.3s animate__slow	0.5s"
          >
            <div className="shadow-lg grid  p-8 rounded-xl bg-white">
              <div className="flex justify-center items-center h-20">
                <h1 className="gridiantText text-2xl text-center font-bold">
                  Network Your Way to <br /> Success
                </h1>
              </div>
              <p className="text-base text-gray-500 text-center tracking-wide">
                The expo is not just about job hunting; it&apos;s about
                networking with industry professionals, mentors, and potential
                colleagues. Forge relationships that can open doors to exciting
                opportunities and accelerate your career growth.
              </p>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateOnce
            animateIn="animate__animated  animate__backInRight animate__delay-0.3s animate__slow	0.5s"
          >
            <div className="shadow-lg grid  p-8 rounded-xl bg-white">
              <div className="flex justify-center items-center h-20">
                <h1 className="gridiantText text-2xl text-center font-bold">
                  Advocacy, Inspiration, and <br /> Learning
                </h1>
              </div>
              <p className="text-base text-gray-500 text-center tracking-wide">
                Immerse yourself in a rich tapestry of advocacy, information
                sharing, learning, and inspiration. Engage in thought-provoking
                conferences, panel discussions, and workshops, and be part of
                the transformative dialogue shaping the future of recruitment in
                the digital age.
              </p>
            </div>
          </AnimationOnScroll>
        </div>
      </section>
    </>
  );
};

export default Objects;
