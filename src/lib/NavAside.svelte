<script lang="ts">
	import Basics from '$lib/assets/svg/nav-icons/Basics.svelte';
	import Internet from '$lib/assets/svg/nav-icons/Internet.svelte';
	import Apps from '$lib/assets/svg/nav-icons/Apps.svelte';
	import CentralTools from '$lib/assets/svg/nav-icons/CentralTools.svelte';
	import UX from '$lib/assets/svg/nav-icons/UX.svelte';
	import Products from '$lib/assets/svg/nav-icons/Products.svelte';
	import Methods from '$lib/assets/svg/nav-icons/Methods.svelte';
	import Data from '$lib/assets/svg/nav-icons/Data.svelte';
	import AI from '$lib/assets/svg/nav-icons/AI.svelte';
	import WebDev from '$lib/assets/svg/nav-icons/WebDev.svelte';
	import Product from '$lib/assets/svg/nav-icons/Product.svelte';
	import ProblemStatements from '$lib/assets/svg/nav-icons/ProblemStatements.svelte';
	import Research from '$lib/assets/svg/nav-icons/Research.svelte';
	import Cost from '$lib/assets/svg/nav-icons/Cost.svelte';
	import Running from '$lib/assets/svg/nav-icons/Running.svelte';
	import Communications from '$lib/assets/svg/nav-icons/Communications.svelte';
	import TechTrippin from '$lib/assets/svg/nav-icons/TechTrippin.svelte';

	let { page = '' } = $props();

	const menuData: MenuSection[] = [
		{
			label: 'Docs',
			href: '/learn',
			items: [
				{ label: 'Basics', id: 'basics', href: '/learn/basics', icon: Basics },
				{ label: 'Internet', id: 'basics-web', href: '/learn/basics-web', icon: Internet },
				{ label: 'Apps', id: 'apps', href: '/learn/apps', icon: Apps },
				{ label: 'Central Tools', id: 'wog', href: '/learn/wog', icon: CentralTools },
				{
					label: 'UX',
					id: 'header-ux',
					icon: UX,
					children: [
						{ label: 'L1', id: 'ux', href: '/learn/ux' },
						{ label: 'L2', id: 'ux-advanced', href: '/learn/ux-advanced' },
					],
				},
				{
					label: 'Products',
					id: 'header-products',
					icon: Products,
					children: [
						{ label: 'L1', id: 'products', href: '/learn/products' },
						{ label: 'L2', id: 'products-advanced', href: '/learn/products-advanced' },
					],
				},
				{ label: 'Methods', id: 'methods', href: '/learn/methods', icon: Methods },
				{ label: 'Data', id: 'data', href: '/learn/data', icon: Data },
				{
					label: 'AI',
					id: 'header-ai',
					icon: AI,
					children: [
						{ label: 'L1', id: 'ai', href: '/learn/ai' },
						{ label: 'L2', id: 'ai-advanced', href: '/learn/ai-advanced' },
					],
				},
				{ label: 'Web Dev', id: 'technical', href: '/learn/technical', icon: WebDev },
			],
		},

		{
			label: 'Playbook',
			href: '/guides',
			items: [
				{
					label: 'Product',
					id: 'header-product',
					icon: Product,
					children: [
						{ label: 'General', id: 'product', href: '/guides/product' },
						{ label: 'Plan', id: 'product-plan', href: '/guides/product-plan' },
					],
				},
				{
					label: 'Problem Statements',
					id: 'problems',
					href: '/guides/problems',
					icon: ProblemStatements,
				},
				{ label: 'Research', id: 'research', href: '/guides/research', icon: Research },
				{ label: 'Cost', id: 'cost', href: '/guides/cost', icon: Cost },
				{ label: 'Running', id: 'running', href: '/guides/running', icon: Running },
				{
					label: 'Communications',
					id: 'communications',
					href: '/guides/communications',
					icon: Communications,
				},
			],
		},

		{
			label: 'Tripping',
			href: '/techtrippin',
			items: [
				{ label: "Tech Trippin'", id: 'techtrippin', href: '/techtrippin', icon: TechTrippin },
			],
		},
	];

	// ---------------------------------------------------------
	// 3. LOGIC
	// ---------------------------------------------------------

	function getClasses(itemID: string | undefined, isSubItem = false) {
		// Base classes for all links
		const base = 'rounded-3xl block transition-colors duration-100 px-4 py-2 w-full';

		// Inactive State
		const inactive = 'hover:bg-primary/10 text-base-content/80';

		// Active State
		const active = 'bg-primary/30 font-bold';

		// Logic: active if IDs match
		const isActive = itemID && page === itemID;

		return [base, isActive ? active : inactive];
	}
</script>

<ul class="menu rounded-box w-full text-base" data-pagefind-ignore>
	{#each menuData as section}
		<li class="mt-8 font-bold first:mt-0 lg:px-2 xl:px-4">
			<a
				href={section.href}
				class="hover:bg-primary/10 text-xs tracking-wider text-stone-500 uppercase hover:rounded-3xl">
				{section.label}
			</a>
		</li>

		{#each section.items as item}
			<li class="w-full text-sm font-medium lg:px-2 xl:px-4">
				{#if item.href}
					<a href={item.href ?? ''} class={[getClasses(item.id)]}>
						<span class="flex items-center gap-4">
							{#if item.icon}
								<item.icon />
							{/if}
							{item.label}
						</span>
					</a>
				{:else}
					<div class={[getClasses(item.id), 'cursor-default hover:bg-transparent']}>
						<span class="flex items-center gap-4">
							{#if item.icon}
								<item.icon />
							{/if}
							{item.label}
						</span>
					</div>
				{/if}

				{#if item.children}
					<ul class="border-l-base-content/30 ms-5 border-l-2">
						{#each item.children as subItem}
							<li class="-ms-1.5">
								<a href={subItem.href} class={getClasses(subItem.id, true)}>
									{subItem.label}
								</a>
							</li>
						{/each}
					</ul>
				{/if}
			</li>
		{/each}
	{/each}
</ul>

<style>
	/* Custom indent override if the Tailwind classes aren't enough */
	ul:not(.menu) > li > a {
		padding-left: 1.5rem;
	}
</style>
