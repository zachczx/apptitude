<script>
	import Breadcrumbs from '$lib/Breadcrumbs.svelte';
	import TablerLink from '$lib/assets/svg/TablerLink.svelte';
	import oops3 from '$lib/assets/oops3.webp?enhanced&w=800;600;400';
	import pandayawn from '$lib/assets/pandayawn.webp?enhanced&w=800;600;400';
	import pandabutterfly from '$lib/assets/panda-butterfly.webp?enhanced&w=800;600;400';
	import unoptimised1 from '$lib/assets/unoptimised1.webp?enhanced&w=800;600;400';
	import unoptimised2 from '$lib/assets/unoptimised2.webp?enhanced&w=800;600;400';
	import unoptimised3 from '$lib/assets/unoptimised3.webp?enhanced&w=800;600;400';
	import unoptimised4 from '$lib/assets/unoptimised4.webp?enhanced&w=800;600;400';
	import unoptimised5 from '$lib/assets/unoptimised5.webp?enhanced&w=800;600;400';
	import unoptimised6 from '$lib/assets/unoptimised6.webp?enhanced&w=800;600;400';

	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		let tlAbout = gsap.matchMedia();
		tlAbout.add('(min-width: 1028px)', () => {});

		ScrollTrigger.batch('.footprint', {
			start: 'top center',
			onEnter: (elements) => gsap.to(elements, { autoAlpha: 1, stagger: 0.2 }),
			onLeaveBack: (elements) => gsap.set(elements, { autoAlpha: 0 }),
		});

		ScrollTrigger.batch('.headline', {
			start: 'center center',
			end: 'bottom top',
			onEnter: (elements) =>
				gsap.to(elements, { color: '#9FE88D', borderColor: '#9FE88D', duration: 0 }),
			onLeave: (elements) =>
				gsap.to(elements, { color: '#B2CCD6', borderColor: '#B2CCD6', duration: 0 }),
			onEnterBack: (elements) =>
				gsap.to(elements, { color: '#9FE88D', borderColor: '#9FE88D', duration: 0 }),
			onLeaveBack: (elements) =>
				gsap.set(elements, { color: '#B2CCD6', borderColor: '#B2CCD6', duration: 0 }),
		});
	});
</script>

<Breadcrumbs textCurrent={'About Apptitude'} />
<div class="mx-2 mb-10 text-center lg:mx-20 lg:mb-20">
	<h1
		class="inline-block bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 text-center text-transparent">
		About
	</h1>
	<div>
		<i>If you need an opinion, I have plenty to spare.</i>
	</div>
</div>

<div
	class="mb-7 grid grid-cols-1 justify-items-center gap-x-8 gap-y-8 px-3 lg:grid-cols-12 lg:px-20">
	<div class="box space-y-5 self-center lg:col-span-8">
		<h2 class="headline border-b-2 border-base-content pb-2 lg:text-5xl">
			<span class="headline bg-base-100">What's Apptitude?</span>
		</h2>
		<p class="lg:text-xl">
			I wrote Apptitude to learn Svelte and at the same time figure a way to help my teammates know
			what competencies to learn, easily grab resources, and quickly use the knowledge to call out
			bad tech outcomes.
		</p>
		<p class="lg:text-xl">
			Apptitude is an attempt to start more dissatisfaction and rebel against poor product outcomes
			and groupthink. My hypothesis is that people need the knowledge and safety to critique,
			otherwise it's always safer to defer to people in high positions of power.
		</p>
		<div class="relative">
			<div class="absolute inset-x-3/4 -z-10 jumbo:mt-20">
				<div class="set-b footprint rotate-[180deg]"></div>
				<div class="set-b footprint translate-x-16 rotate-[160deg]"></div>
				<div class="set-b footprint translate-x-2 rotate-[170deg]"></div>
				<div class="set-b footprint translate-x-20 rotate-[160deg]"></div>
				<div class="set-b footprint translate-x-4 rotate-[170deg]"></div>
				<div class="set-b footprint translate-x-20 rotate-[160deg]"></div>
				<div class="set-b footprint translate-x-6 rotate-[170deg]"></div>
				<div class="set-b footprint translate-x-24 rotate-[160deg]"></div>
				<div class="set-b footprint translate-x-6 rotate-[170deg]"></div>
			</div>
		</div>
	</div>
	<div class="pic-1 lg:col-span-4">
		<figure class="lg:avatar">
			<div class="lg:mask lg:mask-squircle">
				<enhanced:img
					src={oops3}
					alt="Red pandas, because they're cute"
					class="lg:transition lg:duration-3000 lg:hover:scale-125"
					sizes="(min-width:1920px) 800px, (min-width:1200px) 600px, 400px" />
			</div>
		</figure>
	</div>
