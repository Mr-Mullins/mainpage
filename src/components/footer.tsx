export function Footer() {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="container mx-auto max-w-4xl px-4 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Tomas Jonsson. Alle rettigheter reservert.</p>
      </div>
    </footer>
  )
}
