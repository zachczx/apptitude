<script>
	import { info } from './data.js';
</script>

<div class="mb-10 text-center lg:mb-20">
	<h1
		class="inline-block bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 text-transparent"
	>
		The Skill Forge
	</h1>
	<div><i>Find your own path upsizing your Bytes into Megabytes.</i></div>
</div>
<div
	class="grid grid-cols-1 justify-items-center gap-x-8 gap-y-8 px-5 lg:grid-cols-2 lg:px-20 xl:grid-cols-4"
>
	{#each info as item}
		{#if item.name}
			<div
				class="card w-full bg-base-300 from-40% to-70% shadow-xl hover:bg-gradient-to-r hover:from-gray-700 hover:to-slate-700"
			>
				<div class="card-body grid grid-cols-1 place-content-start">
					<h2
						class="mb-7 inline-block bg-gradient-to-r from-emerald-200 via-blue-300 to-teal-600 bg-clip-text text-transparent"
					>
						<a href="/skills/{item.slug}">{item.name}</a>
					</h2>
					<h3><a href="/skills/{item.slug}">Topics</a></h3>
					<p class="mb-7">
						{#each item.topics as topic}
							<a href="/skills/{item.slug}" class="btn btn-outline btn-xs me-2 mt-1">{topic}</a>
						{/each}
					</p>

					<div class="collapse collapse-plus bg-base-200">
						<input type="radio" name="accordion-{item.name}-1" />
						<div class="collapse-title">
							<h3>Find answers to...</h3>
						</div>
						<div class="collapse-content">
							<ul class="mb-7 list-disc ps-4">
								{#each item.questions as question, index}
									{#if index < 3}
										<li><a href="/skills/{item.slug}">{question}</a></li>
									{/if}
								{/each}
								<a href="/skills/{item.slug}">...</a>
							</ul>
						</div>
					</div>
					<div class="collapse collapse-plus bg-base-200">
						<input type="radio" name="accordion-{item.name}-2" />
						<div class="collapse-title text-xl font-medium">
							<h3>Your Final Form</h3>
						</div>
						<div class="collapse-content">
							<ul class="list-disc ps-4">
								{#each item.objectives as objective, index}
									{#if index < 3}
										<li><a href="/skills/{item.slug}">{objective}</a></li>
									{/if}
								{/each}
								<a href="/skills/{item.slug}">...</a>
							</ul>
						</div>
					</div>
					<a href="/skills/{item.slug}" class="btn btn-primary btn-sm"
						>Read more&nbsp;&nbsp;&#x2192;</a
					>
				</div>
			</div>
		{/if}
	{/each}
</div>
