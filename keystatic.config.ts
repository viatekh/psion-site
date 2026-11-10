import { config, collection, singleton, fields } from "@keystatic/core";

// This file describes the editing screens at /keystatic.
// Each field here becomes a form input; the saved content lives in /content.

const projectTypes = ["Festival", "Club", "Concert", "Private Client"] as const;
const disciplines = ["Light", "LED", "Sound", "Video", "Fabrication", "Production"] as const;
const asOptions = <T extends string>(values: readonly T[]) => values.map((value) => ({ label: value, value }));

const videos = (label: string) =>
  fields.array(
    fields.object({
      url: fields.url({
        label: "YouTube or Vimeo link",
        description: "Paste the full link from the address bar.",
        validation: { isRequired: true },
      }),
      label: fields.text({ label: "Caption (optional)" }),
      start: fields.text({
        label: "Start time (optional)",
        description: 'To start partway through, e.g. "1:26".',
      }),
    }),
    { label, itemLabel: (item) => item.fields.label.value || item.fields.url.value || "Video" }
  );

const textList = (label: string, description?: string) =>
  fields.array(fields.text({ label: "Item" }), {
    label,
    description,
    itemLabel: (item) => item.value || "(empty)",
  });

const labelValueList = (label: string, labelName: string, valueName: string, description?: string) =>
  fields.array(
    fields.object({
      label: fields.text({ label: labelName, validation: { isRequired: true } }),
      value: fields.text({ label: valueName, validation: { isRequired: true } }),
    }),
    { label, description, itemLabel: (item) => `${item.fields.label.value}: ${item.fields.value.value}` }
  );

const clipPaths = fields.array(fields.text({ label: "Clip file path" }), {
  label: "Looping clips",
  description:
    "Short silent video loops. These need preparing before they go on the site, so ask Tekh to add new ones.",
  itemLabel: (item) => item.value || "(empty)",
});

