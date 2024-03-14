<script>
	import sgneopunk from '$lib/assets/sgneopunk.webp?enhanced&w=1714;640;400';
	import { slide } from 'svelte/transition';

	let seeMore = false;
</script>

<div class="grid grid-cols-1 justify-items-center gap-x-8 gap-y-8 px-5 lg:grid-cols-2 lg:px-20">
	<div class="avatar flex self-stretch px-12 lg:self-start">
		<div class="rounded-full">
			<enhanced:img
				src={sgneopunk}
				alt="Dystopian Singapore"
				sizes="(min-width:1920px) 1428px, (min-width:1080px) 1080px, (min-width:768px) 400px"
			></enhanced:img>
		</div>
	</div>
	<div class="grid content-start justify-items-center">
		<div class="pe-4 ps-2">
			<h1 class="mb-11 font-bold">What's Apptitude?</h1>
			<h2 class="mb-7">Tell me in 1 sentence.</h2>
			<p class="mb-7">
				Apptitude is my webapp to help my teammates learn new competencies and refer to questions I
				like to ask.
			</p>
			<div class="border-t-2 border-slate-400 text-center">
				<button
					class="rounded-full bg-slate-600 align-middle hover:bg-slate-900"
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
						class="icon icon-tabler icons-tabler-outline icon-tabler-caret-down inline align-top"
						><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
							d="M6 10l6 6l6 -6h-12"
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
						class="icon icon-tabler icons-tabler-outline icon-tabler-caret-down inline align-top"
						><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
							d="M6 10l6 6l6 -6h-12"
						/></svg
					></button
				>
			</div>
			{#if seeMore == true}
				<div class="mb-7 rounded-lg bg-base-300 p-3" transition:slide={{ delay: 0, duration: 500 }}>
					<h2 class="mb-7">Ok, a longer explanation?</h2>
					<p class="">
						Apptitude is my attempt to start a more dissatisfied culture/attitude to tech products,
						by opening up the veil and giving people the mental tools/mindset to challenge bad plans
						and decisions. Looking around, some of Government's tech products don't make sense to
						me, especially for the amount of money we spend <a
							href="https://www.tech.gov.sg/media/media-releases/2023-05-24-government-projected-to-spend-on-ict-in-fy23"
							>(here)</a
						>. Sometimes the product are slow, laggy, hard to use, super expensive.
					</p>
				</div>
			{/if}
			<h2 class="mb-7 mt-7">Pointless? Slow? Expensive?</h2>
			<p class="mb-7">
				Take LifeSG. I used LifeSG in the delivery suite after my wife gave birth. What a lifesaver!
				I downloaded the app (didn't mind it tbh), registered my baby's name, didn't even have to go
				to ICA. After that I deleted the app.
			</p>
			<p class="mb-7">
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
			<h2 class="mb-7">Apptitude is a good product then?</h2>
			<p class="mb-7">
				This is a simple project in my free time creating a resource for my teammates to figure out
				for themselves:
			</p>
			<ul class="mb-7 ms-7 list-decimal space-y-1">
				<li class="ps-3">What people who made successful products think a good product is</li>
				<li class="ps-3">
					Questions to keep at the back of my mind to expose bad products and decisions
				</li>
				<li class="ps-3">What competencies I think I need to make better tech-related decisions</li>
				<li class="ps-3">(This is also for my personal goal of learning Svelte5 and Sveltekit.)</li>
			</ul>
			<h2 class="mb-7">Who cares about a shitty webapp/blog?</h2>
			<p class="mb-7">
				Apptitude costs me $13.28/yr (incl GST), solely for the domain name. If you think this
				sucks, cool, it's cheap enough to dump without second thought.
			</p>
		</div>
	</div>
</div>
