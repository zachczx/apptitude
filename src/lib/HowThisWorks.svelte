<script>
	import pandaScientist800 from '$lib/assets/panda-scientist-800.webp';
	import pandaSuperhero from '$lib/assets/panda-superhero.webp?enhanced&w=400';
	import pandaBirds from '$lib/assets/panda-birds.webp?enhanced&w=600';
	import pandaNo from '$lib/assets/panda-no.webp?enhanced&w=400';
	import pandaReading2 from '$lib/assets/panda-reading2.webp?enhanced&w=500';
	import swoleDoge from '$lib/assets/swole-doge.webp?enhanced&w=200';
</script>

<div class="bg-gray-900 px-3 py-10 lg:px-10 lg:py-20">
	<h1
		class="pb-20 pt-10 text-center text-5xl text-lime-400 lg:pt-5 lg:text-6xl xl:text-7xl min-[1921px]:text-8xl">
		How Apptitude Helps You
	</h1>
	<div class="grid gap-x-5 gap-y-10 lg:grid-cols-7">
		<div
			class="card col-span-3 border border-gray-700 bg-base-100 shadow-md shadow-gray-950 transition duration-500 ease-in-out hover:bg-gray-700 lg:col-span-1 lg:row-span-1">
			<div class="card-body grid h-48 content-center">
				<h2
					class="inline-block bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 text-transparent">
					Hello, tech product owner!
				</h2>
			</div>
		</div>

		<div
			class="card col-span-3 row-span-1 border border-gray-700 bg-base-100 shadow-md shadow-gray-950 transition duration-500 ease-in-out hover:bg-gray-700 lg:col-span-4">
			<div class="card-body grid h-48 grid-cols-3 content-center items-center">
				<div class="col-span-2">
					<h3 class="font-medium">Go on a learning journey to upskill and git gud!</h3>
				</div>
				<div>
					<enhanced:img src={swoleDoge} alt="Swole Doge" class="" fetchpriority="low" />
				</div>
			</div>
		</div>

		<div
			class="card col-span-3 h-96 bg-base-100 p-5 lg:col-span-2 lg:row-span-2 lg:h-full"
			style="background-image:url({pandaScientist800}); background-size: cover; background-position:top center;">
		</div>
		<div
			class="card card-side col-span-3 row-span-1 border border-gray-700 bg-base-100 shadow-md shadow-gray-950 transition duration-500 ease-in-out hover:bg-gray-700">
			<div class="card-body grid content-start space-y-2">
				<h2
					class="mb-4 inline-block border-b border-b-base-content bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 pb-3 text-transparent">
					Step 1a: Learn Foundations
				</h2>
				<p>
					With my curated resources across a wide range of tech topics, you'll learn at your own
					pace. Whether that's cloud computing, product management, AI.
				</p>
				<p>
					The resources are spread across websites, YouTube videos, and free online courses, giving
					you flexibility and convenience.
				</p>
				<div class="flex space-x-3 pt-8">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="4rem"
						height="4rem"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="icon icon-tabler icons-tabler-outline icon-tabler-article"
						><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
							d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path
							d="M7 8h10" /><path d="M7 12h10" /><path d="M7 16h10" /></svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="4rem"
						height="4rem"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="icon icon-tabler icons-tabler-outline icon-tabler-brand-youtube"
						><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
							d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" /><path
							d="M10 9l5 3l-5 3z" /></svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="4rem"
						height="4rem"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="icon icon-tabler icons-tabler-outline icon-tabler-world-www"
						><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
							d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" /><path
							d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" /><path
							d="M12.5 3a16.989 16.989 0 0 1 1.828 4" /><path
							d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" /><path
							d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" /><path
							d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" /><path
							d="M2 10l1 4l1.5 -4l1.5 4l1 -4" /><path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" /><path
							d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" /></svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="4rem"
						height="4rem"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="icon icon-tabler icons-tabler-outline icon-tabler-certificate"
						><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
							d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path
							d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" /><path
							d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" /><path
							d="M6 9l12 0" /><path d="M6 12l3 0" /><path d="M6 15l2 0" /></svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="4rem"
						height="4rem"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="icon icon-tabler icons-tabler-outline icon-tabler-brand-google"
						><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
							d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945z" /></svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="4rem"
						height="4rem"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="icon icon-tabler icons-tabler-outline icon-tabler-brand-aws"
						><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
							d="M17 18.5a15.198 15.198 0 0 1 -7.37 1.44a14.62 14.62 0 0 1 -6.63 -2.94" /><path
							d="M19.5 21c.907 -1.411 1.451 -3.323 1.5 -5c-1.197 -.773 -2.577 -.935 -4 -1" /><path
							d="M3 11v-4.5a1.5 1.5 0 0 1 3 0v4.5" /><path d="M3 9h3" /><path
							d="M9 5l1.2 6l1.8 -4l1.8 4l1.2 -6" /><path
							d="M18 10.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" /></svg>
				</div>
			</div>
			<figure>
				<enhanced:img
					src={pandaReading2}
					alt="Panda reading"
					class="h-full rounded-xl object-cover"
					fetchpriority="low"
					sizes="(min-width:1000px) 500px, 300px" />
			</figure>
		</div>

		<div
			class="card col-span-3 row-span-1 border border-gray-700 bg-base-100 shadow-md shadow-gray-950 transition duration-500 ease-in-out hover:bg-gray-700 lg:col-span-2">
			<div class="card-body relative grid content-start space-y-2 overflow-hidden rounded-2xl">
				<h2
					class="mb-4 inline-block border-b border-b-base-content bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 pb-3 text-transparent">
					Step 1b: Apply Knowledge
				</h2>
				<p>Do personal projects, try stuff beyond tutorial copy-pasting or Coursera Labs.</p>
			</div>
		</div>
		<div
			class="card col-span-3 row-span-1 w-full border border-gray-700 bg-base-100 shadow-md shadow-gray-950 transition duration-500 ease-in-out hover:bg-gray-700">
			<div class="card-body grid content-start space-y-2">
				<h2
					class="mb-4 inline-block border-b border-b-base-content bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 pb-3 text-transparent">
					Step 2: Use My Cheatsheets To Revise
				</h2>
				<p>You won't be able to learn everything by yourself in a short time. Or maybe never.</p>
				<p>
					Get a boost by referring to my "Cache Up!" cheatsheets, which give you the essentials I've
					curated from looking at mine and other people's projects.
				</p>
				<p>The good and the bad.</p>
			</div>
		</div>
		<div
			class="card card-side col-span-3 row-span-1 w-full border border-gray-700 bg-base-100 shadow-md shadow-gray-950 lg:col-span-4">
			<figure>
				<enhanced:img
					src={pandaSuperhero}
					alt="Panda Superhero"
					class="h-full rounded-2xl object-cover"
					fetchpriority="low"
					sizes="(min-width:1000px) 500px, 300px" />
			</figure>
			<div
				class=" card-body grid content-start space-y-2 transition duration-500 ease-in-out hover:bg-gray-700">
				<h2
					class="mb-4 inline-block border-b border-b-base-content bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 pb-3 text-transparent">
					Step 3: Better Manage Products & Teams
				</h2>
				<p>
					Lead your products & teams better with all your new knowledge! No one fools you anymore.
				</p>
				<p>Never again will you need to say "I don't know and can only trust you on this".</p>
			</div>
		</div>
		<div
			class="card card-side col-span-3 row-span-1 w-full border border-gray-700 bg-base-100 shadow-md shadow-gray-950 lg:col-span-4">
			<figure>
				<enhanced:img
					src={pandaNo}
					fetchpriority="low"
					alt="No!"
					class="h-full rounded-xl object-cover" />
			</figure>
			<div
				class="card-body grid content-start space-y-2 transition duration-500 ease-in-out hover:bg-gray-700">
				<h2
					class="mb-4 inline-block border-b border-b-base-content bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 pb-3 text-transparent">
					Step 4: Say "No!" to Shitty Products
				</h2>
				<p>
					Use your upgraded judgement and trust that you're 10x better than you were. Gain
					confidence in your judgement to terminate useless products. Stop underperforming projects
					in their tracks.
				</p>
			</div>
		</div>

		<div
			class="card col-span-3 row-span-1 w-full border border-gray-700 bg-base-100 shadow-md shadow-gray-950 transition duration-500 ease-in-out hover:bg-gray-700 lg:col-span-2">
			<div class="card-body grid content-center justify-center space-y-2">
				<h2
					class="inline-block bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 text-transparent">
					Now that's truly Tech for Public Good
				</h2>
			</div>
		</div>
		<div class="col-span-3 row-span-1 lg:col-span-1">
			<enhanced:img
				src={pandaBirds}
				alt="Feels good"
				class="rounded-xl"
				fetchpriority="low"
				sizes="(min-width:1000px) 500px, 300px" />
		</div>
	</div>
</div>
