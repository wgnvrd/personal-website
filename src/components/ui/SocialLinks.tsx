import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

interface SocialLinksProps {
  className?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ className = '' }) => {
  const socialLinks = [
    {
      icon: faEnvelope,
      href: 'mailto:isabellewagenvoord@gmail.com',
      label: 'Email'
    },
    {
      label: 'CV',
      href: '/cv.pdf',
      icon: faFilePdf
    },
    {
      icon: faGithub,
      href: 'https://github.com/wgnvrd',
      label: 'GitHub'
    },
    {
      icon: faLinkedin,
      href: 'https://linkedin.com/in/iwagenvoord',
      label: 'LinkedIn'
    }
  ];

  return (
    <div className={`flex gap-6 ${className}`}>
      {socialLinks.map((link) => (
        <>
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
            aria-label={link.label}
          >
            {/* <FontAwesomeIcon icon={link.icon} className="w-6 h-6" /> */}
            {link.label}
          </a>
          {socialLinks.indexOf(link) < socialLinks.length - 1 && (
            <span className="text-foreground/40 select-none">/</span>
          )}
        </>
      ))}
    </div>
  );
}; 