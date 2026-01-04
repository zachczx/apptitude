import { error } from '@sveltejs/kit';
import { guides } from '../data_guides';

export function load({ params }) {
	const post = guides.find((post) => post.slug === params.slug);

	return { post };
}
