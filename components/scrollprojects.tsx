'use client';
import React, { useState, useEffect } from 'react';
import { ProjectsData } from '@/lib/ProjectsData';

const ScrollProjects: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % ProjectsData.projects.length);
                setFade(false);
            }, 500);
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index: number) => {
        setFade(true);
        setTimeout(() => {
            setCurrentIndex(index);
            setFade(false);
        }, 500);
    };

    return (
        <div className="flex flex-col items-center">
            <div className={`w-full overflow-hidden rounded-lg shadow-lg relative ${fade ? 'opacity-0 transition-opacity duration-500' : 'opacity-100 transition-opacity duration-500'}`}>
                <img src={ProjectsData.projects[currentIndex].image} alt={`Project ${currentIndex + 1}`} className="w-full h-full object-cover" />
            </div>
            <div className="flex mt-4 w-full justify-center">
                {ProjectsData.projects.map((project, index) => (
                    <div
                        key={project.id}
                        onClick={() => handleDotClick(index)}
                        className={`flex-1 h-1 mx-1 rounded cursor-pointer ${index === currentIndex ? 'bg-purple-800' : 'bg-gray-800'}`}
                    />
                ))}
            </div>
            {/* TODO: When they click view project link it goes to that project description on website */}
            <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold">{ProjectsData.projects[currentIndex].title}</h3>
                <a href={ProjectsData.projects[currentIndex].githubUrl} target="_blank" rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800">
                    View Project
                </a>
            </div>
        </div>
    );
}

export default ScrollProjects;