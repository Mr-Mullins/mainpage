import { ProjectCard } from "./project-card"
import { projects } from "@/data/projects"

export function ProjectGrid() {
  return (
    <section id="prosjekter" className="py-4">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">
          Prosjekter
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
