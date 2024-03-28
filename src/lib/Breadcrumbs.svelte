<script>
	import SvgChevronRight from '$lib/assets/svg/TablerChevronRight.svelte';
	export let urlMiddle, textMiddle, textCurrent;
</script>

<div class="nav-breadcrumb mb-10 px-5 text-lg font-medium lg:px-20">
	<ul class="flex">
		<li><a href="/" class="text-primary">Home</a></li>
		{#if urlMiddle && textMiddle}
			<li>
				<a href="/{urlMiddle}" class="text-primary"
					><SvgChevronRight class="mx-2 inline" />{textMiddle}</a
				>
			</li>
		{/if}
		<li><SvgChevronRight class="mx-2 inline" />{textCurrent}</li>
	</ul>
</div>

<style>
	.nav-breadcrumb {
		view-transition-name: nav-breadcrumb;
	}
</style>
