import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';
import pagefind from 'vite-plugin-pagefind';

export default defineConfig({
	plugins: [enhancedImages(), sveltekit()],
	/* 	, pagefind() build: {
		rollupOptions: {
			external: ['/pagefind/pagefind.js', '/pagefind/pagefind-ui.js'],
		},
	},
	assetsInclude: 'pagefind.js', */
});
