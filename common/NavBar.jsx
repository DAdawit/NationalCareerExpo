import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav style={{ backgroundColor: "#000" }}>
      <div className="flex justify-between p-5">
        <Link href="/">
          <Image
            src="/image004.png"
            height={100}
            width={100}
            alt="mister of labour and skill"
            className="h-16 w-16 object-contain"
          />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
