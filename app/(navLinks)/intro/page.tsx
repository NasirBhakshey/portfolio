"use client";
import { Button } from "@/components/ui/button";
import { intro } from "@/helpers/data";
import { useTheme } from "next-themes";
import Image from "next/image";

const Intro: React.FC = () => {
  const { theme } = useTheme();
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between md:mt-[3rem] mx-auto max-w-screen-xl px-4 sm:px-6 md:px-10 overflow-hidden p-5 rounded-lg">
      {/* Left Section (Text) */}
      <div className="flex flex-col items-start z-10 mb-6 md:mb-0 ">
        <h1 className="text-3xl md:text-[3rem] font-extrabold mb-6 sm:mb-8 md:mb-[2.0625rem]">
          {intro.name}
        </h1>
        <p className="text-lg  md:text-2xl mb-6 sm:mb-8 md:mb-[3.25rem] text-justify">
          {intro.description}
        </p>
        <a href={intro.resume} target="_blank">
          <Button className="rounded-full text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] lg:text-[1.875rem] font-semibold md:p-6 p-2 shadow-md transition duration-300 bg-background hover:bg-background/50 text-for border-2 border-foreground">
            Resume
          </Button>
        </a>
      </div>

      {/* Right Section (Image) */}
      <Image
        width={10}
        height={10}
        src={
          theme === "dark"
            ? "/intro/programming.svg"
            : "/intro/programmingLight.svg"
        }
        alt="My hero image"
        className="w-[80%] md:w-[50%] lg:w-[45%] md:flex self-center z-10 mb-6 md:mb-0 animate-floating object-cover hidden"
      />

      {/* Top Blur */}
      <div className="absolute w-[50vw] h-[50vw] min-w-[20rem] top-[-15%] left-[-10%] rounded-full bg-primary/75 blur-[6.25rem] z-0 hidden md:block" />
      {/* Bottom Blur */}
      <div className="absolute w-[70vw] h-[50vw] min-w-[21.875rem] top-[60%] right-[-25vw] rounded-full bg-primary/75 blur-[6.25rem] z-0 hidden md:block" />
    </section>
  );
};

export default Intro;