</div>
<div
	class="mb-7 grid grid-cols-1 justify-items-center gap-x-8 gap-y-0 px-3 lg:grid-cols-12 lg:px-20">
	<div class="pic-2 lg:col-span-4">
		<figure class="lg:avatar">
			<div class="lg:mask lg:mask-squircle">
				<enhanced:img
					src={pandabutterfly}
					alt="Red pandas, because they're cute"
					class="transition duration-3000 hover:scale-125"
					sizes="(min-width:1920px) 800px, (min-width:1200px) 600px, 400px" />
			</div>
		</figure>
	</div>
	<div class="box self-center py-3 lg:col-span-8">
		<h2 class="headline border-b-2 border-base-content pb-2 lg:text-5xl">
			<span class="bg-base-100">How do you know there's a problem?</span>
		</h2>
		<p class="bg-base-100 pt-5 lg:text-xl">
			In my past job I heard many perspectives and I came to agree that WOG tech outcomes/ROI are
			poor. Looking around, many of Govt's tech products weren't good or flat out didn't make sense,
			especially for the crazy sums we spend <a
				href="https://www.tech.gov.sg/media/media-releases/2023-05-24-government-projected-to-spend-on-ict-in-fy23"
				class="text-primary">(here)</a
			>. Products are slow, laggy, hard to use, super expensive.
		</p>
		<p class="bg-base-100 py-5 lg:text-xl">
			Occam's razor applies - the simplest solution is almost always the best. Reflecting on my own
			journey and weaknesses, good decisions are mostly common sense, but that often doesn't get
			chosen in the public service. Like this meme below. Sometimes it's entrenched mindsets, but
			often people who make assessments don't know what the issue is and what's standard out there.
		</p>
		<div class="relative">
			<div class="absolute inset-x-1/4 -z-10 jumbo:mt-20">
				<div class="set-a footprint rotate-[180deg]"></div>
				<div class="set-a footprint -translate-x-16 rotate-[200deg]"></div>
				<div class="set-a footprint -translate-x-2 rotate-[190deg]"></div>
				<div class="set-a footprint -translate-x-20 rotate-[200deg]"></div>
				<div class="set-a footprint -translate-x-4 rotate-[190deg]"></div>
				<div class="set-a footprint -translate-x-20 rotate-[200deg]"></div>
				<div class="set-a footprint -translate-x-6 rotate-[190deg]"></div>
				<div class="set-a footprint -translate-x-20 rotate-[200deg]"></div>
				<div class="set-a footprint -translate-x-6 rotate-[190deg]"></div>
			</div>
		</div>
	</div>
