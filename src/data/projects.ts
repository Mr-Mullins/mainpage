import { Project } from "@/types"

export const projects: Project[] = [
  {
    id: "1",
    title: "My RC Planes",
    description: "App for å registrere og holde oversikt over alle modellflyene dine. Legg inn informasjon som vingespenn og spesifikasjoner, og la appen automatisk beregne NP og CG. Inkluderer også kart over godkjente flyområder.",
    placeholderColor: "bg-sky-500",
    placeholderIcon: "plane",
    url: "https://myrcplanes.tomasjons.com",
  },
  {
    id: "2",
    title: "Workout",
    description: "Planlegg treningsøkter og logg alle gjennomførte økter. Sett opp egne treningsgrupperinger og øvelser med repetisjoner, set og vekter. Følg med på progresjonen din over tid.",
    placeholderColor: "bg-emerald-500",
    placeholderIcon: "dumbbell",
    url: "https://workout.tomasjons.com",
  },
  {
    id: "3",
    title: "SpaceKit",
    description: "Enkelt rom- og volumprogram for programmering av ulike volum i konstruksjonsprosjekter.",
    placeholderColor: "bg-violet-500",
    placeholderIcon: "box",
    comingSoon: true,
  },
]
