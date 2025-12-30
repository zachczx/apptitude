<script>
	import recodingAmericaCover from '$lib/assets/recoding-america-cover.jpg?w=300&enhanced';
</script>

<div class="mx-2 mt-20 mb-2 text-center lg:mx-20 lg:mb-10">
	<h1
		class="inline-block bg-linear-to-r from-emerald-200 via-lime-200 to-teal-300 bg-clip-text py-3 text-center text-transparent">
		What's the problem?
	</h1>
	<div>
		<i>If you need an opinion, I have plenty to spare.</i>
	</div>
</div>
<div class="space-y-14 px-5 py-10 lg:px-20">
	<div class="flex justify-center pb-5">
		<enhanced:img
			src={recodingAmericaCover}
			alt="Recoding America"
			class="drop-shadow-[0_1rem_1rem_rgba(255,255,255,0.1)]" />
	</div>
	<div class="space-y-4">
		<h2
			class="inline-block bg-linear-to-r from-emerald-200 via-lime-200 to-teal-300 bg-clip-text text-transparent">
			There are problems with tech outcomes in Govt.
		</h2>
		<p class="text-xl">
			I was recommended a book recently. <a
				href="https://www.amazon.com/Recoding-America-Government-Failing-Digital-ebook/dp/B0B8644ZGY"
				class="link-underline">"Recoding America"</a
			>. I read it. It's a great book, exactly as every reviewer praised. The person who made the
			recommendation was spot on. Most of the stuff written there are things that I'd heard here and
			there working in the public sector. You could change the names, agencies, systems to
			Singaporean ones, and it would still make sense.
		</p>
		<p class="text-xl">
			It's true that across government tech, we have policy people writing tech policies without
			knowing it, decision makers who don't know what they're approving/rejecting, segments claiming
			to be "agile" (WaterScrumFall lul), project manager and business owners stacking requirements,
			people thinking they know everything based on non-tech experience, staffers feeling like
			imposters.
		</p>
		<p class="text-xl">
			To demonstrate my point, here are extracts from the book. They are very familiar.
		</p>
	</div>
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-14 lg:px-20">
		<div class="space-y-7">
			<h3>Structures, Culture</h3>
			<blockquote class="leading-8">
				Blaming software that fails gets us little in the way of fixing the problems that government
				faces. <span class="text-primary"
					>More helpful is to understand the structures and culture that created the software,
					because they determine not just how the software works but how the whole system operates.</span>
			</blockquote>
			<blockquote class="leading-8">
				Formally, the tech implementers are not charged with building services that meet users’
				needs or achieve policy goals. <span class="text-primary"
					>Their job is simply to meet a predetermined list of requirements. These are often
					exceedingly specific, but nowhere in government documents will you find a requirement that
					the service actually works for the people who are supposed to use it.</span>
				The systems are designed instead to meet the needs of the bureaucracies that create them—they
				are risk-mitigation strategies for dozens of internal stakeholders. And they often fail even at
				that task; trying to be all things to all people, they’re unable to make any reasonable tradeoffs
				for the sake of usability.
			</blockquote>
		</div>
		<div class="space-y-7">
			<h3>Policy Is King</h3>
			<blockquote class="leading-8">
				That public servants get held accountable to process over outcomes is well known; I do not
				presume to know how to change this, though I desperately wish I did. What I do know is that
				the perverse effects of glorifying process are far greater in technology, for the simple
				reason that there are so few people in government who understand tech. <span
					class="text-primary">
					Rigid, overly specific interpretations of law and policy are hard to avoid when those
					doing the interpretation can’t evaluate the work for themselves.
				</span>
			</blockquote>
			<blockquote class="leading-8">
				<span class="text-primary"
					>Policy people tend to see those who implement the policy decisions they make as being far
					below them in the pecking order, perhaps even at the bottom of it.</span> OMB was the pinnacle
				of that pecking order. In other words, No, thank you, that’s lowbrow stuff. That’s not the kind
				of thing we do in powerful places in government.
			</blockquote>
		</div>
		<div class="space-y-7">
			<h3>Policy Complexity</h3>
			<blockquote class="leading-8">
				None of the modernized states were able to avoid accruing backlogs, and few of them seemed
				to do much better than average in terms of scaling to meet demand. The problem is that the
				<span class="text-primary"
					>modernization projects all sought to “add functionality” — more layers of paint — or just
					to move to more modern infrastructure, particularly to the cloud. None of them targeted
					serving clients better or scaling to meet demand.</span> If the people running the systems had
				set scale as a goal and truly analyzed their bottlenecks, they would have recognized the need
				to rationalize and simplify the accumulated layers of policy and process along with bringing in
				new technology.
			</blockquote>
		</div>
		<div class="space-y-7">
			<h3>Legacy Infra</h3>
			<blockquote class="leading-8">
				... and because tech investments must always be pitched as adding some new capability to the
				system (rarely just renovating what already exists), each piece of the system gets built in
				different technology paradigms from different eras... The system is not so much updated as
				it is tacked on to. Over time, new functionality is added, but the system never sheds the
				core limitations of the foundational technologies. At the same time, it becomes enormously
				complex and fragile... <span class="text-primary"
					>It becomes harder and harder to support the technologies in the lower, older layers,
					while the more recent layers require constant updates and patches. The paint cracks.</span>
			</blockquote>
		</div>
		<div class="space-y-7">
			<h3>Decision Making</h3>
			<blockquote class="leading-8">
				Arguments about what is or isn’t required happen all the time, but they are much less likely
				to lead to a suffocatingly risk-averse answer when the people involved in the argument
				understand the domain... <span class="text-primary"
					>it is highly unlikely that anyone else in the debate — likely to be dozens of people in
					dozens of different roles — had any basis on which to judge whether an ESB was a good
					thing or a bad thing in this context.</span>
				Thus, to nix the ESB, dozens of people in dozens of different roles would all have had to agree
				to jeopardize their jobs over a recommendation they didn’t understand.
				<span class="text-primary"
					>These discussions tend to function as a vetocracy, in which it takes all thumbs up in
					order to accept the risk, and only one thumbs-down to stick with the less-risky option.
					The ESB stays.</span>
			</blockquote>
		</div>
		<div class="space-y-7">
			<h3>Scope of Requirements</h3>
			<blockquote class="leading-8">
				<span class="text-primary"
					>Government’s obsession with requirements — voluminous, detailed requirements that can
					take so long to compile the software is obsolete before it’s even bid out—stems from a
					delusion that it’s possible to make a work plan so specific that it requires no further
					decision-making.</span>
				You hand it off and the developers just do exactly what they’re told. Why not let those developers
				choose the best tool or platform for the job?
			</blockquote>
			<blockquote class="leading-8">
				<span class="text-primary"
					>But the goal in government seems to be to drain the job of software development of any
					opportunity to exercise judgment</span
				>... it’s particularly destructive when hardly any of the people writing the work plan have
				much basis for their decisions either.
			</blockquote>
		</div>

		<div class="space-y-7">
			<h3>Build vs Buy</h3>
			<blockquote class="leading-8">
				<span class="text-primary"
					>Government procurement teams have a terrible habit of contracting for bespoke software
					when they could buy commercial products</span> — partly because we tell these teams to collect
				every possible requirement they can think of, which encourages and even calcifies arcane practices
				within the departments they serve.
			</blockquote>
		</div>
		<div class="space-y-7">
			<h3>Owning and Building Products</h3>
			<blockquote class="leading-8">
				It can’t just be a project that was contracted for, developed, tested, and declared “done.”
				You need to own the code, and you need to be able to change it to meet your needs... <span
					class="text-primary"
					>you must have the core competencies to support a living, ever-adapting system.</span>
				Government knows how to acquire technology.
				<span class="text-primary">What we need to acquire are capabilities.</span>
			</blockquote>
		</div>
	</div>
	<div class="space-y-4">
		<h2
			class="inline-block bg-linear-to-r from-emerald-200 via-lime-200 to-teal-300 bg-clip-text text-transparent">
			Chip Away At This By Improving Tech Knowledge
		</h2>
		<p class="text-xl">
			This is far too big a problem to solve by any one thing. You can create GovTech (<a
				href="https://www.youtube.com/watch?v=MfGD-cG6nOA"
				>and indeed this was partly why GovTech was created</a
			>), reform other engineering agencies (doesn't seem like it), but cultures and people are far
			more entrenched.
		</p>
		<p class="text-xl">
			But I can point you to stuff I think you need to manage tech products & projects better -
			online resources and great points I've picked up from smart Govt people.
		</p>
	</div>
</div>

<style>
	blockquote::before {
		content: '“';
		font-size: 2rem;
		padding-inline: 0.5rem;
		color: #9fe88d;
		font-weight: bold;
		vertical-align: -0.6ex;
	}
	blockquote::after {
		content: '”';
		font-size: 2rem;
		padding-inline: 0.5rem;
		color: #9fe88d;
		font-weight: bold;
		vertical-align: -0.6ex;
	}
	blockquote {
		border-left: 0.4em #9fe88d solid;
		padding-left: 2rem;
	}
</style>
