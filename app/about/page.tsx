import React from "react";
import { Timeline } from "@/components/aceui/timeline";
import { ProjectsData } from '@/lib/ProjectsData';

export default function AboutMePage() {
    const data = [
        {
            title: "Present",
            content: (
                <div>
                    <p className="text-white-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        I love to travel and recently I&apos;ve had the opportunity to visit Japan. Exploring new places and experiencing different cultures is something I am passionate about. Music, on the other hand, is my constant companion, providing a soundtrack to my life&apos;s adventures.
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                        <img
                            src="resources/images/about/seven.jpg"
                            alt="Japan"
                            className="rounded-lg object-cover h-16 md:h-36 lg:h-64 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <img
                            src={ProjectsData.projects[0].image}
                            alt="Musii"
                            className="rounded-lg object-cover h-16 md:h-36 lg:h-64 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2024",
            content: (
                <div>
                    <p className="text-white-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        This year I really focused on improving my skill set by learning many new skills such as Flutter as
                        well as trying to get more involved in the communityt by attending more hackathons and club meetups.
                    </p>
                    <div className="grid grid-cols gap-4">
                        <img
                            src={ProjectsData.projects[2].image}
                            alt="pokedex"
                            className="rounded-lg object-cover h-16 md:h-36 lg:h-64 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <img
                            src="resources/images/about/devdogs.png"
                            alt="DevDogs"
                            className="rounded-lg object-cover h-16 md:h-36 lg:h-64 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div>
                    <p className="text-white-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        I was fortunte enough to have an internship at a rocket company, United Launch Alliance, where I was able to work on some really cool projects and even witness a launch happen live!
                        I also started to get more in tune with nature by going on hikes and camping trips.
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                        <img
                            src="resources/images/about/atlas.jpg"
                            alt="ULA Atlas V"
                            className="rounded-lg object-cover h-16 md:h-36 lg:h-64 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <img
                            src="resources/images/about/nature.jpg"
                            alt="nature"
                            className="rounded-lg object-cover h-16 md:h-36 lg:h-64 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full bg-transparent">
            <Timeline data={data} />
        </div>
    );
}
