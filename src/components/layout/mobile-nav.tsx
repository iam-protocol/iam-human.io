"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const mobileItems = [
  { label: "Technology", href: "/technology" },
  { label: "Solutions", href: "/solutions" },
  { label: "Integrate", href: "/integrate" },
  { label: "Paper", href: "/paper" },
  { label: "Verify", href: "/verify" },
  { label: "Dashboard", href: "/dashboard" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="text-muted transition-colors hover:text-foreground"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div className="absolute left-0 top-16 w-full border-b border-border bg-background/95 backdrop-blur-md">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {mobileItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
