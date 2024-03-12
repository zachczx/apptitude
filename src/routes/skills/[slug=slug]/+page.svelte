<script>
	import { page } from '$app/stores';

	const slug = $page.params.slug;
	export let data;
</script>

<div
	class="mx-7 grid grid-cols-1 place-content-start gap-4 rounded-lg bg-base-300 px-5 py-5 shadow-xl lg:grid-cols-2"
>
	<div class="grid grid-cols-2 text-center font-bold lg:col-span-2">
		<div class="justify-self-start">
			<a href="/skills/{data.lastPost.name}"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-circle-chevron-left inline align-top"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13 15l-3 -3l3 -3" /><path
						d="M21 12a9 9 0 1 0 -18 0a9 9 0 0 0 18 0z"
					/></svg
				> Previous</a
			>
		</div>
		<div class="justify-self-end">
			<a href="/skills/{data.nextPost.name}"
				>Next <svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-circle-chevron-right inline align-top"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11 9l3 3l-3 3" /><path
						d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0z"
					/></svg
				></a
			>
		</div>
	</div>
	<div class="text-center lg:col-span-2">
		<figure><img src="" alt="" /></figure>
		<h1
			class="mb-3 inline-block bg-gradient-to-r from-emerald-200 via-blue-300 to-teal-300 bg-clip-text text-transparent"
		>
			Let's talk: {data.post.name}
		</h1>
	</div>

	<div class="rounded-lg bg-base-200 p-5 lg:col-span-2">
		<h3 class="mb-5">Topics</h3>
		<p class="mb-7">
			{#each data.post.topics as topic}
				<span class="btn btn-primary btn-xs me-2 mt-1">{topic}</span>
			{/each}
		</p>
	</div>
	<div class="rounded-lg bg-base-200 p-5">
		<h3 class="mb-5">Find answers to...</h3>
		<ul class="mb-7 list-disc ps-4">
			{#each data.post.questions as question}
				<li>{question}</li>
			{/each}
		</ul>
	</div>
	<div class="rounded-lg bg-base-200 p-5">
		<h3 class="mb-5">Your Final Form</h3>
		<ul class="list-disc ps-4">
			{#each data.post.objectives as objective}
				<li>{objective}</li>
			{/each}
		</ul>
	</div>
	<div class="col-span-1 rounded-lg bg-base-200 p-5 lg:col-span-2">
		<h3 class="mb-5">Resources</h3>
		<div class="grid">
			<h4 class="mb-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-link inline"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 15l6 -6" /><path
						d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"
					/><path
						d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"
					/></svg
				>
				Links
			</h4>
			{#if data.post.resources.links == ''}
				Sorry, nothing here
			{:else}
				{#each data.post.resources.links as link}
					<ul class="list-disc ps-4">
						<li><a href={link}>{link}</a></li>
					</ul>
				{/each}
			{/if}
			<h4 class="mb-2 mt-7">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-brand-youtube-filled inline"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
						d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z"
						stroke-width="0"
						fill="currentColor"
					/></svg
				> Youtube
			</h4>
			{#if data.post.resources.youtube == ''}
				Sorry, nothing here
			{:else}
				{#each data.post.resources.youtube as resource}
					<div class="mb-5">
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
			{/if}
		</div>
	</div>
</div>

<style>
	li {
		margin-bottom: 0.75rem;
		padding-left: 0.75rem;
	}
</style>
