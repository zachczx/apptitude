<script lang="ts">
	import logo from '$lib/assets/svg/logo.svg?dataurl';

	import { matchUrl } from '$lib/helpers';

	import { info } from './(app)/learn/data_learn';
	import { guides } from './(app)/guides/data_guides';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	// import bg2 from '$lib/assets/daniel-lezuch-I4DcRJ_Evd8-unsplash.webp';
	import bg2 from '$lib/assets/thomas-jensen-GztZ77a0tAM-unsplash.jpg';

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
</script>

<svelte:head>
	<title>{pageName}</title>
</svelte:head>

<div
	class="to-base-100 grid grid-cols-1 content-center justify-items-start lg:min-h-dvh"
	style="background: url({bg2}) no-repeat; background-position: center bottom; background-size:cover; background-blend-mode: multiply; background-color: rgba(22, 25, 32, .9);"
	data-pagefind-ignore>
	<section class="mx-auto mt-20 w-full py-24">
		<div class="w-full max-w-(--breakpoint-2xl) self-center justify-self-center px-2">
			<h1 class="text-start text-5xl font-bold tracking-tighter lg:text-6xl 2xl:text-7xl">
				Understand Tech <span
					class="headline inline-block bg-linear-to-r from-emerald-200 via-lime-200 to-teal-300 bg-clip-text text-transparent"
					>Deeper</span
				>.
			</h1>
			<h1 class="mb-12 text-start text-5xl font-bold tracking-tighter lg:text-6xl 2xl:text-7xl">
				Lead Tech
				<span
					class="headline-slower inline-block bg-linear-to-r from-teal-300 via-lime-200 to-emerald-200 bg-clip-text text-transparent"
					>Better</span
				>.
			</h1>
			<p class="mb-4 text-start lg:text-2xl">
				Whether you're building or leading in tech, you need core knowledge and business instincts.
			</p>
			<p class="mb-12 text-start lg:text-2xl">
				Get the resources you need to upgrade your internals.
			</p>

			<div class="mb-12 flex flex-wrap justify-center gap-4 lg:justify-start">
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
					>Suggestions</a>
			</div>
		</div>
	</section>
</div>

