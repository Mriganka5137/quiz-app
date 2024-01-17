import React from "react";
import ThemeSwitch from "../theme/ThemeSwitch";
import Image from "next/image";
import Header from "./Header";

const Navbar = () => {
  return (
    <nav className=" flex items-center gap-2 justify-between pt-6 tablet:pt-14 laptop:pt-24">
      <Header />
      <div className=" flex items-center gap-2">
        <Image
          src="/assets/images/icon-sun-dark.svg"
          width={24}
          height={24}
          alt="sun icon"
        />
        <ThemeSwitch />
        <Image
          src="/assets/images/icon-moon-dark.svg"
          width={24}
          height={24}
          alt="moon icon"
        />
      </div>
    </nav>
  );
};

export default Navbar;
