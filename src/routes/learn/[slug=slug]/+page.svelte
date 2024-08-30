<script lang="ts">
	import Breadcrumbs from '$lib/Breadcrumbs.svelte';
	import TablerLink from '$lib/assets/svg/TablerLink.svelte';
	let { data } = $props();
	import { newitem } from '../../todo/todo_store';
	import TablerSquareRoundedPlusFilled from '$lib/assets/svg/TablerSquareRoundedPlusFilled.svelte';
	import { slide } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';
	import TablerSquareRoundedChevronsRightFilled from '$lib/assets/svg/TablerSquareRoundedChevronsRightFilled.svelte';
	import ContentWrapper from '$lib/ContentWrapper.svelte';
	import { type Contents } from '$lib/Types';
	import { onMount } from 'svelte';
	import CarbonCheckmarkFilled from '$lib/assets/svg/CarbonCheckmarkFilled.svelte';
	import SimpleIconsKnowledgeBase from '$lib/assets/svg/SimpleIconsKnowledgeBase.svelte';
	let contents: Contents[] = [
		{ id: 'topics', title: '1. Topics' },
		{ id: 'answers', title: '2. Find Answers To...' },
		{ id: 'objectives', title: '3. Objectives' },
		{ id: 'observations', title: '4. My Observations' },
		{ id: 'courses', title: '5. Courses' },
		{ id: 'readings', title: '6. Readings' },
		{ id: 'youtube', title: '7. Watch on Youtube' },
	];

	let currentSection: any = $state();
	let path: any = $derived(data.url.split('/'));
	let category: any = $derived(path[1]);
	$inspect(category);
	let page: any = $derived(path[2]);
	$inspect(page);
	let textMiddle: string = 'Learn';
	let textCurrent: string = data.post.name;

	/* 	function updateItem(value) {
		newitem.update((currentList) => {
			currentList.push(value);
			return currentList;
		});
	}

	let newitem_value = $state();
	newitem.subscribe((value) => {
		newitem_value = value;
	});

	let goTodo = $state(false); */

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
	{textMiddle}
	{category}
	{contents}
	{currentSection}
	{textCurrent}>
	<div class="space-y-12 prose-h2:mb-6 prose-h3:mb-6">
		<section class="mb-12">
			<div>
				<h1
					class="mb-4 inline-block bg-gradient-to-r from-emerald-200 via-lime-200 to-teal-300 bg-clip-text text-transparent">
					Learn: {data.post.name}
				</h1>
			</div>
		</section>
		<section
			id="topics"
			class="contents-observer rounded-2xl border border-slate-700 bg-neutral p-4 hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700 lg:p-8">
			<h2>1. Topics</h2>
			<ul class="flex flex-wrap items-center">
				{#each data.post.topics as topic}
					<li class="me-4">
						<SimpleIconsKnowledgeBase class="mb-1 inline text-sm text-lime-200" />
						{topic}
					</li>
				{/each}
			</ul>
		</section>

		<section
			id="answers"
			class="contents-observer rounded-2xl border border-slate-700 bg-neutral p-4 hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700 lg:p-8">
			<h2>2. Find answers to...</h2>
			<ul class="ms-4 list-disc">
				{#each data.post.questions as question}
					<li>{question}</li>
				{/each}
			</ul>
		</section>

		<section
			id="objectives"
			class="contents-observer rounded-2xl border border-slate-700 bg-base-200 p-4 hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700 lg:p-8">
			<h2>3. Objectives</h2>
			<ul class="ms-4 list-disc">
				{#each data.post.objectives as objective}
					<li>{objective}</li>
				{/each}
			</ul>
		</section>

		<section
			id="observations"
			class="contents-observer rounded-2xl border border-slate-700 bg-neutral p-4 hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700 lg:p-8">
			<h2>4. My Observations</h2>
			<div class="gap-y-4">
				{#if data.post.issues == '' || !data.post.issues}
					Haven't gotten to writing this yet.
				{:else}
					<ul class="list-disc ps-4">
						{#each data.post.issues as issue}
							<li>{issue}</li>
						{/each}
					</ul>
				{/if}
			</div>
		</section>
		<section
			id="courses"
			class="contents-observer rounded-2xl border border-slate-700 bg-neutral p-4 hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700 lg:p-8">
			<h2>5. Courses</h2>
			{#if data.post.resources.courses == '' || !data.post.resources.courses}
				Sorry, nothing here
			{:else}
				<ul class="list-disc ps-4">
					{#each data.post.resources.courses as course}
						<li>
							<a href={course.url} class="underline hover:text-primary">{course.text}</a>
						</li>
					{/each}
				</ul>
			{/if}
		</section>
		<section
			id="readings"
			class="contents-observer rounded-2xl border border-slate-700 bg-neutral p-4 hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700 lg:p-8">
			<h2>6. Readings</h2>

			{#if data.post.resources.links == ''}
				Sorry, nothing here
			{:else}
				<ul class="list-disc ps-4">
					{#each data.post.resources.links as link}
						<li>
							<a href={link.url} class="underline hover:text-primary">{link.text}</a>
						</li>
					{/each}
				</ul>
			{/if}
		</section>
		<section
			id="youtube"
			class="contents-observer rounded-2xl border border-slate-700 bg-neutral p-4 hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700 lg:p-8">
			<h2>
				7. Watch on Youtube

				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-brand-youtube-filled inline pb-1"
					width="1.5em"
					height="1.5em"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
						d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z"
						stroke-width="0"
						fill="currentColor" /></svg>
			</h2>
			{#if data.post.resources.youtube == ''}
				Sorry, nothing here
			{:else}
				{#each data.post.resources.youtube as resource}
					<div class="mb-5">
						<iframe
							width="560"
							height="315"
							src={resource}
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen></iframe>
					</div>
				{/each}
			{/if}
		</section>
	</div>
</ContentWrapper>

<style>
	li {
		margin-bottom: 0.75rem;
		padding-left: 0.1rem;
	}

	.next-prev {
		view-transition-name: next-prev;
	}

	/* Mobile Youtube */
	@media screen and (max-width: 767px) {
		iframe[src*='youtube'] {
			width: 100% !important;
		}
	}
</style>
