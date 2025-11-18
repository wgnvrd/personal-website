import React from 'react';
import Image from 'next/image';
// import profileIcon from '@/components/ui/assets/profile-no-bg-shadow.svg';

interface ProfileIconProps {
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  className?: string;
}

export default function ProfileIcon({
  fillColor = "var(--primary)",
  strokeColor = "var(--foreground)",
  strokeWidth = 3,
  className = "",
}: ProfileIconProps) {
  return (
    <div className={`relative ${className}`}>
      {/* <svg 
        viewBox="0 0 112 114" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 w-full h-full"
      >
        <path 
          d="M57.108 30.0113C66.9807 19.1986 80.1822 18.9348 91.0777 25.1402C102.029 31.3774 110.499 44.1046 110.5 58.9996C110.5 89.0991 86.0991 113.5 55.9996 113.5C40.8878 113.499 26.6036 107.347 18.816 98.6978C14.9369 94.3893 12.7307 89.5368 12.7057 84.5621C12.6816 79.7644 14.6843 74.6364 19.5777 69.5523L20.0611 69.0611C35.0793 54.0429 36.5937 52.5272 45.274 43.0025L57.108 30.0113Z" 
          fill={fillColor} 
          stroke={strokeColor} 
          strokeWidth={strokeWidth}
        />
      </svg> */}
      <div className="w-full h-full aspect-square relative">
        <Image
          src="/hike-pikes-sq.jpg"
          alt="Portrait of Izzy Wagenvoord"
          fill
          className="absolute top-0 left-0 w-full h-full object-cover"
          priority
        />
      </div>
      {/* <svg
        viewBox="0 0 112 114" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 w-full h-full"
        >
        <path 
          d="M57.108 30.0113C66.9807 19.1986 80.1822 18.9348 91.0777 25.1402C102.029 31.3774 110.499 44.1046 110.5 58.9996C110.5 89.0991 86.0991 113.5 55.9996 113.5C40.8878 113.499 26.6036 107.347 18.816 98.6978C14.9369 94.3893 12.7307 89.5368 12.7057 84.5621C12.6816 79.7644 14.6843 74.6364 19.5777 69.5523L20.0611 69.0611C35.0793 54.0429 36.5937 52.5272 45.274 43.0025L57.108 30.0113Z" 
          fill="none"
          stroke={strokeColor} 
          strokeWidth={strokeWidth}
        />
      </svg> */}
    </div>
  );
} 