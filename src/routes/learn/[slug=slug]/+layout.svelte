<script>
	let { data } = $props();
</script>

<svelte:head>
	<title>Learn {data.post.name}</title>
</svelte:head>

<slot />
