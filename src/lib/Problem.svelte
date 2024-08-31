<script>
	import pandaSuperhero from '$lib/assets/panda-superhero.webp?enhanced&w=600';
	import pandaAnnoyed from '$lib/assets/panda-annoyed.webp?enhanced&w=300';
	import pandaAnnoyedAlt from '$lib/assets/panda-annoyed-alt.webp?enhanced&w=300';
	import pandaSeniorMgmt from '$lib/assets/panda-senior-mgmt.webp?enhanced&w=300';
	import pandaBoss from '$lib/assets/panda-boss.webp?enhanced&w=300';
	import unoptimised1 from '$lib/assets/unoptimised1.webp?enhanced&w=300';
	import BadIdeaAmico from '$lib/assets/svg/BadIdeaAmico.svelte';
	import CoolRobotAmico from '$lib/assets/svg/CoolRobotAmico.svelte';
	import QuestionsAmico from '$lib/assets/svg/QuestionsAmico.svelte';
	import rocket from '$lib/assets/rocket.webp?enhanced&w=700;400';
</script>

<div
	class="mx-auto grid min-h-[70vh] content-center px-2 py-4 lg:grid-cols-3 lg:gap-x-20 lg:px-28 lg:py-20">
	<h2 class="text-center lg:col-span-3">Tech outcomes can be mediocre for the amount spent.</h2>
	<div class="grid max-h-[40rem] content-center justify-items-center space-y-4 p-8 text-center">
		<div class="w-72">
			<BadIdeaAmico />
		</div>
		<div class="space-y-4">
			<h3>Poor Outcomes</h3>
			<p>
				We spend more than $3B per year and end up with projects of little value that nobody except
				a PS asked for. Products offering a poor user experience. Projects that cost a ton. And yet
				everything is delayed despite the money we sunk.
			</p>
		</div>
	</div>
	<div class="grid max-h-[40rem] content-center justify-items-center space-y-4 p-8 text-center">
		<div class="w-72">
			<CoolRobotAmico />
		</div>
		<div class="space-y-4">
			<h3>Changes, Changes, Changes</h3>
			<p>
				Tech moves very fast. It's difficult to keep up to date with epochal changes like AI, or
				regular changes in tech stacks, cloud, software, hardware, programming languages.
			</p>
		</div>
	</div>
	<div class="grid max-h-[40rem] content-center justify-items-center space-y-4 p-8 text-center">
		<div class="w-72">
			<QuestionsAmico />
		</div>
		<div class="space-y-4">
			<h3>Individuals</h3>
			<p>
				People lack the up-to-date knowledge, experience, and spider sense to innovate, solution,
				and govern.
			</p>
		</div>
	</div>
</div>

