interface TimelineEntryProps {
  date: string;
  title: string;
  description: string;
  tags: string[];
  location?: string;
}

export function TimelineEntry({ date, title, description, tags, location }: TimelineEntryProps) {
  return (
    <div className={"grid grid-flow-row lg:grid-cols-[1fr_2fr] relative my-2 ml-5 ml-6 " + 
      "before:content-[''] before:absolute before:w-4 before:h-4 before:left-[-1.5em] before:top-[0.25em] first-of-type:before:bg-primary/50 before:bg-primary before:rounded-full before:outline-3 before:outline-primary before:-outline-offset-3 " +
      "after:content-[''] after:absolute after:w-1 after:bg-primary after:top-[1.1em] after:bottom-[-2em] after:left-[-1.125em] last-of-type:after:invisible"}>
      <p className="text-md font-bold text-foreground/75 font-spaceGrotesk">{date}</p>
      <div>
        <h2 className="text-lg font-black font-spaceGrotesk">
          {title}
          {location && <span> | {location}</span>}
        </h2>
        <p>{description}</p>
        <div className="flex flex-wrap gap-2 my-1">
          {tags.map((tag) => (
            <div key={tag} className="bg-transparent border-primary border-1 shadow-sm text-sm text-primary px-2 py-1 rounded-md">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 