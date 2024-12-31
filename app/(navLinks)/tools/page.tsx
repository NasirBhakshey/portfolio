import Image from "next/image";
import React from "react";
import { tools } from "@/helpers/data";

const Tools: React.FC = () => {
  return (
    <section className="my-20 mt-5 mx-5" id="tools">
      <h2 className="text-3xl font-bold uppercase tracking-wide">Tools</h2>
      <div className="flex justify-center mt-6">
        <div className="w-full grid grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {tools.map((skill, id) => (
            <div
              key={id}
              className="flex flex-col items-center text-center hover:scale-110 transition-transform"
            >
              <div className="bg-primary rounded-full flex  justify-center items-center md:w-24 md:h-24 h-14 w-14">
                <Image
                  width={100}
                  height={100}
                  src={skill.imageSrc}
                  alt={skill.title}
                  className="md:h-16 md:w-16 h-10 w-10"
                />
              </div>
              <p className="mt-2 md:text-lg text-sm font-medium">
                {skill.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
