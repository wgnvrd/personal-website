import { Button } from "./Button";

export function Footer() {
  return (
    <footer className="w-[90%] mx-auto lg:mx-0 lg:w-full py-6 mt-8 border-t border-foreground/30">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-foreground/80">
          Made with Figma, Tailwind, and React by Izzdog
        </div>
        <div className="flex gap-4 text-sm text-foreground/80">
          <a href="/cv.pdf" target="_blank" className="hover:text-primary transition-colors">
            CV
          </a>
          <a href="https://github.com/iwagenvoord" target="_blank" className="hover:text-primary transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/iwagenvoord/" target="_blank" className="hover:text-primary transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
} 