export function matchUrl(currentUrl: string, navUrl: string) {
	return currentUrl.search(navUrl);
}
