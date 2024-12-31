"use client";
import { contacts } from "@/helpers/data";
import { useTheme } from "next-themes";
import Image from "next/image";

const Contact: React.FC = () => {
  const { theme } = useTheme();
  return (
    <section className="relative flex flex-col md:flex-row-reverse items-center justify-between md:mt-[3rem] mx-auto max-w-screen-xl px-4 sm:px-6 md:px-10 overflow-hidden p-8 rounded-lg">
      <div className="max-w-4xl mx-auto p-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contacts.map((detail) => (
            <a key={detail.linkText} href={detail.linkHref} target="_blank">
              <div className="flex flex-row justify-start items-center p-6 rounded-lg bg-primary hover:bg-foreground/25 duration-300 hover:-translate-y-1 hover:shadow-md gap-8">
                <Image
                  width={100}
                  height={100}
                  src={detail.iconSrc}
                  alt={detail.altText}
                  className={`w-10 h-10 duration-300 group-hover:scale-110 ${
                    theme === "dark" ? "invert" : ""
                  }`}
                />

                <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  {detail.linkText}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
      <Image
        width={10}
        height={10}
        src={
          theme === "dark"
            ? "/contact/contactUs.svg"
            : "/contact/contactUsLight.svg"
        }
        alt="My hero image"
        className="w-[80%] md:w-[50%] lg:w-[45%] md:flex self-end z-10 mb-6 md:mb-0 animate-floating object-cover "
      />

      {/* Top Blur */}
      <div className="absolute w-[50vw] h-[50vw] min-w-[20rem] top-[-15%] left-[-10%] rounded-full bg-primary/75 blur-[6.25rem] z-0 hidden md:block" />
      {/* Bottom Blur */}
      <div className="absolute w-[70vw] h-[50vw] min-w-[21.875rem] top-[60%] right-[-25vw] rounded-full bg-primary/75 blur-[6.25rem] z-0 hidden md:block" />
    </section>
  );
};

export default Contact;
