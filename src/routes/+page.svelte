<script>
	import TablerSquareRoundedPlusFilled from '$lib/assets/svg/TablerSquareRoundedPlusFilled.svelte';
	import SvgChevronRight from '$lib/assets/svg/TablerChevronRight.svelte';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import TablerHelpCircleFilled from '$lib/assets/svg/TablerHelpCircleFilled.svelte';
	import TablerChevronRight from '$lib/assets/svg/TablerChevronRight.svelte';
	import rocket1 from '$lib/assets/rocket_b.webp?enhanced&w=1200;600;400';
	import starBg from '$lib/assets/paul-volkmer-qVotvbsuM_c-unsplash.webp';
	import pixarEarth from '$lib/assets/pixar-earth.webp?enhanced&w=1200;600;400';
	import cloud1 from '$lib/assets/cloud1.webp?enhanced&w=700;500;200';
	import cloud2 from '$lib/assets/cloud2.webp?enhanced&w=700;500;200';
	import { elasticIn, elasticInOut } from 'svelte/easing';

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
			/*
			gsap.fromTo(
				'.animateImg',
				{ yPercent: 0, duration: 0, autoAlpha: 0 },
				{ yPercent: -15, duration: 1, autoAlpha: 1, ease: 'circ.out' },
				'<'
			);*/
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
				y: 100,
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
				y: -100,
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
				y: -100,
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
				y: -100,
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
				y: -100,
				autoAlpha: 0
			});
		});

		let t3 = gsap.timeline();

		gsap.from('.planet', {
			y: '15vh',
			delay: 0.5,
			duration: 1.5,
			opacity: 1
		});
		gsap.from(
			'.cloud1-div',
			{
				y: 100,
				x: 100,
				duration: 0.3,
				opacity: 1,
				scale: 0.5,
				easing: elasticIn
			},
			'<'
		);
		gsap.from(
			'.cloud2-div',
			{
				y: -100,
				x: -400,
				duration: 0.3,
				opacity: 1,
				scale: 0.3,
				easing: elasticInOut
			},
			'<'
		);
		gsap.to('.rocket1', {
			scrollTrigger: {
				trigger: '.animation-div',
				start: 'top top',
				scrub: true,
				markers: false
			},
			y: '-120vh',
			scale: 0.05,
			autoAlpha: 1
		});
		gsap.to('.text-div', {
			scrollTrigger: {
				trigger: '.text-div',
				start: 'top bottom',
				end: '=+500',
				scrub: true,
				markers: false
			},
			y: '10vh',
			x: '-30vw',
			scale: 2,
			autoAlpha: 0.6
		});
		gsap.to('.text-div2', {
			scrollTrigger: {
				trigger: '.text-div2',
				start: 'top bottom',
				end: '=+500',
				scrub: true,
				markers: false
			},
			y: '15vh',
			scale: 5,
			autoAlpha: 1
		});
		gsap.to('.text-div3', {
			scrollTrigger: {
				trigger: '.text-div2',
				start: 'top bottom',
				end: '=+500',
				scrub: true,
				markers: false
			},
			y: '15vh',
			scale: 5,
			autoAlpha: 1
		});
		gsap.to('.text-div4', {
			scrollTrigger: {
				trigger: '.text-div2',
				start: 'top bottom',
				end: '=+500',
				scrub: true,
				markers: false
			},
			y: '15vh',
			scale: 5,
			autoAlpha: 1
		});
		/*
			gsap.to('.rocket2', {
				scrollTrigger: {
					trigger: '.rocket2',
					start: '-10% center',
					end: 'bottom bottom',
					scrub: true,
					markers: false
				},
				y: -600,
				scale: 0.7
			});
			gsap.to('.rocket3', {
				scrollTrigger: {
					trigger: '.rocket3',
					start: 'top center',
					end: 'bottom bottom',
					scrub: true,
					markers: false
				},
				y: -400,
				scale: 2.5,
				x: 100
			}); */
	}); //close onmount
</script>

<div
	class="-mt-20 mb-[10rem] grid grid-cols-1 justify-items-center gap-x-8 gap-y-8 px-5 pt-20 pt-20 lg:grid-cols-2 lg:px-20"
