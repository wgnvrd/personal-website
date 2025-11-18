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
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
}) => {
  return (
    <Container className="py-10 lg:py-20 px-4 lg:mx-auto md:px-8">
      <div className="relative flex flex-col justify-center align-center lg:flex-row lg:justify-around gap-2 lg:gap-8 max-w-xl m-auto">
        <ProfileIcon className="w-40 h-40 lg:w-50 lg:h-50 self-center lg:self-start" />
        <div className={`flex flex-col gap-0 items-center align-center justify-center text-center lg:items-start lg:text-left'}`}>
          <Header>{title}</Header>
          {subtitle && (
            <p className="text-lg lg:text-xl lg:text-left max-w-2xl opacity-90 font-bold">
              {subtitle}
            </p>
          )}
          {/* Resume Button */}
          {/* <Button href="/cv.pdf" className="">
            Resume
          </Button> */}
          <SocialLinks/>
        </div>
      </div>
    </Container>
  );
}; 