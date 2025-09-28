"use client";
import React, { useState } from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Contact from "@/components/Contact";

function Page() {
 
  return (
    <div className="min-h-screen w-full bg-gray-900 py-12 pt-36 flex justify-center items-center gap-4 flex-col">
      <h1 className=" text-5xl">Contact us</h1>
      <p className="text-gray-400 text-sm mt-3 my-2 w-1/3 text-center">
        {" "}
        We&apos;re here to help with any questions about our courses, programs,
        or events. Reach out and let us know how we can assist you in your
        musical journey.
      </p>
      <Contact />
      <div className="pointer-events-none absolute inset-0 z-0">
        <ShootingStars />
        <StarsBackground />
      </div>
    </div>
  );
}

export default Page;
