<script>
	import '../app.css';
	import logo from '$lib/assets/logo_whale.webp';
	import PageTransition from '$lib/Transition.svelte';
	import TablerSquareRoundedPlusFilled from '$lib/assets/svg/TablerSquareRoundedPlusFilled.svelte';
	let { data } = $props();
	import { cacheup } from './cacheup/data_cacheup.js';
	import { info } from './learn/data_learn.js';
	let pageName = $state('Apptitude');
	import { onNavigate } from '$app/navigation';

	let viewTransition = $state('');

	onNavigate((navigation) => {
		if (!document.startViewTransition) {
			viewTransition = false;
			return;
		}

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
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
			<li
				class="hover:border-b-2 hover:border-primary {data.url == '/learn'
					? 'border-b-2 border-base-content'
					: ''}"
			>
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
			<li
				class="hover:border-b-2 hover:border-primary {data.url == '/cacheup'
					? 'selected border-b-2 border-base-content'
					: ''}"
			>
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
				class="hover:border-b-2 hover:border-primary {data.url == '/techtrippin'
					? 'selected border-b-2 border-base-content hover:text-primary'
					: ''}"
			>
				<a class="hover:bg-base-100 hover:text-primary" href="/techtrippin">Tech Trippin'</a>
			</li>
			<li
				class="hover:border-b-2 hover:border-primary {data.url == '/todo'
					? 'selected border-b-2 border-base-content hover:text-primary'
					: ''}"
			>
				<a class="hover:bg-base-100 hover:text-primary" href="/todo">To-Dos</a>
			</li>
			<li
				class="hover:border-b-2 hover:border-primary {data.url == '/about'
					? 'selected border-b-2 border-base-content'
					: ''}"
			>
				<a class="hover:bg-base-100 hover:text-primary" href="/about">About</a>
			</li>
		</ul>
	</div>
	<div class="navbar-end"></div>
</div>

{#if !viewTransition}
	<PageTransition url={data.url}>
		<slot />
	</PageTransition>
{:else}
	<slot />
{/if}

<footer
	class="footer footer-center mt-10 gap-y-2 rounded bg-base-200 p-10 text-base-content lg:mt-24"
>
	<aside>
		<p class="mb-2">Copyright © 2024 Zixian Chen. All rights reserved.</p>
	</aside>
	<div class="grid grid-cols-1 md:grid-flow-col md:gap-4">
		<div class="font-bold">My App Junkyard</div>
		<div>
			<a href="https://titude.app/" class="hover:text-primary"
				><TablerSquareRoundedPlusFilled class="mb-1 me-1 ms-2 inline fill-primary" />Apptitude</a
			>
			<a href="https://app.zixian.dev/rank/" class="hover:text-primary"
				><TablerSquareRoundedPlusFilled class="mb-1 me-1 ms-2 inline fill-primary" />Rank a Mate</a
			>
			<a href="https://app.zixian.dev/eatyourmeds/" class="hover:text-primary"
				><TablerSquareRoundedPlusFilled class="mb-1 me-1 ms-2 inline fill-primary" />Eat Your
				Medicine</a
			>
			<a href="https://btonomics.com/" class="hover:text-primary"
				><TablerSquareRoundedPlusFilled class="mb-1 me-1 ms-2 inline fill-primary" />Btonomics</a
			>
		</div>
	</div>
	<div class="grid grid-cols-1 md:grid-flow-col md:gap-4">
		<div class="font-bold">Socials</div>
		<div>
			<a href="https://www.linkedin.com/in/zixianchen/" class="hover:text-primary"
				><TablerSquareRoundedPlusFilled class="mb-1 me-1 ms-2 inline fill-primary" /> LinkedIn</a
			>
			<a href="https://zixianchen.com/" class="hover:text-primary"
				><TablerSquareRoundedPlusFilled class="mb-1 me-1 ms-2 inline fill-primary" /> Website</a
			>
		</div>
	</div>
</footer>

<style>
	/** {
		outline: 1px solid #f00 !important;
	}*/

	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateX(30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateX(-30px);
		}
	}

	:root::view-transition-old(root) {
		animation:
			90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
	}

	:root::view-transition-new(root) {
		animation:
			210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
	}

	li {
		view-transition-name: navbar;
	}
</style>
