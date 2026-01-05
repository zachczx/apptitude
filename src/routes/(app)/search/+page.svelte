<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import { onMount } from 'svelte';

	onMount(async () => {
		// @ts-expect-error :: Pagefind will be present at runtime
		const pagefind = await import('/pagefind/pagefind.js');
		pagefind.init();
		// @ts-expect-error :: PagefindUI is global from script
		new PagefindUI({
			element: '#search',
			showImages: false,
			resetStyles: true,
			autofocus: true,
			processResult: (result: any) => {
				const url = result.url.replace('.html', '');
				result.url = url;
				return result;
			},
		});
	});

	const pageTitle = 'Search';
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<link href="/pagefind/pagefind-ui.css" rel="stylesheet" />
</svelte:head>

<div class="mx-auto max-w-5xl px-6 py-12">
	<div class="mb-12">
		<h1 class="text-4xl font-bold">{pageTitle}</h1>
		<p class="text-base-content mt-2 max-w-2xl text-sm font-light">
			Find topics, guides, and resources across the repository.
		</p>
	</div>

	<div class="w-full">
		<div id="search" class="w-full"></div>
	</div>

	<Footer />
</div>

<style>
	/* Override Pagefind variables to match the theme */
	#search {
		--pagefind-ui-scale: 1;
		--pagefind-ui-primary: var(--color-primary);
		--pagefind-ui-text: var(--color-base-content);
		--pagefind-ui-background: transparent;
		--pagefind-ui-border: var(--color-base-content);
		--pagefind-ui-tag: var(--color-base-200);
		--pagefind-ui-border-radius: 9999px;
	}

	/* Styles to override Pagefind default look to match DaisyUI/App theme */
	:global(.pagefind-ui__search-input) {
		background-color: transparent !important;
		border: 1px solid var(--color-base-content) !important; /* was base-content/20 but lets use specific color if possible, or just base-content with opacity */
		border-color: rgba(
			68,
			64,
			60,
			0.2
		) !important; /* Falling back to known stone-700 with opacity if vars fail, but trying vars */
		border-radius: 9999px !important; /* Rounded full like buttons */
		padding: 1rem 1.5rem 1rem 3.5rem !important;
		font-family: 'Open Sans Variable', sans-serif !important;
		font-size: 1.125rem !important;
		color: var(--color-base-content) !important;
		opacity: 1 !important;
		transition: all 0.2s ease;
		box-shadow: none !important;
	}

	:global(.pagefind-ui__form) {
		position: relative;
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	:global(.pagefind-ui__form::before) {
		background-color: var(--color-base-content) !important;
		opacity: 0.3;
		width: 1.25rem !important;
		height: 1.25rem !important;
		/* Fixed top position to anchor it to the input, avoiding shift when results expand form height */
		top: 1.15rem !important;
		left: 1.5rem !important;
		z-index: 5;
		pointer-events: none;
	}

	/* Use the variable if it works, otherwise the opacity hack above */
	@supports (color: oklch(0 0 0)) {
		:global(.pagefind-ui__search-input) {
			border-color: color-mix(in srgb, var(--color-base-content), transparent 80%) !important;
		}
	}

	:global(.pagefind-ui__search-input:focus) {
		border-color: var(--color-primary) !important;
		outline: 2px solid var(--color-primary);
		outline-offset: 2px;
	}

	:global(.pagefind-ui__search-clear) {
		background-color: transparent !important;
		color: var(--color-base-content) !important;
	}

	:global(.pagefind-ui__drawer) {
		background-color: transparent !important; /* Remove dark bg */
		border-bottom: 0 !important;
		box-shadow: none !important;
	}

	:global(.pagefind-ui__result) {
		border-bottom: 1px solid rgba(0, 0, 0, 0.05) !important;
		padding: 1rem 0 !important;
		border-top: 0 !important;
		border-left: 0 !important;
		border-right: 0 !important;
	}

	:global(#search .pagefind-ui__result-link),
	:global(#search .pagefind-ui__result-title) {
		font-family: 'Open Sans Variable', sans-serif !important;
		font-weight: 700 !important;
		font-size: 1.25rem !important;
		color: var(--color-base-content) !important;
		text-decoration: none !important;
		transition: color 0.2s ease;
	}

	:global(#search .pagefind-ui__result-link:hover),
	:global(#search .pagefind-ui__result-title:hover) {
		color: var(--color-primary) !important;
		text-decoration: none !important;
	}

	:global(.pagefind-ui__result-excerpt) {
		font-family: 'Open Sans Variable', sans-serif !important;
		color: var(--color-base-content) !important;
		opacity: 0.8;
		margin-top: 0.5rem !important;
		font-size: 0.95rem !important;
		line-height: 1.6 !important;
	}

	:global(.pagefind-ui__result-excerpt mark) {
		background-color: var(--color-primary-content) !important; /* Light orange background */
		color: var(--color-primary) !important;
		padding: 0 0.2em;
		border-radius: 0.2em;
		text-decoration: none !important;
		border-bottom: 0 !important; /* Ensure no borders on mark */
	}

	:global(.pagefind-ui__message) {
		font-family: 'Open Sans Variable', sans-serif !important;
		color: var(--color-base-content) !important;
		padding: 2rem 0 !important;
		font-weight: 600 !important;
		opacity: 0.6;
		text-transform: uppercase;
		font-size: 0.875rem;
		letter-spacing: 0.05em;
	}

	:global(.pagefind-ui__button) {
		background-color: transparent !important;
		color: var(--color-primary) !important;
		border: 1px solid var(--color-primary) !important;
		border-radius: 9999px !important;
		margin-top: 2rem !important;
		font-weight: 600 !important;
		padding: 0.5rem 1.5rem !important;
	}

	:global(.pagefind-ui__button:hover) {
		background-color: var(--color-primary) !important;
		color: white !important;
	}
</style>
