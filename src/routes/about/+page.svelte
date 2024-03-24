<script>
	import sgneopunk from '$lib/assets/sgneopunk.webp?enhanced&w=1714;640;400';
	import { slide } from 'svelte/transition';
	import Breadcrumbs from '$lib/Breadcrumbs.svelte';
	import TablerLink from '$lib/assets/svg/TablerLink.svelte';
	import bellCurveMeme from '$lib/assets/product-bell-curve.webp';
	import oops3 from '$lib/assets/oops3.webp?enhanced&w=1600;800;400';

	let seeMore = false;
</script>

<Breadcrumbs textCurrent={'About Apptitude'} />

<div class="grid grid-cols-1 justify-items-center gap-x-8 gap-y-8 px-5 lg:grid-cols-5 lg:px-20">
	<div class="avatar flex self-stretch px-12 lg:sticky lg:top-20 lg:col-span-2 lg:self-start">
		<div class="animateImg rounded-full">
			<enhanced:img
				src={oops3}
				alt="Oops"
				sizes="(min-width:4000px) 1600px, (max-width:1600px) 800px, (max-width:768px) 400px"
			/>
		</div>
	</div>
	<div class="grid content-start justify-items-center lg:col-span-3">
		<div class="pe-4 ps-2">
			<h1
				class="mb-11 inline-block bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 text-transparent"
			>
				What's Apptitude?
			</h1>
			<h2 class="mb-7">TL;DR</h2>
			<p class="mb-7">
				I made Apptitude to help my teammates know what competencies to learn, find out where to
				learn them, and quickly get started to scrutinize tech stuff that I like to.
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
						class="icon icon-tabler icons-tabler-outline icon-tabler-chevrons-down inline align-top"
						><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 7l5 5l5 -5" /><path
							d="M7 13l5 5l5 -5"
						/></svg
					>
					See more
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
						class="icon icon-tabler icons-tabler-outline icon-tabler-chevrons-down inline align-top"
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
						Apptitude is my attempt to start more dissatisfaction and rebellion against poor product
						outcomes and decision making. Breaking groupthink, because disagreeing can be very
						difficult. Giving people the mental tools/mindset to critique and understand good
						decisions don't magically come with positions of power.
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
						Reflecting on my own journey and weaknesses, good decisions are mostly common sense, but
						what sounds 'duh' often doesn't get chosen in the public service. Like this meme here
						actually. Sometimes it's entrenched mindsets, but oftentimes it's simply not knowing
						what the issue even is and what's the standard out in the world.But I try my best and
						supplement those with what I hear from good people around, the good and bad I saw.
					</p>
					<p class="mb-7">
						Hopefully with a better idea of the real world (this does include the imperfects in
						tech, *cough* js runtimes and frameworks *cough*) and seeing a more complete set of
						choices, we can all shift to the right (or left is fine too) parts of the curve.
					</p>
					<img src={bellCurveMeme} class="mb-7" alt="Geniuses and noobs" />
				</div>
			{/if}
			<h2 class="mb-7 mt-12">What's in it for you?</h2>
			<p class="mb-12">
				I do this so that I can feel like I did some good for society. If you asked just one extra
				question that saves taxpayers some money or give users a better product, Apptitude would
				have done some good for Singaporeans. (If this really does work out, maybe I should put some
				ads or make this in patreon or something. /jk)
			</p>
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
			<p class="mb-12">
				I don't think any public servant wakes up and says "let me think of ways to waste money and
				make a bad product". If there is, fire that person! In my view, a lot of the time, decisions
				or policies made are head scratchers. Maybe because they were made by people who don't hear
				from the ones actually using or building these things. Or maybe they're unaware they're
				doing the wrong things despite best intentions, and then they get promoted.
			</p>
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
</div>
