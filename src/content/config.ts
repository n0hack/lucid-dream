import { defineCollection, z } from 'astro:content';

const projectSchema = defineCollection({
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
};
