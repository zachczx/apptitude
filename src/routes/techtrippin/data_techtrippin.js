import consultant from '$lib/assets/consultant.webp';
import consultant2 from '$lib/assets/consultant2.webp';
import consultant3 from '$lib/assets/consultant3.webp';
import consultant4 from '$lib/assets/consultant4.webp';
import fireshipIO from '$lib/assets/fireship.gif';
import bizOwner from '$lib/assets/bizowner.webp';
import techLead from '$lib/assets/techlead.webp';
import techLead2 from '$lib/assets/techlead2.webp';

export const techtrippin = [
	{
		id: 1,
		title: "You're So Close... Yet So Far Away from Getting It",
		name: 'Consultant/Dir',
		prompt:
			'It all depends on the business requirements and use-case. GPT 4, 5, 6, 7, and so on would not change much.',
		response: [
			"Look, clarifying use-cases is super important, understanding customer needs and their problem statements. But it's ridiculous to say technological advancements don't matter. Business needs that are unthinkable on GPT-3 are already solved by Claude3 Haiku. You'll keep seeing more giant leaps in AI and when AGI comes around.",
			"Such statements sound incredibly like a copy-paste answer when we're lazy to think about what we're lacking or what the latest technologies already can do."
		],
		icon: consultant
	},
	{
		id: 2,
		title: "The 'But It Depends' Cop-Out: An Exercise in Missing the Point Entirely",
		name: 'Project Lead',
		prompt: 'Technically, anything can be done, it just depends on the use-case.',
		response:
			"No shit Sherlock, of course anything can be done. It's just lazy to say this. Geniuses have demonstrated its possible to create a roller coaster in Excel or Snake in HTML (with some PHP for game state). What's more important are presenting good options (not outdated/trashy options from 10 years ago), scrutinizing how well each option solves problems, deciding the trade-offs needed, and then guiding business owners to make the best choices.",
		icon: consultant2
	},
	{
		id: 3,
		title: 'The Ostrich Maneuver: Burying Your Head in Bureaucratic Sand',
		name: 'Project Manager',
		prompt:
			"It's just the way it is --OR-- This cannot be done any other way because that's SOP/policy/IM8 --OR-- We're just doing what PS/DS/CEO commented on.",
		response:
			"If something doesn't make sense and will cost tax payers more money, and I'm a tax payer too, voice it! Singapore wasn't built on spending frivolously and decision makers would definitely not choose to do so if they knew. It's a side effect of an efficient civil service where bosses can be given incomplete assessment.",
		icon: consultant3
	},
	{
		id: 4,
		title: "The JavaScript Hipster's Manifesto: Style Over Substance, Always",
		name: 'Fireship.io',
		prompt:
			"(On Aceternity UI code) That seems pretty inefficient for something that's purely cosmetic, but in JavaScript development, this is the way. If it looks cool, the code is correct even if the code is not super efficient. It doesn't really matter because the end user is only going to hover over it for a couple of seconds at most.",
		response: 'Yes.',
		icon: fireshipIO
	},
	{
		id: 5,
		title: "The Dinosaur's Guide to Ignoring User Experience in the 21st Century",
		name: 'Business owner',
		prompt:
			"My form filling e-service needs to be desktop first. It's complex, has many fields so it's only useful to a desktop user. I don't want to and it's not worth redoing to make it mobile first.",
		response:
			"Strictly from usability, mobile first is the standard now. There's also no excuse. CSS media queries are so easy to write. Long, complex forms can be a good experience with accordions or pagination. If we go the multiple page app way, state management might require a few lines of code, but any backend/front-end framework should have built in or easily integrated libraries. This is a false choice reminiscent of 2000s web dev!",
		icon: bizOwner
	},
	{
		id: 6,
		title: 'Rearranging Deck Chairs on the Titanic: A Futile Attempt at Last-Ditch Usability Fixes',
		name: 'Business owner',
		prompt: "I'm confident of rolling out my product to internal employee users.",
		response: 'How do you know your product solves a real pain point?',
		prompt2:
			"We have a usability testing framework where we get actual users to test our product before we launch it. It's part of the usability testing requirement. We find bugs and we fix them. We don't do separate user research.",
		response2: '...',
		icon: consultant4
	},
	{
		id: 7,
		title: 'Ignorance is Bliss: A Celebration of Clueless Satisfaction',
		name: 'Tech Product Lead',
		prompt:
			"Satisfaction in survey went up double digits. We did a great job and we're surprised and happy.",
		response: 'Great. Why was that so?',
		prompt2:
			"We're not sure, the survey results don't allow us to establish causality. We've some guesses... It could be xxx or yyy, but really we don't know.",
		response2: '...',
		icon: techLead2
	},
	{
		id: 8,
		title: 'The Great Tech Overhaul: More Buzzwords Than Business Case',
		name: 'Tech Lead',
		prompt:
			"Business owner says it's a legacy system, the current system and form filling UI are dated, ugly. We reached the max customization to make it prettier. So we'll need money to refactor. We'll go to the cloud, use Next JS, break up the monolith as many micro services, build common components that we can eventually share across the sector. We'll buy a new business rules engine because the current one is very old and no one knows what's inside. We'll make the new one customizable for non-technical users to write business logic.",
		response:
			"Well, you haven't told me why you need to rebuild the system, not with objective stats. And you seem to be asking for money to replace the rules engine, so you need to tell me more about that and the trade-offs, instead of putting the cart before the horse with the Next JS, cloud etc.",
		icon: techLead
	},
	{
		id: 8,
		title: 'When the Blind Lead the Blind... Right Off a Tech Cliff',
		name: 'Tech Program Manager',
		prompt:
			"We did assessments on the requirements for the new system. This requirement for XXX, we assess it's reasonable. This is because the current system was previously approved at a sum of $900K. With inflation and higher manpower costs we think it's reasonable to pitch it at $1.5M going forward.",
		response:
			'Assessing based on inflation and generic qualitative statements about manpower costs is rubbish. This was supposed to be a tech assessment but it might as well have been a ChatGPT generic response. There\'s no mention of what problem is being solved, how complex those problems are, unique selling points for the system, and whether the requirements being proposed are even relevant. To top it off, finance folks have no basis and would then go along with this, adding their "support" and also comimng to the conclusion that the resourcing ask is reasonable, despite there being no real basis for such a conclusion in the first place.',
		icon: consultant3
	}
];
