<script>
	let { data } = $props();
</script>

<svelte:head>
	<title>Cache Up! {data.post.name}</title>
</svelte:head>

<slot />
