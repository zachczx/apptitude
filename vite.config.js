import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';
import svg from '@poppanator/sveltekit-svg';
import pagefind from 'vite-plugin-pagefind';

/** @type {import('vite').UserConfig} */
export default defineConfig({
	plugins: [
		pagefind(),
		enhancedImages(),
		sveltekit(),
		svg({
			includePaths: ['./static/', './assets/svg/'],
			svgoOptions: {
				multipass: true,
				plugins: [
					{
						name: 'preset-default',
						// by default svgo removes the viewBox which prevents svg icons from scaling
						// not a good idea! https://github.com/svg/svgo/pull/1461
						params: {
							overrides: {
								removeViewBox: false, // prevent breaking scaling for SVGs that are scaled with HTML, CSS or JS, see: https://github.com/svg/svgo/issues/1128
								removeTitle: false,
								removeDesc: false, // not necessary for safety, but better for accessibility
							},
						},
					},
				],
			},
		}),
	],
});
