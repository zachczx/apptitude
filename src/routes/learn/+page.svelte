<script lang="ts">
	import { info } from './data_learn';
	import Breadcrumbs from '$lib/Breadcrumbs.svelte';
	import TablerHelpCircleFilled from '$lib/assets/svg/TablerHelpCircleFilled.svelte';
	import TablerStarFilled from '$lib/assets/svg/TablerStarFilled.svelte';
	import ContentWrapper from '$lib/ContentWrapper.svelte';
	import CarbonCheckmarkFilled from '$lib/assets/svg/CarbonCheckmarkFilled.svelte';
	import SimpleIconsKnowledgeBase from '$lib/assets/svg/SimpleIconsKnowledgeBase.svelte';

	let { data } = $props();
	let currentSection: any = $state();
	let path: any = $derived(data.url.split('/'));
	let category: any = $derived(path[1]);
	let page: any = $derived(path[2]);
	let textMiddle: string = 'Learn';
</script>

<svelte:head>
	<title>Apptitude - Learn</title>
</svelte:head>

<ContentWrapper urlSelf={data.url} {page} {textMiddle} {category} {currentSection}>
	<section class="mb-12 space-y-12">
		<div>
			<h1
				class="inline-block bg-gradient-to-r from-emerald-200 via-lime-200 to-teal-300 bg-clip-text pb-3 text-transparent">
				Learn Bytes, Reap Career Delights
			</h1>
			<p class="text-sm">
				<i>Find your own path upsizing your Bytes into Megabytes.</i>
			</p>
		</div>
		<div class="space-y-4">
			<p>
				This section lists the resources I curated for self-learning from online courses, Youtube
				channels, Youtube videos, articles, blog posts, cloud provider documentation, etc.
			</p>
			<p>
				Treat this as a useful start. It's impossible to be exhaustive. Information gets outdated
				very fast. There's tons more I myself don't know.
			</p>
		</div>
	</section>

	<div class="space-y-20 pt-12">
		<div class="space-y-7 lg:rounded-2xl lg:bg-base-300">
			<div class="space-y-3 ps-1">
				<h2>
					<TablerStarFilled class="mb-1 inline fill-primary" /><TablerStarFilled
						class="mb-1 inline fill-gray-600" /><TablerStarFilled
						class="mb-1 inline fill-gray-600" /><TablerStarFilled
						class="mb-1 inline fill-gray-600" /><TablerStarFilled
						class="mb-1 inline fill-gray-600" />
				</h2>
				<h2>Beginner</h2>
			</div>
			<div class="grid grid-cols-1 justify-items-center gap-3 lg:grid-cols-2">
				{#each data.beginner as item}
					<a href="/learn/{item.slug}" class="w-full">
						<div
							class="group card h-full border border-gray-700 bg-neutral shadow-md shadow-gray-800 hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700">
							<div class="card-body grid grid-cols-1 content-start space-y-2 px-5 lg:space-y-5">
								<h3 class="group-hover:text-primary">
									{item.name}
								</h3>
								<p class="text-sm lg:text-lg"><i>{item.intro}</i></p>
							</div>
						</div>
					</a>
				{/each}
			</div>
		</div>

		<div class="space-y-7 lg:rounded-2xl lg:bg-base-300">
			<div class="space-y-3 ps-1">
				<h2>
					<TablerStarFilled class="mb-1 inline fill-primary" /><TablerStarFilled
						class="mb-1 inline fill-primary" /><TablerStarFilled
						class="mb-1 inline fill-primary" /><TablerStarFilled
						class="mb-1 inline fill-gray-600" /><TablerStarFilled
						class="mb-1 inline fill-gray-600" />
				</h2>
				<h2>Intermediate</h2>
			</div>
			<div class="grid grid-cols-1 justify-items-center gap-3 lg:grid-cols-2">
				{#each data.intermediate as item}
					<a href="/learn/{item.slug}" class="w-full">
						<div
							class="group card h-full border border-gray-700 bg-neutral shadow-md shadow-gray-800 hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700">
							<div class="card-body grid grid-cols-1 content-start space-y-2 px-5 lg:space-y-5">
								<h3 class="group-hover:text-primary">
									{item.name}
								</h3>
								<p class="text-sm lg:text-lg"><i>{item.intro}</i></p>
							</div>
						</div>
					</a>
				{/each}
			</div>
		</div>
		<div class="space-y-7 lg:rounded-2xl lg:bg-base-300">
			<div class="space-y-3 ps-1">
				<h2>
					<TablerStarFilled class="mb-1 inline fill-primary" /><TablerStarFilled
						class="mb-1 inline fill-primary" /><TablerStarFilled
						class="mb-1 inline fill-primary" /><TablerStarFilled
						class="mb-1 inline fill-primary" /><TablerStarFilled class="mb-1 inline fill-primary" />
				</h2>
				<h2>Advanced</h2>
			</div>
			<div class="grid grid-cols-1 justify-items-center gap-3 lg:grid-cols-2">
				{#each data.advanced as item}
					<a href="/learn/{item.slug}" class="w-full">
						<div
							class="group card h-full border border-gray-700 bg-neutral shadow-md shadow-gray-800 hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700">
							<div class="card-body grid grid-cols-1 content-start space-y-2 px-5 lg:space-y-5">
								<h3 class="group-hover:text-primary">
									{item.name}
								</h3>
								<p class="text-sm lg:text-lg"><i>{item.intro}</i></p>
							</div>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>
</ContentWrapper>
