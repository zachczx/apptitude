<script lang="ts">
	import NavAside from './NavAside.svelte';
	import NewCrumbs from './NewCrumbs.svelte';
	import NavToc from './NavToc.svelte';
	import { type Contents } from '$lib/Types';
	import logo from '$lib/assets/svg/logo.svg?dataurl';
	import type { Snippet } from 'svelte';
	import TablerSquareRoundedPlusFilled from './assets/svg/TablerSquareRoundedPlusFilled.svelte';

	interface ContentWrapperProps {
		title: string;
		subtitle?: string;
		urlSelf: string;
		page: string;
		contents?: Contents[];
		currentSection?: string;
		category: string;
		children: Snippet;
		showSideBar?: boolean;
	}
	let {
		title,
		subtitle,
		urlSelf,
		page,
		contents = [],
		currentSection,
		category = $bindable(),
		showSideBar = true,
		children,
	}: ContentWrapperProps = $props();
</script>

<div class="grid grid-cols-[auto_1fr_auto]">
	<aside
		class="lg:border-r-base-100 bg-base-100 vertical-offset sticky top-16 hidden w-full content-start overflow-y-auto lg:grid lg:border-r-2">
		{#if showSideBar}
			<NavAside {page} {category} />
		{/if}
	</aside>

	<main class="border-r-base-100 bg-base-100 w-full border-r-2">
		<div class="w-full max-w-[900px] justify-self-center px-4 pt-4 pb-12 lg:pt-0 lg:pb-32">
			<section class="mt-14 mb-8 grid gap-4 lg:mt-20 lg:mb-20">
				<h1
					class="inline-block bg-linear-to-r from-emerald-200 via-lime-200 to-teal-300 bg-clip-text pb-4 text-4xl font-bold text-transparent lg:text-7xl">
					{title}
				</h1>
				{#if subtitle}
					<p>
						{subtitle}
					</p>
				{/if}
			</section>
			{@render children()}
		</div>
		<div>
			<footer class="text-center">
				© 2024-2025 Zixian Chen. All views expressed here are solely mine.
			</footer>
		</div>
	</main>

	<aside
		class="vertical-offset sticky top-16 col-span-1 hidden w-full content-start rounded-r-3xl lg:grid">
		{#if contents.length > 0}
			<NavToc {urlSelf} {contents} {currentSection} />
		{/if}
	</aside>
</div>

<style>
	.vertical-offset {
		height: calc(100dvh - 4.5rem);
	}
</style>
