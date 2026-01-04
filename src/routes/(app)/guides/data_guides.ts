interface GuidesData {
	id: number;
	name: string;
	tagline: string;
	slug: string;
	bylines?: { [index: number]: { text: string; icon: string } };
	definitions: { term: string; definition: string }[];
	goals?: string[];
	questions: { what: string; why: string }[];
	alarms?: { what: string; why: string }[];
	dealbreakers: { what: string; why: string }[];
	solutions: string[];
	suggestions: string[];
}

export const guides: GuidesData[] = [
	{
		id: 1,
		name: 'Problem Statements',
		tagline: "Problematic problem statement? There's a product for that!",
		slug: 'problems',
		definitions: [
			{
				term: 'User',
				definition:
					'A person who is trying to solve a problem and is looking for a product or service to help them solve it.',
			},
			{
				term: 'User experience',
				definition: 'The journey that the user takes with that product or service.',
			},
			{
				term: 'Problem statement',
				definition:
					'A concise description of the problem that needs to be solved, and it summarizes who the user is, what they need from a design, and why.',
			},
			{
				term: 'Pain points',
				definition:
					'Any UX issue or friction that frustrates the user and blocks them from getting what they need. Minimizing pain points keeps users happy and encourages them to keep interacting with the product.',
			},
			{
				term: 'Value proposition',
				definition:
					'Why your user would or should use the product or service that you’re designing.',
			},
		],
		goals: [
			'Problem we are solving must be clear',
			'Problem needs to be worth solving',
			"User's goals must be clear and therein lies the need to define what constitutes success for the user",
		],
		questions: [
			{
				what: 'Is there a problem statement? What is the problem statement?',
				why: 'You need to be clear what you are trying to do. Identify a right, meaningful problem.',
			},
			{
				what: 'What is the need and desired outcome?',
				why: 'Focus on the gap, not the solution, and what the user/customer wants achieved.',
			},
			{
				what: 'Why is the problem important?',
				why: 'Choosing the correct problem to solve increases the odds you succeed in your initiative.',
			},
			{
				what: 'Who is experiencing the problem?',
				why: "You need to focus on who the customer really is whom you're trying to value add.",
			},
			{
				what: 'What are the pain points you’re trying to solve?',
				why: "You want to target key issues users have with whatever you're trying to get them to do.",
			},
			{
				what: 'Where is the user when they’re using the product?',
				why: "Context matters. Knowing the user's environment (physical location, device, surrounding distractions) informs design and functionality. A product used on a noisy factory floor will have different UI/UX needs than one used in a quiet office. Understanding the user's context improves usability and relevance.",
			},
			{
				what: 'When does the problem occur?',
				why: 'Understanding when the problem occurs (frequency, specific situations, time of day) helps prioritize solutions and identify trigger events for your product to intervene effectively.',
			},

			{
				what: 'How are users reaching their goals by using the product?',
				why: 'This focuses on user journeys and product effectiveness. Mapping user goals and how your product facilitates them reveals areas for improvement in usability and value proposition. It ensures your product is actually helping users achieve what they set out to do, and highlights potential friction points.',
			},
			{
				what: 'What is the hypothesis?',
				why: "Product development should be driven by testable assumptions, not just gut feelings. Formulating a clear hypothesis ('If we build X, then Y will happen') allows you to validate your ideas through data and iteration.",
			},
			{
				what: 'Who gets value, at what velocity, at what volume?',
				why: 'Understanding value delivery is key to sustainability and growth. Knowing who benefits, how quickly they see value, and how much value they receive informs your business model, marketing strategy, and product roadmap. It helps you quantify impact and understand the scale of your potential success.',
			},
			{
				what: 'Why do we need X? What happens if we got rid of this by end of this year, or if we refused to build this? Who would come to us to complain and why would they do so?',
				why: 'This question challenges assumptions and forces you to justify features or projects. It encourages critical thinking about necessity and impact.',
			},
			{
				what: "What are the blockers to doing X? Let's split them by policy, user research, resources.",
				why: 'First step to unblocking is to understand the nature of the blocker. Each type of blocker deserves its own treatment.',
			},
		],
		alarms: [
			{
				what: 'You should be doing xxx, yyy, zzz because Company X is doing it as well.',
				why: "Context is important, there's very little point in trying to copy solutions if it worked to solve their problems, not ours.",
			},
			{
				what: 'I already have a plan and it incorporates input and requirements from X departments.',
				why: "It most likely is an aggregation of desired solutions that do not solve real problems. It also is likely overly complex because it tries to be everyone's solution.",
			},
			{
				what: 'I have KPIs that xxx/IDSC/committee already approved X years ago',
				why: "You probably haven't reviewed if they're still appropriate and if it measures your ability to solve user problems",
			},
			{
				what: 'I already have a strategy approved X years ago',
				why: 'You probably missed out on technologies, solutions and products that came up. ',
			},
			{
				what: "We need to be no worse off / Ensure we're no worse off.",
				why: 'Problems don\'t always need to be solved in the same way, but "no worse off" generally assumes solutions are static.',
			},
			{
				what: "It's impossible to track whether our tool improves productivity, saves manual labor and how much it improves the business.",
				why: "You can't track the productivity increase for every person, but you can follow >5 teams for several weeks and record how much they benefit in time savings, efficiency, errors they encounter, or even entire work flows they no longer do. But this has to be done before you deploy and is pointless to lament you didn't after the fact.",
			},
			{
				what: 'Anything is technically possible. GPT 4, 5, 6, 7 are all the same. What matter are the business requirements and the use case.',
				why: 'I\'ve heard this a lot. Tech advancements can meaningfully change the game for business. Like, models are literally getting much smarter with every release. This just betrays a lack of understanding by "technical consultants" and is a lazy excuse to not think deeper.',
			},
		],
		dealbreakers: [
			{
				what: "No one knows what problem is it we're solving.",
				why: 'No clear problem.',
			},
			{
				what: 'Problem being tackled seems to be changing after every meeting.',
				why: 'Problem keeps changing.',
			},
			{
				what: "We're constantly adding new requirements to our total list of requirements.",
				why: 'Requirements keep growing.',
			},
			{
				what: "No one's asking for this.",
				why: 'Nobody wants it.',
			},
			{
				what: 'Meetings are dominated by people who say "I think..." but no one actually knows someone who\'s a user.',
				why: 'No user knowledge.',
			},
			{
				what: "You're doing things because bosses asked.",
				why: 'Boss-driven, not user-driven.',
			},
			{
				what: 'Problem is an edge case, but we have money, so who cares.',
				why: 'Solving a rare problem (wasteful).',
			},
			{
				what: "Business owner says they need all the requirements, so let's keep every one.",
				why: 'Unfocused and wasteful.',
			},
		],
		solutions: [
			"Talk to users. We're trying to solve their problems, not some Minister or PS. Users are masters of their problems, even if they can be terrible at finding the best solutions.",
			'Question every requirement - contexts change, technologies improve, obsolescence kicks in.',
			'Someone needs the courage to call out illogical projects/requirements, disagreements are naturally difficult and antithetical to how human beings have evolved to survive',
		],
		suggestions: [
			'[Name of user persona] is a [type of user] who needs [type of user experience] because [benefits of user experience].',
			'If [user] can perform [action], then they will achieve [benefit].',
		],
	},
	{
		id: 2,
		name: 'Product',
		tagline: 'Just keep shipping... utterly useless features!',
		slug: 'product',
		definitions: [
			{
				term: 'Product-market fit',
				definition:
					'How much product satisfies strong market demand, i.e., target customers truly need and want the product.',
			},
			{
				term: 'Product-market fit (First Round Capital)',
				definition:
					'"A state of widespread demand for a product that satisfies a critical need and crucially can be delivered repeatably and efficiently to each customer".',
			},
			{
				term: 'North Star Metric',
				definition:
					'A single, primary metric that best captures the core value that a product delivers to customers.',
			},
			{
				term: 'Minimum viable product (MVP)',
				definition:
					'A product development strategy used to quickly get a basic version of a product into the market for initial testing and validation from real users.',
			},
			{
				term: 'XY Problem',
				definition:
					"Often in customer service - is where someone seeks help for a solution (X) they have chosen as a way to solve a different problem (Y). Helping with X won't help solve actual problem if it's not a good approach in the first place.",
			},
			{
				term: 'Project management vs. Product management',
				definition:
					'Project management is plan-driven (timelines, people tasked, execution plans), product management is user-driven (user adoption, customer satisfaction, business impact).',
			},
		],
		goals: [
			'Make products that solve real problems for users',
			"If users keep asking why do I need this product and how do I use this, you've got a problem.",
			"A product is something that's useful to users, customers. Project management is a constituent, not its whole.",
			'Customer/user feedback makes its way back to change the product.',
			'Have a go-to market plan - public sector products should not get a free pass.',
			'If a product solves a real problem, people will want to join in, no matter how "bad" it seems to be (see: Twitch).',
		],
		questions: [
			{
				what: 'Who is the target customer?',
				why: "Without a clear target, you're designing for 'everyone', which ends up pleasing no one. Business-wise, *vague targets equal wasted budget*. Knowing your customer means targeted marketing, focused development, and a product that truly resonates. It's not just about *who* clicks, but *who* converts and becomes a loyal advocate. **Bottom line: Know your audience to maximize impact and ROI.**",
			},
			{
				what: 'What problem does your product solve?',
				why: "Solve real problems, not imagined ones. Without a core value proposition, you're just wasting resources.",
			},
			{
				what: 'How does your product solve this problem?',
				why: 'Emphasize effective solutions, not just solutions. Ineffective solutions waste resources and erode trust.',
			},
			{
				what: 'What are the key features and benefits of your product?',
				why: "Highlight value upfront - features are the 'what', benefits are the 'why' users should care. Focusing on benefits – time saved, money earned, efficiency boosted, stress reduced – speaks directly to user needs and business ROI. Ultimately, features sell products, benefits sell value.",
			},
			{
				what: 'What is the product vision?',
				why: 'Vision guide us to focus and alignment.',
			},
			{
				what: 'What is a minimum viable product?',
				why: "Conserve resources and minimize losses. Test early by putting your product in your users' hands as early as possible.",
			},
			{
				what: 'Do you see product-market fit for your product?',
				why: "UX strives for solutions that resonate with user needs. Business *demands* market validation for sustainable growth. Product-market fit isn't a 'maybe', it's a 'must-have'. It's about ensuring your product addresses a real market need, is competitively positioned, and has the potential for scale. **No product-market fit, no sustainable business. It's that stark.**",
			},
			{
				what: 'What is the market size for your product?',
				why: 'Not all problems are worth solving. A problem that affects few people might not be worth your while.',
			},
			{
				what: 'Who are your competitors and how is your product different?',
				why: 'Understand user alternatives, identify gaps, opportunities, and your unique selling proposition (USP).',
			},
			{
				what: 'What is your go-to market plan?',
				why: 'Consider the user journey beyond the product itself, including reach, user acquisition, momentum.',
			},
			{
				what: 'What is the development/iteration timeline for your product?',
				why: 'The shorter the timeline, the faster you can get feedback, the faster you can "fail fast".',
			},
			{
				what: 'How will you measure the success of your product?',
				why: "You need to know how you know you succeed or fail. If you can't measure it, you can't manage it, and you certainly can't improve it.",
			},
			{
				what: 'Are you replacing/refactoring for the sake of it? (common when trying to rewrite existing/legacy services in latest framework)',
				why: 'New is not better.',
			},
			{
				what: 'What were the surprises you had while coming up with this plan/prototype/product?',
				why: 'Learning from surprises is how we get smarter, faster, and more effective.',
			},
			{
				what: 'Oh this insert govtech product? Not familiar with it but we know we need ours and they seem different anyway.',
				why: "You're trying to recreate something that's presumably solved well. And doesn't seem like you did your competitive audit. Even if you're satisfied with your solution, you should say why yours works better, eg from user research.",
			},
			{
				what: "Let's do UI UX better.",
				why: "They're very different things! The person saying this betrays a lack of understanding of what these 2 acronyms mean. UI is a part of ux. UX is far more than just tinkering with screens, colors, typography, spacing on figma templates. And this lack of clarity prevents us from going into what needs to be solved and how we should solve them.",
			},
		],
		alarms: [
			{
				what: 'Get this feature added, I don’t care how you get it done.',
				why: 'There’s obviously no prioritization done for features and no idea (probably unlikely) it solves an important user pain point. User research is an afterthought, so this decision is definitely not going to help the product.',
			},
			{
				what: 'There’re 5 organizations using our wrapper product, they’re using it because doing this is cheaper than using the actual product as is.',
				why: 'We’re subsidizing this usage and wasting money (versus letting market economics dictate demand).',
			},
			{
				what: 'I’m doing this system revamp because I can shave X days from this process, though the entire process still takes 10X days in total from other manual processes and legacy systems.',
				why: 'The money spent on this new system is going to be wasted, because the crux of the problem lies in the majority of time wasted on manual processes and other legacy systems.',
			},
			{
				what: 'Get this feature added, I don’t care how you get it done.',
				why: 'There’s obviously no prioritization done for features and no idea (probably unlikely) it solves an important user pain point. User research is an afterthought, so this decision is definitely not going to help the product.',
			},
			{
				what: 'There’re 5 organizations using our wrapper product, they’re using it because doing this is cheaper than using the actual product as is.',
				why: 'We’re subsidizing this usage and wasting money (versus letting market economics dictate demand).',
			},
			{
				what: 'I’m doing this system revamp because I can shave X days from this process, though the entire process still takes 10X days in total from other manual processes and legacy systems.',
				why: 'The money spent on this new system is going to be wasted, because the crux of the problem lies in the majority of time wasted on manual processes and other legacy systems.',
			},
			{
				what: 'I know the problem, I’m user number 1 and my colleagues are users 2, 3, 4…',
				why: 'No you (yall )are not representative of all users, no matter how experienced and frequently you use.',
			},
			{
				what: 'Users don’t appear to want to use our system, but we’ll write to their DSes and Dirs to encourage takeup.',
				why: 'Users are not using it because it doesn’t solve a real problem or there’s just too much friction for too little value. If there’s a big problem, everyone will use it if it provides enough value. Obviously not the case here, and no amount of pleading senior leaders everywhere else will help.',
			},
			{
				what: 'Users tell me they have this X problem and therefore need Y, so let’s just build Y.',
				why: 'This is the XY problem. We’re focusing on the wrong thing (customer’s attempted solution Y) rather than the root problem (X), which could be better solved with a new solution, Z. This is very common and I see this a lot.',
			},
		],
		dealbreakers: [
			{
				what: 'Product is a suboptimal solution (read: XY problem)',
				why: 'Fixing the wrong problem.',
			},
			{
				what: "Product solves only a small part of the problem or doesn't solve any real problem at all.",
				why: 'Useless product.',
			},
			{
				what: 'Product is managed as a project, with paper requirements and delivery timelines overriding questions on product value.',
				why: 'Process over value.',
			},
			{
				what: 'Product has no viable market, no users, no product-market fit.',
				why: 'Nobody wants it.',
			},
			{
				what: "Users don't like the product, don't use the product, but are forced to use it because of mandates or management pressure.",
				why: 'Users hate it (forced).',
			},
			{
				what: "Market has (new) alternatives, we either don't know or we hid our heads in the sand (insisting that ours is better).",
				why: 'Outdated; better options exist.',
			},
			{
				what: 'Existing products that have no traction, users keeps getting life support with no end in sight.',
				why: 'Zombie product (no end in sight).',
			},
			{
				what: 'X product has Y% of weekly active users, never mind that these are captive users who are forced to use the platform.',
				why: 'Fake user numbers (forced).',
			},
			{
				what: "If user anecdotes are contradicting your data (that everything's alright), you might be measuring the wrong thing.",
				why: 'Wrong metrics (users complain).',
			},
			{
				what: 'Are the gains marginal? We spend 10mil to cut one process by 2 days but overall process still takes 5 months because of other manual processes.',
				why: 'Tiny gain, huge cost (pointless).',
			},
			{
				what: "Everything's a native app, no matter if all you do is provide info (i.e. a static url or webapp is more fitting).",
				why: 'Over-engineered (too complex).',
			},
		],
		solutions: [
			'Conduct UX/market research to understand your customers/users, and then base your product strategy on the data.',
			'Take time to be clear about unique selling point and what problem it solves.',
			"Scan the market, competitors, other WOG agencies for similar products - don't reinvent the wheel!",
			'Start small like a bootstrapped startup and iterate from there.',
			'Be relentless about creating/reviewing metrics to measure growth, success, failure.',
			"Buy, don't build your own product.",
			"If you do build, don't customize, mould your business processes around the product.",
		],
		suggestions: [
			'Do user research, market research, talk to users.',
			'Slash and revamp business processes in support of product, not the other way round.',
			'Use OKRs in your product planning and tracking.',
			"A product is not a project, don't manage it like one.",
		],
	},

	{
		id: 3,
		name: 'Cost',
		tagline: "We're not sure what we're building, but we know we'll need a bigger budget.",
		slug: 'cost',
		definitions: [
			{
				term: 'Cost savings',
				definition: 'Reduction in costs or expenses.',
			},
			{
				term: 'Cost avoidance',
				definition:
					'Preventing/avoiding future costs/expenses that would have been incurred if no action was taken.',
			},
			{
				term: 'Cost savings vs. Cost avoidance',
				definition:
					'Cost savings reduces current or existing costs, while cost avoidance prevents future costs from occurring in the first place.',
			},
			{
				term: 'Total addressable market (TAM)',
				definition:
					'Total revenue opportunity available to a product or service with 100% market share, i.e., max market demand and revenue potential.',
			},
			{
				term: 'Capital Expenditure (CAPEX)',
				definition:
					'Funds used by a company to acquire, upgrade, or maintain fixed assets such as buildings, equipment, machinery, or land. These are major investments that are capitalized on the balance sheet and depreciated over their useful life.',
			},
			{
				term: 'Operating Expenditure (OPEX)',
				definition:
					'Ongoing costs incurred by a company for its day-to-day operations and maintaining its existing facilities and equipment. These expenses are recorded on the income statement and are fully tax-deductible for the period in which they are incurred. Examples of OPEX include rent, utilities, salaries, and supplies.',
			},
		],
		goals: [
			'We strive to be as lean and cheap as possible.',
			'Money we spend must be worth the ROI.',
			'Money spent must solve real problems.',
		],
		questions: [
			{
				what: 'What is the TAM?',
				why: 'Understand the scale of the problem and impact of any solution.',
			},
			{
				what: 'What are the trade-offs across cost, value, performance, security?',
				why: 'Optimum decision-making involves balancing these dimensions, which are often in conflict.',
			},
			{
				what: 'More costs to mitigate what additional risks?',
				why: `Increased investment should always be tied to clear risk reduction or value creation. If we are spending more, we need to understand *precisely* what additional risks we are mitigating or what new opportunities we are unlocking. Are these risks significant enough to justify the added expense?\n\nThis question forces us to justify costs and ensure every dollar spent contributes meaningfully to risk management or business value.`,
			},
			{
				what: 'Why would it take X man months?',
				why: 'Resource estimation needs rigorous justification, not just gut feeling. "X man months" is a significant commitment. We need to dissect the estimate and understand the *breakdown* of work. Are we over-engineering? Are there inefficiencies? Challenging timelines and effort estimations ensures realistic planning, resource optimization, and accountability. It prevents bloated timelines and cost overruns from the outset.',
			},
			{
				what: 'How much of the cost is attributed to compliance, admin, overheads?',
				why: 'Cost transparency is vital for understanding true product economics. We need to separate core product development costs from compliance, administrative burdens, and overheads. How much are these non-product elements eating into our budget? Understanding this breakdown reveals hidden costs and inefficiencies, allowing us to optimize spending and improve the overall cost-effectiveness of our product and operations.',
			},
			{
				what: 'Is this a $40M or a $400k problem',
				why: 'Problem sizing is critical for appropriate resource allocation. Are we tackling a massive, strategic issue or a smaller, tactical one? The scale of the problem directly dictates the scale of investment it warrants. Over-engineering a minor problem wastes resources. Under-investing in a major problem leaves significant value on the table.',
			},
			{
				what: 'How much cost savings, cost avoidance, manpower savings, manpower productivity are we going to achieve?',
				why: 'Quantifying the benefits is essential to justify any product investment.',
			},
			{
				what: 'How will we measure savings, avoidance, productivity benefits?',
				why: 'Measurable benefits provide accountability, demonstrate real impact, and inform future product decisions based on data-driven evidence of success.',
			},
			{
				what: 'Why are we satisfied with X times savings/productivity gains?',
				why: "Benchmarking and continuous improvement are key. Simply achieving some savings isn't enough.",
			},
			{
				what: 'Why do we need a project management or admin wrapper fee that contributes nothing to the product?',
				why: 'Every cost component must be justified, especially non-value-add overheads.',
			},
			{
				what: 'What are the CAPEX and OPEX for X?',
				why: 'CAPEX reflects upfront investment, OPEX reflects ongoing running costs. This distinction impacts budgeting, financial modeling, and pricing strategies, as both types of costs need different handling and approaches.',
			},
		],
		alarms: [
			{
				what: "<insert party> assesses this effort is reasonable, it'll take XX man days.",
				why: "Though traditional contracts/projects need estimation for an effort, it's near impossible to know upfront how much effort is required. Naturally the incentive is to overestimate, add more buffer. Even when eventually the effort is smaller, there's no incentive to downsize, because it's additional work.",
			},
			{
				what: 'We need X business analysts, project managers, senior developers, developers, designers, xxx, yyy, etc',
				why: "We're bringing tons of people to the team, based on a vendor's hyper specialization and billable rates.",
			},
			{
				what: "It's not even $100,000, why are we quibbling over a small sum?",
				why: "Every $1 spent unnecessarily is unacceptable. I'm a taxpayer too! And if you calculate per unit/transaction costs, you can see clearly excessive spending.",
			},
			{
				what: "We've no choice because the team already decided X years ago to buy this",
				why: "If something doesn't work or doesn't work well, then consider if stopping it gives you future savings + a chance at getting something that solves your problem, versus abortive costs and switching costs.",
			},
			{
				what: "This company is able to customize it in Xyz way that we require. It's not their main product line but something they're thinking of launching as a full product in future. It's not cheap but it'll do the job.",
				why: "They are going to milk you like a cash cow via change requests (formal proposals for modifications to a system). Also, them offering you a non-product to you means you're their guinea pig to see if something is profitable, and you can be sure they know you're desperate for this set of requirements.",
			},
		],
		dealbreakers: [
			{
				what: 'People say "Sounds about right" when talking about cost items & full-time engineers (no shit, Sherlock).',
				why: 'Budgeting and resource allocation should be data-driven and rigorously justified, not based on vague estimations or gut feelings.',
			},
			{
				what: '$100M is ok because the previous project was $90M and after factoring in inflation it sounds about right.',
				why: 'Justification should be based on the problem and value delivered, not historical spend. Anchoring costs to previous projects ignores current needs, market changes, and potential for optimization.',
			},
			{
				what: 'The TAM is negligible and users are sticking around because of compliance reasons.',
				why: 'A tiny market and forced user adoption are unsustainable. Projects should aim for genuine user value and market demand, not rely on regulatory mandates for existence.',
			},
			{
				what: 'We need to build it ourselves because we have unique requirements',
				why: "'Unique requirements' is a common but often incorrect diagnosis of your needs.",
			},
			{
				what: 'We must develop our own product because we need to continue to serve past requirements.',
				why: 'What you do needs to be focused on solving the actual problem now, not continue what you have been doing.',
			},
			{
				what: 'We get the ultimate versions of licenses because we might need it in future.',
				why: "It's wasteful. You wouldn't pay for it with your own money, why would you do it with someone else's? Scale up only when there is actual demand.",
			},
			{
				what: 'A lot of cost is needed to almost completely mitigate X cyber security risk, but nevermind it was a theoretical risk in the first place.',
				why: 'Resource allocation should be risk-based and proportional.',
			},
			{
				what: 'We spend $10M over several years to reduce 1 headcount (might as well spend $150K on that headcount and save $9.5M).',
				why: 'Digitalization and tech are the means to an end, not the end in itself.',
			},
			{
				what: 'Might as well spend it since the FY is closing.',
				why: "It's fiscally irresponsible and prioritizes spending over value creation.",
			},
			{
				what: 'Everyone dumps their requirements onto a project to get funding.',
				why: 'Scope creep driven by funding opportunism leads to unfocused and bloated projects.',
			},
			{
				what: 'Staffers say they need to find a new justification to get funding for 2.0 of their project.',
				why: 'This suggests a lack of initial clear objectives or achieved outcomes. Projects should be driven by clear value propositions and ongoing needs, not by the need to constantly invent justifications for continued funding.',
			},
			{
				what: "Business owners of systems are asked to give waivers for things they don't understand, but are told the waivers must be given (fait accompli).",
				why: "Forcing approvals on complex issues that stakeholders don't understand undermines accountability and sound decision-making.",
			},
		],
		solutions: [
			'Kill the product or project.',
			'Start UX research to redo all requirements.',
			'Optimize for costs, while offering the option for additional value, performance, security.',
			"Just because it's not your money, doesn't mean we should spend it frivolously.",
		],
		suggestions: [
			"Treat every (realistically) $10K you spend as if it's your own.",
			'Start projects you would want to invest in personally.',
			"There's no shame to you or your team to kill projects.",
			"Get opinions from people who know their stuff - nothing worse than pretending to approve when you've no idea.",
			"Buy the cheapest option of anything and use it to the limits before you upgrade (you'd do the same for your own laptop anyway, who starts off with an i9?)",
			"Developer resources are the most precious, they're not your pptx/docx machines!",
		],
	},

	{
		id: 4,
		name: 'Security',
		tagline: "Cyber security so tight, even the 1s and 0s can't escape",
		slug: 'security',
		definitions: [
			{
				term: 'Cybersecurity context',
				definition:
					'Note: This section assumes the cyber security professionals are competent and what is needed is getting the best outcome between cyber security and business.',
			},
			{
				term: 'Common Vulnerabilities and Exposures (CVE)',
				definition:
					'A standard for identifying and cataloging cybersecurity vulnerabilities and exposures in computer software and hardware. Each CVE entry provides a detailed explanation of a vulnerability, including its potential impact, how it can be exploited, and, often, how it can be mitigated or resolved.',
			},
		],
		goals: [
			'Decide the appropriate trade-offs across threat vector, likelihood, severity, mitigation, timelines, cost, residual risk',
			'Mitigation is not free and even the best theorized mitigations can fail when not kept up with.',
			'Move beyond theorycrafting and indecipherable threat-risk assessments to outlining threats with actual impact and likelihood for business to assume risk',
			'Understand cloud is as secure, if not more, than on-prem systems. Especially if you use native cloud services for logging and triggering alerts for anomalous behaviors.',
		],
		alarms: [
			{
				what: "We can't work on <insert critical backend task> yet, because it might derail our upcoming release, and I rather focus on deploying the new release.",
				why: 'Our haste to push out a new release should not prevent us from doing the right thing, especially patching and reliability.',
			},
			{
				what: "I need a waiver for EOL/EOS stuff, because we're waiting for <insert workstream with multiple involved parties> before we can proceed with the upgrade/rebuild.",
				why: "Upgrading from EOL/EOS precedes everything, especially if we're waiting for something long drawn to be decided.",
			},
			{
				what: 'You are shown rows of CVEs, package names, EC2 instances, and technical terms.',
				why: 'Request to know what the CVEs cover, the risks each present, and implication if breached. A runtime environment vulnerability is very different from a vulnerability for a UI library.',
			},
			// apptitude: something that was sensitive is declared accordingly because it was always like that, withouit review, and uses specialised tools
		],
		questions: [
			{
				what: 'What sensitive data will my product handle, and how will it be secured (encryption, access controls, etc.)?',
				why: '',
			},
			{
				what: 'Who am I afraid of attacking me (attack vectors)?',
				why: '',
			},
			{
				what: 'How will they attack me, how long will they take, how likely are they to succeed?',
				why: '',
			},
			{
				what: 'If they succeed, what do I lose, for how long?',
				why: '',
			},
			{
				what: 'What are the options for mitigation, how much does it cost, how long does it take to implement/maintain, how much man effort?',
				why: '',
			},
			{
				what: 'Despite mitigation, what are the residual risks I need to live with, and how much additional cost is each mitigation?',
				why: '',
			},
			{
				what: "If I'm brought down, how can I do disaster recovery and data restoration/validation?",
				why: '',
			},
			{
				what: 'What third-party components or services will the product use?',
				why: '',
			},

			{
				what: 'How will my product handle and respond to security incidents and breaches?',
				why: '',
			},
			{
				what: "How will my product's security be monitored and audited on an ongoing basis?",
				why: '',
			},
			{
				what: "What are the potential legal and regulatory implications related to my product's security?",
				why: '',
			},
		],
		dealbreakers: [
			// 'Cyber security guidelines hinder innovation - "It can\'t be done!"',
			// 'Waivers are always being sought, especially for long obsolete (or EOS and EOL) components',
			// 'Cyber security cannot be questioned and yet it is poorly explained/quantified/verifiable.',
			// "Business is not confident of taking on any risk because they can't understand them, so they just go the most conservative possible.",
			// 'Tons of money is spent tightening up every possible doomsday scenario you can think of.',
			// "Cybersecurity lock-downs prevent business from achieving its product outcomes (then what's the point?).",
			// 'We rely on threat risk assessments as scriptures, never mind that the scoring and likelihood multipliers are almost always done arbitrarily.',
			// 'We drink our kool-aid so much that we believe in the illusion of layering on more frameworks and theories, not what top tier companies do.',
		],
		solutions: [
			'Discuss with the cyber security professional the threat vector, likelihood, severity, mitigation, timelines, cost, residual risk',
		],
		suggestions: ["I wish I could give you a solution, but I won't pretend to know the solution."],
	},

	{
		id: 5,
		name: 'Running the Project',
		tagline: 'Organized Chaos. Mostly Chaos.',
		slug: 'running',
		definitions: [
			{
				term: 'Transaction completion rate (TCR)',
				definition:
					'Calculated by dividing the total number of successful (approved) transactions by the total number of attempted transactions over a given time period.',
			},
		],
		goals: [],
		alarms: [
			{
				what: 'Using xxx, yyy, zzz resources (or X%, Y%, Z%) for cloud/on-prem resources.',
				why: 'From a business perspective, need to understand how resource usage meets objectives. Can users access the offering? Can they transact? Are they satisfied? How can costs be reduced?',
			},
			{
				what: "Haven't asked AWS support for an optimization check or used tools for optimization.",
				why: 'Lack of utilization of free AWS tools like Trusted Advisor and enterprise support indicates a lack of cost discipline and workload optimization.',
			},
			{
				what: 'Transaction completion rate is really good! (90-99%).',
				why: 'A 10% failure rate is common; excessively high rates suggest potential measurement errors. Review start and end points of measurements to ensure they accurately reflect customer transaction success.',
			},
			{
				what: 'System health checks and metrics are run/calculated manually; no immediate notification of service outages.',
				why: 'Manual monitoring is inefficient and unresponsive. Real-time, automated monitoring is essential for timely service issue detection and resolution. Stats should be used for ongoing health checks, not just periodic presentations.',
			},
			{
				what: 'We have backup, this is not a critical system anyway.',
				why: "What is the backup frequency? Are these active or passive copies? Where are they stored? How many copies? How long does it take to restore them? Are these complete snapshots or diffs? You'd always want some variant of the 321 backup rule.",
			},
			{
				what: 'Oh this insert GovTech product? Not familiar with it but we know we need ours and they seem different anyway.',
				why: "You're trying to recreate something that's presumably solved well. And doesn't seem like you did your competitive audit. Even if you're satisfied with your solution, you should say why yours works better, eg from user research.",
			},
			{
				what: "Let's do UI UX better.",
				why: "They're very different things! The person saying this betrays a lack of understanding of what these 2 acronyms mean. Ui is a part of ux. Ux is far more than just tinkering with screens, colors, typography, spacing on figma templates. And this lack of clarity prevents us from going into what needs to be solved and how we should solve them.",
			},
			{
				what: "It's impossible to track whether our tool improves productivity, saves manual labor and how much it improves the business.",
				why: "You can't track the productivity increase for every person, but you can follow >5 teams for several weeks and record how much they benefit in time savings, efficiency, errors they encounter, or even entire work flows they no longer do. But this has to be done before you deploy and is pointless to lament you didn't after the fact.",
			},
			{
				what: 'How do we manage vulnerabilities (CVEs) and patches?',
				why: "It's part and parcel of running systems. Patching is essential.",
			},
			{
				what: "Let's do UI UX better.",
				why: "They're very different things! The person saying this betrays a lack of understanding of what these 2 acronyms mean. UI is a part of ux. UX is far more than just tinkering with screens, colors, typography, spacing on figma templates. And this lack of clarity prevents us from going into what needs to be solved and how we should solve them.",
			},
			{
				what: 'There needs to be X approvals from xxx, yyy, zzz groups to make an edit to the website.',
				why: "Bureaucracy crept in. If this is for a new tool, then it's also the case we bought a new tool and overlaid past processes.",
			},
			{
				what: 'Work always costs a lot of man days and money, even for things that sound very simple.',
				why: 'Finance processes (fixed payments for vendor work) can ironically encourage spending more than common sense dictates, because they can let vendors pocket the change if the job turned out easier. People also want to buffer so no one needs to reseek approval. End result, people add buffers, overestimate, and vendors pocket the "change".',
			},
			{
				what: "Whenever there's a problem, the instinct is always to absolve themselves from blame, especially by questioning whether there was a delay in reporting that issue or whether administrative processes were followed.",
				why: 'Tackling problems become secondary to covering asses.',
			},
		],
		questions: [
			{
				what: 'How could this product fail (i.e. pre-mortem)?',
				why: 'Work backwards from where failure occurs, so that you can then plug those gaps.',
			},
			{
				what: 'How does this scale? What do you have in place to scale vertically (make your existing infrastructure more powerful) and/or horizontally (add more infrastructure quantity/units)?',
				why: "Either or both options have situations where they're better. No matter what, there must be a plan that's being executed to handle a surge later on.",
			},
			{
				what: 'Are our images and other static assets optimized? Are they webp/avif? Are there 2mb jpg hero images?',
				why: 'These are extremely simple but can absolutely show dedication (or lack thereof) to optimizing performance. Better performance will help improve transaction completion rates and user satisfaction.',
			},
			{
				what: 'How does our UI look across device screen sizes?',
				why: 'UIs have no excuse doing poorly on mobile responsiveness and accessibility.',
			},
			{
				what: "What model are we using and why can't we use <insert model>?",
				why: 'There are obvious differences across models, some do better than others. Like Claude 3.5 sonnet is really good with code and Gemini 2.0 or gpt 4.5 give me really good creative writing pieces. The business objective to keep up with the best in class and choice when there are advancements. The fear is always stagnating because of a lack of incentives to change.',
			},
		],
		dealbreakers: [
			{
				what: "Users are telling us the app sucks, the app is slow, the app is useless. But we're sure the noise will go away eventually.",
				why: "We only listen to feedback if it's good, or if our bosses are affected by it.",
			},
			{
				what: "Team proudly presents top notched figures but hasn't validated measurement methodology or investigated outliers.",
				why: "Lack of data integrity and actionable insights. At this point we might as well not even have measured, that'd be better than getting wrong conclusions from incorrect data.",
			},
			{
				what: 'Operations relies on manual log reviews, powerpoint slides, and spreadsheets to detect and assess system outages.',
				why: 'Relying on manual system checks signals a reactive operational model. Business outcomes benefit from proactive, automated monitoring, with clear triggers tied to business objectives.',
			},
			{
				what: 'Stakeholder feedback is limited to "Make it look nicer" or "Let\'s improve the UI" without user research or defined UX goals.',
				why: 'Reducing UX to purely visual UI tweaks betrays a fundamental misunderstanding of user-centered design. True UX is about understanding user needs and designing effective, efficient, and satisfying solutions.  Ignoring user research leads to poorly adopted products.',
			},
			{
				what: 'No established KPIs or tracking mechanisms to measure productivity gains or cost savings after launch.',
				why: 'Launching projects without a plan to quantify business impact makes it impossible to justify the investment and demonstrate ROI. Projects must be accountable for delivering tangible value, requiring measurement from the outset.',
			},
			{
				what: 'You need a 5-level approval process for changing words on your app/website.',
				why: 'Overly complex approval processes for routine tasks signal a bureaucratic culture that stifles agility and innovation.  In tech, quick adaptation is crucial. Excessive bureaucracy hinders progress and responsiveness.',
			},
		],
		solutions: [],
		suggestions: [],
	},
	{
		id: 6,
		name: 'Communications',
		tagline: "It's okay to say 'oops.' Just don't say it too often.",
		slug: 'communications',
		definitions: [
			{
				term: 'Empathy',
				definition: 'The ability to understand and share the feelings of another.',
			},
			{
				term: 'Click rate',
				definition: '(No. of clicks) / (No. of emails sent - No. of emails bounced)',
			},
			{
				term: 'Open rate',
				definition: '(No. of unique opens) / (No. of emails sent - No. of emails bounced)',
			},
			{
				term: 'Click-to-Open rate',
				definition: '(Emails clicked) / (Emails opened)',
			},
		],
		goals: [],
		alarms: [
			{
				what: 'Communications contain words that imply the user needs to "suck it up" for downtime, errors, or unforeseen circumstances.',
				why: "Too often system owners think they're beyond reproach and as long as they tried their best, users need to accept whatever that happens. The least you can do is not to sound like that.",
			},
			{
				what: 'Communications contain "canned" empathy phrases like "I understand how this can be upsetting to you...".',
				why: 'People can tell it comes across as non-genuine, facetious. Worse if the contents are totally at odds with what your words meant.',
				// https://www.reddit.com/r/CustomerService/comments/1dffx9d/canned_empathy_phrases_in_chat_email_have_gotta/
			},
			{
				what: 'We communicate what we do or what people should do.',
				why: 'Focus should always be on the user or customer getting value. How will life be better if the customer gets their hands on our product?',
			},
			{
				what: 'We communicate slowly and at our own pace (read: ultra slow), especially for high severity issues like cybersecurity breaches, data mishandling.',
				why: "You want to prevent speculation, users getting confused, news getting out where you can't control the narrative, and damage to your brand, reputation, or operations.",
			},
			{
				what: 'Giving too little detail.',
				why: "Giving too little conveys a lack of openness and sincerity. This is often tempting, but you won't be building any trust for sure.",
			},
			{
				what: 'Too much jargon!',
				why: "It's easy to slip into spamming technical terms and jargon. Few would take the time to read those. Yet fewer would understand and appreciate it.",
			},
		],
		questions: [
			{
				what: 'How do we communicate to users?',
				why: "It's probably too general, but it's a good start.",
			},
			{
				what: "What's the key message? What's the desired headline (8 words or fewer) we want to create? What's the photo op you want?",
				why: "Like with general communication plans and campaigns, start with the end in mind and be clear what you're trying to convey.",
			},
			{
				what: 'What are our metrics for our communication campaigns/efforts?',
				why: "If it's not measurable, it doesn't exist!",
			},
			{
				what: 'What are our open and click rates for email campaigns?',
				why: "Note: email tracking isn't entirely ",
			},
			{
				what: 'How are allocating and differentiating our relationship building and revenue-generating communications?',
				why: 'Different communication objectives need different strategies. Sometimes we want to tell stories, build a brand. Other times we want to convert and close sales.',
			},
			{
				what: 'How will life be better if the customer gets their hands on our product?',
				why: 'Sell the value to the user, not the product. Like what every textbook tries to teach, Steve Jobs sold the value of having 1,000 songs in your pocket, not 8GB of hard disk space on the iPod.',
			},
			{
				what: "What are the user personas we're targeting?",
				why: 'Ought to be aligned with personas from UX research and product strategy, but might sometimes differ.',
			},
			{
				what: "What's our crisis communications plan?",
				why: "In a crisis you'd want to quickly communicate. To do so, you'll need a plan, you want to put out reliable information, and you want people to trust that you know your shit.",
			},
			{
				what: 'How do we use Android/iOS notifications, dialogs, and which screens?',
				why: 'Notifications and messages are essential to communications. Chances are they won\'t read your emails, but more likely they will read notifications. Then again, you wouldn\'t want that annoying high-pitched "shopee!" sound.',
			},
		],
		dealbreakers: [
			{
				what: 'We keep trying to sell what we do, not what value we bring.',
				why: 'Covered above.',
			},
			{
				what: 'We\'re heavy handed and use a "we-know-better" tone.',
				why: 'Covered above.',
			},
			{
				what: "We don't communicate quickly when we need to.",
				why: 'People lose trust in us.',
			},
			{
				what: 'We spam people with tons of stuff we think we need them to know.',
				why: "Our message won't get through if we need it to.",
			},
		],
		solutions: [],
		suggestions: [],
	},
	/* {
		id: 6,
		name: 'Structures, Processes, Vendors',
		tagline: '',
		slug: 'structure',
		definitions: [],
		goals: [],
		alarms: [
			'No one has a hypothesis on what is the problem with a product, feature, system.',
			"We're chasing after some urgent deadline, be it funding, procurement, licensing/agreement expiration",
			"We need to continue with the current approach because that's how things have always been done.",
			'People avoid doing things that they know they need to do, but they try to defer it or hide behind a waiver, because it takes too much effort, it will derail their timeline, or affects their personal appraisal.',
			{
				what: "We can't work on <insert critical backend task> yet, because it might derail our upcoming release, and I rather focus on deploying the new release.",
				why: 'Our haste to push out a new release should not prevent us from doing the right thing, especially patching and reliability.',
			},
		],
		questions: [
			'Has this undergone business process reengineering?',
			'Explain what agile/velocity means to you and what are examples of agility/velocity?',
			'What are real world figures for developers or business owners when it comes to adding new features for business needs?',
			'Why is on boarding of developers/services still manual?',
			'How long does it take to on-board a new service or API or platform?,',
			'(perennial claims about implementing microservices architecture)',
			'What are the steps to get approval for this idea?',
			"Why can't we just get all these people into a room and decide?",
			'Why are you coming with an "all or nothing" or fait accompli plan? (usually when process of seeking further funding is tedious, so it\'s all tied up in one big bang)',
		],

//Apptitude - bootstrap for a new custom SharePoint site - so slow, legacy, and people not familiar with modern work

		dealbreakers: [],
		solutions: [],
		suggestions: [],
	}, */
];
