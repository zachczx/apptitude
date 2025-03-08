<script>
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
	let { data } = $props();
	let pageName = $state('Apptitude');
</script>

<svelte:head>
	<title>{pageName}</title>
</svelte:head>

<nav
	class="absolute z-[2] flex h-14 w-full lg:grid lg:grid-cols-3 lg:content-center"
	data-pagefind-ignore>
	<div class="flex items-center px-2 lg:px-4">
		<div class="dropdown lg:hidden">
			<div
				tabindex="0"
				role="button"
				class="btn btn-ghost -ms-3 bg-transparent focus:border-0 active:border-0">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16" /></svg>
			</div>
			<nav class="menu dropdown-content bg-base-100 z-50 w-48 rounded-lg text-lg">
				<a class="border-b-base-100 active:text-primary border-b p-1 hover:rounded-t-lg" href="/"
					><svg
						id="hugeicons:house-01"
						xmlns="http://www.w3.org/2000/svg"
						class="stroke-base-content me-2 mb-1 inline"
						width="1em"
						height="1em"
						viewBox="0 0 24 24"
						><g
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							color="currentColor"
							><path
								d="M13 2L2 7m10-4v19H7c-1.886 0-2.828 0-3.414-.586S3 19.886 3 18V7m9 0l10 5" /><path
								d="M10 22h7c1.886 0 2.828 0 3.414-.586S21 19.885 21 18v-6.5M18 10V7M7 11h1m-1 4h1m8-1h1m-.5 8v-4" /></g
						></svg> Home</a>
				<a
					class="border-b-base-100 active:text-primary border-b p-1 hover:rounded-t-lg"
					href="/learn"
					><svg
						id="hugeicons:elearning-exchange"
						xmlns="http://www.w3.org/2000/svg"
						class="stroke-base-content me-2 mb-1 inline"
						width="1em"
						height="1em"
						viewBox="0 0 24 24"
						><g
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							color="currentColor"
							><path
								d="M2.459 9c1.277-4.057 5.077-7 9.566-7c5.198 0 9.472 3.947 9.975 9l-2-.407M21.541 15a10.03 10.03 0 0 1-9.566 7C6.777 22 2.503 18.053 2 13l2 .407" /><path
								d="M9.002 13.528v1.992a.95.95 0 0 0 .432.81c.844.528 1.485.683 2.571.716c1.001.027 1.629-.13 2.563-.714a.96.96 0 0 0 .44-.82v-1.984m2.003-2.513v3.015M7.05 10.844c.362-.764 2.605-2.094 4.652-2.751a.93.93 0 0 1 .604.014c1.81.662 3.824 1.665 4.555 2.478c.381.425.008.967-.453 1.302c-.937.681-1.97 1.21-4.058 2.013a.98.98 0 0 1-.688.005c-2.14-.795-4.142-1.82-4.595-2.723a.39.39 0 0 1-.017-.338" /></g
						></svg> Learn</a>
				<a
					class="border-b-base-100 active:text-primary border-b p-1 active:font-bold"
					href="/guides"
					><svg
						id="hugeicons:online-learning-01"
						xmlns="http://www.w3.org/2000/svg"
						class="stroke-base-content me-2 mb-1 inline"
						width="1em"
						height="1em"
						viewBox="0 0 24 24"
						><path
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M6.583 7.238c3.007.53 4.799 1.639 5.417 2.276c.618-.637 2.41-1.746 5.418-2.276c1.523-.269 2.285-.403 2.933.112C21 7.864 21 8.7 21 10.372v6.007c0 1.529 0 2.293-.416 2.77c-.417.477-1.333.639-3.166.962c-1.635.288-2.91.747-3.833 1.208c-.909.454-1.363.681-1.585.681s-.677-.227-1.585-.68c-.923-.462-2.198-.921-3.832-1.21c-1.834-.322-2.75-.484-3.167-.961S3 17.908 3 16.379v-6.007C3 8.7 3 7.864 3.649 7.35c.648-.515 1.41-.38 2.933-.112M12 9v13M8.5 3.059a6.29 6.29 0 0 1 7 .01M13.622 5.5a3.14 3.14 0 0 0-3.244-.01"
							color="currentColor" /></svg> Guides</a>

				<a class="active:text-primary p-1 hover:rounded-b-lg active:font-bold" href="/about"
					><svg
						id="hugeicons:help-circle"
						xmlns="http://www.w3.org/2000/svg"
						class="stroke-base-content me-2 mb-1 inline"
						width="1em"
						height="1em"
						viewBox="0 0 24 24"
						><g
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							color="currentColor"
							><circle cx="12" cy="12" r="10" /><path
								d="M10 9a2 2 0 1 1 3.683 1.08C13.085 11.01 12 11.896 12 13v.5m-.008 3.5h.009" /></g
						></svg> About</a>
			</nav>
		</div>
		<a href="/"
			><img
				src={logo}
				alt="Apptitude logo"
				fetchpriority="high"
				height="56"
				width="200"
				class="h-12" /></a>
	</div>
	<div class="hidden items-center justify-center lg:flex">
		<ul class="menu menu-horizontal flex w-full justify-around font-medium">
			<!-- removed menu class -->
			<li aria-current={matchUrl(data.url, '/learn') === 0 ? 'page' : undefined}>
				<a class="hover:text-primary text-lg hover:bg-transparent" href="/learn">Learn</a>
			</li>
			<li aria-current={matchUrl(data.url, '/guides') === 0 ? 'page' : undefined}>
				<a class="hover:text-primary text-lg hover:bg-transparent" href="/guides">Guides</a>
			</li>
			<li aria-current={matchUrl(data.url, '/about') === 0 ? 'page' : undefined}>
				<a class="hover:text-primary text-lg hover:bg-transparent" href="/about">About</a>
			</li>
		</ul>
	</div>
	<div class="navbar-end flex w-full items-center justify-end text-lg">
		<a href="/search" class="px-2 lg:px-4" aria-label="search"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="1.3em"
				height="1.3em"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="icon icon-tabler icons-tabler-outline icon-tabler-search"
				><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
					d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
		</a>
	</div>
