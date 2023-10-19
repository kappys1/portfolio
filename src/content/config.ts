import { defineCollection, z } from 'astro:content'

const projectCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			heroImage: image(),
			hashtags: z.array(z.string()).optional(),
			url: z.string().url().optional(),
			type: z.enum(['frontend', 'fullstack']),
			technologies: z
				.array(z.object({ id: z.string(), name: z.string(), src: z.string() }))
				.optional(),
		}),
})

export const collections = {
	project: projectCollection,
}
