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
	import pandaCrying from '$lib/assets/panda-crying.webp?enhanced&w=300';
	import fireBurning from '$lib/assets/fire-burning.webp?enhanced&w=300';
	import pandaExhausted from '$lib/assets/panda-exhausted.webp?enhanced&w=300';
	import pandaConfused from '$lib/assets/panda-confused.webp?enhanced&w=300';
</script>

<div class="lg:bg-base100-pattern">
	<section
		class="mx-auto grid min-h-[70vh] max-w-[1200px] content-center gap-y-16 px-4 py-10 lg:grid-cols-1 lg:gap-x-20 lg:gap-y-0 lg:py-28"
		data-pagefind-ignore>
		<h2 class="text-center text-4xl lg:col-span-1 lg:pb-24 lg:text-8xl">
			Tech can be frustrating.
		</h2>
		<div
			class="flex max-h-[40rem] grid-cols-2 flex-wrap items-center justify-center gap-x-12 gap-y-4 lg:flex-nowrap">
			<div class="min-w-72">
				<enhanced:img src={fireBurning} alt="" class="rounded-3xl" />
			</div>
			<div class="grid gap-4">
				<h3 class="text-2xl lg:text-4xl">Poor Outcomes</h3>
				<p class="text-base">
					Don't we always come across examples where we think the project's pointless but we're
					doing it anyway because a PS asked for it. Or a vendor is charging us an arm and a leg,
					but we need to do it anyway. Or a project under us is so unusable, but we've already sunk
					all our effort and money into it to u-turn.
				</p>
			</div>
		</div>
		<div
			class="flex max-h-[40rem] grid-cols-2 flex-wrap items-center justify-center gap-x-12 gap-y-4 lg:flex-nowrap lg:ps-[300px]">
			<div class="min-w-72">
				<enhanced:img src={pandaExhausted} alt="" class="rounded-3xl" />
			</div>
			<div class="grid gap-4">
				<h3 class="text-2xl lg:text-4xl">Help ma, I can't keep up!</h3>
				<p class="text-base">
					Tech moves so dizzying fast it's daunting to know where to start or keep up. So easy to
					get imposter syndrome.
				</p>
				<p>AI, tech stacks, databases, cloud, software-as-a-service, hardware.</p>
			</div>
		</div>
		<div
			class="flex max-h-[40rem] grid-cols-2 flex-wrap items-center justify-center gap-x-12 gap-y-4 lg:flex-nowrap">
			<div class="min-w-72">
				<enhanced:img src={pandaConfused} alt="" class="rounded-3xl" />
			</div>
			<div class="grid gap-4">
				<h3 class="text-2xl lg:text-4xl">Individuals</h3>
				<p class="text-base">
					Haven't we worked with people who know so little about tech or don't even know they're
					clueless? Yet we must consult them or get their approval just because it's in their job
					designation?
				</p>
				<p>
					(Of course they're experts at "management" and "strategy", or because they were engineers
					30 years ago working on Visual Basic.)
				</p>
			</div>
		</div>
	</section>
</div>

