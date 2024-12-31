"use client";
import { experience } from "@/helpers/data";
import Image from "next/image";
import React from "react";

const Experience: React.FC = () => {
  return (
    <section
      className="relative bg-muted/50 rounded-lg p-6 md:mt-32 mt-4 mx-4 md:mx-20 lg:mx-32 xl:mx-40"
      id="experience"
    >
      <h2 className="text-3xl font-bold uppercase tracking-wider mb-6 text-center md:text-left">
        Experience
      </h2>
      <div className="flex items-center">
        <ul className="flex flex-col gap-4 w-full">
          {experience.map((experienceItem, id) => (
            <li
              key={id}
              className={`flex flex-col p-4 ${
                id % 2 === 0
                  ? "bg-gradient-to-r from-primary to-transparent md:hover:bg-gradient-to-l"
                  : "bg-gradient-to-l from-primary to-transparent md:hover:bg-gradient-to-r"
              } rounded-lg`}
            >
              <div className="flex gap-4">
                <Image
                  width={100}
                  height={100}
                  src={experienceItem.imageSrc}
                  alt={`${experienceItem.organisation} Logo`}
                  className="h-14 w-14 rounded"
                />
                <div>
                  <h3 className="md:text-xl text-sm font-semibold">{`${experienceItem.role} | ${experienceItem.organisation}`}</h3>
                  <p className="text-sm font-light">{`${experienceItem.startDate} - ${experienceItem.endDate}`}</p>
                </div>
              </div>
              <div className="flex flex-col">
                <ul className="mt-1 list-disc list-outside px-3 text-justify ">
                  {experienceItem.experiences.map((experience, index) => (
                    <li key={index} className="text-sm">
                      {experience}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
