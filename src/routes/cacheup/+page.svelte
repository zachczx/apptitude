<script>
	import Breadcrumbs from '$lib/Breadcrumbs.svelte';
	import { cacheup } from './data_cacheup';

	const gradients = [
		'bg-gradient-to-t from-orange-300 via-orange-700 to-pink-700',
		'bg-gradient-to-t from-[#67C6E3] via-[#378CE7] to-[#5356FF]',
		'bg-gradient-to-t from-[#87A922] via-[#50623A] to-[#114232]',
		'bg-gradient-to-t from-[#FFEE63] from-2% via-[#F49D1A] to-[#C58940]'
	];
</script>

<svelte:head>
	<title>Cache Up!</title>
</svelte:head>
<Breadcrumbs textCurrent="Cache Up!" />
<div class="mb-10 text-center lg:mb-20">
	<h1
		class="inline-block bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 text-transparent"
	>
		Cache Up!
	</h1>
	<div>
		<i>Rebooting your obsolescence - migrating from Windows XP to actually current tech skills.</i>
	</div>
</div>

<div class="grid grid-cols-1 justify-items-center gap-x-8 gap-y-8 px-5 lg:grid-cols-2 lg:px-20">
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
			class="group card grid w-full content-center bg-base-300 text-primary shadow-xl hover:bg-gradient-to-r hover:from-primary hover:to-warning hover:text-slate-900 focus:outline-none focus:ring focus:ring-lime-400 lg:h-96"
		>
			<div class="card-body text-center">
				<h1 class="mb-3">{item.name}</h1>
				<span class="text-lg text-slate-300 group-hover:text-slate-700"><i>{item.tagline}</i></span>
			</div>
		</a>
	{/each}
</div>
