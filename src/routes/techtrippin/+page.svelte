<script>
	import Wip from '$lib/WIP.svelte';
	import { techtrippin } from './data_techtrippin';
	import consultant from '$lib/assets/consultant.webp?enhanced&w=200;150;70';
	import consultant2 from '$lib/assets/consultant2.webp?enhanced&w=200;150;70';
	import yesChad from '$lib/assets/yeschad.webp?enhanced&w=200;150;70';
	import twentyFiveDev from '$lib/assets/25yodev.webp?enhanced&w=200;150;70';
	import Breadcrumbs from '$lib/Breadcrumbs.svelte';
	let totalNumber = techtrippin.length - 1;

	function clickNext(current) {
		if (current < totalNumber) {
			let next = current + 1;
			return next;
		} else {
			return 0;
		}
	}

	function clickPrev(current) {
		if (current <= totalNumber && current != 0) {
			let prev = current - 1;
			return prev;
		} else if (current === 0) {
			return totalNumber;
		}
	}
</script>

<Breadcrumbs textCurrent={"Tech Trippin'"} />
<div class="mb-10 text-center lg:mb-20">
	<h1
		class="inline-block bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 text-transparent"
	>
		Tech Trippin'
	</h1>
	<div>
		<i>Going through real world examples of tech jargon-gibberish and what I'd call out.</i>
	</div>
</div>
<div
	class="grid grid-cols-1 justify-items-center gap-x-8 gap-y-8 px-5 lg:grid-cols-1 lg:px-40 xl:grid-cols-1"
>
	<div class="carousel w-full">
		{#each techtrippin as techtrippinItem, i}
			<div id="tidbit-{i}" class="carousel-item relative w-full">
				<div>
					<div class="chat chat-start">
						<div class="avatar chat-image">
							<div class="w-10 rounded-full lg:w-[200px]">
								{#if i % 2 == 0}
									<enhanced:img
										alt="Tech Consultant"
										src={consultant}
										sizes="(min-width:1920px) 200px, (min-width:1080px) 150px, (min-width:768px) 70px"
									/>
								{:else}
									<enhanced:img
										alt="Tech Consultant"
										src={consultant2}
										sizes="(min-width:1920px) 200px, (min-width:1080px) 150px, (min-width:768px) 70px"
									/>
								{/if}
							</div>
						</div>
						<div class="chat-header ms-5 self-end pb-1 font-medium lg:text-xl">Project Manager</div>
						<div class="chat-bubble bg-gradient-to-r from-base-200 to-slate-800 p-2 text-xl lg:p-5">
							{techtrippinItem.prompt}
						</div>
					</div>
					<div class="chat chat-end">
						<div class="avatar chat-image">
							<div class="w-10 rounded-full lg:w-[200px]">
								<enhanced:img
									alt="Soy Dev"
									src={twentyFiveDev}
									sizes="(min-width:1920px) 200px, (min-width:1080px) 150px, (min-width:768px) 70px"
								/>
							</div>
						</div>

						<div class="chat-header me-5 self-end pb-1 font-medium lg:text-xl">Me</div>
						<div
							class="chat-bubble self-start bg-gradient-to-r from-slate-900 via-base-300 to-slate-900 p-2 text-xl lg:p-2"
						>
							{techtrippinItem.response}
						</div>
					</div>
				</div>

				<div
					class="absolute left-1 right-1 top-1/2 flex -translate-y-1/2 transform justify-between"
				>
					<a
						href="#tidbit-{clickPrev(i)}"
						class="btn btn-circle bg-gray-900 lg:btn-lg focus:ring focus:ring-slate-300 lg:text-3xl"
						>❮</a
					>
					<a
						href="#tidbit-{clickNext(i)}"
						class="btn btn-circle bg-gray-900 lg:btn-lg hover:text-gray-100 focus:ring focus:ring-slate-300 lg:text-3xl"
						>❯</a
					>
				</div>
			</div>
		{/each}
	</div>
</div>
