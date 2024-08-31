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

<div class="lg:bg-base100-pattern">
	<section
		class="lg:x-28 mx-auto grid min-h-[70vh] max-w-screen-2xl content-center px-2 py-10 lg:grid-cols-1 lg:gap-x-20 lg:py-20"
		data-pagefind-ignore>
		<h2 class="text-center lg:col-span-1">People who do tech in Govt can feel disenchanted.</h2>
		<div
			class="flex max-h-[40rem] grid-cols-2 flex-wrap items-center justify-center space-x-8 space-y-4 lg:flex-nowrap lg:p-8">
			<div class="min-w-72">
				<BadIdeaAmico />
			</div>
			<div class=" space-y-4">
				<h3>Poor Outcomes</h3>
				<p>
					Don't we always come across examples where we think the project's pointless but we're
					doing it anyway because a PS asked for it. Or a vendor is charging us an arm and a leg,
					but we need to do it anyway. Or a project under us is so unusable, but we've already sunk
					all our effort and money into it to u-turn.
				</p>
			</div>
		</div>
		<div
			class="flex max-h-[40rem] grid-cols-2 flex-wrap items-center justify-center space-x-8 space-y-4 lg:flex-nowrap lg:p-8 lg:ps-[20rem]">
			<div class="min-w-72">
				<CoolRobotAmico />
			</div>
			<div class="space-y-4">
				<h3>Help ma, I can't keep up!</h3>
				<p>
					Tech moves so dizzying fast it's daunting to know where to start or keep up. So easy to
					get imposter syndrome.
				</p>
				<p>AI, tech stacks, databases, cloud, software-as-a-service, hardware.</p>
			</div>
		</div>
		<div
			class="flex max-h-[40rem] grid-cols-2 flex-wrap items-center justify-center space-x-8 space-y-4 lg:flex-nowrap lg:p-8">
			<div class="min-w-72">
				<QuestionsAmico />
			</div>
			<div class="space-y-4">
				<h3>Individuals</h3>
				<p>
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

<section class="min-h-dvh bg-base-300 px-1 py-8 lg:py-20" data-pagefind-ignore>
	<div class="mx-auto grid w-full max-w-screen-2xl gap-8 lg:grid-cols-3">
		<div class="flex items-center justify-center text-center lg:col-span-3 lg:min-h-36">
			<h2>Common complaints from people on the ground.</h2>
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
						them 101 stuff. And stop asking me to write papers or do shitty powerpoint slides to say
						obvious things.
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
		<div class="flex min-h-36 items-center justify-center text-center lg:col-span-3">
			<h2>Neither do these important people.</h2>
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
</section>

