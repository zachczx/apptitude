import consultant from '$lib/assets/consultant.webp';
import consultant2 from '$lib/assets/consultant2.webp';
import fireshipIO from '$lib/assets/fireship.gif';
import bizOwner from '$lib/assets/bizowner.webp';

export const techtrippin = [
	{
		id: 1,
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
		name: 'Project Lead',
		prompt: 'Technically, anything can be done, it just depends on the use-case.',
		response:
			"No shit Sherlock, of course anything can be done. It's just lazy to say this. Geniuses have demonstrated its possible to create a roller coaster in Excel or Snake in HTML (with some PHP for game state). What's more important are presenting good options (not outdated/trashy options from 10 years ago), scrutinizing how well each option solves problems, deciding the trade-offs needed, and then guiding business owners to make the best choices.",
		icon: consultant2
	},
	{
		id: 3,
		name: 'Project Manager',
		prompt:
			"It's just the way it is --OR-- This cannot be done any other way because that's SOP/policy/IM8 --OR-- We're just doing what PS/DS/CEO commented on.",
		response:
			"If something doesn't make sense and will cost tax payers more money, and I'm a tax payer too, voice it! Singapore wasn't built on spending frivolously and decision makers would definitely not choose to do so if they knew. It's a side effect of an efficient civil service where bosses can be given incomplete assessment.",
		icon: consultant
	},
	{
		id: 4,
		name: 'Fireship.io',
		prompt:
			"(On Aceternity UI code) That seems pretty inefficient for something that's purely cosmetic, but in JavaScript development, this is the way. If it looks cool, the code is correct even if the code is not super efficient. It doesn't really matter because the end user is only going to hover over it for a couple of seconds at most.",
		response: 'Yes.',
		icon: fireshipIO
	},
	{
		id: 5,
		name: 'Business owner',
		prompt:
			"My form filling e-service needs to be desktop first. It's complex, has many fields so it's only useful to a desktop user. I don't want to and it's not worth redoing to make it mobile first.",
		response:
			"Strictly from usability, mobile first is the standard now. There's also no excuse. CSS media queries are so easy to write. Long, complex forms can be a good experience with accordions or pagination. If we go the multiple page app way, state management might require a few lines of code, but any backend/front-end framework should have built in or easily integrated libraries. This is a false choice reminiscent of 2000s web dev!",
		icon: bizOwner
	}
];
