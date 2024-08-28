<script>
	export let urlSelf = '';
	export let contents;
	export let currentSection;
</script>

<ul class="view-transition-navtoc menu sticky top-0 w-full px-4" data-pagefind-ignore>
	<li class="text-xl font-bold"><a href={urlSelf}>Contents</a></li>
	<ul id="placeholder">
		{#each contents as section}
			<li class="{currentSection === section.id ? 'text-primary' : undefined} text-lg">
				<a href="#{section.id}">{section.title}</a>
			</li>
		{/each}
	</ul>
</ul>

<style>
	.view-transition-navtoc {
		view-transition-name: view-transition-navtoc;
	}
</style>
