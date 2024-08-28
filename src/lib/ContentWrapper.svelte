<script lang="ts">
	import NavAside from './NavAside.svelte';
	import NewCrumbs from './NewCrumbs.svelte';
	import NavToc from './NavToc.svelte';
	import { type Contents } from '$lib/Types';

	export let urlSelf: string;
	export let page: string;
	export let contents: Contents[];
	export let currentSection: string;
	export let textCurrent: string;
	export let category: string;
</script>

<div class="mb-8 mt-8 grid grid-cols-5 px-2 py-5 lg:px-20">
	<aside
		class="col-span-1 hidden w-full content-start rounded-l-3xl lg:grid lg:border-r-2 lg:border-r-base-100 lg:bg-base-300">
		<h3 class="view-transition-menu-text w-full border-b-2 border-b-base-100 px-8 py-4 text-xl">
			Menu
		</h3>
		<NavAside {page} {category} />
	</aside>

	<main class="col-span-3 w-full space-y-8 border-r-2 border-r-base-100 bg-base-300">
		<nav class="grid w-full justify-items-start border-b-2 border-b-base-100 py-4 ps-8">
			<NewCrumbs urlMiddle="guides" textMiddle={'Guides'} {textCurrent} />
		</nav>
		<slot />
	</main>
	<aside class="col-span-1 hidden w-full content-start rounded-r-3xl lg:grid lg:bg-base-300">
		<h3 class="view-transition-thispost-text w-full border-b-2 border-b-base-100 px-8 py-4 text-xl">
			This Post
		</h3>
		<NavToc {urlSelf} {contents} {currentSection} />
	</aside>
</div>

<style>
	.view-transition-menu-text {
		view-transition-name: view-transition-menu-text;
	}

	.view-transition-thispost-text {
		view-transition-name: view-transition-thispost-text;
	}
</style>
