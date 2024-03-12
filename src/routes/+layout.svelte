<script>
	import '../app.css';
	import logo from '$lib/assets/atom_logo.webp';
	import PageTransition from '$lib/Transition.svelte';
	export let data;
</script>

<div class="navbar mb-10 bg-base-100 lg:mb-20">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
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
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</div>
			<ul
				tabindex="0"
				class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
			>
				<li><a href="/skills">The Skill Forge</a></li>
				<li><a href="/cacheup">Cache Up!</a></li>
				<li><a href="/todo">To-Do List</a></li>
				<li><a href="/faq">FAQs</a></li>
			</ul>
		</div>
		<a href="/" class="btn btn-ghost text-3xl"
			><img src={logo} width="60" height="60" class="max-w-full" />Apptitude</a
		>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal gap-x-3 px-1">
			<li>
				<a href="/skills">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-bulb-filled"
						width="30"
						height="30"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
							d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"
							stroke-width="0"
							fill="currentColor"
						/><path
							d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"
							stroke-width="0"
							fill="currentColor"
						/><path
							d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"
							stroke-width="0"
							fill="currentColor"
						/><path
							d="M4.893 4.893a1 1 0 0 1 1.32 -.083l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 0 -1.414z"
							stroke-width="0"
							fill="currentColor"
						/><path
							d="M17.693 4.893a1 1 0 0 1 1.497 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7z"
							stroke-width="0"
							fill="currentColor"
						/><path
							d="M14 18a1 1 0 0 1 1 1a3 3 0 0 1 -6 0a1 1 0 0 1 .883 -.993l.117 -.007h4z"
							stroke-width="0"
							fill="currentColor"
						/><path
							d="M12 6a6 6 0 0 1 3.6 10.8a1 1 0 0 1 -.471 .192l-.129 .008h-6a1 1 0 0 1 -.6 -.2a6 6 0 0 1 3.6 -10.8z"
							stroke-width="0"
							fill="currentColor"
						/></svg
					>
					The Skill Forge</a
				>
			</li>
			<li>
				<a href="/cacheup"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-wand"
						width="30"
						height="30"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
							d="M6 21l15 -15l-3 -3l-15 15l3 3"
						/><path d="M15 6l3 3" /><path
							d="M9 3a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"
						/><path d="M19 13a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" /></svg
					> Cache Up!</a
				>
			</li>
			<li>
				<a href="/todo"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-list-check"
						width="30"
						height="30"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
							d="M3.5 5.5l1.5 1.5l2.5 -2.5"
						/><path d="M3.5 11.5l1.5 1.5l2.5 -2.5" /><path d="M3.5 17.5l1.5 1.5l2.5 -2.5" /><path
							d="M11 6l9 0"
						/><path d="M11 12l9 0" /><path d="M11 18l9 0" /></svg
					> To-Dos</a
				>
			</li>
			<li>
				<a href="/faq">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="30"
						height="30"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="icon icon-tabler icons-tabler-outline icon-tabler-help-circle"
						><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
							d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"
						/><path d="M12 16v.01" /><path
							d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"
						/></svg
					>
					FAQs
				</a>
			</li>
		</ul>
	</div>
</div>

<PageTransition url={data.url}>
	<slot />
</PageTransition>

<footer class="footer footer-center mb-5 mt-[7rem] text-base-content">
	<aside>
		<p>Copyright © 2024 Zixian Chen. All rights reserved.</p>
	</aside>
</footer>
