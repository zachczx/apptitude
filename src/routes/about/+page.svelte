<script>
	import sgneopunk from '$lib/assets/sgneopunk.webp?enhanced&w=1714;640;400';
	import { slide } from 'svelte/transition';
	import Breadcrumbs from '$lib/Breadcrumbs.svelte';
	import TablerLink from '$lib/assets/svg/TablerLink.svelte';
	import bellCurveMeme from '$lib/assets/product-bell-curve.webp';
	import oops3 from '$lib/assets/oops3.webp?enhanced&w=1000;700;400';
	import pandablanket from '$lib/assets/pandablanket.webp?enhanced&w=1000;700;400';
	import pandayawn from '$lib/assets/pandayawn.webp?enhanced&w=1000;700;400';
	import pandabutterfly from '$lib/assets/panda-butterfly.webp?enhanced&w=1000;700;400';
	import TablerQuotes from '$lib/assets/svg/TablerQuotes.svelte';

	let seeMore = true;
</script>

<Breadcrumbs textCurrent={'About Apptitude'} />

<div class="grid grid-cols-1 justify-items-center gap-x-8 gap-y-8 px-5 lg:grid-cols-5 lg:px-20">
	<!--<div class="avatar flex self-stretch px-12 lg:sticky lg:top-20 lg:col-span-2 lg:self-start">
		<div class="animateImg rounded-full">-->

	<div class="grid content-start justify-items-center lg:col-span-3">
		<div class="pe-4 ps-2">
			<h1
				class="mb-11 bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 text-center text-transparent"
			>
				What's Apptitude?
			</h1>
			<h2 class="mb-7">TL;DR</h2>
			<p class="mb-7">
				I wrote Apptitude to learn Svelte and at the same time figure a way to help my teammates
				know what competencies to learn, easily grab resources, and quickly use the knowledge to
				call out bad tech outcomes.
			</p>
			<div class="border-t-2 border-slate-400 text-center">
				<button
					class="rounded-full bg-slate-600 align-middle hover:text-primary"
					style="transform: translateY(-14px)"
					onclick={() => {
						seeMore = !seeMore;
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="icon icon-tabler icons-tabler-outline icon-tabler-chevrons-down inline rotate-180 align-top"
						><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 7l5 5l5 -5" /><path
							d="M7 13l5 5l5 -5"
						/></svg
					>
					See less
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="icon icon-tabler icons-tabler-outline icon-tabler-chevrons-down inline rotate-180 align-top"
						><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 7l5 5l5 -5" /><path
							d="M7 13l5 5l5 -5"
						/></svg
					></button
				>
			</div>
			{#if seeMore == true}
				<div class="mb-7 rounded-lg bg-base-300 p-3" transition:slide={{ delay: 0, duration: 500 }}>
					<h2 class="mb-7">A longer explanation?</h2>
					<p class="mb-7">
						Apptitude is an attempt to start more dissatisfaction and rebel against poor product
						outcomes and groupthink. My hypothesis is that people need the knowledge and safety to
						critique, otherwise it's always safer to defer to people in high positions of power.
					</p>
					<p class="mb-7">
						In my past job as a "tech policy officer" I came to realize WOG tech outcomes were poor.
						Looking around, many of Govt's tech products weren't good or flat out didn't make sense,
						especially for the crazy sums we spend <a
							href="https://www.tech.gov.sg/media/media-releases/2023-05-24-government-projected-to-spend-on-ict-in-fy23"
							class="text-primary">(here)</a
						>. Products are slow, laggy, hard to use, super expensive.
					</p>
					<p class="mb-7">
						Occam's razor applies - the simplest solution is almost always the best. Reflecting on
						my own journey and weaknesses, good decisions are mostly common sense, but that often
						doesn't get chosen in the public service. Like this meme below. Sometimes it's
						entrenched mindsets, but often people who make assessments don't know what the issue is
						and what's standard out there.
					</p>
					<img src={bellCurveMeme} class="mb-7" alt="Geniuses and noobs" />
					<p class="mb-7">
						Hopefully with a better idea of the real world (this does include the imperfects in
						tech, *cough* js runtimes and frameworks *cough*) and seeing a more complete set of
						choices, we can all shift to the right (or left is fine too) parts of the curve.
					</p>
				</div>
			{/if}
			<h2 class="mb-7 mt-7">What's in it for me?</h2>
			<p class="mb-7">
				I do this so that I can feel like I did some good for society. If you asked just one extra
				question that saves taxpayers some money or give users a better product, Apptitude would
				have done some good for Singaporeans. (If this really does work out, maybe I should put some
				ads or make this in patreon or something. /jk)
			</p>
			<p class="mb-7">
				Seriously though, if these sound like you, you might be contributing to bad decisions &
				products:
			</p>

			<div class="mb-12 grid grid-cols-1 gap-2 lg:grid-cols-2 xl:grid-cols-3">
				<div class="card grid border border-slate-800 bg-base-300 shadow-xl lg:bg-base-300">
					<div class="card-body">
						<TablerQuotes
							class="absolute bottom-0 right-0 stroke-base-content"
							width="3em"
							height="3em"
						/>IDK what engineers are saying.
					</div>
				</div>
				<div class="card grid border border-slate-800 bg-base-300 shadow-xl lg:bg-base-300">
					<div class="card-body">
						<TablerQuotes
							class="absolute bottom-0 right-0 stroke-base-content"
							width="3em"
							height="3em"
						/>Let's spend allocated $$, IDC about saving it.
					</div>
				</div>
				<div class="card grid border border-slate-800 bg-base-300 shadow-xl lg:bg-base-300">
					<div class="card-body">
						<TablerQuotes
							class="absolute bottom-0 right-0 stroke-base-content"
							width="3em"
							height="3em"
						/>Engineers and users should just suck it up.
					</div>
				</div>
				<div class="card grid border border-slate-800 bg-base-300 shadow-xl lg:bg-base-300">
					<div class="card-body">
						<TablerQuotes
							class="absolute bottom-0 right-0 stroke-base-content"
							width="3em"
							height="3em"
						/>My system is good, I just need more $$ for it.
					</div>
				</div>
				<div class="card grid border border-slate-800 bg-base-300 shadow-xl lg:bg-base-300">
					<div class="card-body">
						<TablerQuotes
							class="absolute bottom-0 right-0 stroke-base-content"
							width="3em"
							height="3em"
						/>Stop asking and just do what my Dir said.
					</div>
				</div>
				<div class="card grid border border-slate-800 bg-base-300 shadow-xl lg:bg-base-300">
					<div class="card-body">
						<TablerQuotes
							class="absolute bottom-0 right-0 stroke-base-content"
							width="3em"
							height="3em"
						/>New SOR = existing + every possible rqmt.
					</div>
				</div>
			</div>
			<h2 class="mb-7">What's a bad product?</h2>
			<p class="mb-7">
				I'll draw from personal experience. Take LifeSG. I used LifeSG in the delivery suite after
				my wife gave birth. What a lifesaver! I downloaded the app (didn't mind it tbh), registered
				my baby's name, didn't even have to go to ICA. After that I deleted the app.
			</p>
			<p class="mb-12">
				I was annoyed some time later that I needed to use LifeSG to use my NS55 credits. The app
				loaded slow on my Pixel, far slower than PayLah. And I couldn't even finish all my credits,
				kena makan by Gahmen. To make it worse, my go-to app for reporting HDB estate issues needed
				to be done via LifeSG. Ugh, so much worse than the original OneService app.
			</p>
			<h2 class="mb-7">Road to hell is paved with good intentions</h2>
			<p class="mb-7">
				I don't think any public servant wakes up and says "let me think of ways to waste money and
				make a bad product". If there is, fire that person! In my view, a lot of the time, decisions
				or policies made are head scratchers. Maybe because they were made by people who don't hear
				from the ones actually using or building these things. Or maybe they're unaware they're
				doing the wrong things despite best intentions, and then they get promoted.
			</p>
			<p class="mb-7">
				Unfortunately there's no test for knowledge before people are put in positions of power.
			</p>
			<div class="mockup-code mb-12 w-11/12 bg-gray-900 xl:w-full">
				<pre data-prefix="$"><code>test tech-knowledge</code></pre>
				<pre data-prefix=">"><code>Testing......</code></pre>
				<pre data-prefix=">" class="text-red-500"><code>Error: tech-knowledge failed</code></pre>
				<pre data-prefix=">" class="text-yellow-500"><code
						>Rebuild your tech-knowledge dependencies</code
					></pre>
			</div>
			<h2 class="mb-7">You're too harsh!</h2>
			<p class="mb-12">
				I'm not nice (though certainly not at Linus' level). I don't know a way to say the stuff
				here nicely. I'd personally prefer someone to just tell me if I'm screwing things up. If
				you're doing good, share your wisdom with everyone else in a nicer way.
			</p>
			<h2 class="mb-7">You're an idiot too, you think this is a good product?</h2>
			<p class="mb-7">
				This is not a product. Just a personal project to share my ideas with my teammates:
			</p>
			<ul class="mb-12 ms-7 list-decimal space-y-1">
				<li class="ps-3">What people who made successful products think a good product is</li>
				<li class="ps-3">
					Questions to keep at the back of my mind to expose bad products and decisions
				</li>
				<li class="ps-3">What competencies I think I need to make better tech-related decisions</li>
				<li class="ps-3">(This is also for my personal goal of learning Svelte5 and Sveltekit.)</li>
			</ul>
			<h2 class="mb-7">Who cares about your shitty webapp/blog?</h2>
			<p class="mb-7">Ouch. At least I tried.</p>
			<p class="mb-12">
				In any case Apptitude only costs me $13.28/yr (incl GST), for the domain name. I got to
				learn Svelte through this, so it's not wasted effort. If you think this sucks, cool. It's
				cheap enough to write off without second thought.
			</p>
			<h2 class="mb-7">I found Apptitude very useful!</h2>
			<p class="mb-12">
				I'd love to hear from you - <a
					href="https://forms.gle/zhfhmSR4RSA6FJNf6"
					class="hover:text-primary">via this Google form <TablerLink class="inline" /></a
				>.
			</p>
		</div>
	</div>
	<div class="col-span-2">
		<div class="overflow-hidden rounded-b-3xl rounded-t-3xl">
			<enhanced:img
				src={oops3}
				alt="Red pandas, because they're cute"
				sizes="(min-width:1920px) 1000px, (min-width:1200px) 700px, (min-width:768px) 400px"
			/>
			<enhanced:img
				src={pandayawn}
				alt="Red pandas, because they're cute"
				sizes="(min-width:1920px) 1000px, (min-width:1200px) 700px, (min-width:768px) 400px"
			/>
			<enhanced:img
				src={pandablanket}
				alt="Red pandas, because they're cute"
				sizes="(min-width:1920px) 1000px, (min-width:1200px) 700px, (min-width:768px) 400px"
			/>
			<enhanced:img
				src={pandabutterfly}
				alt="Red pandas, because they're cute"
				sizes="(min-width:1920px) 1000px, (min-width:1200px) 700px, (min-width:768px) 400px"
			/>
		</div>
	</div>
</div>

<style>
	.embla {
		overflow: hidden;
	}
	.embla__container {
		display: flex;
	}
	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
	}
</style>
