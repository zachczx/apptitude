<script>
	import TablerSquareRoundedPlusFilled from '$lib/assets/svg/TablerSquareRoundedPlusFilled.svelte';
	import SvgChevronRight from '$lib/assets/svg/TablerChevronRight.svelte';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import TablerHelpCircleFilled from '$lib/assets/svg/TablerHelpCircleFilled.svelte';
	import TablerChevronRight from '$lib/assets/svg/TablerChevronRight.svelte';
	import rocketb from '$lib/assets/rocket_b.webp?enhanced&w=1200;600;400';
	import rocketc from '$lib/assets/rocket_c.webp?enhanced&w=1200;600;400';
	import starBg from '$lib/assets/paul-volkmer-qVotvbsuM_c-unsplash.webp';
	import pixarEarth from '$lib/assets/pixar-earth.webp?enhanced&w=1200;600;400';
	import cloud1 from '$lib/assets/cloud1.webp?enhanced&w=700;500;200';
	import cloud2 from '$lib/assets/cloud2.webp?enhanced&w=700;500;200';
	import cloud3 from '$lib/assets/cloud3.webp?enhanced&w=700;500;200';
	import bellCurveMeme from '$lib/assets/product-bell-curve.webp';
	import { elasticIn, elasticInOut } from 'svelte/easing';
	import oops from '$lib/assets/oops.webp?enhanced&w=1600;800;400';
	import oops2 from '$lib/assets/oops2.webp?enhanced&w=1600;800;400';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		/*
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
		});

		let t2 = gsap.matchMedia();
		t2.add('(min-width: 1028px)', () => {
			gsap.to('.animateTitle', {
				scrollTrigger: {
					trigger: '.animateTitle',
					start: 'center top',
					end: '110% top',
					scrub: true,
					markers: false
				},
				y: -50,
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
				y: -50,
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
				y: -50,
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
				y: -50,
				autoAlpha: 0
			});
		});*/

		let t3 = gsap.timeline();

		gsap.from('.planet', {
			y: '-15vh'
		});
		gsap.to('.planet', {
			scrollTrigger: {
				trigger: '.planet',
				start: 'top center',
				scrub: true,
				markers: false
			},
			y: '15vh',
			rotation: 2,
			delay: 0.5,
			duration: 3
		});
		gsap.to('.cloud1-div', {
			scrollTrigger: {
				trigger: '.planet',
				start: 'top center',
				scrub: true,
				markers: false
			},
			y: '-10vh',
			x: '-30vw',
			opacity: 1,
			easing: elasticIn
		});
		gsap.to('.cloud2-div', {
			scrollTrigger: {
				trigger: '.planet',
				start: 'top center',
				scrub: true,
				markers: false
			},
			y: '30vh',
			x: '-20vw',
			opacity: 1,
			easing: elasticIn
		});
		gsap.to('.cloud3-div', {
			scrollTrigger: {
				trigger: '.planet',
				start: 'top center',
				scrub: true,
				markers: false
			},
			y: 0.1,
			x: 0.1,
			opacity: 1,
			easing: elasticIn
		});
		gsap.to('.rocketb', {
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
		gsap.to('.rocketc', {
			scrollTrigger: {
				trigger: '.animation-div',
				start: 'top center',
				scrub: true,
				markers: true
			},
			y: '-120vh',
			x: '-30vw',
			rotation: '-0.8rad',
			scale: 10,
			autoAlpha: 1
		});
		gsap.to('.tagline-intro', {
			scrollTrigger: {
				trigger: '.tagline-intro',
				start: 'top bottom',
				end: '=+500',
				scrub: true,
				markers: false
			},
			y: '10vh',
			x: '-30vw',
			scale: 2,
			autoAlpha: 0.8
		});
		gsap.to('.tagline-green2', {
			scrollTrigger: {
				trigger: '.tagline-green2',
				start: 'top bottom',
				end: '=+500',
				scrub: true,
				markers: false
			},
			y: '15vh',
			scale: 5,
			autoAlpha: 0.9
		});
		gsap.to('.tagline-green', {
			scrollTrigger: {
				trigger: '.tagline-green2',
				start: 'top bottom',
				end: '=+500',
				scrub: true,
				markers: false
			},
			y: '15vh',
			scale: 5,
			autoAlpha: 0.9
		});
		gsap.to('.tagline-darkgreen', {
			scrollTrigger: {
				trigger: '.tagline-green2',
				start: 'top bottom',
				end: '=+500',
				scrub: true,
				markers: false
			},
			y: '15vh',
			scale: 5,
			autoAlpha: 0.9
		});
	}); //close onmount
</script>

<div
	class="-mt-20 grid min-h-dvh grid-cols-1 justify-items-center gap-x-8 gap-y-8 px-5 pb-[8rem] pt-20 md:grid-cols-2 lg:px-10"
