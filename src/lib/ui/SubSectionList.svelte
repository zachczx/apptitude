<script lang="ts">
	import type { Snippet } from 'svelte';

	let { title, children }: { title?: string; children: Snippet } = $props();
</script>

<div>
	{#if title}
		<h4
			class="text-base-content border-primary-content/40 mb-4 border-b pb-2 text-sm font-bold tracking-wide uppercase">
			{title}
		</h4>
	{/if}
	<ul class="text-base-content marker:text-primary ms-5 list-disc space-y-2">
		{@render children()}
	</ul>
</div>
