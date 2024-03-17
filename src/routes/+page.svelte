<script>
	import sgneopunk from '$lib/assets/sgneopunk.webp?enhanced&w=1714;640;400';
	import { slide } from 'svelte/transition';
	import hero from '$lib/assets/kari-shea-1SAnrIxw5OY-unsplash.webp?enhanced&w=2560;1080;400';

	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	onMount(() => {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.animateImg',
				pin: true, // pin the trigger element while active
				start: 'top top', // when the top of the trigger hits the top of the viewport
				end: '+=500', // end after scrolling 500px beyond the start
				scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
				snap: {
					snapTo: 'labels', // snap to the closest label in the timeline
					duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
					delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
					ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
				}
			}
		});
		tl.add('start')
			.to('.animateLeft', { xPercent: -50, duration: 0, opacity: 0 }, 'start')
			.to('.animateRight', { xPercent: 50, duration: 0, opacity: 0 }, 'start')
			.to('.animateImg', { yPercent: 50, duration: 0, opacity: 0, rotation: '1.75rad' }, 'start')
			.to('.animateLeft', { xPercent: 0, duration: 1, opacity: 1, ease: 'sine.out' }, 'start')
			.to('.animateRight', { xPercent: 0, duration: 1, opacity: 1, ease: 'sine.out' }, 'start')
			.to(
				'.animateImg',
				{ yPercent: 0, duration: 1, opacity: 1, ease: 'sine.out', rotation: '0rad' },
				'start'
			);
	});
	let seeMore = false;
</script>

<div class="grid grid-cols-1 justify-items-center gap-x-8 gap-y-8 px-5 lg:grid-cols-2 lg:px-20">
	<div class="animateLeft self-center text-center lg:ps-[10rem] xl:px-[5rem]">
		<h1 class="lg:text-5xl xl:text-7xl">
			Make <span class="text-primary">better tech decisions</span> for Govt products.
		</h1>
	</div>
	<div class="animateRight lg:pe-20">
		<p class="mb-5 lg:text-xl">
			<span class="font-bold text-primary">Apptitude</span> helps you learn new competencies and what
			good tech decisions look like, so you can improve outcomes for your tech products and projects.
		</p>
		<p class="mb-5 lg:text-xl">
			Let's improve public sector tech together. Your users and customers deserve good products at
			the lowest cost.
		</p>
		<p class="mb-5 mt-8 space-x-2 lg:space-x-5 lg:text-xl">
			<a href="/skills" class="btn bg-lime-600 font-medium text-white hover:bg-lime-800 lg:text-xl"
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
				class="btn btn-outline btn-primary font-medium text-lime-600 hover:bg-lime-600 lg:text-xl"
				>Quickstart Guides</a
			>
		</p>
	</div>
	<div class="avatar flex px-12 lg:col-span-2 lg:mt-12 lg:w-3/5">
		<div class="animateImg rounded-full">
			<enhanced:img
				src={hero}
				alt="Hero"
				sizes="(min-width:1920px) 2560px, (min-width:1080px) 1080px, (min-width:768px) 400px"
			></enhanced:img>
		</div>
	</div>
</div>
