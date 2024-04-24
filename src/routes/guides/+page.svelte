<script>
	import Breadcrumbs from '$lib/Breadcrumbs.svelte';
	import { guides } from './data_guides';
	import TablerHelpCircleFilled from '$lib/assets/svg/TablerHelpCircleFilled.svelte';
	import safeKeyboard from '$lib/assets/safe-keyboard.webp?enhanced&w=300';
	import piggyBank from '$lib/assets/piggy-bank.webp?enhanced&w=300';
	import product from '$lib/assets/product.webp?enhanced&w=300';
	import problem from '$lib/assets/problem.webp?enhanced&w=500';

	let showMore = $state(false);
</script>

<Breadcrumbs textCurrent="Guides" />
<div class="mb-10 text-center">
	<h1
		class="inline-block bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 text-transparent">
		Guides to Cache Up!
	</h1>
	<div class="px-3">
		<i>Rebooting your obsolescence - migrating from Windows XP to actually current tech skills.</i>
	</div>
</div>
<div class="mb-10 space-y-5 px-3 lg:px-20">
	<div class="collapse collapse-arrow mb-10 bg-base-300">
		<input type="checkbox" name="my-accordion-2" bind:checked={showMore} />
		<div class="collapse-title">
			<h2><TablerHelpCircleFilled class="mb-1 me-3 inline" />What's this?</h2>
		</div>
		<div class="collapse-content space-y-5 bg-base-300 px-5">
			<h3 class="border-t-2 border-t-gray-700 pt-5">About</h3>
			<p class="text-xl">
				This section offers a series of quickstart guides to "cache up" (thanks to Gemini for the
				clever pun), complete with definitions, probing questions, things to watch out for, and
				recommended strategies.
			</p>
			<p class="pb-3 text-xl">
				Use these insights to enrich your discussions and decisions with stakeholders, be it
				approval forums, meetings, daily standups, strategy brainstorming sessions, and even routine
				email proposals. My goal here is to give you the cheatsheets to give you the bare minimum
				heuristic tools to critique and make the products under your care better.
			</p>
			<h3>Start with Something</h3>
			<p class="text-xl">
				Go with the issue below that gives you the most frustration in your work. And if you can't
				decide, start with <b>Problem Statements</b>.
			</p>
		</div>
	</div>
</div>
<div class="flex justify-center">
	<div class="grid grid-cols-1 gap-3 px-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-7 lg:px-20">
		<div
			class="group card max-h-[50rem] w-full overflow-hidden border border-gray-700 bg-base-300 shadow-xl hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700 lg:col-span-1 lg:row-span-2">
			<a href="/guides/problems"
				><div class="card-body grid">
					<div class="mb-10 space-y-5 self-center lg:mb-20">
						<h1 class="text-primary">Problem Statements</h1>

						<p>
							<i>Doubt your product works well? Never heard from your users?</i>
						</p>
						<p>
							Investigate issues with identifying the problem you're solving, who you're trying to
							help, user pain points.
						</p>
					</div>
					<!--
					<div class="group relative flex w-full justify-center self-center">
						<div
							class="duration-400 absolute h-96 w-full translate-x-3 translate-y-12 -rotate-[6deg] rounded-2xl bg-teal-200 transition ease-in group-hover:translate-y-10 group-hover:-rotate-[8deg]">
						</div>
						<div
							class="box-shadow duration-400 absolute h-96 w-full translate-x-2 translate-y-14 -rotate-[4deg] rounded-2xl bg-pink-200 transition ease-out group-hover:translate-y-12 group-hover:-rotate-[6deg]">
						</div>
						<div
							class="box-shadow absolute h-96 w-full translate-x-1 translate-y-16 -rotate-[2deg] rounded-2xl bg-yellow-200 transition duration-200 ease-out group-hover:translate-y-14 group-hover:-rotate-[4deg]">
						</div>
						<div
							style="background:url({problemStatement}); background-size: contain; background-position: right"
							class="box-shadow absolute h-96 w-full translate-y-20 rounded-2xl transition duration-200 ease-in-out group-hover:translate-y-16">
						</div>
					</div>-->
					<div class="h-[29rem] w-full rounded-2xl bg-base-content">
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
		<div
			class="group card border border-gray-700 bg-base-300 shadow-xl hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700 lg:col-span-2 lg:row-span-1 lg:w-10/12">
			<a href="/guides/product">
				<div class="card-body grid">
					<div class="w-full rounded-2xl bg-base-content">
						<div class="flex justify-end">
							<enhanced:img
								src={product}
								alt="$$$"
								class="rounded-2xl lg:-mb-14 lg:-translate-y-14" />
						</div>
					</div>
					<div class="mt-5 space-y-5">
						<h1 class="text-primary">Product</h1>
						<p><i>Feel like you're shipping useless features?</i></p>
						<p>
							Think about product-market fit, demand for your product, go-to market, success
							metrics.
						</p>
					</div>
				</div>
			</a>
		</div>
		<a href="/guides/cost">
			<div
				class="group card grid w-full overflow-hidden border border-gray-700 bg-base-300 shadow-xl hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700 lg:col-span-1 lg:row-span-1">
				<div class="card-body space-y-5">
					<h1 class="text-primary">Cost</h1>
					<p><i>We're not sure what we're building, but we know we'll need a bigger budget?</i></p>
					<p class="pb-5">
						Vague requirements over hundreds of pages a spec sheet, cost evaluations based on
						inflation figures, vendors quoting an arm and a leg to change a hero banner.
					</p>
					<div class="w-full rounded-2xl bg-base-content">
						<div class="flex">
							<enhanced:img
								src={piggyBank}
								alt="$$$"
								class="rounded-2xl lg:-mb-14 lg:-translate-y-14" />
						</div>
					</div>
				</div>
			</div></a>
		<div>
			<a href="/guides/security">
				<div
					class="group card h-auto w-full border border-gray-700 bg-base-300 shadow-xl hover:bg-gradient-to-tr hover:from-base-300 hover:via-base-200 hover:to-gray-700 lg:col-span-1 lg:row-span-2">
					<div class="card-body space-y-5">
						<div class="w-full rounded-2xl bg-base-content">
							<div class="flex justify-end">
								<enhanced:img
									src={safeKeyboard}
									alt="Put your keyboard in the safe - best in class for security~!"
									class="rounded-2xl lg:-mb-14 lg:-translate-y-14" />
							</div>
						</div>
						<h1 class="mb-3 text-primary">Security</h1>

						<p class="">
							<i>Cyber security so tight, even the 1s and 0s can't escape</i>
						</p>
						<p class="">
							Ever wondered why TRAs are so awfully tedious and yet mean nothing? Frustrated with
							the ticking checkbox nature to comply with security policies?
						</p>
					</div>
				</div>
			</a>
		</div>
	</div>
</div>

<style>
	.box-shadow {
		box-shadow: 5px -4px 4px 0 rgba(0, 0, 0, 0.4);
	}
</style>
