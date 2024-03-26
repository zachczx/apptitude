<script>
	import userCircle from '$lib/assets/svg/user-circle.svg';
	import Breadcrumbs from '$lib/Breadcrumbs.svelte';
	import chevronDown from '$lib/assets/svg/chevron-down.svg';
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	const slug = $page.params.slug;
	let { data } = $props();

	let seeMoreVar = $state(false);
	function seeMore() {
		seeMoreVar = !seeMoreVar;
		console.log(seeMoreVar);
	}

	//for byline
	let currentBylineNumber = $state(0);
	let bylineTotal = data.post.bylines.length - 1;

	setInterval(() => {
		if (currentBylineNumber < bylineTotal) {
			currentBylineNumber += 1;
		} else {
			currentBylineNumber = 0;
		}
	}, 10000);

	//for checkboxes
	let boxDefinition = $state(false);
	let boxGoals = $state(true);
	let boxQuestions = $state(false);
	let boxDealbreakers = $state(false);
	let boxPossibleSolutions = $state(false);
	let boxSuggestions = $state(false);
	let toggleButtonValue = $state(false);
	function toggleButton() {
		if (toggleButtonValue === false) {
			boxDefinition =
				boxGoals =
				boxQuestions =
				boxDealbreakers =
				boxPossibleSolutions =
				boxSuggestions =
					true;

			toggleButtonValue = !toggleButtonValue;
			console.log(
				boxDefinition,
				boxGoals,
				boxQuestions,
				boxDealbreakers,
				boxPossibleSolutions,
				boxSuggestions
			);
		} else {
			boxDefinition =
				boxGoals =
				boxQuestions =
				boxDealbreakers =
				boxPossibleSolutions =
				boxSuggestions =
					false;
			console.log(
				boxDefinition,
				boxGoals,
				boxQuestions,
				boxDealbreakers,
				boxPossibleSolutions,
				boxSuggestions
			);
			toggleButtonValue = !toggleButtonValue;
		}
		/*
		boxDefinition = !boxDefinition;
		boxGoals = !boxGoals;
		boxQuestions = !boxQuestions;
		boxDealbreakers = !boxDealbreakers;
		boxPossibleSolutions = !boxPossibleSolutions;
		boxSuggestions = !boxSuggestions;*/
	}
</script>

