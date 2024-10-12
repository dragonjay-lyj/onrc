// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const gameCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    coverImage: z.string(),
    publishDate: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  game: gameCollection,
};
