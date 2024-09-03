import mdx from '@astrojs/mdx'
import preact from '@astrojs/preact'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import { defineConfig, squooshImageService } from 'astro/config'

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), tailwind(), preact()],
	output: 'server',
	adapter: vercel(),
	image: {
		service: squooshImageService(),
	},
	vite: {
		plugins: [],
	},
})
