/** @type {import('@sveltejs/kit').ParamMatcher} */

export function match(param) {
	return /^[A-Za-z]+$/.test(param);
}
