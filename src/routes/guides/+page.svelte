<script lang="ts">
	import Breadcrumbs from '$lib/Breadcrumbs.svelte';
	import { guides } from './data_guides';
	import TablerHelpCircleFilled from '$lib/assets/svg/TablerHelpCircleFilled.svelte';
	import safeKeyboard from '$lib/assets/safe-keyboard.webp?enhanced&w=300';
	import piggyBank from '$lib/assets/piggy-bank.webp?enhanced&w=300';
	import product from '$lib/assets/product.webp?enhanced&w=300';
	import problem from '$lib/assets/problem.webp?enhanced&w=500';
	import magnifyingGlass from '$lib/assets/magnifying-glass.webp?enhanced&w=400';
	import ContentWrapper from '$lib/ContentWrapper.svelte';

	let { data } = $props();
	let currentSection: any = $state();
	let path: any = $derived(data.url.split('/'));
	let category: any = $derived(path[1]);
	let page: any = $derived(path[2]);
	let textMiddle: string = 'Guides';
</script>

<ContentWrapper urlSelf={data.url} {page} {textMiddle} {category} {currentSection}>
	<section class="mb-12 space-y-12">
		<div>
			<h1
				class="mb-4 inline-block bg-gradient-to-r from-emerald-200 via-lime-200 to-teal-300 bg-clip-text text-transparent">
				Guides to Cache Up!
			</h1>
			<p class="text-sm">
				<i
					>Rebooting your obsolescence - migrating from Windows XP to actually current tech skills.</i>
			</p>
		</div>
		<p>
			This section offers a series of quickstart guides to catch up. The intent of the content here
			is to equip you with an awareness of "what ought to be" and "what can be", and then use those
			to question why your products/projects can't be the same - your PM, bosses, teammates,
			vendors.
		</p>
	</section>
	<section>
		<div
			class="group card mb-12 border border-gray-700 bg-neutral shadow-xl hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700">
			<div class="card-body grid lg:grid-cols-2">
				<div class="mb-8 space-y-5 lg:px-8">
					<h2>
						<a href="/guides/product-plan">Product</a>
					</h2>
					<p>
						<i>Feel like you're shipping useless features?</i>
					</p>
					<p>
						Think about product-market fit, demand for your product, go-to market, success metrics.
					</p>
					<ul class="ms-8 list-disc space-y-2">
						<li class="text-lg underline hover:text-primary">
							<a href="/guides/product-plan">Product Plan 101</a>
						</li>
						<li class="text-lg underline hover:text-primary">
							<a href="/guides/product">Product Quick Reference</a>
						</li>
					</ul>
				</div>
				<div class="w-full rounded-2xl bg-base-content">
					<div class="flex justify-end">
						<enhanced:img
							src={product}
							alt="$$$"
							class="rounded-2xl lg:-mb-14 lg:-translate-y-14" />
					</div>
				</div>
			</div>
		</div>
		<div
			class="group card mb-12 w-full border border-gray-700 bg-neutral shadow-xl hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700">
			<a href="/guides/problems"
				><div class="card-body grid lg:grid-cols-2">
					<div class="mb-8 self-center lg:mb-20 lg:px-8">
						<h2>Problem Statements</h2>

						<p>
							<i>Doubt your product works well? Never heard from your users?</i>
						</p>
						<p>
							Investigate issues with identifying the problem you're solving, who you're trying to
							help, user pain points.
						</p>
					</div>
					<div class="w-full rounded-2xl bg-base-content">
						<div class="flex justify-center">
							<enhanced:img
								src={problem}
								alt="$$$"
								class="rounded-2xl lg:-mb-14 lg:-translate-y-14" />
						</div>
					</div>
				</div>
			</a>
		</div>
		<div class="mb-12">
			<a href="/guides/research">
				<div
					class="group card h-auto w-full border border-gray-700 bg-neutral shadow-xl hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700">
					<div class="card-body grid lg:grid-cols-2">
						<div class="order-first mb-8 lg:order-last lg:px-8">
							<h2>Research</h2>

							<p class="">
								<i
									>Skipping user research is like designing a car without realizing humans need to
									sit in it.</i>
							</p>
						</div>
						<div class="w-full rounded-2xl bg-base-content">
							<div class="flex justify-end">
								<enhanced:img
									src={magnifyingGlass}
									alt="User research: Avoiding those awkward 'Hey, does anyone like our product?' moments."
									class="rounded-2xl lg:-mb-14 lg:-translate-y-20 lg:translate-x-5" />
							</div>
						</div>
					</div>
				</div>
			</a>
		</div>
		<a href="/guides/cost">
			<div
				class="group card mb-12 grid w-full overflow-hidden border border-gray-700 bg-neutral shadow-xl hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700">
				<div class="card-body grid lg:grid-cols-2">
					<div class="mb-4 lg:px-8">
						<h2>Cost</h2>
						<p>
							<i>We're not sure what we're building, but we know we'll need a bigger budget?</i>
						</p>
						<p class="pb-5">
							Vague requirements over hundreds of pages a spec sheet, cost evaluations based on
							inflation figures, vendors quoting an arm and a leg to change a hero banner.
						</p>
					</div>
					<div class="w-full rounded-2xl bg-base-content">
						<div class="flex">
							<enhanced:img
								src={piggyBank}
								alt="$$$"
								class="rounded-2xl lg:-mb-14 lg:-translate-y-14" />
						</div>
					</div>
				</div>
			</div>
		</a>
		<a href="/guides/security"
			><div class="mb-12">
				<div
					class="group card h-auto w-full border border-gray-700 bg-neutral shadow-xl hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700">
					<div class="card-body grid lg:grid-cols-2">
						<div class="mb-8 lg:px-8">
							<h2>Security</h2>
							<p>
								<i>Cyber security so tight, even the 1s and 0s can't escape</i>
							</p>
							<p>
								Ever wondered why TRAs are so awfully tedious and yet mean nothing? Frustrated with
								the ticking checkbox nature to comply with security policies?
							</p>
						</div>
						<div class="w-full rounded-2xl bg-base-content">
							<div class="flex justify-end">
								<enhanced:img
									src={safeKeyboard}
									alt="Put your keyboard in the safe - best in class for security~!"
									class="rounded-2xl lg:-mb-14 lg:-translate-y-14" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</a>
	</section>
</ContentWrapper>

<style>
	.box-shadow {
		box-shadow: 5px -4px 4px 0 rgba(0, 0, 0, 0.4);
	}
</style>
