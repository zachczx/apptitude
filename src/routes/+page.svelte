<script>
	import TablerSquareRoundedPlusFilled from '$lib/assets/svg/TablerSquareRoundedPlusFilled.svelte';
	import SvgChevronRight from '$lib/assets/svg/TablerChevronRight.svelte';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import TablerHelpCircleFilled from '$lib/assets/svg/TablerHelpCircleFilled.svelte';
	import TablerChevronRight from '$lib/assets/svg/TablerChevronRight.svelte';
	import TablerQuotes from '$lib/assets/svg/TablerQuotes.svelte';
	import rocketb from '$lib/assets/rocket_b.webp?enhanced&w=1200;800;400';
	import rocketc from '$lib/assets/rocket_c.webp?enhanced&w=1500;800;400';
	import oopsBg from '$lib/assets/oops-bg.webp?enhanced&w=2060;1536;1280;1024';
	import oops2Bg from '$lib/assets/oops2-bg.webp?enhanced&w=2060;1536;1280;1024';
	import pixarEarth from '$lib/assets/pixar-earth.webp?enhanced&w=1200;600;400';
	import cloud1 from '$lib/assets/cloud1.webp?enhanced&w=700;500;200';
	import cloud2 from '$lib/assets/cloud2.webp?enhanced&w=700;500;200';
	import cloud3 from '$lib/assets/cloud3.webp?enhanced&w=700;500;200';
	import bellCurveMeme from '$lib/assets/product-bell-curve.webp';
	import oops from '$lib/assets/oops.webp?enhanced&w=600;300';
	import oops2 from '$lib/assets/oops2.webp?enhanced&w=600;300';
	import starBlackBg from '$lib/assets/star-black-bg.webp';

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
		});*/

		let t3 = gsap.matchMedia();
		t3.add('(min-width: 1028px)', () => {
			gsap.from('.planet', {
				y: '-15vh'
			});
			gsap.from('.tagline-intro', {
				autoAlpha: 0
			});
			gsap.from('.tagline-green', {
				autoAlpha: 0
			});
			gsap.from('.tagline-green2', {
				autoAlpha: 0
			});
			gsap.from('.tagline-darkgreen', {
				autoAlpha: 0
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
				y: '-20vh',
				x: '-20vw',
				opacity: 1
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
				opacity: 1
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
				opacity: 1
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
		});

		let t4 = gsap.timeline();
		t4.to('.rocketb', {
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
		t4.to('.rocketc', {
			scrollTrigger: {
				trigger: '.animation-div',
				start: 'top center',
				scrub: true,
				markers: false
			},
			y: '-60vh',
			x: '-80vw',
			rotation: '-0.8rad',
			scale: 13,
			autoAlpha: 1
		});
	}); //close onmount
</script>

<div class="hero grid min-h-dvh grid-cols-1 justify-items-center pb-12 lg:pb-[8rem] xl:grid-cols-2">
	<figure class="overlay">
		<enhanced:img
			src={oopsBg}
			alt="Hero"
			class="hero-img"
			sizes="(min-width:2560px) 2060px, (min-width:1920px) 1536px, (min-width:1600px) 1280px, (min-width:1280px) 1024px"
		/>
	</figure>
	<div
		class="mx-3 self-center justify-self-center rounded-2xl px-3 pt-3 lg:z-10 lg:mx-12 lg:mt-12 xl:bg-base-300 xl:p-8 xl:shadow-xl xl:shadow-black"
	>
		<div class="avatar mb-8 flex justify-center px-4 text-center xl:hidden">
			<div class="mask mask-squircle">
				<enhanced:img
					src={oops}
					alt="Oops"
					class="relative"
					sizes="(min-width:1000px) 600px, (min-width:768px) 300px"
				/>
			</div>
		</div>
		<h1 class="mb-12 text-center text-5xl lg:text-6xl xl:text-7xl min-[1921px]:text-9xl">
			<span
				class="bg-gradient-to-r from-lime-300 via-green-400 to-teal-100 bg-clip-text text-transparent"
				>Build digital dreams.<br />Not nightmares.</span
			>
		</h1>
		<p class="mb-7 py-2 text-lg lg:text-xl">
			Apptitude wants to make product and tech-related knowledge more accessible to civil servants.
			Do things right and do the right things, instead of creating more nightmarish products.
		</p>
		<div class="join join-vertical mb-12 flex justify-center lg:join-horizontal lg:mb-8">
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

		<div class="card bg-base-300 text-base-content lg:bg-base-100">
			<div class="card-body">
				<h3 class="mb-5 text-xl lg:text-3xl">
					Product owners don't know they're part of the problem
				</h3>
				<p class="text-lg lg:text-xl">
					If these sound like you, you might be contributing to bad decisions & products:
				</p>
				<div class="grid grid-cols-1 gap-2 lg:grid-cols-2 xl:grid-cols-3">
					<div class="card grid border-2 border-base-content bg-base-300 shadow-xl lg:bg-base-100">
						<div class="card-body">
							<TablerQuotes
								class="absolute bottom-0 right-0 stroke-base-content"
								width="3em"
								height="3em"
							/>IDK what engineers are saying.
						</div>
					</div>
					<div class="card grid border-2 border-base-content bg-base-300 shadow-xl lg:bg-base-100">
						<div class="card-body">
							<TablerQuotes
								class="absolute bottom-0 right-0 stroke-base-content"
								width="3em"
								height="3em"
							/>Let's spend allocated $$, IDC about saving it.
						</div>
					</div>
					<div class="card grid border-2 border-base-content bg-base-300 shadow-xl lg:bg-base-100">
						<div class="card-body">
							<TablerQuotes
								class="absolute bottom-0 right-0 stroke-base-content"
								width="3em"
								height="3em"
							/>Engineers and users should just suck it up.
						</div>
					</div>
					<div class="card grid border-2 border-base-content bg-base-300 shadow-xl lg:bg-base-100">
						<div class="card-body">
							<TablerQuotes
								class="absolute bottom-0 right-0 stroke-base-content"
								width="3em"
								height="3em"
							/>My system is good, I just need more $$ for it.
						</div>
					</div>
					<div class="card grid border-2 border-base-content bg-base-300 shadow-xl lg:bg-base-100">
						<div class="card-body">
							<TablerQuotes
								class="absolute bottom-0 right-0 stroke-base-content"
								width="3em"
								height="3em"
							/>Stop asking and just do what my Dir said.
						</div>
					</div>
					<div class="card grid border-2 border-base-content bg-base-300 shadow-xl lg:bg-base-100">
						<div class="card-body">
							<TablerQuotes
								class="absolute bottom-0 right-0 stroke-base-content"
								width="3em"
								height="3em"
							/>New SOR = existing + every possible rqmt.
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="card mt-5 bg-base-300 text-base-content lg:bg-base-100">
			<div class="card-body">
				<h3 class="mb-5 text-xl lg:text-3xl">Let's change this.</h3>
				<p class="text-lg lg:text-xl">
					Supercharge your learning to make better product decisions, give users a good experience,
					save taxpayers money.
				</p>
			</div>
		</div>
	</div>
</div>

<div
	class="animation-div relative overflow-x-clip"
	style="background: url({starBlackBg}), linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)); background-size: cover; background-position: center; background-blend-mode: overlay;"
>
	<!--<div class="animation-div relative" style="background-color: #07090a">-->
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
			sizes="(min-width:1400px) 1200px, (max-width:1399px) 800px, (max-width:768px) 400px"
		/>
	</div>
	<div class="rocket-c-div">
		<enhanced:img
			src={rocketc}
			class="rocketc"
			alt="Rocket"
			sizes="(min-width:1400px) 1500px, (max-width:1399px) 800px, (max-width:768px) 400px"
		/>
	</div>
	<div class="tagline-intro popped text-2xl font-bold lg:text-5xl">
		<span class="text-slate-100">Launch your learning in...</span>
	</div>

	<div class="tagline-green2 popped text-3xl font-bold lg:text-6xl">
		<span
			class="bg-gradient-to-r from-green-400 via-emerald-300 to-lime-400 bg-clip-text text-transparent"
		>
			3.. 2.. 1.. Go!</span
		>
	</div>
	<div class="tagline-green popped text-3xl font-bold lg:text-6xl">
		<span
			class="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-200 bg-clip-text text-transparent"
		>
			3.. 2.. 1.. Go!</span
		>
	</div>
	<div class="tagline-darkgreen popped text-3xl font-bold lg:text-6xl">
		<span
			class="bg-gradient-to-r from-green-600 via-lime-600 to-emerald-600 bg-clip-text text-transparent"
		>
			3.. 2.. 1.. Go!</span
		>
	</div>
</div>
<div
	class="no-bg grid min-h-dvh w-full grid-cols-1 justify-items-center gap-x-16 px-5 pb-5 pt-20 lg:px-20 xl:relative xl:grid-cols-2"
>
	<figure class="overlay-reverse">
		<enhanced:img
			src={oops2Bg}
			alt="Hero"
			class="ending-img"
			sizes="(min-width:2560px) 2060px, (min-width:1920px) 1536px, (min-width:1600px) 1280px, (min-width:1280px) 1024px"
		/>
	</figure>
	<div class="avatar self-center self-center xl:hidden">
		<div class="mask mask-squircle">
			<enhanced:img
				src={oops2}
				alt="Oops"
				sizes="(min-width:1600px) 600px, (max-width:768px) 300px"
			/>
		</div>
	</div>
	<div
		class="ending-text z-30 mt-4 self-center rounded-2xl xl:bg-base-300 xl:p-8 xl:shadow-2xl xl:shadow-slate-800"
	>
		<h1
			class="mb-11 inline-block bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 text-transparent"
		>
			What's Apptitude?
		</h1>
		<p class="mb-7 text-xl">
			I wrote Apptitude to learn Svelte and at the same time figure a way to help my teammates know
			what competencies to learn, easily grab resources, and quickly use the knowledge to call out
			bad tech outcomes.
		</p>
		<p class="mb-7 text-xl">
			Apptitude is an attempt to start more dissatisfaction and rebel against poor product outcomes
			and groupthink. My hypothesis is that people need the knowledge and safety to critique,
			otherwise it's always safer to defer to people in high positions of power.
		</p>
		<p class="mb-7 text-xl">
			Occam's razor applies - the simplest solution is almost always the best. But that often
			doesn't get chosen in the public service. Like this meme here actually. Sometimes it's
			entrenched mindsets, but often people who make assessments don't know what the issue is and
			what's standard out there.
		</p>
		<img src={bellCurveMeme} class="mb-7" alt="Geniuses and noobs" />
		<p class="mb-3 text-xl">
			Hopefully we can all shift to the right (or left is fine too) parts of the curve.
		</p>
	</div>
</div>

<style>
	/*	@media (max-width: 1280px) {
		.no-bg {
			background: #2a303c !important;
		}
		.hero-img {
			opacity: 0;
		}
	}*/

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
			background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 20%);
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
		top: 65%;
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
		top: 99%;
		left: 95%;
		transform: translate(-50%, -50%);
		z-index: 3;
	}
	.tagline-intro {
		position: absolute;
		top: 12%;
		left: 60%;
		transform: translate(-50%, -50%);
	}
	.tagline-green2 {
		position: absolute;
		top: 18%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 20;
	}
	.tagline-green {
		position: absolute;
		top: 18.2%;
		left: 50.3%;
		transform: translate(-50%, -50%);
		z-index: 10;
	}
	.tagline-darkgreen {
		position: absolute;
		top: 17.8%;
		left: 49.8%;
		transform: translate(-50%, -50%);
		z-index: 5;
	}
	/*	* {
		outline: 1px solid #f00 !important;
	}*/
</style>
