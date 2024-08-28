export function initIo(currentSection: string) {
	let contentsCollection = document.getElementsByClassName(
		'contents-observer',
	) as HTMLCollectionOf<HTMLDataListElement>;
	let observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					currentSection = entry.target.id;
				}
			});
		},
		{
			rootMargin: '-10% 0% -10% 0%',
			threshold: 0,
		},
	);

	for (let i of contentsCollection) {
		observer.observe(i);
	}
}
