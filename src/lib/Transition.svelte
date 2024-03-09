<script>
	import { fade } from 'svelte/transition';
	export let url;
</script>

{#key url}
	<div class="transition" in:fade={{ delay: 0, duration: 30 }}>
		<slot />
	</div>
{/key}

<style>
	.transition {
		height: 100%;
	}
</style>
