import { error } from '@sveltejs/kit';
import { info } from '../data.js';

export function load({ params }) {
	try {
		const post = info.find((post) => post.slug === params.slug);

		return {
			post
		};
	} catch (e) {
		error(404, `Nil`);
	}
}