</div>
<div class="mb-7 grid grid-cols-1 justify-items-center gap-x-8 px-3 lg:grid-cols-12 lg:px-20">
	<div class="box self-center lg:col-span-8">
		<h2 class="headline border-b-2 border-base-content pb-2 lg:text-5xl">
			<span class=" bg-base-100">What's a bad product to you?</span>
		</h2>
		<p class="z-10 bg-base-100 pt-5 lg:text-xl">
			A bad product is a combination of not solving any problems, slow, poor ROI.
		</p>
		<p class="z-10 bg-base-100 pt-5 lg:text-xl">
			I'll draw from personal experience. Take LifeSG. I used LifeSG in the delivery suite after my
			wife gave birth. What a lifesaver! I downloaded the app (didn't mind it tbh), registered my
			baby's name, didn't even have to go to ICA. After that I deleted the app.
		</p>
		<p class="z-10 bg-base-100 py-5 lg:text-xl">
			I was annoyed some time later that I needed to use LifeSG to use my NS55 credits. The app
			loaded slow on my Pixel, far slower than PayLah. And I couldn't even finish all my credits,
			kena makan by Gahmen. To make it worse, my go-to app for reporting HDB estate issues needed to
			be done via LifeSG. Ugh, so much worse than the original OneService app.
		</p>
		<div class="relative">
			<div class="absolute inset-x-3/4 -z-10 jumbo:mt-20">
				<div class="set-b footprint rotate-[180deg]"></div>
				<div class="set-b footprint translate-x-16 rotate-[160deg]"></div>
				<div class="set-b footprint translate-x-2 rotate-[170deg]"></div>
				<div class="set-b footprint translate-x-20 rotate-[160deg]"></div>
				<div class="set-b footprint translate-x-4 rotate-[170deg]"></div>
				<div class="set-b footprint translate-x-20 rotate-[160deg]"></div>
				<div class="set-b footprint translate-x-6 rotate-[170deg]"></div>
				<div class="set-b footprint translate-x-24 rotate-[160deg]"></div>
				<div class="set-b footprint translate-x-6 rotate-[170deg]"></div>
			</div>
		</div>
	</div>
	<div class="pic-3 lg:col-span-4">
		<figure class="lg:avatar">
			<div class="lg:mask lg:mask-squircle">
				<enhanced:img
					src={unoptimised1}
					alt="Red pandas, because they're cute"
					class="transition duration-3000 hover:scale-125"
					sizes="(min-width:1920px) 800px, (min-width:1200px) 600px, 400px" />
			</div>
		</figure>
	</div>
</div>
<div
	class="mb-7 grid grid-cols-1 justify-items-center gap-x-8 gap-y-8 px-3 lg:grid-cols-12 lg:px-20">
	<div class="pic-4 lg:col-span-4">
		<figure class="lg:avatar">
			<div class="lg:mask lg:mask-squircle">
				<enhanced:img
					src={unoptimised6}
					alt="Red pandas, because they're cute"
					class="transition duration-3000 hover:scale-125"
					sizes="(min-width:1920px) 800px, (min-width:1200px) 600px,400px" />
			</div>
		</figure>
	</div>
	<div class="box self-center lg:col-span-8">
		<h2 class="headline border-b-2 border-base-content pb-2 lg:text-5xl">
			<span class="bg-base-100">Good intentions, bad execution</span>
		</h2>
		<p class="bg-base-100 pt-5 lg:text-xl">
			I don't think any public servant wakes up and says "let me think of ways to waste money and
			make a bad product". If there is, fire that person! In my view, a lot of the time, decisions
			or policies made are head scratchers. Maybe because they were made by people who don't hear
			from the ones actually using or building these things. Or maybe they're unaware they're doing
			the wrong things despite best intentions, and then they get promoted.
		</p>
		<p class="bg-base-100 py-5 lg:text-xl">
			Unfortunately there's no test for knowledge before people are put in positions of power.
		</p>
		<div class="relative">
			<div class="absolute inset-x-1/4 -z-10 jumbo:mt-20">
				<div class="set-a footprint rotate-[180deg]"></div>
				<div class="set-a footprint -translate-x-16 rotate-[200deg]"></div>
				<div class="set-a footprint -translate-x-2 rotate-[190deg]"></div>
				<div class="set-a footprint -translate-x-20 rotate-[200deg]"></div>
				<div class="set-a footprint -translate-x-4 rotate-[190deg]"></div>
				<div class="set-a footprint -translate-x-20 rotate-[200deg]"></div>
				<div class="set-a footprint -translate-x-6 rotate-[190deg]"></div>
				<div class="set-a footprint -translate-x-20 rotate-[200deg]"></div>
				<div class="set-a footprint -translate-x-6 rotate-[190deg]"></div>
			</div>
		</div>
	</div>
</div>
<div class="mb-7 grid grid-cols-1 justify-items-center gap-x-8 px-3 lg:grid-cols-12 lg:px-20">
	<div class="box self-center lg:col-span-8">
		<h2 class="headline border-b-2 border-base-content pb-2 lg:text-5xl">
			<span class="bg-base-100">What's in it for you?</span>
		</h2>
		<p class="bg-base-100 pt-5 lg:text-xl">
			I do this so that I can feel like I did some good for society. If you asked just one extra
			question that saves taxpayers some money or give users a better product, Apptitude would have
			done some good for Singaporeans.
		</p>
		<p class="bg-base-100 py-5 lg:text-xl">
			(If this really does work out, maybe I should put some ads or make this in patreon or
			something. /jk)
		</p>
		<div class="relative">
			<div class="absolute inset-x-3/4 -z-10 jumbo:mt-20">
				<div class="set-b footprint rotate-[180deg]"></div>
				<div class="set-b footprint translate-x-16 rotate-[160deg]"></div>
				<div class="set-b footprint translate-x-2 rotate-[170deg]"></div>
				<div class="set-b footprint translate-x-20 rotate-[160deg]"></div>
				<div class="set-b footprint translate-x-4 rotate-[170deg]"></div>
				<div class="set-b footprint translate-x-20 rotate-[160deg]"></div>
				<div class="set-b footprint translate-x-6 rotate-[170deg]"></div>
				<div class="set-b footprint translate-x-24 rotate-[160deg]"></div>
				<div class="set-b footprint translate-x-6 rotate-[170deg]"></div>
			</div>
		</div>
	</div>
	<div class="pic-5 lg:col-span-4">
		<figure class="lg:avatar">
			<div class="lg:mask lg:mask-squircle">
				<enhanced:img
					src={pandayawn}
					alt="Red pandas, because they're cute"
					class="transition duration-3000 hover:scale-125"
					sizes="(min-width:1920px) 800px, (min-width:1200px) 600px,400px" />
			</div>
		</figure>
	</div>
</div>
<div class="mb-7 grid grid-cols-1 justify-items-center gap-x-8 px-3 lg:grid-cols-12 lg:px-20">
	<div class="pic-6 lg:col-span-4">
		<figure class="lg:avatar">
			<div class="lg:mask lg:mask-squircle">
				<enhanced:img
					src={unoptimised5}
					alt="Red pandas, because they're cute"
					class="transition duration-3000 hover:scale-125"
					sizes="(min-width:1920px) 800px, (min-width:1200px) 600px,400px" />
			</div>
		</figure>
	</div>
	<div class="box w-full self-center lg:col-span-8">
		<h2 class="headline border-b-2 border-base-content pb-2 pt-5 lg:text-5xl">
			<span class="bg-base-100">Bad outcomes everywhere?</span>
		</h2>
		<p class="bg-base-100 pt-5 lg:text-xl">
			Seriously though, the comments below are very common in the public sector. Each of these is a
			major red flag for shitty products.
		</p>
		<ul class="ms-8 list-disc bg-base-100 py-5">
			<li>IDK what engineers are saying.</li>
			<li>Let's spend allocated $$, IDC about saving it.</li>
			<li>Engineers and users should just suck it up.</li>
			<li>My system is good, I just need more MMF/$$ for it.</li>
			<li>Stop asking and just do what my Dir said.</li>
			<li>New SOR = existing + every possible rqmt.</li>
		</ul>
		<div class="relative">
			<div class="absolute inset-x-1/4 -z-10 jumbo:mt-20">
				<div class="set-a footprint rotate-[180deg]"></div>
				<div class="set-a footprint -translate-x-16 rotate-[200deg]"></div>
				<div class="set-a footprint -translate-x-2 rotate-[190deg]"></div>
				<div class="set-a footprint -translate-x-20 rotate-[200deg]"></div>
				<div class="set-a footprint -translate-x-4 rotate-[190deg]"></div>
				<div class="set-a footprint -translate-x-20 rotate-[200deg]"></div>
				<div class="set-a footprint -translate-x-6 rotate-[190deg]"></div>
				<div class="set-a footprint -translate-x-20 rotate-[200deg]"></div>
				<div class="set-a footprint -translate-x-6 rotate-[190deg]"></div>
			</div>
		</div>
	</div>
</div>

<div class="mb-7 grid grid-cols-1 justify-items-center gap-x-8 px-3 lg:grid-cols-12 lg:px-20">
	<div class="box self-center lg:col-span-8">
		<h2 class="headline border-b-2 border-base-content pb-2 lg:text-5xl">
			<span class="bg-base-100">You're too harsh!</span>
		</h2>
		<p class="bg-base-100 py-5 lg:text-xl">
			I'm not nice (though certainly not at Linus' level). I don't know a way to say the stuff here
			nicely. I'd personally prefer someone to just tell me if I'm screwing things up. If you're
			doing good, share your wisdom with everyone else in a nicer way.
		</p>
		<div class="relative">
			<div class="absolute inset-x-3/4 -z-10 jumbo:mt-20">
				<div class="set-b footprint rotate-[180deg]"></div>
				<div class="set-b footprint translate-x-16 rotate-[160deg]"></div>
				<div class="set-b footprint translate-x-2 rotate-[170deg]"></div>
				<div class="set-b footprint translate-x-20 rotate-[160deg]"></div>
				<div class="set-b footprint translate-x-4 rotate-[170deg]"></div>
				<div class="set-b footprint translate-x-24 rotate-[160deg]"></div>
				<div class="set-b footprint translate-x-6 rotate-[170deg]"></div>
				<div class="set-b footprint translate-x-28 rotate-[160deg]"></div>
				<div class="set-b footprint translate-x-6 rotate-[170deg]"></div>
			</div>
		</div>
	</div>
	<div class="pic-7 lg:col-span-4">
		<figure class="lg:avatar">
			<div class="lg:mask lg:mask-squircle">
				<enhanced:img
					src={unoptimised4}
					alt="Red pandas, because they're cute"
					class="transition duration-3000 hover:scale-125"
					sizes="(min-width:1920px) 800px, (min-width:1200px) 600px,400px" />
			</div>
		</figure>
	</div>
