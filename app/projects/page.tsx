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
    IconHome,
    IconHammer,
    IconFileDescriptionFilled,
    IconPhotoFilled,
    IconFeather,
    IconBugFilled,
    IconLeaf,
    IconButterflyFilled,
    IconCarFilled,
    IconSword,
    IconShieldFilled,
    IconActivity,
    IconRun,
    IconPlayerPlay,
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
                className="h-28 w-28 rounded-full mx-auto my-auto overflow-hidden"
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
const MusiiAnim = () => {
    const variants = {
        initial: { scale: 1 },
        animate: {
            scale: [1, 1.2, 1],
            transition: {
                duration: 0.8,
                repeat: Infinity,
            },
        },
    };

    const offsetVariants = {
        initial: {
            y: -100,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            }
        }
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-black/[0.2] flex-col items-center justify-center"
        >
            <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex gap-2">
                    <motion.div variants={variants}>
                        <IconMusic className="h-12 w-12 text-blue-500" />
                    </motion.div>
                    <motion.div variants={variants}>
                        <IconMusic className="h-8 w-8 text-red-500" />
                    </motion.div>
                    <motion.div variants={variants}>
                        <IconMusic className="h-12 w-12 text-green-500" />
                    </motion.div>
                    <motion.div variants={variants}>
                        <IconMusic className="h-8 w-8 text-yellow-500" />
                    </motion.div>
                </div>
                <motion.div variants={offsetVariants}>
                    <IconFileDescriptionFilled className="h-12 w-12 text-purple-500" />
                </motion.div>
            </div>
        </motion.div>
    );
};

const ComAnim = () => {
    const hammerVariants = {
        initial: {
            rotate: -25,
            x: -25,
            y: -25
        },
        animate: {
            rotate: 15,
            x: -15,
            y: -15,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const houseVariants = {
        initial: {
            scale: 1
        },
        animate: {
            scale: [1, 0.9, 1],
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-black/[0.2] items-center justify-center"
        >
            <div className="flex justify-evenly items-center w-full">
                <div className="w-24 h-36 rounded-2xl border-4 border-gray-400 p-2 bg-white relative">
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-400 rounded-full" />
                    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                px-2 py-1 bg-purple-500 text-white rounded-lg hover:bg-white-600 transition-colors text-[10px]">
                        Help
                    </button>
                </div>

                <motion.div
                    initial="initial"
                    whileHover="animate"
                >
                    <motion.div
                        variants={{
                            initial: { scale: 1 },
                            animate: {
                                scale: [1, 1.5, 1],
                                transition: {
                                    duration: 0.5,
                                    ease: "easeInOut"
                                }
                            }
                        }}
                    >
                        <svg
                            className="w-12 h-12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M5 12h14m-7-7l7 7-7 7" />
                        </svg>
                    </motion.div>
                </motion.div>

                <div className="relative">
                    <motion.div
                        variants={houseVariants}
                        className="text-blue-500"
                    >
                        <IconHome className="h-16 w-16" />
                    </motion.div>
                    <motion.div
                        variants={hammerVariants}
                        className="absolute top-0 left-0 text-orange-500"
                    >
                        <IconHammer className="h-12 w-12" />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

const ItunesAnim = () => {
    const containerVariants = {
        initial: { rotate: 0 },
        animate: {
            rotate: [-1, 1, -1],
            transition: {
                duration: 0.5,
                repeat: Infinity
            }
        }
    };

    const albumVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.1,
            transition: { duration: 0.2 }
        }
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] items-center justify-center"
        >
            <motion.div
                variants={containerVariants}
                className="w-48 h-30 bg-neutral-400 rounded-lg p-3 flex flex-wrap gap-1.5 border border-gray-600 items-center justify-center"
            >
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        variants={albumVariants}
                        whileHover="hover"
                        className="w-8 h-8 bg-gradient-to-br from-purple-800 to-pink-500 rounded-md"
                    />
                ))}
            </motion.div>
        </motion.div>
    );

};

