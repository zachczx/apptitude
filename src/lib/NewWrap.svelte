<script>
	let { children, toc, title, subtitle = '' } = $props();
</script>

<div class="relative grid grid-cols-[1fr_auto]">
	<article class="w-full max-w-[900px] justify-self-center px-4 pt-4 pb-12 lg:pt-0 lg:pb-32">
		<div class="mt-14 mb-8 grid gap-4 lg:mt-20 lg:mb-20">
			<h1
				class="inline-block bg-linear-to-r from-emerald-200 via-lime-200 to-teal-300 bg-clip-text pb-4 text-4xl font-bold tracking-tighter text-transparent lg:text-7xl">
				{title}
			</h1>

			{#if subtitle}
				<p>
					{subtitle}
				</p>
			{/if}
			<article class="mt-12">
				{@render children()}
			</article>
		</div>
	</article>
	<aside
		class="vertical-offset sticky top-16 hidden w-full content-start overflow-y-auto rounded-r-3xl lg:grid">
		{@render toc()}
	</aside>
	<div class="col-span-2">
		<footer class="py-2 text-center">
			© 2024-2025 Zixian Chen. All views expressed here are solely mine.
		</footer>
	</div>
</div>

<style>
	.vertical-offset {
		height: calc(100dvh - 56px);
	}
</style>
