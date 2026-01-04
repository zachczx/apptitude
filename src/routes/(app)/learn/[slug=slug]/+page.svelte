<script lang="ts">
	import NewWrap from '$lib/NewWrap.svelte';
	import NavToc from '$lib/NavToc.svelte';
	import Intersection from '$lib/ui/Intersection.svelte';
	import Section from '$lib/ui/Section.svelte';
	import CarbonWarningFilled from '$lib/assets/svg/CarbonWarningFilled.svelte';

	let { data } = $props();

	let contents: TableOfContent[] = [
		{ id: 'questions', title: 'Questions' },
		{ id: 'objectives', title: 'Objectives' },
		{ id: 'observations', title: 'Observations' },
		{ id: 'resources', title: 'Resources' },
	];

	let currentSection = $state('');

	const observerConfig = {
		rootMargin: '-20% 0% -65% 0%',
		threshold: 0,
	};
</script>

<svelte:head>
	<title>Apptitude - {data.post?.name}</title>
</svelte:head>

<NewWrap title={data.post?.name ?? ''}>
	{#if data.post?.topics && data.post.topics.length > 0}
		<div class="mb-12 flex flex-wrap gap-2">
			{#each data.post.topics as topic}
				<span class="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium">
					{topic}
				</span>
			{/each}
		</div>
	{/if}

	<Intersection bind:currentSection config={observerConfig}>
		<article class="grid gap-20 pb-10">
			{#if data.post?.questions && data.post.questions.length > 0}
				<Section id="questions" title="Questions You'll Answer">
					<div class="grid gap-4">
						{#each data.post.questions as question}
							<div
								class="bg-base-card grid grid-cols-[auto_1fr] items-center gap-4 rounded-xl p-6 shadow-sm">
								<div
									class="bg-primary text-primary-content flex size-8 items-center justify-center rounded-full text-sm font-bold">
									?
								</div>
								<p class="text-base-content">{question}</p>
							</div>
						{/each}
					</div>
				</Section>
			{/if}

			{#if data.post?.objectives && data.post.objectives.length > 0}
				<Section id="objectives" title="What You'll Learn">
					<div class="grid gap-4">
						{#each data.post.objectives as objective, i}
							<div
								class="bg-base-card grid grid-cols-[auto_1fr] items-center gap-4 rounded-xl p-6 shadow-sm">
								<div
									class="bg-secondary text-secondary-content flex size-8 items-center justify-center rounded-full text-sm font-bold">
									{i + 1}
								</div>
								<p class="text-base-content">{objective}</p>
							</div>
						{/each}
					</div>
				</Section>
			{/if}

			{#if data.post?.issues && data.post.issues.length > 0}
				<Section id="observations" title="Things to Keep in Mind">
					<div class="grid gap-4">
						{#each data.post.issues as issue}
							<div
								class="bg-base-card grid grid-cols-[auto_1fr] items-center gap-4 rounded-xl p-6 shadow-sm">
								<CarbonWarningFilled class="text-error size-8" />
								<p class="text-base-content">{issue}</p>
							</div>
						{/each}
					</div>
				</Section>
			{/if}

			<Section id="resources" title="Resources">
				<div class="grid gap-8">
					{#if data.post?.resources.courses && data.post.resources.courses.length > 0}
						<div>
							<h3 class="text-base-content/70 mb-4 text-lg font-semibold">Courses</h3>
							<div class="grid gap-3 sm:grid-cols-2">
								{#each data.post.resources.courses as course}
									<a
										href={course.url}
										target="_blank"
										rel="noopener noreferrer"
										class="bg-base-card group flex items-start gap-3 rounded-xl p-4 shadow-sm transition-all hover:shadow-md">
										<div
											class="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-lg">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="size-5"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round">
												<path d="M22 10v6M2 10l10-5 10 5-10 5z" />
												<path d="M6 12v5c3 3 9 3 12 0v-5" />
											</svg>
										</div>
										<span
											class="text-base-content group-hover:text-primary text-sm font-medium transition-colors">
											{course.text}
										</span>
									</a>
								{/each}
							</div>
						</div>
					{/if}

					{#if data.post?.resources.links && data.post.resources.links.length > 0}
						<div>
							<h3 class="text-base-content/70 mb-4 text-lg font-semibold">Articles & Readings</h3>
							<div class="grid gap-3 sm:grid-cols-2">
								{#each data.post.resources.links as link}
									<a
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
										class="bg-base-card group flex items-center gap-3 rounded-xl p-4 shadow-sm transition-all hover:shadow-md">
										<div
											class="bg-accent/20 text-accent-content flex size-10 shrink-0 items-center justify-center rounded-lg">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="size-5"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round">
												<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
											</svg>
										</div>
										<span
											class="text-base-content group-hover:text-primary text-sm font-medium transition-colors">
											{link.text}
										</span>
									</a>
								{/each}
							</div>
						</div>
					{/if}

					{#if data.post?.resources.youtube && data.post.resources.youtube.length > 0}
						<div>
							<h3 class="text-base-content/70 mb-4 text-lg font-semibold">Videos</h3>
							<div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
								{#each data.post.resources.youtube as resource}
									<div class="aspect-video w-full overflow-hidden rounded-xl bg-black/5 shadow-sm">
										<iframe
											class="h-full w-full"
											src={resource}
											title="YouTube video player"
											frameborder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
											allowfullscreen></iframe>
									</div>
								{/each}
							</div>
						</div>
					{/if}
				</div>
			</Section>
		</article>
	</Intersection>

	{#snippet toc()}
		<NavToc {contents} {currentSection} />
	{/snippet}
</NewWrap>

<style>
	:target {
		scroll-margin-top: 6rem;
	}
</style>
