export interface Trippin {
	category: 'unskilled' | 'illogical' | 'apathetic' | 'faker' | 'resistant' | 'avoiding';
	text: string;
	score?: number;
}

export const techtrippin: Trippin[] = [
	{
		category: 'faker',
		text: 'It all depends on the business requirements and use-case. GPT 4, 5, 6, 7, and so on would not change much.',
		score: 0,
	},
	{
		category: 'faker',
		text: 'Technically, anything can be done, it just depends on the use-case.',
		score: 0,
	},
	{
		category: 'resistant',
		text: "It's just the way it is.",
		score: 0,
	},
	{
		category: 'resistant',
		text: "This cannot be done any other way because that's SOP/policy/IM8.",
		score: 0,
	},
	{
		category: 'avoiding',
		text: "We're just doing what Min/PS/DS/CE pushed for it.",
		score: 0,
	},
	{
		category: 'unskilled',
		text: "We're not sure how people do 2-week release cycles while we take 4 months to do VAPT, we'll be happy to hear from them.",
		score: 0,
	},
	{
		category: 'faker',
		text: "What're your OKRs? (really just means KPIs)",
		score: 0,
	},
	{
		category: 'unskilled',
		text: "What's HTMX?",
		score: 0,
	},
	{
		category: 'apathetic',
		text: "My form filling e-service needs to be desktop first. It's complex, has many fields so it's only useful to a desktop user. I don't want to and it's not worth redoing to make it mobile first.",
		score: 0,
	},
	{
		category: 'unskilled',
		text: "I'm confident of rolling out my product to internal employee users. We have a usability testing framework where we get actual users to test our product before we launch it. It's part of the usability testing requirement. We find bugs and we fix them. We don't do separate user research.",
		score: 0,
	},
	{
		category: 'unskilled',
		text: "Satisfaction in survey went up double digits. We did a great job and we're surprised and happy. We're not sure why, the survey results don't allow us to establish causality. We've some guesses... It could be xxx or yyy, but really we don't know.",
		score: 0,
	},
	{
		category: 'illogical',
		text: "Business owner says it's a legacy system, the current system and form filling UI are dated, ugly. We reached the max customization to make it prettier. So we'll need money to refactor. We'll go to the cloud, use Next JS, break up the monolith as many micro services, build common components that we can eventually share across the sector. We'll buy a new business rules engine because the current one is very old and no one knows what's inside. We'll make the new one customizable for non-technical users to write business logic.",
		score: 0,
	},
	{
		category: 'apathetic',
		text: "We did assessments on the requirements for the new system. This requirement for XXX, we assess it's reasonable. This is because the current system was previously approved at a sum of $900K. With inflation and higher manpower costs we think it's reasonable to pitch it at $1.5M going forward.",
		score: 0,
	},
	{
		category: 'unskilled',
		text: "Our DB ground to a halt and locked up. It couldn't handle 1 million rows in the table and we didn't have indexes.",
		score: 0,
	},
	{
		category: 'avoiding',
		text: "App went down because we received null values that we weren't expecting, but it's the data owner's fault for not understanding their schema!",
		score: 0,
	},
	{
		category: 'unskilled',
		text: "Our analytics dashboard shows 120k Javascript errors for our frontend. I'm not sure what all these errors are. But don't worry about it, it's all under the hood anyway.",
		score: 0,
	},
	{
		category: 'apathetic',
		text: "This person was assigned to oversee this task of optimizing performance, it's true that they don't have experience in development, but they're who we've assigned, so we need to work through them.",
		score: 0,
	},
	{
		category: 'avoiding',
		text: 'The root cause is human error, the person accidentally did xxx, yyy, zzz. The person needs to be more careful.',
		score: 0,
	},
	{
		category: 'apathetic',
		text: 'Do you need personal data to be desensitized on the frontend?',
		score: 0,
	},
];
