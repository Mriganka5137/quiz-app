import { data } from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getColor = (i: number) => {
  const colors = ["bg-red-50", "bg-green-50", "bg-blue-50", "bg-purple-50"];
  return colors[i % 4];
};

const Topics = () => {
  return (
    <div className=" flex flex-col gap-6 w-1/2 max-tablet:w-full">
      {data.map((item, i) => (
        <Link
          href={`/${item.title.toLowerCase()}/1`}
          key={i}
          className=" flex items-center bg-pureWhite dark:bg-navyCustom w-full p-5 rounded-xl border border-transparent gap-8 max-tablet:p-3 hover:border-purpleCustom hover:-translate-y-1 transition-all ease-in-out duration-300"
        >
          <div
            className={` ${getColor(
              i
            )} w-14 h-14 rounded-lg flex items-center justify-center max-tablet:w-10 max-tablet:h-10 `}
          >
            <Image
              src={item.icon}
              alt={item.title}
              width={100}
              height={100}
              className=" w-10 h-10 object-contain max-tablet:w-7 max-tablet:h-7"
            />
          </div>
          <h1 className=" text-heading-s">{item.title}</h1>
        </Link>
      ))}
    </div>
  );
};

export default Topics;
