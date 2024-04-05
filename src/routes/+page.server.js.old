/** @type {import('./$types').PageLoad} */
export async function load({ request }) {
	const headers = request.headers;
	const userAgent = headers.get('user-agent');
	console.log('User agent:', userAgent);
	return {
		userAgent: userAgent
	};
}
