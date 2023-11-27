import { defineCollection, z } from 'astro:content';

const projectSchema = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      thumbnail: image(),
      title: z.string(),
      descriptions: z.array(z.string()),
      tags: z.array(z.string()),
      date: z.date(),
      links: z.object({
        site: z.string().optional(),
        github: z.string().optional(),
        story: z.string().optional(),
      }),
    }),
});

const storySchema = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      thumbnail: image(),
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      date: z.date(),
    }),
});

export const collections = {
  project: projectSchema,
  story: storySchema,
};
