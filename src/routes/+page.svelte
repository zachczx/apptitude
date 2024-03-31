<script>
	import TablerGhostFilled from '$lib/assets/svg/TablerGhostFilled.svelte';
	import heroNew from '$lib/assets/hero-new.webp?enhanced&w=2060;1536;1280;1024';
	import oopsBg from '$lib/assets/oops-bg.webp?enhanced&w=2060;1536;1280;1024';
	import oops2Bg from '$lib/assets/oops2-bg.webp?enhanced&w=2060;1536;1280;1024';
	import bellCurveMeme from '$lib/assets/product-bell-curve.webp';
	import oops from '$lib/assets/oops.webp?enhanced&w=600;300';
	import oops2 from '$lib/assets/oops2.webp?enhanced&w=600;300';
	import RocketAnimation from '$lib/RocketAnimation.svelte';
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
		class="mx-3 self-center justify-self-center rounded-full px-3 pt-3 lg:z-10 lg:mx-12 lg:mt-12 xl:p-[8rem]"
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
		<h1 class="mb-4 text-center text-5xl lg:text-6xl xl:text-7xl min-[1921px]:text-8xl">
			<span
				class="bg-gradient-to-r from-lime-300 via-green-400 to-teal-100 bg-clip-text text-transparent"
				>Build digital dreams, not nightmares.</span
			>
		</h1>
		<p class="mb-14 py-2 text-center text-lg lg:text-2xl">
			<TablerGhostFilled class="mb-1 me-1 ms-1 inline fill-primary" />Supercharge your learning for
			digital products & projects. <TablerGhostFilled
				class="mb-1 me-1 ms-1 inline fill-primary"
			/>Improve how you run your tech products in the public service. <TablerGhostFilled
				class="mb-1 me-1 ms-1 inline fill-primary"
			/>Get rid of crappy Govt apps & systems.
		</p>
		<div class="join join-vertical flex justify-center lg:join-horizontal">
			<a
				href="/learn"
				class="btn join-item border border-primary bg-lime-600 font-medium text-white hover:border hover:border-primary hover:bg-gradient-to-r hover:from-lime-500 hover:via-teal-500 hover:to-emerald-600 active:from-lime-600 active:via-teal-600 active:to-emerald-700 lg:text-2xl"
				>Learn Basics</a
			>
			<a
				href="/cacheup"
				class="btn join-item border border-primary bg-base-100 from-red-500 via-orange-500 to-pink-500 font-medium text-primary hover:border hover:border-primary hover:bg-gradient-to-r hover:from-red-600 hover:via-orange-600 hover:to-pink-600 hover:text-white active:from-red-700 active:via-orange-700 active:to-pink-700 lg:text-2xl"
				>Quickstart Guides</a
			>
		</div>
		<p class="mt-3 text-center text-xl">
			<i><a href="/about" class="hover:text-primary">Wait, what's Apptitude?</a></i>
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
