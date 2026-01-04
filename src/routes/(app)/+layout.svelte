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
	<main class="border-r-base-100 bg-base-100 w-full border-r-2">
		{@render children()}
	</main>
</div>

<style>
	.vertical-offset {
		height: calc(100dvh - 56px);
	}

	.sidebar-color {
		scrollbar-width: thin;
		scrollbar-color: #444 transparent;
	}

	.sidebar-color::-webkit-scrollbar {
		width: 8px;
	}
	.sidebar-color::-webkit-scrollbar-track {
		background: #0d0d0d;
	}
	.sidebar-color::-webkit-scrollbar-thumb {
		background: #333;
		border-radius: 4px;
	}
	.sidebar-color::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
</style>
