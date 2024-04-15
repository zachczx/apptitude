<script>
	import rocketb from '$lib/assets/rocket_b.webp?enhanced&w=1200;800;400';
	import rocketc from '$lib/assets/rocket_c.webp?enhanced&w=1500;800;400';

	import pixarEarth from '$lib/assets/pixar-earth.webp?enhanced&w=1200;600;400';
	import cloud1 from '$lib/assets/cloud1.webp?enhanced&w=700;500;200';
	import cloud2 from '$lib/assets/cloud2.webp?enhanced&w=700;500;200';
	import cloud3 from '$lib/assets/cloud3.webp?enhanced&w=700;500;200';
	import starBlackBg from '$lib/assets/star-black-bg.webp';

	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
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
				y: '-15vh',
			});
			gsap.from('.tagline-intro', {
				autoAlpha: 1,
			});
			gsap.from('.tagline-green', {
				autoAlpha: 0,
			});
			gsap.from('.tagline-green2', {
				autoAlpha: 0,
			});
			gsap.from('.tagline-darkgreen', {
				autoAlpha: 0,
			});

			gsap.to('.planet', {
				scrollTrigger: {
					trigger: '.planet',
					start: 'top center',
					scrub: true,
					markers: false,
				},
				y: '15vh',
				rotation: 2,
				delay: 0.5,
				duration: 3,
			});
			gsap.to('.cloud1-div', {
				scrollTrigger: {
					trigger: '.planet',
					start: 'top center',
					scrub: true,
					markers: false,
				},
				y: '-20vh',
				x: '-20vw',
				opacity: 1,
			});
			gsap.to('.cloud2-div', {
				scrollTrigger: {
					trigger: '.planet',
					start: 'top center',
					scrub: true,
					markers: false,
				},
				y: '30vh',
				x: '-20vw',
				opacity: 1,
			});
			gsap.to('.cloud3-div', {
				scrollTrigger: {
					trigger: '.planet',
					start: 'top center',
					scrub: true,
					markers: false,
				},
				y: 0.1,
				x: 0.1,
				opacity: 1,
			});
			gsap.to('.tagline-intro', {
				scrollTrigger: {
					trigger: '.tagline-intro',
					start: 'top bottom',
					end: '=+500',
					scrub: true,
					markers: false,
				},
				y: '10vh',
				x: '-30vw',
				scale: 2,
				autoAlpha: 1,
			});
			gsap.to('.tagline-green2', {
				scrollTrigger: {
					trigger: '.tagline-green2',
					start: 'top bottom',
					end: '=+500',
					scrub: true,
					markers: false,
				},
				y: '15vh',
				scale: 5,
				autoAlpha: 0.9,
			});
			gsap.to('.tagline-green', {
				scrollTrigger: {
					trigger: '.tagline-green2',
					start: 'top bottom',
					end: '=+500',
					scrub: true,
					markers: false,
				},
				y: '15vh',
				scale: 5,
				autoAlpha: 0.9,
			});
			gsap.to('.tagline-darkgreen', {
				scrollTrigger: {
					trigger: '.tagline-green2',
					start: 'top bottom',
					end: '=+500',
					scrub: true,
					markers: false,
				},
				y: '15vh',
				scale: 5,
				autoAlpha: 0.9,
			});
		});

		let t4 = gsap.timeline();
		t4.to('.rocketb', {
			scrollTrigger: {
				trigger: '.animation-div',
				start: 'top top',
				scrub: true,
				markers: false,
			},
			y: '-120vh',
			scale: 0.05,
			autoAlpha: 1,
		});
		t4.to('.rocketc', {
			scrollTrigger: {
				trigger: '.animation-div',
				start: 'top center',
				scrub: true,
				markers: false,
			},
			y: '-60vh',
			x: '-80vw',
			rotation: '-0.8rad',
			scale: 13,
			autoAlpha: 1,
		});
	}); //close onmount
</script>

<div
	class="animation-div relative overflow-x-clip"
	style="background: url({starBlackBg}), linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)); background-size: cover; background-position: center; background-blend-mode: overlay;">
	<div class="planet-div">
		<enhanced:img
			src={pixarEarth}
			class="planet"
			alt="Planet"
			fetchpriority="low"
			sizes="(min-width:1400px) 1200px, (max-width:1399px) 600px, (max-width:768px) 400px" />
	</div>
	<div class="cloud1-div">
		<enhanced:img
			src={cloud1}
			class="cloud"
			alt="Cloud"
			fetchpriority="low"
			sizes="(min-width:1400px) 700px, (max-width:1399px) 500px, (max-width:768px) 200px" />
	</div>
	<div class="cloud2-div">
		<enhanced:img
			src={cloud2}
			class="cloud"
			alt="Cloud"
			fetchpriority="low"
			sizes="(min-width:1400px) 700px, (max-width:1399px) 500px, (max-width:768px) 200px" />
	</div>
	<div class="cloud3-div">
		<enhanced:img
			src={cloud3}
			class="cloud"
			alt="Cloud"
			fetchpriority="low"
			sizes="(min-width:1400px) 700px, (max-width:1399px) 500px, (max-width:768px) 200px" />
	</div>
	<div class="rocket-b-div">
		<enhanced:img
			src={rocketb}
			class="rocketb"
			alt="Rocket"
			fetchpriority="low"
			sizes="(min-width:1400px) 1200px, (max-width:1399px) 800px, (max-width:768px) 400px" />
	</div>
	<div class="rocket-c-div">
		<enhanced:img
			src={rocketc}
			class="rocketc"
			alt="Rocket"
			fetchpriority="low"
			sizes="(min-width:1400px) 1500px, (max-width:1399px) 800px, (max-width:768px) 400px" />
	</div>
	<div class="tagline-intro popped text-4xl font-bold lg:text-5xl">
		<span class="text-yellow-300">Launch your learning in...</span>
	</div>

	<div class="tagline-green2 popped text-4xl font-bold lg:text-6xl">
		<span class="bg-gradient-to-r from-lime-400 to-lime-400 bg-clip-text text-transparent">
			3.. 2.. 1.. Go!</span>
	</div>
	<div class="tagline-green popped text-4xl font-bold lg:text-6xl">
		<span
			class="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-200 bg-clip-text text-transparent">
			3.. 2.. 1.. Go!</span>
	</div>
	<div class="tagline-darkgreen popped text-4xl font-bold lg:text-6xl">
		<span
			class="bg-gradient-to-r from-green-600 via-lime-600 to-emerald-600 bg-clip-text text-transparent">
			3.. 2.. 1.. Go!</span>
	</div>
</div>
<div class="h-[40rem] bg-black"></div>

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
</style>
