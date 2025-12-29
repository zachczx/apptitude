<script lang="ts">
	import interviewSampleSize from '$lib/assets/interview_sample_sizes.png?enhanced&w=300';
	import GuideExample from '$lib/GuideExample.svelte';
	import { type Contents } from '$lib/Types';
	import NavToc from '$lib/NavToc.svelte';
	import NewWrap from '$lib/NewWrap.svelte';
	import Intersection from '$lib/ui/Intersection.svelte';

	//Props needed for PageWrapper component
	let contents: Contents[] = [
		{ id: 'empathize', title: 'Empathize' },
		{ id: 'define', title: 'Define' },
		{ id: 'ideate', title: 'Ideate' },
		{ id: 'prototype-test', title: 'Prototype & Test' },
		{ id: 'sources', title: 'Sources' },
	];
	let currentSection = $state('');
</script>

<svelte:head>
	<title>Apptitude - Research</title>
</svelte:head>
<NewWrap title="Research">
	<Intersection bind:currentSection>
		<article
			class="prose-section:mt-20 prose-h2:mb-6 prose-h3:mb-6 prose-h3:mt-12 prose-h5:mb-4 prose-p:mb-4 prose-ul:mb-4 mt-12 space-y-20 pb-10">
			<section id="empathize" class="contents-observer grid grid-cols-4 gap-x-8 gap-y-16">
				<div class="col-span-4">
					<h2 class="border-b-base-content/20 mb-4 border-b-4 pb-2 text-2xl font-bold lg:text-4xl">
						1. Empathize
					</h2>
					<p>
						Conduct user research to uncover genuine pain points and user needs that are not met.
					</p>
				</div>
				<h3 class="text-2xl font-bold">Plan user research</h3>
				<div class="col-span-3 mt-1">
					<p>Plan should have:</p>
					<ul class="ms-8 mt-4 list-disc space-y-4">
						<li>Project background</li>
						<li>
							Establish overarching research goals (clarify specific ideas to learn or outcomes to
							achieve)
						</li>
						<li>
							Decide what to conduct:
							<ul class="ms-8 mt-4 list-disc space-y-4">
								<li>User interviews (shows contextual relationships between data points)</li>
								<li>Fly on the wall (observe without interferring)</li>
								<li>Quantitative surveys (big data that gives spread of numbers)</li>
							</ul>
						</li>

						<li>Identify who's affected by design</li>
						<li>Define deliverables that research should yield</li>
						<li>Ensure quality of research data</li>
						<li>
							Determine KPIs to measure in study (Time on task, Use of navigation vs. search, User
							error rates, Drop-off rates, Conversion rates, System Usability Scale, Net Promoter
							Score
						</li>
					</ul>
				</div>

				<h3 class="text-2xl font-bold">Recruit Participants</h3>

				<ul class="col-span-3 ms-8 mt-1 list-disc space-y-4">
					<li>Recruit a diverse participant pool</li>
					<li>
						Develop a set of criteria that will ensure you select interviewees who are best suited
						to meet objectives of your interview.
					</li>
					<li>Find people from existing user base, online, hallway testing</li>
					<li>
						Get 5-8 people per user group/persona you are studying, but reduce this if you have
						budget/timeline constraints (this is only the start after all)
					</li>
					<enhanced:img
						src={interviewSampleSize}
						alt="Interview sample size"
						class="my-3 rounded-lg" />
					<li>Consider giving incentives</li>
				</ul>

				<h3 class="text-2xl font-bold">Conduct Interviews</h3>
				<ul class="col-span-3 ms-8 mt-1 list-disc space-y-4">
					<li>Prepare for interviews</li>
					<ul class="ms-8 list-disc space-y-4">
						<li>Script interview questions</li>
						<li>Collect supplies (e.g. laptop, printed questions, markers)</li>
						<li>Email interviewees for 1-1 interviews as far as possible</li>
						<li>Book conducive spaces and travel to their location if it's best</li>
						<li>Remind them of interviews</li>
					</ul>
					<li>Conduct interviews</li>
					<ul class="ms-8 list-disc space-y-4">
						<li>Thank users for coming, gather basic details, ask permission to record</li>
						<li>
							Speak clearly & concisely, remain professional. Be active listener - nod, make
							appropriate eye contact, write notes
						</li>
						<li>Ask open-ended questions, start with “why” questions.</li>
						<li>
							If given short “yes” or “no” answer, ask neutral follow-up question to get them to
							share more.
						</li>
						<li>
							Take notes, highlight compelling quotes, write down observations about participants,
							record interviews
						</li>
						<li>Thank participants after we're done</li>
					</ul>
				</ul>
			</section>

			<section id="define" class="contents-observer grid grid-cols-4 gap-x-8 gap-y-16">
				<div class="col-span-4">
					<h2 class="border-b-base-content/20 mb-4 border-b-4 pb-2 text-2xl font-bold lg:text-4xl">
						2. Define
					</h2>
					<p>
						Analyze research from empathize phase to identify and prioritize key user problems that
						need solving, explaining rationale behind these priorities.
					</p>
				</div>

				<h3 class="text-2xl font-bold">Write User Stories</h3>
				<div class="col-span-3 mt-1">
					<p>
						User stories are “checklists” to ensure we address and solve key problems they might
						face with product.
					</p>
					<ul class="ms-8 mt-4 list-disc space-y-4">
						<li>User stories concisely capture user needs</li>
						<li>User stories prioritize design goals</li>
						<li>User stories foster user-centric empathy</li>
						<li>User stories justify decisions by showcasing user benefits</li>
						<li>Craft user stories to be succinct yet impactful</li>
						<li>User stories should have clear action and benefit</li>
						<li>
							Create one-sentence narratives from a persona’s viewpoint that define who user is,
							what they want to accomplish, and why.
						</li>
					</ul>
					<GuideExample>
						{#snippet example()}
							<div>
								As <span class="text-primary">[type of user]</span>, I want to
								<span class="text-primary">[action]</span>
								so that
								<span class="text-primary">[benefit]</span>.
							</div>
						{/snippet}
					</GuideExample>
				</div>

				<h3 class="text-2xl font-bold">Draw User Journeys</h3>
				<div class="col-span-3 mt-1">
					<p>Write user journeys for your users:</p>
					<ul class="ms-8 mt-4 list-disc space-y-4">
						<li>
							Draw sequence of experiences a user undergoes in attempting to achieve their goal.
						</li>
						<li>
							Think about user pain points. Are they because of financial, product, process,
							customer support pains?
						</li>
						<li>
							After you define pain points, answer Who, What, When, Where, Why, and How to solve
							problems.
						</li>
					</ul>
				</div>

				<h3 class="text-2xl font-bold">Problem Statement</h3>
				<div class="col-span-3 mt-1">
					<p>Formulate clear problem statement and develop value proposition:</p>
					<ul class="ms-8 mt-4 list-disc space-y-4">
						<li>Summarize who user is, what they need from design, and why</li>

						<li>
							Ensure design caters to various user types by crafting problem statements for each
							user persona, thus aligning product development with diverse user needs.
						</li>
					</ul>
					<GuideExample>
						{#snippet example()}
							<div>
								<span class="text-primary">[Name of user persona]</span> is a
								<span class="text-primary">[type of user]</span>
								who needs
								<span class="text-primary">[type of user experience]</span>
								because
								<span class="text-primary">[benefits of user experience]</span>.
							</div>
						{/snippet}
					</GuideExample>
				</div>
			</section>

			<section id="ideate" class="contents-observer grid grid-cols-4 gap-x-8 gap-y-16">
				<div class="col-span-4">
					<h2
						class="border-b-base-content/20 col-span-4 mb-4 border-b-4 pb-2 text-2xl font-bold lg:text-4xl">
						3. Ideate
					</h2>
					<p>Think of something.</p>
				</div>
				<h3 class="text-2xl font-bold">Develop Hypotheses</h3>
				<div class="col-span-3 mt-1">
					<ul class="ms-8 list-disc space-y-4">
						<li>Create hypothesis statements on what solution might be.</li>
						<li>
							Use "How Might We". Good HMW accommodates many solutions, but keep focused on these
							solutions.
						</li>
						<GuideExample>
							{#snippet example()}
								<div>
									If <span class="text-primary">[action]</span>, then
									<span class="text-primary">[outcome]</span>
								</div>
							{/snippet}
						</GuideExample>
						<li>Or use it in a we believe format:</li>
						<GuideExample>
							{#snippet example()}
								<div>
									We believe that <span class="text-primary">[action]</span> will
									<span class="text-primary">[outcome]</span>.
								</div>
							{/snippet}
						</GuideExample>
						<li>
							Ensure hypothesis statements establish what user can do/achieve, what desired outcome
							that we call successful
						</li>
					</ul>
				</div>
				<h3 class="text-2xl font-bold">Come Up With Design Solutions</h3>
				<div class="col-span-3 mt-1">
					<p>Generate many ideas without judging quality.</p>
					<ul class="ms-8 mt-4 list-disc space-y-4">
						<li>Transform problem statement into "How might we" questions.</li>
						<li>
							Rapid sketching: Divide a sheet into squares (8), sketch ideas anything (even crazy
							stuff), keep to timed intervals.
						</li>
						<li>
							Do competitive audits to analyze competitors' products, strengths, & weaknesses.
						</li>
						<li>
							Applying SCAMPER method: Substitute, combine, adapt, modify, put to another use,
							eliminate, & rearrange elements.
						</li>
					</ul>
				</div>
				<h3 class="text-2xl font-bold">Assess Feasibility</h3>
				<ul class="col-span-3 ms-8 mt-1 list-disc space-y-4">
					<li>
						Assess ideas based on feasibility within budget and schedule constraints and alignment
						with design standards.
					</li>
					<li>Determine if design idea has value - what does it do and why should users care?</li>
				</ul>
			</section>

			<section id="prototype-test" class="contents-observer grid grid-cols-4 gap-x-8 gap-y-16">
				<div class="col-span-4">
					<h2 class="border-b-base-content/20 mb-4 border-b-4 pb-2 text-2xl font-bold lg:text-4xl">
						4. Prototype & Test
					</h2>
					<p>Make something.</p>
				</div>
				<h3 class="text-2xl font-bold">Prototype</h3>
				<div class="col-span-3 mt-1">
					<p>
						Create an initial model of a product that showcases its features and allows for testing:
					</p>
					<ul class="ms-8 mt-4 list-disc space-y-4">
						<li>
							Develop a sitemap to organize product by defining its hierarchy and sequence,
							illustrating topics' importance and navigational flow.
						</li>
						<li>
							Produce wireframes, both paper-based and digital (using tools like Figma or Adobe XD),
							to visually represent product's layout and interface.
						</li>
						<li>
							Construct low-fidelity prototypes to provide a basic interactive model of product,
							allowing for initial user interaction feedback.
						</li>
						<li>
							Advance to high-fidelity prototypes that closely mimic final product with detailed
							components and interactivity for thorough testing.
						</li>
					</ul>
				</div>

				<h3 class="text-2xl font-bold">Test</h3>
				<div class="col-span-3 mt-1">
					<ul class="ms-8 list-disc space-y-4">
						<li>
							Integrate testing throughout prototyping phase to refine design continuously based on
							user feedback:
						</li>

						<ul class="ms-8 list-disc space-y-4">
							<li>Begin with simple sketches or sitemaps to gather initial feedback.</li>
							<li>Progress to more detailed paper prototypes for another testing round.</li>
							<li>
								Further iterate to a high-fidelity, interactive model for additional user testing.
							</li>
							<li>
								Potentially test multiple prototypes or same prototype across different devices to
								optimize user experience.
							</li>
						</ul>
						<li>Establish a comprehensive testing plan to refine prototype effectively:</li>
						<ul class="ms-8 list-disc space-y-4">
							<li>
								Determine who will participate in tests, from informal feedback circles to target
								users.
							</li>
							<li>
								Define what types of tests will be conducted, considering both prototype's stage and
								testing environment.
							</li>
							<li>
								Clarify why tests are conducted, primarily to validate earlier design decisions and
								uncover usability issues.
							</li>
							<li>
								Outline how participants will interact with prototype and how information will be
								collected during tests, ensuring inclusivity and accessibility.
							</li>
						</ul>
					</ul>
				</div>
			</section>

			<section id="sources" class="contents-observer grid gap-4">
				<h2
					class="border-b-base-content/20 col-span-4 mb-4 border-b-4 pb-2 text-2xl font-bold lg:text-4xl">
					5. Sources
				</h2>

				<ul class="ms-8 list-disc space-y-4">
					<li>
						<a href="https://grow.google/certificates/ux-design/" class="underline"
							>Google UX Design Certificate</a>
					</li>
					<li>
						<a href="https://www.nngroup.com/articles/interview-sample-size/" class="underline"
							>Nielsen Norman Group</a>
					</li>
				</ul>
			</section>
		</article>
	</Intersection>
	{#snippet toc()}
		<NavToc {contents} {currentSection} />
	{/snippet}
</NewWrap>

<style>
</style>
