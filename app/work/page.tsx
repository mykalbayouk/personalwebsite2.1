"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/aceui/apple-cards-carousel";

import { WorkData } from "@/lib/WorkData";

const wd = WorkData.work;

export default function WorkPage() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200 font-sans">
        Work Experience
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const ULAContent = () => {
return (
    <>
        {wd[0].descriptionLong.map((desc, index) => {
            return (
                <div
                    key={"ula-content-" + index}
                    className="bg-neutral-800 p-3 md:p-14 rounded-3xl mb-4"
                >
                    <p className="text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto m-5">
                        <span className="font-bold text-neutral-200">
                            {desc.title}
                        </span>
                        <>
                            <br />
                            {desc.content}
                        </>
                    </p>
                    {desc.image && (
                        <Image
                            src={desc.image}
                            alt={desc.title || "Work experience image"}
                            height="500"
                            width="500"
                            className="rounded-lg md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                        />
                    )}
                </div>
            );
        })}
    </>
);
};

const data = [
  {
    category: wd[0].company,
    title: wd[0].position,
    src: "/resources/images/work/ulaCover.jpg",
    content: <ULAContent />,
  },
];
