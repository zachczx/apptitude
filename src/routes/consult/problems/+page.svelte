<script>
	import WIP from '$lib/WIP.svelte';
	import { retort } from '../data.js';
	import chevronDown from '$lib/assets/svg/chevron-down.svg';
	import { onMount } from 'svelte';


	let checkAll = $state(false)
	$effect(() => {
		console.log(checkAll)
	})

		let seeMoreVar = $state(false)

	function seeMore() {
		seeMoreVar = !seeMoreVar
		console.log(seeMoreVar)
	}

</script>

<div class="mb-10 text-center lg:mb-20">
	<h1
		class="inline-block bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 text-transparent"
	>
		{retort[0].name}
	</h1>
	<p>
		<a href="https://www.nngroup.com/articles/first-rule-of-usability-dont-listen-to-users/"
			><i>"Pay attention to what users do, not what they say." - Jakob Nielsen</i></a
		>
	</p>
	<p>
		<i
			>"Important truths can be uncomfortable, they can be awkward, they can be exhausting... Any
			high performing organization has to have mechanisms and a culture that supports truth
			telling." - Jeff Bezos</i
		>
	</p>
</div>

<div class="grid grid-cols-1 justify-items-center gap-x-8 gap-y-8 px-5 lg:px-20 xl:grid-cols-2">

	<div class="justify-self-end xl:col-span-2"><input type="checkbox" class="toggle toggle-sm" name="expandAll" id="expand-all"><label for="expand-all" class="align-top ms-3 me-3">Expand all sections</label></div>

	<div class="collapse bg-base-200 xl:col-span-2">
		<input type="checkbox" class="peer" /> 
		<div class="collapse-title bg-base-300 peer-checked:bg-slate-900 flex justify-between text-center">
			<div class="self-center"><img src={chevronDown} alt="Arrow down"></div>
			<h2>Step 0: Definitions</h2>
			<div class="self-center"><img src={chevronDown} alt="Arrow down"></div>
		</div>
		<div class="collapse-content bg-gradient-to-b from-slate-900 to-slate-800"> 
			<div class="card w-full bg-base-300 px-5 shadow-xl xl:col-span-1">
				<div class="card-body">
					<ol class="list-decimal">
						{#each retort[0].definitions as definition}
							<li class="text-lg">{definition}</li>
						{/each}
					</ol>
				</div>
			</div>
		</div>
	  </div>
	
	  <div class="collapse bg-base-200">
		<input type="checkbox" class="peer" checked="true" /> 
		<div class="collapse-title bg-base-300 peer-checked:bg-pink-800 flex justify-between text-center">
			<div class="self-center"><img src={chevronDown} alt="Arrow down"></div>
			<h2>Step 1: Goals</h2>
			<div class="self-center"><img src={chevronDown} alt="Arrow down"></div>
		</div>
		<div class="collapse-content bg-gradient-to-b from-pink-800 to-rose-700"> 

			<div class="card w-full bg-base-300 px-5 shadow-xl">
				<div class="card-body">
					<ol class="list-decimal">
						{#each retort[0].goals as goal}
							<li class="text-lg">{goal}</li>
						{/each}
					</ol>
				</div>
			</div>

		</div>
	  </div>


	  <div class="collapse bg-base-200">
		<input type="checkbox" class="peer" checked="true" /> 
		<div class="collapse-title bg-base-300 peer-checked:bg-pink-800 flex justify-between text-center">
			<div class="self-center"><img src={chevronDown} alt="Arrow down"></div>
			<h2>Step 2: Questions to answer</h2>
			<div class="self-center"><img src={chevronDown} alt="Arrow down"></div>
		</div>
		<div class="collapse-content bg-gradient-to-b from-pink-800 to-rose-700"> 
	<div class="card w-full bg-base-300  px-5 shadow-xl">
		<div class="card-body">
			<ol class="list-decimal">
				{#each retort[0].questions as question, index}
					{#if index < 5}
					<li class="text-lg">{question}</li>
					{:else if index >= 5 && seeMoreVar === true}
					<li class="text-lg">{question}</li>
					{/if}
				{/each}
			</ol>
			<button onclick={seeMore} class="btn btn-outline btn-sm mt-5">{#if seeMoreVar === true}See more{:else}See more{/if}</button>
		</div>
	</div>
	</div>
	</div>


	  <div class="collapse bg-base-200 xl:col-span-2">
		<input type="checkbox" class="peer" checked="true" /> 
		<div class="collapse-title bg-base-300 peer-checked:bg-red-800 flex justify-between text-center">
			<div class="self-center"><img src={chevronDown} alt="Arrow down"></div>
			<h2>Step 3: Dealbreakers - kill switch conditions</h2>
			<div class="self-center"><img src={chevronDown} alt="Arrow down"></div>
		</div>
		<div class="collapse-content bg-gradient-to-b from-red-800 to-orange-700"> 
	<div
		class="card w-full bg-base-300 px-5 shadow-xl xl:col-span-2"
	>
		<div class="card-body">
			<ol class="list-decimal">
				{#each retort[0].dealbreakers as dealbreaker}
					<li class="text-lg">{dealbreaker}</li>
				{/each}
			</ol>
		</div>
	</div>
	</div>
	</div>

	<div class="collapse bg-base-200">
		<input type="checkbox" class="peer" /> 
		<div class="collapse-title bg-base-300 peer-checked:bg-slate-900 flex justify-between text-center">
			<div class="self-center"><img src={chevronDown} alt="Arrow down"></div>
			<h2>Step 4: Solutions and the way ahead</h2>
			<div class="self-center"><img src={chevronDown} alt="Arrow down"></div>
		</div>
		<div class="collapse-content bg-gradient-to-b from-slate-900 to-slate-800"> 
	<div class="card w-full bg-base-300 px-5 shadow-xl">
		<div class="card-body">
			<ol class="list-decimal">
				{#each retort[0].solutions as solution}
					<li class="text-lg">{solution}</li>
				{/each}
			</ol>
		</div>
	</div>
	</div>
	</div>


	<div class="collapse bg-base-200">
		<input type="checkbox" class="peer" /> 
		<div class="collapse-title bg-base-300 peer-checked:bg-slate-900 flex justify-between items-center">
			<div class="self-center"><img src={chevronDown} alt="Arrow down"></div>
				<h2 class="">Step 5: Suggestions</h2>
			<div class="self-center"><img src={chevronDown} alt="Arrow down"></div>
		</div>
		<div class="collapse-content bg-gradient-to-b from-slate-900 to-slate-800"> 
	<div class="card w-full bg-base-300 px-5 shadow-xl">
		<div class="card-body">
			<ol class="list-decimal">
				{#each retort[0].suggestions as suggestion}
					<li class="text-lg">{suggestion}</li>
				{/each}
			</ol>
		</div>
	</div>
	</div>
	</div>
</div>
