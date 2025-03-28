<script lang="ts">
	import NavAside from '$lib/NavAside.svelte';
	import CarbonCheckmarkFilled from '$lib/assets/svg/CarbonCheckmarkFilled.svelte';
	import CarbonCloseFilled from '$lib/assets/svg/CarbonCloseFilled.svelte';
	import GuideSplitContent from '$lib/GuideSplitContent.svelte';
	import GuideSplitEqual from '$lib/GuideSplitEqual.svelte';
	import GuideSplitLongContent from '$lib/GuideSplitLongContent.svelte';
	import GuideExample from '$lib/GuideExample.svelte';
	import product from '$lib/assets/product.webp?enhanced&w=300';
	import NewCrumbs from '$lib/NewCrumbs.svelte';
	import { type Contents } from '$lib/Types';
	import { onMount } from 'svelte';
	import NavToc from '$lib/NavToc.svelte';
	import ContentWrapper from '$lib/ContentWrapper.svelte';
	import GuideExampleLong from '$lib/GuideExampleLong.svelte';
	import NewWrap from '$lib/NewWrap.svelte';
	let { data } = $props();

	//Props needed for PageWrapper component
	let contents: Contents[] = [
		{ id: 'what-makes-a-product-plan', title: 'What makes a product plan?' },
		{ id: 'the-problem', title: 'The Problem' },
		{ id: 'measurable-outcomes-targets', title: 'Measurable Outcomes and Targets' },
		{ id: 'risks', title: 'Risks' },
		{ id: 'product-plan-template', title: 'Product Plan Template' },
		{ id: 'credits', title: 'Credits' },
	];
	let currentSection: any = $state();
	let path: string[] = $derived(data.url.split('/'));
	let category: string = $derived(path[1]);
	let page: string = $derived(path[2]);

	onMount(() => {
		let contentsCollection = document.getElementsByClassName(
			'contents-observer',
		) as HTMLCollectionOf<HTMLDataListElement>;
		let observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						currentSection = entry.target.id;
					}
				});
			},
			{
				rootMargin: '-10% 0% -10% 0%',
				threshold: 0,
			},
		);

		for (let i of contentsCollection) {
			observer.observe(i);
		}
	});
</script>

<svelte:head>
	<title>Apptitude - Product Plan 101</title>
</svelte:head>

