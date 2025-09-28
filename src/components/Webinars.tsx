import React from "react";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import { HoverEffect } from "./ui/card-hover-effect";

const featuredWebinars = [
  {
    title: "Understanding Music Theory",
    description:
      "Dive deep into the fundamentals of music theory and enhance your musical skills.",
    slug: "understanding-music-theory",
    isFeatured: true,
  },
  {
    title: "The Art of Songwriting",
    description:
      "Learn the craft of songwriting from experienced musicians and songwriters.",
    slug: "the-art-of-songwriting",
    isFeatured: true,
  },
  {
    title: "Mastering Your Instrument",
    description:
      "Advanced techniques to master your musical instrument of choice.",
    slug: "mastering-your-instrument",
    isFeatured: true,
  },
  {
    title: "Music Production Essentials",
    description:
      "Get started with music production with this comprehensive overview.",
    slug: "music-production-essentials",
    isFeatured: true,
  },
  // Added two more webinars
  {
    title: "Live Performance Techniques",
    description:
      "Enhance your live performance skills with expert tips and strategies.",
    slug: "live-performance-techniques",
    isFeatured: true,
  },
  {
    title: "Digital Music Marketing",
    description:
      "Learn how to promote your music effectively in the digital age.",
    slug: "digital-music-marketing",
    isFeatured: true,
  },
];

function Webinars() {
  return (
    <div className="bg-gray-900 py-12">
      <div className="text-center">
        <h1 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          FEATURED WEBINARS
        </h1>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Enhance Your Musical Journey
        </p>
      </div>
      <div className="mt-10">
        <HoverEffect items={featuredWebinars.map((webinars) => (
            {
                title:webinars.title,
                description:webinars.description,
                link:"/"
            }
        ))}/>
      </div>
      <div className="text-center mt-5">
        <Link href={"/courses"}>
          <Button
            borderRadius="1.75rem"
            className="bg-white z-20 dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
             View All webinars
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Webinars;
