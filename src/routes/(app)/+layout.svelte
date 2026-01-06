<script lang="ts">
	import NavAside from '$lib/NavAside.svelte';
	let { data, children } = $props();
	let page = $derived(data.page);
</script>

<div class="grid grid-cols-[auto_1fr_auto]">
	<aside
		class="lg:border-r-base-100 vertical-offset sidebar-color sticky top-14 hidden w-full min-w-72 content-start overflow-y-auto lg:grid lg:border-r-2">
		<NavAside {page} />
	</aside>
	<main class="border-r-base-100 w-full border-r-2">
		{@render children()}
	</main>
</div>

<style>
	.vertical-offset {
		height: calc(100dvh - 56px);
	}
</style>