</nav>
<div
	class="hero grid min-h-dvh grid-cols-1 content-center justify-items-center xl:grid-cols-2"
	data-pagefind-ignore>
	<figure>
		<enhanced:img
			src={heroNew2Background}
			alt="Hero"
			class="hero-img -z-10"
			fetchpriority="high"
			loading="eager" />
		<enhanced:img
			src={heroNew2}
			alt="Hero"
			class="hero-img"
			fetchpriority="high"
			loading="eager"
			sizes="(min-width:2560px) 2060px, (min-width:1920px) 1536px, (min-width:1600px) 1280px, (min-width:1280px) 1024px" />
	</figure>
	<div class="mx-3 self-center justify-self-center rounded-full pt-4 lg:z-[1] lg:mx-8 xl:px-[3rem]">
		<div class="avatar mt-20 mb-8 flex justify-center px-4 text-center xl:mt-0 xl:hidden">
			<div class="mask mask-squircle">
				<enhanced:img
					src={heroNew2}
					alt="Hero"
					class="relative object-right"
					sizes="(min-width:1000px) 600px, (min-width:768px) 500px, 300px" />
			</div>
		</div>
		<h1 class="mb-12 text-center text-5xl font-bold min-[1921px]:text-7xl lg:pt-20 lg:text-6xl">
			<span class="headline text-neutral-content">Get better at</span>
			<span
				class="headline-slower inline-block bg-linear-to-r from-emerald-200 via-lime-200 to-teal-300 bg-clip-text pb-5 text-transparent"
				>tech products & projects.</span>
		</h1>
		<div class="text-neutral-content mb-12 grid grid-cols-3 py-2 text-start text-lg lg:text-xl">
			<div class="subheadline border-base-content/50 border-r-2 py-1 pe-3 text-center">
				<h2 class="text-2xl font-bold lg:text-4xl">Learn</h2>
				key digital product knowledge
			</div>
			<div class="subheadline border-base-content/50 border-r-2 py-1 ps-3 pe-3 text-center">
				<h2 class="text-2xl font-bold lg:text-4xl">Better</h2>
				digital product management
			</div>
			<div class="subheadline py-1 ps-3 text-center">
				<h2 class="text-2xl font-bold lg:text-4xl">Drop</h2>
				lousy & unnecessary projects
			</div>
		</div>
		<div class="flex flex-wrap justify-center gap-4">
			<a
				href="/learn"
				class="button-shine btn btn-primary border-primary relative overflow-hidden rounded-full border py-8 font-bold lg:px-8 lg:text-2xl"
				>Get Resources<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1.3em"
					height="1.3em"
					stroke="currentColor"
					viewBox="0 0 24 24"
					><path
						d="m13.692 17.308l-.707-.72l4.088-4.088H5v-1h12.073l-4.088-4.088l.707-.72L19 12z" /></svg
				></a>
			<a
				href="/guides"
				class="btn btn-outline btn-secondary rounded-full py-8 font-medium lg:px-8 lg:text-2xl"
				>Practical Guides</a>
		</div>
	</div>
