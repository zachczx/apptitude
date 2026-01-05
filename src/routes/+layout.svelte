<script lang="ts">
	import logo from '$lib/assets/new-logo.webp?w=150&enhanced';
	import { matchUrl } from '$lib/helpers';
	import '../app.css';
	import { onNavigate } from '$app/navigation';

	let { data, children } = $props();
	let cat = $derived(data.category);

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<nav
	class="bg-base-100 border-b-base-content/0 fixed inset-x-0 top-0 z-10 h-14 border-b-2 shadow-sm backdrop-blur-3xl lg:grid lg:grid-cols-3 lg:content-center"
	data-pagefind-ignore>
	<div class="flex items-center justify-between px-2 lg:px-4">
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
						></svg
					>Learn</a>
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
							color="currentColor" /></svg
					>Thoughts</a>

				<!-- <a class="active:text-primary p-1 hover:rounded-b-lg active:font-bold" href="/about"
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
						></svg
					>About</a> -->
			</nav>
		</div>
		<a href="/" class="text-primary text-3xl font-bold" aria-label="logo">
			<enhanced:img src={logo} alt="Apptitude logo" fetchpriority="high" />
		</a>
		<div class="flex items-center justify-end text-lg lg:hidden">
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
	</div>
	<div class="hidden items-center justify-center lg:flex">
		<ul class="menu menu-horizontal flex w-full justify-center font-medium">
			<li aria-current={matchUrl(data.url, '/learn') === 0 ? 'page' : undefined}>
				<a
					class={[
						'hover:text-primary flex min-w-32 items-center justify-center text-lg hover:bg-transparent',
						cat === 'learn' && 'highlight font-bold',
					]}
					href="/learn">Docs</a>
			</li>
			<li aria-current={matchUrl(data.url, '/guides') === 0 ? 'page' : undefined}>
				<a
					class={[
						'hover:text-primary flex min-w-32 items-center justify-center text-lg hover:bg-transparent',
						cat === 'guides' && 'highlight font-bold',
					]}
					href="/guides">Playbook</a>
			</li>
			<!-- <li aria-current={matchUrl(data.url, '/about') === 0 ? 'page' : undefined}>
				<a
					class="hover:text-primary text-lg hover:bg-transparent {cat === 'about'
						? 'highlight'
						: undefined}"
					href="/about">About</a>
			</li> -->
		</ul>
	</div>
	<div class="hidden items-center justify-end text-lg lg:flex">
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

<div class="pt-12">{@render children()}</div>

<style>
	.highlight::after {
		content: '';
		height: 0.25rem;
		width: 100%;
		border-radius: 20px;
		position: absolute;
		top: 115%;
		left: 0;
		background-color: var(--color-primary);
		view-transition-name: current-page;
	}
</style>
