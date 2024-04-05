<script>
	import { techtrippin } from './data_techtrippin';
	import twentyFiveDev from '$lib/assets/25yodev.webp?enhanced&w=200;150;70';
	import Breadcrumbs from '$lib/Breadcrumbs.svelte';
	import TablerHelpCircleFilled from '$lib/assets/svg/TablerHelpCircleFilled.svelte';
	import { fly } from 'svelte/transition';

	let showMore = $state(false);
	let currentItem = $state(0);
</script>

<Breadcrumbs textCurrent={"Tech Trippin'"} />
<div class="mx-2 mb-10 grid-cols-1 rounded-lg py-5 lg:mx-20 lg:mb-20">
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
		<div class="rounded-lg bg-base-100 p-1 text-start text-lg lg:p-0">
			<div class="collapse collapse-arrow mb-10 bg-base-300">
				<input type="checkbox" name="my-accordion-2" bind:checked={showMore} />
				<div class="collapse-title">
					<h2><TablerHelpCircleFilled class="mb-1 me-3 inline" />What's this?</h2>
				</div>
				<div class="collapse-content bg-base-300">
					<p class="mb-7 border-t-2 border-t-gray-700 pt-5">
						This is a collection of illogical or unproductive comments I encountered during work.
						I'm not trying to shame anyone here, but I hope writing these gives you some affirmation
						to speak out against similar comments in your own work, and do robust debates/challenges
						to make overall outcomes better.
					</p>
					<p>And of course, given the anonymity here, also have a chuckle.</p>
				</div>
			</div>

			<div
				class="grid grid-cols-1 justify-items-center gap-y-8 lg:mb-7 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-10"
			>
				<div id="navigation">
					<div id="dropdown" class="w-full lg:hidden">
						<label class="ms-1 font-medium">Select an item:</label>
						<select
							bind:value={currentItem}
							class="select select-bordered w-full bg-base-300 text-lg"
						>
							{#each techtrippin as sidebarItem, index}
								<option value={index}>{sidebarItem.title}</option>
							{/each}
						</select>
					</div>
					<div id="sidebar" class="z-20 col-span-1 hidden lg:contents">
						<div class="rounded-xl bg-base-300">
							<h2 class="rounded-t-xl bg-gray-950 p-5 text-center">Menu</h2>
							<ol class="divide-y-2 divide-slate-600 px-5">
								{#each techtrippin as sidebarItem, index}
									<button
										onclick={() => {
											currentItem = index;
										}}
										class="w-full"
										><li class="ms-5 list-decimal py-3 ps-5 text-start">
											{sidebarItem.title}
										</li></button
									>
								{/each}
							</ol>
						</div>
					</div>
				</div>
				<div id="content" class="col-span-2">
					{#key currentItem}
						<div
							data-id="Item-{currentItem}"
							class=" z-10 rounded-2xl bg-base-300"
							in:fly={{ duration: 300, x: -40 }}
							out:fly={{ duration: 0 }}
						>
							<h2 class="rounded-t-2xl bg-gray-950 py-5 text-center">
								{techtrippin[currentItem].title}
							</h2>
							<div class="p-2 xl:p-6">
								<div class="chat chat-start">
									<div class="avatar chat-image">
										<div class="w-10 rounded-full lg:w-[200px]">
											<img alt="Person" src={techtrippin[currentItem].icon} />
										</div>
									</div>
									<div class="chat-header ms-5 self-end pb-1 font-medium lg:text-xl">
										{techtrippin[currentItem].name}
									</div>
									<div
										class="chat-bubble bg-gradient-to-r from-red-950 to-rose-950 p-2 text-xl lg:p-6"
									>
										{techtrippin[currentItem].prompt}
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

									<div class="chat-header me-5 self-end pb-1 font-medium lg:text-xl">
										Chad Staffer
									</div>
									<div
										class="chat-bubble self-start bg-gradient-to-r from-slate-900 via-base-300 to-slate-900 p-2 text-xl lg:p-6"
									>
										{techtrippin[currentItem].response}
									</div>
								</div>
								{#if techtrippin[currentItem].prompt2 && techtrippin[currentItem].response2}
									<div class="chat chat-start">
										<div class="avatar chat-image">
											<div class="w-10 rounded-full lg:w-[200px]">
												<img alt="Person" src={techtrippin[currentItem].icon} />
											</div>
										</div>
										<div class="chat-header ms-5 self-end pb-1 font-medium lg:text-xl">
											{techtrippin[currentItem].name}
										</div>
										<div
											class="chat-bubble bg-gradient-to-r from-red-950 to-rose-950 p-2 text-xl lg:p-6"
										>
											{techtrippin[currentItem].prompt2}
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
											{techtrippin[currentItem].response2}
										</div>
									</div>
								{/if}
							</div>
						</div>
					{/key}
				</div>
			</div>
			<!-- end new -->
		</div>
	</div>
</div>
