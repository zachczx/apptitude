<script>
	export let urlSelf = '';
	export let category = '';
	export let topic = '';
	export let page = '';
	export let contents;
	export let currentSection;
</script>

<ul class="menu w-full rounded-box px-4" data-pagefind-ignore>
	<li class="text-xl font-bold {category === 'learn' ? 'text-primary' : undefined}">
		<a>Learn</a>
	</li>
	<li>
		<details>
			<summary
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
			<ul class="ms-6 border-l-2 border-l-base-content/30">
				<li><a href="/learn/basics">Basics</a></li>
				<li><a href="/learn/basics-web">Basics (Web)</a></li>
				<li><a href="/learn/apps">Apps</a></li>
				<li><a href="/learn/wog">Central Tools</a></li>
				<li><a href="/learn/ux">UX (I)</a></li>
				<li><a href="/learn/products">Products (I)</a></li>
			</ul>
		</details>
	</li>
	<li>
		<details>
			<summary
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
			<ul class="ms-6 border-l-2 border-l-base-content/30">
				<li><a href="/learn/products-advanced">Products (II)</a></li>
				<li><a href="/learn/ux-advanced">UX (II)</a></li>
				<li><a href="/learn/methods">Methods</a></li>
				<li><a href="/learn/data">Data</a></li>
				<li><a href="/learn/ai">AI (I)</a></li>
			</ul>
		</details>
	</li>
	<li>
		<details>
			<summary
				><svg
					id="carbon:skill-level-advanced"
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					class="me-2"
					viewBox="0 0 32 32"
					><path fill="currentColor" d="M30 30h-8V4h8zm-10 0h-8V12h8zm-10 0H2V18h8z" /></svg> Advanced</summary>
			<ul class="ms-6 border-l-2 border-l-base-content/30">
				<li><a href="/learn/ai-advanced">AI (II)</a></li>
				<li><a href="/learn/technical">Technical</a></li>
			</ul>
		</details>
	</li>
	<li class="pt-8 text-xl font-bold {category === 'guides' ? 'text' : undefined}">
		<a href="/guides">Guides</a>
	</li>
	<li>
		<a href="/guides/problems">
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
				Problem Statements</summary>
		</a>
	</li>
	<li>
		<a href="/guides/research">
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
		</a>
	</li>
	<li>
		<details>
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
			<ul class="ms-6 border-l-2 border-l-base-content/30">
				<li><a href="/guides/product">Product Checklist</a></li>
				<li><a href="/guides/product-plan">Product Plan 101</a></li>
			</ul>
		</details>
	</li>
	<li>
		<a href="/guides/cost">
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
				Cost</summary>
		</a>
	</li>
	<li>
		<a href="/guides/security"
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
				Security</summary>
		</a>
	</li>
</ul>
