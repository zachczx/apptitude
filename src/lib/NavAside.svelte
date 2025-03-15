<script lang="ts">
	import { onMount } from 'svelte';

	let { category = '', page = '' } = $props();
</script>

<ul class="menu rounded-box w-full text-base" data-pagefind-ignore>
	<li class="text-2xl font-medium lg:px-2 xl:px-4">
		<a href="/learn" class={category === 'learn' && page === '' ? 'text-primary' : undefined}
			>Learn</a>
	</li>
	<li class="lg:px-2 xl:px-4">
		<a href="/learn/basics" class={page === 'basics' ? 'text-primary font-medium' : undefined}
			><summary class="flex items-center gap-4"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					class="fe:beginner"
					viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M12 7.529L5 5.09v10.372l7 3.251zM5.632 3.108L12 5.326l6.368-2.218c1.047-.365 2.18.227 2.53 1.322c.067.213.102.436.102.66v10.372c0 .826-.465 1.574-1.188 1.91L12 21l-7.812-3.628C3.465 17.036 3 16.288 3 15.462V5.09C3 3.936 3.895 3 5 3c.215 0 .429.037.632.108" /></svg
				>Basics</summary
			></a>
	</li>
	<li class="lg:px-2 xl:px-4">
		<a
			href="/learn/basics-web"
			class={page === 'basics-web' ? 'text-primary font-medium' : undefined}
			><summary class="flex items-center gap-4"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					class="hugeicons:internet"
					viewBox="0 0 24 24"
					><g
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						color="currentColor"
						><circle cx="12" cy="12" r="10" /><ellipse cx="12" cy="12" rx="4" ry="10" /><path
							d="M2 12h20" /></g
					></svg
				>The Internet</summary
			></a>
	</li>
	<li class="lg:px-2 xl:px-4">
		<a href="/learn/apps" class={page === 'apps' ? 'text-primary font-medium' : undefined}
			><summary class="flex items-center gap-4"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					class="carbon:apps"
					viewBox="0 0 32 32"
					><path
						fill="currentColor"
						d="M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z" /></svg
				>Apps</summary
			></a>
	</li>
	<li class="lg:px-2 xl:px-4">
		<a href="/learn/wog" class={page === 'wog' ? 'text-primary font-medium' : undefined}
			><summary class="flex items-center gap-4"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					class="carbon:tools"
					viewBox="0 0 32 32"
					><path
						fill="currentColor"
						d="M12.1 2a9.8 9.8 0 0 0-5.4 1.6l6.4 6.4a2.1 2.1 0 0 1 .2 3a2.1 2.1 0 0 1-3-.2L3.7 6.4A9.84 9.84 0 0 0 2 12.1a10.14 10.14 0 0 0 10.1 10.1a11 11 0 0 0 2.6-.3l6.7 6.7a5 5 0 0 0 7.1-7.1l-6.7-6.7a11 11 0 0 0 .3-2.6A10 10 0 0 0 12.1 2m8 10.1a7.6 7.6 0 0 1-.3 2.1l-.3 1.1l.8.8l6.7 6.7a2.88 2.88 0 0 1 .9 2.1A2.72 2.72 0 0 1 27 27a2.9 2.9 0 0 1-4.2 0l-6.7-6.7l-.8-.8l-1.1.3a7.6 7.6 0 0 1-2.1.3a8.27 8.27 0 0 1-5.7-2.3A7.63 7.63 0 0 1 4 12.1a8.3 8.3 0 0 1 .3-2.2l4.4 4.4a4.14 4.14 0 0 0 5.9.2a4.14 4.14 0 0 0-.2-5.9L10 4.2a6.5 6.5 0 0 1 2-.3a8.27 8.27 0 0 1 5.7 2.3a8.5 8.5 0 0 1 2.4 5.9" /></svg
				>Central Tools</summary
			></a>
	</li>
	<li class="lg:px-2 xl:px-4">
		<a
			href="/learn/ux"
			class={page === 'ux' || page === 'ux-advanced' ? 'text-primary font-medium' : undefined}
			><summary class="flex items-center gap-4"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					class="majesticons:ux-circle-line"
					viewBox="0 0 24 24"
					><g
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						><path
							d="M7 10v2c0 .667.4 2 2 2s2-1.333 2-2v-2m3 0l1.5 2m1.5 2l-1.5-2m0 0l1.5-2m-1.5 2L14 14" /><circle
							cx="12"
							cy="12"
							r="10" /></g
					></svg
				>UX</summary
			></a>
		<ul class="border-l-base-content/30 ms-5 border-l-2 ps-6">
			<li>
				<a href="/learn/ux" class={page === 'ux' ? 'text-primary font-medium' : undefined}>L1</a>
			</li>
			<li>
				<a
					href="/learn/ux-advanced"
					class={page === 'ux-advanced' ? 'text-primary font-medium' : undefined}>L2</a>
			</li>
		</ul>
	</li>
	<li class="lg:px-2 xl:px-4">
		<a
			href="/learn/products"
			class={page === 'products' || page === 'products-advanced'
				? 'text-primary font-medium'
				: undefined}
			><summary class="flex items-center gap-4"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					class="carbon:shopping-cart"
					viewBox="0 0 32 32"
					><circle cx="10" cy="28" r="2" fill="currentColor" /><circle
						cx="24"
						cy="28"
						r="2"
						fill="currentColor" /><path
						fill="currentColor"
						d="M28 7H5.82L5 2.8A1 1 0 0 0 4 2H0v2h3.18L7 23.2a1 1 0 0 0 1 .8h18v-2H8.82L8 18h18a1 1 0 0 0 1-.78l2-9A1 1 0 0 0 28 7m-2.8 9H7.62l-1.4-7h20.53Z" /></svg
				>Products</summary
			></a>
		<ul class="border-l-base-content/30 ms-5 border-l-2 ps-6">
			<li>
				<a
					href="/learn/products"
					class={page === 'products' ? 'text-primary font-medium' : undefined}>L1</a>
			</li>
			<li>
				<a
					href="/learn/products-advanced"
					class={page === 'products-advanced' ? 'text-primary font-medium' : undefined}>L2</a>
			</li>
		</ul>
	</li>

	<li class="lg:px-2 xl:px-4">
		<a href="/learn/methods" class={page === 'methods' ? 'text-primary font-medium' : undefined}
			><summary class="flex items-center gap-4"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					class="iconoir:agile"
					viewBox="0 0 24 24"
					><g
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						><path d="M17.5 19H22m0 0l-2.5-2.5M22 19l-2.5 2.5M12 2L9.5 4.5L12 7" /><path
							d="M10.5 4.5a7.5 7.5 0 0 1 0 15H2" /><path
							d="M6.756 5.5A7.5 7.5 0 0 0 3 12c0 1.688.558 3.246 1.5 4.5" /></g
					></svg
				>Methods</summary
			></a>
	</li>
	<li class="lg:px-2 xl:px-4">
		<a href="/learn/data" class={page === 'data' ? 'text-primary font-medium' : undefined}
			><summary class="flex items-center gap-4"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					class="carbon:chart-line-data"
					viewBox="0 0 32 32"
					><path
						fill="currentColor"
						d="M10.06 17.88A4.3 4.3 0 0 0 11 18a4 4 0 0 0 2.23-.68l3.22 2.87a3.88 3.88 0 0 0-.2 3.17A4 4 0 1 0 22.62 19l2.54-5.09a3.78 3.78 0 0 0 2.91-.53a4 4 0 1 0-4.69-.38l-2.54 5.09A4 4 0 0 0 20 18a4 4 0 0 0-2.23.68l-3.22-2.87a3.88 3.88 0 0 0 .2-3.17a4 4 0 1 0-6.45 4.29L4 25V2H2v26a2 2 0 0 0 2 2h26v-2H4.67ZM26 8a2 2 0 1 1-2 2a2 2 0 0 1 2-2m-4 14a2 2 0 1 1-2-2a2 2 0 0 1 2 2M11 12a2 2 0 1 1-2 2a2 2 0 0 1 2-2" /></svg
				>Data</summary
			></a>
	</li>
	<li class="lg:px-2 xl:px-4">
		<a
			href="/learn/ai"
			class={page === 'ai' || page === 'ai-advanced' ? 'text-primary font-medium' : undefined}
			><summary class="flex items-center gap-4"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					class="carbon:magic-wand"
					viewBox="0 0 32 32"
					><path
						fill="currentColor"
						d="M29.414 24L12 6.586a2.05 2.05 0 0 0-2.828 0L6.586 9.172a2 2 0 0 0 0 2.828l17.413 17.414a2 2 0 0 0 2.828 0l2.587-2.586a2 2 0 0 0 0-2.828M8 10.586L10.586 8l5 5l-2.587 2.587zM25.413 28l-11-10.999L17 14.414l11 11ZM2 16l2-2l2 2l-2 2zM14 4l2-2l2 2l-2 2zM2 4l2-2l2 2l-2 2z" /></svg
				>AI</summary
			></a>
		<ul class="border-l-base-content/30 ms-5 border-l-2 ps-6">
			<li>
				<a href="/learn/ai" class={page === 'ai' ? 'text-primary font-medium' : undefined}>L1</a>
			</li>
			<li>
				<a
					href="/learn/ai-advanced"
					class={page === 'ai-advanced' ? 'text-primary font-medium' : undefined}>L2</a>
			</li>
		</ul>
	</li>

	<li class="lg:px-2 xl:px-4">
		<a href="/learn/technical" class={page === 'technical' ? 'text-primary font-medium' : undefined}
			><summary class="flex items-center gap-4"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					class="carbon:code"
					viewBox="0 0 32 32"
					><path
						fill="currentColor"
						d="m31 16l-7 7l-1.41-1.41L28.17 16l-5.58-5.59L24 9zM1 16l7-7l1.41 1.41L3.83 16l5.58 5.59L8 23zm11.42 9.484L17.64 6l1.932.517L14.352 26z" /></svg
				>Web Dev</summary
			></a>
	</li>

	<li class="pt-4 text-2xl font-medium lg:px-2 xl:px-4">
		<a href="/guides" class={category === 'guides' && page === '' ? 'text-primary' : undefined}
			>My Views</a>
	</li>

	<li class="lg:px-2 xl:px-4">
		<a href="/guides/product"
			><span
				class="flex items-center gap-4 {page === 'product' || page === 'product-plan'
					? 'text-primary font-medium'
					: undefined}"
				><svg
					id="carbon:box"
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					viewBox="0 0 32 32"
					><path
						fill="currentColor"
						d="M20 21h-8a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2m-8-4v2h8v-2Z" /><path
						fill="currentColor"
						d="M28 4H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v16a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-2 24H6V12h20Zm2-18H4V6h24z" /></svg>
				Product</span
			></a>
		<ul class="border-l-base-content/30 ms-5 border-l-2 ps-6">
			<li>
				<a
					href="/guides/product"
					class={page === 'product' ? 'text-primary font-medium' : undefined}>General</a>
			</li>
			<li>
				<a
					href="/guides/product-plan"
					class={page === 'product-plan' ? 'text-primary font-medium' : undefined}>Plan</a>
			</li>
		</ul>
	</li>
	<li class="lg:px-2 xl:px-4">
		<a href="/guides/problems" class={page === 'problems' ? 'text-primary font-medium' : undefined}>
			<summary class="flex items-center gap-4"
				><svg
					id="carbon:help"
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					class=""
					viewBox="0 0 32 32"
					><path
						fill="currentColor"
						d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12" /><circle
						cx="16"
						cy="23.5"
						r="1.5"
						fill="currentColor" /><path
						fill="currentColor"
						d="M17 8h-1.5a4.49 4.49 0 0 0-4.5 4.5v.5h2v-.5a2.5 2.5 0 0 1 2.5-2.5H17a2.5 2.5 0 0 1 0 5h-2v4.5h2V17a4.5 4.5 0 0 0 0-9" /></svg>
				Problem Statements</summary>
		</a>
	</li>
	<li class="lg:px-2 xl:px-4">
		<a href="/guides/research" class={page === 'research' ? 'text-primary font-medium' : undefined}>
			<summary class="flex items-center gap-4"
				><svg
					id="ri:survey-line"
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					class=""
					viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M17 2v2h3.007c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.993.993 0 0 1 3 21.007V4.993C3 4.445 3.445 4 3.993 4H7V2zM7 6H5v14h14V6h-2v2H7zm2 10v2H7v-2zm0-3v2H7v-2zm0-3v2H7v-2zm6-6H9v2h6z" /></svg>
				Research</summary>
		</a>
	</li>
	<li class="lg:px-2 xl:px-4">
		<a href="/guides/cost" class={page === 'cost' ? 'text-primary font-medium' : undefined}>
			<summary class="flex items-center gap-4"
				><svg
					id="carbon:currency-dollar"
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					class=""
					viewBox="0 0 32 32"
					><path
						fill="currentColor"
						d="M23 20.515c0-4.615-3.78-5.141-6.817-5.563c-3.31-.46-5.183-.86-5.183-3.71C11 8.85 13.507 8 15.654 8a6.75 6.75 0 0 1 5.568 2.628l1.556-1.256A8.65 8.65 0 0 0 17 6.096V3h-2v3.022c-3.615.22-6 2.26-6 5.22c0 4.73 3.83 5.263 6.908 5.69c3.252.453 5.092.842 5.092 3.583C21 23.547 17.867 24 16 24c-3.43 0-4.878-.964-6.222-2.628l-1.556 1.256A8.44 8.44 0 0 0 15 25.965V29h2v-3.045c3.726-.304 6-2.327 6-5.44" /></svg>
				Cost</summary>
		</a>
	</li>
	<!-- <li class="lg:px-2 xl:px-4">
		<a href="/guides/security" class={page === 'security' ? 'text-primary font-medium' : undefined}
			><summary class="flex items-center gap-4"
				><svg
					id="carbon:ibm-security"
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					class=""
					viewBox="0 0 32 32"
					><path
						fill="currentColor"
						d="M16 0L4 5.978v14.066a12 12 0 0 0 24 0V5.978Zm6.83 27.314L16 23.912v2.228l5.036 2.509A10.003 10.003 0 0 1 6 20.044V7.21l10-4.982L26 7.21v3.75L16 5.978v2.228l10 4.982v3.75l-10-4.982v2.228l10 4.982v.878a10 10 0 0 1-.37 2.687L16 17.934v2.228l8.895 4.431a10 10 0 0 1-2.065 2.721" /></svg>
				Security</summary>
		</a>
	</li> -->
	<li class="lg:px-2 xl:px-4">
		<a href="/guides/running" class={page === 'running' ? 'text-primary font-medium' : undefined}
			><summary class="flex items-center gap-4"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					class="carbon:running"
					viewBox="0 0 32 32"
					><!-- Icon from Carbon by IBM - undefined --><path
						fill="currentColor"
						d="m21.707 20.293l-5-5a.996.996 0 0 0-1.414 0L2 28.586L3.414 30L16 17.414L19.586 21L14 26.586L15.414 28l2.292-2.292l4.001-4.001a.997.997 0 0 0 0-1.414" /><path
						fill="currentColor"
						d="M28.586 9L23 14.586l-6.001-6.002A2 2 0 0 0 15.577 8a2 2 0 0 0-1.407.584L8 14.76l1.414 1.414l6.17-6.175l6.71 6.708a.997.997 0 0 0 1.413 0L30 10.414z" /><path
						fill="currentColor"
						d="M22.5 9C20.57 9 19 7.43 19 5.5S20.57 2 22.5 2S26 3.57 26 5.5S24.43 9 22.5 9m0-5c-.827 0-1.5.673-1.5 1.5S21.673 7 22.5 7S24 6.327 24 5.5S23.327 4 22.5 4" /></svg
				>Running</summary>
		</a>
	</li>
	<li class="pb-4 lg:px-2 xl:px-4">
		<a
			href="/guides/communications"
			class={page === 'communications' ? 'text-primary font-medium' : undefined}
			><summary class="flex items-center gap-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					class="carbon:chat"
					viewBox="0 0 32 32"
					><!-- Icon from Carbon by IBM - undefined --><path
						fill="currentColor"
						d="M17.74 30L16 29l4-7h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9v2H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-4.84Z" /><path
						fill="currentColor"
						d="M8 10h16v2H8zm0 6h10v2H8z" /></svg
				>Communications</summary>
		</a>
	</li>

	<li
		class="pt-4 text-2xl font-bold lg:px-2 xl:px-4 {category === 'techtrippin'
			? 'text-primary'
			: undefined}">
		<a href="/techtrippin">Tech Trippin'</a>
	</li>
	<li class="pb-4 lg:px-2 xl:px-4">
		<a
			href="/techtrippin"
			class={category === 'techtrippin' ? 'text-primary font-medium' : undefined}
			><summary class="flex items-center gap-4"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					id="carbon:thumbs-down"
					class=""
					width="1em"
					height="1em"
					viewBox="0 0 32 32"
					><path
						fill="currentColor"
						d="M30 16V9a7.01 7.01 0 0 0-7-7H2v14h6.465l3.577 5.366l.846 5.917A2.01 2.01 0 0 0 14.868 29H17a3.003 3.003 0 0 0 3-3v-6h6a4.005 4.005 0 0 0 4-4M8 14H4V4h4Zm20 2a2.003 2.003 0 0 1-2 2h-8v8a1 1 0 0 1-1 1h-2.133l-.91-6.366L10 14.697V4h13a5.006 5.006 0 0 1 5 5Z" /></svg>
				Tech Trippin'</summary>
		</a>
	</li>
</ul>

<style>
	ul:not(.menu) > li > a {
		padding-left: 1.5rem;
	}
</style>
