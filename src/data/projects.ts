export type Credit = { label: string; value: string };

export type VideoEmbed = {
  provider: "vimeo" | "youtube";
  id: string;
  label?: string;
};

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
  videos?: VideoEmbed[];
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    slug: "glastonbury",
    client: "Glastonbury Festival",
    title: "Levels Stage — LED Manager",
    type: "Festival",
    location: "Somerset, UK",
    date: "—",
    credits: [{ label: "Lighting design and operation", value: "Psion Systems" }],
    blurb:
      "Featured on MADRIX's official YouTube channel for the Levels stage build and show.",
    images: [
      "/projects/glastonbury/glastonbury1.jpg",
      "/projects/glastonbury/glastonbury2.jpg",
      "/projects/glastonbury/glastonbury3.png",
      "/projects/glastonbury/glastonbury4.png",
    ],
    videos: [
      { provider: "vimeo", id: "1174835441", label: "The Levels — show reel" },
      { provider: "youtube", id: "H7XCbg58DIc", label: "Featured on MADRIX" },
    ],
  },
  {
    slug: "modem",
    client: "MO:DEM Festival",
    title: "The Seed Stage — LED Design, Installation & Operation",
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
    slug: "above-below",
    client: "Above Below",
    title: "Lighting Design",
    type: "Club",
    location: "—",
    date: "—",
    credits: [{ label: "Lighting design and operation", value: "Psion Systems" }],
    images: ["/projects/abovebelow/abovebelow1.jpg"],
  },
  {
    slug: "fold",
    client: "FOLD",
    title: "Steam Room LED Installation",
    type: "Club",
    location: "London, UK",
    date: "—",
    credits: [{ label: "Lighting design and operation", value: "Psion Systems" }],
    images: [],
    placeholder: true,
  },
  {
    slug: "two-shell",
    client: "Two Shell",
    title: "LED Blinder / Strobe Rig",
    type: "Concert",
    location: "—",
    date: "2025",
    credits: [
      { label: "Design, fabrication and programming", value: "Psion Systems" },
      { label: "Chassis", value: "Aluminium" },
      { label: "Control", value: "16-bit DMX" },
      { label: "Rigging", value: "8-point flexible system" },
    ],
    blurb:
      "Custom LED blinder / strobe for @twoshell's 2025 world tour. Inspired by the oppressive clinicality of cold white office lighting.",
    images: ["/projects/two-shell/1.jpeg", "/projects/two-shell/2.jpeg", "/projects/two-shell/3.jpeg", "/projects/two-shell/4.jpeg"],
    videos: [{ provider: "youtube", id: "aKirHi-mLvM" }],
  },
  {
    slug: "fka-twigs",
    client: "FKA Twigs",
    title: "\"The Eleven\" @ Sotheby's — Funktion-One Sound System",
    type: "Concert",
    location: "—",
    date: "—",
    credits: [{ label: "Sound system design and operation", value: "Psion Systems" }],
    images: ["/projects/fkatwigs/fkatwigs1.jpg", "/projects/fkatwigs/fkatwigs2.jpg"],
  },
  {
    slug: "freerotation",
    client: "Freerotation",
    title: "Technical Production Manager",
    type: "Festival",
    location: "Wales, UK",
    date: "—",
    credits: [{ label: "Technical production management", value: "Psion Systems" }],
    blurb: "Supply of all DJ and backline. Design and control of all lighting and projection systems.",
    images: [],
    placeholder: true,
  },
  {
    slug: "boom-festival",
    client: "BOOM Festival",
    title: "Dance Temple, Alchemy Circle — LED System Install & Operation",
    type: "Festival",
    location: "Idanha-a-Nova, Portugal",
    date: "—",
    credits: [{ label: "Lighting design and operation", value: "Psion Systems" }],
    images: [
      "/projects/boom-festival/boom1.jpg",
      "/projects/boom-festival/boom3.jpg",
      "/projects/boom-festival/boom6.jpg",
      "/projects/boom-festival/boom7.jpg",
    ],
  },
  {
    slug: "esoteric",
    client: "Esoteric Festival",
    title: "Lighting Design and Operation",
    type: "Festival",
    location: "—",
    date: "—",
    credits: [{ label: "Lighting design and operation", value: "Psion Systems" }],
    images: ["/projects/esoteric/esoteric3.jpg"],
  },
  {
    slug: "transmissions-from-hackney",
    client: "Transmissions from Hackney",
    title: "Lighting Design and Operation",
    type: "Club",
    location: "Hackney, London",
    date: "2024",
    credits: [{ label: "Lighting design and operation", value: "Psion Systems" }],
    images: [
      "/projects/transmissions-from-hackney/tfh1.jpg",
      "/projects/transmissions-from-hackney/tfh2.jpg",
      "/projects/transmissions-from-hackney/tfh3.jpg",
      "/projects/transmissions-from-hackney/tfh4.jpg",
    ],
  },
  {
    slug: "queens-yard-summer-party",
    client: "Queens Yard Summer Party",
    title: "Lighting Design and Operation",
    type: "Private Client",
    location: "Hackney Wick, London",
    date: "—",
    credits: [{ label: "Lighting design and operation", value: "Psion Systems" }],
    images: [],
    placeholder: true,
  },
  {
    slug: "field-maneuvers",
    client: "Field Maneuvers",
    title: "VJ Residency",
    type: "Festival",
    location: "UK",
    date: "2024",
    credits: [{ label: "VJ residency and visual design", value: "Psion Systems" }],
    images: ["/projects/fieldmaneuvers/fieldmaneuvers1.jpg", "/projects/fieldmaneuvers/fieldmaneuvers2.jpg", "/projects/fieldmaneuvers/fieldmaneuvers3.jpg"],
    videos: [{ provider: "vimeo", id: "1174865437" }],
  },
  {
    slug: "neurosphere",
    client: "Neurosphere",
    title: "Art Installation — 8m Geodesic Dome",
    type: "Festival",
    location: "—",
    date: "—",
    credits: [{ label: "Lighting design and operation", value: "Psion Systems" }],
    images: ["/projects/neurosphere/neurosphere1.jpg"],
  },
  {
    slug: "sonic-rites",
    client: "Sonic Rites",
    title: "\"HexEye\" — Custom Lighting Piece",
    type: "Club",
    location: "—",
    date: "2024",
    credits: [
      { label: "Design and fabrication", value: "Psion Systems" },
      { label: "Fabrication method", value: "3D printed" },
      { label: "Light source", value: "LED" },
      { label: "Medium", value: "Visuals" },
    ],
    images: [
      "/projects/sonic-rites/sonicrites1.jpg",
      "/projects/sonic-rites/sonicrites2.jpg",
      "/projects/sonic-rites/sonicrites3.jpg",
      "/projects/sonic-rites/sonicrites4.jpg",
    ],
  },
  {
    slug: "mary-lattimore",
    client: "Mary Lattimore",
    title: "Resonance — Lighting Design and Operation",
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
    slug: "space-between",
    client: "Space Between",
    title: "Lighting Design and Operation",
    type: "Club",
    location: "—",
    date: "—",
    credits: [{ label: "Lighting design and operation", value: "Psion Systems" }],
    images: ["/projects/spacebetween/spacebetween1.jpg"],
  },
  {
    slug: "persona",
    client: "Persona",
    title: "Lighting Design and Operation",
    type: "Club",
    location: "—",
    date: "—",
    credits: [{ label: "Lighting design and operation", value: "Psion Systems" }],
    images: ["/projects/persona/persona1.jpeg", "/projects/persona/persona2.jpeg", "/projects/persona/persona3.jpeg", "/projects/persona/persona4.jpeg"],
  },
];

export const projectTypes = ["Festival", "Club", "Concert", "Private Client"] as const;

export const otherWork: Credit[] = [
  { label: "Colour Factory", value: "Lighting design and operation — Psion Systems" },
  { label: "Twisted Festival", value: "Lighting design and operation — Psion Systems" },
  { label: "Infinity Rug", value: "LED installation — Psion Systems (photos © Ali Bay / @lickmyglitch)" },
  {
    label: "Max Cooper — Royal Albert Hall",
    value:
      "Video technical services, projection specification and installation including redundancy systems — Psion Systems",
  },
  { label: "Radar Radio", value: "Broadcast studio design and install — Psion Systems" },
  { label: "Foundation FM", value: "Broadcast studio design and install — Psion Systems" },
];

export const otherImages: string[] = [
  "/projects/other/colour-factory1.jpg",
  "/projects/other/twisted-festival1.jpg",
  "/projects/other/infinity-rug1.jpg",
  "/projects/other/max-cooper1.jpg",
];