<div class="lg:bg-base100-pattern-alt">
	<section
		class="mx-auto grid max-w-screen-2xl content-center justify-items-center gap-x-8 gap-y-8 px-2 py-10 lg:grid-cols-2 lg:gap-y-20 lg:py-20"
		data-pagefind-ignore>
		<h1 class="text-center lg:col-span-2">How Apptitude could help you.</h1>
		<div class="content-center justify-self-center">
			<enhanced:img
				src={rocket}
				alt="Rocket"
				sizes="(min-width:1920px) 700px, (min-width:600px) 400px"
				class="rounded-semi-super lg:rounded-super" />
		</div>
		<div class="grid content-center">
			<ul class="space-y-8">
				<li
					class="flex flex-wrap items-center justify-center space-y-8 rounded-2xl bg-base-300 p-4 lg:flex-nowrap lg:space-x-8 lg:space-y-0 lg:p-8">
					<div>
						<svg
							id="hugeicons:refresh"
							xmlns="http://www.w3.org/2000/svg"
							width="2em"
							height="2em"
							class="h-24 w-24"
							viewBox="0 0 24 24"
							><path
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M20.01 2v3.132a.314.314 0 0 1-.556.201A9.98 9.98 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10"
								color="currentColor" /></svg>
					</div>
					<div class="space-y-4">
						<h3>Learn more. Start with you.</h3>
						<p>Change starts with every person.</p>
						<p>
							Every better decision, every dollar saved is a dollar better spent on a hospital or
							education. Not lining some vendor's Managing Partner or Sales Director peddling
							expensive white elephant project.
						</p>
					</div>
				</li>
				<li
					class="flex flex-wrap items-center justify-center space-y-8 rounded-2xl bg-base-300 p-4 lg:flex-nowrap lg:space-x-8 lg:space-y-0 lg:p-8">
					<div>
						<svg
							id="hugeicons:elearning-exchange"
							xmlns="http://www.w3.org/2000/svg"
							width="2em"
							height="2em"
							class="h-24 w-24"
							viewBox="0 0 24 24"
							><g
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								color="currentColor"
								><path
									d="M2.459 9c1.277-4.057 5.077-7 9.566-7c5.198 0 9.472 3.947 9.975 9l-2-.407M21.541 15a10.03 10.03 0 0 1-9.566 7C6.777 22 2.503 18.053 2 13l2 .407" /><path
									d="M9.002 13.528v1.992a.95.95 0 0 0 .432.81c.844.528 1.485.683 2.571.716c1.001.027 1.629-.13 2.563-.714a.96.96 0 0 0 .44-.82v-1.984m2.003-2.513v3.015M7.05 10.844c.362-.764 2.605-2.094 4.652-2.751a.93.93 0 0 1 .604.014c1.81.662 3.824 1.665 4.555 2.478c.381.425.008.967-.453 1.302c-.937.681-1.97 1.21-4.058 2.013a.98.98 0 0 1-.688.005c-2.14-.795-4.142-1.82-4.595-2.723a.39.39 0 0 1-.017-.338" /></g
							></svg>
					</div>
					<div class="space-y-4">
						<h3>Use my resources to upskill.</h3>
						<p>
							Choose how you want to learn. <a href="/learn" class="text-primary underline"
								>Use my lists of online resources</a>
							as a starting point. Or
							<a href="/guides" class="text-primary underline">use my guides</a> if you just want to
							lob more relevant questions at your vendors or project teams.
						</p>
					</div>
				</li>
				<li
					class="flex flex-wrap items-center justify-center space-y-8 rounded-2xl bg-base-300 p-4 lg:flex-nowrap lg:space-x-8 lg:space-y-0 lg:p-8">
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="2em"
							height="2em"
							class="h-24 w-24"
							viewBox="0 0 24 24"
							><path
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M2.017 20.305c1.13 1.614 6.042 2.882 8.362-.14c2.51 1.2 6.65.828 10.02-1.052c.468-.261.912-.591 1.183-1.054c.613-1.045.628-2.495-.49-4.634c-1.865-4.655-5.218-8.74-6.572-10.383c-.278-.254-2.052-.614-3.133-.96c-.478-.147-1.367-.246-2.431 1.156c-.505.665-2.796 2.297.111 3.395c.45.115.782.326 2.836-.05c.268-.046.936 0 1.407.827l.983 1.406a.96.96 0 0 1 .17.44c.172 1.5.166 3.376 1.002 4.326c-1.291-.933-4.664-2.042-7.206 1.113M2.001 12.94a6.714 6.714 0 0 1 8.416-.419"
								color="currentColor" /></svg>
					</div>
					<div class="space-y-4">
						<h3>If things improve, keep at it!</h3>
						<p>
							If things still suck, shit happens. Rome wasn't built in a day. I myself still feel
							like an imposter the more I read up, the more I hear from entrepreneurs and product
							managers in person or podcasts. Persevere and live to fight another day against shitty
							policies!
						</p>
					</div>
				</li>
			</ul>
		</div>
		<div class="flex justify-center lg:col-span-2">
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
	</section>
</div>

<style>
</style>
