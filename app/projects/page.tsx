"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/aceui/bento-grid";
import {
    IconPokeball,
    IconMusic,
    IconDeviceMobile,
    IconCar,
    IconLeaf2,
    IconClipboardHeart,
    IconDeviceGamepad,
    IconBrandDeezer,
    IconBrandOpenai,
    IconDeviceSpeaker,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";

import { ProjectsData } from "@/lib/ProjectsData";

const projects = ProjectsData.projects;

export default function ProjectPage() {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-4">Projects</h1>
            <p className="text-gray-200 mb-8">Click any project to view more details</p>
            <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={cn("[&>p:text-lg]", item.className)}
                        icon={item.icon}
                        tech={item.tech}
                        link={item.link}

                    />
                ))}
            </BentoGrid>
        </div>
    );
}

const PokeBallAnim = () => {
    const variants = {
        initial: {
            x: 0,
            rotate: 0,
        },
        animate: {
            x: [-10, 10, -10],
            rotate: [-5, 5, -5],
            transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };


    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="h-32 w-32 rounded-full mx-auto my-auto overflow-hidden"
            >
                <Image
                    src="/resources/images/projects/pokeball.png"
                    alt="Project image"
                    width={144}
                    height={144}
                    className="w-full h-full object-cover"
                />
            </motion.div>
        </motion.div>
    );
};
const MCRApp = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };
    const variantsSecond = {
        initial: {
            x: 0,
        },
        animate: {
            x: -10,
            rotate: -5,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-black/[0.2] flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="flex flex-row rounded-2xl border border-neutral-400 p-2  items-start space-x-2 bg-neutral-400"
            >
                <IconBrandOpenai className="h-6 w-6 text-blue-500" />
                <p className="text-xs text-black">
                    According to your medical record you may be at risk for Diabetes, it may be in your best interest to contact a medical professional.
                </p>
            </motion.div>
            <motion.div
                variants={variantsSecond}
                className="flex flex-row rounded-full border border-blue-400 p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-blue-400"
            >
                <p className="text-xs text-black">What should I tell them?</p>
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
            </motion.div>
        </motion.div>
    );
};

const ToBeMade = () => {
    return (
        <div className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-black/[0.2] flex-col space-y-2">
            <div className="h-32 w-32 rounded-full mx-auto my-auto overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full">
                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="20">
                        🚧
                    </text>
                </svg>
            </div>
        </div>
    );
}
const items = [
    {
        title: projects[2].title, //pokedex
        description: (
            <span className="text-sm">
                {projects[2].description}
            </span>
        ),
        header: <PokeBallAnim />,
        className: "md:col-span-1",
        icon: <IconPokeball className="h-4 w-4 text-red-500" />,
        tech: projects[2].technologies,
        link: projects[2].githubUrl,
    },
    {
        title: projects[0].title, //musii
        description: (
            <span className="text-sm">
                {projects[0].description}
            </span>
        ),
        header: <ToBeMade />,
        className: "md:col-span-2",
        icon: <IconMusic className="h-4 w-4 text-purple-500" />,
        tech: projects[0].technologies,
        link: projects[0].githubUrl,
    },
    {
        title: projects[1].title, //healthcare
        description: (
            <span className="text-sm">
                {projects[1].description}
            </span>
        ),
        header: <MCRApp />,
        className: "md:col-span-2",
        icon: <IconClipboardHeart className="h-4 w-4 text-blue-500" />,
        tech: projects[1].technologies,
        link: projects[1].githubUrl,
    },
    {
        title: projects[4].title, //comquest
        description: (
            <span className="text-sm">
                {projects[4].description}
            </span>
        ),
        header: <ToBeMade />,
        className: "md:col-span-1",
        icon: <IconDeviceMobile className="h-4 w-4 text-white-500" />,
        tech: projects[4].technologies,
        link: projects[4].githubUrl,
    },
    {
        title: projects[5].title, //itunes
        description:
            <span className="text-sm">
                {projects[5].description}
            </span>,
        header: <ToBeMade />,
        className: "md:col-span-1",
        icon: <IconBrandDeezer className="h-4 w-4 text-orange-500" />,
        tech: projects[5].technologies,
        link: projects[5].githubUrl,
    },
    {
        title: projects[3].title, //birbo
        description: (
            <span className="text-sm">
                {projects[3].description}
            </span>
        ),
        header: <ToBeMade />,
        className: "md:col-span-2",
        icon: <IconLeaf2 className="h-4 w-4 text-yellow-500" />,
        tech: projects[3].technologies,
        link: projects[3].githubUrl,
    },
    {
        title: projects[6].title, //dawgrider
        description: (
            <span className="text-sm">
                {projects[6].description}
            </span>
        ),
        header: <ToBeMade />,
        className: "md:col-span-1",
        icon: <IconCar className="h-4 w-4 text-red-500" />,
        tech: projects[6].technologies,
        link: projects[6].githubUrl,
    },
    {
        title: projects[7].title, //puzrpg
        description: (
            <span className="text-sm">
                {projects[7].description}
            </span>
        ),
        header: <ToBeMade />,
        className: "md:col-span-1",
        icon: <IconDeviceGamepad className="h-4 w-4 text-green-500" />,
        tech: projects[7].technologies,
        link: projects[7].githubUrl
    },
];
