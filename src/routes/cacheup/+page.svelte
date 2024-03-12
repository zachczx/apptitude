<script>
  import {cacheup} from "./data_cacheup";
</script>

<div class="mb-10 text-center lg:mb-20">
	<h1
		class="inline-block bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 text-transparent"
	>
		Cache Up!
	</h1>
</div>

<div class="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-x-8 gap-y-8 px-5 lg:px-20">

  {#each cacheup as item, i}
<div class="card w-full h-96 bg-gradient-to-t from-orange-500 to-pink-700 shadow-xl hover:from-orange-400 hover:to-pink-800 grid content-center">
    <div class="card-body text-center">
      <a href="/cacheup/{item.slug}"><h1 class="mb-3">{item.name}</h1>
      <i>{item.tagline}</i>
    </a>
    </div>
</div>
{/each}
</div>