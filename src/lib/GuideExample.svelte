<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="border-base-content/20 my-4 content-center space-y-4 rounded-2xl border p-4 shadow-md">
	<h4 class="border-b-base-100 text-base-content/90 border-b-2 text-sm font-medium uppercase">
		Example
	</h4>
	{@render children()}
</div>
