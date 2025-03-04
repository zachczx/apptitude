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
	let { data } = $props();

	//for byline
	let currentBylineNumber = $state(0);
	let bylineTotal = data.post?.bylines.length - 1;

	setInterval(() => {
		if (currentBylineNumber < bylineTotal) {
			currentBylineNumber += 1;
		} else {
			currentBylineNumber = 0;
		}
	}, 10000);

	let contents: Contents[] = [
		{ id: 'definitions', title: '1. Definitions' },
		{ id: 'goals', title: '2. Goals' },
		{ id: 'questions', title: '3. Questions' },
		{ id: 'dealbreakers', title: '4. Dealbreakers' },
		{ id: 'suggestions', title: '5. Suggestions' },
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

<ContentWrapper
	urlSelf={data.url}
	{page}
	{category}
	{textMiddle}
	{contents}
	{currentSection}
	{textCurrent}>
	<div class="mb-12">
		<div class="w-full rounded-2xl bg-gray-600">
			{#if page === 'problems'}
				<div class="flex max-h-72 justify-end">
					<enhanced:img src={problem} alt="$$$" class="rounded-2xl lg:-mb-14 lg:-translate-y-14" />
				</div>
			{:else if page === 'product'}
				<div class="flex max-h-72 justify-end">
					<enhanced:img
						src={productAlt}
						alt="$$$"
						class="rounded-2xl lg:-mb-14 lg:-translate-y-14" />
				</div>
			{:else if page === 'security'}
				<div class="flex max-h-72 justify-end">
					<enhanced:img
						src={safeKeyboard}
						alt="Put your keyboard in the safe - best in class for security~!"
						class="rounded-2xl lg:-mb-14 lg:-translate-y-14" />
				</div>
			{:else if page === 'cost'}
				<div class="flex max-h-72 justify-start">
					<enhanced:img
						src={piggyBank}
						alt="$$$"
						class="rounded-2xl lg:-mb-14 lg:-translate-y-14" />
				</div>
			{/if}
		</div>
	</div>
	<h1
		class="inline-block bg-linear-to-r from-emerald-200 via-lime-200 to-teal-300 bg-clip-text pb-8 text-4xl font-bold text-transparent lg:text-7xl">
		{data.post.name}
	</h1>

	<article
		class="prose-section:mt-20 prose-h2:mb-6 prose-h3:mb-6 prose-h3:mt-12 prose-h5:mb-4 prose-p:mb-4 space-y-20 pb-10">
		{#if data.post.bylines[0].text != ''}
			<div class="flex justify-center">
				{#key currentBylineNumber}
					<div class="chat chat-start" in:fade={{ duration: 1000 }}>
						<div class="avatar chat-image">
							<div class="w-14 rounded-full">
								<img src={data.post.bylines[currentBylineNumber].icon} alt="Author" />
							</div>
						</div>
						<div class="chat-bubble border-primary-content bg-primary-content/50 border">
							<i>{data.post.bylines[currentBylineNumber].text}</i>
						</div>
					</div>
				{/key}
			</div>
		{/if}
		<section id="definitions" class="contents-observer">
			<h2 class="text-2xl font-bold lg:text-4xl">1. Definitions</h2>
			<div>
				<ol class="list-disc space-y-4 ps-4">
					{#each data.post.definitions as definition}
						<li>{definition}</li>
					{/each}
				</ol>
			</div>
		</section>
		<section id="goals" class="contents-observer">
			<h2 class="text-2xl font-bold lg:text-4xl">2. Goals</h2>
			<div>
				<ol class="list-disc space-y-4 ps-4">
					{#each data.post.goals as goal}
						<li>{goal}</li>
					{/each}
				</ol>
			</div>
		</section>
		<section id="questions" class="contents-observer">
			<h2 class="text-2xl font-bold lg:text-4xl">3. Questions</h2>
			<div>
				<ol class="list-disc space-y-4 ps-4">
					{#each data.post.questions as question}
						<li>{question}</li>
					{/each}
				</ol>
			</div>
		</section>
		<section id="dealbreakers" class="contents-observer">
			<h2 class="text-2xl font-bold lg:text-4xl">4. Dealbreakers</h2>
			<div>
				<ol class="list-disc space-y-4 ps-4">
					{#each data.post.dealbreakers as dealbreaker}
						<li>{dealbreaker}</li>
					{/each}
				</ol>
			</div>
		</section>
		<section id="suggestions" class="contents-observer">
			<h2 class="text-2xl font-bold lg:text-4xl">5. Suggestions</h2>
			<div>
				<ol class="list-disc space-y-4 ps-4">
					{#each data.post.suggestions as suggestion}
						<li>{suggestion}</li>
					{/each}
				</ol>
			</div>
		</section>
	</article>
</ContentWrapper>
