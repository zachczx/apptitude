<script>
	import { onMount } from 'svelte';
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
	<link href="/pagefind/pagefind-ui.css" rel="stylesheet" />
</svelte:head>

<div class="flex min-h-[30rem] w-full justify-center px-6 py-8">
	<div id="search" class="w-full lg:w-3/6"></div>
</div>
