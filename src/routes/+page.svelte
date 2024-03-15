<script>
	import sgneopunk from '$lib/assets/sgneopunk.webp?enhanced&w=1714;640;400';
	import { slide } from 'svelte/transition';
	import hero from '$lib/assets/kari-shea-1SAnrIxw5OY-unsplash.webp?enhanced&w=2560;1080;400';

	let seeMore = false;
</script>

<div class="grid grid-cols-1 justify-items-center gap-x-8 gap-y-8 px-5 lg:grid-cols-2 lg:px-20">
	<div class="lg:ps-[10rem] text-center self-center">
		<h1>Make <span class="text-primary">better tech decisions</span> for Govt products.</h1>
				</div>
				<div class="text-lg lg:pe-20">
					<p class="mb-5"><span class="text-primary font-bold">Apptitude</span> helps you learn new competencies and what good tech decisions look like, so you can improve outcomes for your tech products and projects.</p>
					<p class="mb-5">Stop the buck where it's at. Your users and customers deserve good products at the lowest cost. </p>
					<p class="mb-5">Right the wrongs of tech in the public sector. The slow, laggy, bloated apps. The overspending. The timeline delays.</p>
					<p class="mt-10 mb-5 space-x-5"><a href="/skills" class="btn btn-primary text-xl">Start Learning</a>
					<a href="/cacheup" class="btn btn-primary btn-outline text-xl">Quickstart Guides</a></p>
				</div>
	<div class="avatar flex lg:w-2/3 px-12 lg:col-span-2 mt-5">
		<div class="rounded-full">
			<enhanced:img
				src={hero}
				alt="Hero"
				sizes="(min-width:1920px) 2560px, (min-width:1080px) 1080px, (min-width:768px) 400px"
			></enhanced:img>
		</div>
	</div>
</div>