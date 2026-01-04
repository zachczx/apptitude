<script lang="ts">
	import type { Snippet } from 'svelte';
	interface GuideLongExampleProps {
		children: Snippet;
		showButton?: boolean;
	}
	let { children, showButton = true }: GuideLongExampleProps = $props();

	let collapsed = $state(true);
</script>

<div class="bg-primary-content/40 mx-4 content-center space-y-4 rounded-2xl px-4 py-4">
	<h4 class="border-b-base-100 border-b-2 text-lg font-bold">
		<svg
			id="carbon:quotes"
			xmlns="http://www.w3.org/2000/svg"
			width="1.5em"
			height="1.5em"
			class="me-1 mb-1 inline"
			viewBox="0 0 32 32"
			><path
				fill="currentColor"
				d="M12 15H6.11A9 9 0 0 1 10 8.86l1.79-1.2L10.69 6L8.9 7.2A11 11 0 0 0 4 16.35V23a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m14 0h-5.89A9 9 0 0 1 24 8.86l1.79-1.2L24.7 6l-1.8 1.2a11 11 0 0 0-4.9 9.15V23a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2" /></svg>
		Example
	</h4>
	<div class={collapsed ? 'line-clamp-6 max-h-48' : ''}>
		{@render children()}
	</div>
	{#if showButton}
		<button
			class="btn btn-outline btn-sm"
			onclick={(evt) => {
				collapsed = !collapsed;
			}}
			>Show
			{#if collapsed}
				more
				<svg
					xmlns="http://www.w3.org/2000/svg"
					id="carbon:chevron-down"
					class="inline"
					width="1em"
					height="1em"
					viewBox="0 0 32 32"
					><path fill="currentColor" d="M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z" /></svg>
			{:else}
				less <svg
					xmlns="http://www.w3.org/2000/svg"
					id="carbon:chevron-up"
					class="inline"
					width="1em"
					height="1em"
					viewBox="0 0 32 32"
					><path fill="currentColor" d="m16 10l10 10l-1.4 1.4l-8.6-8.6l-8.6 8.6L6 20z" /></svg>
			{/if}
		</button>
	{/if}
</div>
