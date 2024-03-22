<script>
	import hero from '$lib/assets/kari-shea-1SAnrIxw5OY-unsplash.avif?enhanced&w=2600;2000;400';
	import TablerSquareRoundedPlusFilled from '$lib/assets/svg/TablerSquareRoundedPlusFilled.svelte';
	import SvgChevronRight from '$lib/assets/svg/TablerChevronRight.svelte';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import TablerHelpCircleFilled from '$lib/assets/svg/TablerHelpCircleFilled.svelte';
	import TablerChevronRight from '$lib/assets/svg/TablerChevronRight.svelte';
	import hero2 from '$lib/assets/marina-bay-sands-hotel-singapore-night-life-city-lights-6000x4000-2665.webp?enhanced&w=2600;2000;400';
	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		let t1 = gsap.matchMedia();
		t1.add('(min-width: 1028px)', () => {
			gsap.fromTo(
				'.animateLeft',
				{ xPercent: -50, duration: 0, autoAlpha: 0 },
				{ xPercent: 0, duration: 1, autoAlpha: 1, ease: 'sine.out' }
			);
			gsap.fromTo(
				'.animateRight',
				{ xPercent: 50, duration: 0, autoAlpha: 0 },
				{ xPercent: 0, duration: 1, autoAlpha: 1, ease: 'sine.out' },
				'<'
			);
			gsap.fromTo(
				'.animateImg',
				{ yPercent: 0, duration: 0, autoAlpha: 0 },
				{ yPercent: -15, duration: 1, autoAlpha: 1, ease: 'circ.out' },
				'<'
			);
		});

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
				y: 1000,
				autoAlpha: 0
			});
			gsap.to('.animate-first-para', {
				scrollTrigger: {
					trigger: '.animate-first-para',
					start: 'top top',
					end: '+=200',
					scrub: true,
					markers: false
				},
				y: 50,
				autoAlpha: 0
			});
			gsap.to('.animate-second-para', {
				scrollTrigger: {
					trigger: '.animate-second-para',
					start: 'top top',
					end: '+=200',
					scrub: true,
					markers: false
				},
				y: 50,
				autoAlpha: 0
			});
			gsap.to('.animate-third-para', {
				scrollTrigger: {
					trigger: '.animate-third-para',
					start: 'top top',
					end: '+=200',
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
					end: '+=200',
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
				y: '-20vw'
			});
		});
	}); //close onmount
</script>

<div class="grid grid-cols-1 justify-items-center gap-x-8 gap-y-8 px-5 lg:grid-cols-2 lg:px-20">
	<div
		class="animateLeft self-center text-center lg:ps-[10rem] xl:px-[4rem] min-[1921px]:pe-[5rem] min-[1921px]:ps-[7rem]"
	>
		<h1 class="animateTitle lg:text-5xl xl:text-7xl min-[1921px]:text-8xl">
			<span
				class="bg-gradient-to-r from-lime-300 via-green-400 to-teal-300 bg-clip-text text-transparent"
				>Learn and better manage public digital products.</span
			>
		</h1>
	</div>
	<div class="animateRight z-50 justify-self-start lg:pe-20">
		<h2 class="animate-first-para group mb-7">How Apptitude helps you</h2>
		<p class="animate-first-para z-10 py-2 lg:text-xl">
			<TablerSquareRoundedPlusFilled
				class="me-3 inline fill-primary align-bottom"
				width="1.5em"
				height="1.5em"
			/>Find out competencies you need to have
		</p>
		<p class="animate-second-para z-10 py-2 lg:text-xl">
			<TablerSquareRoundedPlusFilled
				class="me-3 inline fill-primary align-bottom"
				width="1.5em"
				height="1.5em"
			/>Use resources here, do self learning
		</p>
		<p class="animate-second-para z-10 py-2 lg:text-xl">
			<TablerSquareRoundedPlusFilled
				class="me-3 inline fill-primary align-bottom"
				width="1.5em"
				height="1.5em"
			/>Turbo charge your progress using quickstart guides,
		</p>
		<p class="animate-third-para z-10 py-2 lg:text-xl">
			<TablerSquareRoundedPlusFilled
				class="me-3 inline fill-primary align-bottom"
				width="1.5em"
				height="1.5em"
			/>Git gud, make better decisions
		</p>
		<p class="animate-third-para z-20 pb-7 pt-2 lg:text-xl">
			<TablerSquareRoundedPlusFilled
				class="me-3 inline fill-primary align-bottom"
				width="1.5em"
				height="1.5em"
			/>Good + cheap product = happy (bosses + taxpayers)
		</p>
		<p class="animate-cta mb-5 mt-1 space-x-2 lg:space-x-2 lg:text-xl">
			<a
				href="/learn"
				class="btn bg-lime-600 font-medium text-white hover:bg-gradient-to-r hover:from-lime-500 hover:via-teal-500 hover:to-emerald-600 active:from-lime-600 active:via-teal-600 active:to-emerald-700 lg:text-xl"
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
<div class="animateImg mt-8">
	<enhanced:img
		src={hero2}
		alt="Hero"
		sizes="(min-width:1440px) 2600px, (min-width:1080px) 2000px, (min-width:768px) 400px"
		class="object-contain"
	></enhanced:img>
</div>
<div class="grid w-full grid-cols-1 justify-items-center px-5 lg:px-20">
	<div>
		<h1
			class="mb-11 inline-block bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 text-transparent"
		>
			What's Apptitude?
		</h1>
		<h2 class="mb-7">TL;DR</h2>
		<p class="mb-7">
			I made Apptitude to help my teammates know what competencies to learn, find out where to learn
			them, and quickly get started to scrutinize tech stuff that I like to.
		</p>
		<h2 class="mb-7">A longer explanation?</h2>
		<p class="mb-7">
			Apptitude is my attempt to start a more dissatisfied culture/attitude to tech products, by
			opening up the veil and giving people the mental tools/mindset to challenge bad plans and
			decisions.
		</p>
		<p class="mb-7">
			In my past job as a "tech policy officer" I came to realize WOG tech outcomes are poor.
			Looking around, many of Govt's tech products don't make sense, especially for the amount of
			money we spend <a
				href="https://www.tech.gov.sg/media/media-releases/2023-05-24-government-projected-to-spend-on-ict-in-fy23"
				class="text-primary">(here)</a
			>. Products are slow, laggy, hard to use, super expensive.
		</p>
		<p class="mb-7">
			Reflecting on my own inadequacies and what really capable people thought, I understood that
			this was because people simply didn't know better. A competency gap. Like a third eye, I
			couldn't unsee this competency gap. I saw it everywhere, myself included. I can never finish
			learning, there's too much to pick up and new things keep coming up. But I try my best and
			supplement those with what I hear from good people around, the good and bad I saw.
		</p>
	</div>
</div>
