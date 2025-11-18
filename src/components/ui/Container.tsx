import React from 'react';
interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
    return (
        <div className={"relative mx-auto w-[90%] bg-background/90 relative lg:w-4xl border-5 border-foreground rounded-xl mb-6 z-auto " +
      " before:content-[''] before:absolute before:top-2 before:left-2 before:-right-4 before:-bottom-4 before:bg-background/50 before:border-5 before:border-box before:border-foreground before:rounded-xl before:-z-1 " +
      className}>
            {children}
        </div>
    );
};