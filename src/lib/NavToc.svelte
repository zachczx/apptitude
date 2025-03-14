<script lang="ts">
	let { contents = [], currentSection } = $props();
</script>

{#if contents.length > 0}
	<div class="menu sticky top-0">
		<ul
			class="line-clamp-1 max-h-dvh w-full max-w-72 overflow-y-auto px-2 lg:px-4"
			data-pagefind-ignore>
			<li class="text-2xl font-bold">Contents</li>
			<ul id="placeholder" class="text-base-content list-decimal">
				{#each contents as section, i}
					<li class="{currentSection === section.id ? 'text-primary' : undefined} text-base">
						<a href="#{section.id}" class=""><span class="me-2">{i + 1}.</span>{section.title}</a>
					</li>
				{/each}
			</ul>
		</ul>
	</div>
{/if}
