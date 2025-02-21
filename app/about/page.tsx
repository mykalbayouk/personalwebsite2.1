import React from 'react';
import { TypingAnimation } from '@/components/magicui/typing-animation';


const AboutPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center">
        <div className="flex items-center p-3">
               <TypingAnimation className="text-7xl font-bold mb-5" >
                 Michael J. Bayouk 
               </TypingAnimation>
        </div>
        <div className="flex items-center p-5 space-x-8 flex-col md:flex-row">
            <img
            src="/resources/images/me.jpg"
            alt="Michael Bayouk"
            className="rounded-xl w-96 h-96 shadow-lg m-8"
            />
            <div className="max-w-xl space-y-4 text-center">
            <p className="text-lg leading-relaxed text-white-700">
            I'm Michael J. Bayouk, a passionate software developer with a love for both front-end and back-end development.
            I enjoy creating software that is both functional and enjoyable to use, and I'm always eager to learn new technologies to refine my skills.
            I have a strong background in JavaScript, TypeScript, and React, and I'm proficient in building scalable web applications.
            </p>
            <p className="text-lg leading-relaxed text-white-700">
            In my free time, I enjoy playing basketball and watching anime—recently,
            I've been enjoying Solo Leveling and Sakamato Days.
            I also play video games, with Marvel Rivals being a current favorite.
            Beyond that, I love reading, particularly the works of Osamu Dazai.
            Spending time with family and friends is important to me, whether it's watching a movie or grabbing sushi together.
            </p>
            </div>
        </div>
        </div>

    );
};

export default AboutPage;