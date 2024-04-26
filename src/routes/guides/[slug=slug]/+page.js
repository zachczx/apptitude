import { error } from '@sveltejs/kit';
import { guides } from '../data_guides.js';

export function load({ params }) {
	try {
		const post = guides.find((post) => post.slug === params.slug);
		/* 		let nextPostId, lastPostId;

		// if it's the max number, cap at 8
		if (post.id >= guides.length) {
			nextPostId = 1;
		} else {
			nextPostId = post.id + 1;
		}
		const nextPost = guides.find((post) => post.id === nextPostId);

		//same thing for minimum, cap at 1
		if (post.id <= 1) {
			lastPostId = guides.length;
		} else {
			lastPostId = post.id - 1;
		}
		const lastPost = guides.find((post) => post.id === lastPostId);
 */
		return {
			post,
			/* 			nextPost,
			lastPost, */
		};
	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
}
