<script lang="ts">
	import type { Snippet } from 'svelte';

	// Using a snippet allows you to put bold text or links in the definition
	let { term, children }: { term: string; children: Snippet } = $props();
</script>

<div class="grid gap-2 py-1 sm:grid-cols-[160px_1fr] sm:gap-4">
	<dt class="text-base-content">
		{term}
	</dt>

	<dd class="text-base-content text-sm leading-relaxed font-light">
		{@render children()}
	</dd>
</div>
