<script lang="ts">
	import heroNew2 from '$lib/assets/hero-new-2.webp?enhanced&w=2060;1536;1280;1024';
	import heroNew2Background from '$lib/assets/hero-new-2.webp?enhanced&w=800';

	import logo from '$lib/assets/svg/logo.svg?dataurl';

	import { matchUrl } from '$lib/helpers';

	import pandaAnnoyed from '$lib/assets/panda-annoyed.webp?enhanced&w=600;500;300';
	import pandaSuperhero from '$lib/assets/panda-superhero.webp?enhanced&w=600';
	import pandaAnnoyedAlt from '$lib/assets/panda-annoyed-alt.webp?enhanced&w=300';
	import pandaSeniorMgmt from '$lib/assets/panda-senior-mgmt.webp?enhanced&w=300';
	import pandaBoss from '$lib/assets/panda-boss.webp?enhanced&w=300';
	import unoptimised1 from '$lib/assets/unoptimised1.webp?enhanced&w=300';

	import fireBurning from '$lib/assets/fire-burning.webp?enhanced&w=300';
	import pandaExhausted from '$lib/assets/panda-exhausted.webp?enhanced&w=300';
	import pandaConfused from '$lib/assets/panda-confused.webp?enhanced&w=300';
	import burning from '$lib/assets/burning.webp';
	import { info } from './learn/data_learn';
	import { guides } from './guides/data_guides';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let { data } = $props();
	let pageName = $state('Apptitude');
	let carouselTopics = $state() as HTMLDivElement;
	let carouselGuides = $state() as HTMLDivElement;
	let activeCarousel: 'how' | 'why' = $state('how');

	interface Topics {
		name: string;
		slug: string;
		intro: string;
		topics: string[];
	}

	const topics: Topics[] = [
		{ name: 'Computing', slug: 'basics', intro: '', topics: [] },
		{ name: 'Internet', slug: 'basics-web', intro: '', topics: [] },
		{ name: 'Workplace Apps', slug: 'apps', intro: '', topics: [] },
		{ name: 'Central Tools', slug: 'wog', intro: '', topics: [] },
		{ name: 'UX', slug: 'ux', intro: '', topics: [] },
		{ name: 'Products', slug: 'products', intro: '', topics: [] },
		{ name: 'Methodology', slug: 'methods', intro: '', topics: [] },
		{ name: 'Data', slug: 'data', intro: '', topics: [] },
		{ name: 'AI', slug: 'ai', intro: '', topics: [] },
		{ name: 'Web Dev', slug: 'technical', intro: '', topics: [] },
	];
	for (const topic of topics) {
		for (const section of info) {
			if (topic.slug === section.slug) {
				topic.topics = section.topics;
				topic.intro = section.intro;
			}
		}
	}

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		const topicCards = document.getElementsByClassName('topic-card');
		const guideCards = document.getElementsByClassName('guide-card');

		let t3 = gsap.matchMedia();
		t3.add('(min-width: 1028px)', () => {
			for (const card of topicCards) {
				gsap.to(card, {
					scrollTrigger: {
						trigger: card,
						start: 'top 60%',
						end: '+=500px',
						scrub: true,
						markers: false,
					},
					x: '-10vw',
				});
				// gsap.to(card, {
				// 	scrollTrigger: {
				// 		trigger: card,
				// 		start: 'top 60%',
				// 		end: '+=10px',
				// 		scrub: true,
				// 		markers: false,
				// 	},
				// 	opacity: 1,
				// });
			}

			// for (const card of guideCards) {
			// 	gsap.from(card, {
			// 		scrollTrigger: {
			// 			trigger: card,
			// 			start: 'top 60%',
			// 			end: '+=1500px',
			// 			scrub: true,
			// 			markers: false,
			// 		},
			// 		x: '-1vw',
			// 	});
			// 	gsap.to(card, {
			// 		scrollTrigger: {
			// 			trigger: card,
			// 			start: 'top 60%',
			// 			end: '+=10px',
			// 			scrub: true,
			// 			markers: false,
			// 		},
			// 		opacity: 1,
			// 	});
			// }
		});
	});

	$effect(() => {
		// if (carouselGuides) {
		// 	carouselGuides.scrollLeft = -400;
		// 	console.log(typeof carouselGuides.scrollLeft);
		// }
	});
</script>

<svelte:head>
	<title>{pageName}</title>
</svelte:head>

