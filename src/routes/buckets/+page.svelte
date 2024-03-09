<script>
	import { info } from './data.js';
</script>

<div
	class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 justify-items-center gap-y-8 gap-x-8 px-[3rem]"
>
	{#each info as item}
		{#if item.name}
			<div
				class="card w-full bg-base-300 shadow-xl hover:bg-gradient-to-r hover:from-gray-700 from-40% hover:to-slate-700 to-70%"
			>
				<div class="card-body grid place-content-start">
					<h2
						class="mb-7 bg-gradient-to-r from-emerald-200 via-blue-300 to-teal-600 inline-block text-transparent bg-clip-text"
					>
						<a href="/buckets/{item.name}">{item.name}</a>
					</h2>
					<h3>Topics</h3>
					<p class="mb-7">
						{#each item.topics as topic}
							<span class="btn btn-outline btn-xs me-2 mt-1">{topic}</span>
						{/each}
					</p>

					<div class="collapse collapse-plus bg-base-200">
						<input type="radio" name="accordion-{item.name}-1" />
						<div class="collapse-title">
							<h3>Find answers to...</h3>
						</div>
						<div class="collapse-content">
							<ul class="list-disc mb-7 ps-4">
								{#each item.questions as question, index}
									{#if index < 3}
										<li>{question}</li>
									{/if}
								{/each}
								...
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
										<li>{objective}</li>
									{/if}
								{/each}
								...
							</ul>
						</div>
					</div>
					<a href="/buckets/{item.name}" class="btn btn-warning btn-sm"
						>Read more&nbsp;&nbsp;&#x2192;</a
					>
				</div>
			</div>
		{/if}
	{/each}
</div>