<Breadcrumbs urlMiddle="cacheup" textMiddle={'Cache Up!'} textCurrent={data.post.name} />
<div class="mb-10 text-center lg:mb-10">
	<h1
		class="mb-10 inline-block bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 text-transparent"
	>
		{data.post.name}
	</h1>
	{#if data.post.bylines[0].text != ''}
		<div class="grid-cols-auto grid place-items-center px-5 lg:px-20">
			{#key currentBylineNumber}
				<div class="chat chat-start" in:fade={{ duration: 1000 }}>
					<div class="avatar chat-image">
						<div class="w-14 rounded-full">
							<img src={data.post.bylines[currentBylineNumber].icon} alt="Author" />
						</div>
					</div>
					<div class="chat-bubble"><i>{data.post.bylines[currentBylineNumber].text}</i></div>
				</div>
			{/key}
		</div>
	{/if}
</div>
<div class="mb-5 flex justify-end px-6 lg:px-20">
	<label class="space-x-2">
		<span class="align-top text-lg">Expand all</span>
		<input type="checkbox" class="toggle" on:click={toggleButton} />
	</label>
</div>
<div class="grid grid-cols-1 justify-items-center gap-x-8 gap-y-8 px-2 lg:px-20">
	<div class="collapse bg-base-200">
		<input type="checkbox" class="peer" bind:checked={boxDefinition} />
		<div
			class="collapse-title flex justify-between bg-base-300 text-center peer-checked:bg-slate-900"
		>
			<div class="self-center"><img src={chevronDown} alt="Arrow down" /></div>
			<h2 class="flex">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="icon icon-tabler icons-tabler-outline icon-tabler-file-description me-3 inline"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
						d="M14 3v4a1 1 0 0 0 1 1h4"
					/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path
						d="M9 17h6"
					/><path d="M9 13h6" /></svg
				>Definitions
			</h2>
			<div class="self-center"><img src={chevronDown} alt="Arrow down" /></div>
		</div>
		<div class="collapse-content bg-gradient-to-b from-slate-900 to-slate-800">
			<div class="card w-full bg-base-300 shadow-xl xl:col-span-1">
				<div class="card-body">
					<ol class="list-decimal divide-y-2 divide-slate-600">
						{#each data.post.definitions as definition}
							<li class="rounded text-lg hover:bg-slate-700">{definition}</li>
						{/each}
					</ol>
				</div>
			</div>
		</div>
	</div>

	<div class="collapse bg-base-200">
		<input type="checkbox" class="peer" bind:checked={boxGoals} />
		<div
			class="collapse-title flex justify-between bg-base-300 text-center peer-checked:bg-pink-800"
		>
			<div class="self-center"><img src={chevronDown} alt="Arrow down" /></div>
			<h2 class="flex">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="icon icon-tabler icons-tabler-outline icon-tabler-target-arrow me-2 inline"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
						d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
					/><path d="M12 7a5 5 0 1 0 5 5" /><path d="M13 3.055a9 9 0 1 0 7.941 7.945" /><path
						d="M15 6v3h3l3 -3h-3v-3z"
					/><path d="M15 9l-3 3" /></svg
				>Goals
			</h2>
			<div class="self-center"><img src={chevronDown} alt="Arrow down" /></div>
		</div>
		<div class="collapse-content bg-gradient-to-b from-pink-800 to-rose-700">
			<div class="card w-full bg-base-300 shadow-xl">
				<div class="card-body">
					<ol class="list-decimal divide-y-2 divide-slate-600">
						{#each data.post.goals as goal}
							<li class="rounded text-lg hover:bg-slate-700">{goal}</li>
						{/each}
					</ol>
				</div>
			</div>
		</div>
	</div>

	<div class="collapse bg-base-200">
		<input type="checkbox" class="peer" bind:checked={boxQuestions} />
		<div
			class="collapse-title flex justify-between bg-base-300 text-center peer-checked:bg-pink-800"
		>
			<div class="self-center"><img src={chevronDown} alt="Arrow down" /></div>
			<h2 class="flex">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="icon icon-tabler icons-tabler-outline icon-tabler-progress-help me-3"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 16v.01" /><path
						d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"
					/><path d="M10 20.777a8.942 8.942 0 0 1 -2.48 -.969" /><path
						d="M14 3.223a9.003 9.003 0 0 1 0 17.554"
					/><path d="M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592" /><path
						d="M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305"
					/><path d="M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356" /></svg
				>Questions
			</h2>
			<div class="self-center"><img src={chevronDown} alt="Arrow down" /></div>
		</div>
		<div class="collapse-content bg-gradient-to-b from-pink-800 to-rose-700">
			<div class="card w-full bg-base-300 shadow-xl">
				<div class="card-body">
					<ol class="list-decimal divide-y-2 divide-slate-600">
						{#each data.post.questions as question, index}
							{#if index < 5}
								<li class="rounded text-lg hover:bg-slate-700">{question}</li>
							{:else if index >= 5 && seeMoreVar === true}
								<li class="rounded text-lg hover:bg-slate-700">{question}</li>
							{/if}
						{/each}
					</ol>
					<button onclick={seeMore} class="btn btn-ghost btn-sm mt-1"
						>{seeMoreVar === true ? 'See less' : 'See more'}</button
					>
				</div>
			</div>
		</div>
	</div>

	<div class="collapse bg-base-200">
		<input type="checkbox" class="peer" bind:checked={boxDealbreakers} />
		<div
			class="collapse-title flex justify-between bg-base-300 text-center peer-checked:bg-red-800"
		>
			<div class="self-center"><img src={chevronDown} alt="Arrow down" /></div>
			<h2 class="flex">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="icon icon-tabler icons-tabler-outline icon-tabler-circle-x me-3 inline"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
						d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"
					/><path d="M10 10l4 4m0 -4l-4 4" /></svg
				>Dealbreakers
			</h2>
			<div class="self-center"><img src={chevronDown} alt="Arrow down" /></div>
		</div>
		<div class="collapse-content bg-gradient-to-b from-red-800 to-orange-700">
			<div class="card w-full bg-base-300 shadow-xl xl:col-span-2">
				<div class="card-body">
					<ol class="list-decimal divide-y-2 divide-slate-600">
						{#each data.post.dealbreakers as dealbreaker}
							<li class="rounded text-lg hover:bg-slate-700">{dealbreaker}</li>
						{/each}
					</ol>
				</div>
			</div>
		</div>
	</div>

	<div class="collapse bg-base-200">
		<input type="checkbox" class="peer" bind:checked={boxPossibleSolutions} />
		<div
			class="collapse-title flex justify-between bg-base-300 text-center peer-checked:bg-slate-900"
		>
			<div class="self-center"><img src={chevronDown} alt="Arrow down" /></div>
			<h2 class="flex">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="icon icon-tabler icons-tabler-outline icon-tabler-map-star me-3 inline"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
						d="M9.718 17.359l-.718 -.359l-6 3v-13l6 -3l6 3l6 -3v7.5"
					/><path d="M9 4v13" /><path d="M15 7v4" /><path
						d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z"
					/></svg
				>Possible Solutions
			</h2>
			<div class="self-center"><img src={chevronDown} alt="Arrow down" /></div>
		</div>
		<div class="collapse-content bg-gradient-to-b from-slate-900 to-slate-800">
			<div class="card w-full bg-base-300 shadow-xl">
				<div class="card-body">
					<ol class="list-decimal divide-y-2 divide-slate-600">
						{#each data.post.solutions as solution}
							<li class="rounded text-lg hover:bg-slate-700">{solution}</li>
						{/each}
					</ol>
				</div>
			</div>
		</div>
	</div>

	<div class="collapse bg-base-200">
		<input type="checkbox" class="peer" bind:checked={boxSuggestions} />
		<div
			class="collapse-title flex items-center justify-between bg-base-300 peer-checked:bg-slate-900"
		>
			<div class="self-center"><img src={chevronDown} alt="Arrow down" /></div>
			<h2 class="flex">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="icon icon-tabler icons-tabler-outline icon-tabler-message-2 me-3 inline"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 9h8" /><path
						d="M8 13h6"
					/><path
						d="M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3z"
					/></svg
				>Suggestions
			</h2>
			<div class="self-center"><img src={chevronDown} alt="Arrow down" /></div>
		</div>
		<div class="collapse-content bg-gradient-to-b from-slate-900 to-slate-800">
			<div class="card w-full bg-base-300 shadow-xl">
				<div class="card-body">
					<ol class="list-decimal divide-y-2 divide-slate-600">
						{#each data.post.suggestions as suggestion}
							<li class="rounded text-lg hover:bg-slate-700">{suggestion}</li>
						{/each}
					</ol>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	li {
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		padding-left: 0.75rem;
	}
</style>
