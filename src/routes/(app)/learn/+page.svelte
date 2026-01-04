<script lang="ts">
	import { info } from './data_learn.js';

	let { data } = $props();

	// Featured "start here" topics
	const starterSlugs = ['basics', 'basics-web'];
	const starterTopics = info.filter((i) => starterSlugs.includes(i.slug));
	const otherTopics = info.filter((i) => !starterSlugs.includes(i.slug));

	// Helper to count resources
	function countResources(entry: LearnData) {
		const r = entry.resources;
		const videos = r.youtube?.length ?? 0;
		const courses = r.courses?.length ?? 0;
		const links = r.links?.length ?? 0;
		return { videos, courses, links, total: videos + courses + links };
	}

	const pageTitle = 'Knowledge Base';
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<div class="mx-auto max-w-5xl px-6 py-12">
	<div class="mb-12">
		<h1 class="text-4xl font-bold">{pageTitle}</h1>
		<p class="text-base-content mt-2 max-w-2xl text-sm font-light">
			Tech fundamentals explained for people who need to understand it, not build it.
		</p>
	</div>

	{#if starterTopics.length > 0}
		<section class="mb-16">
			<p class="text-base-content/75 mb-4 text-sm font-semibold tracking-wide uppercase">
				Start here
			</p>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				{#each starterTopics as topic}
					{@const counts = countResources(topic)}
					<a
						href="/learn/{topic.slug}"
						class="group border-base-content/10 flex flex-col rounded-2xl border bg-white p-6 shadow-md transition-all hover:shadow-lg">
						<h2
							class="text-base-content group-hover:text-primary text-2xl font-bold transition-colors">
							{topic.name}
						</h2>
						<p class="text-base-content/70 mt-2">
							{topic.questions?.[0] ?? topic.intro}
						</p>

						<!-- Topic pills -->
						<div class="mt-4 flex flex-wrap gap-2">
							{#each topic.topics?.slice(0, 6) ?? [] as t}
								<span
									class="text-base-content/80 border-base-content/10 bg-base-100 rounded-full border px-2.5 py-0.5 text-xs">
									{t}
								</span>
							{/each}
							{#if (topic.topics?.length ?? 0) > 6}
								<span class="bg-primary/10 text-primary rounded-full px-2.5 py-0.5 text-xs">
									+{topic.topics.length - 6} more
								</span>
							{/if}
						</div>

						<div class="text-base-content/75 mt-auto flex gap-4 pt-4 text-sm">
							{#if counts.videos > 0}
								<span>{counts.videos} videos</span>
							{/if}
							{#if counts.courses > 0}
								<span>{counts.courses} courses</span>
							{/if}
							{#if counts.links > 0}
								<span>{counts.links} articles</span>
							{/if}
						</div>
					</a>
				{/each}
			</div>
		</section>
	{/if}

	<section>
		<p class="text-base-content/75 mb-4 text-sm font-semibold tracking-wide uppercase">
			Keep going
		</p>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each otherTopics as entry}
				{@const counts = countResources(entry)}
				<a
					href="/learn/{entry.slug}"
					class="group border-base-content/10 hover:border-base-content/20 flex flex-col rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-md">
					<h3
						class="text-base-content group-hover:text-primary text-xl font-bold transition-colors">
						{entry.name}
					</h3>

					<p class="text-base-content/60 mt-2 text-sm leading-relaxed">
						{entry.questions?.[0] ?? entry.intro}
					</p>

					<!-- Topic pills -->
					<div class="mt-4 flex flex-wrap gap-1.5">
						{#each entry.topics?.slice(0, 4) ?? [] as topic}
							<span
								class="bg-base-content/5 text-base-content/60 rounded-full px-2.5 py-0.5 text-xs">
								{topic}
							</span>
						{/each}
						{#if (entry.topics?.length ?? 0) > 4}
							<span
								class="bg-base-content/5 text-base-content/40 rounded-full px-2.5 py-0.5 text-xs">
								+{entry.topics.length - 4}
							</span>
						{/if}
					</div>

					<!-- Resource count -->
					<div class="text-base-content/75 mt-auto flex gap-4 pt-4 text-xs">
						{#if counts.total > 0}
							<span>{counts.total} resources</span>
						{/if}
					</div>
				</a>
			{/each}
		</div>
	</section>
</div>
