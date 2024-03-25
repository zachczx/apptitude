<script>
	import Wip from '$lib/WIP.svelte';
	import { techtrippin } from './data_techtrippin';
	import twentyFiveDev from '$lib/assets/25yodev.webp?enhanced&w=200;150;70';
	import yesChad from '$lib/assets/yeschad.webp?enhanced&w=200;150;70';

	import Breadcrumbs from '$lib/Breadcrumbs.svelte';
	import TablerHelpCircleFilled from '$lib/assets/svg/TablerHelpCircleFilled.svelte';
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

	let showMore = false;
</script>

<Breadcrumbs textCurrent={"Tech Trippin'"} />
<div class="mb-10 grid-cols-1 rounded-lg px-5 py-5 lg:mx-20 lg:mb-20">
	<div class="text-center">
		<h1
			class="inline-block bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 text-transparent"
		>
			Tech Trippin'
		</h1>
		<div class="mb-10">
			<i
				>Going through real world examples of tech jargon-gibberish and calling out what makes
				absolutely no sense.</i
			>
		</div>
		<div class="mx-1 rounded-lg bg-base-100 bg-base-300 p-5 text-start text-lg lg:mx-5">
			<div class="collapse collapse-arrow mb-10 bg-base-200">
				<input type="checkbox" name="my-accordion-2" bind:checked={showMore} />
				<div class="collapse-title">
					<h2><TablerHelpCircleFilled class="me-3 inline" />What is this?</h2>
				</div>
				<div class="collapse-content">
					<p class="mb-7 mt-5">
						This is a collection of illogical or unproductive comments I encountered during work.
						I'm not trying to shame anyone here, but I hope writing these gives you some affirmation
						to speak out against similar comments in your own work, and do robust debates/challenges
						to make overall outcomes better.
					</p>
					<p class="">And of course, given the anonymity here, also have a chuckle.</p>
				</div>
			</div>

			<div class="grid grid-cols-1 justify-items-center gap-x-8 gap-y-8 lg:mb-7">
				<div class="carousel w-full">
					{#each techtrippin as techtrippinItem, i}
						<div id="tidbit-{i}" class="carousel-item relative w-full">
							<div>
								<div class="chat chat-start">
									<div class="avatar chat-image">
										<div class="w-10 rounded-full lg:w-[200px]">
											<img alt="Person" src={techtrippinItem.icon} />
										</div>
									</div>
									<div class="chat-header ms-5 self-end pb-1 font-medium lg:text-xl">
										{techtrippinItem.name}
									</div>
									<div
										class="chat-bubble bg-gradient-to-r from-slate-800 to-slate-800 p-2 text-xl lg:p-6"
									>
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
										class="chat-bubble self-start bg-gradient-to-r from-slate-900 via-base-300 to-slate-900 p-2 text-xl lg:p-6"
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
		</div>
	</div>
</div>