<NewWrap title="Product Plan 101">
	<article
		class="prose-section:mt-20 prose-h2:mb-6 prose-h3:mb-6 prose-h3:mt-12 prose-h5:mb-4 prose-p:mb-4 space-y-20 pb-10">
		<section
			id="what-makes-a-product-plan"
			class="contents-observer grid grid-cols-4 gap-x-8 gap-y-16">
			<div class="col-span-4">
				<h2 class="border-b-base-content/20 mb-4 border-b-4 pb-2 text-2xl font-bold lg:text-4xl">
					1. What makes a product plan?
				</h2>
				<p>I promise it's something tangible.</p>
			</div>
			<h3 class="text-2xl font-bold">Key Ingredients</h3>
			<div class="col-span-3 mt-1">
				<p>A good product plan consists of 3 key ingredients:</p>
				<ul class="ms-8 mt-4 list-disc space-y-4">
					<li>A clear problem statement</li>
					<li>Measurable outcomes with targets</li>
					<li>Identification of key risks with mitigation steps</li>
				</ul>
			</div>

			<h3 class="text-2xl font-bold">What is Good?</h3>
			<div class="col-span-3 mt-1">
				<p>In general, a good plan follows 3 principles:</p>
				<ul class="ms-8 mt-4 list-disc space-y-4">
					<li>
						Use Numbers Over Descriptions, because quantitative data aids objective decision-making.
					</li>
					<li>
						Make Reasonable Assumptions, provide estimates when reliable data is lacking to
						facilitate discussion.
					</li>
					<li>
						Apply the 'Goldilocks Rule'. But This is often easier said than done. Similar to civil
						service staff work, it takes good judgement to determine the right amount of details in
						your plan. Too little details gives people little confidence to decide, whereas too much
						distracts the decision-makers.
					</li>
				</ul>
			</div>
		</section>

		<section id="the-problem" class="contents-observer grid grid-cols-4 gap-x-8 gap-y-16">
			<div class="col-span-4">
				<h2 class="border-b-base-content/20 mb-4 border-b-4 pb-2 text-2xl font-bold lg:text-4xl">
					2. The Problem
				</h2>
				<p>A problem well put is half-solved.</p>
			</div>

			<h3 class="text-2xl font-bold">Ask Yourself</h3>
			<div class="col-span-3">
				<div class="space-y-4 py-4">
					<p>You'll need to answer these questions:</p>
					<ul class="ms-8 list-disc space-y-4">
						<li>Who is the user?</li>
						<li>What are their pain points?</li>
						<li>Describe the problem as the user's needs that are not being addressed.</li>
						<li>How big or meaningful is the problem?</li>
					</ul>
				</div>
				<GuideExample>
					{#snippet example()}
						<ul class="space-y-4">
							<li>
								<CarbonCheckmarkFilled class="text-success me-2 mb-1 inline" />80% of license
								applications on XXX’s system A take >6 mths to resolve, against target of 3 mths.
							</li>
							<li>
								<CarbonCheckmarkFilled class="text-success me-2 mb-1 inline" />This results in
								revenue loss of $X per year for these businesses.
							</li>
							<li>
								<CarbonCheckmarkFilled class="text-success me-2 mb-1 inline" />With N license
								approvals a year, the overall impact is significant.
							</li>
						</ul>
					{/snippet}
				</GuideExample>

				<GuideExampleLong showButton={false}>
					{#snippet example()}
						<ul class="space-y-4">
							<li>
								<p>
									Does your thing solve a real problem in the world and are people clamoring,
									needing it badly?
								</p>
								<p>
									... during those 20 minutes (of product downtime), our customers weren't furious.
									They weren't emailing us like crazy... I didn't realize at the time that was the
									signal that we did not have product market fit.
								</p>
								<p class="mt-6 text-end">
									<a href="https://www.youtube.com/watch?v=qbZQjprTnrU"
										>Jeff Weinstein | Lenny's Podcast</a>
								</p>
							</li>
						</ul>
					{/snippet}
				</GuideExampleLong>
			</div>
			<h3 class="text-2xl font-bold">Clear Problem Statements</h3>

			<ul class="col-span-3 ms-8 mt-1 list-disc space-y-4">
				<li>Who's the user?</li>
				<li>
					Focus on a few specific segments (e.g., business seeking license approvals) rather than
					large segments (e.g., all businesses in Singapore).
				</li>
				<li>
					Don't confuse the customer and the user. The customer (MOX) pays for the product, the user
					(business owners) interacts with the product.
				</li>
			</ul>

			<h3 class="text-2xl font-bold">
				What is the pain point? (e.g. approvals taking 6 months instead of 3 months)
			</h3>

			<ul class="col-span-3 ms-8 mt-1 list-disc space-y-4">
				<li>
					What happens if we left this problem alone?
					<GuideExample>
						{#snippet example()}
							<div>
								<CarbonCloseFilled class="text-warning me-2 mb-1 inline" />Unclear and outdated
								documentation were flagged out as areas of risk during the audit reviews.
							</div>
							<div>
								<CarbonCheckmarkFilled class="text-success me-2 mb-1 inline" /><span
									class="text-primary">XX cases</span>
								of non-compliance to prevailing policies
								<span class="text-primary">cost us $XM</span> each year because these users relied on
								guidelines in outdated policy documents strewn across our employee portal.
							</div>
						{/snippet}
					</GuideExample>
				</li>
				<li>
					If you need a benchmark, compare with alternate solutions or adjacent industries.
					<GuideExample>
						{#snippet example()}
							<div>
								<CarbonCheckmarkFilled class="text-success me-2 mb-1 inline" />Approvals continue to
								take 6 mths, or more with X new policy
							</div>
							<div>
								<CarbonCheckmarkFilled class="text-success me-2 mb-1 inline" />System B takes 4 mths
								per approval
							</div>
							<div>
								<CarbonCheckmarkFilled class="text-success me-2 mb-1 inline" />F&B licenses take 3
								mths per approval
							</div>
						{/snippet}
					</GuideExample>
				</li>
			</ul>

			<h3 class="text-2xl font-bold">Clearly Describe Unmet User Needs</h3>
			<ul class="col-span-3 ms-8 mt-1 list-disc space-y-4">
				<li>
					Based on data collected from users and speaking to them, state the user's characteristics,
					needs, and why they have that need.
				</li>
				<li>
					Consider expressing it in the form of <a
						href="/guides/research"
						class="text-primary underline">problem statement</a
					>.
					<GuideExample>
						{#snippet example()}
							<div>
								<CarbonCheckmarkFilled class="text-success me-2 mb-1 inline" /><span
									class="text-primary">[Name of user persona]</span>
								is a
								<span class="text-primary">[type of user]</span>
								who needs
								<span class="text-primary">[type of user experience]</span>
								because
								<span class="text-primary">[benefits of user experience]</span>.
							</div>
							<div>
								<CarbonCheckmarkFilled class="text-success me-2 mb-1 inline" />Anne is a staff
								officer who writes AORs for overseas trips. She needs an efficient way to double
								check her submission against all applicable finance guidelines. She presently
								searches, downloads, and toggles among more than 5 separate finance policy documents
								for each AOR.
							</div>
						{/snippet}
					</GuideExample>
				</li>
			</ul>
			<h3 class="text-2xl font-bold">What is the size of the problem?</h3>

			<div class="col-span-3 mt-1">
				<ul class="ms-8 list-disc space-y-4">
					<li>
						When calculating the total addressable market (maximum potential target audience),
						working up from a small unit (e.g., number of applications to assess) is often better
						than working down from a large unit (e.g., no. of ministries that need to assess
						applications).
					</li>
					<li>
						A logical, back-of-the-envelope estimate with reasonable assumptions is often
						sufficient.
					</li>
				</ul>
				<GuideExample>
					{#snippet example()}
						<div>
							<CarbonCheckmarkFilled class="text-success me-2 mb-1 inline" />Revenue loss of $XXM
							per year for X no. of businesses
						</div>
					{/snippet}
				</GuideExample>
				<GuideExample>
					{#snippet example()}
						<div>
							<CarbonCheckmarkFilled class="text-success me-2 mb-1 inline" />~3 man months are spent
							by 15 officers monthly collating, cleaning, emailing, and drafting MS Word reports on
							service transactions, which are done manually on Excel, Outlook, Word.
							<CarbonCheckmarkFilled class="text-success me-2 mb-1 inline" />Symptoms of poor
							service delivery is only identified and acted upon up 2 weeks later, because data and
							business insights are manually collated and generated.
						</div>
					{/snippet}
				</GuideExample>
			</div>

			<h3 class="text-2xl font-bold">Finding it hard?</h3>

			<div class="col-span-3 mt-1">
				<p>You might have too many problems in one problem statement.</p>
				<ul class="ms-8 mt-4 list-disc space-y-4">
					<li>
						Break down large problem statements into its components.
						<GuideExample>
							{#snippet example()}
								<div>
									<CarbonCloseFilled class="text-warning me-2 mb-1 inline" />Users struggle to find
									the correct employee HR service they need in XXX employee portal, which also
									doubly frustrates them when it randomly crashes while they're filling in an
									application. Employee productivity drops and this also creates workload for manual
									application processing.
									<div
										class="tooltip"
										data-tip="Multiple 'whats' here relating to discoverability and reliability">
										<button class="btn btn-outline btn-warning btn-xs ms-1">Why?</button>
									</div>
								</div>
							{/snippet}
						</GuideExample>
					</li>
					<li>
						When first starting out, it is better to focus on a narrow problem statement, affecting
						a narrow set of users. Once you have solved that problem, you can expand out to other
						related problem statements and/or other similar users.
					</li>
					<li>
						For ‘brownfield’ projects (i.e., tech refresh), the problem statement is not that the
						system is approaching End-of-Life (EOL) or End-of-Service (EOS).
					</li>
					<ul class="ms-8 list-disc space-y-4">
						<li>
							Rather, consider what problem the existing system was solving and think about how you
							can better solve that when rebuilding it.
						</li>
						<li>
							Reaching EOL or EOS tells you the timeline, not the value.
							<GuideExample>
								{#snippet example()}
									<div>
										<CarbonCloseFilled class="text-warning me-2 mb-1 inline" />XXX system will reach
										end of life in 2025, and we need $XXXM to do a tech refresh, as otherwise
										citizens would no longer be able to transact digitally for their XX
										applications.
										<div
											class="tooltip"
											data-tip="This tries to paint EOL as the problem to be solved, when the system might not even be solving the problem well.">
											<button class="btn btn-outline btn-warning btn-xs ms-1">Why?</button>
										</div>
									</div>
								{/snippet}
							</GuideExample>

							<GuideExample>
								{#snippet example()}
									<div>
										<CarbonCloseFilled class="text-warning me-2 mb-1 inline" />Under the XXX system
										v2 milestone, we could not complete development to improve searchability and
										user centricity. Given the AI boom, it is timely to revisit development for
										those aspects, in the form of building an AI chatbot that can improve search and
										user experience.
										<div
											class="tooltip"
											data-tip="Inability to deliver features previously is used as justification for an AI chatbot, without explaining why an AI chatbot solves searchability.">
											<button class="btn btn-outline btn-warning btn-xs ms-1">Why?</button>
										</div>
									</div>
								{/snippet}
							</GuideExample>
						</li>
					</ul>
				</ul>
			</div>

			<h3 class="text-2xl font-bold">Common Mistakes</h3>

			<div class="col-span-3 mt-1">
				<h5 class="text-lg font-bold italic">Too Aspirational</h5>
				<ul class="ms-8 mt-4 list-disc space-y-4">
					<li>
						Being very aspirational when crafting a problem statement can prevent us from diagnosing
						the actual problem.
					</li>
				</ul>
				<GuideExample>
					{#snippet example()}
						<div>
							<CarbonCloseFilled class="text-warning me-2 mb-1 inline" />We propose to support local
							small and medium enterprises to do well and expand both locally and into Southeast
							Asia.
							<div class="tooltip" data-tip="What is preventing local businesses from scaling?">
								<button class="btn btn-outline btn-warning btn-xs ms-1">Why?</button>
							</div>
						</div>
					{/snippet}
				</GuideExample>

				<h5 class="text-lg font-bold italic">Describing the solution</h5>
				<ul class="ms-8 mt-4 list-disc space-y-4">
					<li>Most problem statements have several potential solutions.</li>
					<li>Your goal is to find the best solution.</li>
					<li>
						Hardcoding a specific solution in the problem statement artificially narrows the range
						of solutions up for consideration, almost akin to premature optimization.
					</li>
				</ul>
				<GuideExample>
					{#snippet example()}
						<div>
							<CarbonCloseFilled class="text-warning me-2 mb-1 inline" />We do not have a system
							that can collect comprehensive information that businesses give us in the process of
							license applications.
							<div class="tooltip" data-tip="">
								<button class="btn btn-outline btn-warning btn-xs ms-1">Why?</button>
							</div>
						</div>
					{/snippet}
				</GuideExample>
				<GuideExample>
					{#snippet example()}
						<div>
							<CarbonCloseFilled class="text-warning me-2 mb-1 inline" />Employees need to go
							through long documents to find relevant clauses, so they need an AI chatbot that can
							fetch, communicate, and process rules for them, and we can improve the search
							experience in XXX system today.
							<div
								class="tooltip"
								data-tip="Describes solution and there are multiple problems here,">
								<button class="btn btn-outline btn-warning btn-xs ms-1">Why?</button>
							</div>
						</div>
					{/snippet}
				</GuideExample>
			</div>
		</section>

		<section
			id="measurable-outcomes-targets"
			class="contents-observer grid grid-cols-4 gap-x-8 gap-y-16">
			<div class="col-span-4">
				<h2 class="border-b-base-content/20 mb-4 border-b-4 pb-2 text-2xl font-bold lg:text-4xl">
					3. Measurable Outcomes & Targets
				</h2>
				<p class="mb-4">
					The right outcome metrics tell us if we are moving in the right direction, to solve the
					identified problem.
				</p>
				<p class="mb-4">
					Metrics force trade-offs and decisions. They focus people on the direction where the
					collective can best feel like they can build a better product, satisfy more customers,
					bring in more sales.
				</p>
				<GuideExampleLong>
					{#snippet example()}
						<div class="space-y-6">
							<p>
								I had been working in our payments group at Stripe for a bit, and then I started
								working on some of our banking and incorporation services. In Atlas, when I started
								working on it, it had had some success. It had already existed for four or five
								years prior to me spending time on it. But when I started to look at the support
								tickets, people were pretty unhappy frequently. They had a DocuSign stuck in their
								email box. They needed a co-founder's address, but they didn't know their
								co-founder's address. They couldn't log into the dashboard to figure out their 83(b)
								manual filing instructions.
							</p>
							<p>
								We saw this basically in the first week of spending time on Atlas. I was just like,
								"Just show me all the support tickets. Are they happy support tickets? People
								writing in being like, 'Oh, I love this service, it's absolutely fantastic. Can you
								just do A, B, C more for me?' Or are they sad support tickets?"
							</p>
							<p>
								<span class="text-warning"
									>And they're like, "Oh my God, they're all sad support tickets." We're just asking
									ourselves, "Well, why would someone recommend Atlas to a friend?"</span>
							</p>
							<p>
								I was like, "Well, it would have to accomplish A, B, and C activities for them. It
								would have to get their company, it would have to handle getting their tax ID from
								the IRS. It'd have to handle all the downstream administrivia." <span
									class="text-warning"
									>But surely, if they had a bunch of support tickets at the end, they're not going
									to go tell their friends to use this thing. We could measure all of the
									intermediate parts, we could measure the success rate and the frequency of
									incorporation services and we do all those things, but if you looked at the
									support tickets, there's just no way if you had a support ticket, you would
									recommend it to a friend.</span>
							</p>
							<p>
								So we suggested this metric to ourselves, companies that have no support tickets
								through the incorporation service.
							</p>

							<p>
								The whole process, from the moment you start the application open, actually the
								first page load at the very beginning, all the way through the process waiting for
								the government, waiting for the IRS, and we give you two more weeks to write into
								support. We give an extra buffer two weeks. And if you get through that whole thing
								with no support tickets, that's a yes. If you have any number of support tickets,
								that's a no. And we just looked at the percentage of founders that were going
								through the service with zero support tickets, which is very different than looking
								at an average, right? You could have the average as 0.3, but that doesn't
								necessarily mean that getting to 0.2 is going to cause them to tell their friends
								more. We looked and only 15% of founders were getting through Atlas with zero
								support tickets through that metric.
							</p>

							<p>
								I just thought, "Okay, well let's just drive that number way up, and let's look at
								the support tickets aside what people are needing and we'll bake it into the
								product, and presumably it'll fix it. People will like that more and then tell their
								friends." And over about 18 months, we took that number from 15% to 85. We basically
								just flipped it. And you can look at the market share plotted on the same timeframe
								and it's the same shape.
							</p>
							<p>
								<span class="text-success"
									>I think you have to find a measure by which it speaks directly to what the
									customer wanted, and that if you accidentally leaked your dashboard to them, your
									customer would be ecstatic to learn that that's what you were measuring the whole
									time.</span>
								If we were to showcase the internal Atlas metrics, which we often just screenshot and
								publish, I think they'd be pretty happy to hear that we were spending all of our time
								making sure that none of them had support tickets.
							</p>

							<p class="mt-6 text-end">
								<a href="https://www.youtube.com/watch?v=qbZQjprTnrU"
									>Jeff Weinstein | Lenny's Podcast</a>
							</p>
						</div>
					{/snippet}
				</GuideExampleLong>
			</div>
			<h3 class="text-2xl font-bold">Attributes of the Right Outcome Metrics</h3>
			<div class="col-span-3 mt-1">
				<p>Outcome metrics should be relevant, frequent, objective, and specific.</p>
				<GuideExample>
					{#snippet example()}
						<div>
							<CarbonCheckmarkFilled class="text-success me-2 mb-1 inline" /><span
								class="text-success"
								>% of applications where time from first submission to communication of outcome is ≤
								3 months</span>
						</div>
					{/snippet}
				</GuideExample>
				<h5 class="text-lg font-bold italic">Relevant</h5>
				<p>Improvement or worsening of problem should show in metrics.</p>
				<GuideExample>
					{#snippet example()}
						<div>
							<CarbonCloseFilled class="text-warning me-2 mb-1 inline" />% of successful
							applications
							<div class="tooltip" data-tip="Irrelevant to problem of processing time.">
								<button class="btn btn-outline btn-warning btn-xs ms-1">Why?</button>
							</div>
						</div>
						<div>
							<CarbonCheckmarkFilled class="text-success me-2 mb-1 inline" />...
							<span class="text-success"
								>time from first submission to communication of outcome</span
							>...
						</div>
					{/snippet}
				</GuideExample>

				<h5 class="text-lg font-bold italic">Frequent</h5>
				<p>Changes in solution should quickly show in metrics.</p>
				<GuideExample>
					{#snippet example()}
						<div>
							<CarbonCloseFilled class="text-warning me-2 mb-1 inline" />% of applications resolved
							within 3 months, calculated based on data extracted from system by vendor annually
							<div
								class="tooltip"
								data-tip="Calculating the metric annually results in a long lag time before we can tell whether our
					interventions are working.">
								<button class="btn btn-outline btn-warning btn-xs ms-1">Why?</button>
							</div>
						</div>
						<div>
							<CarbonCheckmarkFilled class="text-success me-2 mb-1 inline" />... to communication of
							outcome is
							<span class="text-success">≤ 3 months</span>
						</div>
					{/snippet}
				</GuideExample>

				<h5 class="text-lg font-bold italic">Objective</h5>
				<p>
					Metrics should not be based on subjective impressions (e.g., better to use timestamps to
					measure time taken to perform X than to ask users to self-report time spent on X).
				</p>

				<GuideExample>
					{#snippet example()}
						<div>
							<CarbonCloseFilled class="text-warning me-2 mb-1 inline" />% of applicants which
							report having their applications resolved within 3 months
							<div
								class="tooltip"
								data-tip="Self-reported metrics tend to be less
					accurate and are best avoided, especially when objective measures are available.">
								<button class="btn btn-outline btn-warning btn-xs ms-1">Why?</button>
							</div>
						</div>
						<div>
							<CarbonCheckmarkFilled class="text-success me-2 mb-1 inline" />% of
							<span class="text-success">applications</span>...
						</div>
					{/snippet}
				</GuideExample>

				<h5 class="text-lg font-bold italic">Specific</h5>
				<p>
					Two persons reading the same metric must be able to calculate them independently without
					need for further clarifications. Aim for a scientific level of precision when describing
					the metric.
				</p>
				<GuideExample>
					{#snippet example()}
						<div>
							<CarbonCloseFilled class="text-warning me-2 mb-1 inline" />% of applications resolved
							within 3 months
							<div
								class="tooltip"
								data-tip="This is a good metric but could be more precise e.g., when does the timer
					start – at time of first submission? when relevant materials are submitted? when
					outstanding queries have been clarified?">
								<button class="btn btn-outline btn-warning btn-xs ms-1">Why?</button>
							</div>
						</div>
						<div>
							<CarbonCheckmarkFilled class="text-success me-2 mb-1 inline" />...
							<span class="text-success"
								>time from first submission to communication of outcome</span
							>...
						</div>
					{/snippet}
				</GuideExample>

				<GuideExample>
					{#snippet example()}
						<div>
							<CarbonCloseFilled class="text-warning me-2 mb-1 inline" />Objective: Ensure the
							currency of guidelines documents using new administration feature in XXX system
							<div
								class="tooltip"
								data-tip="Terms used here, like currency and outdated, are too subjective. There are usually also 2-4 KRs for each Objective, not 1-to-1.">
								<button class="btn btn-outline btn-warning btn-xs ms-1">Why?</button>
							</div>
						</div>
						<div>
							<CarbonCloseFilled class="text-warning me-2 mb-1 inline" />Key Result: No outdated
							content on XXX system.
							<div
								class="tooltip"
								data-tip="Terms used here, like currency and outdated, are too subjective. There are usually also 2-4 KRs for each Objective, not 1-to-1.">
								<button class="btn btn-outline btn-warning btn-xs ms-1">Why?</button>
							</div>
						</div>
						<div>
							<CarbonCheckmarkFilled class="text-success me-2 mb-1 inline" />Objective: Search
							results contain only content from the latest version of guidelines documents.
						</div>
						<div>
							<CarbonCheckmarkFilled class="text-success me-2 mb-1 inline" />Key Result: Search
							microservice will update index with content from outdated guidelines documents within
							1 min of a new version upload.
						</div>
					{/snippet}
				</GuideExample>

				<GuideExample>
					{#snippet example()}
						<div>
							<CarbonCloseFilled class="text-warning me-2 mb-1 inline" />Objective: Improve
							information retrieval
							<div class="tooltip" data-tip="What do we mean by improve information retrieval?">
								<button class="btn btn-outline btn-warning btn-xs ms-1">Why?</button>
							</div>
						</div>
						<div>
							<CarbonCheckmarkFilled class="text-success me-2 mb-1 inline" />Objective: Users get an
							accurate and concise explanation of questions on employee administrative policies.
						</div>
					{/snippet}
				</GuideExample>

				<GuideExample>
					{#snippet example()}
						<div>
							<p>
								Instead of sitting around all day and saying, "Hey, I heard all these customer
								problems, we should build X, Y, and Z." And another person could absolutely
								reasonably say, "Well, I heard from these customers, we should build one, two and
								three." And they're all true. We could have a lot of success in both, but the
								majority case is that we don't build either and we sit around and argue and bicker
								and we go slowly. "What are we going to do to naturally, organically every day,
								orient a larger group of people in the right direction and see if our tactics are
								generating progress over time for a customer from their perspective?" And metrics on
								the left and a series of tweets on the right is a pretty great combo.
							</p>
							<p class="mt-6 text-end">
								<a href="https://www.youtube.com/watch?v=qbZQjprTnrU"
									>Jeff Weinstein | Lenny's Podcast</a>
							</p>
						</div>
					{/snippet}
				</GuideExample>

				<p>
					And in my opinion, if the problem being solved is incorrect, metrics that seem alright
					will be wrong as well.
				</p>
				<GuideExample>
					{#snippet example()}
						<div>
							<CarbonCloseFilled class="text-warning me-2 mb-1 inline" />Key Result: Less than 1 min
							to fetch requested information through an AI search engine
							<div
								class="tooltip"
								data-tip="The problem being solved is the time it takes to display relevant content that can answer the user's questions, not the time it takes to fetch that information or the time it takes to run it via an AI chatbot. Measuring this is closing us off to alternate ways of improving the time it takes to get a user the desired information, e.g., improving Info Architecture.">
								<button class="btn btn-outline btn-warning btn-xs ms-1">Why?</button>
							</div>
						</div>
						<div>
							<CarbonCheckmarkFilled class="text-success me-2 mb-1 inline" />Key Result: User's
							question on employee admin guidelines is answered within 1 min of arriving on landing
							page
						</div>
					{/snippet}
				</GuideExample>
			</div>
			<h3 class="text-2xl font-bold">Set Targets based on Cost Per Impact</h3>

			<div class="col-span-3 mt-1">
				<p>
					Generally, when setting targets, it is useful to consider what the cost per impact of the
					product will be.
				</p>
				<GuideExample>
					{#snippet example()}
						<div>
							<CarbonCheckmarkFilled class="text-success me-2 mb-1 inline" />Cost per impact =
							Annual Total Cost / Target units of impact achieved in the relevant year
						</div>
					{/snippet}
				</GuideExample>

				<p>
					If the cost per impact is unreasonably high, you should consider whether the targets can
					reasonably be raised.
				</p>
				<p>
					If not, you should reconsider whether it is financially worthwhile to continue the
					project.
				</p>

				<GuideExample>
					{#snippet example()}
						<div class="overflow-x-auto">
							<table class="table">
								<thead>
									<tr>
										<th>Item</th>
										<th>Current</th>
										<th>New</th>
									</tr></thead>
								<tbody>
									<tr>
										<td>Annual platform cost (Cost)</td>
										<td>$100,000</td>
										<td>$200,000</td>
									</tr>
									<tr>
										<td>Annual applications</td>
										<td>100,000</td>
										<td>100,000</td>
									</tr>
									<tr>
										<td>% Applications resolved within 3 months</td>
										<td>10%</td>
										<td>30%</td>
									</tr>
									<tr>
										<td># Applications resolved within 3 months (Impact)</td>
										<td>10,000</td>
										<td>30,000</td>
									</tr>
									<tr>
										<td>Cost per impact</td>
										<td>$10</td>
										<td>$6.67</td>
									</tr>
								</tbody>
							</table>
						</div>
					{/snippet}
				</GuideExample>
			</div>
		</section>
		<section id="risks" class="contents-observer grid grid-cols-4 gap-x-8 gap-y-16">
			<div class="col-span-4">
				<h2 class="border-b-base-content/20 mb-4 border-b-4 pb-2 text-2xl font-bold lg:text-4xl">
					4. Risks
				</h2>
				<p>Of course it'll come with some risks.</p>
			</div>

			<h3 class="text-2xl font-bold">Why mitigate risks?</h3>

			<div class="col-span-3 mt-1">
				<p>
					Risk mitigation is important so we can be confident in delivering an effective product on
					time. At each point throughout the life of your product, it is useful to think about the
					risks that have been mitigated and those which remain to be mitigated through future
					action.
				</p>
				<p class="mt-4">Broadly, there are three types of risk:</p>
				<ul class="ms-8 mt-4 list-disc space-y-4">
					<li>
						Market risk - the product will not be used, or even if it is used, it will not solve the
						identified problem.
					</li>
					<li>
						Technical risk - the solution cannot be built within the time and resource constraints.
					</li>
					<li>
						Team risk - the individuals responsible lack the know-how or commitment to achieve the
						desired outcomes.
					</li>
				</ul>
			</div>

			<h3 class="text-2xl font-bold">Market Risk - Will this work?</h3>
			<div class="col-span-3 mt-1">
				<p>Determine the Theory of Change</p>
				<ul class="ms-8 mt-4 list-disc space-y-4">
					<li>How will your solution achieve the desired outcome?</li>
					<li>It's too simplistic to think “If we do A, B will happen”.</li>
					<li>In the real world, there are typically several steps between A and B.</li>
					<li>
						Map out your user journey and interactions and determine what needs to change at each
						step to lead to the desired outcome.
					</li>
				</ul>
				<GuideExample>
					{#snippet example()}
						<p>
							Reduce time taken for 80% of applications from 6 months to 3 months by introducing
						</p>
						<ul>
							<li class="ms-4 list-disc">Detailed form to collect more relevant information</li>
							<li class="ms-4 list-disc">
								Better UI to present info and cut need for clarifications
							</li>
						</ul>
					{/snippet}
				</GuideExample>

				<p>Identify the riskiest assumptions</p>
				<ul class="ms-8 mt-4 list-disc space-y-4">
					<li>There is usually some underlying assumption behind each step.</li>
					<li>
						Low-risk assumptions are ones over which we have a high degree of control or where past
						data has proven that we are unlikely to be wrong.
					</li>
					<li>
						High-risk assumptions are ones that we have minimal control or will fundamentally change
						our direction if proven wrong.
					</li>
				</ul>
				<GuideExample>
					{#snippet example()}
						<div class="overflow-x-auto">
							<table class="table">
								<thead>
									<tr>
										<th>Step</th>
										<th>Assumption</th>
										<th>Change</th>
										<th>Risk</th>
										<th>Level</th>
									</tr></thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>Users fill in application</td>
										<td>Better quality</td>
										<td
											>With more fields to complete, fatigued applicants might provide less accurate
											information</td>
										<td>Medium – This could increase the need for clarifications downstream</td>
									</tr>
									<tr>
										<td>2</td>
										<td>Users submit applications</td>
										<td>No change</td>
										<td>With a more complex form, we receive fewer submissions</td>
										<td>Low – businesses are strongly incentivised to apply for a license</td>
									</tr>
									<tr>
										<td>3</td>
										<td>Officers assess applications for completeness</td>
										<td>No change</td>
										<td>Officers might take more time to vet the detailed form for completeness</td>
										<td
											>Low – This step is relatively short compared to the rest and so has minimal
											impact</td>
									</tr>
									<tr>
										<td>4</td>
										<td>Officers clarify additional details with applicants</td>
										<td>Shorter duration</td>
										<td
											>Officers might take as much time, if not more, to clarify additional details</td>
										<td>High – this might fundamentally change our solution</td>
									</tr>
									<tr>
										<td>5</td>
										<td>Officers resolve applications</td>
										<td>No change</td>
										<td>Additional information will complicate decision-making</td>
										<td>Low – decision-making process is based on a simple checklist</td>
									</tr>
								</tbody>
							</table>
						</div>
					{/snippet}
				</GuideExample>

				<p>Validate the assumptions with a proof-of-concept (POC)</p>
				<ul class="ms-8 mt-4 list-disc space-y-4">
					<li>
						Focus on the higher risk assumptions and find ways to validate if they were true (i.e.,
						proofs-of-concept).
					</li>
					<li>
						Doing this early helps us find workarounds or pivot our solution before committing
						additional resources.
					</li>
				</ul>
				<GuideExample>
					{#snippet example()}
						<ul class="space-y-4">
							<li>
								<p>
									And so compartmentalizing those (key features) because ultimately you'll have too
									much scope creep if you try to solve everything at once and validate. Also you're
									not going to get signal too, like you're trying to test one thing at a time.
								</p>

								<p>
									The way that now I approach a lot of consumer product development is if this is
									true, then what next needs to be true for this thing to work out? And these layers
									of conditional statements. And the more layers you have, the higher risk your
									product is, so you should try to condense it to about like four things that must
									be true for the thing to work.
								</p>
								<p class="mt-6 text-end">
									<a href="https://www.youtube.com/watch?v=bhnfZhJWCWY"
										>Nikita Bier | Lenny's Podcast</a>
								</p>
							</li>
						</ul>
					{/snippet}
				</GuideExample>
			</div>
		</section>
		<section id="product-plan-template" class="contents-observer grid grid-cols-4 gap-x-8 gap-y-16">
			<div class="col-span-4">
				<h2 class="border-b-base-content/20 mb-4 border-b-4 pb-2 text-2xl font-bold lg:text-4xl">
					5. Product Plan Template
				</h2>
				<p>These are good starting points.</p>
			</div>
			<h3 class="text-2xl font-bold">5.1. Variant 1 (Amazon)</h3>

			<ul class="col-span-3 ms-8 mt-1 list-disc space-y-4">
				<li>Introduction: States the challenge or opportunity, and why it matters.</li>
				<li>
					Goals: The vision, what hitting the mark looks like. Paint a picture of achievement both
					inspiring and realistic.
				</li>
				<li>Tenets: Core values guiding your strategy.</li>
				<li>
					State of the Business: Where things currently stand, e.g., hard numbers, market standing,
					or any other pertinent details.
				</li>
				<li>
					Lessons Learnt: Assess previous efforts, identify effective strategies, learn from
					mistakes, and understand their causes.
				</li>
				<li>
					Strategic Priorities: Write tactics to tackle identified challenges in pursuit of stated
					goals.
				</li>
				<li>Appendix (optional): Extra info that avoids detracting main flow of proposal.</li>
			</ul>

			<h3 class="text-2xl font-bold">Variant 2</h3>

			<ul class="col-span-3 ms-8 mt-1 list-disc space-y-4">
				<li>Customer problem</li>
				<li>Observations</li>
				<li>Hypothesis</li>
				<li>Experiment</li>
				<li>Success Metrics</li>
			</ul>
		</section>
		<section id="credits" class="contents-observer grid">
			<h2 class="border-b-base-content/20 mb-4 border-b-4 pb-2 text-2xl font-bold lg:text-4xl">
				6. Credits
			</h2>
			<ul class="ms-8 list-disc space-y-4">
				<li>Smart Nation Group's Product Plan Framework, Govind Ganesan</li>
				<li>BCG's RISE Programme materials</li>
			</ul>
		</section>
	</article>
	{#snippet toc()}
		<NavToc {contents} {currentSection} />
	{/snippet}
</NewWrap>
