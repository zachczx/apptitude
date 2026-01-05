<script lang="ts">
	import type { Picture } from 'vite-imagetools';

	let {
		imgCaption,
		imgSrc,
		imgAlt,
	}: { imgCaption: string; imgSrc: Picture | string; imgAlt: string } = $props();
</script>

<figure class="mt-4 max-w-sm">
	{#if typeof imgSrc === 'string'}
		<img src={imgSrc} alt={imgAlt} class="border-base-content/15 w-full rounded-lg border" />
	{:else}
		<enhanced:img
			src={imgSrc}
			alt={imgAlt}
			class="border-base-content/15 w-full rounded-lg border" />
	{/if}
	<figcaption class="mt-2 text-xs font-light italic">
		{imgCaption}
	</figcaption>
</figure>
