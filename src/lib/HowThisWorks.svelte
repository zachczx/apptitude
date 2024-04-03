<script>
	import pandaScientist from '$lib/assets/panda-scientist.webp';
	import pandaSuperhero from '$lib/assets/panda-superhero.webp?enhanced&w=800';
	import pandaBirds from '$lib/assets/panda-birds.webp?enhanced';
	import pandaExperiment from '$lib/assets/panda-experiment.webp?enhanced';
	import pandaExperiment2 from '$lib/assets/panda-experiment2.webp?enhanced';
	import pandaNo from '$lib/assets/panda-no.webp?enhanced';
	import pandaReading from '$lib/assets/panda-reading.webp?enhanced';
</script>

<div class="bg-gray-900 px-3 pt-12 lg:px-10 lg:py-20">
	<h1 class="py-12 text-center text-5xl text-primary lg:text-6xl xl:text-7xl min-[1921px]:text-8xl">
		How this works
	</h1>
	<div class="grid gap-x-4 gap-y-4 lg:grid-cols-7">
		<div class="card bg-base-100 lg:col-span-1 lg:row-span-1">
			<div class="card-body grid h-48 content-center">
				<h2
					class="inline-block bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 text-transparent"
				>
					Hello, tech product owner!
				</h2>
			</div>
		</div>

		<div class="card col-span-3 row-span-1 bg-base-100">
			<div class="card-body grid grid h-48 content-center">
				<h2 class="font-medium">
					Realizing you lack competencies is the first step towards product-owning greatness.
				</h2>
			</div>
		</div>
		<div class="card col-span-1 row-span-1 bg-base-100">
			<div class="card-body grid h-48 content-center">
				<h2 class="font-medium">Let's get you learning!</h2>
			</div>
		</div>
		<div
			class="card col-span-2 row-span-2 bg-base-100 p-5"
			style="background-image:url({pandaScientist}); background-size: cover; background-position:top center;"
		></div>
		<div class="card col-span-2 row-span-1 bg-base-100">
			<div class="card-body grid content-start space-y-2">
				<h2
					class="mb-4 inline-block border-b border-b-base-content bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 pb-3 text-transparent"
				>
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
			</div>
		</div>
		<div class="col-span-1 row-span-1">
			<enhanced:img src={pandaReading} alt="Panda reading" class="h-full rounded-xl object-cover" />
		</div>
		<div class="card col-span-2 row-span-1 bg-base-100">
			<div class="card-body relative grid content-start space-y-2 overflow-hidden">
				<h2
					class="mb-4 inline-block border-b border-b-base-content bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 pb-3 text-transparent"
				>
					Step 1b: Apply Knowledge
				</h2>
				<p>Do personal projects, try stuff beyond tutorial copy-pasting or Coursera Labs.</p>
			</div>
		</div>
		<div class="card col-span-3 row-span-1 w-full bg-base-100">
			<div class="card-body grid content-start space-y-2">
				<h2
					class="mb-4 inline-block border-b border-b-base-content bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 pb-3 text-transparent"
				>
					Step 2: Use My Cheatsheets To Revise
				</h2>
				<p>You won't be able to learn everything by yourself in a short time. Or maybe never.</p>
				<p>
					Get a boost by referring to my "Cache Up!" cheatsheets comprising key questions that
					needed to be but weren't answered while watching awful products & projects imploded.
				</p>
			</div>
		</div>
		<div class="col-span-1 row-span-1">
			<enhanced:img
				src={pandaSuperhero}
				alt="Panda Superhero"
				class="h-full rounded-xl object-cover"
			/>
		</div>
		<div class="card col-span-3 row-span-1 w-full bg-base-100">
			<div class="card-body grid content-start space-y-2">
				<h2
					class="mb-4 inline-block border-b border-b-base-content bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 pb-3 text-transparent"
				>
					Step 3: Better Manage Products & Teams
				</h2>
				<p>
					Lead your products & teams better with all your new knowledge! No one fools you anymore.
				</p>
				<p>Never again will you need to say "I don't know and can only trust you on this".</p>
			</div>
		</div>
		<div class="col-span-1 row-span-1">
			<enhanced:img src={pandaNo} alt="No!" class="h-full rounded-xl object-cover" />
		</div>
		<div class="card col-span-3 row-span-1 w-full bg-base-100">
			<div class="card-body grid content-start space-y-2">
				<h2
					class="mb-4 inline-block border-b border-b-base-content bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 pb-3 text-transparent"
				>
					Step 4: Say "No!" to Shitty Products
				</h2>
				<p>
					Use your upgraded judgement and trust that you're 10x better than you were. Gain
					confidence in your judgement to terminate useless products. Stop underperforming projects
					in their tracks.
				</p>
			</div>
		</div>

		<div class="card col-span-2 row-span-1 w-full bg-base-100">
			<div class="card-body grid content-center justify-center space-y-2">
				<h2
					class="inline-block bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 text-transparent"
				>
					Now that's truly Tech for Public Good
				</h2>
			</div>
		</div>
		<div class="col-span-3 row-span-1 lg:col-span-1">
			<enhanced:img src={pandaBirds} alt="Feels good" class="h-full rounded-xl object-cover" />
		</div>
	</div>
</div>

<style>
	.min50h {
		min-height: 20vh;
	}
</style>
