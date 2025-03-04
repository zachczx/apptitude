<script lang="ts">
	import SvgChevronRight from '$lib/assets/svg/TablerChevronRight.svelte';
	let { urlMiddle = '', textMiddle = '', textCurrent = '' } = $props();
</script>

<div data-pagefind-ignore>
	<ul class="flex flex-wrap">
		<li class="text-md" style="view-transition-name: view-transition-text-home">
			<a href="/"
				><svg
					id="carbon:home"
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					class="me-1 mb-1 inline"
					viewBox="0 0 32 32"
					><path
						fill="currentColor"
						d="M16.612 2.214a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621V26a2.004 2.004 0 0 0 2 2h20a2.004 2.004 0 0 0 2-2V13.63L29.757 15L31 13.428ZM18 26h-4v-8h4Zm2 0v-8a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v8H6V12.062l10-7.79l10 7.8V26Z" /></svg>
				Home</a>
		</li>
		{#if urlMiddle && textMiddle}
			<li style="view-transition-name: view-transition-bullet-one">
				<SvgChevronRight class="mx-2 inline" />
			</li>
			<li class="text-md" style="view-transition-name: view-transition-text-middle">
				<a href="/{urlMiddle}">
					<svg
						id="carbon:category"
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						class="me-1 mb-1 inline"
						viewBox="0 0 32 32"
						><path
							fill="currentColor"
							d="M27 22.141V18a2 2 0 0 0-2-2h-8v-4h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v4H7a2 2 0 0 0-2 2v4.142a4 4 0 1 0 2 0V18h8v4.142a4 4 0 1 0 2 0V18h8v4.141a4 4 0 1 0 2 0M13 4h6l.001 6H13ZM8 26a2 2 0 1 1-2-2a2 2 0 0 1 2 2m10 0a2 2 0 1 1-2-2a2.003 2.003 0 0 1 2 2m8 2a2 2 0 1 1 2-2a2 2 0 0 1-2 2" /></svg>
					{textMiddle}</a>
			</li>
		{/if}
		{#if textCurrent}
			<li style="view-transition-name: view-transition-bullet-two">
				<SvgChevronRight class="mx-2 inline" />
			</li>
			<li class="text-md">
				<svg
					id="carbon:document"
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					class="me-1 mb-1 inline"
					style="view-transition-name: view-transition-paper-icon"
					viewBox="0 0 32 32"
					><path
						fill="currentColor"
						d="m25.7 9.3l-7-7c-.2-.2-.4-.3-.7-.3H8c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-.3-.1-.5-.3-.7M18 4.4l5.6 5.6H18zM24 28H8V4h8v6c0 1.1.9 2 2 2h6z" /><path
						fill="currentColor"
						d="M10 22h12v2H10zm0-6h12v2H10z" /></svg>
				<span style="view-transition-name: view-transition-text-current">{textCurrent}</span>
			</li>
		{/if}
	</ul>
</div>

<style>
</style>
