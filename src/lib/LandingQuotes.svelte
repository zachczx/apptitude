<script>
	import recodingAmericaCover from '$lib/assets/recoding-america-cover.jpg?enhanced&w=300';
</script>

<div class="space-y-14 bg-base-300 px-5 py-10 lg:px-10 lg:py-20">
	<div class="pb-10 text-center">
		<h1
			class="inline-block bg-gradient-to-r from-emerald-200 via-lime-200 to-teal-300 bg-clip-text pt-10 text-transparent lg:pt-5 xl:text-7xl min-[1921px]:text-8xl">
			What's the problem?
		</h1>
	</div>
	<div class="flex justify-center pb-10">
		<enhanced:img src={recodingAmericaCover} alt="Recoding America" class="" />
	</div>
	<div class="space-y-4">
		<h2
			class="inline-block bg-gradient-to-r from-emerald-200 via-lime-200 to-teal-300 bg-clip-text text-transparent">
			Maybe government tech outcomes suck?
		</h2>
		<p class="text-xl">
			I was recommended a book recently. <a
				href="https://www.amazon.com/Recoding-America-Government-Failing-Digital-ebook/dp/B0B8644ZGY"
				class="link-underline">"Recoding America"</a
			>. I read it, it's a great book, exactly as every reviewer praised. The person who made the
			recommendation was spot on. Most of the stuff written there are things that I'd heard here and
			there, but not structured in prose form. The book's fantastic! You could just change the
			names, agencies, systems to Singaporean ones, and the book would read fine. Maybe the case
			studies won't be as dire, but surely the spirit of the critiques would still be alarmingly
			familiar.
		</p>
		<p class="text-xl">
			It's true that across government tech, we have policy people writing tech policies without
			knowing it, decision makers who don't know what they're approving/rejecting, segments claiming
			to be "agile" (WaterScrumFall lul), project manager and business owners stacking requirements,
			people thinking they know everything based on non-tech experience, staffers feeling like
			imposters.
		</p>
		<p class="text-xl">I copied some paragraphs as I read, see if they sound familiar.</p>
	</div>
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-14 lg:px-20">
		<div class="space-y-7">
			<h3>Structures, Culture</h3>
			<blockquote class="leading-8">
				Blaming software that fails gets us little in the way of fixing the problems that government
				faces. <span class="font-medium text-primary"
					>More helpful is to understand the structures and culture that created the software,
					because they determine not just how the software works but how the whole system operates.</span>
			</blockquote>
			<blockquote class="leading-8">
				Formally, the tech implementers are not charged with building services that meet users’
				needs or achieve policy goals. <span class="font-medium text-primary"
					>Their job is simply to meet a predetermined list of requirements. These are often
					exceedingly specific, but nowhere in government documents will you find a requirement that
					the service actually works for the people who are supposed to use it.</span>
				The systems are designed instead to meet the needs of the bureaucracies that create them—they
				are risk-mitigation strategies for dozens of internal stakeholders. And they often fail even
				at that task; trying to be all things to all people, they’re unable to make any reasonable tradeoffs
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
					class="font-medium text-primary">
					Rigid, overly specific interpretations of law and policy are hard to avoid when those
					doing the interpretation can’t evaluate the work for themselves.
				</span>
			</blockquote>
			<blockquote class="leading-8">
				<span class="font-medium text-primary"
					>Policy people tend to see those who implement the policy decisions they make as being far
					below them in the pecking order, perhaps even at the bottom of it.</span> OMB was the pinnacle
				of that pecking order. In other words, No, thank you, that’s lowbrow stuff. That’s not the kind
				of thing we do in powerful places in government.
			</blockquote>
		</div>
		<div class="space-y-7">
			<h3>Systems Chugging to Implement Complex Policies</h3>
			<blockquote class="leading-8">
				None of the modernized states were able to avoid accruing backlogs, and few of them seemed
				to do much better than average in terms of scaling to meet demand. The problem is that the
				<span class="font-medium text-primary"
					>modernization projects all sought to “add functionality” — more layers of paint — or just
					to move to more modern infrastructure, particularly to the cloud. None of them targeted
					serving clients better or scaling to meet demand.</span> If the people running the systems
				had set scale as a goal and truly analyzed their bottlenecks, they would have recognized the
				need to rationalize and simplify the accumulated layers of policy and process along with bringing
				in new technology.
			</blockquote>
		</div>
		<div class="space-y-7">
			<h3>Legacy Digital Infra</h3>
			<blockquote class="leading-8">
				... and because tech investments must always be pitched as adding some new capability to the
				system (rarely just renovating what already exists), each piece of the system gets built in
				different technology paradigms from different eras. But every new piece depends on
				everything that came before, so each successive layer is constrained by the limitations of
				the earlier technologies. The system is not so much updated as it is tacked on to. Over
				time, new functionality is added, but the system never sheds the core limitations of the
				foundational technologies. At the same time, it becomes enormously complex and fragile.
				Updates require caution, as any change in one layer can have unforeseen consequences in the
				others. <span class="font-medium text-primary"
					>It becomes harder and harder to support the technologies in the lower, older layers,
					while the more recent layers require constant updates and patches. The paint cracks.</span>
			</blockquote>
		</div>
		<div class="space-y-7">
			<h3>Ritualistic Adherence to Outdated Guidelines</h3>
			<blockquote class="leading-8">
				Arguments about what is or isn’t required happen all the time, but they are much less likely
				to lead to a suffocatingly risk-averse answer when the people involved in the argument
				understand the domain. Here, aside from the tech team, <span
					class="font-medium text-primary"
					>it is highly unlikely that anyone else in the debate — likely to be dozens of people in
					dozens of different roles — had any basis on which to judge whether an ESB was a good
					thing or a bad thing in this context.</span>
				Thus, to nix the ESB, dozens of people in dozens of different roles would all have had to agree
				to jeopardize their jobs over a recommendation they didn’t understand.
				<span class="font-medium text-primary"
					>These discussions tend to function as a vetocracy, in which it takes all thumbs up in
					order to accept the risk, and only one thumbs-down to stick with the less-risky option.
					The ESB stays.</span>
			</blockquote>
		</div>
		<div class="space-y-7">
			<h3>Govt Writing Requirements</h3>
			<blockquote class="leading-8">
				<span class="font-medium text-primary"
					>Government’s obsession with requirements — voluminous, detailed requirements that can
					take so long to compile the software is obsolete before it’s even bid out—stems from a
					delusion that it’s possible to make a work plan so specific that it requires no further
					decision-making.</span>
				You hand it off and the developers just do exactly what they’re told. Why not let those developers
				choose the best tool or platform for the job?
			</blockquote>
			<blockquote class="leading-8">
				<span class="font-medium text-primary"
					>But the goal in government seems to be to drain the job of software development of any
					opportunity to exercise judgment.</span> (To be clear, as we’ll see later, this goal is seldom
				if ever achieved.) This is a terrible way to manage most things, but it’s particularly destructive
				when hardly any of the people writing the work plan have much basis for their decisions either.
			</blockquote>
		</div>

		<div class="space-y-7">
			<h3>Build vs Buy</h3>
			<blockquote class="leading-8">
				Government can, and should, buy commodity software products from companies to handle its
				basic internal needs, which are not all that different from the needs of the private sector:
				communication tools, HR and payroll systems, and so on. Indeed, <span
					class="font-medium text-primary"
					>government procurement teams have a terrible habit of contracting for bespoke software
					when they could buy commercial products—partly because we tell these teams to collect
					every possible requirement they can think of, which encourages and even calcifies arcane
					practices within the departments they serve.</span>
			</blockquote>
		</div>
		<div class="space-y-7">
			<h3>Tech Competencies, Capabilities</h3>
			<blockquote class="leading-8">
				Though government should buy commodity products for commodity functions, when it’s not
				accounting or payroll but your agency’s mission, the technology needs to be your product. It
				can’t just be a project that was contracted for, developed, tested, and declared “done.” You
				need to own the code, and you need to be able to change it to meet your needs. This doesn’t
				mean that you can’t use contractors at all—in government, you will almost certainly use
				them. <span class="font-medium text-primary"
					>It means that you must have the core competencies to support a living, ever-adapting
					system. Government knows how to acquire technology. What we need to acquire are
					capabilities.
				</span>
			</blockquote>
		</div>
	</div>
	<div class="space-y-4">
		<h2
			class="inline-block bg-gradient-to-r from-emerald-200 via-lime-200 to-teal-300 bg-clip-text text-transparent">
			Chip Away At This By Improving Tech Knowledge
		</h2>
		<p class="text-xl">
			This is far too big a problem to solve by any one thing. You can create GovTech, reform other
			engineering agencies (doesn't seem like it), but cultures and people are far more entrenched.
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
