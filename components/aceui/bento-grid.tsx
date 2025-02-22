'use client';
import { cn } from "@/lib/utils";
import BottomGradient from "@/components/customwidgets/bottomgradient";
import {
  IconBrandFlutter,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandAndroid,
  IconBrandTypescript,
  IconBrandOpenai,
  IconPokeball,
  IconBrandFirebase,
  IconBrandGit,
  IconBrandGithub,
  IconBrandMongodb,
  IconFlame,
  IconBrandPython,
} from "@tabler/icons-react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  tech,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  tech?: string[];
  link?: string;
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
      "z-10 row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4 bg-black border border-transparent justify-between flex flex-col space-y-4 cursor-pointer",
      className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200 ">
        {icon}
        <div className="font-sans font-bold text-white-600 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-white-600 text-xs mb-2">
          {description}
        </div>
        <div className="flex flex-wrap justify-left space-x-2">
        {tech?.map((t) => (
            <div
            key={t}
            className="bg-black p-1 text-xs font-sans flex items-center gap-1"
            >
            {stringToIcon(t)}
            </div>
        ))}
      </div>
      </div>
    </a>
  );
};

function stringToIcon(tech: string) {
  switch (tech) {
    case "Next.js":
      return <IconBrandNextjs className="h-6 w-6" />;
    case "React":
      return <IconBrandReact className="h-6 w-6" />;
    case "Flutter":
      return <IconBrandFlutter className="h-6 w-6" />;
    case "Android Studio":
      return <IconBrandAndroid className="h-6 w-6" />;
    case "TypeScript":
      return <IconBrandTypescript className="h-6 w-6" />;
    case "OpenAI GPT-4o":
      return <IconBrandOpenai className="h-6 w-6" />;
    case "PokeAPI":
      return <IconPokeball className="h-6 w-6" />;
    case "FireBase":
      return <IconBrandFirebase className="h-6 w-6" />;
    case "MongoDB":
      return <IconBrandMongodb className="h-6 w-6" />;
    case "GitHub":
      return <IconBrandGithub className="h-6 w-6" />;
    case "Git":
      return <IconBrandGit className="h-6 w-6" />;
    case "Java":
      return <IconFlame className="h-6 w-6" />;
    case "Python":
      return <IconBrandPython className="h-6 w-6" />;
    case "Flame":
      return <IconFlame className="h-6 w-6" />;
    default:
      return <IconBrandGit className="h-6 w-6" />;
  }
}
