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
<div class="grid content-start justify-items-center py-24 lg:min-h-[60vh]" data-pagefind-ignore>
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
				Let's fix that together.
			</p>

			<div class="mb-12 flex flex-wrap justify-center gap-4">
				<a
					href="/learn"
					aria-label="See Resources"
					class="group btn btn-primary border-primary rounded-full border py-8 text-lg font-bold ring-2 shadow-teal-300/50 ring-gray-100/30 hover:shadow-lg lg:px-8 lg:text-2xl"
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
	class="bg-base-200 border-base-content/30 mx-auto grid max-w-(--breakpoint-2xl) content-center justify-items-center gap-y-12 rounded-4xl border px-2 py-20 lg:px-20"
	data-pagefind-ignore>
	<h2 class="text-center text-4xl font-medium lg:col-span-1 lg:text-6xl">Why You Need This</h2>
	<div>
		<div class="mb-12 text-center">
			To lead and do better in tech, you'll need foundational tech knowledge and business
			perspectives.
		</div>

		<div class="grid content-start gap-8 lg:grid-cols-2">
			<div class="border-base-content/30 grid content-start gap-4 rounded-2xl border p-4 lg:p-8">
				<h3 class="py-4 text-center text-4xl font-bold lg:text-6xl">
					Learn <span class="text-info">How</span>
				</h3>

				<div class="flex flex-wrap justify-center gap-4">
					<div>
						<a href="/learn" class="btn btn-info btn-outline btn-lg rounded-full">Computing</a>
					</div>
					<div>
						<a href="/learn" class="btn btn-info btn-outline btn-lg rounded-full">Internet</a>
					</div>
					<div>
						<a href="/learn" class="btn btn-info btn-outline btn-lg rounded-full">Workplace Apps</a>
					</div>
					<div>
						<a href="/learn" class="btn btn-info btn-outline btn-lg rounded-full">Central Tools</a>
					</div>
					<div><a href="/learn" class="btn btn-info btn-outline btn-lg rounded-full">UX</a></div>
					<div>
						<a href="/learn" class="btn btn-info btn-outline btn-lg rounded-full">Products</a>
					</div>
					<div>
						<a href="/learn" class="btn btn-info btn-outline btn-lg rounded-full">Methodology</a>
					</div>
					<div>
						<a href="/learn" class="btn btn-info btn-outline btn-lg rounded-full">Data</a>
					</div>
					<div><a href="/learn" class="btn btn-info btn-outline btn-lg rounded-full">AI</a></div>
					<div>
						<a href="/learn" class="btn btn-info btn-outline btn-lg rounded-full">Web Dev</a>
					</div>
				</div>
			</div>

			<div class="border-base-content/30 grid content-start gap-4 rounded-2xl border p-4 lg:p-8">
				<h3 class="py-4 text-center text-4xl font-bold lg:text-6xl">
					Think <span class="text-secondary">Why</span>
				</h3>

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
				class="group hover:border-b-primary hover:text-primary ms-2 flex gap-2 border-b"
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
				class="group hover:border-b-primary hover:text-primary ms-2 flex gap-2 border-b"
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
