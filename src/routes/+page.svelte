<script>
	import hero from '$lib/assets/kari-shea-1SAnrIxw5OY-unsplash.avif?enhanced&w=2600;2000;400';
	import TablerSquareRoundedCheckFilled from '$lib/assets/svg/TablerSquareRoundedCheckFilled.svelte';
	import SvgChevronRight from '$lib/assets/svg/TablerChevronRight.svelte';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import TablerHelpCircleFilled from '$lib/assets/svg/TablerHelpCircleFilled.svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		let tl = gsap.timeline();
		tl.add('start')
			.to('.animateLeft', { xPercent: -50, duration: 0, autoAlpha: 0 }, 'start')
			.to('.animateRight', { xPercent: 50, duration: 0, autoAlpha: 0 }, 'start')
			.to('.animateImg', { yPercent: 50, duration: 0, autoAlpha: 0 }, 'start')
			.to('.animateLeft', { xPercent: 0, duration: 1, autoAlpha: 1, ease: 'sine.out' }, 'start')
			.to('.animateRight', { xPercent: 0, duration: 1, autoAlpha: 1, ease: 'sine.out' }, 'start')
			.to('.animateImg', { yPercent: 0, duration: 1, autoAlpha: 1, ease: 'circ.out' }, 'start');

		let t2 = gsap.matchMedia();
		t2.add('(min-width: 1028px)', () => {
			gsap.to('.animateTitle', {
				scrollTrigger: {
					trigger: '.animateTitle',
					start: '-30 top',
					end: '110% top',
					scrub: true,
					markers: false
				},
				y: 50,
				autoAlpha: 0
			});
			gsap.to('.animate-first-para', {
				scrollTrigger: {
					trigger: '.animate-first-para',
					start: '-30 top',
					end: '+=30',
					scrub: true,
					markers: false
				},
				y: 50,
				autoAlpha: 0
			});
			gsap.to('.animate-second-para', {
				scrollTrigger: {
					trigger: '.animate-second-para',
					start: '-30 top',
					end: '+=30',
					scrub: true,
					markers: false
				},
				y: 50,
				autoAlpha: 0
			});
			gsap.to('.animate-cta', {
				scrollTrigger: {
					trigger: '.animate-cta',
					start: '-30 top',
					end: '+=50',
					scrub: true,
					markers: false
				},
				y: 50,
				autoAlpha: 0
			});
			gsap.to('.animateImg', {
				scrollTrigger: {
					trigger: '.animateImg',
					start: '-10% center',
					end: 'bottom center',
					scrub: true,
					markers: false
				},
				scale: 1.7,
				y: '20vw',
				skew: 90
			});
		});
	}); //close onmount
</script>

<svelte:head>
	<title>Apptitude</title>
</svelte:head>
<div class="grid grid-cols-1 justify-items-center gap-x-8 gap-y-8 px-5 lg:grid-cols-2 lg:px-20">
	<div
		class="animateLeft self-center text-center lg:ps-[10rem] xl:px-[4rem] min-[1921px]:pe-[5rem] min-[1921px]:ps-[7rem]"
	>
		<h1 class="animateTitle lg:text-5xl xl:text-7xl min-[1921px]:text-8xl">
			<span class="bg-gradient-to-r from-lime-300 to-yellow-300 bg-clip-text text-transparent"
				>Get good, make better decisions on digital products.</span
			>
		</h1>
	</div>
	<div class="animateRight lg:pe-20">
		<h2 class="animate-first-para pb-7">How this works</h2>
		<p class="animate-first-para z-10 pb-4 lg:text-xl">
			<TablerSquareRoundedCheckFilled
				class="me-3 inline fill-primary"
				width="1.5em"
				height="1.5em"
			/>Figure out the competencies you lack.
		</p>
		<p class="animate-first-para z-10 pb-4 lg:text-xl">
			<TablerSquareRoundedCheckFilled
				class="me-3 inline fill-primary"
				width="1.5em"
				height="1.5em"
			/>Use the resources here to learn.
		</p>
		<p class="animate-first-para z-10 pb-4 lg:text-xl">
			<TablerSquareRoundedCheckFilled
				class="me-3 inline fill-primary"
				width="1.5em"
				height="1.5em"
			/>Refer to quickstart guides to turbo charge your progress.
		</p>
		<p class="animate-first-para z-10 pb-4 lg:text-xl">
			<TablerSquareRoundedCheckFilled
				class="me-3 inline fill-primary"
				width="1.5em"
				height="1.5em"
			/>Git gud, make better decisions, get better outcomes.
		</p>
		<p class="animate-second-para z-20 pb-8 lg:text-xl">
			<TablerSquareRoundedCheckFilled
				class="me-3 inline fill-primary"
				width="1.5em"
				height="1.5em"
			/>Users get good products, ministry/taxpayers save money, decisionmakers are happy.
		</p>
		<p class="animate-cta mb-5 mt-1 space-x-2 lg:space-x-2 lg:text-xl">
			<a
				href="/learn"
				class="btn bg-lime-500 font-medium text-white hover:bg-gradient-to-r hover:from-lime-500 hover:via-teal-500 hover:to-emerald-600 active:from-lime-600 active:via-teal-600 active:to-emerald-700 lg:text-xl"
				>Start Learning <SvgChevronRight height="1.5rem" width="1.5rem" stroke="white" /></a
			>
			<a
				href="/cacheup"
				class="btn border border-primary bg-base-100 from-red-500 via-orange-500 to-pink-500 font-medium text-primary hover:bg-gradient-to-r hover:from-red-600 hover:via-orange-600 hover:to-pink-600 hover:text-white active:from-red-700 active:via-orange-700 active:to-pink-700 lg:text-xl"
				>Quickstart Guides</a
			>
		</p>
	</div>
	<!--<div class="avatar flex px-12 lg:col-span-2 lg:mt-12 lg:w-3/6">
		 <div class="animateImg rounded-full">
			<enhanced:img
				src={hero}
				alt="Hero"
				sizes="(min-width:1920px) 2560px, (min-width:1080px) 1080px, (min-width:768px) 400px"
			></enhanced:img>
		</div>
	</div>-->
</div>
<div class="animateImg mt-8 lg:mt-20">
	<enhanced:img
		src={hero}
		alt="Hero"
		sizes="(min-width:1440px) 2600px, (min-width:1080px) 2000px, (min-width:768px) 400px"
		class="object-contain"
	></enhanced:img>
</div>
