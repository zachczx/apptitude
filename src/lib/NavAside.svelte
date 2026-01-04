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
						{ label: 'UX Fundamentals', id: 'ux-fundamentals', href: '/learn/ux-fundamentals' },
						{
							label: 'UX Design Interaction',
							id: 'ux-design-interaction',
							href: '/learn/ux-design-interaction',
						},
					],
				},
				{
					label: 'Products',
					id: 'header-products',
					icon: Products,
					children: [
						{
							label: 'Product Fundamentals',
							id: 'product-fundamentals',
							href: '/learn/product-fundamentals',
						},
						{ label: 'Product Strategy', id: 'product-strategy', href: '/learn/product-strategy' },
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

	function getClasses(itemID: string | undefined) {
		const baseInclParentItems =
			'rounded-lg block transition-all duration-200 px-3 py-2 w-full text-sm font-semibold';

		const inactive = 'hover:bg-primary/5 text-base-content/70 hover:text-base-content';

		const active = 'bg-primary/10 text-primary';

		const isActive = itemID && page === itemID;
		return [baseInclParentItems, isActive ? active : inactive];
	}
</script>

<ul class="menu w-full p-4" data-pagefind-ignore>
	{#each menuData as section}
		<li class="mt-6 mb-2 px-3 first:mt-0">
			<a
				href={section.href}
				class="cursor-default px-0 text-xs font-bold tracking-widest text-stone-500 uppercase hover:bg-transparent">
				{section.label}
			</a>
		</li>

		{#each section.items as item}
			<li class="w-full px-0">
				{#if item.href}
					<a href={item.href ?? ''} class={[getClasses(item.id)]}>
						<span class="flex items-center gap-3">
							{#if item.icon}
								<item.icon />
							{/if}
							{item.label}
						</span>
					</a>
				{:else}
					<div class={getClasses(item.id)}>
						<span class="flex items-center gap-3">
							{#if item.icon}
								<item.icon class="text-base-content/40" />
							{/if}
							{item.label}
						</span>
					</div>
				{/if}

				{#if item.children}
					<ul class="border-base-200 relative mt-1 ml-5 space-y-0.5 border-l pb-1 pl-0">
						{#each item.children as subItem}
							{@const isActiveSub = page === subItem.id}
							<li>
								<a
									href={subItem.href}
									class={[
										'-ml-px block rounded-l-none rounded-r-lg border-l-2 py-1.5 pl-4 text-sm transition-all duration-200',
										isActiveSub
											? 'border-primary bg-primary/10 text-primary font-bold'
											: 'text-base-content/60 hover:text-base-content hover:border-base-300 border-transparent',
									]}>
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
