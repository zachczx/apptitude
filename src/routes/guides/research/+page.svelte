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

	<div class=" rounded-2xl border border-slate-700 bg-base-200 px-3 py-5 hover:bg-base-100 lg:px-5">
		<h3 class="inline text-emerald-200">
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
		</h3>
		<h3
			class="mb-5 inline-block bg-gradient-to-r from-emerald-200 via-lime-200 to-teal-300 bg-clip-text text-transparent">
			Empathize
		</h3>
		<div class="px-5">
			<ul class="list-disc space-y-10">
				<li class="text-lg">
					Conduct user research to uncover genuine pain points and user needs that are not met
				</li>
				<li class="text-lg">
					<span class="block pb-3">Plan should have:</span>
					<div class="cols-auto-cols grid gap-3 text-center lg:grid-cols-3">
						<div
							class="grid h-full w-full place-items-center rounded-2xl border border-gray-400 p-2">
							<span class="text-lg">Project background</span>
						</div>
						<div
							class="grid h-full w-full place-items-center rounded-2xl border border-gray-400 p-2">
							<span
								class="tooltip tooltip-info text-lg"
								data-tip="Clarify specific ideas to learn or outcomes to achieve">
								Establish research goals <TablerInfoCircle class="inline h-8 pb-3" />
							</span>
						</div>
						<div
							class="grid h-full w-full place-items-center rounded-2xl border border-gray-400 p-2">
							<span class="text-lg">Do interviews, fly on wall, or surveys</span>
						</div>
						<div
							class="grid h-full w-full place-items-center rounded-2xl border border-gray-400 p-2">
							<span class="text-lg">Identify who's affected by design</span>
						</div>

						<div
							class="grid h-full w-full place-items-center rounded-2xl border border-gray-400 p-2">
							<span class="text-lg">Define deliverables for research</span>
						</div>
						<div
							class="grid h-full w-full place-items-center rounded-2xl border border-gray-400 p-2">
							<span class="text-lg">Ensure quality of research data</span>
						</div>

						<div
							class="grid h-full w-full place-items-center rounded-2xl border border-gray-400 p-2">
							<span
								class="tooltip tooltip-info text-lg"
								data-tip="Time on task, Use of navigation vs. search,
								User error rates, Drop-off rates, Conversion rates, System Usability Scale, Net
								Promoter Score">
								Determine KPIs to measure in study <TablerInfoCircle class="inline h-8 pb-3" />
							</span>
						</div>
					</div>
					<!-- 					<ol class="plus list-disc space-y-3 ps-10">
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
					</ol> -->
				</li>
				<li class="text-lg">
					<span class="mb-3 block">Recruit a diverse participant pool</span>
					<div class="cols-auto-cols grid gap-3 text-center lg:grid-cols-2">
						<div
							class="grid h-full w-full place-items-center rounded-2xl border border-gray-400 p-2">
							<span class="text-lg">Develop criteria to select interviewees</span>
						</div>
						<div
							class="grid h-full w-full place-items-center rounded-2xl border border-gray-400 p-2">
							<span class="text-lg"
								>Find people from existing user base, online, hallway testing</span>
						</div>
						<div
							class="grid h-full w-full place-items-center rounded-2xl border border-gray-400 p-2">
							<span
								class="tooltip tooltip-info text-lg"
								data-tip="Reduce this if you have budget/timeline constraints (this is only the start after all)"
								>Get 5-8 people per user group/persona you are studying
								<TablerInfoCircle class="inline h-8 pb-3" />
							</span>
						</div>
						<div
							class="grid h-full w-full place-items-center rounded-2xl border border-gray-400 p-2">
							<span class="text-lg">Consider giving incentives</span>
						</div>

						<!-- 						<ol class="plus list-disc space-y-3 ps-10">
							<li>
								Develop a set of criteria that will ensure you select interviewees who are best
								suited to meet objectives of your interview.
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
						</ol> -->
					</div>
				</li>
			</ul>
		</div>
	</div>
	<div class="rounded-2xl border border-slate-700 bg-base-200 p-5 hover:bg-base-100">
		<h3 class="inline text-emerald-200">
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
		</h3>
		<h3
			class="mb-5 inline-block bg-gradient-to-r from-emerald-200 via-lime-200 to-teal-300 bg-clip-text text-transparent">
			Define
		</h3>
		<div class="px-5">
			<ul class="list-disc space-y-10">
				<li class="text-lg">
					Analyze research from empathize phase to identify and prioritize key user problems that
					need solving, explaining rationale behind these priorities.
				</li>
				<li class="text-lg">
					<span class="block pb-3">User stories:</span>
					<ol class="plus list-disc space-y-3 ps-10">
						<li>
							Create one-sentence narratives from a persona’s viewpoint that define who user is,
							what they want to accomplish, and why.
						</li>
						<li>
							As <u>[type of user]</u>, I want to <u>[action]</u> so that
							<u>[benefit]</u>.
						</li>
					</ol>
				</li>
				<li class="text-lg">
					<span class="block pb-3">User journeys:</span>
					<ol class="plus list-disc space-y-3 ps-10">
						<li>
							Map out sequence of experiences a user undergoes in attempting to achieve their goal.
						</li>
					</ol>
				</li>
				<li class="text-lg">
					<span class="block pb-3"
						>Formulate a clear problem statement and develop a value proposition:</span>
					<ol class="plus list-disc space-y-3 ps-10">
						<li>
							Summarize who user is, what they need from design, and why, using a structured
							template:
							<span class="ms-8 mt-3 block"
								><u>[Name of user persona]</u> is a <u>[type of user]</u> who needs
								<u>[type of user experience]</u>
								because
								<u>[benefits of user experience]</u>.</span>
						</li>
						<li>
							Ensure design caters to various user types by crafting problem statements for each
							user persona, thus aligning product development with diverse user needs.
						</li>
					</ol>
				</li>
			</ul>
		</div>
	</div>
	<div class="rounded-2xl border border-slate-700 bg-base-200 p-5 hover:bg-base-100">
		<h3 class="inline text-emerald-200">
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
		</h3>
		<h3
			class="mb-5 inline-block bg-gradient-to-r from-emerald-200 via-lime-200 to-teal-300 bg-clip-text text-transparent">
			Ideate
		</h3>
		<div class="px-5">
			<ul class="list-disc space-y-10">
				<li class="text-lg">Generate numerous design solutions without judging their quality.</li>
				<li class="text-lg">
					Engage in collaborative brainstorming with diverse team members from marketing,
					engineering, product management, and other relevant stakeholders.
				</li>
				<li class="text-lg">
					Use user and competitive research to refine ideas and develop user flows to demonstrate
					interactions with solution.
				</li>
				<li class="text-lg">
					<span class="block pb-3">Employ techniques like:</span>
					<ol class="plus list-disc space-y-3 ps-10">
						<li>Transforming problem statement into "How might we" questions.</li>
						<li>
							Rapid sketching by dividing a sheet into squares and sketching ideas within timed
							intervals.
						</li>
						<li>
							Conducting competitive audits to analyze competitors’ products and their strengths and
							weaknesses.
						</li>
						<li>
							Applying SCAMPER method to innovate through substituting, combining, adapting,
							modifying, putting to another use, eliminating, and rearranging elements.
						</li>
					</ol>
				</li>
				<li class="text-lg">
					Organize collaboration by defining participant roles, deciding on location (physical or
					virtual), clarifying collaboration goals, and determining tools and processes to be used.
				</li>
				<li class="text-lg">
					Assess ideas based on feasibility within budget and schedule constraints and alignment
					with design standards.
				</li>
			</ul>
		</div>
	</div>
	<div class="rounded-2xl border border-slate-700 bg-base-200 p-5 hover:bg-base-100">
		<h3 class="inline text-emerald-200">
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
		</h3>
		<h3
			class="mb-5 inline-block bg-gradient-to-r from-emerald-200 via-lime-200 to-teal-300 bg-clip-text text-transparent">
			Prototype & Test
		</h3>
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
		<h3
			class="mb-5 inline-block bg-gradient-to-r from-emerald-200 via-lime-200 to-teal-300 bg-clip-text text-transparent">
			Sources
		</h3>
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
		color: rgb(217 249 157);
		padding-block-end: 2em;
	}
	.tick li::marker {
		content: '✔';
		font-size: 0.8em;
		color: rgb(217 249 157);
		padding-block-end: 2em;
	}
	.list-disc li::marker {
		color: rgb(217 249 157);
	}
</style>
