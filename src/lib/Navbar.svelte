<script>
	import logo from '$lib/assets/green-logo.webp?enhanced&w=300;200';
	import TablerChevronRight from '$lib/assets/svg/TablerChevronRight.svelte';
	function matchUrl(currentUrl, navUrl) {
		let result = currentUrl.search(navUrl);
		return result;
	}
	export let comparisonUrl;
</script>

<div class="navbar relative bg-base-300">
	<div class="max-h-18 navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
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
			<nav class="opacity-1 menu dropdown-content z-50 w-48 rounded-lg bg-slate-900 p-0 text-xl">
				<a
					class="border-b border-slate-600 p-3 hover:rounded-t-lg hover:bg-slate-600 active:font-bold active:text-primary"
					href="/learn"
					><TablerChevronRight class="inline align-middle" height="1rem" width="1rem" /> Learn</a>
				<a
					class="border-b border-slate-600 p-3 hover:bg-slate-600 active:font-bold active:text-primary"
					href="/cacheup"
					><TablerChevronRight class="inline align-middle" height="1rem" width="1rem" /> Cache Up!</a>
				<a
					class="border-b border-slate-600 p-3 hover:bg-slate-600 active:font-bold active:text-primary"
					href="/techtrippin"
					><TablerChevronRight class="inline align-middle" height="1rem" width="1rem" /> Tech Trippin'</a>
				<a
					class="border-b border-slate-600 p-3 hover:bg-slate-600 active:font-bold active:text-primary"
					href="/todo"
					><TablerChevronRight class="inline align-middle" height="1rem" width="1rem" /> To-Do List</a>
				<a
					class="p-3 hover:rounded-b-lg hover:bg-slate-600 active:font-bold active:text-primary"
					href="/about"
					><TablerChevronRight class="inline align-middle" height="1rem" width="1rem" /> About</a>
			</nav>
		</div>
		<a href="/"
			><enhanced:img
				src={logo}
				sizes="(min-width:1920px) 300px, (min-width:1600px) 300px, (min-width:1280px) 200px"
				alt="Apptitude"
				class="object-scale-down lg:ms-16" /></a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal gap-x-[2rem] pe-5 ps-1 text-2xl font-medium">
			<!-- removed menu class -->
			<li aria-current={matchUrl(comparisonUrl, '/learn') === 0 ? 'page' : undefined}>
				<a class="hover:bg-base-100 hover:text-primary" href="/learn">Learn</a>
			</li>
			<li aria-current={matchUrl(comparisonUrl, '/cacheup') === 0 ? 'page' : undefined}>
				<a class="hover:bg-base-100 hover:text-primary" href="/cacheup">Cache Up!</a>
			</li>
			<li aria-current={matchUrl(comparisonUrl, '/techtrippin') === 0 ? 'page' : undefined}>
				<a class="hover:bg-base-100 hover:text-primary" href="/techtrippin">Tech Trippin'</a>
			</li>
			<li aria-current={matchUrl(comparisonUrl, '/todo') === 0 ? 'page' : undefined}>
				<a class="hover:bg-base-100 hover:text-primary" href="/todo">To-Dos</a>
			</li>
			<li aria-current={matchUrl(comparisonUrl, '/about') === 0 ? 'page' : undefined}>
				<a class="hover:bg-base-100 hover:text-primary" href="/about">About</a>
			</li>
		</ul>
	</div>
	<div class="navbar-end"></div>
</div>
