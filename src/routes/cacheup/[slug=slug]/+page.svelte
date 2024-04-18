<script>
	import userCircle from '$lib/assets/svg/user-circle.svg';
	import Breadcrumbs from '$lib/Breadcrumbs.svelte';
	import chevronDown from '$lib/assets/svg/chevron-down.svg';
	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';
	const slug = $page.params.slug;
	let { data } = $props();

	let seeMoreVar = $state(false);
	function seeMore() {
		seeMoreVar = !seeMoreVar;
		console.log(seeMoreVar);
	}

	const showValue = $page.url.searchParams.get('show');
	let currentItem = $state(0);
	console.log(showValue);

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
	let boxQuestions = $state(true);
	let boxDealbreakers = $state(true);
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
				boxSuggestions,
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
				boxSuggestions,
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

<Breadcrumbs urlMiddle="cacheup" textMiddle={'Cache-Up Guides'} textCurrent={data.post.name} />

<div class="mb-10 text-center lg:mb-10">
	<h1
		class="mb-10 inline-block bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 text-transparent">
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
<div class="mx-2 mb-2 grid-cols-1 rounded-lg pb-5 lg:mx-20 lg:mb-20">
	<div
		class="grid grid-cols-1 justify-items-center gap-y-8 rounded-2xl bg-base-300 text-lg lg:mb-7 lg:grid-cols-7 lg:gap-x-5 lg:gap-y-10">
		<div id="navigation" class="col-span-1 lg:col-span-2">
			<div id="dropdown" class="w-full lg:hidden">
				<label class="ms-1 font-medium"
					>Select an item: <select
						bind:value={currentItem}
						class="select select-bordered w-full bg-base-300 text-lg">
						<option value="definitions">Definitions</option>
						<option value="goals">Goals</option>
						<option value="questions">Questions</option>
						<option value="dealbreakers">Dealbreakers</option>
						<option value="solutions">Possible Solutions</option>
						<option value="suggestions">Suggestions</option>
					</select></label>
			</div>
			<div id="sidebar" class="z-20 hidden lg:contents">
				<div class="h-full rounded-l-2xl bg-[#191d24]">
					<ol class="space-y-7 p-5 text-2xl">
						<button
							onclick={() => {
								currentItem = 'definitions';
							}}
							class="w-full"
							><li class="ms-5 py-3 ps-5 text-start hover:text-primary">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="1em"
									height="1em"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="icon icon-tabler icons-tabler-outline icon-tabler-file-description mb-1 me-5 inline"
									><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
										d="M14 3v4a1 1 0 0 0 1 1h4" /><path
										d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path
										d="M9 17h6" /><path d="M9 13h6" /></svg
								>Definitions
							</li></button>
						<button
							onclick={() => {
								currentItem = 'goals';
							}}
							class="w-full"
							><li class="ms-5 py-3 ps-5 text-start hover:text-primary">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="1em"
									height="1em"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="icon icon-tabler icons-tabler-outline icon-tabler-target-arrow mb-1 me-5 inline"
									><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
										d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path
										d="M12 7a5 5 0 1 0 5 5" /><path d="M13 3.055a9 9 0 1 0 7.941 7.945" /><path
										d="M15 6v3h3l3 -3h-3v-3z" /><path d="M15 9l-3 3" /></svg
								>Goals
							</li></button>
						<button
							onclick={() => {
								currentItem = 'questions';
							}}
							class="w-full"
							><li class="ms-5 py-3 ps-5 text-start hover:text-primary">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="1em"
									height="1em"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="icon icon-tabler icons-tabler-outline icon-tabler-progress-help mb-1 me-5 inline"
									><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 16v.01" /><path
										d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" /><path
										d="M10 20.777a8.942 8.942 0 0 1 -2.48 -.969" /><path
										d="M14 3.223a9.003 9.003 0 0 1 0 17.554" /><path
										d="M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592" /><path
										d="M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305" /><path
										d="M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356" /></svg
								>Questions
							</li></button>

						<button
							onclick={() => {
								currentItem = 'dealbreakers';
							}}
							class="w-full"
							><li class="ms-5 py-3 ps-5 text-start hover:text-primary">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="1em"
									height="1em"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="icon icon-tabler icons-tabler-outline icon-tabler-circle-x mb-1 me-5 inline"
									><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
										d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path
										d="M10 10l4 4m0 -4l-4 4" /></svg
								>Dealbreakers
							</li></button>

						<button
							onclick={() => {
								currentItem = 'solutions';
							}}
							class="w-full"
							><li class="ms-5 py-3 ps-5 text-start hover:text-primary">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="1em"
									height="1em"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="icon icon-tabler icons-tabler-outline icon-tabler-map-star mb-1 me-5 inline"
									><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
										d="M9.718 17.359l-.718 -.359l-6 3v-13l6 -3l6 3l6 -3v7.5" /><path
										d="M9 4v13" /><path d="M15 7v4" /><path
										d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" /></svg
								>Possible Solutions
							</li></button>

						<button
							onclick={() => {
								currentItem = 'suggestions';
							}}
							class="w-full"
							><li class="ms-5 py-3 ps-5 text-start hover:text-primary">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="1em"
									height="1em"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="icon icon-tabler icons-tabler-outline icon-tabler-message-2 mb-1 me-5 inline"
									><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 9h8" /><path
										d="M8 13h6" /><path
										d="M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3z" /></svg
								>Suggestions
							</li></button>
					</ol>
				</div>
			</div>
		</div>
		<div id="content" class="w-full lg:col-span-5">
			{#key currentItem}
				<div
					data-id="Item-{currentItem}"
					class="z-10 rounded-2xl bg-base-300 px-5"
					in:fly={{ duration: 300, x: -40 }}
					out:fly={{ duration: 0 }}>
					<h2 class="mx-5 rounded-t-2xl border-b-2 bg-base-300 px-5 pb-3 pt-5">
						{#if currentItem === 'goals'}
							Goals
						{:else if currentItem === 'questions'}
							Questions
						{:else if currentItem === 'dealbreakers'}
							Dealbreakers
						{:else if currentItem === 'solutions'}
							Possible Solutions
						{:else if currentItem === 'suggestions'}
							Suggestions
						{:else}
							Definitions
						{/if}
					</h2>
					<div class="p-2 xl:p-6">
						<ol class="list-decimal space-y-5 px-5">
							{#if currentItem === 'goals'}
								{#each data.post.goals as goal}
									<li class="rounded text-xl">{goal}</li>
								{/each}
							{:else if currentItem === 'questions'}
								{#each data.post.questions as question}
									<li class="rounded text-xl">{question}</li>
								{/each}
							{:else if currentItem === 'dealbreakers'}
								{#each data.post.dealbreakers as dealbreaker}
									<li class="rounded text-xl">{dealbreaker}</li>
								{/each}
							{:else if currentItem === 'solutions'}
								{#each data.post.solutions as solution}
									<li class="rounded text-xl">{solution}</li>
								{/each}
							{:else if currentItem === 'suggestions'}
								{#each data.post.suggestions as suggestion}
									<li class="rounded text-xl">{suggestion}</li>
								{/each}
							{:else}
								{#each data.post.definitions as definition}
									<li class="rounded text-xl">{definition}</li>
								{/each}
							{/if}
						</ol>
					</div>
				</div>
			{/key}
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
