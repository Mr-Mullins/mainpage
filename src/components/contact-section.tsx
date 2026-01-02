import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { socialLinks } from "@/data/social"

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  twitter: Mail, // fallback
}

export function ContactSection() {
  return (
    <section id="kontakt" className="py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
          Ta kontakt
        </h2>
        <p className="mb-8 text-muted-foreground">
          Min kontaktinformasjon.
        </p>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon]
            return (
              <Button key={link.name} variant="outline" asChild>
                <a
                  href={link.url}
                  target={link.icon === "email" ? undefined : "_blank"}
                  rel={link.icon === "email" ? undefined : "noopener noreferrer"}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {link.name}
                </a>
              </Button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
