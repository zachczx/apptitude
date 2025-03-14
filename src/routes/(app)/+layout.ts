export const load = ({ url }) => {
	const path = url.pathname.split('/');
	let category;
	category = path[1];
	let page;
	if (path.length > 2) {
		page = path[2];
	}
	return { category, page };
};
