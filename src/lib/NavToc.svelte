<script lang="ts">
	let { urlSelf = '', contents, currentSection } = $props();
</script>

<div class="menu sticky top-0">
	<ul
		class="line-clamp-1 max-h-dvh w-full max-w-72 overflow-y-auto px-2 lg:px-4"
		data-pagefind-ignore>
		<li class="text-2xl font-bold"><a href={urlSelf}>Contents</a></li>
		<ul id="placeholder" class="text-base-content list-decimal">
			{#each contents as section, i}
				<li class="{currentSection === section.id ? 'text-primary' : undefined} text-base">
					<a href="#{section.id}" class="">{i + 1}. {section.title}</a>
				</li>
			{/each}
		</ul>
	</ul>
</div>
