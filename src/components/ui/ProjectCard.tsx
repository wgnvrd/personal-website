import React from 'react';
import { Container } from './Container';

interface ProjectCardProps {
  image?: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  tags: string[];
}

export function ProjectCard({ image, title, description, tags }: ProjectCardProps) {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8 px-8 py-5">
        {image && (
          <img 
            src={image.src} 
            alt={image.alt} 
            className="grow-1 min-w-60 w-1/2 lg:h-3/4 lg:w-1/3 border-4 border-foreground rounded-md" 
          />
        )}
        <div className="grow-3">
          <h2 className="text-2xl font-black font-spaceGrotesk">{title}</h2>
          <p>{description}</p>
          <div className="flex flex-wrap gap-2 my-1">
            {tags.map((tag) => (
              <div key={tag} className="bg-primary shadow-sm text-white px-2 py-1 rounded-md">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
} 