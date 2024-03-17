<script>
	import sgneopunk from '$lib/assets/sgneopunk.webp?enhanced&w=1714;640;400';
	import { slide } from 'svelte/transition';
	import hero from '$lib/assets/kari-shea-1SAnrIxw5OY-unsplash.webp?enhanced&w=2560;1080;400';
import anime from 'animejs'

	import { onMount } from 'svelte';

	onMount(() => {
		anime({
			targets: '.box',
			keyframes: [
				{translateY: 1000, opacity: 0, duration:0},				
    {translateY: 0, translateX: 0, opacity:1, duration:2000, rotate: '1turn'},
			],
			easing: 'easeOutCubic',
			autoplay: true,
		});

		anime({
			targets: '.animateLeft',
			keyframes: [
				{translateX: -500, opacity: 0, duration:0},
    {translateX: 0, opacity:1, duration:2000},
			],
			autoplay: true,
			easing: 'easeOutCubic',
		});

		anime({
			targets: '.animateRight',
			keyframes: [
				{translateX: 500, opacity: 0, duration:0},
    {translateX: 0, opacity:1, duration:2000},
			],
			easing: 'easeOutCubic',
			autoplay: true,
		});
	})
	let seeMore = false;
</script>

<div class="grid grid-cols-1 justify-items-center gap-x-8 gap-y-8 px-5 lg:grid-cols-2 lg:px-20">
	<div class="self-center text-center lg:ps-[10rem] animateLeft">
		<h1 class="lg:text-7xl xl:text-8xl">Make <span class="text-primary">better tech decisions</span> for Govt products.</h1>
	</div>
	<div class="text-lg lg:pe-20 animateRight">
		<p class="mb-5">
			<span class="font-bold text-primary">Apptitude</span> helps you learn new competencies and what
			good tech decisions look like, so you can improve outcomes for your tech products and projects.
		</p>
		<p class="mb-5">
			Let's improve public sector tech together. Your users and customers deserve good products at
			the lowest cost.
		</p>
		<p class="mb-5 mt-8 space-x-2 lg:space-x-5">
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
	<div class="avatar flex px-12 lg:col-span-2 lg:mt-20 lg:w-3/5">
		<div class="rounded-full box">
			<enhanced:img
				src={hero}
				alt="Hero"
				sizes="(min-width:1920px) 2560px, (min-width:1080px) 1080px, (min-width:768px) 400px"
			></enhanced:img>
		</div>
	</div>
</div>
