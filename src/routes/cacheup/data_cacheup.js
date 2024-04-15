import JeffBezos from '$lib/assets/profileheads/JeffBezos.webp';
import JakobNielsen from '$lib/assets/profileheads/JakobNielsen.webp';
import JohnDoerr from '$lib/assets/profileheads/JohnDoerr.webp';
import MartyCagan from '$lib/assets/profileheads/MartyCagan.webp';
import KerstinBalka from '$lib/assets/profileheads/KerstinBalka.webp';
import JimmySanders from '$lib/assets/profileheads/JimmySanders.webp';
import SethGodin from '$lib/assets/profileheads/SethGodin.webp';
import LeaHickman from '$lib/assets/profileheads/LeaHickman.webp';
import TeresaTorres from '$lib/assets/profileheads/TeresaTorres.webp';

export const cacheup = [
	{
		id: 1,
		name: 'Problem Statements',
		tagline: "Problematic problem statement? There's a product for that!",
		slug: 'problems',
		bylines: [
			{
				text: 'Important truths can be uncomfortable, awkward, exhausting... Any high performing organization has to have mechanisms and a culture that supports truth telling.',
				icon: JeffBezos,
			},
			{
				text: 'Pay attention to what users do, not what they say.',
				icon: JakobNielsen,
			},
			{
				text: 'Don’t find customers for your products, find products for your customers.',
				icon: SethGodin,
			},
			{
				text: 'If we focus on collecting stories in our customer interviews, opportunities will emerge from those stories.',
				icon: TeresaTorres,
			},
		],
		definitions: [
			'User is a person who is trying to solve a problem and is looking for a product or service to help them solve it.',
			'User experience is the journey that the user takes with that product or service.',
			'Problem statement is a concise description of the problem that needs to be solved, and it summarizes who the user is, what they need from a design, and why.',
			'Pain points are any UX issue or friction that frustrates the user and blocks them from getting what they need. Minimizing pain points keeps users happy and encourages them to keep interacting with the product.',
			'Value proposition is why your user would or should use the product or service that you’re designing.',
		],
		goals: [
			'Problem we are solving must be clear',
			'Problem needs to be worth solving',
			"User's goals must be clear and therein lies the need to define what constitutes success for the user",
		],
		questions: [
			'What is the problem statement?',
			'Who is experiencing the problem?',
			'What are the pain points you’re trying to solve?',
			'Where is the user when they’re using the product?',
			'When does the problem occur?',
			'Why is the problem important?',
			'How are users reaching their goals by using the product?',
			'What is the hypothesis?',
			'Who gets value, at what velocity, at what volume?',
		],
		dealbreakers: [
			'Problem statement is unclear.',
			"Let's retain all past requirements so we are no worse off.",
			"No one's asking for this.",
			'Meetings are dominated by people who say "I think..." but no one actually knows someone who\'s a user.',
			"POHs, PSes think it's a good idea.",
			'Problem is an edge case, but we have money, so who cares.',
			"Business owner says they need all the requirements, so let's keep every one.",
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
		bylines: [
			{
				text: 'Goals must be measurable or have quantifiable targets. Maybe it’s shipping a certain number of products or hitting a release schedule... we have to be able to track and measure the goals.',
				icon: JohnDoerr,
			},
			{
				text: 'The worst thing about product in the past was that is was all about opinions... the higher up in the organization, the more that opinion counted... I hear constantly from teams now how often they are surprised by the data and how minds are changed.',
				icon: MartyCagan,
			},
		],
		definitions: [
			'Product-market fit is how much product satisfies strong market demand, i.e., target customers truly need and want the product.',
			'A North Star Metric is a single, primary metric that best captures the core value that a product delivers to customers.',
			'A minimum viable product (MVP) is a product development strategy used to quickly get a basic version of a product into the market for initial testing and validation from real users.',
			"XY Problem - often in customer service - is where someone seeks help for a solution (X) they have chosen as a way to solve a different problem (Y). Helping with X won't help solve actual problem if it's not a good approach in the first place.",
			"Product managers define the 'What' by setting the product strategy and roadmap. Project managers enable the 'How' by executing that roadmap through a series of projects.",
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
			'Who is the target customer?',
			'What problem does your product solve?',
			'How does your product solve this problem?',
			'What are the key features and benefits of your product?',
			'What is the product vision?',
			'What is a minimum viable product?',
			'Do you see product-market fit for your product?',
			'What is the market size for your product?',
			'Who are your competitors, and how is your product different?',
			'What is your go-to market plan?',
			'What is the development/iteration timeline for your product?',
			'How will you measure the success of your product?',
			'Are you replacing/refactoring for the sake of it? (common when trying to rewrite existing/legacy services in latest framework)',
		],
		dealbreakers: [
			'Product is a suboptimal solution (read: XY problem)',
			"Product solves only a small part of the problem or doesn't solve any real problem at all.",
			'Product is managed as a project, with paper requirements and delivery timelines overriding questions on product value.',
			'Product has no viable market, no users, no product-market fit.',
			"Users don't like the product, don't use the product, but are forced to use it because of mandates or management pressure.",
			"Market has (new) alternatives, we either don't know or we hid our heads in the sand (insisting that ours is better).",
			'Existing products that have no traction, users keeps getting life support with no end in sight.',
			'X product has Y% of weekly active users, never mind that these are captive users who are forced to use the platform.',
			"If user anecdotes are contradicting your data (that everything's alright), you might be measuring the wrong thing.",
			'Are the gains marginal? We spend 10mil to cut one process by 2 days but overall process still takes 5 months because of other manual processes.',
			"Everything's a native app, no matter if all you do is provide info (i.e. a static url or webapp is more fitting).",
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
		id: 4,
		name: 'Security',
		tagline: "Cyber security so tight, even the 1s and 0s can't escape",
		slug: 'security',
		bylines: [
			{
				text: "We'll give developers, engineers, we’ll give different practitioners the freedom to do what they want to do. But it’s their responsibility to do it to a certain standard... My security tools have to be in lockstep with that. My tools can’t block them from the freedom that is a core tenant of Netflix.",
				icon: JimmySanders,
			},
		],
		definitions: [
			'Note: This section assumes the cyber security professionals are competent and what is needed is getting the best outcome between cyber security and business.',
			'Common Vulnerabilities and Exposures, is a standard for identifying and cataloging cybersecurity vulnerabilities and exposures in computer software and hardware. Each CVE entry provides a detailed explanation of a vulnerability, including its potential impact, how it can be exploited, and, often, how it can be mitigated or resolved.',
		],
		goals: [
			'Decide the appropriate trade-offs across threat vector, likelihood, severity, mitigation, timelines, cost, residual risk',
			'Mitigation is not free and even the best theorized mitigations can fail when not kept up with.',
			'Move beyond theorycrafting and indecipherable threat-risk assessments to outlining threats with actual impact and likelihood for business to assume risk',
			'Understand cloud is as secure, if not more, than on-prem systems. Especially if you use native cloud services for logging and triggering alerts for anomalous behaviors.',
		],
		questions: [
			'What sensitive data will my product handle, and how will it be secured (encryption, access controls, etc.)?',
			'Who am I afraid of attacking me (attack vectors)?',
			'How will they attack me, how long will they take, how likely are they to succeed?',
			'If they succeed, what do I lose, for how long?',
			'What are the options for mitigation, how much does it cost, how long does it take to implement/maintain, how much man effort?',
			'Despite mitigation, what are the residual risks I need to live with, and how much additional cost is each mitigation?',
			"If I'm brought down, how can I do disaster recovery and data restoration/validation?",
			'What third-party components or services will the product use?',
			'What is the strategy for managing vulnerabilities (CVEs) and patches?',
			'How will my product handle and respond to security incidents and breaches?',
			"How will my product's security be monitored and audited on an ongoing basis?",
			"What are the potential legal and regulatory implications related to my product's security?",
		],
		dealbreakers: [
			'Cyber security guidelines hinder innovation - "It can\'t be done!"',
			'Cyber security cannot be questioned and yet it is poorly explained/quantified/verifiable.',
			"Business is not confident of taking on any risk because they can't understand them, so they just go the most conservative possible.",
			'Tons of money is spent tightening up every possible doomsday scenario you can think of.',
			"Cybersecurity lock-downs prevent business from achieving its product outcomes (then what's the point?).",
			'We rely on threat risk assessments as scriptures, never mind that the scoring and likelihood multipliers are almost always done arbitrarily.',
			'We drink our kool-aid so much that we believe in the illusion of layering on more frameworks and theories, not what top tier companies do.',
		],
		solutions: [
			'Discuss with the cyber security professional the threat vector, likelihood, severity, mitigation, timelines, cost, residual risk',
		],
		suggestions: ["I wish I could give you a solution, but I won't pretend to know the solution."],
	},
	{
		id: 3,
		name: 'Cost',
		tagline: "We're not sure what we're building, but we know we'll need a bigger budget.",
		slug: 'cost',
		bylines: [
			{
				text: '8/10 public-sector IT projects take longer than expected, compared with just more than half of projects in the private sector. Cost overruns occur in nearly 1/2 public-sector projects, as opposed to about 1/3 in the private sector.',
				icon: KerstinBalka,
			},
			{
				text: 'It is easy to give employees a new job title, but much harder to change how they think and behave.  And sometimes that new job title carries along with it expectations that existing staff may not be able to perform.',
				icon: MartyCagan,
			},
		],
		definitions: [
			'Cost savings are reduction in costs or expenses.',
			'Cost avoidance is preventing/avoiding future costs/expenses that would have been incurred if no action was taken.',
			'So cost savings reduces current or existing costs, while cost avoidance prevents future costs from occurring in the first place.',
			'Total addressable market (TAM) is total revenue opportunity available to a product or service with 100% market share, i.e., max market demand and revenue potential.',
			'Capital Expenditure (CAPEX) is funds used by a company to acquire, upgrade, or maintain fixed assets such as buildings, equipment, machinery, or land. These are major investments that are capitalized on the balance sheet and depreciated over their useful life.',
			'Operating Expenditure (OPEX) is ongoing costs incurred by a company for its day-to-day operations and maintaining its existing facilities and equipment. These expenses are recorded on the income statement and are fully tax-deductible for the period in which they are incurred. Examples of OPEX include rent, utilities, salaries, and supplies.',
		],
		goals: [
			'We strive to be as lean and cheap as possible.',
			'Money we spend must be worth the ROI.',
			'Money spent must solve real problems.',
		],
		questions: [
			'What is the TAM?',
			'What are the trade-offs across cost, value, performance, security?',
			'More costs to mitigate what additional risks?',
			'Why would it take X man months?',
			'How much of the cost is attributed to compliance, admin, overheads?',
			'Is this a $40M or a $400k problem',
			'How much cost savings, cost avoidance, manpower savings, manpower productivity are we going to achieve?',
			'How will we measure savings, avoidance, productivity benefits?',
			'Why are we satisfied with X times savings/productivity gains?',
			'Why do we need a project management or admin wrapper fee that contributes nothing to the product?',
			'What are the CAPEX and OPEX for X?',
		],
		dealbreakers: [
			'People say "Sounds about right" (no shit, Sherlock).',
			'$100M is ok because the previous project was $90M and after factoring in inflation it sounds about right.',
			'The TAM is negligible and users are sticking around because of compliance reasons.',
			'We need to build ourselves because we have unique requirements',
			'We must develop our own product because we need to continue to serve past requirements.',
			'We get the ultimate versions of licenses because we might need it in future.',
			'A lot of cost is needed to almost completely mitigate X cyber security risk, but nevermind it was a theoretical risk in the first place.',
			'We spend $10M over several years to reduce 1 headcount (might as well spend $150K on that headcount and save $9.5M).',
			'Might as well spend it since the FY is closing.',
			'Everyone dumps their requirements onto a project to get funding.',
			'Staffers say they need to find a new justification to get funding for 2.0 of their project.',
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
			"Developer resources are the most precious they're not your pptx/docx machines!",
		],
	},
	//{
	//	id: 5,
	//	name: "Structures and processes",
	//	slug: "structure",
	//  bylines: [
	//{
	//	text: "As transformation to the product model involves moving from output to outcomes, the problem here is that the transformation effort hides behind output (activities) rather than outcomes (results).",
	//	icon: LeaHickman
	//}
	//],
	//	definitions: [],
	//	goals: [],
	//  questions: [],
	//"Has this undergone business process reengineering?",
	//"Explain what agile/velocity means to you and what are examples of agility/velocity?",
	//"What are real world figures for developers or business owners when it comes to adding new features for business needs?",
	//"Why is on boarding of developers/services still manual?,"
	//"How long does it take to on-board a new service or API or platform?,"
	//"(perennial claims about implementing microservices architecture)",
	//"What are the steps to get approval for this idea?",
	//"Why can't we just get all these people into a room and decide?",
	//"Why are you coming with an \"all or nothing\" or fait accompli plan? (usually when process of seeking further funding is tedious, so it's all tied up in one big bang)",
	//  dealbreakers: [],
	//  solutions: [],
	//  suggestions: [],
	//	screening: [],
	//},
];
