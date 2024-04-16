<script>
	import { info } from './data_learn.js';
	import Breadcrumbs from '$lib/Breadcrumbs.svelte';
	import TablerHelpCircleFilled from '$lib/assets/svg/TablerHelpCircleFilled.svelte';
	let showMore = $state(true);
</script>

<Breadcrumbs textCurrent={'Learn'} />
<div class="mb-10 text-center lg:mb-10">
	<h1
		class="inline-block bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 text-transparent">
		Learn Bytes, Reap Career Delights
	</h1>
	<div><i>Find your own path upsizing your Bytes into Megabytes.</i></div>
</div>
<div class="mb-10 space-y-5 px-3 lg:px-20">
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
			<p class="pb-3 text-xl">
				Treat this as a start to get you going rather than something with a defined endpoint. It's
				impossible to be exhaustive, with each topic having tons of knowledge and materials yet to
				be covered. Information also gets outdated really fast with each day - a new release, a new
				framework, a new paradigm, etc.
			</p>
		</div>
	</div>
</div>
<div
	class="grid grid-cols-1 justify-items-center gap-x-8 gap-y-8 px-5 lg:grid-cols-2 lg:px-20 xl:grid-cols-4">
	{#each info as item}
		{#if item.name}
			<div
				class="card w-full border border-gray-700 bg-base-300 shadow-lg shadow-gray-900 hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700">
				<div class="card-body grid grid-cols-1 place-content-start">
					<h2
						class="mb-7 inline-block bg-gradient-to-r from-emerald-200 via-blue-300 to-teal-600 bg-clip-text text-transparent hover:text-primary">
						<a href="/learn/{item.slug}">{item.name}</a>
					</h2>
					<h3 class="hover:text-primary"><a href="/learn/{item.slug}">Topics</a></h3>
					<p class="mb-7 hover:text-primary">
						{#each item.topics as topic}
							<a
								href="/learn/{item.slug}"
								class="btn btn-outline btn-xs me-2 mt-1 hover:bg-base-300 hover:text-primary"
								>{topic}</a>
						{/each}
					</p>

					<div class="collapse collapse-plus bg-base-200">
						<input type="radio" name="accordion-{item.name}-1" />
						<div class="collapse-title">
							<h3>Find answers to...</h3>
						</div>
						<div class="collapse-content">
							<ul class="mb-7 list-disc ps-4">
								{#each item.questions as question, index}
									{#if index < 3}
										<li class="hover:text-primary">
											<a href="/learn/{item.slug}">{question}</a>
										</li>
									{/if}
								{/each}
								<a href="/learn/{item.slug}" class="hover:text-primary">...</a>
							</ul>
						</div>
					</div>
					<div class="collapse collapse-plus bg-base-200">
						<input type="radio" name="accordion-{item.name}-2" />
						<div class="collapse-title text-xl font-medium">
							<h3>Your Final Form</h3>
						</div>
						<div class="collapse-content">
							<ul class="list-disc ps-4">
								{#each item.objectives as objective, index}
									{#if index < 3}
										<li class="hover:text-primary">
											<a href="/learn/{item.slug}">{objective}</a>
										</li>
									{/if}
								{/each}
								<a href="/learn/{item.slug}" class="hover:text-primary">...</a>
							</ul>
						</div>
					</div>
					<a
						href="/learn/{item.slug}"
						class="btn btn-primary btn-sm hover:bg-lime-500 active:bg-lime-700 active:text-base-content"
						>Read more&nbsp;&nbsp;&#x2192;</a>
				</div>
			</div>
		{/if}
	{/each}
</div>
