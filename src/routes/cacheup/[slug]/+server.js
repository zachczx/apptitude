import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ params }) => {
	const { slug } = params;
	throw redirect(301, `/guides/${slug}`);
};
