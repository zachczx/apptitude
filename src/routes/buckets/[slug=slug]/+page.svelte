<script>
	import { page } from '$app/stores';

	const slug = $page.params.slug;
	export let data;
</script>

<h1>Details about {data.post.name}</h1>

<div class="card w-full bg-base-300 shadow-xl">
	<figure><img src="" alt="" /></figure>
	<div class="card-body grid place-content-start">
		<h2
			class="mb-7 bg-gradient-to-r from-emerald-200 via-blue-300 to-red-600 inline-block text-transparent bg-clip-text"
		>
			{data.post.name}
		</h2>
		<h3>Topics</h3>
		<p class="mb-7">
			{#each data.post.topics as topic}
				<span class="btn btn-primary btn-xs me-2 mt-1">{topic}</span>
			{/each}
		</p>

		<div class="collapse collapse-plus bg-base-200">
			<input type="radio" name="accordion-{data.post.name}-1" checked="checked" />
			<div class="collapse-title">
				<h3>Find answers to...</h3>
			</div>
			<div class="collapse-content">
				<ul class="list-disc mb-7 ps-4">
					{#each data.post.questions as question}
						<li>{question}</li>
					{/each}
				</ul>
			</div>
		</div>
		<div class="collapse collapse-plus bg-base-200">
			<input type="radio" name="accordion-{data.post.name}-2" />
			<div class="collapse-title text-xl font-medium">
				<h3>Your Final Form</h3>
			</div>
			<div class="collapse-content">
				<ul class="list-disc ps-4">
					{#each data.post.objectives as objective}
						<li>{objective}</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>
