export type Credit = { label: string; value: string };

export type Project = {
  slug: string;
  client: string;
  title: string;
  type: "Festival" | "Club" | "Concert" | "Private Client";
  location: string;
  date: string;
  link?: string;
  designer?: string;
  credits: Credit[];
  blurb?: string;
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "modem",
    client: "MODEM FESTIVAL",
    title: "The Seed Stage",
    type: "Festival",
    location: "Croatia",
    date: "2024 — 2025",
    link: "https://www.instagram.com/modemfestival/",
    designer: "David Haasnoot",
    credits: [
      { label: "LED installation", value: "Decorination" },
      { label: "LED programming and operation", value: "Psion Systems" },
    ],
    images: ["/projects/modem/modem1.jpg", "/projects/modem/modem2.jpg", "/projects/modem/modem3.jpg", "/projects/modem/modem4.jpg"],
  },
  {
    slug: "esoteric",
    client: "ESOTERIC FESTIVAL",
    title: "Esoteric Festival",
    type: "Festival",
    location: "—",
    date: "—",
    credits: [{ label: "Lighting design and operation", value: "Psion Systems" }],
    images: ["/projects/esoteric/esoteric3.jpg"],
  },
  {
    slug: "glastonbury",
    client: "GLASTONBURY",
    title: "Glastonbury",
    type: "Festival",
    location: "Somerset, UK",
    date: "—",
    credits: [{ label: "Lighting design and operation", value: "Psion Systems" }],
    images: ["/projects/glastonbury/glastonbury1.jpg"],
  },
  {
    slug: "field-maneuvers",
    client: "FIELD MANEUVERS",
    title: "Field Maneuvers",
    type: "Festival",
    location: "UK",
    date: "2024",
    credits: [{ label: "Lighting design and operation", value: "Psion Systems" }],
    images: ["/projects/fieldmaneuvers/fieldmaneuvers1.jpg", "/projects/fieldmaneuvers/fieldmaneuvers2.jpg", "/projects/fieldmaneuvers/fieldmaneuvers3.jpg"],
  },
  {
    slug: "mary-lattimore",
    client: "MARY LATTIMORE",
    title: "Resonance",
    type: "Concert",
    location: "—",
    date: "—",
    credits: [{ label: "Lighting design and operation", value: "Psion Systems" }],
    images: [
      "/projects/marylattimore/marylattimore1.jpeg",
      "/projects/marylattimore/marylattimore2.jpg",
      "/projects/marylattimore/marylattimore3.jpeg",
      "/projects/marylattimore/marylattimore4.jpg",
      "/projects/marylattimore/marylattimore5.jpg",
      "/projects/marylattimore/marylattimore6.jpeg",
    ],
  },
  {
    slug: "above-below",
    client: "ABOVE BELOW",
    title: "Above Below",
    type: "Club",
    location: "—",
    date: "—",
    credits: [{ label: "Lighting design and operation", value: "Psion Systems" }],
    images: ["/projects/abovebelow/abovebelow1.jpg"],
  },
  {
    slug: "space-between",
    client: "SPACE BETWEEN",
    title: "Space Between",
    type: "Club",
    location: "—",
    date: "—",
    credits: [{ label: "Lighting design and operation", value: "Psion Systems" }],
    images: ["/projects/spacebetween/spacebetween1.jpg"],
  },
  {
    slug: "persona",
    client: "PERSONA",
    title: "Persona",
    type: "Club",
    location: "—",
    date: "—",
    credits: [{ label: "Lighting design and operation", value: "Psion Systems" }],
    images: ["/projects/persona/persona1.jpeg", "/projects/persona/persona2.jpeg", "/projects/persona/persona3.jpeg", "/projects/persona/persona4.jpeg"],
  },
  {
    slug: "fka-twigs",
    client: "FKA TWIGS",
    title: "FKA Twigs",
    type: "Concert",
    location: "—",
    date: "—",
    credits: [{ label: "Lighting design and operation", value: "Psion Systems" }],
    images: ["/projects/fkatwigs/fkatwigs1.jpg", "/projects/fkatwigs/fkatwigs2.jpg"],
  },
];

export const projectTypes = ["Festival", "Club", "Concert", "Private Client"] as const;
