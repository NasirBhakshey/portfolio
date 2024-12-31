"use client";
import { Separator } from "@/components/ui/separator";
import { Code, Home, Moon, Phone, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const ToggleNav = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  const commonClassname =
    "h-[1.2rem] w-[1.2rem] cursor-pointer md:hover:scale-150 md:hover:m-2 duration-300";

  const navLinks = [
    {
      icon: <Home className={commonClassname} />,
      onClick: () => router.replace("/"),
      tooltip: "Home",
    },
    {
      icon: <Code className={commonClassname} />,
      onClick: () => router.push("/projects"),
      tooltip: "Projects",
    },
    {
      icon: <Phone className={commonClassname} />,
      onClick: () => router.push("/contacts"),
      tooltip: "Contact",
    },
    {
      icon:
        theme === "dark" ? (
          <Moon className={commonClassname} />
        ) : (
          <Sun className={`${commonClassname} hover:rotate-45`} />
        ),
      onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
      tooltip: "Theme",
    },
  ];
  return (
    <div className="fixed left-1/2 bottom-2 -translate-x-1/2 bg-background border-2 border-foreground p-4  rounded-full z-50 w-[16rem] flex justify-center items-center">
      <div className="flex h-5 items-center space-x-4 text-sm">
        {navLinks.map((link, index) => {
          const isActive =
            link.tooltip === "Home"
              ? pathname === "/"
              : pathname.startsWith(`/${link.tooltip.toLowerCase()}`);

          const handleLinkClick = () => {
            if (typeof link.onClick === "function") {
              link.onClick();
            }
          };
          return (
            <TooltipProvider key={link.tooltip}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className="flex items-center gap-6"
                    onClick={handleLinkClick}
                  >
                    <div
                      className={`${
                        isActive
                          ? "bg-foreground text-primary rounded-full p-2 ease-in duration-200"
                          : ""
                      } `}
                    >
                      {link.icon}
                    </div>
                    {index !== navLinks.length - 1 && (
                      <Separator
                        orientation="vertical"
                        className="bg-foreground h-6"
                      />
                    )}
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-foreground text-primary">
                  <p>{link.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </div>
  );
};

export default ToggleNav;
