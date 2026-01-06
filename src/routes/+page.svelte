<script lang="ts">
	import { ChevronRight, CurrencyDollar, Help, Product, Search } from 'carbon-icons-svelte';
	import Footer from '$lib/Footer.svelte';
	import { info } from './(app)/learn/data_learn';

	let pageName = $state('Apptitude');

	interface Topics {
		name: string;
		slug: string;
		intro: string;
		topics: string[];
	}

	const topics: Topics[] = [
		{ name: 'Computing', slug: 'basics', intro: '', topics: [] },
		{ name: 'Internet', slug: 'basics-web', intro: '', topics: [] },
		{ name: 'Workplace Apps', slug: 'apps', intro: '', topics: [] },
		{ name: 'Central Tools', slug: 'wog', intro: '', topics: [] },
		{ name: 'UX', slug: 'ux', intro: '', topics: [] },
		{ name: 'Products', slug: 'products', intro: '', topics: [] },
		{ name: 'Methodology', slug: 'methods', intro: '', topics: [] },
		{ name: 'Data', slug: 'data', intro: '', topics: [] },
		{ name: 'AI', slug: 'ai', intro: '', topics: [] },
		{ name: 'Web Dev', slug: 'technical', intro: '', topics: [] },
	];

	for (const topic of topics) {
		for (const section of info) {
			if (topic.slug === section.slug) {
				topic.topics = section.topics;
				topic.intro = section.intro;
			}
		}
	}
</script>

<svelte:head>
	<title>{pageName}</title>
</svelte:head>

<div class="relative min-h-[75dvh] w-full overflow-hidden" data-pagefind-ignore>
	<section
		class="relative mx-auto grid h-full min-h-[75dvh] w-full max-w-(--breakpoint-2xl) items-center gap-12 px-6 py-24 lg:grid-cols-2">
		<div class="flex flex-col items-start gap-6">
			<h1 class="text-base-content text-4xl leading-tight font-bold tracking-tight lg:text-5xl">
				Building technical intuition.
			</h1>
			<p class="text-base-content/70 max-w-xl text-lg leading-relaxed">
				I'm Zixian. Apptitude is my personal collection of situations, mental models, and notes on
				software in Govt. Written for people who make decisions about tech.
			</p>

			<div class="mt-4 flex flex-wrap gap-4">
				<a
					href="/learn"
					class="btn btn-primary btn-lg rounded-full border-none px-8 transition-all hover:-translate-y-0.5">
					Browse the Docs
				</a>
				<a href="/guides" class="btn btn-primary btn-soft btn-lg rounded-full">Zixian's Takes</a>
			</div>
		</div>

		<div class="relative hidden h-120 lg:block">
			<a
				href="/learn/basics-web"
				class="border-secondary/15 bg-base-card absolute top-8 left-0 w-72 -rotate-6 rounded-2xl border p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:rotate-0 hover:shadow-xl">
				<p class="text-secondary text-xs font-medium tracking-wide uppercase">Concept</p>
				<h3 class="text-base-content mt-2 text-lg font-bold">What's an API?</h3>
				<p class="text-base-content/60 mt-2 text-sm leading-relaxed">
					Think of it as a waiter taking your order to the kitchen. You don't need to know how the
					kitchen works...
				</p>
				<div class="mt-4 flex gap-2">
					<span class="bg-secondary/10 text-secondary rounded-full px-2 py-1 text-xs"
						>Definition</span>
				</div>
			</a>

			<a
				href="/learn/data"
				class="border-accent/20 bg-base-card absolute top-32 left-24 z-1 w-72 rotate-3 rounded-2xl border p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:rotate-0 hover:shadow-2xl">
				<p class="text-xs font-medium tracking-wide text-rose-500 uppercase">Case Study</p>
				<h3 class="text-base-content mt-2 text-lg font-bold">Databases vs Spreadsheets</h3>
				<p class="text-base-content/60 mt-2 text-sm leading-relaxed">
					Excel is great until you have 50,000 rows and three people editing at once. Here's when
					you need something else...
				</p>
				<div class="mt-4 flex gap-2">
					<span class="rounded-full bg-rose-100 px-2 py-1 text-xs text-rose-600">Comparison</span>
				</div>
			</a>

			<a
				href="/guides/cost"
				class="bg-base-card border-primary/20 absolute top-56 left-8 z-2 w-72 -rotate-2 rounded-2xl border p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:rotate-0 hover:shadow-2xl">
				<p class="text-xs font-medium tracking-wide text-amber-600 uppercase">My Take</p>
				<h3 class="text-base-content mt-2 text-lg font-bold">Why does this cost so much?</h3>
				<p class="text-base-content/60 mt-2 text-sm leading-relaxed">
					A framework for understanding software estimates without getting lost in technical
					jargon...
				</p>
				<div class="mt-4 flex gap-2">
					<span class="rounded-full bg-amber-100 px-2 py-1 text-xs text-amber-700">Strategy</span>
				</div>
			</a>
		</div>
	</section>
