import { z, defineCollection } from 'astro:content'

const projectSchema = z.object({
	title: z.string(),
	description: z.string(),
	heroImage: z.string().optional(),
	hashtags: z.array(z.string()).optional(),
	url: z.string().url().optional(),
	type: z.enum(['frontend', 'fullstack']),
	technologies: z
		.array(z.object({ id: z.string(), name: z.string(), src: z.string() }))
		.optional()
})

export type ProjectSchema = z.infer<typeof projectSchema>

const projectCollection = defineCollection({ schema: projectSchema })

export const collections = {
	project: projectCollection
}
