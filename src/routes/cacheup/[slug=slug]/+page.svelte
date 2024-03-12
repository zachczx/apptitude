<script>
	import userCircle from '$lib/assets/svg/user-circle.svg';
	import chevronDown from '$lib/assets/svg/chevron-down.svg';
	import { page } from '$app/stores';
	const slug = $page.params.slug;
	let { data } = $props();

	let checkAll = $state(false);

	let seeMoreVar = $state(false);

	function seeMore() {
		seeMoreVar = !seeMoreVar;
		console.log(seeMoreVar);
	}
</script>

<div class="mb-10 text-center lg:mb-20">
	<h1
		class="inline-block bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 text-transparent"
	>
		{data.post.name}
	</h1>
	<div class="grid-cols-auto grid place-items-center px-20">
		{#each data.post.bylines as byline, index}
			<div class="chat {index % 2 === 0 ? 'chat-start' : 'chat-end'}">
				<div class="avatar chat-image">
					<div class="w-14 rounded-full">
						<img src={byline.icon ? byline.icon : userCircle} alt="Author" />
					</div>
				</div>
				<div class="chat-bubble text-sm">{byline.text}</div>
			</div>
		{/each}
	</div>
</div>

<div class="grid grid-cols-1 justify-items-center gap-x-8 gap-y-8 px-5 lg:px-20">
	<div class="collapse bg-base-200">
		<input type="checkbox" class="peer" />
		<div
			class="collapse-title flex justify-between bg-base-300 text-center peer-checked:bg-slate-900"
		>
			<div class="self-center"><img src={chevronDown} alt="Arrow down" /></div>
			<h2 class="flex">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="icon icon-tabler icons-tabler-outline icon-tabler-file-description me-3 inline"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
						d="M14 3v4a1 1 0 0 0 1 1h4"
					/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path
						d="M9 17h6"
					/><path d="M9 13h6" /></svg
				>Definitions
			</h2>
			<div class="self-center"><img src={chevronDown} alt="Arrow down" /></div>
		</div>
		<div class="collapse-content bg-gradient-to-b from-slate-900 to-slate-800">
			<div class="card w-full bg-base-300 px-5 shadow-xl xl:col-span-1">
				<div class="card-body">
					<ol class="list-decimal divide-y-2 divide-slate-600">
						{#each data.post.definitions as definition}
							<li class="rounded text-lg hover:bg-slate-700">{definition}</li>
						{/each}
					</ol>
				</div>
			</div>
		</div>
	</div>

	<div class="collapse bg-base-200">
		<input type="checkbox" class="peer" checked="true" />
		<div
			class="collapse-title flex justify-between bg-base-300 text-center peer-checked:bg-pink-800"
		>
			<div class="self-center"><img src={chevronDown} alt="Arrow down" /></div>
			<h2 class="flex">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="icon icon-tabler icons-tabler-outline icon-tabler-target-arrow me-2 inline"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
						d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
					/><path d="M12 7a5 5 0 1 0 5 5" /><path d="M13 3.055a9 9 0 1 0 7.941 7.945" /><path
						d="M15 6v3h3l3 -3h-3v-3z"
					/><path d="M15 9l-3 3" /></svg
				>Goals
			</h2>
			<div class="self-center"><img src={chevronDown} alt="Arrow down" /></div>
		</div>
		<div class="collapse-content bg-gradient-to-b from-pink-800 to-rose-700">
			<div class="card w-full bg-base-300 px-5 shadow-xl">
				<div class="card-body">
					<ol class="list-decimal divide-y-2 divide-slate-600">
						{#each data.post.goals as goal}
							<li class="rounded text-lg hover:bg-slate-700">{goal}</li>
						{/each}
					</ol>
				</div>
			</div>
		</div>
	</div>

	<div class="collapse bg-base-200">
		<input type="checkbox" class="peer" />
		<div
			class="collapse-title flex justify-between bg-base-300 text-center peer-checked:bg-pink-800"
		>
			<div class="self-center"><img src={chevronDown} alt="Arrow down" /></div>
			<h2 class="flex">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="icon icon-tabler icons-tabler-outline icon-tabler-progress-help me-3 inline"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 16v.01" /><path
						d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"
					/><path d="M10 20.777a8.942 8.942 0 0 1 -2.48 -.969" /><path
						d="M14 3.223a9.003 9.003 0 0 1 0 17.554"
					/><path d="M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592" /><path
						d="M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305"
					/><path d="M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356" /></svg
				>Questions to answer
			</h2>
			<div class="self-center"><img src={chevronDown} alt="Arrow down" /></div>
		</div>
		<div class="collapse-content bg-gradient-to-b from-pink-800 to-rose-700">
			<div class="card w-full bg-base-300 px-5 shadow-xl">
				<div class="card-body">
					<ol class="list-decimal divide-y-2 divide-slate-600">
						{#each data.post.questions as question, index}
							{#if index < 5}
								<li class="rounded text-lg hover:bg-slate-700">{question}</li>
							{:else if index >= 5 && seeMoreVar === true}
								<li class="rounded text-lg hover:bg-slate-700">{question}</li>
							{/if}
						{/each}
					</ol>
					<button onclick={seeMore} class="btn btn-ghost btn-sm mt-5"
						>{seeMoreVar === true ? 'See less' : 'See more'}</button
					>
				</div>
			</div>
		</div>
	</div>

	<div class="collapse bg-base-200">
		<input type="checkbox" class="peer" />
		<div
			class="collapse-title flex justify-between bg-base-300 text-center peer-checked:bg-red-800"
		>
			<div class="self-center"><img src={chevronDown} alt="Arrow down" /></div>
			<h2 class="flex">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="icon icon-tabler icons-tabler-outline icon-tabler-circle-x me-3 inline"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
						d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"
					/><path d="M10 10l4 4m0 -4l-4 4" /></svg
				>Dealbreakers (when things are bad)
			</h2>
			<div class="self-center"><img src={chevronDown} alt="Arrow down" /></div>
		</div>
		<div class="collapse-content bg-gradient-to-b from-red-800 to-orange-700">
			<div class="card w-full bg-base-300 px-5 shadow-xl xl:col-span-2">
				<div class="card-body">
					<ol class="list-decimal divide-y-2 divide-slate-600">
						{#each data.post.dealbreakers as dealbreaker}
							<li class="rounded text-lg hover:bg-slate-700">{dealbreaker}</li>
						{/each}
					</ol>
				</div>
			</div>
		</div>
	</div>

	<div class="collapse bg-base-200">
		<input type="checkbox" class="peer" />
		<div
			class="collapse-title flex justify-between bg-base-300 text-center peer-checked:bg-slate-900"
		>
			<div class="self-center"><img src={chevronDown} alt="Arrow down" /></div>
			<h2 class="flex">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="icon icon-tabler icons-tabler-outline icon-tabler-map-star me-3 inline"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
						d="M9.718 17.359l-.718 -.359l-6 3v-13l6 -3l6 3l6 -3v7.5"
					/><path d="M9 4v13" /><path d="M15 7v4" /><path
						d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z"
					/></svg
				>Solutions and the way ahead
			</h2>
			<div class="self-center"><img src={chevronDown} alt="Arrow down" /></div>
		</div>
		<div class="collapse-content bg-gradient-to-b from-slate-900 to-slate-800">
			<div class="card w-full bg-base-300 px-5 shadow-xl">
				<div class="card-body">
					<ol class="list-decimal divide-y-2 divide-slate-600">
						{#each data.post.solutions as solution}
							<li class="rounded text-lg hover:bg-slate-700">{solution}</li>
						{/each}
					</ol>
				</div>
			</div>
		</div>
	</div>

	<div class="collapse bg-base-200">
		<input type="checkbox" class="peer" />
		<div
			class="collapse-title flex items-center justify-between bg-base-300 peer-checked:bg-slate-900"
		>
			<div class="self-center"><img src={chevronDown} alt="Arrow down" /></div>
			<h2 class="flex">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="icon icon-tabler icons-tabler-outline icon-tabler-message-2 me-3 inline"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 9h8" /><path
						d="M8 13h6"
					/><path
						d="M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3z"
					/></svg
				>Suggestions
			</h2>
			<div class="self-center"><img src={chevronDown} alt="Arrow down" /></div>
		</div>
		<div class="collapse-content bg-gradient-to-b from-slate-900 to-slate-800">
			<div class="card w-full bg-base-300 px-5 shadow-xl">
				<div class="card-body">
					<ol class="list-decimal divide-y-2 divide-slate-600">
						{#each data.post.suggestions as suggestion}
							<li class="rounded text-lg hover:bg-slate-700">{suggestion}</li>
						{/each}
					</ol>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	li {
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		padding-left: 0.5rem;
	}
</style>
