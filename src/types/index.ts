export interface Project {
  id: string
  title: string
  description: string
  imageUrl?: string
  placeholderColor?: string
  placeholderIcon?: "plane" | "dumbbell"
  url?: string
}

export interface SocialLink {
  name: string
  url: string
  icon: "github" | "linkedin" | "twitter" | "email"
}
