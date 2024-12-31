"use client";

import { about } from "@/helpers/data";
import Image from "next/image";
import React from "react";

const About: React.FC = () => {
  return (
    <section
      className="relative bg-muted/50 rounded-lg p-6 md:mt-32 mx-4 md:mx-20 lg:mx-32 xl:mx-40"
      id="about"
    >
      <h2 className="text-3xl font-bold uppercase tracking-wider mb-6 text-center md:text-left">
        About
      </h2>
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <ul className=" flex flex-col gap-5 w-full">
          {about.map((data, index) => (
            <li
              key={index}
              className={`flex gap-4   items-start p-6 rounded-lg transition duration-300 ${
                index % 2 === 0
                  ? "bg-gradient-to-r from-primary to-transparent md:hover:bg-gradient-to-l"
                  : "bg-gradient-to-l from-primary to-transparent md:hover:bg-gradient-to-r"
              } gap-4`}
            >
              <Image
                width={30}
                height={30}
                src={data.img}
                alt="Cursor icon"
                className="hidden md:flex"
              />
              <p className="md:text-lg text:sm">{data.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
