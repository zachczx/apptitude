<script lang="ts">
	import interviewSampleSize from '$lib/assets/interview_sample_sizes.png?enhanced';
	import GuideExample from '$lib/GuideExample.svelte';
	import NavToc from '$lib/NavToc.svelte';
	import NewWrap from '$lib/NewWrap.svelte';
	import Intersection from '$lib/ui/Intersection.svelte';
	import Section from '$lib/ui/Section.svelte';
	import ThinFatCard from '$lib/ui/ThinFatCard.svelte';
	import SubSectionDefinitions from '$lib/ui/SubSectionDefinitions.svelte';
	import DefinitionItem from '$lib/ui/DefinitionItem.svelte';
	import SubSectionList from '$lib/ui/SubSectionList.svelte';
	import FigureWithCaption from '$lib/ui/FigureWithCaption.svelte';

	//Props needed for PageWrapper component
	let contents: TableOfContent[] = [
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
		<Section
			id="empathize"
			title="Emphathize"
			subtitle="Conduct user research to uncover genuine pain points and user needs that are not met.">
			<ThinFatCard
				title="Plan User Research"
				step="01"
				leadPara="Establish overarching research goals and clarify specific outcomes to achieve.">
				<SubSectionList title="Project Essentials">
					<li>Project background and context</li>
					<li>Identify who is affected by the design</li>
					<li>Define deliverables the research should yield</li>
				</SubSectionList>

				<SubSectionDefinitions title="Decide what to conduct">
					<DefinitionItem term="User Interviews">
						Shows contextual relationships between data points and uncovers hidden motivations.
					</DefinitionItem>

					<DefinitionItem term="Fly on the wall">
						Observe behaviors in natural environment without interfering or biasing the subject.
					</DefinitionItem>

					<DefinitionItem term="Quantitative Surveys">
						Big data collection that provides statistical significance and spread of numbers.
					</DefinitionItem>
				</SubSectionDefinitions>
			</ThinFatCard>

			<ThinFatCard
				title="Recruit Participants"
				step="02"
				leadPara="Recruit a diverse participant pool.">
				<SubSectionList title="Get a Good Mix">
					<li>Develop criteria to select best suited interviewees for your objectives.</li>
					<li>
						Get 5-8 people per user group/persona you are studying, but reduce this if you have
						budget/timeline constraints (this is only the start after all)
						<FigureWithCaption
							imgSrc={interviewSampleSize}
							imgAlt="Graph showing diminishing returns of insights after 5 users"
							imgCaption="Source: Nielsen Norman Group"></FigureWithCaption>
					</li>
				</SubSectionList>
				<SubSectionList title="Getting Them">
					<li>Get people from existing user base, online, hallway testing</li>
					<li>Consider giving incentives</li>
				</SubSectionList>
			</ThinFatCard>

			<ThinFatCard
				title="Conduct Interviews"
				step="03"
				leadPara="Engage directly with users through structured conversations to uncover their genuine motivations and behaviors.">
				<SubSectionList title="Prepare for interviews">
					<li>Script interview questions</li>
					<li>Collect supplies (e.g. laptop, printed questions, markers)</li>
					<li>Email interviewees for 1-1 interviews as far as possible</li>
					<li>Book conducive spaces and travel to their location if it's best</li>
					<li>Remind them of interviews</li>
				</SubSectionList>
				<SubSectionList title="Interviewing them">
					<li>Thank users for coming, gather basic details, ask permission to record</li>
					<li>
						Speak clearly & concisely, remain professional. Be active listener - nod, make
						appropriate eye contact, write notes
					</li>
					<li>Ask open-ended questions, start with “why” questions.</li>
					<li>
						If given short “yes” or “no” answer, ask neutral follow-up question to get them to share
						more.
					</li>
					<li>
						Take notes, highlight compelling quotes, write down observations about participants,
						record interviews
					</li>
					<li>Thank participants once done</li>
				</SubSectionList>
			</ThinFatCard>
		</Section>

		<Section
			id="define"
			title="Define"
			subtitle="Analyze research from empathize phase to identify and prioritize key user problems that need solving, explaining rationale behind these priorities.">
			<ThinFatCard
				title="User Stories"
				step="01"
				leadPara="User stories are “checklists” to ensure we address and solve key problems they might face with product.">
				<SubSectionList title="Write User Stories">
					<li>Concisely capture user needs</li>
					<li>Prioritize design goals</li>
					<li>Foster user-centric empathy</li>
					<li>Justify decisions by showcasing user benefits</li>
					<li>Should be succinct yet impactful</li>
					<li>Should have clear action and benefit</li>
					<li>
						Create one-sentence narratives from a persona’s viewpoint that define who user is, what
						they want to accomplish, and why.

						<GuideExample>
							<div>
								As <span class="text-primary">[type of user]</span>, I want to
								<span class="text-primary">[action]</span>
								so that
								<span class="text-primary">[benefit]</span>.
							</div>
						</GuideExample>
					</li>
				</SubSectionList>
			</ThinFatCard>

			<ThinFatCard
				title="Draw User Journeys"
				step="02"
				leadPara="Write user journeys for your users.">
				<SubSectionList title="Mapping the Path">
					<li>
						Draw sequence of experiences a user undergoes in attempting to achieve their goal.
					</li>
					<li>
						Think about user pain points. Are they because of financial, product, process, customer
						support pains?
					</li>
					<li>
						After you define pain points, answer Who, What, When, Where, Why, and How to solve
						problems.
					</li>
				</SubSectionList>
			</ThinFatCard>

			<ThinFatCard
				title="Problem Statement"
				step="03"
				leadPara="Formulate clear problem statement and develop value proposition.">
				<SubSectionList title="Defining the Core Issue">
					<li>Summarize who user is, what they need from design, and why</li>
					<li>
						Ensure design caters to various user types by crafting problem statements for each user
						persona, thus aligning product development with diverse user needs.
						<GuideExample>
							<div>
								<span class="text-primary">[Name of user persona]</span> is a
								<span class="text-primary">[type of user]</span>
								who needs
								<span class="text-primary">[type of user experience]</span>
								because
								<span class="text-primary">[benefits of user experience]</span>.
							</div>
						</GuideExample>
					</li>
				</SubSectionList>
			</ThinFatCard>
		</Section>

		<Section id="ideate" title="Ideate" subtitle="Think of something.">
			<ThinFatCard
				title="Develop Hypotheses"
				step="01"
				leadPara="Frame your design challenges as actionable questions and predictions to guide the ideation process.">
				<SubSectionList title="Hypothesis Frameworks">
					<li>Create hypothesis statements on what solution might be.</li>
					<li>
						Use "How Might We". Good HMW accommodates many solutions, but keep focused on these
						solutions.

						<GuideExample>
							<div>
								If <span class="text-primary">[action]</span>, then
								<span class="text-primary">[outcome]</span>
							</div>
						</GuideExample>
					</li>
					<li>
						Or use it in a we believe format:
						<GuideExample>
							<div>
								We believe that <span class="text-primary">[action]</span> will
								<span class="text-primary">[outcome]</span>.
							</div>
						</GuideExample>
					</li>
					<li>
						Ensure hypothesis statements establish what user can do/achieve, what desired outcome
						that we call successful
					</li>
				</SubSectionList>
			</ThinFatCard>

			<ThinFatCard
				title="Come Up With Design Solutions"
				step="02"
				leadPara="Generate many ideas without judging quality.">
				<SubSectionList title="Idea Generation">
					<li>Transform problem statement into "How might we" questions.</li>
					<li>
						Rapid sketching: Divide a sheet into squares (8), sketch ideas anything (even crazy
						stuff), keep to timed intervals.
					</li>
					<li>Do competitive audits to analyze competitors' products, strengths, & weaknesses.</li>
					<li>
						Applying SCAMPER method: Substitute, combine, adapt, modify, put to another use,
						eliminate, & rearrange elements.
					</li>
				</SubSectionList>
			</ThinFatCard>

			<ThinFatCard
				title="Assess Feasibility"
				step="03"
				leadPara="Ground your creative solutions in reality by evaluating them against technical, business, and timeline constraints.">
				<SubSectionList title="The Reality Check">
					<li>
						Assess ideas based on feasibility within budget and schedule constraints and alignment
						with design standards.
					</li>
					<li>Determine if design idea has value - what does it do and why should users care?</li>
				</SubSectionList>
			</ThinFatCard>
		</Section>

		<Section id="prototype-test" title="Prototype & Test" subtitle="Make something.">
			<ThinFatCard
				title="Prototype"
				step="01"
				leadPara="Create an initial model of a product that showcases its features and allows for testing.">
				<SubSectionList title="Evolution of Fidelity">
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
				</SubSectionList>
			</ThinFatCard>

			<ThinFatCard
				title="Test"
				step="02"
				leadPara="Validate your design decisions and uncover usability issues through structured, iterative user testing.">
				<SubSectionList title="Validation Strategy">
					<li>
						Integrate testing throughout prototyping phase to refine design continuously based on
						user feedback:
						<ul class="ms-8 mt-2 list-disc space-y-4">
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
					</li>
					<li>
						Establish a comprehensive testing plan to refine prototype effectively:
						<ul class="ms-8 mt-2 list-disc space-y-4">
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
					</li>
				</SubSectionList>
			</ThinFatCard>
		</Section>

		<Section id="sources" title="Sources">
			<SubSectionList>
				<li>
					<a href="https://grow.google/certificates/ux-design/" class="underline"
						>Google UX Design Certificate</a>
				</li>
				<li>
					<a href="https://www.nngroup.com/articles/interview-sample-size/" class="underline"
						>Nielsen Norman Group</a>
				</li>
			</SubSectionList>
		</Section>
	</Intersection>
	{#snippet toc()}
		<NavToc {contents} {currentSection} />
	{/snippet}
</NewWrap>
