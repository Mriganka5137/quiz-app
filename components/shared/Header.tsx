"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const getHeader = (pathname: string) => {
  if (pathname.includes("html")) {
    return "HTML";
  } else if (pathname.includes("css")) {
    return "CSS";
  } else if (pathname.includes("javascript")) {
    return "JavaScript";
  } else if (pathname.includes("accessibility")) {
    return "Accessibility";
  } else {
    return "";
  }
};

const Header = () => {
  const pathname = usePathname();
  if (pathname === "/") {
    return <div />; // Return an empty div or any other placeholder
  }
  const header = getHeader(pathname);
  return (
    <div className=" flex items-center gap-6">
      <div
        className={` ${
          header === "HTML"
            ? "bg-red-100"
            : header === "CSS"
            ? "bg-green-100"
            : header === "JavaScript"
            ? "bg-blue-100"
            : "bg-purple-100"
        } w-14 h-14 p-2 bg-green-50 rounded-md`}
      >
        <Image
          src={`/assets/images/icon-${header.toLowerCase()}.svg`}
          width={1000}
          height={1000}
          alt={`${header} logo`}
          className=" object-contain w-full h-full"
        />
      </div>
      <p className=" text-heading-s">{header}</p>
    </div>
  );
};

export default Header;