<div
	class="to-base-100 grid content-start justify-items-center bg-radial-[at_50%_60%] from-white/20 to-70% py-24 lg:min-h-[60vh]"
	data-pagefind-ignore>
	<section>
		<div class="max-w-[1000px] self-center justify-self-center px-2">
			<h1
				class="mb-12 text-center text-5xl font-bold tracking-tighter lg:pt-20 lg:text-6xl 2xl:text-7xl">
				Understand Tech <span
					class="headline inline-block bg-linear-to-r from-emerald-200 via-lime-200 to-teal-300 bg-clip-text text-transparent"
					>Deeper</span
				>. Lead Tech
				<span
					class="headline-slower inline-block bg-linear-to-r from-teal-300 via-lime-200 to-emerald-200 bg-clip-text text-transparent"
					>Better</span
				>.
			</h1>
			<p class="mb-12 text-center lg:text-2xl">
				Whether you're building or leading, you need basic tech knowledge and business instincts.
				Let's work on that together.
			</p>

			<div class="mb-12 flex flex-wrap justify-center gap-4">
				<a
					href="/learn"
					aria-label="See Resources"
					class="group btn btn-primary border-primary shadow-primary/50 rounded-full border py-8 text-lg font-bold ring-2 ring-gray-100/30 hover:shadow-lg lg:px-8 lg:text-2xl"
					>See Resources<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1.3em"
						height="1.3em"
						class="transition-all duration-300 ease-in-out group-hover:translate-x-2"
						stroke="currentColor"
						viewBox="0 0 24 24"
						><path
							d="m13.692 17.308l-.707-.72l4.088-4.088H5v-1h12.073l-4.088-4.088l.707-.72L19 12z" /></svg
					></a>
				<a
					href="/guides"
					class="btn btn-outline btn-secondary rounded-full py-8 text-lg font-medium lg:px-8 lg:text-2xl"
					>My Views</a>
			</div>
		</div>
	</section>
</div>

