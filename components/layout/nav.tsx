'use client';
import CustomButton from '@/components/customwidgets/CustomButton';
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GrProjects } from "react-icons/gr";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


const navItems = {
  '/': {
    name: 'home',
    icon: AiFillHome,
  },
  '/about': {
    name: 'about',
    icon: CgProfile,
  },
  '/skills': {
    name: 'skills',
    icon: GrProjects,
  },
  '/work': {
    name: 'work',
    icon: MdOutlineWorkOutline,
  },
}

export function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside className='fixed top-0 left-0 right-0 z-50 transition-all duration-200'>
      <div className="max-w-4xl mx-auto px-4">
        <div className={`flex justify-between items-center h-16 ${hasScrolled ? 'bg-gray-800/70 dark:bg-gray-900/70 backdrop-blur-lg rounded-3xl my-2' : ''
          }`}>
          <nav className="flex items-center overflow-x-auto scrollbar-hide">
            <div className="flex space-x-4 min-w-max ml-4">
              {Object.entries(navItems).map(([path, { name, icon }]) => {
                return (
                  <Link
                    key={path}
                    href={path}
                    className="transition-all hover:text-purple-500 dark:hover:text-purple-500 flex align-middle relative py-1 px-2"
                  >
                    <div className="flex items-center">
                      {React.createElement(icon, {
                        className: 'w-4 h-4',
                      })}
                      <span className="ml-2">{name}</span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </nav>
          <div className="ml-4">
            <Link href="/contact">
              <CustomButton>Contact</CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  )
}