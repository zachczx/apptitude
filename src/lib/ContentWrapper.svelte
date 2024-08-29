<script lang="ts">
	import NavAside from './NavAside.svelte';
	import NewCrumbs from './NewCrumbs.svelte';
	import NavToc from './NavToc.svelte';
	import { type Contents } from '$lib/Types';
	import logo from '$lib/assets/svg/logo.svg?dataurl';

	export let urlSelf: string;
	export let page: string;
	export let contents: Contents[] = [];
	export let currentSection: string;
	export let textCurrent: string = '';
	export let category: string;
	export let textMiddle: string;
</script>

<div class="mb-8 mt-0 grid grid-cols-5 px-2 py-5 lg:px-10 xl:px-20">
	<aside
		class="col-span-1 hidden w-full content-start rounded-l-3xl lg:grid lg:border-r-2 lg:border-r-base-100 lg:bg-gray-950"
		style="view-transition-name: view-transition-left-panel;">
		<div
			class="view-transition-menu-text flex h-14 w-full items-center border-b-2 border-b-base-100 px-8 text-xl">
			<a href="/"
				><img
					src={logo}
					alt="Apptitude logo"
					height="42"
					width="150"
					fetchpriority="high"
					class="" /></a>
		</div>
		<NavAside {page} {category} />
	</aside>

	<main
		class="col-span-5 w-full space-y-8 border-r-2 border-r-base-100 lg:col-span-3 lg:bg-base-300"
		style="view-transition-name: view-transition-base-canvas;">
		<nav
			class="b-4 h-14 w-full justify-items-start border-b-2 border-b-base-100 px-2 py-4 lg:grid lg:px-8">
			<NewCrumbs urlMiddle="guides" {textMiddle} {textCurrent} />
		</nav>
		<div class="px-2 pb-10 pt-10 lg:px-8 lg:pt-0"><slot /></div>
	</main>
	<aside
		class="col-span-1 hidden w-full content-start rounded-r-3xl lg:grid lg:bg-base-300"
		style="view-transition-name: view-transition-right-panel;">
		<div
			class="flex h-14 w-full items-center justify-end border-b-2 border-b-base-100 px-8 py-4 text-xl">
			<a href="/search" class="view-transition-search-icon text-2xl"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="icon icon-tabler icons-tabler-outline icon-tabler-search me-3 inline"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
						d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
			</a>
		</div>

		{#if contents.length > 0}
			<NavToc {urlSelf} {contents} {currentSection} />
		{/if}
	</aside>
</div>

<style>
	.view-transition-menu-text {
		view-transition-name: view-transition-menu-text;
	}

	.view-transition-search-icon {
		view-transition-name: view-transition-search-icon;
	}
</style>
