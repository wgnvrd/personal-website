import { Button } from "./Button";

export function Footer() {
  return (
    <footer className="w-[90%] mx-auto lg:mx-0 lg:w-full py-6 mt-8 border-t border-foreground/30">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-foreground/80">
          Made with Figma, Tailwind, and React by Isabelle (Izzy) Wagenvoord 🤠
        </div>
        <div className="flex gap-4 text-sm text-foreground/80">
          <a href="https://github.com/iwagenvoord" className="hover:text-primary transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/iwagenvoord/" className="hover:text-primary transition-colors">
            LinkedIn
          </a>
          <a href="mailto:isabellewagenvoord@gmail.com" className="hover:text-primary transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
} 