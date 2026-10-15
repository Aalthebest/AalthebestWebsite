import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// News posts — one Markdown file per post in src/content/news/
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title:   z.string(),
    date:    z.coerce.date(),
    summary: z.string(),
    image:   z.string().optional(),   // path under /public, e.g. /Glenturret/Aberturret_Gin.png
    imageAlt: z.string().optional(),
    draft:   z.boolean().default(false),
  }),
});

export const collections = { news };