>
	<div class="avatar self-center text-center">
		<div class="mask mask-squircle">
			<enhanced:img
				src={oops}
				alt="Oops"
				sizes="(min-width:4000px) 1600px, (max-width:1600px) 800px, (max-width:768px) 400px"
			/>
		</div>
	</div>
	<div class="self-center justify-self-center lg:ps-16">
		<h1 class=" mb-12 text-5xl lg:text-6xl xl:text-7xl min-[1921px]:text-9xl">
			<span
				class="bg-gradient-to-r from-lime-300 via-green-400 to-teal-300 bg-clip-text text-transparent"
				>Make digital delights, not disasters.</span
			>
		</h1>
		<p class="mb-1 py-2 text-lg lg:text-2xl">
			Digital products in the public sector can and should do better. Get access to resources, learn
			what it takes to make good digital products that citizens will enjoy using.
		</p>
		<p class="mb-7 py-2 text-lg lg:text-2xl">
			Apptitude tries to remedy the slow, unusable, expensive and oft-delayed Govt systems and apps
			we see around us, at the root cause.
		</p>
		<div class="join join-vertical mb-5 lg:join-horizontal">
			<a
				href="/learn"
				class="btn join-item border border-primary bg-lime-600 font-medium text-white hover:border hover:border-primary hover:bg-gradient-to-r hover:from-lime-500 hover:via-teal-500 hover:to-emerald-600 active:from-lime-600 active:via-teal-600 active:to-emerald-700 lg:text-2xl"
				>Learn Basics <SvgChevronRight height="1.7rem" width="1.7rem" stroke="white" /></a
			>
			<a
				href="/cacheup"
				class="btn join-item border border-primary bg-base-100 from-red-500 via-orange-500 to-pink-500 font-medium text-primary hover:border hover:border-primary hover:bg-gradient-to-r hover:from-red-600 hover:via-orange-600 hover:to-pink-600 hover:text-white active:from-red-700 active:via-orange-700 active:to-pink-700 lg:text-2xl"
				>Quickstart Guides</a
			>
		</div>
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
	<div class="cloud3-div">
		<enhanced:img
			src={cloud3}
			class="cloud"
			alt="Cloud"
			sizes="(min-width:1400px) 700px, (max-width:1399px) 500px, (max-width:768px) 200px"
		/>
	</div>
	<div class="rocket-b-div">
		<enhanced:img
			src={rocketb}
			class="rocketb"
			alt="Rocket"
			sizes="(min-width:1400px) 1200px, (max-width:1399px) 600px, (max-width:768px) 400px"
		/>
	</div>
	<div class="rocket-c-div">
		<enhanced:img
			src={rocketc}
			class="rocketc"
			alt="Rocket"
			sizes="(min-width:1400px) 1200px, (max-width:1399px) 600px, (max-width:768px) 400px"
		/>
	</div>
	<div class="tagline-intro text-3xl font-bold lg:text-6xl">
		<span class="text-white">Learning take-off in...</span>
	</div>

	<div class="tagline-green2 text-3xl font-bold lg:text-6xl">
		<span
			class="bg-gradient-to-r from-green-400 via-emerald-300 to-lime-400 bg-clip-text text-transparent"
		>
			3. 2. 1. Launch!</span
		>
	</div>
	<div class="tagline-green text-3xl font-bold lg:text-6xl">
		<span
			class="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-200 bg-clip-text text-transparent"
		>
			3. 2. 1. Launch!</span
		>
	</div>
	<div class="tagline-darkgreen text-3xl font-bold lg:text-6xl">
		<span
			class="bg-gradient-to-r from-green-600 via-lime-600 to-emerald-600 bg-clip-text text-transparent"
		>
			3. 2. 1. Launch!</span
		>
	</div>
</div>
<div
	class="mt-16 grid w-full grid-cols-1 justify-items-center gap-x-16 px-5 lg:grid-cols-2 lg:px-20"
>
	<div class="avatar self-center self-center">
		<div class="mask mask-squircle">
			<enhanced:img
				src={oops2}
				alt="Oops"
				sizes="(min-width:4000px) 1600px, (max-width:1600px) 800px, (max-width:768px) 400px"
			/>
		</div>
	</div>
	<div class="ending-text mt-4 self-center">
		<h1
			class="mb-11 inline-block bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 text-transparent"
		>
			What's Apptitude?
		</h1>
		<p class="mb-7 text-xl">
			I made Apptitude to help my teammates know what competencies to learn, find out where to learn
			them, and quickly get started to scrutinize tech stuff that I like to.
		</p>
		<p class="mb-7 text-xl">
			Apptitude is my attempt to start a more dissatisfied culture/attitude to tech products, by
			opening up the veil and giving people the mental tools/mindset to challenge bad plans and
			decisions.
		</p>
		<p class="mb-7 text-xl">
			Good decisions are mostly common sense, but what's intuitive doesn't get chosen in the public
			service. Like this meme here actually.
		</p>
		<img src={bellCurveMeme} class="mb-7" alt="Geniuses and noobs" />
		<p class="mb-7 text-xl">
			Hopefully with a better idea of competencies and better choices, we can all shift to the left
			or right parts of the curve.
		</p>
	</div>
</div>

<style>
	.animation-div {
		min-height: 200vh;
	}
	.planet-div {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 2;
	}
	.cloud1-div {
		position: absolute;
		top: 60%;
		left: 80%;
		transform: translate(-50%, -50%);
		z-index: 3;
	}
	.cloud2-div {
		position: absolute;
		top: 30%;
		left: 75%;
		transform: translate(-50%, -50%);
		z-index: 1;
	}
	.cloud3-div {
		position: absolute;
		top: 50%;
		left: 15%;
		scale: 0.7;
		transform: translate(-50%, -50%);
		z-index: 3;
	}
	.rocket-b-div {
		position: absolute;
		top: 110%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 3;
	}
	.rocket-c-div {
		position: absolute;
		top: 110%;
		left: 95%;
		transform: translate(-50%, -50%);
		z-index: 3;
	}
	.tagline-intro {
		position: absolute;
		top: 12%;
		left: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	.tagline-green2 {
		position: absolute;
		top: 18%;
		left: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
		z-index: 20;
	}
	.tagline-green {
		position: absolute;
		top: 18.2%;
		left: 50.3%;
		transform: translate(-50%, -50%);
		opacity: 0;
		z-index: 10;
	}
	.tagline-darkgreen {
		position: absolute;
		top: 17.8%;
		left: 49.8%;
		transform: translate(-50%, -50%);
		opacity: 0;
		z-index: 5;
	}
</style>
