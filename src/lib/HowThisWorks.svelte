<script>
	import pandaScientist from '$lib/assets/panda-scientist.webp';
	import pandaSuperhero from '$lib/assets/panda-superhero.webp?enhanced&w=600';
	import pandaBirds from '$lib/assets/panda-birds.webp?enhanced&w=400';
	import pandaNo from '$lib/assets/panda-no.webp?enhanced';
	import pandaReading from '$lib/assets/panda-reading.webp?enhanced';
	import pandaLabGoggles from '$lib/assets/panda-lab-goggles.webp?enhanced&w=400';
	import swoleDoge from '$lib/assets/swole-doge.webp?enhanced&w=200';
</script>

<div class="bg-gray-900 px-3 lg:px-10 lg:py-20">
	<h1
		class="pb-12 pt-10 text-center text-5xl text-lime-400 lg:pt-5 lg:text-6xl xl:text-7xl min-[1921px]:text-8xl"
	>
		How Apptitude Helps You
	</h1>
	<div class="grid gap-x-4 gap-y-4 lg:grid-cols-7">
		<div class="card col-span-3 bg-base-100 lg:col-span-1 lg:row-span-1">
			<div class="card-body grid h-48 content-center">
				<h2
					class="inline-block bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 text-transparent"
				>
					Hello, tech product owner!
				</h2>
			</div>
		</div>

		<div class="card col-span-3 row-span-1 bg-base-100 lg:col-span-2">
			<div class="card-body grid h-48 grid-cols-3 content-center items-center">
				<div class="col-span-2">
					<h3 class="font-medium">Go on a learning journey to upskill and git gud!</h3>
				</div>
				<div>
					<enhanced:img src={swoleDoge} alt="Swole Doge" class="" />
				</div>
			</div>
		</div>
		<div class="card col-span-2 row-span-1 bg-base-100">
			<div class="card-body grid h-48 content-center">
				<h3 class="font-medium">Here are the steps I want to sell you.</h3>
			</div>
		</div>
		<div
			class="card bg-base-100 p-5 lg:col-span-2 lg:row-span-2"
			style="background-image:url({pandaScientist}); background-size: cover; background-position:top center;"
		></div>
		<div class="card col-span-2 row-span-1 bg-gradient-to-t from-lime-950 from-60% to-lime-800">
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
			<enhanced:img
				src={pandaReading}
				alt="Panda reading"
				class="h-full rounded-xl object-cover"
				sizes="(min-width:1000px) 500px, 300px"
			/>
		</div>
		<div class="card col-span-3 row-span-1 bg-base-300 lg:col-span-2">
			<div
				class="card-body relative grid content-start space-y-2 overflow-hidden rounded-2xl bg-gradient-to-t from-lime-950 from-60% to-lime-800"
			>
				<h2
					class="mb-4 inline-block border-b border-b-base-content bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 pb-3 text-transparent"
				>
					Step 1b: Apply Knowledge
				</h2>
				<p>Do personal projects, try stuff beyond tutorial copy-pasting or Coursera Labs.</p>
				<enhanced:img
					src={pandaLabGoggles}
					alt="Take notes!"
					class="absolute right-0 transition duration-500 ease-in-out hover:-translate-y-8 motion-reduce:transition-none"
				/>
			</div>
		</div>
		<div
			class="card col-span-3 row-span-1 w-full bg-gradient-to-t from-lime-950 from-60% to-lime-800"
		>
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
		<div class="col-span-3 row-span-1 lg:col-span-1">
			<enhanced:img
				src={pandaSuperhero}
				alt="Panda Superhero"
				class="h-full rounded-2xl object-cover"
				sizes="(min-width:1000px) 500px, 300px"
			/>
		</div>
		<div
			class="card col-span-3 row-span-1 w-full bg-gradient-to-t from-lime-950 from-60% to-lime-800"
		>
			<div class="card-body grid content-start space-y-2">
				<h2
					src={pandaLabGoggles}
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
		<div class="col-span-3 row-span-1 lg:col-span-1">
			<enhanced:img src={pandaNo} alt="No!" class="h-full rounded-xl object-cover" />
		</div>
		<div
			class="card col-span-3 row-span-1 w-full bg-gradient-to-t from-lime-950 from-60% to-lime-800"
		>
			<div class="card-body grid content-start space-y-2">
				<h2
					class="mb-4 inline-block border-b border-b-base-content bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 pb-3 text-transparent"
				>
					Step 4: Say "No!" to Shitty Products
					<p>
						Use your upgraded judgement and trust that you're 10x better than you were. Gain
						confidence in your judgement to terminate useless products. Stop underperforming
						projects in their tracks.
					</p>
				</h2>
			</div>
		</div>

		<div
			class="card col-span-3 row-span-1 w-full bg-gradient-to-t from-lime-950 from-60% to-lime-800 lg:col-span-2"
		>
			<div class="card-body grid content-center justify-center space-y-2">
				<h2
					class="inline-block bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 text-transparent"
				>
					Now that's truly Tech for Public Good
				</h2>
			</div>
		</div>
		<div class="col-span-3 row-span-1 lg:col-span-1">
			<enhanced:img
				src={pandaBirds}
				alt="Feels good"
				class="rounded-xl"
				sizes="(min-width:1000px) 500px, 300px"
			/>
		</div>
	</div>
</div>

<style>
	.min50h {
		min-height: 20vh;
	}
</style>