>
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
	<div class="animateRight z-50 self-center justify-self-start lg:pe-20">
		<h2 class="animate-first-para group mb-7">Let Apptitude support you</h2>
		<p class="animate-first-para z-10 py-2 lg:text-xl">
			<TablerSquareRoundedPlusFilled
				class="me-3 inline fill-primary align-bottom"
				width="1.5em"
				height="1.5em"
			/>Find competencies, use resources, learn
		</p>
		<p class="animate-second-para z-10 py-2 lg:text-xl">
			<TablerSquareRoundedPlusFilled
				class="me-3 inline fill-primary align-bottom"
				width="1.5em"
				height="1.5em"
			/>Turbo charge your progress using quickstart guides,
		</p>
		<p class="animate-third-para z-10 mb-7 py-2 lg:text-xl">
			<TablerSquareRoundedPlusFilled
				class="me-3 inline fill-primary align-bottom"
				width="1.5em"
				height="1.5em"
			/>Git gud, make better decisions
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
</div>
<div
	class="animation-div relative"
	style="background-image: url({starBg}); background-size: cover; background-position: center; overflow: clip"
>
	<div></div>
	<div class="planet-div">
		<enhanced:img
			src={pixarEarth}
			class="planet"
			alt="Planet"
			sizes="(min-width:1400px) 1200px, (max-width:1399px) 600px, (max-width:768px) 400px"
		/>
	</div>
	<div class="cloud1-div">
		<enhanced:img
			src={cloud1}
			class="cloud"
			alt="Cloud"
			sizes="(min-width:1400px) 700px, (max-width:1399px) 500px, (max-width:768px) 200px"
		/>
	</div>
	<div class="cloud2-div">
		<enhanced:img
			src={cloud2}
			class="cloud"
			alt="Cloud"
			sizes="(min-width:1400px) 700px, (max-width:1399px) 500px, (max-width:768px) 200px"
		/>
	</div>
	<div class="rocket-div">
		<enhanced:img
			src={rocket1}
			class="rocket1"
			alt="Rocket"
			sizes="(min-width:1400px) 1200px, (max-width:1399px) 600px, (max-width:768px) 400px"
		/>
	</div>
	<div class="text-div text-3xl font-bold lg:text-6xl">
		<span class="text-white">Learning take-off in...</span>
	</div>
	<div class="text-div2 text-3xl font-bold lg:text-6xl">
		<span
			class="bg-gradient-to-r from-orange-400 via-red-300 to-pink-500 bg-clip-text text-transparent"
		>
			3. 2. 1. Launch!</span
		>
	</div>
	<div class="text-div2 text-3xl font-bold lg:text-6xl">
		<span
			class="bg-gradient-to-r from-orange-400 via-red-300 to-pink-500 bg-clip-text text-transparent"
		>
			3. 2. 1. Launch!</span
		>
	</div>
	<div class="text-div3 text-3xl font-bold lg:text-6xl">
		<span
			class="bg-gradient-to-r from-teal-400 via-green-300 to-teal-500 bg-clip-text text-transparent"
		>
			3. 2. 1. Launch!</span
		>
	</div>
	<div class="text-div4 text-3xl font-bold lg:text-6xl">
		<span
			class="bg-gradient-to-r from-red-400 via-pink-600 to-rose-700 bg-clip-text text-transparent"
		>
			3. 2. 1. Launch!</span
		>
	</div>
	<!--<div><img src={rocket1} class="rocket2" alt="rocket" /></div>
	<div><img src={rocket1} class="rocket3" alt="rocket" /></div>-->
</div>
<div class="grid w-full grid-cols-1 justify-items-center px-5 lg:px-20">
	<div class="ending-text mt-20">
		<h1
			class="mb-11 inline-block bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 text-transparent"
		>
			So what's this about?
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

<style>
	.animation-div {
		min-height: 200vh;
	}
	.planet-div {
		position: absolute;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.cloud1-div {
		position: absolute;
		top: 50%;
		left: 60%;
		transform: translate(-50%, -50%);
	}
	.cloud2-div {
		position: absolute;
		top: 50%;
		left: 35%;
		scale: 0.7;
		transform: translate(-50%, -50%);
	}
	.rocket-div {
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.text-div {
		position: absolute;
		top: 2%;
		left: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	.text-div2 {
		position: absolute;
		top: 8%;
		left: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
		z-index: 20;
	}
	.text-div3 {
		position: absolute;
		top: 8.2%;
		left: 50.3%;
		transform: translate(-50%, -50%);
		opacity: 0;
		z-index: 10;
	}
	.text-div4 {
		position: absolute;
		top: 7.9%;
		left: 49.9%;
		transform: translate(-50%, -50%);
		opacity: 0;
		z-index: 5;
	}

	@media only screen and (max-width: 600px) {
		.text-div .text-div2 {
			opacity: 1;
		}
	}
</style>
