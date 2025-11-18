import React from 'react';
interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
    return (
        <div className={"relative mx-auto w-[90%] bg-background/90 relative lg:w-4xl border-1 border-foreground rounded-xl mb-3 z-auto " +
      " before:content-[''] before:absolute before:top-1 before:left-1 before:-right-2 before:-bottom-2 before:bg-background/50 before:border-1 before:border-box before:border-foreground before:rounded-xl before:-z-1 " +
      className}>
            {children}
        </div>
    );
};