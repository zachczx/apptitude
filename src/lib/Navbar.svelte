<script>
	import logo from '$lib/assets/svg/logo.svg?dataurl';
	import TablerChevronRight from '$lib/assets/svg/TablerChevronRight.svelte';
	function matchUrl(currentUrl, navUrl) {
		let result = currentUrl.search(navUrl);
		return result;
	}
	let { comparisonUrl } = $props();
</script>

<nav class="navbar bg-base-200 relative" data-pagefind-ignore>
	<div class="navbar-start max-h-18">
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
			<nav class="menu dropdown-content z-50 w-48 rounded-lg bg-slate-900 p-0 text-xl opacity-1">
				<a
					class="active:text-primary border-b border-slate-600 p-3 hover:rounded-t-lg hover:bg-slate-600 active:font-bold"
					href="/learn"
					><TablerChevronRight class="inline align-middle" height="1rem" width="1rem" /> Learn</a>
				<a
					class="active:text-primary border-b border-slate-600 p-3 hover:bg-slate-600 active:font-bold"
					href="/cacheup"
					><TablerChevronRight class="inline align-middle" height="1rem" width="1rem" /> Cache Up!</a>
				<a
					class="active:text-primary border-b border-slate-600 p-3 hover:bg-slate-600 active:font-bold"
					href="/techtrippin"
					><TablerChevronRight class="inline align-middle" height="1rem" width="1rem" /> Tech Trippin'</a>
				<a
					class="active:text-primary border-b border-slate-600 p-3 hover:bg-slate-600 active:font-bold"
					href="/todo"
					><TablerChevronRight class="inline align-middle" height="1rem" width="1rem" /> To-Do List</a>
				<a
					class="active:text-primary p-3 hover:rounded-b-lg hover:bg-slate-600 active:font-bold"
					href="/about"
					><TablerChevronRight class="inline align-middle" height="1rem" width="1rem" /> About</a>
			</nav>
		</div>
		<a href="/"
			><img
				src={logo}
				width="300"
				height="84"
				alt="Apptitude"
				class="object-scale-down lg:ms-16" /></a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal gap-x-[2rem] ps-1 pe-5 text-2xl">
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
</nav>
