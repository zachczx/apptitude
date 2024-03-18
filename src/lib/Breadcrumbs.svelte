<script>
	import SvgChevronRight from '$lib/assets/svg/TablerChevronRight.svelte';
	export let urlMiddle, textMiddle, textCurrent;
</script>

<div class="mb-10 px-5 text-lg font-medium lg:px-20">
	<ul class="flex">
		<li><a href="/" class="text-secondary">Home</a></li>
		{#if urlMiddle && textMiddle}
			<li>
				<a href="/{urlMiddle}" class="text-secondary"
					><SvgChevronRight class="mx-2 inline" />{textMiddle}</a
				>
			</li>
		{/if}
		<li><SvgChevronRight class="mx-2 inline" />{textCurrent}</li>
	</ul>
</div>
