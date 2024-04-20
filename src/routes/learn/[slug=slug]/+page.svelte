<script>
	import { page } from '$app/stores';
	import Breadcrumbs from '$lib/Breadcrumbs.svelte';
	import TablerLink from '$lib/assets/svg/TablerLink.svelte';
	const slug = $page.params.slug;
	let { data } = $props();
	import { newitem } from '../../todo/todo_store.js';
	import TablerSquareRoundedPlusFilled from '$lib/assets/svg/TablerSquareRoundedPlusFilled.svelte';
	import { slide } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';
	import TablerSquareRoundedChevronsRightFilled from '$lib/assets/svg/TablerSquareRoundedChevronsRightFilled.svelte';

	function updateItem(value) {
		newitem.update((currentList) => {
			currentList.push(value);
			return currentList;
		});
	}

	let newitem_value = $state();
	newitem.subscribe((value) => {
		newitem_value = value;
	});

	let goTodo = $state(false);
</script>

<Breadcrumbs urlMiddle="learn" textMiddle="Learn" textCurrent={data.post.name} />
<div
	class="grid grid-cols-1 place-content-start gap-4 rounded-2xl border border-gray-800 bg-base-300 px-2 py-5 shadow-xl shadow-gray-900 lg:mx-20 lg:grid-cols-2 lg:px-5">
	<div class="next-prev grid grid-cols-2 text-center font-bold lg:col-span-2">
		<div class="justify-self-start text-lg hover:text-primary lg:text-xl">
			<a href="/learn/{data.lastPost.slug}"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-circle-chevron-left mb-1 inline"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13 15l-3 -3l3 -3" /><path
						d="M21 12a9 9 0 1 0 -18 0a9 9 0 0 0 18 0z" /></svg> Previous</a>
		</div>
		<div class="justify-self-end text-lg hover:text-primary lg:text-xl">
			<a href="/learn/{data.nextPost.slug}"
				>Next <svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-circle-chevron-right mb-1 inline"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11 9l3 3l-3 3" /><path
						d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0z" /></svg
				></a>
		</div>
	</div>
	<div class="text-center lg:col-span-2">
		<figure><img src="" alt="" /></figure>
		<h1
			class="mb-3 inline-block bg-gradient-to-r from-emerald-200 via-blue-300 to-teal-300 bg-clip-text text-transparent">
			Learn: {data.post.name}
		</h1>
	</div>

	<div class="rounded-2xl border border-slate-700 bg-base-200 p-5 hover:bg-base-100 lg:col-span-2">
		<h3 class="mb-5">Topics</h3>
		<p class="mb-7">
			{#each data.post.topics as topic}
				<button
					class="hover:border-1 group btn btn-outline btn-xs me-2 mt-1 hover:border hover:border-neutral hover:bg-teal-400 hover:text-white"
					onclick={(e) => {
						updateItem(topic);
						e.currentTarget.classList.add('btn-primary');
						goTodo = true;
						console.log(goTodo);
						console.log(newitem_value);
					}}
					>{topic}
					<TablerSquareRoundedPlusFilled
						class="-me-2.5 inline fill-base-content pb-0.5 group-hover:fill-white"
						height="2em"
						width="2em" /></button>
			{/each}
			{#if goTodo}
				<a
					href="/todo"
					class="ms-5 text-base font-medium text-primary"
					in:slide={{ axis: 'x', duration: 700, delay: 50, easing: elasticOut }}
					><TablerSquareRoundedChevronsRightFilled
						class="mb-1 inline fill-primary"
						width="1.5rem"
						height="1.5rem" /> Track these as To-Dos</a>
			{/if}
		</p>
	</div>

	<div class="rounded-2xl border border-slate-700 bg-base-200 p-5 hover:bg-base-100">
		<h3 class="mb-5">Find answers to...</h3>
		<ul class="mb-7 list-disc ps-4">
			{#each data.post.questions as question}
				<li>{question}</li>
			{/each}
		</ul>
	</div>
	<div class="rounded-2xl border border-slate-700 bg-base-200 p-5 hover:bg-base-100">
		<h3 class="mb-5">Objectives</h3>
		<ul class="list-disc ps-4">
			{#each data.post.objectives as objective}
				<li>{objective}</li>
			{/each}
		</ul>
	</div>
	<div
		class="col-span-1 rounded-2xl border border-slate-700 bg-base-200 p-5 hover:bg-base-100 lg:col-span-2">
		<h3 class="mb-5">My Observations</h3>
		<div class="grid grid-cols-1 gap-x-3 gap-y-3 lg:grid-cols-4">
			{#if data.post.issues == '' || !data.post.issues}
				Haven't gotten to writing this yet.
			{:else}
				{#each data.post.issues as issue}
					<div class="card grid max-w-full content-center bg-neutral text-neutral-content">
						<div class="card-body text-center">
							{issue}
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
	<div class="rounded-2xl border border-slate-700 bg-base-200 p-5 hover:bg-base-100 lg:col-span-2">
		<h3 class="mb-5">Courses</h3>
		{#if data.post.resources.courses == '' || !data.post.resources.courses}
			Sorry, nothing here
		{:else}
			<ul class="list-disc ps-4">
				{#each data.post.resources.courses as course}
					<li><a href={course.url} class="hover:text-primary">{course.text}</a></li>
				{/each}
			</ul>
		{/if}
	</div>
	<div
		class="col-span-1 rounded-2xl border border-slate-700 bg-base-200 p-5 hover:bg-base-100 lg:col-span-2">
		<h3 class="mb-5">Readings</h3>

		{#if data.post.resources.links == ''}
			Sorry, nothing here
		{:else}
			<ul class="list-disc ps-4">
				{#each data.post.resources.links as link}
					<li><a href={link.url} class="hover:text-primary">{link.text}</a></li>
				{/each}
			</ul>
		{/if}
	</div>
	<div class="rounded-2xl border border-slate-700 bg-base-200 p-5 hover:bg-base-100 lg:col-span-2">
		<h3 class="mb-5">
			Watch on Youtube

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
		</h3>
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
	</div>
</div>

<style>
	li {
		margin-bottom: 0.75rem;
		padding-left: 0.75rem;
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
