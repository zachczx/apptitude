<script lang="ts">
	import type { Snippet } from 'svelte';

	let { title, children }: { title: string; children: Snippet } = $props();
</script>

<div>
	<h4
		class="border-primary-content/40 mb-4 border-b pb-2 text-sm font-bold tracking-wide uppercase">
		{title}
	</h4>

	<dl class="grid gap-6">
		{@render children()}
	</dl>
</div>
