import React from 'react';
import { Container } from './Container';

interface ProjectCardProps {
  image?: {
    src: string;
    alt: string;
  };
  title: string;
  description: React.ReactNode;
  tags: string[];
  paperLink?: string; // new optional prop
}

export function ProjectCard({ image, title, description, tags, paperLink }: ProjectCardProps) {
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
          <h2 className="text-md font-black font-spaceGrotesk">{title}</h2>
          <p className="text-sm">{description}</p>
          {paperLink && (
            <a
              href={paperLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-sm text-primary underline underline-offset-4 font-semibold hover:text-primary/70 transition-colors"
            >
              View Paper
            </a>
          )}
          {/* <div className="flex flex-wrap gap-2 my-1">
            {tags.map((tag) => (
              <div key={tag} className="bg-transparent border-primary/90 border-1 shadow-sm text-sm text-primary/90 px-2 py-1 rounded-md">
                {tag}
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </Container>
  );
} 