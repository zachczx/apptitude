import { error } from '@sveltejs/kit';
import { info } from '../data_learn.js';

export function load({ params }) {
	try {
		const post = info.find((post) => post.slug === params.slug);
		let nextPostId, lastPostId;
		// if it's the max number
		if (post.id >= info.length) {
			nextPostId = 1;
		} else {
			nextPostId = post.id + 1;
		}
		const nextPost = info.find((post) => post.id === nextPostId);

		//same thing for minimum, cap at 1
		if (post.id <= 1) {
			lastPostId = info.length;
		} else {
			lastPostId = post.id - 1;
		}
		const lastPost = info.find((post) => post.id === lastPostId);
		return {
			post,
			nextPost,
			lastPost,
		};
	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
}
