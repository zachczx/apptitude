<script lang="ts">
	import {
		// Docs Imports
		Education, // Basics
		Globe, // Internet
		AppConnectivity, // Apps
		Building, // Central Tools
		UserSpeaker, // UX
		Product, // Products
		Flow, // Methods
		DataBase, // Data
		Bot, // AI
		Security, // Security
		Code, // Web Dev
		Template, // Web Design
		Infinity, // DevOps

		// Playbook Imports
		Help, // Problem Statements
		Search, // Research
		CurrencyDollar, // Cost
		Run, // Running
		Chat, // Communications

		// Tripping Imports
		Plane, // Tech Trippin'
	} from 'carbon-icons-svelte';

	let { page = '' } = $props();

	const menuData: MenuSection[] = [
		{
			label: 'Docs',
			href: '/learn',
			items: [
				{ label: 'Basics', id: 'basics', href: '/learn/basics', icon: Education },
				{ label: 'Internet', id: 'basics-web', href: '/learn/basics-web', icon: Globe },
				{ label: 'Apps', id: 'apps', href: '/learn/apps', icon: AppConnectivity },
				{ label: 'Central Tools', id: 'wog', href: '/learn/wog', icon: Building },
				{
					label: 'UX',
					id: 'header-ux',
					icon: UserSpeaker,
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
					icon: Product,
					children: [
						{
							label: 'Product Fundamentals',
							id: 'product-fundamentals',
							href: '/learn/product-fundamentals',
						},
						{ label: 'Product Strategy', id: 'product-strategy', href: '/learn/product-strategy' },
					],
				},
				{ label: 'Methods', id: 'methods', href: '/learn/methods', icon: Flow },
				{ label: 'Data', id: 'data', href: '/learn/data', icon: DataBase },
				{
					label: 'AI',
					id: 'header-ai',
					icon: Bot,
					children: [
						{ label: 'AI Fundamentals', id: 'ai-fundamentals', href: '/learn/ai-fundamentals' },
						{
							label: 'AI Engineering & Strategy',
							id: 'ai-engineering-strategy',
							href: '/learn/ai-engineering-strategy',
						},
					],
				},
				{ label: 'Security', id: 'security', href: '/learn/security', icon: Security },
				{ label: 'Web Dev', id: 'technical', href: '/learn/technical', icon: Code },
				{ label: 'Web Design', id: 'web-design', href: '/learn/web-design', icon: Template },
				{ label: 'DevOps & SRE', id: 'devops', href: '/learn/devops', icon: Infinity },
			],
		},

		{
			label: 'Playbook',
			href: '/guides',
			items: [
				{
					label: 'Product',
					id: 'header-product',
					icon: Product, // Reusing Product icon
					children: [
						{ label: 'General', id: 'product', href: '/guides/product' },
						{ label: 'Plan', id: 'product-plan', href: '/guides/product-plan' },
					],
				},
				{
					label: 'Problem Statements',
					id: 'problems',
					href: '/guides/problems',
					icon: Help, // Represents the "Question" or the "Why"
				},
				{ label: 'Research', id: 'research', href: '/guides/research', icon: Search },
				{ label: 'Cost', id: 'cost', href: '/guides/cost', icon: CurrencyDollar },
				{ label: 'Running', id: 'running', href: '/guides/running', icon: Run }, // Represents execution
				{
					label: 'Communications',
					id: 'communications',
					href: '/guides/communications',
					icon: Chat,
				},
			],
		},

		{
			label: 'Tripping',
			href: '/techtrippin',
			items: [{ label: "Tech Trippin'", id: 'techtrippin', href: '/techtrippin', icon: Plane }],
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
