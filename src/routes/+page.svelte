<script>
	import TablerGhostFilled from '$lib/assets/svg/TablerGhostFilled.svelte';
	import heroNew from '$lib/assets/hero-new.webp?enhanced&w=2060;1536;1280;1024';
	import oopsBg from '$lib/assets/oops-bg.webp?enhanced&w=2060;1536;1280;1024';
	import oops2Bg from '$lib/assets/oops2-bg.webp?enhanced&w=2060;1536;1280;1024';
	import bellCurveMeme from '$lib/assets/product-bell-curve.webp';
	import oops from '$lib/assets/oops.webp?enhanced&w=600;300';
	import oops2 from '$lib/assets/oops2.webp?enhanced&w=600;300';
	import RocketAnimation from '$lib/RocketAnimation.svelte';
	import pandaIcon from '$lib/assets/panda-icon.webp';

	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	onMount(() => {
		let tl = gsap.matchMedia();
		const headlineVar = document.getElementsByClassName('headline');
		console.log(headlineVar);

		tl.add('(min-width: 1028px)', () => {
			for (let i = 0; i < headlineVar.length; i++) {
				console.log(headlineVar.length);
				let delay = i * 0.2;
				gsap.from(headlineVar[i], {
					autoAlpha: 0,
					'--myBlur': '20px',
					duration: 0.5,
					delay: delay,
					ease: 'sine.out'
				});
			}

			gsap.from('.subheadline', {
				autoAlpha: 0.4,
				y: -20,
				duration: 0.5,
				ease: 'sine.out'
			});
			gsap.to('.button-shine', {
				'--moveRight': '30rem',
				duration: 2,
				delay: 2
			});
		});
	});
</script>

<div class="hero grid min-h-dvh grid-cols-1 justify-items-center pb-12 lg:pb-[8rem] xl:grid-cols-2">
	<figure>
		<enhanced:img
			src={heroNew}
			alt="Hero"
			class="hero-img"
			sizes="(min-width:2560px) 2060px, (min-width:1920px) 1536px, (min-width:1600px) 1280px, (min-width:1280px) 1024px"
		/>
	</figure>
	<div
		class="mx-3 self-center justify-self-center rounded-full px-3 pt-3 lg:z-10 lg:mx-8 lg:mt-12 xl:p-[8rem]"
	>
		<div class="avatar mb-8 mt-16 flex justify-center px-4 text-center xl:mt-0 xl:hidden">
			<div class="mask mask-squircle">
				<enhanced:img
					src={heroNew}
					alt="Hero"
					class="relative object-right"
					sizes="(min-width:1000px) 600px, (min-width:768px) 300px"
				/>
			</div>
		</div>
		<h1 class="mb-14 text-center text-5xl lg:text-6xl xl:text-7xl min-[1921px]:text-8xl">
			<span class="headline">Make</span>
			<span
				class="headline bg-gradient-to-r from-lime-300 via-green-400 to-teal-100 bg-clip-text text-transparent"
			>
				better decisions</span
			>
			<span class="headline">as a</span>
			<span
				class="headline bg-gradient-to-r from-lime-300 via-green-400 to-teal-100 bg-clip-text text-transparent"
				>tech product owner.</span
			>
		</h1>
		<div class="mb-14 grid grid-cols-3 py-2 text-start text-lg lg:text-xl">
			<div class="subheadline border-r-2 border-base-content/50 py-1 pe-3 text-center">
				<h2>Learn</h2>
				key digital product knowledge
			</div>
			<div class="subheadline border-r-2 border-base-content/50 py-1 pe-3 ps-3 text-center">
				<h2>Improve</h2>
				digital product management
			</div>
			<div class="subheadline py-1 ps-3 text-center">
				<h2>Dump</h2>
				crappy products nobody needs
			</div>
		</div>
		<div class="join join-vertical flex justify-center lg:join-horizontal">
			<a
				href="/learn"
				class="button-shine btn join-item relative overflow-hidden border border-primary bg-lime-600 font-medium text-white hover:border hover:border-primary hover:bg-gradient-to-r hover:from-lime-500 hover:via-teal-500 hover:to-emerald-600 active:from-lime-600 active:via-teal-600 active:to-emerald-700 lg:text-2xl"
				>Learn the Basics <svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 24 24"
					><path
						class="fill-white stroke-white"
						d="m13.692 17.308l-.707-.72l4.088-4.088H5v-1h12.073l-4.088-4.088l.707-.72L19 12z"
					/></svg
				></a
			>
			<a
				href="/cacheup"
				class="btn join-item border border-primary bg-base-100 from-red-500 via-orange-500 to-pink-500 font-medium text-primary hover:border hover:border-primary hover:bg-gradient-to-r hover:from-teal-500 hover:to-lime-500 hover:text-white active:from-red-700 active:via-orange-700 active:to-pink-700 lg:text-2xl"
				>Quickstart Guides</a
			>
		</div>
		<p class="mt-3 text-center lg:text-xl">
			<i><a href="/about" class="hover:text-primary">What's Apptitude?</a></i>
		</p>
	</div>
</div>

<RocketAnimation />

<div class="h-[40rem] bg-black"></div>

<style>
	/*	@media (max-width: 1280px) {
		.no-bg {
			background: #2a303c !important;
		}
		.hero-img {
			opacity: 0;
		}
	}*/
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
		.overlay::before,
		.overlay-reverse::before,
		.hero-img,
		.ending-img {
			max-height: 0px;
		}
	}
	@media (min-width: 1281px) {
		.overlay::before {
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
		}

		.hero-img {
			object-fit: cover;
			object-position: 70% center;
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			view-transition-name: hero-img;
		}
		.ending-img {
			object-fit: cover;
			object-position: 20% center;
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
</style>
