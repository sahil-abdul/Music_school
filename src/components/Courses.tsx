import React from "react";
import { Button } from "./ui/moving-border";
import Link from "next/link";
import CoursesData from "@/Data/music_coureses.json";
import { BackgroundGradient } from "./ui/background-gradient";
import { div } from "motion/react-client";

interface CourseType {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function Courses() {
  const allCourses = CoursesData.courses.filter(
    (course: CourseType) => course.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          FEATURED COURSES
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn With the Best
        </p>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {allCourses.map((course) => (
            <div key={course.id} className="flex justify-center items-center">
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow gap-3.5">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <Link href={`/courses/${course.slug}`} className="mt-3 bg-white p-2 rounded-xl text-black">Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-5">
        <Link href={"/courses"}>
          <Button
            borderRadius="1.75rem"
            className="bg-white z-20 dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            View All courses
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Courses;
