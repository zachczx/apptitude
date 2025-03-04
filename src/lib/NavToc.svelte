<script>
	let { urlSelf = '', contents, currentSection } = $props();
</script>

<div class="menu sticky top-0">
	<ul
		class="view-transition-navtoc max-h-dvh w-full overflow-y-auto px-2 lg:px-4"
		data-pagefind-ignore>
		<li class="text-xl font-bold"><a href={urlSelf}>Contents</a></li>
		<ul id="placeholder">
			{#each contents as section}
				<li class="{currentSection === section.id ? 'text-primary' : undefined} text-lg">
					<a href="#{section.id}">{section.title}</a>
				</li>
			{/each}
		</ul>
	</ul>
</div>

<style>
	.view-transition-navtoc {
		view-transition-name: view-transition-navtoc;
	}
</style>
