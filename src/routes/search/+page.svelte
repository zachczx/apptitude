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
		let search = new PagefindUI({ element: '#search', showSubResults: true });
	});
</script>

<div id="search"></div>
