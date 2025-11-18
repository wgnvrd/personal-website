'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const MODES = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'system', label: 'System' },
];

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const activeTheme = theme === 'system' ? systemTheme ?? 'system' : theme;

  return (
    <label
      className={`inline-flex items-center gap-2 rounded-lg border border-foreground bg-background/60 px-3 py-1 text-sm shadow-sm backdrop-blur-sm ${className}`}
      aria-label="Select color theme"
    >
        Theme:
      <select
        className="bg-transparent text-foreground/90 focus:outline-none cursor-pointer appearance-none pr-4"
        value={theme}
        onChange={(event) => setTheme(event.target.value)}
      >
        {MODES.map((mode) => (
          <option key={mode.value} value={mode.value}>
            {mode.label}
          </option>
        ))}
      </select>
      
    </label>
  );
}