</div>
<div
	class="mb-7 grid grid-cols-1 justify-items-center gap-x-8 gap-y-8 px-3 lg:grid-cols-12 lg:px-20">
	<div class="pic-8 lg:col-span-4">
		<figure class="lg:avatar">
			<div class="lg:mask lg:mask-squircle">
				<enhanced:img
					src={unoptimised3}
					alt="Red pandas, because they're cute"
					class="transition duration-3000 hover:scale-125"
					sizes="(min-width:1920px) 800px, (min-width:1200px) 600px,400px" />
			</div>
		</figure>
	</div>
	<div class="box self-center lg:col-span-8">
		<h2 class="headline border-b-2 border-base-content pb-2 lg:text-5xl">
			<span class="bg-base-100">You're an idiot too, you think this is a good product?</span>
		</h2>
		<p class="bg-base-100 py-5 lg:text-xl">
			In any case Apptitude only costs me $13.28/yr (incl GST), for the domain name. I got to learn
			Svelte through this, so it's not wasted effort. If you think this sucks, cool. It's cheap
			enough to write off without second thought. (This also helped me learn Svelte5 and Sveltekit.)
		</p>
		<div class="relative">
			<div class="absolute inset-x-1/4 -z-10 jumbo:mt-20">
				<div class="set-a footprint rotate-[180deg]"></div>
				<div class="set-a footprint -translate-x-16 rotate-[200deg]"></div>
				<div class="set-a footprint -translate-x-2 rotate-[190deg]"></div>
				<div class="set-a footprint -translate-x-20 rotate-[200deg]"></div>
				<div class="set-a footprint -translate-x-4 rotate-[190deg]"></div>
				<div class="set-a footprint -translate-x-20 rotate-[200deg]"></div>
				<div class="set-a footprint -translate-x-6 rotate-[190deg]"></div>
				<div class="set-a footprint -translate-x-20 rotate-[200deg]"></div>
				<div class="set-a footprint -translate-x-6 rotate-[190deg]"></div>
				<div class="set-a footprint -translate-x-20 rotate-[200deg]"></div>
				<div class="set-a footprint -translate-x-6 rotate-[190deg]"></div>
				<div class="set-a footprint -translate-x-20 rotate-[200deg]"></div>
				<div class="set-a footprint -translate-x-6 rotate-[190deg]"></div>
			</div>
		</div>
	</div>
