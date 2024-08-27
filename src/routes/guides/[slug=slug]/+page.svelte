<script lang="ts">
	import AsideNav from '$lib/AsideNav.svelte';
	import CarbonCheckmarkFilled from '$lib/assets/svg/CarbonCheckmarkFilled.svelte';
	import CarbonCloseFilled from '$lib/assets/svg/CarbonCloseFilled.svelte';
	import GuideExample from '$lib/GuideExample.svelte';
	import NewCrumbs from '$lib/NewCrumbs.svelte';
	import { type Contents } from '$lib/Types';
	import { onMount } from 'svelte';
	import TocNav from '$lib/TOCNav.svelte';
	import { fade } from 'svelte/transition';
	let { data } = $props();

	//for byline
	let currentBylineNumber = $state(0);
	let bylineTotal = data.post.bylines.length - 1;

	setInterval(() => {
		if (currentBylineNumber < bylineTotal) {
			currentBylineNumber += 1;
		} else {
			currentBylineNumber = 0;
		}
	}, 10000);

	let contents: Contents[] = [
		{ id: 'definitions', title: '1. Definitions?' },
		{ id: 'goals', title: '2. Goals' },
		{ id: 'questions', title: '3. Questions' },
		{ id: 'dealbreakers', title: '4. Dealbreakers' },
		{ id: 'suggestions', title: '5. Suggestions' },
	];
	let currentSection = $state();

	onMount(() => {
		let contentsCollection = document.getElementsByClassName(
			'contents-observer',
		) as HTMLCollectionOf<HTMLDataListElement>;
		let observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						currentSection = entry.target.id;
					}
				});
			},
			{
				rootMargin: '-10% 0% -10% 0%',
				threshold: 0,
			},
		);

		for (let i of contentsCollection) {
			observer.observe(i);
		}
	});

	const path = data.url.split('/');
	const category = path[1];
	const page = path[2];
</script>