</div>

<div>
	<section
		class="mx-auto grid min-h-[70vh] max-w-[1200px] content-center gap-y-16 px-4 py-10 lg:grid-cols-1 lg:gap-x-20 lg:gap-y-0 lg:py-28"
		data-pagefind-ignore>
		<h1 class="text-center text-4xl font-bold lg:col-span-1 lg:pb-24 lg:text-8xl">
			Tech can be frustrating.
		</h1>
		<div
			class="flex max-h-[40rem] grid-cols-2 flex-wrap items-center justify-center gap-x-12 gap-y-4 lg:flex-nowrap">
			<div class="min-w-72">
				<enhanced:img src={fireBurning} alt="" class="rounded-3xl" />
			</div>
			<div class="grid gap-4">
				<h3 class="text-2xl font-bold lg:text-4xl">Poor Outcomes</h3>
				<p class="text-base">
					Don't we always come across examples where we think the project's pointless but we're
					doing it anyway because a PS asked for it. Or a vendor is charging us an arm and a leg,
					but we need to do it anyway. Or a project under us is so unusable, but we've already sunk
					all our effort and money into it to u-turn.
				</p>
			</div>
		</div>
		<div
			class="flex max-h-[40rem] grid-cols-2 flex-wrap items-center justify-center gap-x-12 gap-y-4 lg:flex-nowrap lg:ps-[300px]">
			<div class="min-w-72">
				<enhanced:img src={pandaExhausted} alt="" class="rounded-3xl" />
			</div>
			<div class="grid gap-4">
				<h3 class="text-2xl font-bold lg:text-4xl">Help Ma, I can't keep up!</h3>
				<p class="text-base">
					Tech moves so dizzying fast it's daunting to know where to start or keep up. So easy to
					get imposter syndrome.
				</p>
				<p>AI, tech stacks, databases, cloud, software-as-a-service, hardware.</p>
			</div>
		</div>
		<div
			class="flex max-h-[40rem] grid-cols-2 flex-wrap items-center justify-center gap-x-12 gap-y-4 lg:flex-nowrap">
			<div class="min-w-72">
				<enhanced:img src={pandaConfused} alt="" class="rounded-3xl" />
			</div>
			<div class="grid gap-4">
				<h3 class="text-2xl font-bold lg:text-4xl">Individuals</h3>
				<p class="text-base">
					Haven't we worked with people who know so little about tech or don't even know they're
					clueless? Yet we must consult them or get their approval just because it's in their job
					designation?
				</p>
				<p>
					(Of course they're experts at "management" and "strategy", or because they were engineers
					30 years ago working on Visual Basic.)
				</p>
			</div>
		</div>
	</section>
</div>

