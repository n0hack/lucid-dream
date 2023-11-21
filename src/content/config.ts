import { defineCollection, z } from 'astro:content';

const projectSchema = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      thumbnail: image(),
      title: z.string(),
      description: z.string(),
      category: z.string(),
      tags: z.array(z.string()),
      date: z.date(),
    }),
});

const storySchema = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      category: z.string(),
      tags: z.array(z.string()),
      thumbnail: image(),
      date: z.date(),
    }),
});

export const collections = {
  project: projectSchema,
  story: storySchema,
};
