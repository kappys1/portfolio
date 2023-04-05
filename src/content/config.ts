import { z, defineCollection } from 'astro:content'

const blogSchema = z.object({
	title: z.string(),
	description: z.string(),
	pubDate: z.coerce.date(),
	updatedDate: z.string().optional(),
	heroImage: z.string().optional(),
	badge: z.string().optional()
})

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

export type BlogSchema = z.infer<typeof blogSchema>
export type ProjectSchema = z.infer<typeof projectSchema>

const blogCollection = defineCollection({ schema: blogSchema })
const projectCollection = defineCollection({ schema: projectSchema })

export const collections = {
	blog: blogCollection,
	project: projectCollection
}
