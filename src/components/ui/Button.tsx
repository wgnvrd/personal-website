import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function Button({ children, href, className = '', onClick }: ButtonProps) {
  const baseStyles = "inline-block text-center my-2 bg-background border-primary border-2 w-40 py-2 rounded-md text-primary hover:shadow-[0.25em_0.25em_0_0_var(--primary)] hover:translate-x-[-0.25em] hover:translate-y-[-0.25em] transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]";

  const content = (
    <p className="text-md font-bold font-spaceGrotesk">{children}</p>
  );

  if (href) {
    return (
      <a 
        href={href}
        className={`${baseStyles} ${className}`}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${className}`}
    >
      {content}
    </button>
  );
} 