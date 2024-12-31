"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const AnimationProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="sync">
      <motion.div
        key={pathname}
        initial={{
          opacity: 0,
          filter: "blur(10px)",
          y: -100,
          x: -100,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          y: 0,
          x: 0,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          x: {
            type: "spring",
            damping: 20,
            stiffness: 100,
          },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimationProvider;
