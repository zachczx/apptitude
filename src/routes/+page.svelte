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
	import Problem from '$lib/Problem.svelte';
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
			<nav class="menu dropdown-content z-50 w-48 rounded-lg bg-base-300 text-lg">
				<a
					class="border-b border-b-base-100 p-1 hover:rounded-t-lg active:text-primary active:text-primary"
					href="/"
					><svg
						id="hugeicons:house-01"
						xmlns="http://www.w3.org/2000/svg"
						class="mb-1 me-2 inline stroke-base-content"
						width="1em"
						height="1em"
						viewBox="0 0 24 24"
						><g
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							color="currentColor"
							><path
								d="M13 2L2 7m10-4v19H7c-1.886 0-2.828 0-3.414-.586S3 19.886 3 18V7m9 0l10 5" /><path
								d="M10 22h7c1.886 0 2.828 0 3.414-.586S21 19.885 21 18v-6.5M18 10V7M7 11h1m-1 4h1m8-1h1m-.5 8v-4" /></g
						></svg> Home</a>
				<a
					class="border-b border-b-base-100 p-1 hover:rounded-t-lg active:text-primary active:text-primary"
					href="/learn"
					><svg
						id="hugeicons:elearning-exchange"
						xmlns="http://www.w3.org/2000/svg"
						class="mb-1 me-2 inline stroke-base-content"
						width="1em"
						height="1em"
						viewBox="0 0 24 24"
						><g
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							color="currentColor"
							><path
								d="M2.459 9c1.277-4.057 5.077-7 9.566-7c5.198 0 9.472 3.947 9.975 9l-2-.407M21.541 15a10.03 10.03 0 0 1-9.566 7C6.777 22 2.503 18.053 2 13l2 .407" /><path
								d="M9.002 13.528v1.992a.95.95 0 0 0 .432.81c.844.528 1.485.683 2.571.716c1.001.027 1.629-.13 2.563-.714a.96.96 0 0 0 .44-.82v-1.984m2.003-2.513v3.015M7.05 10.844c.362-.764 2.605-2.094 4.652-2.751a.93.93 0 0 1 .604.014c1.81.662 3.824 1.665 4.555 2.478c.381.425.008.967-.453 1.302c-.937.681-1.97 1.21-4.058 2.013a.98.98 0 0 1-.688.005c-2.14-.795-4.142-1.82-4.595-2.723a.39.39 0 0 1-.017-.338" /></g
						></svg> Learn</a>
				<a
					class="border-b border-b-base-100 p-1 active:font-bold active:text-primary"
					href="/guides"
					><svg
						id="hugeicons:online-learning-01"
						xmlns="http://www.w3.org/2000/svg"
						class="mb-1 me-2 inline stroke-base-content"
						width="1em"
						height="1em"
						viewBox="0 0 24 24"
						><path
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M6.583 7.238c3.007.53 4.799 1.639 5.417 2.276c.618-.637 2.41-1.746 5.418-2.276c1.523-.269 2.285-.403 2.933.112C21 7.864 21 8.7 21 10.372v6.007c0 1.529 0 2.293-.416 2.77c-.417.477-1.333.639-3.166.962c-1.635.288-2.91.747-3.833 1.208c-.909.454-1.363.681-1.585.681s-.677-.227-1.585-.68c-.923-.462-2.198-.921-3.832-1.21c-1.834-.322-2.75-.484-3.167-.961S3 17.908 3 16.379v-6.007C3 8.7 3 7.864 3.649 7.35c.648-.515 1.41-.38 2.933-.112M12 9v13M8.5 3.059a6.29 6.29 0 0 1 7 .01M13.622 5.5a3.14 3.14 0 0 0-3.244-.01"
							color="currentColor" /></svg> Guides</a>

				<a class="p-1 hover:rounded-b-lg active:font-bold active:text-primary" href="/about"
					><svg
						id="hugeicons:help-circle"
						xmlns="http://www.w3.org/2000/svg"
						class="mb-1 me-2 inline stroke-base-content"
						width="1em"
						height="1em"
						viewBox="0 0 24 24"
						><g
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							color="currentColor"
							><circle cx="12" cy="12" r="10" /><path
								d="M10 9a2 2 0 1 1 3.683 1.08C13.085 11.01 12 11.896 12 13v.5m-.008 3.5h.009" /></g
						></svg> About</a>
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
	<div class="mx-3 self-center justify-self-center rounded-full pt-4 lg:z-10 lg:mx-8 xl:px-[3rem]">
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
				<h2>Better</h2>
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

<Problem />

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
