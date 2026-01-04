<script lang="ts">
	import NavToc from '$lib/NavToc.svelte';
	import NewWrap from '$lib/NewWrap.svelte';
	import Intersection from '$lib/ui/Intersection.svelte';
	import Section from '$lib/ui/Section.svelte';
	import CarbonHelpFilled from '$lib/assets/svg/CarbonHelpFilled.svelte';
	import CarbonReply from '$lib/assets/svg/CarbonReply.svelte';
	import { Marked, marked } from 'marked';
	import CarbonWarningFilled from '$lib/assets/svg/CarbonWarningFilled.svelte';
	import CarbonCloseFilled from '$lib/assets/svg/CarbonCloseFilled.svelte';
	import CarbonNotificationFilled from '$lib/assets/svg/CarbonNotificationFilled.svelte';
	let { data } = $props();

	let markedQuestions = $derived.by(() => {
		return data.post?.questions.map((q) => {
			return {
				what: q.what,
				why: String(marked.parse(q.why)),
			};
		});
	});

	let markedAlarms = $derived.by(() => {
		return data.post?.alarms?.map((a) => {
			return {
				what: a.what,
				why: String(marked.parse(a.why)),
			};
		});
	});

	let markedDealbreakers = $derived.by(() => {
		return data.post?.dealbreakers?.map((d) => {
			return {
				what: d.what,
				why: String(marked.parse(d.why)),
			};
		});
	});

	let currentSection = $state('');

	let contents = $derived.by(() => {
		let items: TableOfContent[] = [];
		if (data.post?.definitions && data.post.definitions.length > 0)
			items.push({ id: 'definitions', title: 'Definitions' });
		if (data.post?.goals && data.post.goals.length > 0) items.push({ id: 'goals', title: 'Goals' });
		if (markedQuestions && markedQuestions.length > 0)
			items.push({ id: 'questions', title: 'Questions' });
		if (markedAlarms && markedAlarms.length > 0) items.push({ id: 'alarms', title: 'Alarm Bells' });
		if (markedDealbreakers && markedDealbreakers.length > 0)
			items.push({ id: 'dealbreakers', title: 'Dealbreakers' });
		return items;
	});
</script>

<svelte:head>
	<title>Apptitude - {data.post?.name}</title>
</svelte:head>

{#if data.post}
	<NewWrap title={data.post.name}>
		<Intersection bind:currentSection>
			<article
				class="grid gap-y-20 pb-10">
				{#if data.post.definitions && data.post.definitions.length > 0}
					<Section id="definitions" title="Definitions">
						{#each data.post.definitions as d}
							{@render definitionCard(d.term, d.definition)}
						{/each}
					</Section>
				{/if}

				{#if data.post.goals && data.post.goals.length > 0}
					<Section id="goals" title="Goals">
						{#each data.post.goals as goal, i}
							{@render goalCard(goal, i + 1)}
						{/each}
					</Section>
				{/if}

				{#snippet definitionCard(term: string, definition: string)}
					<div
						class="bg-base-card grid grid-cols-[1fr_2fr] content-center gap-8 rounded-xl p-8 shadow">
						<div class="font-bold">
							{term}
						</div>
						<div class="grid content-center">{definition}</div>
					</div>
				{/snippet}

				{#snippet goalCard(content: string, index: number)}
					<div
						class="bg-base-card grid grid-cols-[auto_1fr] content-center gap-4 rounded-xl p-8 shadow">
						<div
							class="bg-base-content text-base-100 flex aspect-square size-8 items-center justify-center rounded-full font-bold">
							{index}
						</div>
						<div class="grid content-center">{content}</div>
					</div>
				{/snippet}

				{#if markedQuestions && markedQuestions.length > 0}
					<Section id="questions" title="Questions to Ask">
						{#each markedQuestions as q}
							{@render questionCard(q.what, q.why)}
						{/each}
					</Section>
				{/if}

				{#snippet questionCard(question: string, answer: string)}
					<div
						class="bg-base-card grid content-center gap-4 rounded-xl p-8 shadow lg:grid-cols-[auto_1fr]">
						<div
							class="bg-primary text-base-100 flex aspect-square size-8 items-center justify-center rounded-full font-bold">
							?
						</div>
						<div class="grid max-w-[75ch] content-center font-bold">
							{question}
						</div>
						<div class="size-7"></div>
						<div class="prose prose-p:pb-4 prose-p:last-of-type:pb-0 max-w-[75ch] *:my-0!">
							{@html answer}
						</div>
					</div>
				{/snippet}

				{#if markedAlarms && markedAlarms.length > 0}
					<Section id="alarms" title="Alarm Bells">
						{#each markedAlarms as a}
							{@render whatWhyCard('warning', a.what, a.why)}
						{/each}
					</Section>
				{/if}

				{#snippet whatWhyCard(icon: string, what: string, why: string)}
					<div
						class="bg-base-card grid content-center gap-4 rounded-xl p-8 shadow lg:grid-cols-[auto_1fr]">
						{#if icon === 'warning'}
							<div class="bg-warning flex size-8 items-center justify-center rounded-full">
								<CarbonNotificationFilled class="text-base-100 size-5" />
							</div>
						{:else}
							<CarbonCloseFilled class="text-error size-8" />
						{/if}

						<div class="grid gap-4">
							<div
								class="border-b-base-content/30 grid max-w-[75ch] content-center border-b-2 pb-4 leading-7">
								<div class="mb-2 text-sm font-bold uppercase">They say...</div>
								{what}
							</div>

							<div class="grid max-w-[75ch] content-center pb-4">
								<div class="mb-2 text-sm font-bold uppercase">Why it's scary</div>
								<div
									class="prose prose-p:text-base-content prose-p:pb-4 prose-p:last-of-type:pb-0 max-w-[75ch] *:my-0!">
									{@html why}
								</div>
							</div>
						</div>
					</div>
				{/snippet}

				{#if markedDealbreakers && markedDealbreakers.length > 0}
					<Section id="dealbreakers" title="Dealbreakers">
						{#each markedDealbreakers as d}
							{@render whatWhyCard('error', d.what, d.why)}
						{/each}
					</Section>
				{/if}
			</article>
		</Intersection>
		{#snippet toc()}
			<NavToc {contents} {currentSection} />
		{/snippet}
	</NewWrap>
{/if}

<style>
	:target {
		scroll-margin-top: 4.5rem;
	}
</style>
