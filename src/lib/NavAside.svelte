<script lang="ts">
	import {
		// Docs Imports
		Education,
		Globe,
		AppConnectivity,
		Building,
		UserSpeaker,
		Gui,
		Product,
		Analytics,
		Flow,
		Group,
		Code,
		Mobile,
		DataBase,
		Bot,
		Chip,
		Security,
		Infinity,
		Chemistry,

		// Playbook Imports
		Help,
		Search,
		CurrencyDollar,
		Run,
		Chat,

		// Tripping Imports
		Plane,
		ColorPalette,
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

				{ header: 'Product & Design' },
				{
					label: 'Product Fundamentals',
					id: 'product-fundamentals',
					href: '/learn/product-fundamentals',
					icon: Product,
				},
				{
					label: 'Product Strategy',
					id: 'product-strategy',
					href: '/learn/product-strategy',
					icon: Analytics,
				},
				{ label: 'Methods (Agile)', id: 'methods', href: '/learn/methods', icon: Flow },
				{
					label: 'UX Fundamentals',
					id: 'ux-fundamentals',
					href: '/learn/ux-fundamentals',
					icon: UserSpeaker,
				},
				{
					label: 'UX Design',
					id: 'ux-design-interaction',
					href: '/learn/ux-design-interaction',
					icon: Gui,
				},
				{
					label: 'Web Design',
					id: 'web-design',
					href: '/learn/web-design',
					icon: ColorPalette,
				},
				{
					label: 'Eng Management',
					id: 'engineering-culture',
					href: '/learn/engineering-culture',
					icon: Group,
				},

				{ header: 'Engineering & Data' },
				{
					label: 'Web Engineering',
					id: 'web-engineering',
					href: '/learn/web-engineering',
					icon: Code,
				},
				{ label: 'Mobile Engineering', id: 'mobile', href: '/learn/mobile', icon: Mobile },
				{ label: 'Data & Analytics', id: 'data', href: '/learn/data', icon: DataBase },
				{
					label: 'AI Fundamentals',
					id: 'ai-fundamentals',
					href: '/learn/ai-fundamentals',
					icon: Bot,
				},
				{
					label: 'AI Engineering',
					id: 'ai-engineering-strategy',
					href: '/learn/ai-engineering-strategy',
					icon: Chip,
				},
				{ label: 'Security', id: 'security', href: '/learn/security', icon: Security },
				{ label: 'DevOps & SRE', id: 'devops', href: '/learn/devops', icon: Infinity },
				{ label: 'Testing & QA', id: 'testing', href: '/learn/testing', icon: Chemistry }, // If you added this
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
					icon: Help,
				},
				{ label: 'Research', id: 'research', href: '/guides/research', icon: Search },
				{ label: 'Cost', id: 'cost', href: '/guides/cost', icon: CurrencyDollar },
				{ label: 'Running', id: 'running', href: '/guides/running', icon: Run },
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
			'rounded-lg block transition-all duration-200 ps-7 pe-3 py-2 w-full text-sm font-semibold';

		const inactive = 'hover:bg-primary/5 text-base-content/70 hover:text-base-content';

		const active = 'bg-primary/10 text-orange-700';

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
			{#if item.header}
				<div
					class="pointer-events-none mt-10 mb-2 flex items-center pl-3 text-sm font-semibold text-gray-900 select-none">
					<span class="mr-3 block h-4 w-1 rounded-sm bg-orange-600"></span>

					{item.header}
				</div>
			{:else}
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
						<ul class="border-base-content/30 relative ms-9 mt-1 space-y-0.5 border-l ps-0">
							{#each item.children as subItem}
								{@const isActiveSub = page === subItem.id}
								<li>
									<a
										href={subItem.href}
										class={[
											'-ms-px block rounded-l-none rounded-r-lg border-l-2 py-1.5 pl-4 text-sm transition-all duration-200',
											isActiveSub
												? 'border-primary bg-primary/10 text-primary font-bold'
												: 'text-base-content/60 hover:text-base-content hover:border-base-content/30 border-transparent',
										]}>
										{subItem.label}
									</a>
								</li>
							{/each}
						</ul>
					{/if}
				</li>
			{/if}
		{/each}
	{/each}
</ul>
