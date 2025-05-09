import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { author } from './consts';

const blog = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string().optional(),
		author: z.string().default("astro"),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image(),
		categories: z.string().optional(),
		tags: z.array(z.string()).optional()
	}),
});

export const collections = { blog };
