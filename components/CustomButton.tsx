'use client';
import React from 'react';

interface CustomButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    children,
    onClick,
    className = ''
}) => {
    return (
        <button
            onClick={onClick}
            className={`
                cursor-pointer
                relative
                mr-4
                px-5
                py-1.5
                text-purple-500
                bg-transparent
                border-2
                border-purple-600
                overflow-hidden
                transition-all
                duration-300
                ease-in-out
                hover:text-white
                group
                ${className}
            `}
        >
            <span className="relative z-10">
                {children}
            </span>
            <div className="
                absolute
                inset-0
                bg-purple-600
                transform
                -translate-x-full
                group-hover:translate-x-0
                transition-transform
                duration-300
                ease
            "/>
        </button>
    );
};

export default CustomButton;