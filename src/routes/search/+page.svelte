<script>
	import { onMount } from 'svelte';

	let { data } = $props();
	$effect(() => {
		console.log(data);
	});
	onMount(async () => {
		// @ts-expect-error - Pagefind will be present at runtime
		const pagefind = await import('/pagefind/pagefind.js');
		await pagefind.init();
		await new PagefindUI({
			element: '#search',
			showSubResults: true,
			showImages: false,
			resetStyles: true,
			autofocus: true,
		});
	});
</script>

<svelte:head>
	<link href="/pagefind/pagefind-ui.css" rel="stylesheet" />
</svelte:head>

<div class="flex min-h-[30rem] w-full justify-center px-6 py-8">
	<div id="search" class="w-full lg:w-3/6">
		<span class="loading loading-spinner loading-md text-base-content"></span>
	</div>
</div>
