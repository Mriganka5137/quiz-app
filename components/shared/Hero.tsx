import React from "react";

const Hero = () => {
  return (
    <div>
      <h1 className=" text-heading-l-regular ">
        Welcome to the
        <br />
        <span className=" text-heading-l-bold ">Frontend Quiz!</span>
      </h1>
      <p className=" text-body-l mt-12 max-tablet:mt-4">
        Pick a subject to get started
      </p>
    </div>
  );
};

export default Hero;
