export const prerender = true;
export const ssr = true;

export async function load({ url }) {
	const path = url.pathname.split('/');
	const category = path[1];

	let page;
	if (path.length > 2) {
		page = path[2];
	}

	return {
		url: url.pathname,
		category,
		page,
	};
}
