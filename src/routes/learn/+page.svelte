<script>
	import { info } from './data_learn';
	import Breadcrumbs from '$lib/Breadcrumbs.svelte';
	import TablerHelpCircleFilled from '$lib/assets/svg/TablerHelpCircleFilled.svelte';
	import TablerStarFilled from '$lib/assets/svg/TablerStarFilled.svelte';
	let showMore = $state(false);
	let { data } = $props();
</script>

<Breadcrumbs textCurrent={'Learn'} />
<div class="mb-10 text-center lg:mb-10">
	<h1
		class="inline-block bg-gradient-to-r from-emerald-200 via-lime-200 to-teal-300 bg-clip-text py-3 text-transparent">
		Learn Bytes, Reap Career Delights
	</h1>
	<div><i>Find your own path upsizing your Bytes into Megabytes.</i></div>
</div>
<div class="mb-10 space-y-5 px-2 lg:px-20">
	<div class="collapse collapse-arrow mb-10 bg-base-300">
		<input type="checkbox" name="my-accordion-2" bind:checked={showMore} />
		<div class="collapse-title">
			<h2><TablerHelpCircleFilled class="mb-1 me-3 inline" />What's this?</h2>
		</div>
		<div class="collapse-content space-y-5 bg-base-300 px-5">
			<p class="border-t-2 border-t-gray-700 pt-5">
				This section gives you a curated list of resources to learn at your own pace from online
				courses, Youtube channels, Youtube videos, articles, blog posts, cloud provider
				documentation, etc.
			</p>
			<p class="pb-3">
				Treat this as a start to get you going rather than something with a defined endpoint. It's
				impossible to be exhaustive, with each topic having tons of knowledge and materials yet to
				be covered. Information also gets outdated really fast with each day - a new release, a new
				framework, a new paradigm, etc.
			</p>
		</div>
	</div>
</div>
<div class="mx-2 space-y-10 pt-7 lg:mx-20">
	<div class="space-y-7 rounded-2xl bg-base-300 p-3 lg:p-5">
		<div class="space-y-3 ps-1">
			<h2>
				<TablerStarFilled class="mb-1 inline fill-lime-200" /><TablerStarFilled
					class="mb-1 inline fill-gray-600" /><TablerStarFilled
					class="mb-1 inline fill-gray-600" /><TablerStarFilled
					class="mb-1 inline fill-gray-600" /><TablerStarFilled class="mb-1 inline fill-gray-600" />
			</h2>
			<h2
				class="inline-block bg-gradient-to-r from-emerald-200 via-lime-200 to-teal-300 bg-clip-text text-transparent">
				Beginner
			</h2>
		</div>
		<div class="grid grid-cols-1 justify-items-center gap-3 lg:grid-cols-2 xl:grid-cols-4">
			{#each data.beginner as item}
				<a href="/learn/{item.slug}" class="w-full">
					<div
						class="card h-full border border-gray-700 bg-base-200 shadow-md shadow-gray-800 hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700">
						<div class="card-body grid grid-cols-1 content-start space-y-5 px-5">
							<h3 class="hover:text-primary">
								{item.name}
							</h3>
							<p class="text-lg"><i>{item.intro}</i></p>
							<div class="w-full">
								{#each item.topics as topic}
									<span
										class="btn btn-outline btn-sm me-2 mt-1 hover:bg-base-300 hover:text-primary"
										>{topic}</span>
								{/each}
							</div>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>

	<div class="space-y-7 rounded-2xl bg-base-300 p-3 lg:p-5">
		<div class="space-y-3 ps-1">
			<h2>
				<TablerStarFilled class="mb-1 inline fill-lime-200 " /><TablerStarFilled
					class="mb-1 inline fill-lime-200" /><TablerStarFilled
					class="mb-1 inline fill-lime-200" /><TablerStarFilled
					class="mb-1 inline fill-gray-600" /><TablerStarFilled class="mb-1 inline fill-gray-600" />
			</h2>
			<h2
				class="inline-block bg-gradient-to-r from-emerald-200 via-lime-200 to-teal-300 bg-clip-text text-transparent">
				Intermediate
			</h2>
		</div>
		<div class="grid grid-cols-1 justify-items-center gap-3 lg:grid-cols-2 xl:grid-cols-4">
			{#each data.intermediate as item}
				<a href="/learn/{item.slug}" class="w-full">
					<div
						class="card h-full border border-gray-700 bg-base-200 shadow-md shadow-gray-800 hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700">
						<div class="card-body grid grid-cols-1 content-start space-y-5 px-5">
							<h3 class="hover:text-primary">
								{item.name}
							</h3>
							<p class="text-lg"><i>{item.intro}</i></p>
							<div class="w-full">
								{#each item.topics as topic}
									<span
										class="btn btn-outline btn-sm me-2 mt-1 hover:bg-base-300 hover:text-primary"
										>{topic}</span>
								{/each}
							</div>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
	<div class="space-y-7 rounded-2xl bg-base-300 p-3 lg:p-5">
		<div class="space-y-3 ps-1">
			<h2>
				<TablerStarFilled class="mb-1 inline fill-lime-200" /><TablerStarFilled
					class="mb-1 inline fill-lime-200" /><TablerStarFilled
					class="mb-1 inline fill-lime-200" /><TablerStarFilled
					class="mb-1 inline fill-lime-200" /><TablerStarFilled class="mb-1 inline fill-lime-200" />
			</h2>
			<h2
				class="inline-block bg-gradient-to-r from-emerald-200 via-lime-200 to-teal-300 bg-clip-text text-transparent">
				Advanced
			</h2>
		</div>
		<div class="grid grid-cols-1 justify-items-center gap-3 lg:grid-cols-2 xl:grid-cols-4">
			{#each data.advanced as item}
				<a href="/learn/{item.slug}" class="w-full">
					<div
						class="card h-full border border-gray-700 bg-base-200 shadow-md shadow-gray-800 hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700">
						<div class="card-body grid grid-cols-1 content-start space-y-5 px-5">
							<h3 class="hover:text-primary">
								{item.name}
							</h3>
							<p class="text-lg"><i>{item.intro}</i></p>
							<div class="w-full">
								{#each item.topics as topic}
									<span
										class="btn btn-outline btn-sm me-2 mt-1 hover:bg-base-300 hover:text-primary"
										>{topic}</span>
								{/each}
							</div>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>