const BirboAnim = () => {
    const itemRotation = {
        initial: { rotate: 0 },
        animate: {
            rotate: 360,
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "linear"
            }
        }
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] items-center justify-center relative"
        >
            
            <div className="bg-neutral-900 rounded-full p-4 relative w-36 h-36 flex items-center justify-center">
            <IconPhotoFilled className="h-12 w-12 text-purple-500 absolute" />

            <motion.div
            variants={itemRotation}
            className="w-36 h-36 absolute"
            style={{ transformOrigin: "center" }}
            >
                <IconFeather className="h-8 w-8 text-blue-500 absolute -top-4 left-1/2 transform -translate-x-1/2" />
                <IconBugFilled className="h-8 w-8 text-red-500 absolute top-1/2 -right-4 transform -translate-y-1/2" />
                <IconLeaf className="h-8 w-8 text-green-500 absolute -bottom-4 left-1/2 transform -translate-x-1/2" />
                <IconButterflyFilled className="h-8 w-8 text-yellow-500 absolute top-1/2 -left-4 transform -translate-y-1/2" />
            </motion.div>
            </div>
        </motion.div>
    );
};

const DawgAnim = () => {
    const carVariants = {
        initial: { x: 0 },
        animate: {
            x: [-100, 0, 200],
            transition: {
                times: [0, 0.5, 1],
                duration: 2,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] items-center justify-center relative"
        >
            <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute top-4 left-4 text-yellow-500"
            >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="6"/>
                {[...Array(8)].map((_, i) => (
                <line
                    key={i}
                    x1="12"
                    y1="4"
                    x2="12"
                    y2="2"
                    stroke="currentColor"
                    strokeWidth="2"
                    transform={`rotate(${i * 45} 12 12)`}
                />
                ))}
            </svg>
            </motion.div>
            <motion.div
            variants={carVariants}
            className="relative z-10"
            >
            <IconCarFilled className="h-24 w-24 text-red-500" />
            </motion.div>
            <div className="absolute bottom-8 w-full h-2 bg-gray-600 rounded-full" />
        </motion.div>
    );
};

const PuzAnim = () => {
    const swordVariants = {
        initial: { x: -55, rotate: -25 },
        animate: {
            x: [-50, 0, -50],
            rotate: [-25, 0, -25],
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    };

    const shieldVariants = {
        initial: { x: 50, rotate: -45 },
        animate: {
            x: [50, 0, 50],
            rotate: [-45, 0, -45],
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] items-center justify-center"
        >
            <div className="relative">
                <motion.div
                    variants={swordVariants}
                    className="absolute left-0 text-gray-400"
                >
                    <IconSword className="h-16 w-16" />
                </motion.div>
                <motion.div
                    variants={shieldVariants}
                    className="absolute right-0 text-blue-600"
                >
                    <IconShieldFilled className="h-16 w-16" />
                </motion.div>
            </div>
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

const MomentumAnim = () => {
    const phoneVariants = {
        initial: { scale: 1, opacity: 1 },
        animate: {
            scale: [1, 0.9, 1],
            opacity: [1, 0.5, 0],
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        }
    };

    const buttonVariants = {
        initial: { scale: 1 },
        animate: {
            scale: [1, 0.8, 1],
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    const runVariants = {
        initial: { x: -30, opacity: 0 },
        animate: {
            x: [-30, 30],
            opacity: [0, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] items-center justify-center"
        >
            <div className="relative w-full h-full flex items-center justify-center">
                <motion.div
                    variants={phoneVariants}
                    className="absolute flex items-center justify-center"
                >
                    <div className="w-24 h-40 bg-neutral-800 rounded-3xl p-4 relative flex items-center justify-center">
                        <div className="w-2 h-2 bg-neutral-600 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2" />
                        <motion.div
                            variants={buttonVariants}
                            className="w-12 h-12 bg-[#A00000] rounded-full flex items-center justify-center"
                        >
                            <IconPlayerPlay className="w-6 h-6 text-white" />
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div variants={runVariants} className="absolute">
                    <IconRun className="h-20 w-20 text-[#A00000]" />
                </motion.div>
            </div>
        </motion.div>
    );
};

const items = [
    {
        title: projects[8].title, //momentum
        description: (
            <span className="text-sm">
                {projects[8].description}
            </span>
        ),
        header: <MomentumAnim />,
        className: "md:col-span-2",
        icon: <IconActivity className="h-4 w-4 text-[#A00000]" />,
        tech: projects[8].technologies,
        link: projects[8].githubUrl,
    },
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
        header: <MusiiAnim />,
        className: "md:col-span-1",
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
        header: <ComAnim />,
        className: "md:col-span-2",
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
        header: <ItunesAnim />,
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
        header: <BirboAnim />,
        className: "md:col-span-1",
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
        header: <DawgAnim />,
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
        header: <PuzAnim />,
        className: "md:col-span-1",
        icon: <IconDeviceGamepad className="h-4 w-4 text-green-500" />,
        tech: projects[7].technologies,
        link: projects[7].githubUrl
    },
];
