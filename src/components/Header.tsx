"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function Header() {
  const { theme, toggle } = useTheme();
  const pathname = usePathname();
  const [name, setName] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("participant_name");
    if (saved) setName(saved);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-accent text-[11px] font-black text-white tracking-tight">AI</span>
          <span className="text-sm font-bold tracking-tight text-text-primary">for Sales</span>
          <span className="hidden sm:inline text-xs text-text-muted font-medium">& Marketing</span>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-5">
          <Link
            href="/activities"
            className={`text-sm font-medium transition-colors ${pathname.startsWith("/activities") ? "text-accent" : "text-text-secondary hover:text-text-primary"}`}
          >
            Activities
          </Link>
          {name && (
            <span className="hidden sm:block text-xs font-medium text-text-muted border-l border-border pl-4">{name}</span>
          )}
          <button
            onClick={toggle}
            className="rounded-lg p-2 text-text-muted hover:bg-surface-alt hover:text-text-primary transition-colors"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
