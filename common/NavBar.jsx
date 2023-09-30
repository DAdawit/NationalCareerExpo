import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="">
      <div className="flex justify-between py-5 ">
        <div>
          <h1>logo</h1>
        </div>
        <div>
          <Link href="/">Home</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
