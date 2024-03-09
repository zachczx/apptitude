<script>
	import { page } from '$app/stores';

	const slug = $page.params.slug;
	export let data;
</script>

<div
	class="grid grid-cols-1 lg:grid-cols-2 bg-base-300 gap-4 rounded-lg shadow-xl place-content-start mx-7 px-5 py-5"
>
	<div class="lg:col-span-2 text-center">
		<figure><img src="" alt="" /></figure>
		<h1
			class="mb-3 bg-gradient-to-r from-emerald-200 via-blue-300 to-teal-300 inline-block text-transparent bg-clip-text"
		>
			Details about {data.post.name}
		</h1>
	</div>

	<div class="lg:col-span-2 rounded-lg bg-base-200 p-5">
		<h3 class="mb-5">Topics</h3>
		<p class="mb-7">
			{#each data.post.topics as topic}
				<span class="btn btn-primary btn-xs me-2 mt-1">{topic}</span>
			{/each}
		</p>
	</div>
	<div class="bg-base-200 p-5 rounded-lg">
		<h3 class="mb-5">Find answers to...</h3>
		<ul class="list-disc mb-7 ps-4">
			{#each data.post.questions as question}
				<li>{question}</li>
			{/each}
		</ul>
	</div>
	<div class="bg-base-200 p-5 rounded-lg">
		<h3 class="mb-5">Your Final Form</h3>
		<ul class="list-disc ps-4">
			{#each data.post.objectives as objective}
				<li>{objective}</li>
			{/each}
		</ul>
	</div>
	<div class="bg-base-200 p-5 rounded-lg">
		<h3 class="mb-5">Resources</h3>
		<div class="grid gap-y-4">
			{#if data.post.resources}
				{#each data.post.resources as resource}
					<div>
						<iframe
							width="560"
							height="315"
							src={resource}
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						></iframe>
					</div>
				{/each}
			{:else}
				Nothing to see here!
			{/if}
		</div>
	</div>
</div>