<section
	class="bg-base-200 border-base-content/30 mx-auto grid max-w-(--breakpoint-2xl) content-center justify-items-center gap-y-12 rounded-4xl border px-2 py-20 lg:-mt-48"
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
				class="border-base-content/30 grid content-start gap-4 rounded-3xl border p-4 lg:ms-20 lg:p-8">
				<button
					class="cursor-pointer py-4 text-center text-4xl font-bold lg:text-6xl"
					onclick={() => (activeCarousel = 'how')}>
					Learn <span class="text-primary">How</span>
				</button>

				<div class="flex flex-wrap justify-center gap-4">
					{#each topics as topic}
						<a href="/learn/{topic.slug}" class="btn btn-primary btn-outline btn-lg rounded-full"
							>{topic.name}</a>
					{/each}
				</div>
			</div>

			<div
				class="border-base-content/30 grid content-start gap-4 rounded-3xl border p-4 lg:me-20 lg:p-8">
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
			<div
				class="relative hidden w-full lg:col-span-2 {activeCarousel === 'how'
					? 'lg:grid'
					: undefined}">
				<button
					onclick={() => {
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
							<div class="card bg-primary/5 border-primary/40 card-md h-96 w-72 border shadow-sm">
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

			<div
				class="relative hidden w-full lg:col-span-2 {activeCarousel === 'why'
					? 'lg:grid'
					: undefined}">
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
							<div class="card border-secondary card-md bg-secondary/5 h-96 w-84 border shadow-sm">
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
	<h2 class="text-center text-4xl font-medium lg:col-span-1 lg:px-20 lg:text-6xl">
		Who Is This For?
	</h2>
	<div class="mb-12 text-center">
		People who do digitalization, digital products. People who need to make decisions, govern, give
		funding.
	</div>
	<div class="grid w-full max-w-[800px] gap-8 lg:grid-cols-2">
		<ul class="border-primary relative grid w-full gap-y-8 rounded-3xl border p-12">
			<li class="mb-8">
				<h3 class="text-primary text-4xl font-medium lg:text-6xl">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						class="icon-park-twotone:muscle text-primary mb-4 h-16 w-16"
						viewBox="0 0 48 48"
						><!-- Icon from All by undefined - undefined --><defs
							><mask id="ipTMuscle0"
								><g fill="none"
									><path
										fill="#555"
										d="M21.37 36c1.45-5.25 6.52-9 12.36-8.38c5.56.59 9.98 5.28 10.26 10.86c.07 1.47-.13 2.88-.56 4.19c-.26.8-1.04 1.33-1.89 1.33H11.758c-5.048 0-8.834-4.619-7.844-9.569L10 4h12l4 7l-8.57 6.13L15 14" /><path
										stroke="#fff"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-miterlimit="2"
										stroke-width="4"
										d="M21.37 36c1.45-5.25 6.52-9 12.36-8.38c5.56.59 9.98 5.28 10.26 10.86c.07 1.47-.13 2.88-.56 4.19c-.26.8-1.04 1.33-1.89 1.33H11.758c-5.048 0-8.834-4.619-7.844-9.569L10 4h12l4 7l-8.57 6.13L15 14m2.44 3.13L22 34" /></g
								></mask
							></defs
						><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTMuscle0)" /></svg
					>Doers
				</h3>
			</li>
			<li class="">
				<h4 class="mb-2 font-bold">Business Devt Lead</h4>
				<p class="text-base-content/70">
					Business benefits if digitalization is done well & cheaper
				</p>
			</li>
			<li class="">
				<h4 class="mb-2 font-bold">Project Managers</h4>
				<p class="text-base-content/70">Run things better</p>
			</li>
			<li class="">
				<h4 class="mb-2 font-bold">Developer</h4>
				<p class="text-base-content/70">Manage people on the other side more effectively</p>
			</li>
			<li class="">
				<h4 class="mb-2 font-bold">Digitalization Lead</h4>
				<p class="text-base-content/70">Do digitalization better</p>
			</li>
		</ul>
		<ul class="border-secondary relative grid w-full content-start gap-y-8 rounded-3xl border p-12">
			<li class="mb-8">
				<h3 class="text-secondary text-4xl font-medium lg:text-6xl">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						class="icon-park-twotone:user-business text-secondary mb-4 h-16 w-16"
						viewBox="0 0 48 48"
						><!-- Icon from IconPark TwoTone by ByteDance - https://github.com/bytedance/IconPark/blob/master/LICENSE --><defs
							><mask id="ipTUserBusiness0"
								><g
									fill="none"
									stroke="#fff"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="4"
									><circle cx="24" cy="12" r="8" fill="#555" /><path
										d="M42 44c0-9.941-8.059-18-18-18S6 34.059 6 44" /><path
										fill="#555"
										d="m24 44l4-5l-4-13l-4 13z" /></g
								></mask
							></defs
						><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTUserBusiness0)" /></svg
					>Leaders
				</h3>
			</li>
			<li class="">
				<h4 class="mb-2 font-bold">Business Owners</h4>
				<p class="text-base-content/70">It's your responsibility</p>
			</li>
			<li class="">
				<h4 class="mb-2 font-bold">Product Owners</h4>
				<p class="text-base-content/70">Your head rolls if your product messes up</p>
			</li>
			<li class="">
				<h4 class="mb-2 font-bold">Funder</h4>
				<p class="text-base-content/70">You're giving money, of course you should git gud</p>
			</li>
		</ul>
	</div>
</section>

<section
	class="mx-auto mt-12 grid min-h-[40vh] max-w-(--breakpoint-2xl) content-center justify-items-center gap-x-8 gap-y-8 px-2 py-12"
	data-pagefind-ignore>
	<h2 class="content-center text-4xl font-medium lg:text-6xl">
		Try <a href="/"><img src={logo} alt="Apptitude logo" class="inline h-10 lg:h-20" /></a>
	</h2>
	<ul class="mb-12 grid gap-y-4 justify-self-center px-2">
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
				>Read Suggestions<svg
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
