import { error } from '@sveltejs/kit';
import { cacheup } from '../data_cacheup.js';

export function load({ params }) {
	try {
		const post = cacheup.find((post) => post.slug === params.slug);

		return {
			post
		};
	} catch (e) {
		error(404, `Nil`);
	}
}
