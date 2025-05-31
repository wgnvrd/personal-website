import React from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  align = 'left'
}) => {
  return (
    <section className="container relative py-20 px-4 md:px-6 max-w-5xl mx-auto">
      <div className={`flex flex-col gap-6 ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
        <h1 className="relative z-10 max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl max-w-2xl opacity-90">
            {subtitle}
          </p>
        )}
      </div>
      
      {/* Optional decorative background element */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl -z-10" 
        aria-hidden="true"
      />
    </section>
  );
}; 