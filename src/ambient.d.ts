interface TableOfContent {
	id: SuggestionSection | ResearchSection;
	title: string;
}

interface LearnData {
	id: number;
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

type SuggestionSection = 'definitions' | 'goals' | 'questions' | 'alarms' | 'dealbreakers';

type ResearchSection = 'empathize' | 'define' | 'ideate' | 'prototype-test' | 'sources';

interface MenuItem {
	label: string;
	href?: string;
	id?: string; // Used to match the 'page' prop for active state
	icon?: Snippet; // Svelte 5 snippet for the icon
	children?: MenuItem[]; // For Level 3 sub-menus
}

interface MenuSection {
	label: string; // Level 1 Header
	href: string;
	items: MenuItem[]; // Level 2 Items
}