<section class="min-h-dvh bg-base-300 px-4 py-8 lg:py-28" data-pagefind-ignore>
	<div class="mx-auto grid w-full max-w-screen-2xl gap-8 lg:grid-cols-3">
		<div class="flex items-center justify-center text-center lg:col-span-3 lg:min-h-36">
			<h2 class="text-center text-4xl lg:col-span-1 lg:pb-24 lg:text-8xl">Common complaints</h2>
		</div>
		<div>
			<div
				class="grid content-center justify-items-center space-y-4 rounded-2xl text-center lg:p-8">
				<div class="avatar">
					<div class="w-56 rounded-full">
						<enhanced:img src={pandaAnnoyed} alt="" />
					</div>
				</div>
				<div class="space-y-4">
					<h3 class="text-2xl lg:text-4xl">Developers</h3>
					<p>
						Govt officers just don't get it. You wish you didn't need to spend so much time teaching
						them 101 stuff. And stop asking me to write papers or do shitty powerpoint slides to say
						obvious things.
					</p>
				</div>
			</div>
		</div>
		<div>
			<div
				class="grid content-center justify-items-center space-y-4 rounded-2xl text-center lg:p-8">
				<div class="avatar">
					<div class="w-56 rounded-full">
						<enhanced:img src={pandaSuperhero} alt="" />
					</div>
				</div>
				<div class="space-y-4">
					<h3 class="text-2xl lg:text-4xl">Staffers</h3>
					<p>
						You feel stuck when those in charge and those who write policies cannot see the effects
						of their decisions. You're not sure what's all these terms being talked about. You feel
						the things being said, like daily scrum meetings, issues with authentication, cyber
						risks are dumb.
					</p>
				</div>
			</div>
		</div>
		<div>
			<div
				class="grid content-center justify-items-center space-y-4 rounded-2xl text-center lg:p-8">
				<div class="avatar">
					<div class="w-56 rounded-full">
						<enhanced:img src={unoptimised1} alt="" />
					</div>
				</div>
				<div class="space-y-4">
					<h3 class="text-2xl lg:text-4xl">Planners</h3>
					<p>
						Can't tell if your plans are good or bad. But you see poor outcomes mushrooming across
						Govt. An unresolved root cause, repeating across teams, projects, tech stacks, eras.
					</p>
				</div>
			</div>
		</div>
		<div class="flex min-h-36 items-center justify-center text-center lg:col-span-3">
			<h2>Neither do these important people.</h2>
		</div>
		<div>
			<div
				class="grid content-center justify-items-center space-y-4 rounded-2xl text-center lg:p-8">
				<div class="avatar">
					<div class="w-56 rounded-full">
						<enhanced:img src={pandaBoss} alt="" />
					</div>
				</div>
				<div class="space-y-4">
					<h3 class="text-2xl lg:text-4xl">Middle Managers</h3>
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
			<div
				class="grid content-center justify-items-center space-y-4 rounded-2xl text-center lg:p-8">
				<div class="avatar">
					<div class="w-56 rounded-full">
						<enhanced:img src={pandaSeniorMgmt} alt="" />
					</div>
				</div>
				<div class="space-y-4">
					<h3 class="text-2xl lg:text-4xl">Senior Management</h3>
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
			<div
				class="grid content-center justify-items-center space-y-4 rounded-2xl text-center lg:p-8">
				<div class="avatar">
					<div class="w-56 rounded-full">
						<enhanced:img src={pandaAnnoyedAlt} alt="" />
					</div>
				</div>
				<div class="space-y-4">
					<h3 class="text-2xl lg:text-4xl">Citizens</h3>
					<p>You wonder why Govt products suck. Surely no one's that dumb, right?</p>
				</div>
			</div>
		</div>
	</div>
</section>

<div class="lg:bg-base100-pattern-alt">
	<section
		class="mx-auto grid max-w-screen-2xl content-center justify-items-center gap-x-8 gap-y-8 px-2 py-10 lg:gap-y-20 lg:py-28"
		data-pagefind-ignore>
		<h2 class="text-center text-4xl lg:col-span-1 lg:pb-24 lg:text-8xl">
			How Apptitude could help you.
		</h2>

		<ul class="grid content-center gap-8 lg:grid-cols-3">
			<li class="grid content-center gap-4 rounded-2xl bg-base-300 p-4 lg:p-8">
				<h3 class="text-2xl lg:text-4xl">Learn more</h3>
				<p>Change starts with every person.</p>
				<p>
					Every better decision, every dollar saved is a dollar better spent on a hospital or
					education. Not lining some vendor's Managing Partner or Sales Director peddling expensive
					white elephant project.
				</p>
			</li>
			<li class="grid content-center gap-4 rounded-2xl bg-base-300 p-4 lg:p-8">
				<h3 class="text-2xl lg:text-4xl">Upskill</h3>
				<p>
					Choose how you want to learn. <a href="/learn" class="text-primary underline"
						>Use my lists of online resources</a>
					as a starting point. Or
					<a href="/guides" class="text-primary underline">use my guides</a> if you just want to lob
					more relevant questions at your vendors or project teams.
				</p>
			</li>
			<li class="grid content-center gap-4 rounded-2xl bg-base-300 p-4 lg:p-8">
				<h3 class="text-2xl lg:text-4xl">Keep at it!</h3>
				<p>
					If things still suck, shit happens. Rome wasn't built in a day. I myself still feel like
					an imposter the more I read up, the more I hear from entrepreneurs and product managers in
					person or podcasts. Persevere and live to fight another day against shitty policies!
				</p>
			</li>
		</ul>

		<a
			href="/learn"
			class="btn btn-primary h-auto rounded-full px-8 py-4 text-4xl shadow-lg shadow-lime-400/50 lg:min-w-96"
			>Learn Now!</a>
	</section>
</div>

<style>
</style>
