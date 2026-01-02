import Image from "next/image"
import { Plane, Dumbbell } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Project } from "@/types"

interface ProjectCardProps {
  project: Project
}

const iconMap = {
  plane: Plane,
  dumbbell: Dumbbell,
}

export function ProjectCard({ project }: ProjectCardProps) {
  const CardWrapper = project.url ? "a" : "div"
  const cardProps = project.url
    ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
    : {}

  const Icon = project.placeholderIcon ? iconMap[project.placeholderIcon] : null

  return (
    <CardWrapper {...cardProps} className="block">
      <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg">
        {project.imageUrl ? (
          <div className="relative aspect-video w-full overflow-hidden bg-muted">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        ) : project.placeholderColor && Icon ? (
          <div className={`flex aspect-video w-full items-center justify-center ${project.placeholderColor}`}>
            <Icon className="h-16 w-16 text-white/90" />
          </div>
        ) : null}
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
      </Card>
    </CardWrapper>
  )
}
