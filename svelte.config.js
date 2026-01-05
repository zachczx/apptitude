import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */

const config = {
	preprocess: [vitePreprocess()],
	extensions: ['.svelte', '.md'],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			// fallback: 'index.html',
			precompress: false,
			strict: true,
		}),
		prerender: { handleHttpError: 'warn' },
		env: {
			dir: '../',
		},
	},
};

export default config;
