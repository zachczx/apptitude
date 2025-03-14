<script lang="ts">
	import { techtrippin } from './data_techtrippin';
	import twentyFiveDev from '$lib/assets/25yodev.webp?enhanced&w=200;150;70';
	import Breadcrumbs from '$lib/Breadcrumbs.svelte';
	import TablerHelpCircleFilled from '$lib/assets/svg/TablerHelpCircleFilled.svelte';
	import TablerMessage from '$lib/assets/svg/TablerMessage.svelte';
	import grumpyCat from '$lib/assets/grumpy-cat.webp?enhanced&w=400';

	import ContentWrapper from '$lib/ContentWrapper.svelte';
	import { type Contents } from '$lib/Types';
	import { onMount } from 'svelte';
	import NewWrap from '$lib/NewWrap.svelte';
	import NavToc from '$lib/NavToc.svelte';

	let { data } = $props();

	let currentSection: any = $state();
	let path: string[] = $derived(data.url.split('/'));
	let category: string = $derived(path[1]);
	let page: string = $derived(path[2]);
</script>

<svelte:head>
	<title>Apptitude - Tech Trippin'</title>
</svelte:head>

<NewWrap
	title="Tech Trippin'"
	subtitle="Words I have heard from people working on tech in Govt that left me scratching my head.">
	<ul class="grid gap-y-4">
		{#each techtrippin as item, i}
			<li class="flex items-center gap-4 py-2">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						class="bxs:quote-alt-left text-base-content/50 h-7 w-7"
						viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.318.142-.686.238-1.028.466c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.945c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 6.5 10m11 0c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.317.143-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.944c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 17.5 10" /></svg>
				</div>
				<div>{item.text}</div>
			</li>
			{#if i < techtrippin.length - 1}
				<li class="bg-base-content/20 col-span-2 h-0.5"></li>
			{/if}
		{/each}
	</ul>
	{#snippet toc()}
		<NavToc {currentSection} />
	{/snippet}
</NewWrap>
