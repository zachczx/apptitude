<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		id,
		title,
		subtitle,
		children,
	}: { id: TableOfContentId; title: string; subtitle?: string; children: Snippet } = $props();
</script>

<section {id} class="contents-observer grid gap-4">
	<div>
		<h2 class="text-3xl font-bold tracking-tight">{title}</h2>
		{#if subtitle}
			<p class="text-base-content my-1 text-sm font-light">{subtitle}</p>
		{/if}
		<div class="bg-primary mt-2 h-1 w-20 rounded-full"></div>
	</div>
	{@render children()}
</section>
