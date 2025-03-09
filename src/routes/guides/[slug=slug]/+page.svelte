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
		{ id: 'definitions', title: 'Definitions' },
		{ id: 'goals', title: 'Goals' },
		{ id: 'questions', title: 'Questions' },
		{ id: 'alarms', title: 'Alarm Bells' },
		{ id: 'dealbreakers', title: 'Dealbreakers' },
		// { id: 'suggestions', title: '6. Suggestions' },
	];

	let currentSection: any = $state();
	let path: string[] = $derived(data.url.split('/'));
	let category: string = $derived(path[1]);
	let page: string = $derived(path[2]);

	onMount(() => {
		let contentsCollection = document.getElementsByClassName(
			'contents-observer',
		) as HTMLCollectionOf<HTMLDataListElement>;
		let observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						currentSection = entry.target.id;
						console.log(currentSection);
					}
				});
			},
			{
				rootMargin: '-50px 0px -50% 0px',
				threshold: 0,
			},
		);

		for (let i of contentsCollection) {
			observer.observe(i);
		}
	});
</script>

<svelte:head>
	<title>Apptitude - {data.post?.name}</title>
</svelte:head>

{#if data.post}
	<ContentWrapper
		urlSelf={data.url}
		{page}
		{contents}
		{category}
		{currentSection}
		title={data.post.name}>
		<article
			class="prose-section:mt-20 prose-h2:mb-6 prose-h3:mb-6 prose-h3:mt-12 prose-h5:mb-4 prose-p:mb-4 grid gap-y-32 pb-10">
			{#if data.post.definitions}
				<section id="definitions" class="contents-observer grid gap-4">
					<h2 class="border-b-base-content/20 mb-4 border-b-4 pb-2 text-2xl font-bold lg:text-4xl">
						Definitions
					</h2>
					{#if data.post.definitions.length > 0}
						<div class="grid grid-cols-3 gap-x-8 gap-y-8">
							{#each data.post.definitions as definition, i}
								<div class="italic">{definition.term}</div>
								<div class="col-span-2">{definition.definition}</div>
								{#if i < data.post.definitions.length - 1}
									<div class="bg-base-content/20 col-span-3 h-0.5"></div>
								{/if}
							{/each}
						</div>
					{:else}
						Nothing here!
					{/if}
				</section>
			{/if}

			{#if data.post.goals}
				<section id="goals" class="contents-observer grid gap-4">
					<h2 class="border-b-base-content/20 mb-4 border-b-4 pb-2 text-2xl font-bold lg:text-4xl">
						Goals
					</h2>
					{#if data.post.goals.length > 0}
						<div>
							<ol class="list-disc space-y-4 ps-4">
								{#each data.post.goals as goal}
									<li>{goal}</li>
								{/each}
							</ol>
						</div>
					{:else}
						Nothing here!
					{/if}
				</section>
			{/if}

			{#if data.post.questions}
				<section id="questions" class="contents-observer grid gap-4">
					<h2 class="border-b-base-content/20 mb-4 border-b-4 pb-2 text-2xl font-bold lg:text-4xl">
						Questions
					</h2>
					{#if data.post.questions.length > 0}
						<div class="grid grid-cols-2 gap-x-8 gap-y-8">
							{#each data.post.questions as question, i}
								<div class="italic">{question.what}</div>
								<div class="">{question.why}</div>
								{#if i < data.post.questions.length - 1}
									<div class="bg-base-content/20 col-span-2 h-0.5"></div>
								{/if}
							{/each}
						</div>
					{:else}
						Nothing here!
					{/if}
				</section>
			{/if}

			{#if data.post.alarms}
				<section id="alarms" class="contents-observer grid gap-4">
					<h2 class="border-b-base-content/20 mb-4 border-b-4 pb-2 text-2xl font-bold lg:text-4xl">
						Alarm Bells
					</h2>
					{#if data.post.alarms.length > 0}
						<div class="grid grid-cols-2 gap-x-8 gap-y-8">
							<div class="text-base-content/70 flex items-center gap-2 font-bold">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="1.3em"
									height="1.3em"
									class="carbon:warning-filled"
									viewBox="0 0 32 32"
									><!-- Icon from Carbon by IBM - undefined --><path
										fill="currentColor"
										d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14s14-6.3 14-14S23.7 2 16 2m-1.1 6h2.2v11h-2.2zM16 25c-.8 0-1.5-.7-1.5-1.5S15.2 22 16 22s1.5.7 1.5 1.5S16.8 25 16 25" /></svg
								>They say...
							</div>
							<div class="text-base-content/70 font-bold">Why I'd be scared</div>
							{#each data.post.alarms as alarm, i}
								<div class="italic">{alarm.what}</div>
								<div>{alarm.why}</div>
								{#if i < data.post.alarms.length - 1}
									<div class="bg-base-content/20 col-span-2 h-0.5"></div>
								{/if}
							{/each}
						</div>
					{:else}
						Nothing here!
					{/if}
				</section>
			{/if}

			{#if data.post.dealbreakers}
				<section id="dealbreakers" class="contents-observer grid gap-4">
					<h2 class="border-b-base-content/20 mb-4 border-b-4 pb-2 text-2xl font-bold lg:text-4xl">
						Dealbreakers
					</h2>
					{#if data.post.dealbreakers.length > 0}
						<div>
							<ol class="list-disc space-y-4 ps-4">
								{#each data.post.dealbreakers as dealbreaker}
									<li>{dealbreaker}</li>
								{/each}
							</ol>
						</div>
					{:else}
						Nothing here!
					{/if}
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

<style>
	:target {
		scroll-margin-top: 4.5rem;
	}
</style>
