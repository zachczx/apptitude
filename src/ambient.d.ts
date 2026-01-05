interface TableOfContent {
	id: TableOfContentId;
	title: string;
}

type TableOfContentId = SuggestionSection | ResearchSection | LearnSection | ProductPlanSection;

interface LearnData {
	name: string;
	intro: string;
	slug: string;
	level: number;
	topics: string[];
	questions: string[];
	issues: string[];
	objectives: string[];
	resources: {
		courses: { text: string; url: string }[];
		youtube: string[];
		links: { text: string; url: string }[];
	};
}

type ProductPlanSection =
	| 'what-makes-a-product-plan'
	| 'the-problem'
	| 'measurable-outcomes-targets'
	| 'risks'
	| 'product-plan-template'
	| 'credits';

type LearnSection = 'questions' | 'objectives' | 'hard-truths' | 'resources';

type SuggestionSection = 'definitions' | 'goals' | 'questions' | 'alarms' | 'dealbreakers';

type ResearchSection = 'empathize' | 'define' | 'ideate' | 'prototype-test' | 'sources';

interface MenuSection {
	label: string;
	href: string;
	items: MenuItem[];
}

type MenuItem = MenuLink | MenuHeader;

interface MenuLink {
	label: string;
	href?: string;
	id: string;
	icon?: Snippet;
	children?: MenuLink[];

	header?: never;
}

interface MenuHeader {
	header: string;

	id?: never;
	label?: never;
	href?: never;
	children?: never;
	icon?: never;
}
