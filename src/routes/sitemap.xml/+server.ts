// /src/routes/sitemap.xml/+server.ts
import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import * as sitemap from 'super-sitemap';
import { info } from '../learn/data_learn';
import { guides } from '../guides/data_guides';

export const prerender = true;

export const GET: RequestHandler = async () => {
	// Get data for parameterized routes however you need to; this is only an example.
	let slugsLearn: string[] = [];
	let slugsGuide: string[] = [];
	try {
		for (let i = 0; i < Object.keys(info).length; i++) {
			slugsLearn.push(info[i].slug);
		}

		for (let i = 0; i < Object.keys(guides).length; i++) {
			slugsGuide.push(guides[i].slug);
		}
	} catch (err) {
		throw error(500, 'Could not load data for param values.');
	}

	return await sitemap.response({
		origin: 'https://titude.app',
		excludePatterns: [
			'^/dashboard.*', // i.e. routes starting with `/dashboard`
			'.*\\[page=integer\\].*', // i.e. routes containing `[page=integer]`–e.g. `/blog/2`
			'.*\\(authenticated\\).*', // i.e. routes within a group
		],
		paramValues: {
			'/learn/[slug=slug]': slugsLearn,
			'/guides/[slug=slug]': slugsGuide,
		},
	});
};
