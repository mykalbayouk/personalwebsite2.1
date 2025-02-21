import React from 'react';
import UnderConstruction from "@/components/underConstruction";

const SkillsPage: React.FC = () => {
    const slugs = [
        "typescript",
        "javascript",
        "dart",
        "java",
        "react",
        "flutter",
        "android",
        "html5",
        "css3",
        "nodedotjs",
        "postgresql",
        "firebase",
        "vercel",
        "testinglibrary",
        "git",
        "jira",
        "github",
        "gitlab",
        "visualstudiocode",
        "androidstudio",
        "figma",
        "flutter",
    ];

    const images = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
    );

    // return (
    //     <div className="relative flex size-full items-center justify-center overflow-hidden">
    //         <IconCloud images={images} />
    //     </div>
    // );

    return (
        <UnderConstruction />
    );

};

export default SkillsPage;