<script>
	import '../app.css';
	import logo from '$lib/assets/green-logo.webp?enhanced&w=300;200';
	import PageTransition from '$lib/Transition.svelte';
	import TablerSquareRoundedPlusFilled from '$lib/assets/svg/TablerSquareRoundedPlusFilled.svelte';
	import TablerChevronRight from '$lib/assets/svg/TablerChevronRight.svelte';
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

	function matchUrl(currentUrl, navUrl) {
		let result = currentUrl.search(navUrl);
		return result;
	}
</script>

<svelte:head>
	<title>{pageName}</title>
</svelte:head>

<div class="navbar-view-transition navbar {data.url === '/' ? 'absolute z-20' : ''}">
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
			><enhanced:img
				src={logo}
				sizes="(min-width:1920px) 300px, (min-width:1600px) 300px, (min-width:1280px) 200px"
				alt="Apptitude"
				fetchpriority="high"
				class="object-scale-down lg:ms-16" /></a>
	</div>
	<div class="navbar hidden justify-start lg:flex">
		<ul class="menu menu-horizontal gap-x-5 pe-5 ps-1 text-2xl font-medium">
			<!-- removed menu class -->
			<li aria-current={matchUrl(data.url, '/learn') === 0 ? 'page' : undefined}>
				<a class="hover:bg-base-100 hover:text-primary" href="/learn">Learn</a>
			</li>
			<li aria-current={matchUrl(data.url, '/cacheup') === 0 ? 'page' : undefined}>
				<a class="hover:bg-base-100 hover:text-primary" href="/cacheup">Cache Up!</a>
			</li>
			<li aria-current={matchUrl(data.url, '/techtrippin') === 0 ? 'page' : undefined}>
				<a class="hover:bg-base-100 hover:text-primary" href="/techtrippin">Tech Trippin'</a>
			</li>
			<!--<li aria-current={matchUrl(data.url, '/todo') === 0 ? 'page' : undefined}>
				<a class="hover:bg-base-100 hover:text-primary" href="/todo">To-Dos</a>
			</li>-->
			<li aria-current={matchUrl(data.url, '/about') === 0 ? 'page' : undefined}>
				<a class="hover:bg-base-100 hover:text-primary" href="/about">About</a>
			</li>
		</ul>
	</div>
</div>

{#if !viewTransition}
	<PageTransition url={data.url}>
		<slot />
	</PageTransition>
{:else}
	<slot />
{/if}

<footer class="footer footer-center gap-y-2 rounded bg-base-200 p-3 pt-5 text-base-content">
	<aside>
		<p class="mb-2 text-base">
			Copyright © 2024 Zixian Chen. All rights reserved. All views expressed here are solely mine
			(Zixian).
		</p>
	</aside>
	<div class="grid grid-cols-1 md:grid-flow-col md:gap-4">
		<div class="font-bold">My App Junkyard</div>
		<div class="z-10">
			<a href="https://titude.app/" class="hover:text-primary"
				><TablerSquareRoundedPlusFilled class="mb-1 me-1 ms-2 inline fill-primary" />Apptitude</a>
			<a href="https://app.zixian.dev/rank/" class="hover:text-primary"
				><TablerSquareRoundedPlusFilled class="mb-1 me-1 ms-2 inline fill-primary" />Rank a Mate</a>
			<a href="https://app.zixian.dev/eatyourmeds/" class="hover:text-primary"
				><TablerSquareRoundedPlusFilled class="mb-1 me-1 ms-2 inline fill-primary" />Eat Your
				Medicine</a>
			<a href="https://btonomics.com/" class="hover:text-primary"
				><TablerSquareRoundedPlusFilled class="mb-1 me-1 ms-2 inline fill-primary" />Btonomics</a>
		</div>
	</div>
	<div class="grid grid-cols-1 md:grid-flow-col md:gap-4">
		<div class="font-bold">Socials</div>
		<div class="z-10">
			<a href="https://www.linkedin.com/in/zixianchen/" class="hover:text-primary"
				><TablerSquareRoundedPlusFilled class="mb-1 me-1 ms-2 inline fill-primary" /> LinkedIn</a>
			<a href="https://zixianchen.com/" class="hover:text-primary"
				><TablerSquareRoundedPlusFilled class="mb-1 me-1 ms-2 inline fill-primary" /> Website</a>
		</div>
	</div>
</footer>

<style>
	/** {
		outline: 1px solid #f00 !important;
	}*/

	@media (min-width: 1281px) {
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

		.navbar-view-transition {
			view-transition-name: navbar-view-transition;
		}

		li[aria-current='page'] {
			color: #9fe88d;
		}

		li[aria-current='page']::after {
			--size: 2px;
			content: '';
			width: 100%;
			position: absolute;
			bottom: -4px;
			border: var(--size) solid #9fe88d;
			view-transition-name: active-page2;
		}
		/*
		li[aria-current='page']::before {
			--size: 8px;
			content: '';
			width: 0;
			height: 0;
			position: absolute;
			top: -8px;
			left: calc(50% - var(--size));
			border: var(--size) solid #9fe88d;
			border-top: var(--size) solid var(--color-theme-1);
			view-transition-name: active-page;
		}*/
	}
</style>
