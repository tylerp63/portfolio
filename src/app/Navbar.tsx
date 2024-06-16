import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex  min-h-20 fixed top-0 left-0 right-0 bg-white border-b">
      <ul className="flex mx-auto gap-12 mt-6">
        <Link href="#about">
          <li className="hover:underline text-lg">About</li>
        </Link>
        <Link href="#project">
          <li className="hover:underline text-lg">Projects</li>
        </Link>
        <Link href="#contact">
          <li className="hover:underline text-lg">Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
