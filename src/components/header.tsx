"use client"

import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-4xl items-center justify-between px-4">
        <Link href="/" className="font-semibold">
          tomasjons.com
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            href="#prosjekter"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Prosjekter
          </Link>
          <Link
            href="#kontakt"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Kontakt
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
