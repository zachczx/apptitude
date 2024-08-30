<script>
	import heroNew from '$lib/assets/hero-new.webp?enhanced&w=2060;1536;1280;1024';
	import heroNewBackground from '$lib/assets/hero-new.webp?enhanced&w=800';
	import heroNew2 from '$lib/assets/hero-new-2.webp?enhanced&w=2060;1536;1280;1024';
	import heroNew2Background from '$lib/assets/hero-new-2.webp?enhanced&w=800';
	import TablerChevronRight from '$lib/assets/svg/TablerChevronRight.svelte';
	import logo from '$lib/assets/svg/logo.svg?dataurl';
	import RocketAnimation from '$lib/RocketAnimation.svelte';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { matchUrl } from '$lib/helpers';
	import HowThisWorks from '$lib/HowThisWorks.svelte';
	import pandaAnnoyed from '$lib/assets/panda-annoyed.webp?enhanced&w=600;500;300';
	let { data } = $props();
	let pageName = $state('Apptitude');

	onMount(() => {
		let tl = gsap.matchMedia();
		const headlineVar = document.getElementsByClassName('headline');

		tl.add('(min-width: 1028px)', () => {
			for (let i = 0; i < headlineVar.length; i++) {
				let delay = i * 0.2;
				gsap.from(headlineVar[i], {
					autoAlpha: 0,
					'--myBlur': '20px',
					duration: 0.5,
					delay: delay,
					ease: 'sine.out',
				});
			}

			gsap.from('.subheadline', {
				autoAlpha: 0.4,
				y: -20,
				duration: 0.5,
				ease: 'sine.out',
			});
			gsap.to('.button-shine', {
				'--moveRight': '30rem',
				duration: 2,
				delay: 2,
			});
		});
	});
	// const currentBgNumber = Math.floor(Math.random() * 11);
</script>

<svelte:head>
	<title>{pageName}</title>
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
				alt="Apptitude logo"
				fetchpriority="high"
				height="84"
				width="300"
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

