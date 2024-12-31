"use client";
import { Separator } from "@/components/ui/separator";
import { Educations } from "@/helpers/data";
import Image from "next/image";

const Education: React.FC = () => {
  return (
    <section className="relative bg-muted/50 rounded-lg p-6 md:mt-32 mx-4 md:mx-20 lg:mx-32 xl:mx-40 mb-[5rem]">
      <h2 className="md:text-3xl text-2xl font-bold uppercase tracking-wide mb-4">
        Education
      </h2>
      <div className="flex flex-col">
        {Educations.map((education, index) => (
          <>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col gap-4" key={index}>
                <div className="flex items-center gap-4">
                  <Image
                    src={education.imageSrc}
                    alt={education.imageSrc}
                    className="md:h-12 md:w-12 h-8 w-8 rounded-full self-start"
                    width={100}
                    height={100}
                  />
                  <div>
                    <div>
                      <h1 className="font-bold md:text-xl text-sm">
                        {education.title}
                      </h1>
                      <span className="text-sm md:text-lg">
                        {education.collegeName} | {education.university}
                      </span>
                    </div>
                    <span className="text-sm md:hidden">
                      {education.duration}
                    </span>
                  </div>
                </div>
              </div>
              <span className="text-sm md:text-lg hidden md:flex">
                {education.duration}
              </span>
            </div>
            {index !== Educations.length - 1 && (
              <Separator className="bg-primary-foreground my-4" />
            )}
          </>
        ))}
      </div>
    </section>
  );
};

export default Education;
