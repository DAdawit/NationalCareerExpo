import { CalendarIcon } from "@/assets/Icons/CalanderIcon";
import { ClockIcon } from "@/assets/Icons/ClockIcon";
import { LocationIcon } from "@/assets/Icons/LocationIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const JobsList = ({ item }) => {
  return (
    <>
      <div className="grid sm:flex justify-between py-3 px-5 shadow-lg hover:shadow-none hover:border-2 hover:border-gray-200 transition-all bg-white">
        <div className="flex gap-3 items-center">
          <div className="h-24 w-24">
            <Image
              src={item?.logo}
              height={1000}
              width={1000}
              alt="company logo"
              className="h-24 w-24 object-contain"
            />
          </div>
          <div className="grid  h-full">
            <div className="align-top">
              <h1 className=" text-xl font-bold">{item.name}</h1>
            </div>
            <div className="align-bottom">
              <div className="flex gap-2 items-end">
                <div className="flex gap-1 items-center">
                  <span className="text-textPrimary">
                    <LocationIcon />
                  </span>
                  <h2>{item.location}</h2>
                </div>
                <div className="flex gap-1 items-center">
                  <span className="text-textPrimary">
                    <ClockIcon />
                  </span>
                  <h2>Full Time</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-2">
          <Link
            href="/company"
            className="gridiantBg px-4 py-3 text-white hover:scale-105 w-min whitespace-nowrap"
          >
            Apply Now
          </Link>
          <div className="flex items-center gap-1">
            <span className="text-textPrimary">
              <CalendarIcon />
            </span>
            <h2> 01 Sep, 2023</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsList;
