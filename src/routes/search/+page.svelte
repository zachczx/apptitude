<script>
	import { onMount } from 'svelte';

	let { data } = $props();
	$effect(() => {
		console.log(data);
	});
	onMount(async () => {
		// @ts-expect-error - Pagefind will be present at runtime
		const pagefind = await import('/pagefind/pagefind.js');
		pagefind.init();
		new PagefindUI({
			element: '#search',
			showSubResults: true,
			showImages: false,
			resetStyles: true,
			autofocus: true,
		});
	});
</script>

<div class="flex min-h-[30rem] w-full justify-center px-6 py-8">
	<div id="search" class="w-full lg:w-3/6"></div>
</div>
