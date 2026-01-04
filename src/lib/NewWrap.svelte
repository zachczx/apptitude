<script lang="ts">
	let { children, toc, title, subtitle = '' } = $props();
</script>

<div class="relative grid min-h-dvh grid-cols-[1fr_auto]">
	<article class="grid max-w-200 grid-rows-[auto_1fr_auto] justify-self-center">
		<div class="mb-8 rounded-xl py-8">
			<h1 class="text-4xl font-bold lg:text-7xl">
				{title}
			</h1>
			{#if subtitle}
				<p class="subtitle mt-4">{subtitle}</p>
			{/if}
		</div>

		<main class="w-full max-w-5xl">
			{@render children()}
		</main>

		<footer class="mt-8 mb-1">
			<div class="footer-content">© Zixian Chen. Views here are solely mine.</div>
		</footer>
	</article>

	<aside class="overflow sticky top-14 h-[calc(100vh-4rem)]">
		{@render toc()}
	</aside>
</div>