<div class="grid grid-cols-5 px-2 py-5 lg:px-20">
	<aside
		class="col-span-1 hidden w-full content-start rounded-l-3xl lg:grid lg:border-r-2 lg:border-r-gray-700 lg:bg-base-300">
		<h3 class="w-full border-b-2 border-b-gray-700 px-8 py-4 text-xl">Menu</h3>
		<AsideNav urlSelf={data.url} {page} {contents} {currentSection} />
	</aside>

	<main class="col-span-3 w-full space-y-8 border-r-2 border-r-gray-700 bg-base-300">
		<nav class="grid w-full justify-items-start border-b-2 border-b-gray-700 py-4 ps-8">
			<NewCrumbs urlMiddle="guides" textMiddle={'Guides'} textCurrent={data.post.name} />
		</nav>
		<h1
			class="inline-block bg-gradient-to-r from-emerald-200 via-lime-200 to-teal-300 bg-clip-text pb-8 ps-8 text-transparent">
			{data.post.name}
		</h1>

		<article
			class="prose-section:mt-20 space-y-20 px-10 pb-10 prose-h2:mb-6 prose-h3:mb-6 prose-h3:mt-12 prose-h5:mb-4 prose-p:mb-4">
			{#if data.post.bylines[0].text != ''}
				<div class="flex justify-center">
					{#key currentBylineNumber}
						<div class="chat chat-start" in:fade={{ duration: 1000 }}>
							<div class="avatar chat-image">
								<div class="w-14 rounded-full">
									<img src={data.post.bylines[currentBylineNumber].icon} alt="Author" />
								</div>
							</div>
							<div class="chat-bubble border border-slate-700 bg-lime-950">
								<i>{data.post.bylines[currentBylineNumber].text}</i>
							</div>
						</div>
					{/key}
				</div>
			{/if}
			<section id="definitions" class="contents-observer">
				<h2>1. Definitions</h2>
				<div>
					<ol class="list-disc space-y-4 ps-4">
						{#each data.post.definitions as definition}
							<li>{definition}</li>
						{/each}
					</ol>
				</div>
			</section>
			<section id="goals" class="contents-observer">
				<h2>2. Goals</h2>
				<div>
					<ol class="list-disc space-y-4 ps-4">
						{#each data.post.goals as goal}
							<li>{goal}</li>
						{/each}
					</ol>
				</div>
			</section>
			<section id="questions" class="contents-observer">
				<h2>3. Questions</h2>
				<div>
					<ol class="list-disc space-y-4 ps-4">
						{#each data.post.questions as question}
							<li>{question}</li>
						{/each}
					</ol>
				</div>
			</section>
			<section id="dealbreakers" class="contents-observer">
				<h2>4. Dealbreakers</h2>
				<div>
					<ol class="list-disc space-y-4 ps-4">
						{#each data.post.dealbreakers as dealbreaker}
							<li>{dealbreaker}</li>
						{/each}
					</ol>
				</div>
			</section>
			<section id="suggestions" class="contents-observer">
				<h2>5. Suggestions</h2>
				<div>
					<ol class="list-disc space-y-4 ps-4">
						{#each data.post.suggestions as suggestion}
							<li>{suggestion}</li>
						{/each}
					</ol>
				</div>
			</section>
		</article>
	</main>
	<aside class="col-span-1 hidden w-full content-start rounded-r-3xl lg:grid lg:bg-base-300">
		<h3 class="w-full border-b-2 border-b-gray-700 px-8 py-4 text-xl">This Post</h3>
		<TocNav urlSelf={data.url} {contents} {currentSection} />
	</aside>
</div>

<style>
	.bg-jar {
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1009%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(0%2c 54%2c 15%2c 1)'%3e%3c/rect%3e%3cpath d='M122.46 126.49L170.48 126.49L170.48 174.51L122.46 174.51z' stroke='rgba(87%2c 87%2c 87%2c 1)'%3e%3c/path%3e%3cpath d='M1142.84 219.52 a43.48 43.48 0 1 0 86.96 0 a43.48 43.48 0 1 0 -86.96 0z' fill='rgba(87%2c 87%2c 87%2c 1)'%3e%3c/path%3e%3cpath d='M1401.41 168.81L1453.59 168.81L1453.59 220.99L1401.41 220.99z' fill='rgba(87%2c 87%2c 87%2c 1)'%3e%3c/path%3e%3cpath d='M501.62 423.02L513.5 423.02L513.5 434.9L501.62 434.9z' stroke='rgba(87%2c 87%2c 87%2c 1)'%3e%3c/path%3e%3cpath d='M41.38 101.17L51.61 101.17L51.61 123.29L41.38 123.29z' fill='rgba(87%2c 87%2c 87%2c 1)'%3e%3c/path%3e%3cpath d='M563.3 399.76L587.84 399.76L587.84 424.3L563.3 424.3z' stroke='rgba(87%2c 87%2c 87%2c 1)'%3e%3c/path%3e%3cpath d='M539.11 336.34a30.45 30.45 0 1 0-3.69 60.79z' stroke='rgba(87%2c 87%2c 87%2c 1)'%3e%3c/path%3e%3cpath d='M990.76 311.94 a55.74 55.74 0 1 0 111.48 0 a55.74 55.74 0 1 0 -111.48 0z' fill='rgba(87%2c 87%2c 87%2c 1)'%3e%3c/path%3e%3cpath d='M1390.9 466.96 a9.45 9.45 0 1 0 18.9 0 a9.45 9.45 0 1 0 -18.9 0z' fill='rgba(87%2c 87%2c 87%2c 1)'%3e%3c/path%3e%3cpath d='M559.55 507.7a14.52 14.52 0 1 0 24.01 16.34z' fill='rgba(87%2c 87%2c 87%2c 1)'%3e%3c/path%3e%3cpath d='M399.4 349.66L425.55 349.66L425.55 375.81L399.4 375.81z' fill='rgba(87%2c 87%2c 87%2c 1)'%3e%3c/path%3e%3cpath d='M1113.35 501.02 a11.49 11.49 0 1 0 22.98 0 a11.49 11.49 0 1 0 -22.98 0z' stroke='rgba(87%2c 87%2c 87%2c 1)'%3e%3c/path%3e%3cpath d='M878.45 332.42 a42.55 42.55 0 1 0 85.1 0 a42.55 42.55 0 1 0 -85.1 0z' stroke='rgba(87%2c 87%2c 87%2c 1)'%3e%3c/path%3e%3cpath d='M959.07 334.99L998.1 334.99L998.1 364.22L959.07 364.22z' fill='rgba(87%2c 87%2c 87%2c 1)'%3e%3c/path%3e%3cpath d='M737.94 304.39L741.86 304.39L741.86 308.31L737.94 308.31z' fill='rgba(87%2c 87%2c 87%2c 1)'%3e%3c/path%3e%3cpath d='M718.98 392.83L767.28 392.83L767.28 403.63L718.98 403.63z' stroke='rgba(87%2c 87%2c 87%2c 1)'%3e%3c/path%3e%3cpath d='M0.75 228.87L19.65 228.87L19.65 247.77L0.75 247.77z' fill='rgba(87%2c 87%2c 87%2c 1)'%3e%3c/path%3e%3cpath d='M1187.5 283.88L1201.81 283.88L1201.81 298.19L1187.5 298.19z' fill='rgba(87%2c 87%2c 87%2c 1)'%3e%3c/path%3e%3cpath d='M571.26 67.78L601.9 67.78L601.9 98.42L571.26 98.42z' stroke='rgba(87%2c 87%2c 87%2c 1)'%3e%3c/path%3e%3cpath d='M497.35 558.96L538.51 558.96L538.51 600.12L497.35 600.12z' fill='rgba(87%2c 87%2c 87%2c 1)'%3e%3c/path%3e%3cpath d='M800.42 529.5L812.44 529.5L812.44 532.64L800.42 532.64z' stroke='rgba(87%2c 87%2c 87%2c 1)'%3e%3c/path%3e%3cpath d='M1389.74 94.04 a18.22 18.22 0 1 0 36.44 0 a18.22 18.22 0 1 0 -36.44 0z' stroke='rgba(87%2c 87%2c 87%2c 1)'%3e%3c/path%3e%3cpath d='M1162.46 231.18L1184.59 231.18L1184.59 253.31L1162.46 253.31z' fill='rgba(87%2c 87%2c 87%2c 1)'%3e%3c/path%3e%3cpath d='M805.44 144.55L834.73 144.55L834.73 173.84L805.44 173.84z' fill='rgba(87%2c 87%2c 87%2c 1)'%3e%3c/path%3e%3cpath d='M895.51 164.04 a5.08 5.08 0 1 0 10.16 0 a5.08 5.08 0 1 0 -10.16 0z' stroke='rgba(87%2c 87%2c 87%2c 1)'%3e%3c/path%3e%3cpath d='M446.22 304.5a7.76 7.76 0 1 0-15.52 0.18z' fill='rgba(87%2c 87%2c 87%2c 1)'%3e%3c/path%3e%3cpath d='M685.77 329.43L691.6 329.43L691.6 335.26L685.77 335.26z' stroke='rgba(87%2c 87%2c 87%2c 1)'%3e%3c/path%3e%3cpath d='M1280.79 144.61a50.85 50.85 0 1 0-81.46 60.89z' stroke='rgba(87%2c 87%2c 87%2c 1)'%3e%3c/path%3e%3cpath d='M1028.54 58.56L1035.38 58.56L1035.38 65.4L1028.54 65.4z' fill='rgba(87%2c 87%2c 87%2c 1)'%3e%3c/path%3e%3cpath d='M423.61 282.29L469.91 282.29L469.91 293.69L423.61 293.69z' fill='rgba(87%2c 87%2c 87%2c 1)'%3e%3c/path%3e%3cpath d='M213.81 19.73 a39.23 39.23 0 1 0 78.46 0 a39.23 39.23 0 1 0 -78.46 0z' fill='rgba(87%2c 87%2c 87%2c 1)'%3e%3c/path%3e%3cpath d='M1016.26 546.29a18.87 18.87 0 1 0 33.42 17.52z' fill='rgba(87%2c 87%2c 87%2c 1)'%3e%3c/path%3e%3cpath d='M1162.38 295.18L1166.86 295.18L1166.86 321.21L1162.38 321.21z' fill='rgba(87%2c 87%2c 87%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1009'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
	}
</style>