export default config({
  // On your own machine edits save straight to the files. Online they go through GitHub.
  // (Set NEXT_PUBLIC_KEYSTATIC_STORAGE=github locally to test or set up the GitHub side.)
  storage:
    process.env.NODE_ENV === "development" && process.env.NEXT_PUBLIC_KEYSTATIC_STORAGE !== "github"
      ? { kind: "local" }
      : { kind: "github", repo: "viatekh/psion-site" },

  ui: {
    brand: { name: "Psion Systems" },
    navigation: {
      Work: ["projects", "projectOrder", "other"],
      Pages: ["home", "about", "process"],
    },
  },

  collections: {
    projects: collection({
      label: "Projects",
      slugField: "client",
      path: "content/projects/*",
      format: { data: "yaml" },
      columns: ["type", "date"],
      schema: {
        client: fields.slug({
          name: { label: "Client", description: "The big heading on the page." },
          slug: {
            label: "Web address",
            description: "psion.systems/this-bit. Leave it alone on existing projects or old links break.",
          },
        }),
        type: fields.select({ label: "Type", options: asOptions(projectTypes), defaultValue: "Festival" }),
        disciplines: fields.multiselect({
          label: "Disciplines",
          description: "What kind of work it was. Drives the filter buttons on the projects page.",
          options: asOptions(disciplines),
        }),
        placeholder: fields.checkbox({
          label: "No photos yet",
          description: 'Ticked projects stay out of the main feed and are listed under "More work".',
        }),
        sections: fields.array(
          fields.object({
            name: fields.text({ label: "Name", description: 'e.g. "The Hive"', validation: { isRequired: true } }),
            description: fields.text({ label: "One-line summary" }),
            blurb: fields.text({ label: "Longer text (optional)", multiline: true }),
            videos: videos("Videos for this part"),
            images: fields.array(
              fields.image({ label: "Photo", directory: "public/projects", publicPath: "/projects/" }),
              { label: "Photos for this part", itemLabel: (item) => item.value?.filename ?? "Photo" }
            ),
          }),
          {
            label: "What we did",
            description: "Most projects have one. Add more for clients with several stages or years.",
            itemLabel: (item) => item.fields.name.value || "Untitled",
            validation: { length: { min: 1 } },
          }
        ),
        location: fields.text({ label: "Location", description: "Leave empty if unknown." }),
        date: fields.text({ label: "Date", description: "Year or years. Leave empty if unknown." }),
        link: fields.url({ label: "Client link", description: "Website or Instagram (optional)." }),
        designer: fields.text({ label: "Designer", description: "External designer credit (optional)." }),
        credits: labelValueList("Credits", "Role", "Who", "Who did what."),
        press: fields.array(
          fields.object({
            outlet: fields.text({ label: "Outlet", validation: { isRequired: true } }),
            url: fields.url({ label: "Link", validation: { isRequired: true } }),
          }),
          { label: "Press", itemLabel: (item) => item.fields.outlet.value || "Press link" }
        ),
        blurb: fields.text({ label: "About the project", multiline: true }),
        videos: videos("Videos"),
        localClips: clipPaths,
        images: fields.array(
          fields.image({ label: "Photo", directory: "public/projects", publicPath: "/projects/" }),
          {
            label: "Photos",
            description: "Drag to reorder. Keep each file under about 2 MB.",
            itemLabel: (item) => item.value?.filename ?? "Photo",
          }
        ),
      },
    }),
  },

  singletons: {
    projectOrder: singleton({
      label: "Project order",
      path: "content/site/project-order",
      format: { data: "yaml" },
      schema: {
        order: fields.array(
          fields.relationship({ label: "Project", collection: "projects", validation: { isRequired: true } }),
          {
            label: "Order on the projects page",
            description: "Drag to reorder. Projects missing from this list go at the end.",
            itemLabel: (item) => item.value ?? "(pick a project)",
          }
        ),
      },
    }),

    other: singleton({
      label: "Other / Misc page",
      path: "content/site/other",
      format: { data: "yaml" },
      schema: {
        intro: fields.text({ label: "Intro", multiline: true }),
        work: labelValueList("Jobs", "Client", "What we did"),
        images: fields.array(
          fields.image({ label: "Photo", directory: "public/projects/other", publicPath: "/projects/other/" }),
          { label: "Photos", itemLabel: (item) => item.value?.filename ?? "Photo" }
        ),
        clips: clipPaths,
      },
    }),

    home: singleton({
      label: "Home page",
      path: "content/site/home",
      format: { data: "yaml" },
      schema: {
        heading: fields.text({ label: "Heading" }),
        intro: fields.text({ label: "Intro", multiline: true }),
      },
    }),

    about: singleton({
      label: "About page",
      path: "content/site/about",
      format: { data: "yaml" },
      schema: {
        headline: fields.text({ label: "Headline" }),
        paragraphs: fields.array(fields.text({ label: "Paragraph", multiline: true }), {
          label: "Paragraphs",
          itemLabel: (item) => item.value.slice(0, 60) || "(empty)",
        }),
        services: textList("Services"),
        creating: textList("Creating"),
        founded: fields.text({ label: "Founded" }),
        director: fields.text({ label: "Director" }),
        based: fields.text({ label: "Based" }),
        clients: textList(
          "Selected clients",
          "A name that exactly matches a project's client links to that project automatically."
        ),
        certifications: textList("Certifications"),
      },
    }),

    process: singleton({
      label: "Process page",
      path: "content/site/process",
      format: { data: "yaml" },
      schema: {
        headline: fields.text({ label: "Headline" }),
        intro: fields.text({ label: "Intro", multiline: true }),
        steps: fields.array(
          fields.object({
            name: fields.text({ label: "Step", validation: { isRequired: true } }),
            body: fields.text({ label: "Text", multiline: true }),
          }),
          { label: "Steps", itemLabel: (item) => item.fields.name.value || "Step" }
        ),
      },
    }),
  },
});
