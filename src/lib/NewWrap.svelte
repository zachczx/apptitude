<script lang="ts">
	import type { Snippet } from 'svelte';
	import Footer from './Footer.svelte';

	let {
		children,
		toc,
		title,
		subtitle = '',
	}: { children: Snippet; toc?: Snippet; title: string; subtitle?: string } = $props();
</script>

<div class="relative grid min-h-dvh grid-cols-[1fr_auto]">
	<article class="grid max-w-200 grid-rows-[auto_1fr_auto] justify-self-center">
		<div class="mb-8 rounded-xl py-8">
			<h1 class="text-4xl font-bold">
				{title}
			</h1>
			{#if subtitle}
				<p class="text-base-content mt-2 max-w-2xl text-sm font-light">{subtitle}</p>
			{/if}
		</div>

		<main class="w-full max-w-5xl">
			{@render children()}
		</main>

		<Footer />
	</article>

	<aside class="sticky top-14 hidden h-[calc(100vh-4rem)] min-w-64 overflow-y-auto lg:block">
		{@render toc?.()}
	</aside>
</div>
