<script>
	import CarbonCaretLeft from './assets/svg/CarbonCaretLeft.svelte';
	export let category = '';
	export let page = '';
</script>

<ul class="view-transition-navaside menu w-full rounded-box" data-pagefind-ignore>
	<li class="text-xl font-bold lg:px-2 xl:px-4 {category === 'learn' ? 'text-primary' : undefined}">
		<a href="/learn">Learn </a>
	</li>
	<li class="lg:px-2 xl:px-4">
		<details
			open={page === 'basics' ||
			page === 'basics-web' ||
			page === 'apps' ||
			page === 'wog' ||
			page === 'ux' ||
			page === 'products'
				? true
				: false}>
			<summary
				class={page === 'basics' ||
				page === 'basics-web' ||
				page === 'apps' ||
				page === 'wog' ||
				page === 'ux' ||
				page === 'products'
					? 'text-primary'
					: undefined}
				><svg
					id="carbon:skill-level-basic"
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					class="me-2"
					viewBox="0 0 32 32"
					><path
						fill="currentColor"
						d="M30 30h-8V4h8zm-6-2h4V6h-4zm-4 2h-8V12h8zm-6-2h4V14h-4zm-4 2H2V18h8z" /></svg> Basics</summary>
			<ul class="ms-6 border-l-2 border-l-base-content/30 xl:ms-12">
				<li>
					<a href="/learn/basics" class={page === 'basics' ? 'text-primary' : undefined}
						>Basics {#if page === 'basics'}
							<CarbonCaretLeft
								class="inline scale-125 text-primary hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700" />
						{/if}</a>
				</li>
				<li>
					<a href="/learn/basics-web" class={page === 'basics-web' ? 'text-primary' : undefined}
						>Basics (Web) {#if page === 'basics-web'}
							<CarbonCaretLeft
								class="inline scale-125 text-primary hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700" />
						{/if}</a>
				</li>
				<li>
					<a href="/learn/apps" class={page === 'apps' ? 'text-primary' : undefined}
						>Apps {#if page === 'apps'}
							<CarbonCaretLeft
								class="inline scale-125 text-primary hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700" />
						{/if}</a>
				</li>
				<li>
					<a href="/learn/wog" class={page === 'wog' ? 'text-primary' : undefined}
						>Central Tools {#if page === 'wog'}
							<CarbonCaretLeft
								class="inline scale-125 text-primary hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700" />
						{/if}</a>
				</li>
				<li>
					<a href="/learn/ux" class={page === 'ux' ? 'text-primary' : undefined}
						>UX (I) {#if page === 'ux'}
							<CarbonCaretLeft
								class="inline scale-125 text-primary hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700" />
						{/if}</a>
				</li>
				<li>
					<a href="/learn/products" class={page === 'products' ? 'text-primary' : undefined}
						>Products (I) {#if page === 'products'}
							<CarbonCaretLeft
								class="inline scale-125 text-primary hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700" />
						{/if}</a>
				</li>
			</ul>
		</details>
	</li>
	<li class="lg:px-2 xl:px-4">
		<details
			open={page === 'products-advanced' ||
			page === 'ux-advanced' ||
			page === 'methods' ||
			page === 'data' ||
			page === 'ai'
				? true
				: false}>
			<summary
				class={page === 'products-advanced' ||
				page === 'ux-advanced' ||
				page === 'methods' ||
				page === 'data' ||
				page === 'ai'
					? 'text-primary'
					: undefined}
				><svg
					id="carbon:skill-level-intermediate"
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					class="me-2"
					viewBox="0 0 32 32"
					><path
						fill="currentColor"
						d="M30 30h-8V4h8zm-6-2h4V6h-4zm-4 2h-8V12h8zm-10 0H2V18h8z" /></svg> Intermediate</summary>
			<ul class="ms-6 border-l-2 border-l-base-content/30 xl:ms-12">
				<li>
					<a
						href="/learn/products-advanced"
						class={page === 'products-advanced' ? 'text-primary' : undefined}
						>Products (II) {#if page === 'products-advanced'}
							<CarbonCaretLeft
								class="inline scale-125 text-primary hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700" />
						{/if}</a>
				</li>
				<li>
					<a href="/learn/ux-advanced" class={page === 'ux-advanced' ? 'text-primary' : undefined}
						>UX (II) {#if page === 'ux-advanced'}
							<CarbonCaretLeft
								class="inline scale-125 text-primary hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700" />
						{/if}</a>
				</li>
				<li>
					<a href="/learn/methods" class={page === 'methods' ? 'text-primary' : undefined}
						>Methods {#if page === 'methods'}
							<CarbonCaretLeft
								class="inline scale-125 text-primary hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700" />
						{/if}</a>
				</li>
				<li>
					<a href="/learn/data" class={page === 'data' ? 'text-primary' : undefined}
						>Data {#if page === 'data'}
							<CarbonCaretLeft
								class="inline scale-125 text-primary hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700" />
						{/if}</a>
				</li>
				<li>
					<a href="/learn/ai" class={page === 'ai' ? 'text-primary' : undefined}
						>AI (I) {#if page === 'ai'}
							<CarbonCaretLeft
								class="inline scale-125 text-primary hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700" />
						{/if}</a>
				</li>
			</ul>
		</details>
	</li>
	<li class="border-b-2 border-b-base-100 pb-4 lg:px-2 xl:px-4">
		<details open={page === 'ai-advanced' || page === 'technical' ? true : false}>
			<summary class={page === 'ai-advanced' || page === 'technical' ? 'text-primary' : undefined}
				><svg
					id="carbon:skill-level-advanced"
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					class="me-2"
					viewBox="0 0 32 32"
					><path fill="currentColor" d="M30 30h-8V4h8zm-10 0h-8V12h8zm-10 0H2V18h8z" /></svg> Advanced</summary>
			<ul class="ms-6 border-l-2 border-l-base-content/30 xl:ms-12">
				<li>
					<a href="/learn/ai-advanced" class={page === 'ai-advanced' ? 'text-primary' : undefined}
						>AI (II) {#if page === 'ai-advanced'}
							<CarbonCaretLeft
								class="inline scale-125 text-primary hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700" />
						{/if}</a>
				</li>
				<li>
					<a href="/learn/technical" class={page === 'technical' ? 'text-primary' : undefined}
						>Technical {#if page === 'technical'}
							<CarbonCaretLeft
								class="inline scale-125 text-primary hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700" />
						{/if}</a>
				</li>
			</ul>
		</details>
	</li>
	<li class="pt-4 text-xl font-bold lg:px-2 xl:px-4">
		<a href="/guides" class={category === 'guides' ? 'text-primary' : undefined}>Guides</a>
	</li>
	<li class="lg:px-2 xl:px-4">
		<details open={page === 'product-plan' ? true : page === 'product' ? true : false}>
			<summary
				><svg
					id="carbon:box"
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					class="me-2"
					viewBox="0 0 32 32"
					><path
						fill="currentColor"
						d="M20 21h-8a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2m-8-4v2h8v-2Z" /><path
						fill="currentColor"
						d="M28 4H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v16a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-2 24H6V12h20Zm2-18H4V6h24z" /></svg>
				Product</summary>
			<ul class="ms-6 border-l-2 border-l-base-content/30 xl:ms-12">
				<li>
					<a href="/guides/product" class={page === 'product' ? 'text-primary' : undefined}
						>Product Checklist {#if page === 'product'}
							<CarbonCaretLeft
								class="inline scale-125 text-primary hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700" />
						{/if}</a>
				</li>
				<li>
					<a
						href="/guides/product-plan"
						class={page === 'product-plan' ? 'text-primary' : undefined}
						>Product Plan 101 {#if page === 'product-plan'}
							<CarbonCaretLeft
								class="inline scale-125 text-primary hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700" />
						{/if}</a>
				</li>
			</ul>
		</details>
	</li>
	<li class="lg:px-2 xl:px-4">
		<a href="/guides/problems" class={page === 'problems' ? 'text-primary' : undefined}>
			<summary
				><svg
					id="carbon:help"
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					class="mb-1 me-3 inline"
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
				Problem Statements</summary
			>{#if page === 'problems'}
				<CarbonCaretLeft
					class="inline scale-125 text-primary hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700" />
			{/if}
		</a>
	</li>
	<li class="lg:px-2 xl:px-4">
		<a href="/guides/research" class={page === 'research' ? 'text-primary' : undefined}>
			<summary
				><svg
					id="ri:survey-line"
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					class="mb-1 me-3 inline"
					viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M17 2v2h3.007c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.993.993 0 0 1 3 21.007V4.993C3 4.445 3.445 4 3.993 4H7V2zM7 6H5v14h14V6h-2v2H7zm2 10v2H7v-2zm0-3v2H7v-2zm0-3v2H7v-2zm6-6H9v2h6z" /></svg>
				Research</summary>
			{#if page === 'research'}
				<CarbonCaretLeft
					class="inline scale-125 text-primary hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700" />
			{/if}
		</a>
	</li>
	<li class="lg:px-2 xl:px-4">
		<a href="/guides/cost" class={page === 'cost' ? 'text-primary' : undefined}>
			<summary
				><svg
					id="carbon:currency-dollar"
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					class="mb-1 me-3 inline"
					viewBox="0 0 32 32"
					><path
						fill="currentColor"
						d="M23 20.515c0-4.615-3.78-5.141-6.817-5.563c-3.31-.46-5.183-.86-5.183-3.71C11 8.85 13.507 8 15.654 8a6.75 6.75 0 0 1 5.568 2.628l1.556-1.256A8.65 8.65 0 0 0 17 6.096V3h-2v3.022c-3.615.22-6 2.26-6 5.22c0 4.73 3.83 5.263 6.908 5.69c3.252.453 5.092.842 5.092 3.583C21 23.547 17.867 24 16 24c-3.43 0-4.878-.964-6.222-2.628l-1.556 1.256A8.44 8.44 0 0 0 15 25.965V29h2v-3.045c3.726-.304 6-2.327 6-5.44" /></svg>
				Cost</summary
			>{#if page === 'cost'}
				<CarbonCaretLeft
					class="inline scale-125 text-primary hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700" />
			{/if}
		</a>
	</li>
	<li class="border-b-2 border-b-base-100 pb-4 lg:px-2 xl:px-4">
		<a href="/guides/security" class={page === 'security' ? 'text-primary' : undefined}
			><summary
				><svg
					id="carbon:ibm-security"
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					class="mb-1 me-3 inline"
					viewBox="0 0 32 32"
					><path
						fill="currentColor"
						d="M16 0L4 5.978v14.066a12 12 0 0 0 24 0V5.978Zm6.83 27.314L16 23.912v2.228l5.036 2.509A10.003 10.003 0 0 1 6 20.044V7.21l10-4.982L26 7.21v3.75L16 5.978v2.228l10 4.982v3.75l-10-4.982v2.228l10 4.982v.878a10 10 0 0 1-.37 2.687L16 17.934v2.228l8.895 4.431a10 10 0 0 1-2.065 2.721" /></svg>
				Security</summary
			>{#if page === 'security'}
				<CarbonCaretLeft
					class="inline scale-125 text-primary hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700" />
			{/if}
		</a>
	</li>
	<li
		class="pt-4 text-xl font-bold lg:px-2 xl:px-4 {category === 'techtrippin'
			? 'text-primary'
			: undefined}">
		<a href="/techtrippin">Tech Trippin'</a>
	</li>
	<li class="border-b-2 border-b-base-100 pb-4 lg:px-2 xl:px-4">
		<a href="/techtrippin" class={category === 'techtrippin' ? 'text-primary' : undefined}
			><summary
				><svg
					xmlns="http://www.w3.org/2000/svg"
					id="carbon:thumbs-down"
					class="mb-1 me-3 inline"
					width="1em"
					height="1em"
					viewBox="0 0 32 32"
					><path
						fill="currentColor"
						d="M30 16V9a7.01 7.01 0 0 0-7-7H2v14h6.465l3.577 5.366l.846 5.917A2.01 2.01 0 0 0 14.868 29H17a3.003 3.003 0 0 0 3-3v-6h6a4.005 4.005 0 0 0 4-4M8 14H4V4h4Zm20 2a2.003 2.003 0 0 1-2 2h-8v8a1 1 0 0 1-1 1h-2.133l-.91-6.366L10 14.697V4h13a5.006 5.006 0 0 1 5 5Z" /></svg>
				Tech Trippin'</summary
			>{#if category === 'techtrippin'}
				<CarbonCaretLeft
					class="inline scale-125 text-primary hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700" />
			{/if}
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
	.view-transition-navaside {
		view-transition-name: view-transition-navaside;
	}
</style>