</div>

<section class="mx-auto max-w-(--breakpoint-2xl) px-6 py-20" data-pagefind-ignore>
	<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
		<div class="rounded-2xl border border-orange-200/60 bg-white p-8 shadow-sm">
			<div class="mb-6">
				<p class="text-primary text-sm font-medium tracking-wide uppercase">The Knowledge Base</p>
				<h2 class="text-base-content mt-2 text-2xl font-bold">How things actually work</h2>
				<p class="text-base-content/70 mt-2">
					A reference library of technical concepts, stripped of jargon and explained with plain
					English and clear diagrams.
				</p>
			</div>

			<div class="flex flex-wrap gap-2">
				{#each topics as topic}
					<a
						href="/learn/{topic.slug}"
						class="btn btn-primary btn-soft rounded-full px-4 py-2 transition-colors">
						{topic.name}
					</a>
				{/each}
			</div>

			<a
				href="/learn"
				class="text-primary mt-8 inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3">
				Browse full list
				<ChevronRight class="h-4 w-4" />
			</a>
		</div>

		<div class="rounded-2xl border border-rose-200/60 bg-white p-8 shadow-sm">
			<div class="mb-6">
				<p class="text-secondary text-sm font-medium tracking-wide uppercase">The Playbook</p>
				<h2 class="text-base-content mt-2 text-2xl font-bold">Thinking through decisions</h2>
				<p class="text-base-content/70 mt-2">
					Opinionated frameworks for product strategy, scoping, and stakeholder management. This is
					how I approach the work.
				</p>
			</div>

			<div class="grid grid-cols-2 gap-2">
				<a
					href="/guides/product-plan"
					class="border-secondary/20 bg-secondary/3 text-secondary flex items-center justify-between rounded-lg border p-3 text-sm font-medium transition-colors hover:border-rose-300 hover:bg-rose-50 hover:text-rose-600">
					<div class="flex items-center gap-4"><Product /><span>Product Strategy</span></div>
					<ChevronRight class="text-secondary-content h-4 w-4" />
				</a>
				<a
					href="/guides/problems"
					class="border-secondary/20 bg-secondary/3 text-secondary flex items-center justify-between rounded-lg border p-3 text-sm font-medium transition-colors hover:border-rose-300 hover:bg-rose-50 hover:text-rose-600">
					<div class="flex items-center gap-4"><Help /><span>Problem Solving</span></div>
					<ChevronRight class="text-secondary-content h-4 w-4" />
				</a>
				<a
					href="/guides/cost"
					class="border-secondary/20 bg-secondary/3 text-secondary flex items-center justify-between rounded-lg border p-3 text-sm font-medium transition-colors hover:border-rose-300 hover:bg-rose-50 hover:text-rose-600">
					<div class="flex items-center gap-4"><CurrencyDollar /><span>Cost Management</span></div>
					<ChevronRight class="text-secondary-content h-4 w-4" />
				</a>
				<a
					href="/guides/research"
					class="border-secondary/20 bg-secondary/3 text-secondary flex items-center justify-between rounded-lg border p-3 text-sm font-medium transition-colors hover:border-rose-300 hover:bg-rose-50 hover:text-rose-600">
					<div class="flex items-center gap-4"><Search /><span>User Research</span></div>
					<ChevronRight class="text-secondary-content h-4 w-4" />
				</a>
			</div>

			<a
				href="/guides"
				class="text-secondary-content mt-8 inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3">
				Read all notes
				<ChevronRight class="h-4 w-4" />
			</a>
		</div>
	</div>
</section>

<section
	class="mx-auto flex max-w-(--breakpoint-2xl) flex-col items-center justify-center gap-4 px-6 py-12 text-center sm:flex-row"
	data-pagefind-ignore>
	<div class="space-y-2 text-center">
		<p class="text-base-content/75 text-base font-medium italic">
			For everyone who's ever nodded along pretending to understand the tech stuff.
		</p>
		<a href="/about" class="text-primary inline-block text-sm font-medium hover:underline">
			Why this exists →
		</a>
	</div>
</section>

<Footer />
