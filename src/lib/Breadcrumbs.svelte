<script lang="ts">
	import SvgChevronRight from '$lib/assets/svg/TablerChevronRight.svelte';
	export let urlMiddle = '';
	export let textMiddle = '';
	export let textCurrent = '';
</script>

<div class="nav-breadcrumb mb-10 px-3 lg:px-20" data-pagefind-ignore>
	<ul class="flex">
		<li class="text-xl"><a href="/" class="text-primary">Home</a></li>
		{#if urlMiddle && textMiddle}
			<li class="text-xl">
				<a href="/{urlMiddle}" class="text-primary"
					><SvgChevronRight class="mx-2 inline" />{textMiddle}</a>
			</li>
		{/if}
		<li class="text-xl"><SvgChevronRight class="mx-2 inline" />{textCurrent}</li>
	</ul>
</div>

<style>
	.nav-breadcrumb {
		view-transition-name: nav-breadcrumb;
	}
</style>
