<script lang="ts">
	let { category = '', page = '' } = $props();
</script>

<ul class="menu rounded-box w-full text-base" data-pagefind-ignore>
	<li class="text-2xl font-bold lg:px-2 xl:px-4">
		<a href="/learn">Learn</a>
	</li>
	<li class="lg:px-2 xl:px-4">
		<span
			class="flex items-center gap-4 {page === 'basics' ||
			page === 'basics-web' ||
			page === 'apps' ||
			page === 'wog' ||
			page === 'ux' ||
			page === 'products'
				? 'text-primary font-medium'
				: undefined}"
			><svg
				id="carbon:skill-level-basic"
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 32 32"
				><path
					fill="currentColor"
					d="M30 30h-8V4h8zm-6-2h4V6h-4zm-4 2h-8V12h8zm-6-2h4V14h-4zm-4 2H2V18h8z" /></svg
			>Basic</span>
		<ul class="border-l-base-content/30 list-item-padding ms-6 border-l-2 ps-4">
			<li>
				<a href="/learn/basics" class={page === 'basics' ? 'text-primary font-medium' : undefined}
					>Basics</a>
			</li>
			<li>
				<a
					href="/learn/basics-web"
					class={page === 'basics-web' ? 'text-primary font-medium' : undefined}>Basics (Web)</a>
			</li>
			<li>
				<a href="/learn/apps" class={page === 'apps' ? 'text-primary font-medium' : undefined}
					>Apps</a>
			</li>
			<li>
				<a href="/learn/wog" class={page === 'wog' ? 'text-primary font-medium' : undefined}
					>Central Tools</a>
			</li>
			<li>
				<a href="/learn/ux" class={page === 'ux' ? 'text-primary font-medium' : undefined}
					>UX (I)</a>
			</li>
			<li>
				<a
					href="/learn/products"
					class={page === 'products' ? 'text-primary font-medium' : undefined}>Products (I)</a>
			</li>
		</ul>
	</li>
	<li class="lg:px-2 xl:px-4">
		<span
			class="flex items-center gap-4 {page === 'products-advanced' ||
			page === 'ux-advanced' ||
			page === 'methods' ||
			page === 'data' ||
			page === 'ai'
				? 'text-primary'
				: undefined}"
			><svg
				id="carbon:skill-level-intermediate"
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 32 32"
				><path
					fill="currentColor"
					d="M30 30h-8V4h8zm-6-2h4V6h-4zm-4 2h-8V12h8zm-10 0H2V18h8z" /></svg
			>Intermediate</span>
		<ul class="border-l-base-content/30 ms-5 border-l-2 ps-6">
			<li>
				<a
					href="/learn/products-advanced"
					class={page === 'products-advanced' ? 'text-primary font-medium' : undefined}
					>Products (II)</a>
			</li>
			<li>
				<a
					href="/learn/ux-advanced"
					class={page === 'ux-advanced' ? 'text-primary font-medium' : undefined}>UX (II)</a>
			</li>
			<li>
				<a href="/learn/methods" class={page === 'methods' ? 'text-primary font-medium' : undefined}
					>Methods</a>
			</li>
			<li>
				<a href="/learn/data" class={page === 'data' ? 'text-primary font-medium' : undefined}
					>Data</a>
			</li>
			<li>
				<a href="/learn/ai" class={page === 'ai' ? 'text-primary font-medium' : undefined}
					>AI (I)</a>
			</li>
		</ul>
	</li>
	<li class="pb-4 lg:px-2 xl:px-4">
		<span
			class="flex items-center gap-4 {page === 'ai-advanced' || page === 'technical'
				? 'text-primary font-medium'
				: undefined}"
			><svg
				id="carbon:skill-level-advanced"
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 32 32"
				><path fill="currentColor" d="M30 30h-8V4h8zm-10 0h-8V12h8zm-10 0H2V18h8z" /></svg
			>Advanced</span>
		<ul class="border-l-base-content/30 ms-5 border-l-2 ps-6">
			<li>
				<a
					href="/learn/ai-advanced"
					class={page === 'ai-advanced' ? 'text-primary font-medium' : undefined}>AI (II)</a>
			</li>
			<li>
				<a
					href="/learn/technical"
					class={page === 'technical' ? 'text-primary font-medium' : undefined}>Technical</a>
			</li>
		</ul>
	</li>

	<li class="pt-4 text-2xl font-bold lg:px-2 xl:px-4">
		<a href="/guides" class={category === 'guides' ? 'text-primary font-medium' : undefined}
			>Guides</a>
	</li>

	<li class="lg:px-2 xl:px-4">
		<span
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
			Product</span>
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
	<li class="lg:px-2 xl:px-4">
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
	</li>
	<li class="pb-4 lg:px-2 xl:px-4">
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
	<!-- <li
		class="pt-4 text-xl font-bold lg:px-2 xl:px-4 {category === 'about'
			? 'text-primary'
			: undefined}">
		<a href="/about">About</a>
	</li> -->
</ul>

<style>
	ul:not(.menu) > li > a {
		padding-left: 1.5rem;
	}
</style>
