<script lang="ts">
	import type { Snippet } from 'svelte';

	let { title, children }: { title: string; children: Snippet } = $props();
</script>

<div>
	<h4
		class="text-base-content border-primary-content/40 mb-4 border-b pb-2 text-sm font-bold tracking-wide uppercase">
		{title}
	</h4>
	{@render children()}
</div>
