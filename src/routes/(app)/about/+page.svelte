<script lang="ts">
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
	import ContentWrapper from '$lib/ContentWrapper.svelte';
	import AboutSegment from '$lib/AboutSegment.svelte';

	let { data } = $props();

	let page: string = 'about';
</script>

<svelte:head>
	<title>Apptitude - About</title>
</svelte:head>

<ContentWrapper
	title="About"
	category=""
	{page}
	urlSelf={data.url}
	subtitle="If you need an opinion, I have plenty to spare.">
	<AboutSegment question="Who are you?">
		<p>I work in the public sector and I did tech related stuff in the last few years.</p>
	</AboutSegment>

	<AboutSegment question="How can I trust what you wrote?">
		<p>
			Yeah you shouldn't if you don't want to. Take these as suggestions, not instructions. And my
			views are mostly pitched as things that should sound an alarm, but context matters, and only
			you can judge whether your way of working is good.
		</p>
	</AboutSegment>

	<AboutSegment question="How did you gather the info?">
		<p>
			I referred liberally to past discussions while in Smart Nation Singapore, with tech agencies
			in Govt, and with companies outside. I also watched and read a lot, mainly on YouTube. I enjoy
			stuff on products, entrepreneurship, engineering and the business side of tech, so it was
			trivial to construct a playlist of sorts over here.
		</p>
	</AboutSegment>

	<AboutSegment
		question="I don't need this. I don't know anything covered here but I'm doing mightily fine!”">
		<p>
			Sure! Nothing here is cardinal. But in my experience it's easy to tell those who know from
			those who don't.
		</p>
	</AboutSegment>
</ContentWrapper>
