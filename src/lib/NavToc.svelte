<script lang="ts">
	let { contents = [], currentSection }: { contents: TableOfContent[]; currentSection: string } =
		$props();

	const sectionIcons: Record<SuggestionSection, string> = {
		definitions: '📖',
		goals: '🎯',
		questions: '💭',
		alarms: '⚠️',
		dealbreakers: '⛔',
	};

	const sectionColors: Record<SuggestionSection, string> = {
		definitions: '#8B7355',
		goals: '#059669',
		questions: '#7C3AED',
		alarms: '#F59E0B',
		dealbreakers: '#DC2626',
	};
</script>

{#if contents.length > 0}
	<div class="grid grid-rows-[1fr_auto]">
		<nav class="grid pb-2" data-pagefind-ignore>
			<h3 class="text-base-content/70 mb-2 ps-4 pt-4 font-semibold uppercase">Contents</h3>
			{#each contents as section, i}
				{@const isActive = currentSection === section.id}

				<a
					href="#{section.id}"
					class={['p-4', isActive && 'bg-primary/30 text-primary-content rounded-3xl']}>
					<div class="flex items-center gap-4">
						<div
							class="bg-base-content text-base-100 flex aspect-square size-6 items-center justify-center rounded-full font-bold">
							{i + 1}
						</div>

						<div class="font-medium">
							{section.title}
						</div>
					</div>

					{#if isActive}
						<div class="active-bar"></div>
					{/if}
				</a>
			{/each}
		</nav>

		<div class="toc-footer border-t-base-content/30 flex items-center gap-2 border-t-2 pt-4">
			<button
				class="hover:text-bright flex w-full cursor-pointer items-center justify-center gap-2"
				onclick={() => {
					if (window) {
						window.scrollTo(0, 0);
					}
				}}
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2">
					<path d="M18 15l-6-6-6 6" />
				</svg>Scroll to top</button>
		</div>
	</div>
{/if}

<style>
</style>
