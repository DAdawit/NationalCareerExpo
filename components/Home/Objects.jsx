import React from "react";

const Objects = () => {
  return (
    <>
      <section className="container mx-auto px-5 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          <div className="shadow-lg grid  p-5 ">
            <div className="flex justify-center items-center h-20">
              <h1 className="gridiantText text-lg text-center font-bold">
                Forge Face-to-Face Connections
              </h1>
            </div>
            <p className="text-sm text-gray-500 text-center">
              In a world dominated by digital interactions, we believe in the
              power of genuine human connections. The expo provides an
              unparalleled opportunity for job seekers to meet employers
              face-to-face, creating a lasting impact and making it easier to
              secure dream jobs.
            </p>
          </div>
          <div className="shadow-lg grid  p-5 ">
            <div className="flex justify-center items-center h-20">
              <h1 className="gridiantText text-lg text-center font-bold">
                Illuminate the Fresh Graduate Advantage
              </h1>
            </div>
            <p className="text-sm text-gray-500 text-center">
              Fresh graduates possess untapped potential, innovative thinking,
              and a hunger to excel. We aim to showcase their talents,
              enlightening employers about the myriad benefits of hiring these
              rising stars.
            </p>
          </div>
          <div className="shadow-lg grid  p-5">
            <div className="flex justify-center items-center h-20">
              <h1 className="gridiantText text-lg text-center font-bold">
                Network Your Way to <br /> Success
              </h1>
            </div>
            <p className="text-sm text-gray-500 text-center">
              The expo is not just about job hunting; it&apos;s about networking
              with industry professionals, mentors, and potential colleagues.
              Forge relationships that can open doors to exciting opportunities
              and accelerate your career growth.
            </p>
          </div>
          <div className="shadow-lg grid  p-5 ">
            <div className="flex justify-center items-center h-20">
              <h1 className="gridiantText text-lg text-center font-bold">
                Advocacy, Inspiration, and Learning
              </h1>
            </div>
            <p className="text-sm text-gray-500 text-center">
              Immerse yourself in a rich tapestry of advocacy, information
              sharing, learning, and inspiration. Engage in thought-provoking
              conferences, panel discussions, and workshops, and be part of the
              transformative dialogue shaping the future of recruitment in the
              digital age.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Objects;