<section
	class="bg-base-200 border-base-content/30 mx-auto grid max-w-(--breakpoint-2xl) content-center justify-items-center gap-y-12 rounded-4xl border px-2 py-20"
	data-pagefind-ignore>
	<h2 class="text-center text-4xl font-medium lg:col-span-1 lg:px-20 lg:text-6xl">
		Why You Need This
	</h2>
	<div>
		<div class="mb-12 text-center">
			To lead and do better in tech, you'll need foundational tech knowledge and business
			perspectives.
		</div>

		<div class="grid content-start gap-8 lg:grid-cols-2">
			<div
				class="border-base-content/30 grid content-start gap-4 rounded-2xl border p-4 lg:ms-20 lg:p-8">
				<button
					class="cursor-pointer py-4 text-center text-4xl font-bold lg:text-6xl"
					onclick={() => (activeCarousel = 'how')}>
					Learn <span class="text-info">How</span>
				</button>

				<div class="flex flex-wrap justify-center gap-4">
					{#each topics as topic}
						<a href="/learn/{topic.slug}" class="btn btn-info btn-outline btn-lg rounded-full"
							>{topic.name}</a>
					{/each}
				</div>
			</div>

			<div
				class="border-base-content/30 grid content-start gap-4 rounded-2xl border p-4 lg:me-20 lg:p-8">
				<button
					onclick={() => (activeCarousel = 'why')}
					class="cursor-pointer py-4 text-center text-4xl font-bold lg:text-6xl">
					Think <span class="text-secondary">Why</span>
				</button>

				<div class="flex flex-wrap justify-center gap-4">
					<div>
						<a href="/guides/product" class="btn btn-secondary btn-outline btn-lg rounded-full"
							>Products</a>
					</div>
					<div>
						<a href="/guides/problems" class="btn btn-secondary btn-outline btn-lg rounded-full"
							>Problem Statements</a>
					</div>
					<div>
						<a href="/guides/cost" class="btn btn-secondary btn-outline btn-lg rounded-full"
							>Cost</a>
					</div>
					<div>
						<a href="/guides/research" class="btn btn-secondary btn-outline btn-lg rounded-full"
							>User Research</a>
					</div>
					<div>
						<a href="/guides/running" class="btn btn-secondary btn-outline btn-lg rounded-full"
							>Management</a>
					</div>
				</div>
			</div>
			<div class="relative col-span-2 w-full {activeCarousel === 'how' ? undefined : 'hidden'}">
				<button
					onclick={() => {
						console.log('clicked');
						carouselTopics.scrollLeft -= 400;
					}}
					class="text-base-content hover:text-primary cursor-pointer"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						class="carbon:previous-filled absolute top-1/2 left-4 z-[1] h-12 w-12 -translate-y-1/2"
						viewBox="0 0 32 32"
						><!-- Icon from Carbon by IBM - undefined --><path
							fill="currentColor"
							d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m8 15H11.85l5.58 5.573L16 24l-8-8l8-8l1.43 1.393L11.85 15H24Z" /><path
							fill="none"
							d="m16 8l1.43 1.393L11.85 15H24v2H11.85l5.58 5.573L16 24l-8-8z" /></svg>
				</button>
				<div
					id="carouselTopics"
					bind:this={carouselTopics}
					class="carousel carousel-center bg-base-200 rounded-box relative w-full space-x-8">
					{#each topics as topic}
						<div class="carousel-item">
							<div
								class="topic-card card bg-info/5 border-info/40 card-md h-96 w-72 border shadow-sm">
								<div class="card-body">
									<h2 class="card-title text-2xl font-medium">
										<a href="/learn/{topic.slug}">{topic.name}</a>
									</h2>
									<p><a href="/learn/{topic.slug}">{topic.intro}</a></p>
									<a href="/learn/{topic.slug}" class="card-actions">
										{#each topic.topics as tag, i}
											{#if i < 10}
												<button
													class="btn btn-outline hover:bg-base-content hover:text-primary-content btn-xs">
													{tag}
												</button>
											{:else if i === 10}
												...
											{/if}
										{/each}
									</a>
								</div>
							</div>
						</div>
					{/each}
				</div>
				<button
					onclick={() => {
						console.log('clicked');
						carouselTopics.scrollLeft += 400;
					}}
					class="text-base-content hover:text-primary z-[2] cursor-pointer"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						class="carbon:next-filled absolute top-1/2 right-4 h-12 w-12 -translate-y-1/2"
						viewBox="0 0 32 32"
						><!-- Icon from Carbon by IBM - undefined --><path
							fill="currentColor"
							d="M2 16A14 14 0 1 0 16 2A14 14 0 0 0 2 16m6-1h12.15l-5.58-5.607L16 8l8 8l-8 8l-1.43-1.427L20.15 17H8Z" /><path
							fill="none"
							d="m16 8l-1.43 1.393L20.15 15H8v2h12.15l-5.58 5.573L16 24l8-8z" /></svg>
				</button>
			</div>

			<div class="relative col-span-2 w-full {activeCarousel === 'why' ? undefined : 'hidden'}">
				<button
					onclick={() => {
						console.log('clicked');
						carouselGuides.scrollLeft -= 400;
					}}
					class="text-base-content hover:text-primary cursor-pointer"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						class="carbon:previous-filled absolute top-1/2 left-4 z-[1] h-12 w-12 -translate-y-1/2"
						viewBox="0 0 32 32"
						><!-- Icon from Carbon by IBM - undefined --><path
							fill="currentColor"
							d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m8 15H11.85l5.58 5.573L16 24l-8-8l8-8l1.43 1.393L11.85 15H24Z" /><path
							fill="none"
							d="m16 8l1.43 1.393L11.85 15H24v2H11.85l5.58 5.573L16 24l-8-8z" /></svg>
				</button>
				<div
					bind:this={carouselGuides}
					class="carousel carousel-center bg-base-200 rounded-box relative w-full space-x-8">
					{#each guides as guide}
						<div class="carousel-item">
							<div
								class="guide-card card border-secondary card-md bg-secondary/5 h-96 w-84 border shadow-sm">
								<div class="card-body">
									<a href="/guides/{guide.slug}">
										<h2 class="card-title text-2xl font-medium">
											{guide.name}
										</h2></a>
									<p><a href="/guides/{guide.slug}">{guide.tagline}</a></p>
									<div class="card-actions">
										<a
											href="/guides/{guide.slug}/#definitions"
											class="btn btn-xs btn-outline hover:bg-base-content hover:text-primary-content"
											>Definitions</a>

										<a
											href="/guides/{guide.slug}/#goals"
											class="btn btn-xs btn-outline hover:bg-base-content hover:text-primary-content"
											>Goals</a>

										<a
											href="/guides/{guide.slug}/#questions"
											class="btn btn-xs btn-outline hover:bg-base-content hover:text-primary-content"
											>Questions</a>
										<a
											href="/guides/{guide.slug}/#alarms"
											class="btn btn-xs btn-outline hover:bg-base-content hover:text-primary-content"
											>Alarms</a>
										<a
											href="/guides/{guide.slug}/#dealbreakers"
											class="btn btn-xs btn-outline hover:bg-base-content hover:text-primary-content"
											>Dealbreakers</a>
									</div>
								</div>
							</div>
						</div>
					{/each}
				</div>
				<button
					onclick={() => {
						console.log('clicked');
						carouselGuides.scrollLeft += 400;
					}}
					class="text-base-content hover:text-primary z-[2] cursor-pointer"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						class="carbon:next-filled absolute top-1/2 right-4 h-12 w-12 -translate-y-1/2"
						viewBox="0 0 32 32"
						><!-- Icon from Carbon by IBM - undefined --><path
							fill="currentColor"
							d="M2 16A14 14 0 1 0 16 2A14 14 0 0 0 2 16m6-1h12.15l-5.58-5.607L16 8l8 8l-8 8l-1.43-1.427L20.15 17H8Z" /><path
							fill="none"
							d="m16 8l-1.43 1.393L20.15 15H8v2h12.15l-5.58 5.573L16 24l8-8z" /></svg>
				</button>
			</div>
		</div>
	</div>
</section>

<section
	class="mx-auto mt-12 grid min-h-[40vh] max-w-(--breakpoint-2xl) content-center justify-items-center gap-x-8 gap-y-8 px-2 py-12"
	data-pagefind-ignore>
	<h2 class="content-center text-4xl font-medium lg:text-6xl">
		Try <a href="/"><img src={logo} alt="Apptitude logo" class="inline h-10 lg:h-20" /></a>
	</h2>
	<ul class="mb-12 grid gap-y-4 justify-self-center px-2 lg:text-2xl">
		<li class="group flex items-center gap-4">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1.3em"
				height="1.3em"
				class="carbon:checkmark-filled text-primary group-hover:text-secondary"
				viewBox="0 0 32 32"
				><path
					fill="currentColor"
					d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z" /><path
					fill="none"
					d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585z" /></svg
			>Get helpful resources to improve base knowledge
			<a
				href="/learn"
				aria-label="See Resources"
				class="group hover:border-b-primary hover:text-primary border-b-base-content ms-2 flex gap-2 border-b"
				>View by Topics<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1.3em"
					height="1.3em"
					class="transition-all duration-300 ease-in-out group-hover:translate-x-2"
					stroke="currentColor"
					viewBox="0 0 24 24"
					><path
						d="m13.692 17.308l-.707-.72l4.088-4.088H5v-1h12.073l-4.088-4.088l.707-.72L19 12z" /></svg
				></a>
		</li>
		<li class="group flex items-center gap-4">
			<svg
				xmlns="http://www.w3.org/2000/svg text-success"
				width="1.3em"
				height="1.3em"
				class="carbon:checkmark-filled text-primary group-hover:text-secondary"
				viewBox="0 0 32 32"
				><!-- Icon from Carbon by IBM - undefined --><path
					fill="currentColor"
					d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z" /><path
					fill="none"
					d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585z" /></svg
			>Read my views as suggestions you can use at work<a
				href="/guides"
				aria-label="See guides"
				class="group hover:border-b-primary hover:text-primary border-b-base-content ms-2 flex gap-2 border-b"
				>Read My Views<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1.3em"
					height="1.3em"
					class="transition-all duration-300 ease-in-out group-hover:translate-x-2"
					stroke="currentColor"
					viewBox="0 0 24 24"
					><path
						d="m13.692 17.308l-.707-.72l4.088-4.088H5v-1h12.073l-4.088-4.088l.707-.72L19 12z" /></svg
				></a>
		</li>
	</ul>
</section>
<footer class="py-2 text-center">
	© 2024-2025 Zixian Chen. All views expressed here are solely mine.
</footer>

<style>
	:root {
		--myBlur: 20px;
	}

	@keyframes headline-blur {
		from {
			filter: blur(var(--myBlur));
		}
	}

	.headline {
		animation: headline-blur 0.5s linear 0s 1 forwards;
		@starting-style {
			opacity: 0%;
		}
	}

	.headline-slower {
		animation: headline-blur 0.7s linear 0s 1 forwards;
		@starting-style {
			opacity: 0%;
		}
	}
</style>
