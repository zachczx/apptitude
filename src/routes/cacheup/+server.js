import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export const GET = async () => {
	throw redirect(301, `/guides`);
};