<section class="min-h-dvh px-4 py-8" data-pagefind-ignore>
	<div><img src={burning} alt="" class="w-full" /></div>
	<div class="mx-auto grid w-full max-w-(--breakpoint-2xl) gap-8 py-16 lg:grid-cols-3">
		<div class="flex items-center justify-center text-center lg:col-span-3 lg:min-h-36">
			<h2 class="text-center text-4xl font-bold lg:col-span-1 lg:pb-24 lg:text-8xl">
				No one likes this...
			</h2>
		</div>
		<div class="grid gap-x-8 lg:col-span-3">
			<div class="flex min-h-36 items-center justify-center text-center lg:col-span-3">
				<h3 class="text-4xl font-bold">Not the ones doing the work.</h3>
			</div>

			<div
				class="grid content-center justify-items-center space-y-4 rounded-2xl text-center lg:p-8">
				<div class="avatar">
					<div class="w-56 rounded-full">
						<enhanced:img src={pandaAnnoyed} alt="" />
					</div>
				</div>
				<div class="space-y-4">
					<h3 class="text-2xl lg:text-4xl">Developers</h3>
					<p>
						Hate needing to teach non-technical folks basic stuff, worse if you need to do
						papers/slides.
					</p>
				</div>
			</div>

			<div
				class="grid content-center justify-items-center space-y-4 rounded-2xl text-center lg:p-8">
				<div class="avatar">
					<div class="w-56 rounded-full">
						<enhanced:img src={pandaSuperhero} alt="" />
					</div>
				</div>
				<div class="space-y-4">
					<h3 class="text-2xl lg:text-4xl">Staffers</h3>
					<p>
						You need to staff your bosses, but you don't know much. So you need to ask your
						technical POCs for everything.
					</p>
				</div>
			</div>

			<div
				class="grid content-center justify-items-center space-y-4 rounded-2xl text-center lg:p-8">
				<div class="avatar">
					<div class="w-56 rounded-full">
						<enhanced:img src={unoptimised1} alt="" />
					</div>
				</div>
				<div class="space-y-4">
					<h3 class="text-2xl lg:text-4xl">Planners</h3>
					<p>You can't tell if your plans are good or bad.</p>
				</div>
			</div>
		</div>
		<div class="flex min-h-36 items-center justify-center text-center lg:col-span-3">
			<h2 class=" text-4xl font-bold">Neither do these important people.</h2>
		</div>

		<div class="grid content-center justify-items-center space-y-4 rounded-2xl text-center lg:p-8">
			<div class="avatar">
				<div class="w-56 rounded-full">
					<enhanced:img src={pandaBoss} alt="" />
				</div>
			</div>
			<div class="space-y-4">
				<h3 class="text-2xl lg:text-4xl">Middle Managers</h3>
				<p>
					You're expected to lead, but you don't know how. When something goes wrong, you don't know
					why.
				</p>
			</div>
		</div>

		<div class="grid content-center justify-items-center space-y-4 rounded-2xl text-center lg:p-8">
			<div class="avatar">
				<div class="w-56 rounded-full">
					<enhanced:img src={pandaSeniorMgmt} alt="" />
				</div>
			</div>
			<div class="space-y-4">
				<h3 class="text-2xl lg:text-4xl">Senior Management</h3>
				<p>
					Fait accompli proposals. Delays. Unknown trade-offs and risks. Not sure how to question or
					decide.
				</p>
			</div>
		</div>

		<div class="grid content-center justify-items-center space-y-4 rounded-2xl text-center lg:p-8">
			<div class="avatar">
				<div class="w-56 rounded-full">
					<enhanced:img src={pandaAnnoyedAlt} alt="" />
				</div>
			</div>
			<div class="space-y-4">
				<h3 class="text-2xl lg:text-4xl">Citizens</h3>
				<p>Why do tech products suck? Surely no one's that dumb, right?</p>
			</div>
		</div>
	</div>
</section>

<div>
	<section
		class="mx-auto grid min-h-[70vh] max-w-(--breakpoint-2xl) content-center justify-items-center gap-x-8 gap-y-8 px-2 py-10"
		data-pagefind-ignore>
		<h2 class="text-center text-4xl font-bold lg:col-span-1 lg:pb-12 lg:text-8xl">
			You might not need the resources here...
		</h2>

		<ul class="grid max-w-[1000px] content-center gap-8 lg:grid-cols-2">
			<li class="border-base-content/30 grid content-center gap-4 rounded-2xl border p-4 lg:p-8">
				<h3 class="text-2xl font-bold lg:text-4xl">You're already skilled</h3>
				<p>
					If you're highly technical or a principal engineer, you're way more skilled. The resources
					here won't match your level!
				</p>
			</li>
			<li class="border-base-content/30 grid content-center gap-4 rounded-2xl border p-4 lg:p-8">
				<h3 class="text-2xl font-bold lg:text-4xl">It's no big deal</h3>
				<p>
					If there are no users, users can't complain, or it's just an obscure system that costs
					nothing.
				</p>
			</li>
		</ul>
	</section>
	<section
		class="mx-auto grid min-h-[70vh] max-w-(--breakpoint-2xl) content-center justify-items-center gap-x-8 gap-y-8 px-2 py-10"
		data-pagefind-ignore>
		<h2 class="text-center text-4xl font-bold lg:col-span-1 lg:pb-12 lg:text-8xl">
			But if learning more helps your outcomes,
		</h2>

		<a
			href="/learn"
			class="btn btn-primary h-auto rounded-full px-8 py-4 text-4xl shadow-lg shadow-lime-400/50 lg:min-w-96"
			>Get Resources</a>
	</section>
</div>

<style>
	:root {
		--myBlur: 20px;
	}

	@keyframes headline-blur {
		from {
			filter: blur(var(--myBlur));
		}
	}

	.button-shine::before {
		content: '';
		position: absolute;
		width: 2rem;
		left: -3rem;
		height: 130%;
		background-color: white;
		transform: skew(-30deg) translateX(var(--moveRight));
		opacity: 0.7;
		filter: blur(20px);
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

	@media (min-width: 1281px) {
		.hero {
			position: relative;
		}
	}
	@media (max-width: 1280px) {
		.hero-img {
			max-height: 0px;
		}
	}
	@media (min-width: 1281px) {
		.hero-img {
			object-fit: cover;
			object-position: 70% center;
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
		}
	}
</style>
