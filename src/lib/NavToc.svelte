<script lang="ts">
	import CarbonChevronRight from './assets/svg/CarbonChevronRight.svelte';

	let { contents = [], currentSection }: { contents: TableOfContent[]; currentSection: string } =
		$props();
</script>

{#if contents.length > 0}
	<div class="grid grid-rows-[1fr_auto]">
		<nav class="grid pb-2" data-pagefind-ignore>
			<h3 class="text-base-content/70 mb-2 ps-4 pt-4 font-semibold uppercase">Contents</h3>
			{#each contents as section, i}
				{@const isActive = currentSection === section.id}

				<a
					href="#{section.id}"
					class={['block p-4 transition-all duration-200', isActive && 'bg-primary/10 rounded-2xl']}
					onclick={(e) => {
						e.preventDefault();
						const el = document.getElementById(section.id);
						if (el) {
							const y = el.getBoundingClientRect().top + window.scrollY - 100; // Offset for header
							window.scrollTo({ top: y, behavior: 'smooth' });
						}
					}}>
					<div class="flex items-center gap-4">
						<div
							class="bg-base-content text-base-100 flex aspect-square size-6 items-center justify-center rounded-full text-xs font-bold">
							{i + 1}
						</div>

						<div class={[isActive ? 'text-primary font-bold' : 'text-base-content/70 font-medium']}>
							{section.title}
						</div>
					</div>
				</a>
			{/each}
		</nav>

		<div class="toc-footer border-t-base-content/10 flex items-center gap-2 border-t-2 pt-4">
			<button
				class="hover:text-primary flex w-full cursor-pointer items-center justify-center gap-2 text-sm"
				onclick={() => {
					if (window) {
						window.scrollTo(0, 0);
					}
				}}><CarbonChevronRight class="rotate-270" />Scroll to top</button>
		</div>
	</div>
{/if}
