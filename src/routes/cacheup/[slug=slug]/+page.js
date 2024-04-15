import { error } from '@sveltejs/kit';
import { cacheup } from '../data_cacheup.js';

export function load({ params }) {
	try {
		const post = cacheup.find((post) => post.slug === params.slug);
		let nextPostId, lastPostId;

		// if it's the max number, cap at 8
		//if (post.id >= 8) {
		//	nextPostId = 8;
		//} else {
		//	nextPostId = post.id + 1;
		//}
		//const nextPost = cacheup.find((post) => post.id === nextPostId);

		//same thing for minimum, cap at 1
		//		if (post.id <= 1) {
		//			lastPostId = 1;
		//		} else {
		//			lastPostId = post.id - 1;
		//		}
		//		const lastPost = cacheup.find((post) => post.id === lastPostId);
		return {
			post,
			//			nextPost,
			//			lastPost
		};
	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
}
