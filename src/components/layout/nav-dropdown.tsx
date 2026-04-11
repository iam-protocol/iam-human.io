"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";

interface DropdownItem {
  label: string;
  href: string;
}

export function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: DropdownItem[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleEnter = useCallback(() => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setOpen(true);
  }, []);

  const handleLeave = useCallback(() => {
    leaveTimer.current = setTimeout(() => setOpen(false), 150);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <a
        role="button"
        tabIndex={0}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpen((prev) => !prev); }
          if (e.key === "Escape") setOpen(false);
        }}
        className="text-sm text-foreground/70 transition-colors duration-200 hover:text-foreground py-2 cursor-pointer"
      >
        {label} <span aria-hidden="true" className="text-[8px] text-foreground/40 ml-0.5 relative -top-px">▼</span>
      </a>

      {open && (
        <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
          <div className="min-w-[160px] rounded-lg border border-border bg-background py-1.5 shadow-lg">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 text-sm text-foreground/60 transition-colors duration-150 hover:text-foreground hover:bg-foreground/5"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
