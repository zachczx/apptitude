<script>
	import { techtrippin } from './data_techtrippin';
	import twentyFiveDev from '$lib/assets/25yodev.webp?enhanced&w=200;150;70';
	import Breadcrumbs from '$lib/Breadcrumbs.svelte';
	import TablerHelpCircleFilled from '$lib/assets/svg/TablerHelpCircleFilled.svelte';

	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	let showMore = $state(false);

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		const convoVar = document.getElementsByClassName('convo');
		console.log(convoVar);

		let tl = gsap.matchMedia();
		tl.add('(min-width: 1024px)', () => {
			for (let convoEach of convoVar) {
				gsap.to(convoEach, {
					scrollTrigger: {
						trigger: convoEach,
						start: '-100% top',
						end: 'bottom 30%',
						toggleActions: 'play reverse play reverse',
						scrub: false,
						markers: false
					},
					backgroundColor: '#20252E',
					duration: 0.3,
					scale: 1.05
				});
			}
		});
	});

	////////////////////////////////////////
	/*
	import { animate, scroll } from 'motion';

	onMount(() => {
		const convoVar = document.getElementsByClassName('convo');
		for (const convoEach of convoVar) {
			scroll(
				animate(convoEach, {
					scale: [0.9, 1],

					backgroundColor: ['#2A303C', '#20252E']
				}),
				{ target: convoEach, offset: ['start end', 'end end'] }
			);
		}
	});
	*/
</script>

<Breadcrumbs textCurrent={"Tech Trippin'"} />
<div class="mb-10 grid-cols-1 rounded-lg px-1 py-5 lg:mb-20 xl:mx-20">
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
		<div class="mx-1 rounded-lg bg-base-100 p-5 text-start text-lg lg:mx-5">
			<div class="collapse collapse-arrow mb-10 bg-base-300">
				<input type="checkbox" name="my-accordion-2" bind:checked={showMore} />
				<div class="collapse-title">
					<h2><TablerHelpCircleFilled class="me-3 inline" />What's this?</h2>
				</div>
				<div class="collapse-content bg-base-200">
					<p class="mb-7 mt-5">
						This is a collection of illogical or unproductive comments I encountered during work.
						I'm not trying to shame anyone here, but I hope writing these gives you some affirmation
						to speak out against similar comments in your own work, and do robust debates/challenges
						to make overall outcomes better.
					</p>
					<p>And of course, given the anonymity here, also have a chuckle.</p>
				</div>
			</div>

			<div class="grid grid-cols-1 justify-items-center gap-y-8 lg:mb-7 lg:gap-y-20">
				{#each techtrippin as techtrippinItem, i}
					<div id="tidbit-{i}" class="convo rounded-2xl bg-gray-700 p-2 xl:p-6">
						<div>
							<h2 class="pb-10 pt-3 text-center">{techtrippinItem.title}</h2>
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
									class="chat-bubble bg-gradient-to-r from-red-950 to-rose-950 p-2 text-xl lg:p-6"
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

								<div class="chat-header me-5 self-end pb-1 font-medium lg:text-xl">
									Chad Staffer
								</div>
								<div
									class="chat-bubble self-start bg-gradient-to-r from-slate-900 via-base-300 to-slate-900 p-2 text-xl lg:p-6"
								>
									{techtrippinItem.response}
								</div>
							</div>
							{#if techtrippinItem.prompt2 && techtrippinItem.response2}
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
										class="chat-bubble bg-gradient-to-r from-red-950 to-rose-950 p-2 text-xl lg:p-6"
									>
										{techtrippinItem.prompt2}
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
										{techtrippinItem.response2}
									</div>
								</div>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