<div class="hero grid min-h-dvh grid-cols-1 content-center justify-items-center xl:grid-cols-2">
	<figure>
		<!-- {#if currentBgNumber % 2 == 0}
			<enhanced:img
				src={heroNewBackground}
				alt="Hero"
				class="hero-img -z-10"
				fetchpriority="high"
				loading="eager" />
			<enhanced:img
				src={heroNew}
				alt="Hero"
				class="hero-img"
				fetchpriority="high"
				loading="eager"
				sizes="(min-width:2560px) 2060px, (min-width:1920px) 1536px, (min-width:1600px) 1280px, (min-width:1280px) 1024px" />
		{:else}{/if} -->
		<enhanced:img
			src={heroNew2Background}
			alt="Hero"
			class="hero-img -z-10"
			fetchpriority="high"
			loading="eager" />
		<enhanced:img
			src={heroNew2}
			alt="Hero"
			class="hero-img"
			fetchpriority="high"
			loading="eager"
			sizes="(min-width:2560px) 2060px, (min-width:1920px) 1536px, (min-width:1600px) 1280px, (min-width:1280px) 1024px" />
	</figure>
	<div
		class="mx-3 self-center justify-self-center rounded-full px-3 pt-4 lg:z-10 lg:mx-8 xl:px-[3rem]">
		<div class="avatar mb-8 mt-20 flex justify-center px-4 text-center xl:mt-0 xl:hidden">
			<div class="mask mask-squircle">
				<!-- {#if currentBgNumber % 2 == 0}
					<enhanced:img
						src={heroNew}
						alt="Hero"
						class="relative object-right"
						sizes="(min-width:1000px) 600px, (min-width:768px) 500px, 300px" />
				{:else}{/if} -->
				<enhanced:img
					src={heroNew2}
					alt="Hero"
					class="relative object-right"
					sizes="(min-width:1000px) 600px, (min-width:768px) 500px, 300px" />
			</div>
		</div>
		<h1 class="mb-12 text-center text-5xl lg:pt-20 lg:text-6xl min-[1921px]:text-7xl">
			<span class="headline text-neutral-content">Get better at</span>
			<span
				class="headline inline-block bg-gradient-to-r from-emerald-200 via-lime-200 to-teal-300 bg-clip-text pb-5 text-transparent"
				>tech products & projects.</span>
		</h1>
		<div class="mb-12 grid grid-cols-3 py-2 text-start text-lg text-neutral-content lg:text-xl">
			<div class="subheadline border-r-2 border-base-content/50 py-1 pe-3 text-center">
				<h2>Learn</h2>
				key digital product knowledge
			</div>
			<div class="subheadline border-r-2 border-base-content/50 py-1 pe-3 ps-3 text-center">
				<h2>Improve</h2>
				digital product management
			</div>
			<div class="subheadline py-1 ps-3 text-center">
				<h2>Drop</h2>
				poor & unnecessary products
			</div>
		</div>
		<div class="join-vertica join flex justify-center lg:join-horizontal">
			<a
				href="/learn"
				class="button-shine btn join-item relative overflow-hidden border border-primary bg-lime-600 font-bold text-white hover:border hover:border-primary hover:bg-gradient-to-r hover:from-lime-500 hover:via-teal-500 hover:to-emerald-600 active:from-lime-600 active:via-teal-600 active:to-emerald-700 lg:text-2xl"
				>Learn Basics <svg
					xmlns="http://www.w3.org/2000/svg"
					width="1.5em"
					height="1.5em"
					viewBox="0 0 24 24"
					><path
						class="fill-white stroke-white"
						d="m13.692 17.308l-.707-.72l4.088-4.088H5v-1h12.073l-4.088-4.088l.707-.72L19 12z" /></svg
				></a>
			<a
				href="/guides"
				class="bg-grey-900 btn join-item border border-primary from-red-500 via-orange-500 to-pink-500 font-bold text-primary hover:border hover:border-primary hover:bg-gradient-to-r hover:from-teal-500 hover:to-lime-500 hover:text-white active:from-red-700 active:via-orange-700 active:to-pink-700 lg:text-2xl"
				>Skip to Guides</a>
		</div>
		<p class="mt-3 text-center lg:text-xl">
			<i><a href="/about" class="hover:text-primary">What's Apptitude?</a></i>
		</p>
	</div>
</div>

<HowThisWorks />

<div class="grid min-h-[200px] gap-x-5 bg-gray-800 py-[4rem] lg:grid-cols-2">
	<div class="avatar my-5 justify-self-end px-10">
		<div class="mask mask-squircle">
			<enhanced:img
				src={pandaAnnoyed}
				alt="Annoyed panda"
				fetchpriority="low"
				sizes="(min-width:1000px) 600px, (min-width:768px) 500px, 300px" />
		</div>
	</div>
	<div class="grid grid-rows-2 justify-self-start">
		<div class="content-end text-center lg:text-start"><h2>What are you waiting for?</h2></div>
		<div class="z-50 pt-5 text-center lg:ps-5 lg:pt-10 lg:text-start">
			<a
				href="/learn"
				class="btn relative overflow-hidden border border-primary bg-lime-600 font-bold text-white hover:border hover:border-primary hover:bg-gradient-to-r hover:from-lime-500 hover:via-teal-500 hover:to-emerald-600 active:from-lime-600 active:via-teal-600 active:to-emerald-700 lg:hidden lg:text-2xl"
				>Learn the Basics <svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 24 24"
					><path
						class="fill-white stroke-white"
						d="m13.692 17.308l-.707-.72l4.088-4.088H5v-1h12.073l-4.088-4.088l.707-.72L19 12z" /></svg
				></a>
			<a
				class="hide-small group relative rounded-lg px-6 py-3 text-3xl font-bold text-white lg:text-5xl"
				href="/learn">
				<span
					class="ease absolute inset-0 h-full w-full -translate-x-2 -translate-y-4 transform rounded bg-lime-600 transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0 lg:-translate-x-4 lg:-translate-y-3"
				></span>
				<span
					class="ease absolute inset-0 h-full w-full translate-x-2 translate-y-2 transform rounded bg-teal-800 mix-blend-screen transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0 lg:translate-x-4 lg:translate-y-3"
				></span>
				<span class="relative p-5 font-bold">Start Learning Now! </span></a>
		</div>
	</div>
</div>

<!--
<div class="hidden lg:contents">
	<RocketAnimation />
</div>-->

<style>
	/*	@media (max-width: 1280px) {
		.no-bg {
			background: #2a303c !important;
		}
		.hero-img {
			opacity: 0;
		}
	}*/
	@media (max-width: 1024px) {
		.hide-small {
			display: none;
		}
	}
	.button-shine::before {
		content: '';
		position: absolute;
		width: 2rem;
		left: -3rem;
		height: 130%;
		background-color: white;
		transform: skew(-30deg) translateX(var(--moveRight));
		opacity: 0.7;
		filter: blur(20px);
	}
	.headline {
		filter: blur(var(--myBlur));
	}
	@media (min-width: 1281px) {
		.hero {
			position: relative;
		}
	}
	@media (max-width: 1280px) {
		/* .overlay::before,
		.overlay-reverse::before, */
		.hero-img {
			max-height: 0px;
		}
	}
	@media (min-width: 1281px) {
		/* .overlay::before {
			content: '';
			z-index: 2;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			display: block;
			position: absolute;
			background: linear-gradient(40deg, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 70%);
		}

		.overlay-reverse::before {
			content: '';
			z-index: 2;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			display: block;
			position: absolute;
			background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 20%);
		} */

		.hero-img {
			object-fit: cover;
			object-position: 70% center;
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
		}
	}

	/*	* {
		outline: 1px solid #f00 !important;
	}*/

	/*
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
	}
	*/
</style>