<div class="mx-auto min-h-dvh bg-base-300 px-1 py-8 lg:py-20">
	<div class="grid w-full gap-8 lg:grid-cols-3">
		<div class="flex items-center justify-center text-center lg:col-span-3 lg:min-h-36">
			<h2>These folks don't like our tech outcomes.</h2>
		</div>
		<div>
			<div class="grid content-center justify-items-center space-y-4 rounded-2xl p-8 text-center">
				<div class="avatar">
					<div class="w-56 rounded-full">
						<enhanced:img src={pandaAnnoyed} alt="" />
					</div>
				</div>
				<div class="space-y-4">
					<h3>Developers</h3>
					<p>
						Govt officers just don't get it. You wish you didn't need to spend so much time teaching
						them 101 stuff.
					</p>
				</div>
			</div>
		</div>
		<div>
			<div class="grid content-center justify-items-center space-y-4 rounded-2xl p-8 text-center">
				<div class="avatar">
					<div class="w-56 rounded-full">
						<enhanced:img src={unoptimised1} alt="" />
					</div>
				</div>
				<div class="space-y-4">
					<h3>Planners</h3>
					<p>
						Can't tell if your plans are good or bad. But you see poor outcomes mushrooming across
						Govt. An unresolved root cause, repeating across teams, projects, tech stacks, eras.
					</p>
				</div>
			</div>
		</div>
		<div>
			<div class="grid content-center justify-items-center space-y-4 rounded-2xl p-8 text-center">
				<div class="avatar">
					<div class="w-56 rounded-full">
						<enhanced:img src={pandaSuperhero} alt="" />
					</div>
				</div>
				<div class="space-y-4">
					<h3>Staffers</h3>
					<p>
						You feel stuck when those in charge and those who write policies cannot see the effects
						of their decisions. You're not sure what's all these terms being talked about. You feel
						the things being said, like daily scrum meetings, issues with authentication, cyber
						risks are dumb.
					</p>
				</div>
			</div>
		</div>
		<div class="flex min-h-36 items-center justify-center text-center lg:col-span-3">
			<h2>Neither do these powerful people.</h2>
		</div>
		<div>
			<div class="grid content-center justify-items-center space-y-4 rounded-2xl p-8 text-center">
				<div class="avatar">
					<div class="w-56 rounded-full">
						<enhanced:img src={pandaBoss} alt="" />
					</div>
				</div>
				<div class="space-y-4">
					<h3>Middle Managers</h3>
					<p>
						You often get a sinking feeling, but you don't know how to express your doubts when the
						project lead says "everything's alright". You can't answer to your bosses when they ask
						you why something takes so long or performs so bad. Shit usually hits the fan anyway and
						you're left holding the can.
					</p>
				</div>
			</div>
		</div>
		<div>
			<div class="grid content-center justify-items-center space-y-4 rounded-2xl p-8 text-center">
				<div class="avatar">
					<div class="w-56 rounded-full">
						<enhanced:img src={pandaSeniorMgmt} alt="" />
					</div>
				</div>
				<div class="space-y-4">
					<h3>Senior Management</h3>
					<p>
						You feel trapped in fait accompli situations. Staffers don't give you the possible
						options, trade-offs, and risks. Worse, you can't correct them because you don't know
						what you're missing or what's applicable to the initiative on hand. Why does every
						change take months more than humanly believable.
					</p>
				</div>
			</div>
		</div>
		<div>
			<div class="grid content-center justify-items-center space-y-4 rounded-2xl p-8 text-center">
				<div class="avatar">
					<div class="w-56 rounded-full">
						<enhanced:img src={pandaAnnoyedAlt} alt="" />
					</div>
				</div>
				<div class="space-y-4">
					<h3>Citizens</h3>
					<p>You wonder why Govt products suck. Surely no one's that dumb, right?</p>
				</div>
			</div>
		</div>
	</div>
</div>

<div
	class="grid content-center justify-items-center gap-y-8 px-2 py-10 lg:grid-cols-2 lg:gap-y-20 lg:py-20">
	<h1 class="text-center lg:col-span-2">How Apptitude could help you.</h1>
	<div class="justify-self-center">
		<enhanced:img
			src={rocket}
			alt="Rocket"
			sizes="(min-width:1920px) 700px, (min-width:600px) 400px"
			class="rounded-semi-super lg:rounded-super" />
	</div>
	<div class="grid content-center lg:px-20">
		<ul class="list-image-[url(/GravityUiSphere.svg)] space-y-8 ps-6">
			<li class="space-y-2 ps-2">
				<h3><a href="/learn">Use my lists of online learning resources to learn.</a></h3>
				<p>
					You learn at your own pace, based on your own interest, using stuff that I watched, read,
					and learned. Use this as a starting point, not the end.
				</p>
			</li>
			<li class="space-y-2 ps-2">
				<h3><a href="/guides">Use my guides when you need a boost.</a></h3>
				<p>
					I summarized stuff I picked up over the years, from people I talked to, meetings I
					attended, podcasts I watched, things I read. Use my questions, dealbreakers, plans,
					templates, however you want.
				</p>
			</li>
			<li class="space-y-2 ps-2">
				<h3>If things improve, keep at it!</h3>
				<p>Keep the momentum going.</p>
			</li>
			<li class="space-y-2 ps-2">
				<h3>If things still suck,</h3>
				<p>Shit happens. Rome wasn't built in a day. Persevere and continue to survive!</p>
			</li>
		</ul>
		<div class="mt-20 flex justify-center">
			<a
				class="hide-small group relative rounded-lg px-6 py-3 text-2xl font-bold text-white lg:text-3xl"
				href="/learn">
				<span
					class="ease absolute inset-0 h-full w-full -translate-x-2 -translate-y-4 transform rounded bg-lime-600 transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0 lg:-translate-x-4 lg:-translate-y-3"
				></span>
				<span
					class="ease absolute inset-0 h-full w-full translate-x-2 translate-y-2 transform rounded bg-teal-800 mix-blend-screen transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0 lg:translate-x-4 lg:translate-y-3"
				></span>
				<span class="relative p-5 font-bold">Start Learning Now!</span></a>
		</div>
	</div>
</div>
