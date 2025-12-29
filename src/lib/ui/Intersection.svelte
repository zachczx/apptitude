<script lang="ts">
	import { onMount, type Snippet } from 'svelte';

	let {
		children,
		currentSection = $bindable(),
		config = { rootMargin: '-10% 0% -10% 0%', threshold: 0 },
	}: {
		children: Snippet;
		currentSection: string;
		config?: { rootMargin: string; threshold: number };
	} = $props();

	onMount(() => {
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
				rootMargin: config.rootMargin,
				threshold: config.threshold,
			},
		);

		for (let i of contentsCollection) {
			observer.observe(i);
		}

		return () => observer.disconnect();
	});
</script>

{@render children()}
