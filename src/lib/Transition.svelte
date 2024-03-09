<script>
	import { fade } from 'svelte/transition';
	export let url;
</script>

{#key url}
	<div class="transition" in:fade={{ delay: 10, duration: 500 }}>
		<slot />
	</div>
{/key}

<style>
	.transition {
		height: 100%;
	}
</style>
