export const retort = [
	{
		name: 'Problem Statements',
		slug: 'problem',
		definitions: [
			'User is a person who is trying to solve a problem and is looking for a product or service to help them solve it.',
			'User experience is the journey that the user takes with that product or service.',
			'Problem statement is a concise description of the problem that needs to be solved, and it summarizes who the user is, what they need from a design, and why.',
			'Pain points are any UX issue or friction that frustrates the user and blocks them from getting what they need. Minimizing pain points keeps users happy and encourages them to keep interacting with the product.',
			'Value proposition, which is a summary of why your user would or should use the product or service that you’re designing.'
		],
		goals: [
			'Problem we are solving must be clear',
			'Problem needs to be worth solving',
			"User's goals must be clear and therein lies the need to define what constitutes success for the user"
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
			"Business owner says they need all the requirements, so let's keep every one."
		],
		solutions: [
			"Talk to users. We're trying to solve their problems, not some Minister or PS. Users are masters of their problems, even if they can be terrible at finding the best solutions.",
			'Question every requirement - contexts change, technologies improve, obsolescence kicks in.',
			'Someone needs the courage to call out illogical projects/requirements, disagreements are naturally difficult and antithetical to how human beings have evolved to survive'
		],
		suggestions: [
			'[Name of user persona] is a [type of user] who needs [type of user experience] because [benefits of user experience].',
			'If [user] can perform [action], then they will achieve [benefit].'
		]
	},
	{
		name: 'Project',
		slug: 'project',
		definitions: [],
		goals: [],
		screening: [
			'What does the product do?',
			'Why should the user care?',
			'If anecdotes are contradicting your data, you might be measuring the wrong thing.'
		],
		questions: []
	},
	{
		name: 'Security',
		slug: 'security',
		definitions: [],
		goals: [],
		screening: [],
		questions: []
	},
	{
		name: 'Cost',
		slug: 'cost',
		definitions: [],
		goals: [],
		screening: [
			'ROI',
			'trade-offs',
			'TAM',
			'uncompetitive',
			"Just because it's not your money, doesn't mean we should waste it frivolously"
		],
		questions: []
	}
];
