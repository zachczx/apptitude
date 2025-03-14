<script lang="ts">
	import ErrorAquarium from '$lib/assets/error-aquarium.svg?dataurl';
	import ContentWrapper from '$lib/ContentWrapper.svelte';
	import NewWrap from '$lib/NewWrap.svelte';
	let { data } = $props();
	let currentSection: any = $state();
	let path: string[] = $derived(data.url.split('/'));
	let category: string = $derived(path[1]);
	let page: string = $derived(path[2]);
</script>

<NewWrap>
	<div class="grid content-start justify-items-center gap-8">
		<img src={ErrorAquarium} alt="Error" class="h-72" />
		<div class="grid gap-2 text-center">
			<h1 class="text-4xl lg:text-6xl">Under construction</h1>
			<p>I haven't written stuff here yet!</p>
		</div>
	</div>
	{#snippet toc()}{/snippet}
</NewWrap>
