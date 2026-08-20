import { Project, Credit } from "./schema";

// ============================================================================
// HOW TO EDIT THIS FILE
// ============================================================================
// Each project is one { ... } block below. To edit a project, just change the
// text between the quotes " " — don't touch anything outside the quotes
// (commas, brackets, colons) or the site will stop building.
//
// FIELDS:
//   slug      — the web address, e.g. "modem" becomes psion.systems/modem.
//               Don't change this for an existing project (it'll break links).
//   client    — the big heading shown on the page (usually the client name).
//   sections  — the list of "what we did" for this client. Most projects have
//               just one. A few (like MO:DEM) have several — one per stage/year.
//                 name        — short title, e.g. "The Hive"
//                 description — one-line summary of the work (optional)
//                 blurb       — a longer paragraph about this bit (optional)
//                 videos      — videos specific to this section (optional)
//   type      — must be exactly one of: "Festival", "Club", "Concert", "Private Client"
//   location  — city/venue, or "—" if unknown
//   date      — year(s), or "—" if unknown
//   link      — the client's website/Instagram (optional, delete the line to omit)
//   designer  — external designer credit (optional, delete the line to omit)
//   credits   — who did what, e.g. { label: "LED installation", value: "Decorination" }
//   press     — press coverage links, e.g. { outlet: "Resident Advisor", url: "https://..." }
//   blurb     — a paragraph about the whole project (optional)
//   images    — photo file paths — ask Tekh before adding new photo files
//   videos    — just paste the full YouTube or Vimeo URL, it figures out the rest.
//               Add start: "1:26" to a video to make it start partway through.
//   localClips — short video clips that play silently on a loop (file paths)
//   placeholder — set to true if there are no photos yet ("Photos coming soon")
//
// TO ADD A NEW PROJECT: copy an entire { ... } block below, paste it in the
// list, and change the text. Ask Tekh to add any new photo/video files first.
// ============================================================================

