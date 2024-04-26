<script>
	import interviewSampleSize from '$lib/assets/interview_sample_sizes.png?enhanced&w=500';
	import Breadcrumbs from '$lib/Breadcrumbs.svelte';
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

	<div class="rounded-2xl border border-slate-700 bg-base-200 p-5 hover:bg-base-100">
		<h3 class="mb-5">
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
				class="icon icon-tabler icons-tabler-outline icon-tabler-file-description mb-1 me-3 inline"
				><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
					d="M14 3v4a1 1 0 0 0 1 1h4" /><path
					d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path
					d="M9 17h6" /><path d="M9 13h6" /></svg
			>Empathize
		</h3>
		<div>
			<ul class="list-disc">
				<li>
					Conduct user research to uncover genuine pain points and user needs that are not met
				</li>
				<li>Plan should have</li>
				<ol class="list-decimal ps-8">
					<li>Project background</li>
					<li>
						Establish overarching research goals (clarify specific ideas to learn or outcomes to
						achieve)
					</li>
					<li>
						Figure out what to conduct (Do user interviews (thick data that shows contextual
						relationships between data points), fly on the wall (observe without interference),
						quantitative surveys (big data that gives spread of numbers)
					</li>
					<li>Identify who’s affected by the design</li>
					<li>Define the deliverables that the research should yield</li>
					<li>Ensure the quality of the research data</li>
					<li>
						Determine the KPIs to measure in study (Time on task, Use of navigation vs. search, User
						error rates, Drop-off rates, Conversion rates, System Usability Scale, Net Promoter
						Score
					</li>
				</ol>
				<li>Recruit a diverse participant pool</li>
				<ol class="list-disc ps-4">
					<li>
						Develop a set of criteria that will ensure you select interviewees who are best suited
						to meet the objectives of your interview.
					</li>
					<li>Find people from existing user base, online, hallway testing</li>
					<li>Consider giving incentives</li>
				</ol>
			</ul>
		</div>
	</div>
	<div class="rounded-2xl border border-slate-700 bg-base-200 p-5 hover:bg-base-100">
		<h3 class="mb-5">Define</h3>
		<div>
			<p>
				Analyze the research from the empathize phase to identify and prioritize key user problems
				that need solving, explaining the rationale behind these priorities.
			</p>

			<ol class="list-disc ps-4">
				<li>
					User stories:
					<ul>
						<li>
							Create one-sentence narratives from a persona’s viewpoint that define who the user is,
							what they want to accomplish, and why:
							<ul>
								<li>
									As <strong>[type of user]</strong>, I want to <strong>[action]</strong> so that
									<strong>[benefit]</strong>.
								</li>
							</ul>
						</li>
					</ul>
				</li>
				<li>
					User journeys:
					<ul>
						<li>
							Map out the sequence of experiences a user undergoes in attempting to achieve their
							goal.
						</li>
					</ul>
				</li>
				<li>
					Formulate a clear problem statement and develop a value proposition:
					<ul>
						<li>
							Summarize who the user is, what they need from the design, and why, using a structured
							template:
							<ul>
								<li>
									<strong>[Name of user persona]</strong> is a <strong>[type of user]</strong> who
									needs <strong>[type of user experience]</strong> because
									<strong>[benefits of user experience]</strong>.
								</li>
							</ul>
						</li>
						<li>
							Ensure the design caters to various user types by crafting problem statements for each
							user persona, thus aligning product development with diverse user needs.
						</li>
					</ul>
				</li>
			</ol>

			<ul class="list-disc"></ul>
		</div>
	</div>
	<div class="rounded-2xl border border-slate-700 bg-base-200 p-5 hover:bg-base-100">
		<h3 class="mb-5">Ideate</h3>
		<div>
			<p></p>

			<ol class="list-disc ps-4">
				<li>Generate numerous design solutions without judging their quality.</li>
				<li>
					Engage in collaborative brainstorming with diverse team members from marketing,
					engineering, product management, and other relevant stakeholders.
				</li>
				<li>
					Use user and competitive research to refine ideas and develop user flows to demonstrate
					interactions with the solution.
				</li>
				<li>
					Employ techniques like:
					<ol class="list-decimal ps-8">
						<li>Transforming the problem statement into "How might we" questions.</li>
						<li>
							Rapid sketching by dividing a sheet into squares and sketching ideas within timed
							intervals.
						</li>
						<li>
							Conducting competitive audits to analyze competitors’ products and their strengths and
							weaknesses.
						</li>
						<li>
							Applying the SCAMPER method to innovate through substituting, combining, adapting,
							modifying, putting to another use, eliminating, and rearranging elements.
						</li>
					</ol>
				</li>
				<li>
					Organize collaboration by defining participant roles, deciding on the location (physical
					or virtual), clarifying collaboration goals, and determining the tools and processes to be
					used.
				</li>
				<li>
					Assess ideas based on feasibility within budget and schedule constraints and alignment
					with design standards.
				</li>
			</ol>
		</div>
	</div>
	<div class="rounded-2xl border border-slate-700 bg-base-200 p-5 hover:bg-base-100">
		<h3 class="mb-5">Prototype/Test</h3>
		<div>
			<p></p>

			<ol class="list-disc ps-4">
				<li>
					Create an initial model of a product that showcases its features and allows for testing:
					<ol class="list-decimal ps-8">
						<li>
							Develop a sitemap to organize the product by defining its hierarchy and sequence,
							illustrating topics' importance and navigational flow.
						</li>
						<li>
							Produce wireframes, both paper-based and digital (using tools like Figma or Adobe XD),
							to visually represent the product's layout and interface.
						</li>
						<li>
							Construct low-fidelity prototypes to provide a basic interactive model of the product,
							allowing for initial user interaction feedback.
						</li>
						<li>
							Advance to high-fidelity prototypes that closely mimic the final product with detailed
							components and interactivity for thorough testing.
						</li>
					</ol>
				</li>
				<li>
					Integrate testing throughout the prototyping phase to refine the design continuously based
					on user feedback:
					<ol class="list-decimal ps-8">
						<li>Begin with simple sketches or sitemaps to gather initial feedback.</li>
						<li>Progress to more detailed paper prototypes for another testing round.</li>
						<li>
							Further iterate to a high-fidelity, interactive model for additional user testing.
						</li>
						<li>
							Potentially test multiple prototypes or the same prototype across different devices to
							optimize user experience.
						</li>
					</ol>
				</li>
				<li>
					Establish a comprehensive testing plan to refine the prototype effectively:
					<ol class="list-decimal ps-8">
						<li>
							Determine who will participate in the tests, from informal feedback circles to target
							users.
						</li>
						<li>
							Define what types of tests will be conducted, considering both the prototype's stage
							and the testing environment.
						</li>
						<li>
							Clarify why tests are conducted, primarily to validate earlier design decisions and
							uncover usability issues.
						</li>
						<li>
							Outline how participants will interact with the prototype and how information will be
							collected during tests, ensuring inclusivity and accessibility.
						</li>
					</ol>
				</li>
			</ol>
		</div>
	</div>
</div>

<enhanced:img src={interviewSampleSize} alt="Interview sample size" />
