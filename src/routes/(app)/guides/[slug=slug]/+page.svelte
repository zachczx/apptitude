<script lang="ts">
	import NavAside from '$lib/NavAside.svelte';
	import CarbonCheckmarkFilled from '$lib/assets/svg/CarbonCheckmarkFilled.svelte';
	import CarbonCloseFilled from '$lib/assets/svg/CarbonCloseFilled.svelte';
	import GuideExample from '$lib/GuideExample.svelte';
	import NewCrumbs from '$lib/NewCrumbs.svelte';
	import { type Contents } from '$lib/Types';
	import safeKeyboard from '$lib/assets/safe-keyboard.webp?enhanced&w=300';
	import piggyBank from '$lib/assets/piggy-bank.webp?enhanced&w=300';
	import problem from '$lib/assets/problem.webp?enhanced&w=300';
	import product from '$lib/assets/product.webp?enhanced&w=300';
	import productAlt from '$lib/assets/product-alt.webp?enhanced&w=300';
	import { onMount } from 'svelte';
	import NavToc from '$lib/NavToc.svelte';
	import { fade } from 'svelte/transition';
	import ContentWrapper from '$lib/ContentWrapper.svelte';
	import { goto } from '$app/navigation';
	let { data } = $props();

	//for byline
	let currentBylineNumber = $state(0);

	let contents: Contents[] = [
		{ id: 'definitions', title: '1. Definitions' },
		{ id: 'goals', title: '2. Goals' },
		{ id: 'questions', title: '3. Questions' },
		{ id: 'alarm', title: '4. Alarm Bells' },
		{ id: 'dealbreakers', title: '5. Dealbreakers' },
		{ id: 'suggestions', title: '6. Suggestions' },
	];
	let currentSection: any = $state();
	let textCurrent = $derived(data.post?.name);
	let path: string[] = $derived(data.url.split('/'));
	let category: string = $derived(path[1]);
	let page: string = $derived(path[2]);
	let textMiddle = 'Guides';

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
</script>

<svelte:head>
	<title>Apptitude - {textCurrent}</title>
</svelte:head>

{#if data.post}
	<ContentWrapper
		urlSelf={data.url}
		{page}
		{textMiddle}
		{category}
		{currentSection}
		title={data.post.name}>
		<article
			class="prose-section:mt-20 prose-h2:mb-6 prose-h3:mb-6 prose-h3:mt-12 prose-h5:mb-4 prose-p:mb-4 grid gap-y-20 pb-10">
			{#if data.post.definitions}
				<section id="definitions" class="contents-observer grid gap-4">
					<h2 class="border-b-base-content/20 mb-4 border-b-4 pb-2 text-2xl font-bold lg:text-4xl">
						1. Definitions
					</h2>
					<div>
						<ol class="list-disc space-y-4 ps-4">
							{#each data.post.definitions as definition}
								<li>{definition}</li>
							{/each}
						</ol>
					</div>
				</section>
			{/if}

			{#if data.post.goals}
				<section id="goals" class="contents-observer grid gap-4">
					<h2 class="border-b-base-content/20 mb-4 border-b-4 pb-2 text-2xl font-bold lg:text-4xl">
						2. Goals
					</h2>
					<div>
						<ol class="list-disc space-y-4 ps-4">
							{#each data.post.goals as goal}
								<li>{goal}</li>
							{/each}
						</ol>
					</div>
				</section>
			{/if}

			{#if data.post.questions}
				<section id="questions" class="contents-observer grid gap-4">
					<h2 class="border-b-base-content/20 mb-4 border-b-4 pb-2 text-2xl font-bold lg:text-4xl">
						3. Questions
					</h2>
					<div>
						<ol class="list-disc space-y-4 ps-4">
							{#each data.post.questions as question}
								<li>{question}</li>
							{/each}
						</ol>
					</div>
				</section>
			{/if}

			{#if data.post.alarms}
				<section id="questions" class="contents-observer grid gap-4">
					<h2 class="border-b-base-content/20 mb-4 border-b-4 pb-2 text-2xl font-bold lg:text-4xl">
						4. Alarm Bells
					</h2>
					<div class="grid grid-cols-2 gap-x-8 gap-y-8">
						<div class="text-base-content/70 font-bold">They say...</div>
						<div class="text-base-content/70 font-bold">Why I'd be scared</div>
						{#each data.post.alarms as alarm, i}
							<div class="italic">{alarm.what}</div>
							<div>{alarm.why}</div>
							{#if i < data.post.alarms.length - 1}
								<div class="bg-base-content/20 col-span-2 h-0.5"></div>
							{/if}
						{/each}
					</div>
				</section>
			{/if}

			{#if data.post.dealbreakers}
				<section id="dealbreakers" class="contents-observer grid gap-4">
					<h2 class="border-b-base-content/20 mb-4 border-b-4 pb-2 text-2xl font-bold lg:text-4xl">
						5. Dealbreakers
					</h2>
					<div>
						<ol class="list-disc space-y-4 ps-4">
							{#each data.post.dealbreakers as dealbreaker}
								<li>{dealbreaker}</li>
							{/each}
						</ol>
					</div>
				</section>
			{/if}

			<!-- <section id="suggestions" class="contents-observer grid gap-4">
			<h2 class="border-b-base-content/20 mb-4 border-b-4 pb-2 text-2xl font-bold lg:text-4xl">
				6. Suggestions
			</h2>
			<div>
				<ol class="list-disc space-y-4 ps-4">
					{#each data.post.suggestions as suggestion}
						<li>{suggestion}</li>
					{/each}
				</ol>
			</div>
		</section> -->
		</article>
	</ContentWrapper>
{/if}
