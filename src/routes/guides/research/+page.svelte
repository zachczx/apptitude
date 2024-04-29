<script>
	import interviewSampleSize from '$lib/assets/interview_sample_sizes.png?enhanced&w=300';
	import Breadcrumbs from '$lib/Breadcrumbs.svelte';
	import TablerInfoCircle from '$lib/assets/svg/TablerInfoCircle.svelte';
</script>

<Breadcrumbs urlMiddle="guides" textMiddle={'Guides'} textCurrent={'Research'} />
<div
	class="grid grid-cols-1 place-content-start gap-4 rounded-2xl px-2 px-3 py-5 lg:mx-20 lg:grid-cols-2 lg:border lg:border-gray-800 lg:bg-base-300 lg:px-5 lg:shadow-xl lg:shadow-gray-900">
	<div class="text-center lg:col-span-2">
		<h1
			class="inline-block bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 text-transparent">
			Research
		</h1>
	</div>

	<div class="rounded-2xl border border-slate-700 bg-base-200 px-3 py-5 hover:bg-base-100 lg:px-5">
		<h2 class="inline text-emerald-200">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="icon icon-tabler icons-tabler-outline icon-tabler-heart-handshake mb-1 me-3 inline"
				><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
					d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /><path
					d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" /><path
					d="M12.5 15.5l2 2" /><path d="M15 13l2 2" /></svg>
		</h2>
		<h2
			class="mb-5 inline-block bg-gradient-to-r from-lime-200 to-teal-200 bg-clip-text text-transparent">
			Empathize
		</h2>
		<div class="px-5">
			<ul class="list-disc space-y-5">
				<li class="text-lg">
					Conduct user research to uncover genuine pain points and user needs that are not met
				</li>
				<h4 class="border-b-2 border-lime-100 pt-6 text-lime-100">Plan user research</h4>
				<li class="text-lg">
					<span class="block pb-3">Plan should have:</span>
					<ol class="plus list-disc space-y-3 ps-10">
						<li>Project background</li>
						<li>
							Establish overarching research goals (clarify specific ideas to learn or outcomes to
							achieve)
						</li>
						<li>
							<span class="block pb-3">Decide what to conduct:</span>
							<ol class="tick list-disc space-y-3 ps-10">
								<li>User interviews (shows contextual relationships between data points)</li>
								<li>Fly on the wall (observe without interferring)</li>
								<li>Quantitative surveys (big data that gives spread of numbers)</li>
							</ol>
						</li>
						<li>Identify who's affected by design</li>
						<li>Define deliverables that research should yield</li>
						<li>Ensure quality of research data</li>
						<li>
							Determine KPIs to measure in study (Time on task, Use of navigation vs. search, User
							error rates, Drop-off rates, Conversion rates, System Usability Scale, Net Promoter
							Score
						</li>
					</ol>
				</li>
				<h4 class="border-b-2 border-lime-100 pt-6 text-lime-100">Recruitment of Participants</h4>
				<li class="text-lg">
					<span class="mb-3 block">Recruit a diverse participant pool</span>

					<ol class="plus list-disc space-y-3 ps-10">
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
					</ol>
				</li>
				<h4 class="border-b-2 border-lime-100 pt-6 text-lime-100">Conduct Interviews</h4>
				<li class="text-lg">
					<span class="mb-3 block">Prepare for interviews</span>

					<ol class="plus list-disc space-y-3 ps-10">
						<li>Script interview questions</li>
						<li>Collect supplies (e.g. laptop, printed questions, markers)</li>
						<li>Email interviewees for 1-1 interviews as far as possible</li>
						<li>Book conducive spaces and travel to their location if it's best</li>
						<li>Remind them of interviews</li>
					</ol>
				</li>
				<li class="text-lg">
					<span class="mb-3 block">Conduct interviews</span>
					<ol class="plus list-disc space-y-3 ps-10">
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
					</ol>
				</li>
			</ul>
		</div>
	</div>
	<div class="rounded-2xl border border-slate-700 bg-base-200 p-5 hover:bg-base-100">
		<h2 class="inline text-emerald-200">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="icon icon-tabler icons-tabler-outline icon-tabler-notebook mb-1 me-3 inline"
				><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
					d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" /><path
					d="M13 8l2 0" /><path d="M13 12l2 0" /></svg>
		</h2>
		<h2
			class="mb-5 inline-block bg-gradient-to-r from-lime-200 to-teal-200 bg-clip-text text-transparent">
			Define
		</h2>
		<div class="px-2">
			<ul class="list-disc space-y-5">
				<li class="text-lg">
					Analyze research from empathize phase to identify and prioritize key user problems that
					need solving, explaining rationale behind these priorities.
				</li>

				<h4 class="border-b-2 border-lime-100 pt-6 text-lime-100">Write User Stories</h4>
				<li class="text-lg">
					<span class="block pb-3"
						>User stories are “checklists” to ensure we address and solve key problems they might
						face with product.</span>
					<ol class="plus list-disc space-y-3 ps-10">
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
					</ol>
				</li>
				<li class="list-none rounded-2xl border p-5 text-center text-xl font-bold tracking-wider">
					As <span class="text-lime-200"><u>[type of user]</u></span>, I want to
					<span class="text-lime-200"><u>[action]</u></span>
					so that
					<span class="text-lime-200"><u>[benefit]</u></span>.
				</li>
				<h4 class="border-b-2 border-lime-100 pt-6 text-lime-100">Draw User Journeys</h4>
				<li class="text-lg">
					<span class="block pb-3">Write user journeys for your users:</span>
					<ol class="plus list-disc space-y-3 ps-10">
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
					</ol>
				</li>
				<h4 class="border-b-2 border-lime-100 pt-6 text-lime-100">Problem Statement</h4>
				<li class="text-lg">
					<span class="block pb-3"
						>Formulate clear problem statement and develop value proposition:</span>
					<ol class="plus list-disc space-y-3 ps-10">
						<li>Summarize who user is, what they need from design, and why</li>

						<li>
							Ensure design caters to various user types by crafting problem statements for each
							user persona, thus aligning product development with diverse user needs.
						</li>
					</ol>
				</li>
				<li class="list-none rounded-2xl border p-5 text-center text-xl font-bold tracking-wider">
					<span class="text-lime-200"><u>[Name of user persona]</u></span> is a
					<span class="text-lime-200"><u>[type of user]</u></span>
					who needs
					<span class="text-lime-200"><u>[type of user experience]</u></span>
					because
					<span class="text-lime-200"><u>[benefits of user experience]</u></span>.
				</li>
			</ul>
		</div>
	</div>
	<div class="rounded-2xl border border-slate-700 bg-base-200 p-5 hover:bg-base-100">
		<h2 class="inline text-emerald-200">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="icon icon-tabler icons-tabler-outline icon-tabler-bulb mb-1 me-3 inline"
				><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
					d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path
					d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path
					d="M9.7 17l4.6 0" /></svg>
		</h2>
		<h2
			class="mb-5 inline-block bg-gradient-to-r from-lime-200 to-teal-200 bg-clip-text text-transparent">
			Ideate
		</h2>
		<div class="px-5">
			<ul class="list-disc space-y-5">
				<h4 class="border-b-2 border-lime-100 pt-6 text-lime-100">Develop Hypotheses</h4>
				<li class="text-lg">Create hypothesis statements on what solution might be.</li>
				<li class="text-lg">
					Use "How Might We". Good HMW accommodates many solutions, but keep focused on these
					solutions.
					<ul class="mt-3 space-y-3">
						<li
							class="list-none rounded-2xl border p-5 text-center text-xl font-bold tracking-wider">
							If <span class="text-lime-200"><u>[action]</u></span>, then
							<span class="text-lime-200"><u>[outcome]</u></span>
							.
						</li>
					</ul>
				</li>
				<li class="list-none rounded-2xl border p-5 text-center text-xl font-bold tracking-wider">
					We believe that <span class="text-lime-200"><u>[action]</u></span> will
					<span class="text-lime-200"><u>[outcome]</u></span>
					.
				</li>
				<li class="text-lg">
					Ensure hypothesis statements establish what user can do/achieve, what desired outcome that
					we call successful
				</li>
				<h4 class="border-b-2 border-lime-100 pt-6 text-lime-100">Come Up With Design Solutions</h4>
				<li class="text-lg">
					<span class="block pb-3">Generate many ideas without judging quality.</span>
					<ol class="plus list-disc space-y-3 ps-10">
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
					</ol>
				</li>
				<h4 class="border-b-2 border-lime-100 pt-6 text-lime-100">Assess Feasibility</h4>

				<li class="text-lg">
					Assess ideas based on feasibility within budget and schedule constraints and alignment
					with design standards.
				</li>
				<li class="text-lg">
					Determine if design idea has value - what does it do and why should users care?
				</li>
			</ul>
		</div>
	</div>
	<div class="rounded-2xl border border-slate-700 bg-base-200 p-5 hover:bg-base-100">
		<h2 class="inline text-emerald-200">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="icon icon-tabler icons-tabler-outline icon-tabler-flask mb-1 me-3 inline"
				><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 3l6 0" /><path
					d="M10 9l4 0" /><path
					d="M10 3v6l-4 11a.7 .7 0 0 0 .5 1h11a.7 .7 0 0 0 .5 -1l-4 -11v-6" /></svg>
		</h2>
		<h2
			class="mb-5 inline-block bg-gradient-to-r from-lime-200 to-teal-200 bg-clip-text text-transparent">
			Prototype & Test
		</h2>
		<div class="px-5">
			<ul class="list-disc space-y-10">
				<li class="text-lg">
					<span class="block pb-3">
						Create an initial model of a product that showcases its features and allows for testing:
					</span>
					<ol class="plus list-disc space-y-3 ps-10">
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
					</ol>
				</li>
				<li class="text-lg">
					<span class="block pb-3"
						>Integrate testing throughout prototyping phase to refine design continuously based on
						user feedback:</span>
					<ol class="plus list-disc space-y-3 ps-10">
						<li>Begin with simple sketches or sitemaps to gather initial feedback.</li>
						<li>Progress to more detailed paper prototypes for another testing round.</li>
						<li>
							Further iterate to a high-fidelity, interactive model for additional user testing.
						</li>
						<li>
							Potentially test multiple prototypes or same prototype across different devices to
							optimize user experience.
						</li>
					</ol>
				</li>

				<li class="text-lg">
					<span class="block pb-3"
						>Establish a comprehensive testing plan to refine prototype effectively:</span>
					<ol class="plus list-disc space-y-3 ps-10">
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
					</ol>
				</li>
			</ul>
		</div>
	</div>
	<div class="rounded-2xl border border-slate-700 bg-base-200 p-5 hover:bg-base-100">
		<h2
			class="mb-5 inline-block bg-gradient-to-r from-emerald-200 via-lime-200 to-teal-300 bg-clip-text text-transparent">
			Sources
		</h2>
		<ol class="list-decimal space-y-3 px-5">
			<li>
				<a href="https://grow.google/certificates/ux-design/">Google UX Design Certificate</a>
			</li>
			<li>
				<a href="https://www.nngroup.com/articles/interview-sample-size/">Nielsen Norman Group</a>
			</li>
		</ol>
	</div>
</div>

<style>
	li {
		margin-left: 1em;
	}
	.plus li,
	.list-decimal li {
		padding-left: 0.6em;
	}

	.tick li {
		padding-left: 0.6em;
	}
	.plus li::marker {
		content: '+';
		font-size: 0.8em;
		/* color: rgb(217 249 157); */
		padding-block-end: 2em;
	}
	.tick li::marker {
		content: '✔';
		font-size: 0.8em;
		/* color: rgb(217 249 157); */
		padding-block-end: 2em;
	}
	.list-disc li::marker {
		/* color: rgb(217 249 157); */
	}
</style>
