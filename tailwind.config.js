/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			transitionDuration: {
				2000: '2000ms',
				3000: '3000ms',
			},
			screens: {
				jumbo: '1921px',
			},
		},
	},
	plugins: [
		require('daisyui'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
	],
	daisyui: {
		themes: [
			{
				dim: {
					...require('daisyui/src/theming/themes')['dim'],
					// 'base-content': '#e0eaee',
					'neutral-content': '#e0eaee',
				},
			},
		],
	},
};
