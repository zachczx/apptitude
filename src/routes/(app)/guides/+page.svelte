<script lang="ts">
	import Breadcrumbs from '$lib/Breadcrumbs.svelte';
	import { guides } from './data_guides';
	import TablerHelpCircleFilled from '$lib/assets/svg/TablerHelpCircleFilled.svelte';
	import safeKeyboard from '$lib/assets/safe-keyboard.webp?enhanced&w=200';
	import piggyBank from '$lib/assets/piggy-bank.webp?enhanced&w=200';
	import product from '$lib/assets/product.webp?enhanced&w=200';
	import problem from '$lib/assets/problem.webp?enhanced&w=200';
	import magnifyingGlass from '$lib/assets/magnifying-glass.webp?enhanced&w=200';
	import ContentWrapper from '$lib/ContentWrapper.svelte';

	let { data } = $props();
	let currentSection: any = $state();
	let path: any = $derived(data.url.split('/'));
	let category: any = $derived(path[1]);
	let page: any = $derived(path[2]);
	let textCurrent: string = $state('');
	let textMiddle: string = 'Guides';

	const subtitle = `This section offers practical guides to equip you with an awareness of "what ought to be"
					and "what can be", and then use those to question why your products/projects can't be the
					same - your PM, bosses, teammates, vendors.`;
</script>

<ContentWrapper
	urlSelf={data.url}
	{page}
	{textMiddle}
	{category}
	{currentSection}
	title="Practical Guides"
	{subtitle}>
	<section>
		<div class="group card bg-base-100 mb-12 border border-gray-700 shadow-xl">
			<div class="card-body grid lg:grid-cols-2">
				<div class="lg:px-8">
					<h2 class="group-hover:text-primary text-2xl font-bold lg:text-7xl">
						<a href="/guides/product-plan">Product</a>
					</h2>
					<p>
						<i>Feel like you're shipping useless features?</i>
					</p>
					<p class="pt-8 pb-4">
						Think about product-market fit, demand for your product, go-to market, success metrics.
					</p>
					<ul class="ms-8 list-disc space-y-2">
						<li class="hover:text-primary underline">
							<a href="/guides/product-plan">Product Plan 101</a>
						</li>
						<li class="hover:text-primary underline">
							<a href="/guides/product">Product Quick Reference</a>
						</li>
					</ul>
				</div>
				<div class="w-full rounded-2xl">
					<div class="flex justify-center">
						<enhanced:img src={product} alt="$$$" class="rounded-2xl" />
					</div>
				</div>
			</div>
		</div>
		<div class="group card bg-base-100 mb-12 w-full border border-gray-700 shadow-xl">
			<a href="/guides/problems"
				><div class="card-body grid lg:grid-cols-2">
					<div class="self-center lg:px-8">
						<h2 class="group-hover:text-primary text-2xl font-bold lg:text-7xl">
							Problem Statements
						</h2>
						<p>
							<i>Doubt your product works well? Never heard from your users?</i>
						</p>
						<p class="pt-8">
							Investigate issues with identifying the problem you're solving, who you're trying to
							help, user pain points.
						</p>
					</div>
					<div class="w-full rounded-2xl lg:order-first">
						<div class="flex justify-center">
							<enhanced:img src={problem} alt="$$$" class="rounded-2xl" />
						</div>
					</div>
				</div>
			</a>
		</div>
		<div class="mb-12">
			<a href="/guides/research">
				<div class="group card bg-base-100 h-auto w-full border border-gray-700 shadow-xl">
					<div class="card-body grid lg:grid-cols-2">
						<div class="lg:px-8">
							<h2 class="group-hover:text-primary text-2xl font-bold lg:text-7xl">Research</h2>
							<p>
								<i
									>Skipping user research is like designing a car without realizing humans need to
									sit in it.</i>
							</p>
							<p class="pt-8">Do your own research.</p>
						</div>
						<div class="w-full rounded-2xl">
							<div class="flex justify-center">
								<enhanced:img
									src={magnifyingGlass}
									alt="User research: Avoiding those awkward 'Hey, does anyone like our product?' moments."
									class="rounded-2xl" />
							</div>
						</div>
					</div>
				</div>
			</a>
		</div>
		<a href="/guides/cost">
			<div
				class="group card bg-base-100 mb-12 grid w-full overflow-hidden border border-gray-700 shadow-xl">
				<div class="card-body grid lg:grid-cols-2">
					<div class="mb-4 lg:order-last lg:px-8">
						<h2 class="group-hover:text-primary text-2xl font-bold lg:text-7xl">Cost</h2>
						<p>
							<i>We're not sure what we're building, but we know we'll need a bigger budget?</i>
						</p>
						<p class="pt-8">
							Vague requirements over hundreds of pages a spec sheet, cost evaluations based on
							inflation figures, vendors quoting an arm and a leg to change a hero banner.
						</p>
					</div>
					<div class="w-full rounded-2xl">
						<div class="flex justify-center">
							<enhanced:img src={piggyBank} alt="$$$" class="rounded-2xl" />
						</div>
					</div>
				</div>
			</div>
		</a>
		<a href="/guides/security"
			><div class="mb-12">
				<div class="group card bg-base-100 h-auto w-full border border-gray-700 shadow-xl">
					<div class="card-body grid lg:grid-cols-2">
						<div class="lg:px-8">
							<h2 class="group-hover:text-primary text-2xl font-bold lg:text-7xl">Security</h2>
							<p>
								<i>Cyber security so tight, even the 1s and 0s can't escape</i>
							</p>
							<p class="pt-8">
								Ever wondered why TRAs are so awfully tedious and yet mean nothing? Frustrated with
								the ticking checkbox nature to comply with security policies?
							</p>
						</div>
						<div class="w-full rounded-2xl">
							<div class="flex justify-center">
								<enhanced:img
									src={safeKeyboard}
									alt="Put your keyboard in the safe - best in class for security~!"
									class="rounded-2xl" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</a>
	</section>
</ContentWrapper>
