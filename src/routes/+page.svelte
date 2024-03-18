<script>
	import hero from '$lib/assets/kari-shea-1SAnrIxw5OY-unsplash.avif?enhanced&w=2600;2000;400';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

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
					start: 'top center',
					end: 'bottom center',
					scrub: true,
					markers: false
				},
				scale: 1.5,
				y: '20vw'
			});
		});
		/*
		gsap.to(".epilogue", {autoAlpha: 0})
		gsap.to(".epilogue2", {autoAlpha: 0})
		gsap.to(".epilogue3", {autoAlpha: 0})
		gsap.to(".epilogue", {
			scrollTrigger: {
					trigger: ".epilogue",
					start: 'top bottom',
					end: 'bottom 20%',
					scrub: true,
					markers: false,
				},
			scale:1.5,
			y: "10vw",
			autoAlpha: 1,
			},
		)
		gsap.to(".epilogue2", {
			scrollTrigger: {
					trigger: ".epilogue2",
					start: 'top bottom',
					end: 'bottom 20%',
					scrub: true,
					markers: false,
				},
			scale:1.5,
			y: "10vw",
			autoAlpha: 1,
			},
		)
		gsap.to(".epilogue3", {
			scrollTrigger: {
					trigger: ".epilogue3",
					start: 'top bottom',
					end: 'bottom 20%',
					scrub: true,
					markers: false,
				},
			scale:1.5,
			y: "10vw",
			autoAlpha: 1,
			},
		)

	*/
	}); //close onmount
</script>

<div class="grid grid-cols-1 justify-items-center gap-x-8 gap-y-8 px-5 lg:grid-cols-2 lg:px-20">
	<div
		class="animateLeft self-center text-center lg:ps-[10rem] xl:px-[5rem] min-[1921px]:px-[10rem]"
	>
		<h1 class="animateTitle lg:text-5xl xl:text-7xl">
			Make <span class="text-primary">better tech decisions</span> for Govt products.
		</h1>
	</div>
	<div class="animateRight lg:pe-20">
		<p class="animate-first-para z-10 pb-7 lg:text-xl">
			<a href="/learn" class="font-bold text-primary">Apptitude helps you learn new competencies.</a
			> Make better decisions, get better outcomes for your tech products and projects.
		</p>
		<p class="animate-second-para z-20 pb-7 lg:text-xl">
			<a href="/about" class="font-bold text-primary"
				>Let's do a bit better in public sector tech.</a
			>
			Your users and customers deserve good products at the lowest cost.
		</p>
		<p class="animate-cta mb-5 mt-8 space-x-2 lg:space-x-2 lg:text-xl">
			<a href="/learn" class="btn bg-lime-600 font-medium text-white hover:bg-lime-700 lg:text-xl"
				>Start Learning <svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right inline align-top"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg
				></a
			>
			<a
				href="/cacheup"
				class="btn btn-outline btn-primary font-medium text-lime-600 hover:bg-red-600 hover:text-white lg:text-xl"
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
