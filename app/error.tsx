"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-4">
      <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] font-extrabold">
        Error Found
      </h1>
      <h1 className="text-[2rem] font-extrabold">{error.message}</h1>
      <Button
        className="rounded-full text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] lg:text-[1.875rem] font-semibold md:p-6 p-2 shadow-md transition duration-300 bg-background hover:bg-background/50 text-foreground"
        onClick={reset}
      >
        Reset
      </Button>
    </div>
  );
};  

export default error;
