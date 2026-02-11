import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/services" }),
  schema: z.object({
    id: z.number(),
    title: z.string(),
    image: z.string(),
    details: z.array(z.string()),
  }),
});

const sectors = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/sectors" }),
  schema: z.object({
    id: z.number(),
    title: z.string(),
    icon: z.string(),
    backgroundIcon: z.string(),
    details: z.array(z.string()),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/testimonials" }),
  schema: z.object({
    id: z.number(),
    author: z.string(),
    department: z.string().optional(),
    image: z.string(),
  }),
});

const benefits = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/benefits" }),
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    order: z.number(),
  }),
});

const serviceProcess = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/service-process" }),
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    order: z.number(),
  }),
});

const differentials = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/differentials" }),
  schema: z.object({
    id: z.number(),
    icon: z.string(),
  }),
});

const logos = defineCollection({
  loader: file("src/data/logos.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    icon: z.string(),
  }),
});

const cultureValues = defineCollection({
  loader: file("src/data/culture-values.json"),
  schema: z.object({
    id: z.string(),
    text: z.string(),
  }),
});

export const collections = {
  services,
  sectors,
  testimonials,
  benefits,
  serviceProcess,
  differentials,
  logos,
  cultureValues,
};
