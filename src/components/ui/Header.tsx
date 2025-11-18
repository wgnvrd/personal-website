import React from 'react';

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

export const Header: React.FC<HeaderProps> = ({ children, className = '' }) => {
    return (
        <h1 className={`inline-block mx-auto lg:mx-0 relative text-lg lg:text-xl font-jetBrainsMono font-black m-0 z-1 max-w-3xl before:content-[''] before:absolute before:bottom-1 before:left-1 before:w-full before:h-3/4 before:bg-primary/50 before:-z-1 ${className}`}>
            {children}
        </h1>
    );
};