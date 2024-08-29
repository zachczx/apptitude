<script>
	import { onMount } from 'svelte';
	let { data } = $props();
	import TablerChevronRight from '$lib/assets/svg/TablerChevronRight.svelte';
	import logo from '$lib/assets/svg/logo.svg?dataurl';
	import { matchUrl } from '$lib/helpers';
	onMount(async () => {
		// @ts-expect-error - Pagefind will be present at runtime
		const pagefind = await import('/pagefind/pagefind.js');
		pagefind.init();
		new PagefindUI({
			element: '#search',
			showImages: false,
			resetStyles: true,
			autofocus: true,
			processResult: (result) => {
				const url = result.url.replace('.html', '');
				result.url = url;
				return result;
			},
		});
	});
</script>

<svelte:head>
	<title>Apptitude - Search</title>
	<link href="/pagefind/pagefind-ui.css" rel="stylesheet" />
</svelte:head>

<nav class="navbar-view-transition navbar {data.url === '/' ? 'absolute z-20' : ''}">
	<div class="max-h-18">
		<div class="dropdown lg:hidden">
			<div tabindex="0" role="button" class="btn btn-ghost -ms-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16" /></svg>
			</div>
			<nav class="opacity-1 menu dropdown-content z-50 w-48 rounded-lg bg-gray-900 p-0 text-xl">
				<a
					class="border-b border-slate-600 p-3 hover:rounded-t-lg hover:bg-slate-600 active:font-bold active:text-primary"
					href="/learn"
					><TablerChevronRight class="inline align-middle" height="1rem" width="1rem" /> Learn</a>
				<a
					class="border-b border-slate-600 p-3 hover:bg-slate-600 active:font-bold active:text-primary"
					href="/guides"
					><TablerChevronRight class="inline align-middle" height="1rem" width="1rem" /> Guides</a>
				<a
					class="border-b border-slate-600 p-3 hover:bg-slate-600 active:font-bold active:text-primary"
					href="/techtrippin"
					><TablerChevronRight class="inline align-middle" height="1rem" width="1rem" /> Tech Trippin'</a>
				<!--<a
					class="border-b border-slate-600 p-3 hover:bg-slate-600 active:font-bold active:text-primary"
					href="/todo"
					><TablerChevronRight class="inline align-middle" height="1rem" width="1rem" /> To-Do List</a
				>-->
				<a
					class="p-3 hover:rounded-b-lg hover:bg-slate-600 active:font-bold active:text-primary"
					href="/about"
					><TablerChevronRight class="inline align-middle" height="1rem" width="1rem" /> About</a>
			</nav>
		</div>
		<a href="/"
			><img
				src={logo}
				height="84"
				width="300"
				alt="Apptitude logo"
				fetchpriority="high"
				class="lg:ms-[4.3rem]" /></a>
	</div>
	<div class="navbar hidden justify-start lg:flex">
		<ul class="menu menu-horizontal gap-x-5 ps-20 font-medium">
			<!-- removed menu class -->
			<li aria-current={matchUrl(data.url, '/learn') === 0 ? 'page' : undefined}>
				<a class="text-xl hover:bg-transparent hover:text-primary" href="/learn">Learn</a>
			</li>
			<li aria-current={matchUrl(data.url, '/guides') === 0 ? 'page' : undefined}>
				<a class="text-xl hover:bg-transparent hover:text-primary" href="/guides">Guides</a>
			</li>
			<li aria-current={matchUrl(data.url, '/techtrippin') === 0 ? 'page' : undefined}>
				<a class="text-xl hover:bg-transparent hover:text-primary" href="/techtrippin"
					>Tech Trippin'</a>
			</li>
			<li aria-current={matchUrl(data.url, '/about') === 0 ? 'page' : undefined}>
				<a class="text-xl hover:bg-transparent hover:text-primary" href="/about">About</a>
			</li>
		</ul>
	</div>
	<div class="navbar-end">
		<a href="/search" class="lg:me-[4.3rem]"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="2em"
				height="2em"
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
</nav>

<div class="flex min-h-[30rem] w-full justify-center px-6 py-8">
	<div id="search" class="w-full lg:w-3/6"></div>
</div>
