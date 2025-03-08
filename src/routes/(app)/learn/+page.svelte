<script lang="ts">
	import { info } from './data_learn';
	import Breadcrumbs from '$lib/Breadcrumbs.svelte';
	import TablerHelpCircleFilled from '$lib/assets/svg/TablerHelpCircleFilled.svelte';
	import TablerStarFilled from '$lib/assets/svg/TablerStarFilled.svelte';
	import ContentWrapper from '$lib/ContentWrapper.svelte';
	import CarbonCheckmarkFilled from '$lib/assets/svg/CarbonCheckmarkFilled.svelte';
	import SimpleIconsKnowledgeBase from '$lib/assets/svg/SimpleIconsKnowledgeBase.svelte';
	import NewCrumbs from '$lib/NewCrumbs.svelte';

	let { data } = $props();
	let currentSection: any = $state();
	let path: string[] = $derived(data.url.split('/'));
	let category: string = $derived(path[1]);
	let page: string = $derived(path[2]);
	let textMiddle: string = 'Learn';
	let textCurrent = '';

	const subtitle = `This section lists the resources I curated for self-learning from online courses, Youtube
				channels, Youtube videos, articles, blog posts, cloud provider documentation, etc. Treat this as a useful start. It's impossible to be exhaustive. Information gets outdated
				very fast. There's tons more I myself don't know.`;
</script>

<svelte:head>
	<title>Apptitude - Learn</title>
</svelte:head>

<ContentWrapper
	urlSelf={data.url}
	{page}
	{textMiddle}
	{category}
	{currentSection}
	title="Learn Bytes"
	{subtitle}>
	<section class="grid grid-cols-4 gap-y-20">
		<h2 class="text-4xl font-bold lg:text-6xl">Starter</h2>
		<div
			class="col-span-3 grid grid-cols-1 justify-items-center gap-3 lg:grid-cols-2 xl:grid-cols-3">
			{#each data.starter as item}
				<a href="/learn/{item.slug}" class="w-full">
					<div
						class="group card bg-base-100 h-full border border-gray-700 shadow-md shadow-gray-800">
						<div class="card-body grid grid-cols-1 content-start px-4">
							<TablerStarFilled class="fill-primary mb-1 inline justify-self-start text-2xl" />
							<h3 class="group-hover:text-primary text-2xl font-bold">
								{item.name}
							</h3>
							<p><i>{item.intro}</i></p>
						</div>
					</div>
				</a>
			{/each}
		</div>

		<h2 class="text-4xl font-bold lg:text-6xl">Mid</h2>

		<div
			class="col-span-3 grid grid-cols-1 justify-items-center gap-3 lg:grid-cols-2 xl:grid-cols-3">
			{#each data.intermediate as item}
				<a href="/learn/{item.slug}" class="w-full">
					<div
						class="group card bg-base-100 h-full border border-gray-700 shadow-md shadow-gray-800">
						<div class="card-body grid grid-cols-1 content-start px-4">
							<div class="justify-self-start text-2xl">
								<TablerStarFilled class="fill-primary mb-1 inline" /><TablerStarFilled
									class="fill-primary mb-1 inline" /><TablerStarFilled
									class="fill-primary mb-1 inline" />
							</div>
							<h3 class="group-hover:text-primary text-2xl font-bold">
								{item.name}
							</h3>
							<p><i>{item.intro}</i></p>
						</div>
					</div>
				</a>
			{/each}
		</div>

		<h2 class="text-4xl font-bold lg:text-6xl">Pro</h2>

		<div
			class="col-span-3 grid grid-cols-1 justify-items-center gap-3 lg:grid-cols-2 xl:grid-cols-3">
			{#each data.advanced as item}
				<a href="/learn/{item.slug}" class="w-full">
					<div
						class="group card bg-base-100 h-full border border-gray-700 shadow-md shadow-gray-800">
						<div class="card-body grid grid-cols-1 content-start px-4">
							<div class="justify-self-start text-2xl">
								<TablerStarFilled class="fill-primary mb-1 inline" /><TablerStarFilled
									class="fill-primary mb-1 inline" /><TablerStarFilled
									class="fill-primary mb-1 inline" /><TablerStarFilled
									class="fill-primary mb-1 inline" /><TablerStarFilled
									class="fill-primary mb-1 inline" />
							</div>
							<h3 class="group-hover:text-primary text-2xl font-bold">
								{item.name}
							</h3>
							<p><i>{item.intro}</i></p>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</section>
</ContentWrapper>
