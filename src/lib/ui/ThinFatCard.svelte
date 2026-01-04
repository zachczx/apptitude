<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		title,
		step,
		leadPara,
		children,
	}: { title: string; step?: string; leadPara?: string; children: Snippet } = $props();
</script>

<div class="bg-base-card border-base-200 rounded-2xl border p-8 shadow-sm md:p-10">
	<div class="grid grid-cols-1 gap-8 md:grid-cols-[10rem_1fr] md:gap-12">
		<div class="self-start md:sticky md:top-16">
			{#if step}
				<p class="text-base-content/50 text-sm font-medium tracking-wider uppercase">Step {step}</p>
			{/if}
			<h3 class="text-base-content mb-2 text-2xl leading-tight font-bold">
				{title}
			</h3>
		</div>

		<div class="grid gap-y-10">
			{#if leadPara}
				<p class="mt-5 text-lg">
					{leadPara}
				</p>
			{/if}
			{@render children()}
		</div>
	</div>
</div>
