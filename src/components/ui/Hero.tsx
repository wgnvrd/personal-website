import React from 'react';
import ProfileIcon from './ProfileIcon';
import { SocialLinks } from './SocialLinks';
import { Header } from './Header';
import { Container } from './Container';
import { Button } from './Button';

interface HeroProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  description?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
}) => {
  return (
    // <Container className="py-5 lg:py-10 px-4 lg:mx-auto md:px-8">
    <div>
      <div className="relative flex flex-col lg:flex-row items-center justify-center lg:items-center lg:justify-around gap-4 lg:gap-8 max-w-3xl mx-8 lg:m-auto">
        <ProfileIcon className="w-40 h-40 lg:w-50 lg:h-50 self-center" />
        <div className="flex flex-col gap-0 items-center justify-center text-center lg:items-start lg:text-left">
          <Header>{title}</Header>
          
          {subtitle && (
            <p className="text-sm lg:text-sm text-left max-w-2xl opacity-90 font-bold">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-sm lg:text-sm text-left max-w-2xl opacity-90">
              {description}
            </p>
          )} 
          {/* Resume Button */}
          {/* <Button href="/cv.pdf" className="">
            Resume
          </Button> */}
          <SocialLinks/>
        </div>
      </div>
    {/* </Container> */}
    </div> 
  );
}; 