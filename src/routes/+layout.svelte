<script>
	import '../app.css';
	import logo from '$lib/assets/logo_tree.webp';
	import PageTransition from '$lib/Transition.svelte';
	export let data;
</script>

<div class="navbar bg-base-100 mb-10">
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
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li><a href="/buckets">Competency Buckets</a></li>
				<li><a href="/consult">Consult Z</a></li>
				<li><a href="/todo">To-Do List</a></li>
			</ul>
		</div>
		<a href="/" class="btn btn-ghost text-3xl"
			><img src={logo} width="60" height="60" class="max-w-full" /> Zixian's GitWitty</a
		>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li>
				<a href="/buckets"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-bucket-droplet"
						width="30"
						height="30"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
							d="M5 16l1.465 1.638a2 2 0 1 1 -3.015 .099l1.55 -1.737z"
						/><path
							d="M13.737 9.737c2.299 -2.3 3.23 -5.095 2.081 -6.245c-1.15 -1.15 -3.945 -.217 -6.244 2.082c-2.3 2.299 -3.231 5.095 -2.082 6.244c1.15 1.15 3.946 .218 6.245 -2.081z"
						/><path
							d="M7.492 11.818c.362 .362 .768 .676 1.208 .934l6.895 4.047c1.078 .557 2.255 -.075 3.692 -1.512c1.437 -1.437 2.07 -2.614 1.512 -3.692c-.372 -.718 -1.72 -3.017 -4.047 -6.895a6.015 6.015 0 0 0 -.934 -1.208"
						/></svg
					> Competency Buckets</a
				>
			</li>
			<li>
				<a href="/consult"
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
					> Consult Z</a
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
					> To-Do List</a
				>
			</li>
		</ul>
	</div>
</div>

<PageTransition url={data.url}>
	<slot />
</PageTransition>

<footer class="footer footer-center mt-[7rem] mb-5 text-base-content">
	<aside>
		<p>Copyright © 2024 Zixian Chen. All rights reserved.</p>
	</aside>
</footer>
