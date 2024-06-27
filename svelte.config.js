//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
//import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */

const config = {
	kit: {
		adapter: adapter(),
		prerender: { handleHttpError: 'warn' },
	},
	preprocess: vitePreprocess(),
};

export default config;
