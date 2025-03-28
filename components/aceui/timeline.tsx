"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transperant font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-8xl mx-auto py-10 px-4 md:px-8 lg:px-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-xl md:text-4xl mb-4 text-purple-500 max-w-4xl font-bold">
        About me
          </h1>
          <p className="text-white-300 text-sm md:text-base max-w-sm">
        I'm a software engineer with a passion for building things. I'm going to graduate soon
        from the University of Georgia with a degree in Computer Science. I'm currently staying active
        by working on various projects and participating in hackathons.
          </p>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0 md:pl-8 relative z-50">
          <img src="resources/images/about/me.jpg" alt="About me image" className="w-full h-[50vh] rounded-lg shadow-lg object-cover" />
        </div>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-purple-500 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-blue-700 border border-neutral-300 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-purple-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-purple-200">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 :via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100dark%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
        <style jsx>{`
          @media (max-width: 768px) {
            .absolute {
              bottom: 0;
            }
          }
        `}</style>
      </div>
    </div>
  );
};