export const projects: Project[] = [
  // ─── Glastonbury Festival ──────────────────────────────────────────────
  {
    slug: "glastonbury",
    client: "Glastonbury Festival",
    sections: [{ name: "Levels Stage", description: "MADRIX programming, LED install and config" }],
    type: "Festival",
    location: "Silver Hayes, Glastonbury Festival, UK",
    date: "—",
    credits: [
      { label: "Lighting design", value: "Refrakt Labs (James Newmarch)" },
      { label: "MADRIX programming", value: "Psion Systems" },
      { label: "LED install and config", value: "Psion Systems" },
      { label: "LED operation", value: "Celestial Artillery & Ronan Somerville" },
    ],
    blurb: "Featured on MADRIX's official YouTube channel for the Levels stage build and show.",
    images: [
      "/projects/glastonbury/glastonbury1.jpg",
      "/projects/glastonbury/glastonbury2.jpg",
      "/projects/glastonbury/glastonbury3.png",
      "/projects/glastonbury/glastonbury4.png",
    ],
    videos: [
      { url: "https://vimeo.com/1174835441", label: "The Levels — show reel" },
      { url: "https://www.youtube.com/watch?v=H7XCbg58DIc", label: "Featured on MADRIX" },
    ],
    localClips: ["/projects/glastonbury/glastonbury-clip1.mp4"],
  },

  // ─── MO:DEM Festival ───────────────────────────────────────────────────
  {
    slug: "modem",
    client: "MO:DEM Festival",
    sections: [
      {
        name: "The Hive",
        description: "LED configuration and operation",
        blurb:
          "When it comes to The Hive, we could spend days describing its mind-blowing design, the world-famous artists, musicians, and DJs who graced its stage, or the sheer amount of materials used in its construction – screws, plywood, paint, glue, miles of LED strips and cables, and countless hours of dedicated work poured into its creation.",
        videos: [
          { url: "https://www.youtube.com/watch?v=YSYAL49Ohyo" },
          { url: "https://www.youtube.com/watch?v=H2HJMRCgoY0" },
          { url: "https://www.youtube.com/watch?v=DySRlW9LcyI" },
        ],
      },
      {
        name: "The Seed",
        description: "LED configuration and operation",
        videos: [{ url: "https://www.youtube.com/watch?v=r-LtvKzYd0E", start: "1:26" }],
      },
      {
        name: "The Seed (2026)",
        description: "Complete redesign, LED install, stage fabrication, operation and control",
      },
      { name: "The Hive (2027)", description: "Coming soon..." },
    ],
    type: "Festival",
    location: "Croatia",
    date: "2024 — 2027",
    link: "https://www.instagram.com/modemfestival/",
    designer: "David Haasnoot",
    credits: [
      { label: "LED installation", value: "Decorination" },
      { label: "LED programming and operation", value: "Psion Systems" },
    ],
    images: ["/projects/modem/modem1.jpg", "/projects/modem/modem2.jpg", "/projects/modem/modem3.jpg", "/projects/modem/modem4.jpg"],
  },

  // ─── Above Below ───────────────────────────────────────────────────────
  {
    slug: "above-below",
    client: "Above Below",
    sections: [
      { name: "The Beacon", description: "Lighting design and operation" },
      { name: "The Coombe", description: "4-point Funktion-One sound system" },
    ],
    type: "Club",
    location: "—",
    date: "—",
    credits: [],
    images: ["/projects/abovebelow/abovebelow1.jpg"],
  },

  // ─── FOLD ──────────────────────────────────────────────────────────────
  {
    slug: "fold",
    client: "FOLD",
    sections: [{ name: "Steam Room", description: "LED installation" }],
    type: "Club",
    location: "London, UK",
    date: "—",
    credits: [{ label: "Lighting design and operation", value: "Psion Systems" }],
    images: [],
    placeholder: true,
  },

  // ─── Two Shell ─────────────────────────────────────────────────────────
  {
    slug: "two-shell",
    client: "Two Shell",
    sections: [{ name: "LED Blinder / Strobe Rig" }],
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
    videos: [{ url: "https://www.youtube.com/watch?v=aKirHi-mLvM" }],
    localClips: ["/projects/two-shell/3shell-ig.mp4"],
  },

  // ─── FKA Twigs ─────────────────────────────────────────────────────────
  {
    slug: "fka-twigs",
    client: "FKA Twigs",
    sections: [{ name: "\"The Eleven\" @ Sotheby's", description: "Funktion-One sound system" }],
    type: "Concert",
    location: "London, UK",
    date: "—",
    credits: [{ label: "Sound system design and operation", value: "Psion Systems" }],
    blurb:
      "The Eleven is a durational artwork, conceived by artist FKA twigs and performed by a rotating group of eleven 'movers.' The piece, developed by twigs over many months, is a physical and artistic quest for self-healing, rooted – in part – in her decades spent in movement practice, somatic healing technique and by implementing conscious action on repeat. twigs herself participated alongside a changing cast of special guests, embodying the method and recording in real time the changes they felt in mind and body. Psion Systems deployed and tuned a timeless Funktion-One sound system with a contemporary low-end flair to soundtrack the two-week performance at Sotheby's, London.",
    images: ["/projects/fkatwigs/fkatwigs1.jpg", "/projects/fkatwigs/fkatwigs2.jpg"],
    videos: [{ url: "https://www.youtube.com/watch?v=pewBhu6MXsg" }],
  },

  // ─── Freerotation ──────────────────────────────────────────────────────
  {
    slug: "freerotation",
    client: "Freerotation",
    sections: [{ name: "Technical Production Manager" }],
    type: "Festival",
    location: "Wales, UK",
    date: "—",
    credits: [{ label: "Technical production management", value: "Psion Systems" }],
    blurb: "Supply of all DJ and backline. Design and control of all lighting and projection systems.",
    images: [],
    placeholder: true,
  },

  // ─── BOOM Festival ─────────────────────────────────────────────────────
  {
    slug: "boom-festival",
    client: "BOOM Festival",
    sections: [{ name: "Dance Temple, Alchemy Circle", description: "LED system install and operation" }],
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

  // ─── Esoteric Festival ─────────────────────────────────────────────────
  {
    slug: "esoteric",
    client: "Esoteric Festival",
    sections: [{ name: "Lighting Design and Operation" }],
    type: "Festival",
    location: "—",
    date: "—",
    credits: [{ label: "Lighting design and operation", value: "Psion Systems" }],
    images: ["/projects/esoteric/esoteric3.jpg", "/projects/esoteric/esoteric4.jpg"],
    localClips: ["/projects/esoteric/esoteric1.mp4", "/projects/esoteric/esoteric2.mp4"],
  },

  // ─── Transmissions from Hackney ────────────────────────────────────────
  {
    slug: "transmissions-from-hackney",
    client: "Transmissions from Hackney",
    sections: [{ name: "Lighting Design and Operation" }],
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

  // ─── Queens Yard Summer Party ──────────────────────────────────────────
  {
    slug: "queens-yard-summer-party",
    client: "Queens Yard Summer Party",
    sections: [{ name: "Lighting Design and Operation" }],
    type: "Private Client",
    location: "Hackney Wick, London",
    date: "—",
    credits: [{ label: "Lighting design and operation", value: "Psion Systems" }],
    images: [],
    placeholder: true,
  },

  // ─── Field Maneuvers ───────────────────────────────────────────────────
  {
    slug: "field-maneuvers",
    client: "Field Maneuvers",
    sections: [{ name: "VJ Residency" }],
    type: "Festival",
    location: "UK",
    date: "2019 — present",
    credits: [{ label: "VJ residency and visual design", value: "Psion Systems" }],
    blurb:
      "Psion Systems has a long-standing visuals residency with Field Maneuvers, providing a set of live visuals every year on the main stage since 2019.",
    images: ["/projects/fieldmaneuvers/fieldmaneuvers1.jpg", "/projects/fieldmaneuvers/fieldmaneuvers2.jpg", "/projects/fieldmaneuvers/fieldmaneuvers3.jpg"],
    videos: [{ url: "https://vimeo.com/1174865437" }],
    localClips: ["/projects/fieldmaneuvers/fieldmaneuvers-clip1.mp4", "/projects/fieldmaneuvers/fieldmaneuvers-clip2.mp4"],
  },

  // ─── Neurosphere ───────────────────────────────────────────────────────
  {
    slug: "neurosphere",
    client: "Neurosphere",
    sections: [{ name: "Art Installation", description: "8m geodesic dome" }],
    type: "Festival",
    location: "—",
    date: "—",
    credits: [{ label: "Design, installation and programming", value: "Psion Systems" }],
    blurb:
      "Neurosphere is an art installation seeking to draw parallels between mycelium networks, the internet, and the human brain — housed in a custom-built 8m geodesic dome structure.",
    images: [
      "/projects/neurosphere/neurosphere1.jpg",
      "/projects/neurosphere/neurosphere2.jpg",
      "/projects/neurosphere/neurosphere3.jpg",
    ],
    localClips: ["/projects/neurosphere/neurosphere-clip1.mp4", "/projects/neurosphere/neurosphere-clip2.mp4"],
  },

  // ─── Sonic Rites ───────────────────────────────────────────────────────
  {
    slug: "sonic-rites",
    client: "Sonic Rites",
    sections: [{ name: "\"HexEye\"", description: "Custom lighting piece" }],
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

  // ─── Mary Lattimore ────────────────────────────────────────────────────
  {
    slug: "mary-lattimore",
    client: "Mary Lattimore",
    sections: [{ name: "Resonance", description: "Multi-projector visual mapping and sound reinforcement" }],
    type: "Concert",
    location: "Todmorden Unitarian Church, UK",
    date: "—",
    credits: [
      { label: "Multi-projector visual mapping", value: "Psion Systems" },
      { label: "Mixing and sound reinforcement", value: "Psion Systems" },
    ],
    blurb:
      "Mary Lattimore and Walt McClements are two of contemporary music's most renowned innovators. Each has managed to expand the perception of their instrument's capabilities. Mary's inventive harp processing and looping have brought the instrument to a new audience, and her prolific run of celestial solo albums and evocative film scores have redefined harp playing in the modern consciousness. Psion Systems worked with the Resonance team to develop a special multi-projector install of Todmorden Unitarian Church, carefully mapping selected features of the church to display intricate visuals developed specially for the event. Mixing and sound reinforcement services were also provided to ensure the delicate fidelity of Mary's harp playing was heard in the unique acoustics of the sacred building.",
    images: [
      "/projects/marylattimore/marylattimore1.jpeg",
      "/projects/marylattimore/marylattimore2.jpg",
      "/projects/marylattimore/marylattimore3.jpeg",
      "/projects/marylattimore/marylattimore4.jpg",
      "/projects/marylattimore/marylattimore5.jpg",
      "/projects/marylattimore/marylattimore6.jpeg",
    ],
  },

  // ─── Space Between ─────────────────────────────────────────────────────
  {
    slug: "space-between",
    client: "Space Between",
    sections: [{ name: "Lighting Design" }],
    type: "Club",
    location: "—",
    date: "2024",
    credits: [
      { label: "Lighting design", value: "Psion Systems" },
      { label: "Set design", value: "Anastasia McGarel [Bazaar] & Liam Oades [Duke Makes]" },
    ],
    press: [
      { outlet: "Resident Advisor", url: "https://ra.co/events/1886881" },
      { outlet: "Imaginarium", url: "https://imaginarium.space/2024/04/11/interview-feature-chris-ianson-space-between/" },
    ],
    blurb:
      "Deep in the forest certain trees of wisdom can be found - join the circle and take root. Space Between is a different kind of audio/visual experience from the mind behind On Rotation. We'll be transforming the event space with a focus on the dancefloor experience and away from the DJ.",
    images: [
      "/projects/spacebetween/spacebetween1.jpg",
      "/projects/spacebetween/spacebetween2.jpg",
      "/projects/spacebetween/spacebetween3.jpg",
      "/projects/spacebetween/spacebetween4.jpg",
      "/projects/spacebetween/spacebetween5.jpg",
    ],
    localClips: [
      "/projects/spacebetween/spacebetween-clip1.mp4",
      "/projects/spacebetween/spacebetween-clip2.mp4",
      "/projects/spacebetween/spacebetween-clip3.mp4",
    ],
  },

  // ─── Persona ───────────────────────────────────────────────────────────
  {
    slug: "persona",
    client: "Persona",
    sections: [{ name: "Lighting Design and Operation" }],
    type: "Club",
    location: "—",
    date: "—",
    credits: [{ label: "Lighting design and operation", value: "Psion Systems" }],
    images: ["/projects/persona/persona1.jpeg", "/projects/persona/persona2.jpeg", "/projects/persona/persona3.jpeg", "/projects/persona/persona4.jpeg"],
  },

  // ─── Infinity Rug ──────────────────────────────────────────────────────
  {
    slug: "infinity-rug",
    client: "Infinity Rug",
    sections: [{ name: "\"Dendrite\"", description: "Custom LED installation based on root systems" }],
    type: "Concert",
    location: "Berlin, Germany",
    date: "—",
    credits: [{ label: "Lighting design and programming", value: "Psion Systems" }],
    blurb:
      "Infinity Rug is a sonic-seance, a deep listening event presenting a soundscape of field recordings, ambient, experimental and deep-mind music, interwoven with ceremonial performances, texts and poetry, scents, textiles and food offerings. Psion Systems designed and programmed a rich and engaging lighting design for the Berlin edition, featuring \"Dendrite\" — a custom LED installation based on the root systems found beneath our feet.",
    images: ["/projects/infinity-rug/infinity-rug1.jpg", "/projects/infinity-rug/infinity-rug2.jpg"],
    localClips: ["/projects/infinity-rug/infinity-rug-clip.mp4"],
    videos: [{ url: "https://www.youtube.com/watch?v=WBXgk5-1yxM" }],
  },

  // ─── Twisted Festival ──────────────────────────────────────────────────
  {
    slug: "twisted-festival",
    client: "Twisted Festival",
    sections: [{ name: "Immersive Lighting", description: "Woodland stage rigged off the trees" }],
    type: "Festival",
    location: "UK",
    date: "—",
    credits: [
      { label: "Design and deployment", value: "Psion Systems" },
      { label: "Operator", value: "Auratekh & ___ordep" },
      { label: "Control", value: "MADRIX & Avolites" },
      { label: "Fixtures", value: "GLX Productions, JEM Professional, Chauvet Pro, Prolight Group, Look Solutions" },
    ],
    blurb:
      "Immersive lighting working with the beautiful woodland setting, with different levels of height only possible by rigging off the trees.",
    images: ["/projects/twisted-festival/twisted-festival1.jpg", "/projects/twisted-festival/twisted-festival2.jpg"],
  },
];

// ============================================================================
// "OTHER / MISC" PAGE — smaller jobs that don't get a full project page.
// Same rules as above for editing text.
// ============================================================================

export const otherWork: Credit[] = [
  { label: "Colour Factory", value: "Lighting design and operation — Psion Systems" },
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
  "/projects/other/max-cooper1.jpg",
];

export const otherClips: string[] = [];