</div>
<div class="mb-12 grid grid-cols-1 justify-items-center gap-x-8 px-3 lg:grid-cols-12 lg:px-20">
	<div class="box mb-8 w-full self-center lg:col-span-8">
		<h2 class="headline border-b-2 border-base-content pb-2 lg:text-5xl">
			<span class="bg-base-100">I found Apptitude very useful!</span>
		</h2>
		<p class="bg-base-100 py-5 lg:text-xl">
			I'd love to hear from you - <a
				href="https://forms.gle/zhfhmSR4RSA6FJNf6"
				class="hover:text-primary">via this Google form <TablerLink class="inline" /></a
			>.
		</p>
	</div>
	<div class="pic-9 lg:col-span-4">
		<figure class="lg:avatar">
			<div class="lg:mask lg:mask-squircle">
				<enhanced:img
					src={unoptimised2}
					alt="Red pandas, because they're cute"
					class="transition duration-3000 hover:scale-125"
					sizes="(min-width:1920px) 800px, (min-width:1200px) 600px,400px" />
			</div>
		</figure>
	</div>
</div>

<style>
	@media (min-width: 1281px) {
		.footprint {
			background-image: url('/paw.svg');
			height: 50px;
			width: 50px;
			background-size: contain;
			opacity: 0;
		}
	}
</style>
