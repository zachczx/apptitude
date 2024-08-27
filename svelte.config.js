//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
//import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
import { mdsvex, escapeSvelte } from 'mdsvex';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import { codeToHtml } from 'shiki';
import {
	transformerNotationDiff,
	transformerNotationHighlight,
	transformerCompactLineOptions,
} from '@shikijs/transformers';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const html = escapeSvelte(
				await codeToHtml(code, {
					lang: 'js',
					theme: 'github-dark-default',
					transformers: [
						transformerNotationHighlight(),
						transformerNotationDiff(),
						transformerCompactLineOptions(),
					],
				}),
			);
			return `{@html \`${html}\` }`;
		},
	},
	remarkPlugins: [remarkToc, { tight: true }],
	rehypePlugins: [rehypeSlug],
};

const config = {
	extensions: ['.svelte', '.md'],
	kit: {
		adapter: adapter(),
		prerender: { handleHttpError: 'warn' },
	},
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
};

export default config;
