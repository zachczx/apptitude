<script>
	import Breadcrumbs from '$lib/Breadcrumbs.svelte';
	import { cacheup } from './data_cacheup';
	import TablerHelpCircleFilled from '$lib/assets/svg/TablerHelpCircleFilled.svelte';
	let showMore = $state(true);

	const gradients = [
		'bg-gradient-to-t from-orange-300 via-orange-700 to-pink-700',
		'bg-gradient-to-t from-[#67C6E3] via-[#378CE7] to-[#5356FF]',
		'bg-gradient-to-t from-[#87A922] via-[#50623A] to-[#114232]',
		'bg-gradient-to-t from-[#FFEE63] from-2% via-[#F49D1A] to-[#C58940]',
	];
</script>

<Breadcrumbs textCurrent="Cache Up!" />
<div class="mb-10 text-center">
	<h1
		class="inline-block bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 text-transparent">
		Cache Up!
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
				This section offers a series of quickstart guides, complete with definitions, probing
				questions, things to watch out for, and recommended strategies.
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

<div class="grid grid-cols-1 justify-items-center gap-x-8 gap-y-8 px-3 lg:grid-cols-2 lg:px-20">
	{#each cacheup as item, i}
		<!--	
	<div
			class="card grid h-96 w-full content-center {i <= gradients.length
				? gradients[i]
				: gradients[0]} shadow-xl hover:from-gray-600 hover:to-slate-900"
		>
		-->
		<a
			href="/cacheup/{item.slug}"
			class="group card grid w-full content-center bg-base-300 text-primary shadow-xl transition duration-500 ease-in-out hover:bg-gray-700 focus:outline-none focus:ring focus:ring-lime-400 lg:h-96">
			<div class="card-body text-center">
				<h1 class="mb-3">{item.name}</h1>
				<span class="text-lg text-base-content"><i>{item.tagline}</i></span>
			</div>
		</a>
	{/each}
</div>
