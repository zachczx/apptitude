<script>
	import '../app.css';
	import logo from '$lib/assets/logo_whale.webp';
	import PageTransition from '$lib/Transition.svelte';
	let { data } = $props();
	import { cacheup } from './cacheup/data_cacheup.js';
	import { info } from './learn/data.js';
	let pageName = $state('Apptitude');
</script>

<svelte:head>
	<title>{pageName}</title>
</svelte:head>
<div class="navbar mb-10 bg-base-100 lg:mb-20">
	<div class="navbar-start">
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
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</div>
			<ul
				tabindex="-1"
				class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
			>
				<li><a href="/learn">Learn</a></li>
				<li><a href="/cacheup">Cache Up!</a></li>
				<li><a href="/techtrippin">Tech Trippin'</a></li>
				<li><a href="/todo">To-Do List</a></li>
				<li><a href="/about">About</a></li>
			</ul>
		</div>
		<a
			href="/"
			class="jost btn border-0 bg-base-100 text-4xl text-white hover:bg-base-100 hover:text-primary xl:text-5xl"
			><img src={logo} width="60" height="60" class="max-w-full" alt="Apptitude" />apptitude</a
		>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal gap-x-[2rem] pe-5 ps-1 pt-7 text-xl font-medium">
			<!-- removed menu class -->
			<li class="border-b-2 border-base-100 pb-3 hover:border-b-2 hover:border-slate-200">
				<details>
					<summary class="hover:bg-base-100 hover:text-primary"><a href="/learn">Learn</a></summary>
					<ul class="z-50 p-2 text-base">
						{#each info as skillsItem}
							<li class="hover:text-primary">
								<a href="/learn/{skillsItem.slug}">{skillsItem.name}</a>
							</li>
						{/each}
					</ul>
				</details>
			</li>
			<li class="border-b-2 border-base-100 hover:border-b-2 hover:border-slate-200">
				<details>
					<summary class="hover:bg-base-100 hover:text-primary"
						><a href="/cacheup">Cache Up!</a></summary
					>
					<ul class="z-50 p-2 text-base">
						{#each cacheup as cacheupItem}
							<li class="hover:bg-base-100 hover:text-primary">
								<a href="/cacheup/{cacheupItem.slug}">{cacheupItem.name}</a>
							</li>
						{/each}
					</ul>
				</details>
			</li>
			<li
				class="border-b-2 border-base-100 pb-3 hover:border-b-2 hover:border-slate-200 hover:text-primary"
			>
				<a class="hover:bg-base-100" href="/techtrippin">Tech Trippin'</a>
			</li>
			<li
				class="border-b-2 border-base-100 pb-3 hover:border-b-2 hover:border-slate-200 hover:text-primary"
			>
				<a class="hover:bg-base-100" href="/todo">To-Dos</a>
			</li>
			<li
				class="border-b-2 border-base-100 pb-3 hover:border-b-2 hover:border-slate-200 hover:text-primary"
			>
				<a class="hover:bg-base-100" href="/about">About</a>
			</li>
		</ul>
	</div>
	<div class="navbar-end"></div>
</div>

<PageTransition url={data.url}>
	<div class="px-3 lg:px-0">
		<slot />
	</div>
</PageTransition>

<footer class="footer footer-center mb-5 mt-[7rem] text-base-content">
	<aside>
		<p>Copyright © 2024 Zixian Chen. All rights reserved.</p>
	</aside>
</footer>
