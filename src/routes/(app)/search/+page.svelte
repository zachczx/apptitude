<script lang="ts">
	import { onMount } from 'svelte';
	let { data } = $props();
	import ContentWrapper from '$lib/ContentWrapper.svelte';

	let currentSection: any = $state();
	let path: any = $derived(data.url.split('/'));
	let category: any = $derived(path[1]);
	let page: any = $derived(path[2]);

	onMount(async () => {
		// @ts-expect-error - Pagefind will be present at runtime
		const pagefind = await import('/pagefind/pagefind.js');
		pagefind.init();
		new PagefindUI({
			element: '#search',
			showImages: false,
			resetStyles: true,
			autofocus: true,
			processResult: (result) => {
				const url = result.url.replace('.html', '');
				result.url = url;
				return result;
			},
		});
	});
</script>

<svelte:head>
	<title>Apptitude - Search</title>
	<link href="/pagefind/pagefind-ui.css" rel="stylesheet" />
</svelte:head>

<ContentWrapper
	showSideBar={false}
	urlSelf={data.url}
	{page}
	{category}
	{currentSection}
	title="Search">
	<div class="flex w-full items-start justify-center lg:min-w-[30rem]">
		<div id="search" class="w-full"></div>
	</div>
</ContentWrapper>

<style>
	.vertical-offset {
		min-height: calc(100dvh - 4.5rem);
	}
</style>
