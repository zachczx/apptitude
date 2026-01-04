import { redirect } from '@sveltejs/kit';
import { info } from '../data_learn';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const slug = params.slug;

	const redirects: Record<string, string> = {
		products: 'product-fundamentals',
		'products-advanced': 'product-strategy',
		ux: 'ux-fundamentals',
		'ux-advanced': 'ux-design-interaction',
		ai: 'ai-fundamentals',
		'ai-advanced': 'ai-engineering-strategy',
	};

	if (redirects[slug]) {
		redirect(301, `/learn/${redirects[slug]}`);
	}

	const post = info.find((post) => post.slug === params.slug);

	return { post };
};
