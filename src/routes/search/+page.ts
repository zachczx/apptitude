import type { Pagefind } from 'vite-plugin-pagefind/types';

export async function load() {
	// @ts-expect-error - Pagefind will be present at runtime
	/* 	const pagefind: Pagefind = await import('/pagefind/pagefind.js');
	pagefind.init();
	return { pagefind }; */
}
