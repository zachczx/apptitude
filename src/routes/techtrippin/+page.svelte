<script lang="ts">
	import { techtrippin } from './data_techtrippin';
	import twentyFiveDev from '$lib/assets/25yodev.webp?enhanced&w=200;150;70';
	import Breadcrumbs from '$lib/Breadcrumbs.svelte';
	import TablerHelpCircleFilled from '$lib/assets/svg/TablerHelpCircleFilled.svelte';
	import TablerMessage from '$lib/assets/svg/TablerMessage.svelte';
	import { fly } from 'svelte/transition';
	import ContentWrapper from '$lib/ContentWrapper.svelte';
	import { type Contents } from '$lib/Types';
	import { onMount } from 'svelte';

	let showMore = $state(false);
	let currentItem = $state(0);

	let { data } = $props();

	let contents: Contents[] = [];
	for (let i = 0; i < techtrippin.length; i++) {
		let combinedId = 'content-' + String(techtrippin[i].id);
		let combinedTitle = String(techtrippin[i].id) + '. ' + techtrippin[i].title;
		// if (combinedTitle.length > 40) {
		// 	combinedTitle = combinedTitle.slice(0, 40) + ' ...';
		// }
		contents[i] = { id: combinedId, title: combinedTitle };
	}

	let currentSection: any = $state();
	let path: any = $derived(data.url.split('/'));
	let category: any = $derived(path[1]);
	let page: any = $derived(path[2]);
	let textMiddle: string = "Tech Trippin'";

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
	<title>Apptitude - Tech Trippin'</title>
</svelte:head>

<ContentWrapper urlSelf={data.url} {page} {textMiddle} {category} {currentSection} {contents}>
	<section class="mb-12 space-y-12">
		<div>
			<h1
				class="inline-block bg-gradient-to-r from-emerald-200 via-lime-200 to-teal-300 bg-clip-text pb-3 text-transparent">
				Tech Trippin'
			</h1>
			<p class="text-sm">
				<i
					>Going through real world examples of tech jargon-gibberish and calling out what makes
					absolutely no sense.
				</i>
			</p>
		</div>
		<div class="space-y-4">
			<p>
				I collected illogical or unproductive comments I came across during work. I'm not trying to
				shame anyone here, but the intent here is to call out wrong stuff and see if there are
				common themes with your experiences.
			</p>
		</div>
	</section>
	<div id="dropdown" class="mx-auto mt-3 flex w-11/12 lg:hidden">
		<label class="ms-1">
			<select bind:value={currentItem} class="select select-bordered w-full text-lg">
				{#each techtrippin as sidebarItem, index}
					<option value={index}>{sidebarItem.title}</option>
				{/each}
			</select>
		</label>
	</div>

	{#each techtrippin as item}
		<section
			id="content-{item.id}"
			class="contents-observer mb-4 space-y-10 rounded-2xl border border-gray-700 bg-neutral p-2 shadow-md shadow-gray-800 lg:mb-16 lg:p-8">
			<h3>{item.title}</h3>
			<div class="space-y-10">
				<div class="chat chat-start">
					<div class="avatar chat-image">
						<div class="w-10 rounded-full lg:w-[200px]">
							<img alt="Person" src={item.icon} />
						</div>
					</div>
					<div class="chat-header ms-5 self-end pb-1 font-bold lg:text-lg">
						{item.name}
					</div>
					<div class="chat-bubble bg-gray-950 p-2 text-lg lg:p-6">
						{item.prompt}
					</div>
				</div>
				<div class="chat chat-end">
					<div class="avatar chat-image">
						<div class="w-10 rounded-full lg:w-[200px]">
							<enhanced:img
								alt="Soy Dev"
								src={twentyFiveDev}
								sizes="(min-width:1920px) 200px, (min-width:1080px) 150px, (min-width:768px) 70px" />
						</div>
					</div>

					<div class="chat-header me-5 self-end pb-1 font-bold lg:text-lg">Chad Staffer</div>
					<div class="chat-bubble self-start bg-gray-950 p-2 text-lg lg:p-6">
						{item.response}
					</div>
				</div>
				{#if item.prompt2 && item.response2}
					<div class="chat chat-start">
						<div class="avatar chat-image">
							<div class="w-10 rounded-full lg:w-[200px]">
								<img alt="Person" src={item.icon} />
							</div>
						</div>
						<div class="chat-header ms-5 self-end pb-1 font-bold lg:text-lg">
							{item.name}
						</div>
						<div class="chat-bubble bg-gray-950 p-2 text-lg lg:p-6">
							{item.prompt2}
						</div>
					</div>

					<div class="chat chat-end">
						<div class="avatar chat-image">
							<div class="w-10 rounded-full lg:w-[200px]">
								<enhanced:img
									alt="Soy Dev"
									src={twentyFiveDev}
									sizes="(min-width:1920px) 200px, (min-width:1080px) 150px, (min-width:768px) 70px" />
							</div>
						</div>

						<div class="chat-header me-5 self-end pb-1 font-bold lg:text-lg">Me</div>
						<div class="chat-bubble self-start bg-gray-950 p-2 text-lg lg:p-6">
							{item.response2}
						</div>
					</div>
				{/if}
			</div>
		</section>
	{/each}
</ContentWrapper>
