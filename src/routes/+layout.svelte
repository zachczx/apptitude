<script>
	import '../app.css';
	import logo from '$lib/assets/skilldrilllogo_resized.webp';
</script>

<div class="navbar bg-base-100 mb-10">
	<div class="navbar-start">
	  <div class="dropdown">
		<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
		  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
		</div>
		<ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
			<li><a href="/buckets">Competency Buckets</a></li>
			<li><a href="/wizard">Competency Wizard</a></li>
			<li><a href="/todo">To-Do List</a></li>
		</ul>
	  </div>
	  <a class="btn btn-ghost text-xl"><img src={logo} width="70" height="70" class="max-w-full"> The Skill Drill</a>
	</div>
	<div class="navbar-center hidden lg:flex">
	  <ul class="menu menu-horizontal px-1">
		<li><a href="/buckets">Competency Buckets</a></li>
		<li><a href="/wizard">Competency Wizard</a></li>
		<li><a href="/todo">To-Do List</a></li>
    </ul>
  </div>
  <div class="navbar-end">

  </div>
</div>

<slot />

<footer class="footer footer-center p-4 bg-base-100 text-base-content">
	<aside>
	  <p>Copyright © 2024 Zixian Chen. All rights reserved.</p>
	</aside>
  </footer>