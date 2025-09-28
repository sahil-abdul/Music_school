"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import CoureseData from "@/Data/music_coureses.json";

interface courses {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}
function page() {
  const allCorses = CoureseData.courses
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-center text-3xl">All Courses ({allCorses.length})</h1>
      <div className="w-full flex flex-wrap justify-around gap-4">
        {allCorses.map((course) => (

        <CardContainer className="inter-var" key = {course.slug}>
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {course.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
             {course.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={course.image}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={course.title}
              />
            </CardItem>
            
          </CardBody>
        </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default page;
