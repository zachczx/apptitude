<script lang="ts">
	import { onMount } from 'svelte';
	let { data } = $props();
	import TablerChevronRight from '$lib/assets/svg/TablerChevronRight.svelte';
	import logo from '$lib/assets/svg/logo.svg?dataurl';
	import { matchUrl } from '$lib/helpers';
	import ContentWrapper from '$lib/ContentWrapper.svelte';

	let currentSection: any = $state();
	let path: any = $derived(data.url.split('/'));
	let category: any = $derived(path[1]);
	let page: any = $derived(path[2]);
	let textMiddle: string = "Search'";

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

<ContentWrapper urlSelf={data.url} {page} {textMiddle} {category} {currentSection}>
	<h1
		class="inline-block bg-gradient-to-r from-emerald-200 via-lime-200 to-teal-300 bg-clip-text pb-8 text-transparent">
		Search
	</h1>
	<div class="flex min-h-[30rem] w-full justify-center py-8">
		<div id="search" class="w-full"></div>
	</div>
</ContentWrapper>
