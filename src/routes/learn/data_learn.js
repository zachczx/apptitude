export const info = [
	{
		id: 1,
		name: 'Basics',
		intro: 'The world of computing and modern software development.',
		slug: 'basics',
		topics: [
			'computing',
			'binary',
			'cpu',
			'kernel',
			'open source',
			'linux',
			'assembly',
			'algorithms',
			'runtime',
			'compiler',
			'gpu',
			'memory',
			'networking',
			'internet',
			'development',
			'software',
			'apps',
		],
		questions: [
			'What is a computer?',
			'How do computers run?',
			'What is assembly language, C/C++, interpreted languages, runtime, compilers?',
			'What are containers, docker, Kubernetes?',
			'What are lower and higher level languages?',
			'What languages work best for prototyping, speed/performance, large teams/apps, web interactivity, data science, scaling up?',
			'What is the cloud, compute, storage?',
			'What is on-premises?',
			'What is virtualization, virtual machines, hypervisors, key management systems?',
			'What are APIs/services, monoliths, microservices?',
			'What are the advantages and disadvantages of monolithic vs microservice architectures?',
			'What are low code, no code, and WYSIWYG tools?',
			'How do you solve problems with computers and code?',
		],
		issues: [
			"The hardest part of building software is not coding, it's requirements",
			'Requirements are usually specified by business owners who have no idea the complexity involved with every extra word included on the spec sheet',
			'Trade-offs need to be made after considering tech stacks, cost, manpower, security, timeline, business risks, policy blockers',
			'But none of these can be done with poor understanding of foundational technologies that make the web tick',
			"If you're good enough, you can use any language/framework/libraries to build crazy stuff, but doing so can be inefficient and low ROI",
			"Almost all architectures/tools/frameworks are good at some stuff and lacking in others - the key is to make informed choices for the problem we're solving, not be dogmatic",
			'Business processes, service processes, policies can block technical and lead to unnecessary poor outcomes',
		],
		objectives: [
			'Understand the Basics of Computer Science and Engineering',
			'Figure out the building blocks necessary to build modern apps, services, systems, platforms',
			'Comprehend the broad differences between programming languages',
			'Know what constitutes modern, digital infrastructure',
			'Explore cloud computing, cloud storage, virtualization and cloud infrastructure management tools',
			'Learn how reasonable people think about the best tools for which use-cases, e.g. Rust instead of Python',
		],
		resources: {
			courses: [
				{
					text: "CS50's Understanding Technology | Harvard University",
					url: 'https://pll.harvard.edu/course/cs50s-understanding-technology-0',
				},
				{
					text: 'How Computers Work (UOL) | Coursera',
					url: 'https://www.coursera.org/learn/how-computers-work',
				},
				{
					text: 'Computational Thinking for Problem Solving Course (UPenn) | Coursera',
					url: 'https://www.coursera.org/learn/computational-thinking-problem-solving',
				},
				{
					text: "CS50's Computer Science for Business Professionals | Harvard University",
					url: 'https://pll.harvard.edu/course/cs50s-computer-science-business-professionals-0',
				},
				{
					text: 'Programming for Everybody (Getting Started with Python) | Coursera',
					url: 'https://www.coursera.org/learn/python',
				},

				{
					text: 'Google IT Support Professional Certificate | Coursera',
					url: 'https://www.coursera.org/professional-certificates/google-it-support',
				},
			],
			youtube: [
				'https://youtube.com/embed/mCq8-xTH7jA',
				'https://youtube.com/embed/rRSD128KWIM',
				'https://youtube.com/embed/-uleG_Vecis',
				'https://youtube.com/embed/vqs_0W-MSB0',
				'https://youtube.com/embed/LN0ucKNX0hc',
				'https://youtube.com/embed/gI-qXk7XojA',
				'https://youtube.com/embed/M5BZou6C01w',
				'https://youtube.com/embed/rL8X2mlNHPM',
				'https://youtube.com/embed/1GSjbWt0c9M',
				'https://youtube.com/embed/FZGugFqdr60',
				'https://youtube.com/embed/guvsH5OFizE',
				'https://youtube.com/embed/OtDxDvCpPL4',
			],
			links: [
				{
					text: "The hardest part of building software is not coding, it's requirements",
					url: 'https://stackoverflow.blog/2023/12/29/the-hardest-part-of-building-software-is-not-coding-its-requirements/',
				},
				{
					text: 'Introducing How Computers Work',
					url: 'https://www.youtube.com/watch?v=OAx_6-wdslM&list=PLzdnOPI1iJNcsRwJhvksEo1tJqjIqWbN-',
				},
				{ text: 'Computers', url: 'https://www.explainthatstuff.com/howcomputerswork.html' },
				{
					text: 'So how do computers actually work?',
					url: 'https://medium.com/@SchezHugo/so-how-do-computers-actually-work-911bd3681dbd',
				},
				{
					text: 'Computer Science | CrashCourse Youtube Playlist',
					url: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo',
				},
			],
		},
	},
	{
		id: 2,
		name: 'Basics (The Web)',
		intro: 'The web and the cloud.',
		slug: 'basics-web',
		topics: ['internet', 'http', 'https', 'cloud', 'ssl', 'html', 'css', 'javascript', 'php'],
		questions: [
			'How does the Internet work?',
			'What is HTML, CSS, Javascript, Web Assembly?',
			'What are web/javascript frameworks like React JS, Angular JS, Solid JS, Vue JS, Next JS, Node JS, Astro, Svelte',
			'What are routers, servers, packets, DNS?',
			'How does a website get displayed on my computer?',
			'What are HTTP, HTTP 2, HTTP 3, SSL, GET, POST, PUT, DELETE?',
			'What are static and dynamic websites?',
			'What are the differences between frontend and backend development/developers?',
			'How does my webapp fetch, create, update and delete data?',
			'What is the cloud, compute, storage?',
			'What are low code, no code, and WYSIWYG tools like Wix, Webflow?',
		],
		issues: [
			'Webdev moves very fast',
			'Webdev does not need to be expensive',
			'Most of the web is GET/POST/PUT/DELETE',
		],
		objectives: [
			'Learn how the Internet works and how code turns into products we see and use on the web',
			'Comprehend the broad differences between programming languages and web frameworks',
			'Grasp the Fundamentals of Internet, web technologies, network infrastructure',
			'Know what constitutes modern, digital web infrastructure',
			'Explore cloud computing, cloud storage, virtualization and cloud infrastructure management tools',
			'Learn how reasonable people think about the best tools for which use-cases, e.g. Astro for static websites instead of React bloat',
		],
		resources: {
			courses: [
				{
					text: 'AWS Fundamentals Specialization [3 courses] (AWS) | Coursera',
					url: 'https://www.coursera.org/specializations/aws-fundamentals',
				},
			],
			youtube: [
				'https://youtube.com/embed/erEgovG9WBs',
				'https://youtube.com/embed/lkIFF4maKMU',
				'https://youtube.com/embed/zN8YNNHcaZc?si=Tj2S7qrsec51DKrJ',
				'https://www.youtube.com/embed/6hPMdpk9qA4?si=3eIaOho9EkNWTPjM',
				'https://youtube.com/embed/3C_22eBWpjg',
				'https://youtube.com/embed/Cd9aRtwj9xA',
			],
			links: [
				{
					text: 'Web mechanics | MDN Web Docs',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics',
				},
				{
					text: 'How the Web Works: A Primer for Newcomers to Web Development (or anyone, really)',
					url: 'https://www.freecodecamp.org/news/how-the-web-works-a-primer-for-newcomers-to-web-development-or-anyone-really-b4584e63585c/',
				},
				{
					text: 'How does the Internet work? | Cloudflare',
					url: 'https://www.cloudflare.com/en-gb/learning/network-layer/how-does-the-internet-work/',
				},
				{
					text: 'Learn web development | MDN Web Docs',
					url: 'https://developer.mozilla.org/en-US/docs/Learn',
				},
				{ text: 'Learn Web Development | Web.dev', url: 'https://web.dev/learn' },
				{
					text: 'Javascript | MDN Web Docs',
					url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
				},

				{
					text: 'Document Object Model (DOM) | MDN Web Docs',
					url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model',
				},
				{
					text: 'What is PHP, The Best Guide to Understand Its Concepts',
					url: 'https://www.simplilearn.com/tutorials/php-tutorial/what-is-php',
				},
				{ text: 'Load Balancing', url: 'https://samwho.dev/load-balancing/' },
				{
					text: 'What is SSL (Secure Sockets Layer)? | Cloudflare',
					url: 'https://www.cloudflare.com/en-gb/learning/ssl/what-is-ssl/',
				},
				{
					text: 'Cloud Security: A Primer for Policymakers',
					url: 'https://carnegieendowment.org/2020/08/31/cloud-security-primer-for-policymakers-pub-82597',
				},
				{ text: 'Learn CSS | Web.dev', url: 'https://web.dev/learn/css' },
				{ text: 'Webflow (Website Builder)', url: 'https://webflow.com/' },
				{ text: 'Weebly (Website Builder)', url: 'https://www.weebly.com/' },
				{ text: 'Wix (Website Builder)', url: 'https://www.wix.com/' },
				{
					text: '10+ Must Use Static Site Generator 2024',
					url: 'https://dev.to/themeselection/static-site-generator-1fp4',
				},
				{ text: 'Hugo overview', url: 'https://www.sanity.io/glossary/hugo' },
				{ text: 'Wagtail', url: 'https://wagtail.org/' },
				{
					text: 'A comparison between Wagtail CMS and WordPress',
					url: 'https://kalob-taulien.medium.com/wagtail-cms-a-comparison-between-wagtail-cms-and-wordpress-b36853476749',
				},
				{
					text: 'Ask HN: What web development stack do you prefer in 2024?',
					url: 'https://news.ycombinator.com/item?id=39105013',
				},
				{
					text: 'Ask HN: What CMS are you using in 2022?',
					url: 'https://news.ycombinator.com/item?id=32062615',
				},
			],
		},
	},
	{
		id: 3,
		name: 'Apps',
		intro:
			'Know what the free world uses for work. See how much more efficient and better work can be.',
		slug: 'apps',
		topics: ['SaaS', 'apps', 'applications', 'AWS', 'Azure', 'GCP', 'M365', 'Workspace'],
		questions: [
			'Cloud services on AWS, Azure, Google Cloud Platform',
			'Do office work on M365, Google Workspace, LibreOffice',
			'Meet virtually on Teams, Slack, Zoom',
			'Ticketing using Jira, Zendesk',
			'Project management on Jira, Asana, Trello, Monday.com',
			'Knowledge management on Confluence, Notion',
			'Visualize and collaborate on Miro, Mural, FigJam',
			'Designing on Photoshop, Illustrator, Figma, Canva, Affinity',
		],
		issues: [
			'Using modern productivity tools involves changing your workflows and accepting the risks (e.g. risks from storing your data in the cloud and having your data potentially used to improve AI products)',
			'Employee productivity can increase even with poor tooling - people can produce more work by working more hours or doing things manually',
			'Organizations can just give employees better tools to produce quality work faster',
			'Users need to articulate the business benefits from using tools',
			'IT policy guardrails need to move with the times, not adopting industry staples can incur opportunity costs to expenditure on manpower, productivity, speed of delivery',
			'Employees can get frustrated when they need to use multiple apps, e.g. Teams for meeting bosses, Slack for chats with developers, having to find documents across different platforms',
			"However, don't ask employees to use software when it blatantly doesn't solve any problem, like forcing people to spend time logging tasks over Jira instead of doing real work",
		],
		objectives: [
			'Know what the free world uses for work',
			'Identify how efficient and simple processes can be',
			'See the opportunity costs and trade-offs for not using them',
			"Notice when processes just don't make sense, e.g. designers iterate on design concepts with business owners over powerpoint/pdf, when everyone could just hop onto Figma",
		],
		resources: {
			courses: [
				{
					text: 'Microsoft 365 Fundamentals Specialization | Coursera',
					url: 'https://www.coursera.org/specializations/microsoft-365-fundamentals',
				},
				{
					text: 'From Excel to Power BI | Coursera',
					url: 'https://www.coursera.org/learn/from-excel-to-power-bi',
				},
				{
					text: 'AWS Fundamentals Specialization | Coursera',
					url: 'https://www.coursera.org/specializations/aws-fundamentals',
				},
				{
					text: 'Agile with Atlassian Jira | Coursera',
					url: 'https://www.coursera.org/learn/agile-atlassian-jira',
				},
				{
					text: 'AWS Cloud Practitioner Essentials | Coursera',
					url: 'https://www.coursera.org/learn/aws-cloud-practitioner-essentials',
				},
				{
					text: 'Google Cloud Platform Fundamentals: Core Infrastructure | Coursera',
					url: 'https://www.coursera.org/learn/gcp-fundamentals',
				},
				{
					text: 'Introduction to Microsoft Azure Cloud Services | Coursera',
					url: 'https://www.coursera.org/learn/microsoft-azure-cloud-services',
				},
				{
					text: 'Microsoft Azure Fundamentals AZ-900 Exam Prep Specialization | Coursera',
					url: 'https://www.coursera.org/specializations/microsoft-azure-fundamentals-az-900',
				},
			],
			youtube: [
				'https://youtube.com/embed/Uq5w1lnKzlk?si=e3CDZfWZr56kjZb9',
				'https://youtube.com/embed/LTH9m4HkeYY?si=-SCEzZABqeWnriup',
				'https://www.youtube.com/embed/JIbIYCM48to',
				'https://www.youtube.com/embed/Uq5w1lnKzlk?si=TDvoQNQel3EjCY3_',
				'https://www.youtube.com/embed/II-6dDzc-80?si=S_tQl9gngez_DKj3',
				'https://www.youtube.com/embed/ohtDFXNAUns?si=Fjc4NOyi1-Zdx5p4',
				'https://www.youtube.com/embed/1pW_sk-2y40',
				'https://www.youtube.com/embed/dYtdv--qd_U',
				'https://www.youtube.com/embed/5p3QzaS33GA',
				'https://www.youtube.com/embed/uHF8s4mEOig',
			],
			links: [
				{
					text: 'Agile Tutorials - Atlassian Agile Coach',
					url: 'https://www.atlassian.com/agile/tutorials',
				},
				{
					text: 'Figma for Beginners tutorial (4 parts)',
					url: 'https://help.figma.com/hc/en-us/sections/4405269443991-Figma-for-Beginners-tutorial-4-parts',
				},

				{
					text: 'Photoshop for Complete Beginners | Lesson 1 - Youtube',
					url: 'https://www.youtube.com/watch?v=xTzvQkOll2U&list=PLLlSBGLVsEPIFGSGw2zJ2K43V5vxMMMTE',
				},
			],
		},
	},
	{
		id: 4,
		name: 'Central Tools',
		intro:
			'Great things have been built centrally by top tier people, stop recreating old grounds and get with the times.',
		slug: 'wog',
		topics: ['SG Tech Stack', 'GSIB', 'GCC', 'GDC', 'SG-Teams'],
		questions: [
			'Trade offs between going Infrastructure-as-a-Service, Platform-as-a-Service, Software-as-a-Service',
			'Mainstays in WOG networks, especially the endpoint device, network, and backend infrastructure',
			'AI tools through Pair, Launchpad, AI Bots',
			'Variants of M365 that GovTech deploys, across M365, SG-Teams, Sharepoint Online, ServiceNow ITSM',
			"GovTech's common applications for resource, visitor, asset, workflow management",
			'HR administration through HRPS, Workpal',
		],
		objectives: [
			"Don't dump money recreating stuff already developed",
			'See how far we are behind everyone else',
			'Rid ourselves of misguided sense of superiority and uniqueness',
		],
		issues: [
			'If we think about the public sector as a single organization, it makes sense to use the same tech stack for efficiency, cost savings, knowledge management.',
			'Too many people want to build their platforms/systems/tools without considering the long tail that comes with their own development. The ROI would be stacked in favor of central tools given the cost and effort advantages.',
			"People don't know enough or don't bother to find out about the central tools on offer (or perhaps sometimes it's still work in progress). So they go do their own stuff, which then duplicates development work and wastes resources at the aggregate level.",
			"Or sometimes people just think they've a superior product than what is already being offered centrally.",
			'People in organizations think they have very unique requirements and processes that cannot fit off-the-shelf or central products, but these often are because of inflexibility (i.e. no process reengineering or thinking out of the box) or human stubbornness.',
			"On the other hand, inefficiency and mismanagement at the central level will snowball, as every additional/unnecessary thing that's provisioned gets multiplied by every officer",
		],
		resources: {
			youtube: [
				'https://www.youtube.com/embed/5u6nRus74ZQ?si=AJoNdLtdkxV4TV3i',
				'https://www.youtube.com/embed/02f4G6pU-08',
				'https://www.youtube.com/embed/MfGD-cG6nOA',
				'https://www.youtube.com/embed/l8qmHxzCTfE',
				'https://www.youtube.com/embed/E3lum6GcjQo',
				'https://www.youtube.com/embed/k0XR6qv6W-w',
				'https://www.youtube.com/embed/yu6au1hSIZQ',
				'https://www.youtube.com/embed/xIUiBQnMvLs?si=X3ARFrRqM1mS9X6b',
				'https://www.youtube.com/embed/Z5U17iqHhXg',
				'https://www.youtube.com/embed/OKtNwnbWQBQ',
				'https://www.youtube.com/embed/FriAm2BnqqA',
				'https://www.youtube.com/embed/OOVbuBuuOqE',
			],
			links: [
				{
					text: 'Home | Singapore Government Developer Portal',
					url: 'https://www.developer.tech.gov.sg/',
				},
				{
					text: 'Our Products | Open Government Products',
					url: 'https://www.open.gov.sg/products/',
				},
				{
					text: 'Products and Services | GovTech Singapore',
					url: 'https://www.tech.gov.sg/products-and-services/',
				},
				{
					text: 'Open Government Products | Medium',
					url: 'https://medium.com/open-government-products',
				},
				{ text: 'Hack for Public Good 2024', url: 'https://hack.gov.sg/' },
				{ text: 'GovTech Medium Blogs', url: 'https://www.tech.gov.sg/media/blogs/listing' },
				{
					text: 'Govtech Data Science & Artifical Intelligence Division Medium Blog',
					url: 'https://medium.com/dsaid-govtech',
				},
			],
		},
	},
	{
		id: 5,
		name: 'User Experience (Basics)',
		intro: 'If you want people to actually use your app, try to make it not suck.',
		slug: 'ux',
		topics: [
			'ux',
			'human-centered design',
			'design thinking',
			'empathy',
			'problem',
			'pain-point',
			'stories',
			'journey',
		],
		questions: [
			'What is UX?',
			'How does UX differ from UI?',
			'How do you conduct user research, design, prototype, validation, testing?',
			'What are the key principles of user-centric products?',
			'What are UX design processes and methodologies?',
			'Why should we incorporate design for users with disabilities and how can I make design inclusive?',
			'What are industry standard tools for UX design (esp Figma)?',
		],
		objectives: [
			"UX is not UI, it's all aspects of the end-user's interaction with the company, its services, and its products.",
			'Understand user needs, behaviors, and motivations',
			'Learn methods for user research (e.g. interviews, surveys, usability testing)',
			'Study principles of good UX design (e.g. usability, accessibility, desirability)',
			'Grasp key usability principles (learnability, efficiency, memorability, error prevention, satisfaction)',
			'Explore UX design processes and methodologies',
			'See usable, intuitive, and appealing in action, especially for web products',
			'Know the basics of using Figma (no exporting to PDF and sending over email plzzz), Adobe XD, Sketch, etc',
		],
		issues: [
			'Products which offer poor experience still hang in there, because users are often captured audience (think NS Portal and fact that it was always down on weekends)',
			'People who manage products in Govt seldom talk to actual users',
			'UX is neither about doing usability testing nor is it copywriting',
			'There is product management theatre in the public sector',
			"Good design doesn't mean doing bright colors, flashy animations, layouts. In fact, predictable layout is good, like for websites.",
		],
		resources: {
			courses: [
				{
					text: 'Google UX Design Professional Certificate | Coursera',
					url: 'https://www.coursera.org/professional-certificates/google-ux-design',
				},
				{
					text: 'UX Basic Training | Nielsen Norman Group',
					url: 'https://www.nngroup.com/courses/ux-basic-training/',
				},
				{
					text: 'UX Basics: Study Guide | Nielsen Norman Group',
					url: 'https://www.nngroup.com/articles/ux-basics-study-guide/',
				},
			],
			youtube: [
				'https://www.youtube.com/embed/2QQQtiFwXjU',
				'https://www.youtube.com/embed/8PM6KxV8GRc',
				'https://www.youtube.com/embed/wIuVvCuiJhU',
				'https://www.youtube.com/embed/yNDgFK2Jj1E',
				'https://www.youtube.com/embed/4eAM6ASs76U',
				'https://www.youtube.com/embed/NJbTER11-kQ',
				'https://www.youtube.com/embed/S6maF4tICPs',
				'https://www.youtube.com/embed/VQhHX5zpC-U',
			],
			links: [
				{
					text: 'The Definition of User Experience (UX)',
					url: 'https://www.nngroup.com/articles/definition-user-experience/',
				},
				{
					text: 'UX Basics: Study Guide | Nielsen Norman Group',
					url: 'https://www.nngroup.com/articles/ux-basics-study-guide/',
				},
				{
					text: 'Articles | Nielsen Norman Group',
					url: 'https://www.nngroup.com/articles/',
				},
				{
					text: 'UXPodcast',
					url: 'https://uxpodcast.com/',
				},
				{
					text: 'UX Department | The GitLab Handbook',
					url: 'https://handbook.gitlab.com/handbook/product/ux/',
				},
				{ text: 'Usability | Digital.gov', url: 'https://digital.gov/topics/usability/' },
				{
					text: 'Usability 101: Introduction to Usability',
					url: 'https://www.nngroup.com/articles/usability-101-introduction-to-usability/',
				},
				{
					text: 'The A to Z of UX — A is for Accessibility: 12 tips for designing an inclusive user experience',
					url: 'https://uxdesign.cc/the-a-to-z-of-ux-a-is-for-accessibility-12-top-tips-for-designing-an-inclusive-user-experience-667eedaf5bca',
				},
				{
					text: '99% Invisible',
					url: 'https://99percentinvisible.org/',
				},
				{
					text: 'Design Systems: A design systems publication by Figma',
					url: 'https://www.designsystems.com/',
				},

				{
					text: 'UX Case Study: How YouTube keeps you watching and addicted',
					url: 'https://www.thedesignership.com/blog/how-youtube-keeps-you-watching-addicted',
				},
			],
		},
	},
	{
		id: 6,
		name: 'Products',
		intro: 'Make good products, listen to customers, solve user problems.',
		slug: 'products',
		topics: [
			'product-market fit',
			'project',
			'management',
			'leadership',
			'strategy',
			'management',
			'execution',
			'startups',
			'pivot',
		],
		questions: [
			"What's difference between project and product management?",
			'What is product-market fit?',
			'How do you find product-market fit?',
			'How do you identify and prioritize product features?',
			'What metrics do you use to measure product success?',
			'What is a north star metric for a product?',
			'What is a pivot?',
			'How do you define and communicate the product vision?',
			'What are the typical funding rounds for startups and companies trying to raise funds?',
			'What is the difference between a product manager vs a project manager?',
			'What is the difference between a feature team vs a product team?',
			'Who are product leaders? What do they do and what is product leadership?',
		],
		objectives: [
			'Spot project management and product management',
			'Know what goes into a good product',
			'Spot solutions in search of a problem',
			'Feel it in your soul when a "product" just ain\'t it',
			'Think user-first, Min/PS/DS last',
			'Be aware of how startups and industry get funding, and what metrics/trajectories they prioritize',
			"We don't often need product managers, but know when you need one, and know when you don't have one.",
			'Be mindful of the transformation and product management theatre',
		],
		issues: [
			"Many products/systems developed by Govt don't solve real & meaningful problems, are slow & laggy, huge wastes of money",
			"Product-market fit simply isn't thought about, most certainly not efficiency and working at scale (see: $1 vending machine that dispenses $100 doesn't have product-market fit)",
			'Tech product owners are often appointed to the role without relevant skills or experience, and end up roleplaying their idea of what the job requires',
			"People who manage products don't talk to users",
			"Prescriptive rules in public service restrain engineering teams's ability to innovate, deliver fast",
			"Project KPIs are usually an afterthought - KPIs are neither meaningful, ambitious, or a good indication of the product's value (e.g. 70% of users rate 4/5)",
			"People always have want to develop something new, without thinking of the long tail that's involved with maintaining something you developed",
			'No one is incentivized to terminate their projects/products even if poorly performing, because it means they lose MMF, lose funding, lose appraisal work achievements.',
		],
		resources: {
			courses: [
				{
					text: 'Product Management Course: Singapore (caveat emptor)',
					url: 'https://generalassemb.ly/education/product-management/singapore',
				},
				{
					text: 'Become a Product Manager | Learn the Skills & Get the Job',
					url: 'https://www.udemy.com/course/become-a-product-manager-learn-the-skills-get-a-job/',
				},
				{
					text: 'Google Project Management: Professional Certificate | Coursera',
					url: 'https://www.coursera.org/professional-certificates/google-project-management',
				},
			],
			youtube: [
				'https://www.youtube.com/embed/XmRNIGqzuRI',
				'https://www.youtube.com/embed/C27RVio2rOs?si=rKY_2K-n0lC6vk54',
				'https://www.youtube.com/embed/0LNQxT9LvM0?si=KHzWpcisYehJbdHF',
				'https://www.youtube.com/embed/fEvKo90qBns?si=bsb5008mqkuhft0F',
				'https://www.youtube.com/embed/yc1Uwhfxacs',
				'https://www.youtube.com/embed/QRZ_l7cVzzU?si=sh3L1sWZzBhLb2dy',
				'https://www.youtube.com/embed/aOGMymXPgrk',
				'https://www.youtube.com/embed/h-KVGHoQ_98',
				'https://www.youtube.com/embed/YP_QghPLG-8',
				'https://www.youtube.com/embed/ZoKLofsp8u0',
				'https://www.youtube.com/embed/6DTK9yDP6p0?si=niskiu1FnnDNhiOQ',
				'https://www.youtube.com/embed/oWZbWzAyHAE?si=aFy0z0ePzrlUTvSD',
				'https://www.youtube.com/embed/FCxkT8ULrVg',
				'https://www.youtube.com/embed/yr_sz6fRy-w',
			],
			links: [
				{
					text: 'Product Management – Start Here',
					url: 'https://www.svpg.com/product-management-start-here/',
				},
				{
					text: 'Product Thinking, Project Thinking | @shreyas',
					url: 'https://twitter.com/shreyas/status/1471650411341750273',
				},
				{
					text: 'Y Combinator - YouTube',
					url: 'https://www.youtube.com/c/ycombinator',
				},
				{
					text: "Lenny's Podcast - YouTube",
					url: 'https://www.youtube.com/@LennysPodcast',
				},

				{ text: 'Product-Market Fit | First Round Capital', url: 'https://pmf.firstround.com/' },
				{
					text: 'Paths to PMF with Todd Jackson',
					url: 'https://review.firstround.com/series/product-market-fit/',
				},
				{ text: 'Product Coalition', url: 'https://productcoalition.com/' },
				{
					text: 'Ruthless Prioritization',
					url: 'https://blackboxofpm.com/ruthless-prioritization-e4256e3520a9',
				},
				{ text: 'Shape Up | Base Camp', url: 'https://basecamp.com/shapeup/0.3-chapter-01' },
				{
					text: 'Intercom on Product Management',
					url: 'https://marketing.intercomcdn.com/assets/pm-book/v3/Intercom_on_Product_Management.pdf',
				},
				{ text: 'Gitlab Product Handbook', url: 'https://handbook.gitlab.com/handbook/product/' },
				{
					text: 'Managing and Developing Product Managers',
					url: 'https://blackboxofpm.com/managing-and-developing-product-managers-2f9a3963fab6',
				},
				{
					text: 'All-In Podcast - YouTube',
					url: 'https://www.youtube.com/@allin',
				},
				{
					text: 'Product Metrics: What You Need to Know - Qualtrics',
					url: 'https://www.qualtrics.com/au/experience-management/product/product-metrics/',
				},
				{
					text: 'Product Metrics Guide - Amplitude',
					url: 'https://amplitude.com/blog/product-metrics-guide',
				},
				{ text: "Brandon Chu's Medium Blog", url: 'https://medium.com/@brandonmchu' },
				{ text: 'Stratechery', url: 'https://stratechery.com/' },
				{
					text: 'Intro to Responsive Product Portfolio Management White Paper',
					url: 'https://dragonboat.io/wp-content/uploads/2021/02/responsive-ppm-intro-whitepaper.pdf',
				},
				{
					text: 'Why Product Metrics Matter',
					url: 'https://www.productplan.com/learn/product-metrics-matter/',
				},
				{
					text: 'Product Management Theater - Silicon Valley Product Group',
					url: 'https://www.svpg.com/product-management-theater/',
				},
				{
					text: 'Coaching Tools - The Assessment',
					url: 'https://www.svpg.com/coaching-tools-the-assessment/',
				},
				{
					text: 'Transformation Fail - Silicon Valley Product Group',
					url: 'https://www.svpg.com/transformation-fail/',
				},
				{ text: 'Pmarca', url: 'https://pmarchive.com/' },
				{
					text: 'Transforming Product Culture with Lea Hickman',
					url: 'https://www.mindtheproduct.com/transforming-product-culture-lea-hickman/',
				},
				{
					text: 'What defines a top 1% Product Designer? | r/UXDesign',
					url: 'https://www.reddit.com/r/UXDesign/comments/1ccdafz/what_defines_a_top_1_product_designer/',
				},
				{
					text: "I stopped feeling sorry for y'all | r/UXDesign",
					url: 'https://www.reddit.com/r/UXDesign/comments/1cgv2zh/i_stopped_feeling_sorry_for_yall/',
				},
			],
		},
	},

	{
		id: 7,
		name: 'User Experience (Advanced)',
		intro: 'If you want people to actually use your app, try to make it not suck.',
		slug: 'ux-advanced',
		topics: [
			'ux',
			'contextual inquiry',
			'interview',
			'accessibility',
			'usability',
			'interaction',
			'motion',
			'visual',
			'lo-fi',
			'wireframe',
		],
		questions: [
			'How do you conduct user research, design, prototype, validation, testing?',
			'What are the key principles of user-centric products?',
			'Why should we incorporate design for users with disabilities and how can I make design inclusive?',
			"What's the relationship between visual/interaction design and user experience?",
			'What are visually appealing and usable interfaces?',
			'What are interaction design patterns and how do people design intuitive and natural interactions?',
			'Why is learning/doing Figma not enough to do UX well?',
		],
		objectives: [
			"UX is not UI, it's all aspects of the end-user's interaction with the company, its services, and its products.",
			'Understand user needs, behaviors, and motivations',
			'Study principles of good UX design (e.g. usability, accessibility, desirability)',
			'Grasp key usability principles (learnability, efficiency, memorability, error prevention, satisfaction)',
			'See usable, intuitive, and appealing in action, especially for web products',
			'Explore optimization for designs and user experiences',
		],
		issues: [
			'People who manage products in Govt seldom talk to actual users',
			"People who do know/talk to users don't get to decide and often get overridden by generalists",
			'UX is neither about doing usability testing nor is it copywriting',
			'There is product management theatre in the public sector',
			"Good design doesn't mean doing bright colors, flashy animations, layouts. In fact, predictable layout is good, like for websites.",
		],
		resources: {
			courses: [
				{ text: 'Nielsen Norman Group Courses', url: 'https://www.nngroup.com/courses/' },
				{
					text: 'DesignerUp Product Design (UX/UI) Course',
					url: 'https://designerup.co/product-design-ui-ux-course',
				},
				{
					text: 'Kickass UX',
					url: 'https://www.kickassux.com/',
				},
				{
					text: 'Uxcel',
					url: 'https://uxcel.com/',
				},
			],
			youtube: [
				'https://www.youtube.com/embed/NepFo4zXyK4',
				'https://www.youtube.com/embed/yUvGHNzqG7M',
				'https://www.youtube.com/embed/9ElrcTtAxzA',
				'https://www.youtube.com/embed/Hx02SaL_IH0',
				'https://www.youtube.com/embed/L22lDu3QX2c',
				'https://www.youtube.com/embed/hlI6xGfBjkQ',
				'https://www.youtube.com/embed/C-UeBdtopdA',
				'https://www.youtube.com/embed/UWwNIMHFdW4',
				'https://www.youtube.com/embed/DBHBmeNhYrY',
			],
			links: [
				{
					text: 'Design Systems for Developers',
					url: 'https://storybook.js.org/tutorials/design-systems-for-developers/',
				},
				{
					text: 'DesignOps at Airbnb',
					url: 'https://airbnb.design/designops-airbnb/',
				},
				{
					text: 'Material Design | Google',
					url: 'https://m3.material.io/',
				},
				{
					text: 'Resource library | Figma',
					url: 'https://www.figma.com/resource-library/',
				},
				{
					text: 'Articles - Discover everything you need to know about building for the modern web | Web.dev',
					url: 'https://web.dev/articles',
				},
				{
					text: 'Design Tools Database',
					url: 'https://uxtools.co/tools/design',
				},
				{
					text: 'The Gestalt Principles for User Interface Design',
					url: 'https://www.youtube.com/watch?v=DwR0SZTBMTU&list=PLJOFJ3Ok_iduObD_9dHwiYp804oZwpHze',
				},
				{
					text: 'Using "How Might We" Questions to Ideate on the Right Problems',
					url: 'https://www.nngroup.com/articles/how-might-we-questions/',
				},
				{
					text: 'How many participants for a UX interview?',
					url: 'https://www.nngroup.com/articles/interview-sample-size/',
				},
				{
					text: 'Legibility, Readability, and Comprehension: Making Users Read Your Words',
					url: 'https://www.nngroup.com/articles/legibility-readability-comprehension/',
				},
				{
					text: 'Breaking Down the Principles of Design (With Infographic)',
					url: 'https://www.toptal.com/designers/gui/principles-of-design-infographic',
				},
				{
					text: '7 Things To Remember When Selecting Fonts For Your Design',
					url: 'https://uxplanet.org/7-things-to-remember-when-selecting-fonts-for-your-design-ec1e592266c5',
				},
				{
					text: 'Emphasis: Setting up the focal point of your design',
					url: 'https://www.interaction-design.org/literature/article/emphasis-setting-up-the-focal-point-of-your-design',
				},
				{
					text: 'Mockplus- Design, prototype and deliver your digital future',
					url: 'https://www.mockplus.com/blog/post/ui-visual-hierarchy',
				},
				{
					text: 'Visual Hierarchy | Interaction Design Foundation',
					url: 'https://www.interaction-design.org/literature/topics/visual-hierarchy',
				},
				{
					text: 'Golden Ratio. Bring Balance in UI Design.',
					url: 'https://uxplanet.org/golden-ratio-bring-balance-in-ui-design-765c954f0ff9',
				},
				{
					text: 'The ultimate guide to proper use of animation in UX',
					url: 'https://uxdesign.cc/the-ultimate-guide-to-proper-use-of-animation-in-ux-10bd98614fa9',
				},
				{
					text: 'The Anatomy of a Perfect Landing Page That Converts',
					url: 'https://www.uxmatters.com/mt/archives/2023/07/the-anatomy-of-a-perfect-landing-page-that-converts.php',
				},
				{
					text: 'Improve Your Designs With The Principles Of Similarity And Proximity (Part 1)',
					url: 'https://www.smashingmagazine.com/2016/05/improve-your-designs-with-principles-similarity-proximity-part-1/',
				},
				{
					text: 'Improve Your Designs With The Principles Of Closure And Figure-Ground (Part 2)',
					url: 'https://www.smashingmagazine.com/2016/05/improve-your-designs-with-the-principles-of-closure-and-figure-ground-part-2/',
				},
				{
					text: "Ways to Improve Your Website's User Experience",
					url: 'https://blog.shift4shop.com/improve-website-user-experience',
				},
				{
					text: 'A LIST of free tools to help you start in UXTools & apps (r/UXDesign)',
					url: 'https://www.reddit.com/r/UXDesign/comments/z64rl2/a_list_of_free_tools_to_help_you_start_in_ux/',
				},
				{
					text: 'What is not talked enough about in the topic of Information architecture | r/UXDesign',
					url: 'https://www.reddit.com/r/UXDesign/comments/1cdk001/what_is_not_talked_enough_about_in_the_topic_of/?share_id=ma_P0v_wsyb0aEnj5RiAG',
				},
				{
					text: 'https://www.w3.org/WAI/test-evaluate/preliminary/#video',
					url: 'https://www.w3.org/WAI/test-evaluate/preliminary/#video',
				},
				{
					text: 'Buttons | Material Design',
					url: 'https://m3.material.io/components/buttons/overview',
				},
			],
		},
	},
	{
		id: 8,
		name: 'Methodologies',
		intro: "Agile or fragile? This will become your project's survival guide.",
		slug: 'methodologies',
		topics: ['agile', 'waterfall', 'scrum', 'lean', 'kanban', 'safe'],
		questions: [
			'What is Agile?',
			"Is Scrum what you do when you're Agile?",
			'Wait, Agile is not just implementing Scrum?',
			'What is waterfall and why do people fall back to it?',
			'What about Lean/Kanban/Less?',
			'How do I apply Agile/Scrum/Lean/Kanban in my team?',
		],
		issues: [
			'Everyone says agile this, agile that as buzzwords to sound clever, without trying to define it or making sure others share that definition',
			'Non-technical folks hear agile and they like the phrase, because it sounds smart, and they quote that often too even when everything about their work remains the same',
			"Estimating requirements accurately at the beginning is an impossible task, but that's the expectation of most public service budgetary processes",
			'Despite the obvious drawbacks, public sector organizations like the comforts of waterfall and continuously revert to waterfall practices',
			'Predictability of scope, cost, timelines are key draws of waterfall approaches',
			'Employees who get their organizations to sponsor huge sums to send them for Scrum, Kanban courses end up exactly the same after those courses, which begs the question what the point was in the first place',
			"There's little point trying to implement Agile, Kanban when the structures, processes of the organizations actively resist alternative approaches to developing working software",
		],
		objectives: [
			'Feel even more lost navigating the world of "agile"',
			'Get upset realizing you spent $4000 paying for a Certified Scrum Master / Product Owner',
			'Notice when people spout nonsense and attaching keywords like agile and waterfall',
			'Know the limits of implementing methodologies when the organization is structurally incapable',
			'Feel confident rejecting "daily standups" from ScrumMaster-wannabes',
		],
		resources: {
			courses: [
				{
					text: 'Professional Scrum Master™ Training | Scrum.org',
					url: 'https://www.scrum.org/courses/professional-scrum-master-training',
				},
				{
					text: 'Scrum Master Certifications | Scrum Alliance',
					url: 'https://www.scrumalliance.org/get-certified/scrum-master-track',
				},
			],
			youtube: [
				'https://youtube.com/embed/1evfn3qTYGM',
				'https://youtube.com/embed/5Ty-WC4gLto',
				'https://youtube.com/embed/iVaFVa7HYj4',
				'https://youtube.com/embed/J4ihLROXzPk?si=wfk8YSa3fePUtHxs',
				'https://youtube.com/embed/OosYzkP-pLk?si=E7RqVQeN3L50b4sk',
				'https://youtube.com/embed/vSnCeJEka_s?si=GNhjdQVV8rn9l4iH',
				'https://youtube.com/embed/scEDHsr3APg',
			],
			links: [
				{
					text: 'Manifesto for Agile Software Development',
					url: 'https://agilemanifesto.org/',
				},
				{
					text: 'Principles behind the Agile Manifesto',
					url: 'https://agilemanifesto.org/principles.html',
				},
				{
					text: "Stevey's Google Platforms Rant",
					url: 'https://gist.github.com/chitchcock/1281611',
				},
				{
					text: 'DIB Guide: Detecting Agile BS',
					url: 'https://media.defense.gov/2018/Oct/09/2002049591/-1/-1/0/DIB_DETECTING_AGILE_BS_2018.10.05.PDF',
				},
				{
					text: 'Scrum Training Series - YouTube',
					url: 'https://youtube.com/playlist?list=PLD2BMPY5WcfAYTEYXW0NGxodOi1PLC1XN&si=b_ym-Jy4_UOeS1Iv',
				},
				{
					text: 'Agile Project Management with Scrum and Kanban - YouTube',
					url: 'https://www.youtube.com/playlist?list=PL32pD389V8xt_znF-pvOl7OP_xNfnkGgq',
				},
				{
					text: 'Scaled Agile Framework (SAFe)',
					url: 'https://scaledagile.com/what-is-safe/',
				},
				{
					text: "The hardest part of building software is not coding, it's requirements",
					url: 'https://stackoverflow.blog/2023/12/29/the-hardest-part-of-building-software-is-not-coding-its-requirements/',
				},
				{
					text: "Diane Hirsh Theriault's LinkedIn Post",
					url: 'https://www.linkedin.com/posts/dhtheriault_my-hot-take-google-does-not-have-one-single-activity-7153269568893775872-9xzp/',
				},
			],
		},
	},
	{
		id: 9,
		name: 'Data',
		intro: 'Rolling a dice for decisions only works in Monopoly.',
		slug: 'data',
		topics: [
			'database',
			'data warehouse',
			'data lake',
			'analysis',
			'data visualization',
			'data sanitation',
			'business intelligence',
			'storytelling',
			'Tableau',
			'ETL',
		],
		questions: [
			'What is data science, data analytics, data exploitation?',
			'What is a database, data warehouse, data lake?',
			'How is data produced, where is it produced, how is it ingested?',
			'What is end-to-end data observability and monitoring?',
			'What is Extract, Transform, Load (ETL)? What is traditional vs modern ETL?',
			'What is Extract, Load, Transform (ELT)? How does it differ from ETL?',
			'How mature is the organization in the collection, manipulation, exploitation of data?',
			'Where are the data silos in our organization and how did they come to be?',
			'What are our business needs for data (e.g. latency, scale, security)?',
			'What does the data tell us about our current business performance?',
			'How can we improve our customer experience based on the data?',
			'How can we design and implement a scalable data pipeline to ingest and process large volumes of structured and unstructured data from multiple sources?',
			'What is a typical design of a cloud-native stack to derive business intelligence?',
		],
		issues: ['Stop creating a new data lake to succeed previous data lakes and warehouses!'],
		objectives: [
			'Know where we truly are amid (self created) hype on data science, transformation, AI',
			"Know what's possible to ingest, ETL, exploit data, vs whats not in the organization",
			'Understand the link between business needs, data collection, analysis, storytelling, arriving at actionable insights',
			'Learn about modern cloud-based stacks that let you build a scalable data pipeline',
			'Get exposed to efficiency, cost optimization, ROI for designing and implementing data architectures',
			'Understand the needs and implementation of data governance and data security',
		],
		resources: {
			courses: [
				{
					text: 'Foundations: Data, Data, Everywhere Course (Google) | Coursera',
					url: 'https://www.coursera.org/learn/foundations-data',
				},
				{
					text: 'Google Data Analytics Professional Certificate | Coursera',
					url: 'https://www.coursera.org/professional-certificates/google-data-analytics',
				},
				{
					text: 'IBM Data Science Professional Certificate | Coursera',
					url: 'https://www.coursera.org/professional-certificates/ibm-data-science',
				},
				{
					text: 'CS109 Data Science | Harvard',
					url: 'https://cs109.github.io/2015/pages/videos.html',
				},
				{
					text: 'Python for Data Science and Machine Learning Bootcamp | Udemy',
					url: 'https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/?couponCode=LETSLEARNNOW',
				},
				{
					text: 'Meta Database Engineer Professional Certificate | Coursera',
					url: 'https://www.coursera.org/professional-certificates/meta-database-engineer',
				},
			],
			youtube: [
				'https://youtube.com/embed/GbL-42kv5LI',
				'https://youtube.com/embed/r8KZGpVns3o',
				'https://youtube.com/embed/wSct_cbqzpM',
				'https://youtube.com/embed/sPyZALF1tPc',
				'https://youtube.com/embed/e5RLjJvTt_w',
				'https://youtube.com/embed/DuDz6B4cqVc',
				'https://youtube.com/embed/W0Lhv7VNkxk',
				'https://youtube.com/embed/yZvFH7B6gKI?si=knmkZUMf5A21sLXs',
				'https://youtube.com/embed/-bSkREem8dM?si=i6lRT55iMs30lOLS',
			],
			links: [
				{
					text: 'What is ETL (Extract Transform Load)?',
					url: 'https://aws.amazon.com/what-is/etl/',
				},
				{
					text: 'What Is A Kafka Data Pipeline? Architecture & Examples 2024',
					url: 'https://estuary.dev/kafka-data-pipeline/',
				},
				{
					text: "Monitoring vs Observability vs Telemetry: What's The Difference?",
					url: 'https://www.splunk.com/en_us/blog/learn/observability-vs-monitoring-vs-telemetry.html',
				},
				{
					text: 'Intro to Data Visualization with R & ggplot2 | Google Data Analytics Certificate',
					url: 'https://www.youtube.com/watch?v=ZPw0dmGuyyE&list=PLTZYG7bZ1u6rcPlcX75pMkjsYY_HTL7aZ',
				},
				{
					text: 'End-to-end Data Science Life Cycle',
					url: 'https://towardsdatascience.com/stoend-to-end-data-science-life-cycle-6387523b5afc',
				},
				{
					text: "Don't Trust Data Scientists to Set Performance Metrics",
					url: 'https://towardsdatascience.com/dont-trust-data-scientists-to-set-performance-metrics-908bcd80bac6',
				},
				{
					text: 'The Unspoken Rules of Visualisation',
					url: 'https://datajournalism.com/read/longreads/the-unspoken-rules-of-visualisation',
				},
				{
					text: 'Build Recommendation Engine with Collaborative Filtering',
					url: 'https://realpython.com/build-recommendation-engine-collaborative-filtering/#:~:text=Collaborative%20filtering%20is%20a%20family,type%20of%20collaborative%20filtering%20approach.',
				},
			],
		},
	},
	{
		id: 10,
		name: 'AI (Basics)',
		intro: 'AI is the extra brain cells you wish you were born with.',
		slug: 'ai',
		topics: [
			'AI',
			'embeddings',
			'vectors',
			'training',
			'inference',
			'deep learning',
			'machine learning',
			'LLM',
			'RAG',
			'neural networks',
			'natural language processing',
			'computer vision',
			'prompting',
		],
		questions: [
			'What are the foundational principles and technologies behind AI and LLMs?',
			'What are the differences between closed and open source LLMs',
			'How can AI and LLMs be leveraged to enhance public service delivery?',
			'Should we buy vs build vs adopt?',
			'Should we go with GovTech/OGP products, build ourselves, or approach a vendor?',
			'If we build, how can we avoid irreversible decisions that lock us into (soon to be) obsolete paths?',
			'How can AI contribute to more efficient and effective public service workflows?',
			'What are AI agents and what are the benefits/costs of agentic workflows?',
			'What training or skills are necessary for public sector employees to work effectively with AI?',
		],
		issues: [
			"The AI genie is out of the bottle, there's no return to life before it",
			"Given the ongoing hype train for AI, it's tempting to use AI for the sake of it, but that'd would be a huge L",
			'Focus on solving a meaningful problem, not the hype',
			'Long tail of training/finetuning yourself, building UIs, and maintaining is too much investment',
			'AI user interfaces and workflows are not necessarily (and can often be contrary to) good UX',
			'Simple applications of ML might be far more useful for everyday problems, as is straightforward improvements to how we organize info, design websites instead of pushing for a chatbot',
		],
		objectives: [
			'Sort through the AI hype from the keepers',
			'Understand what it takes to conceptualize, develop, & deploy AI products, e.g. compute infrastructure, toolchain',
			'Know what everyone not on LLMs is missing out',
			'Spot opportunities to do things much faster and easier with LLMs',
		],
		resources: {
			courses: [
				{
					text: 'Introduction to Generative AI',
					url: 'https://www.cloudskillsboost.google/course_templates/536',
				},
				{
					text: 'AI For Everyone Course (DeepLearning.AI) | Coursera',
					url: 'https://www.coursera.org/learn/ai-for-everyone',
				},
				{
					text: 'Machine Learning Crash Course | Google',
					url: 'https://developers.google.com/machine-learning/crash-course/ml-intro',
				},
			],
			youtube: [
				'https://youtube.com/embed/zjkBMFhNj_g',
				'https://youtube.com/embed/PeMlggyqz0Y?si=X1ZeR-qr01d_BnP-',
				'https://youtube.com/embed/5sLYAQS9sWQ',
				'https://youtube.com/embed/G8T1O81W96Y',
				'https://youtube.com/embed/T-D1OfcDW1M?si=WZJLcElfcEh4-51c',
				'https://youtube.com/embed/sal78ACtGTc',
				'https://youtube.com/embed/lXLBTBBil2U',
				'https://youtube.com/embed/yTAMrHVG1ew',
				'https://youtube.com/embed/i2qSxMVeVLI',
				'https://youtube.com/embed/fG3IE9dkyKY',
				'https://youtube.com/embed/sFztPP9qPRc',
				'https://youtube.com/embed/LsNHsfZFjlA',
				'https://youtube.com/embed/oZPTBXnaSBI',
			],
			links: [
				{
					text: 'The AI Index Report: Measuring trends in AI',
					url: 'https://aiindex.stanford.edu/report/',
				},
				{
					text: 'Introduction to Generative AI',
					url: 'https://www.cloudskillsboost.google/course_templates/536',
				},
				{
					text: 'AI For Everyone Course (DeepLearning.AI) | Coursera',
					url: 'https://www.coursera.org/learn/ai-for-everyone',
				},

				{
					text: 'AI Explained - Youtube',
					url: 'https://www.youtube.com/@aiexplained-official',
				},
				{
					text: 'LLM Embeddings — Explained Simply',
					url: 'https://pub.aimind.so/llm-embeddings-explained-simply-f7536d3d0e4b',
				},

				{
					text: 'Visual Interactive Guide to the Basics of Neural Networks',
					url: 'http://jalammar.github.io/visual-interactive-guide-basics-neural-networks/',
				},
				{
					text: 'Introduction to Natural Language Processing for Text',
					url: 'https://towardsdatascience.com/introduction-to-natural-language-processing-for-text-df845750fb63',
				},

				{
					text: 'National AI Strategy | Smart Nation Singapore',
					url: 'https://www.smartnation.gov.sg/nais/',
				},
				{
					text: 'A pro-innovation approach to AI regulation: government response | Gov.uk',
					url: 'https://www.gov.uk/government/consultations/ai-regulation-a-pro-innovation-approach-policy-proposals/outcome/a-pro-innovation-approach-to-ai-regulation-government-response',
				},
				{
					text: 'AI agents: types, benefits, and examples',
					url: 'https://yellow.ai/blog/ai-agents/',
				},
			],
		},
	},
	{
		id: 11,
		name: 'AI (Advanced)',
		intro: 'AI is the extra brain cells you wish you were born with.',
		slug: 'ai-advanced',
		topics: [
			'AI',
			'embeddings',
			'vectors',
			'training',
			'inference',
			'transformers',
			'deep learning',
			'machine learning',
			'neural networks',
			'natural language processing',
			'computer vision',
			'pretraining',
		],
		questions: [
			'What is the value chain for AI/LLMs and how do they come together? AI value chain - GPU Chips, Foundational Models, Compute (Training, Inference) + Storage + Data Infrastructure, Application',
			'How are the various options for training/learning, deploying, & performing inference for AI/LLMs/vision models',
			'How does the industry and leading minds think about learning/inference, effectiveness, size of model, speed/throughput, efficiency, power needs/consumption?',
			'What part of the AI value chain do we as a product/project/policy team go for?',
			'How can we ensure the privacy and security of data used by AI systems?',
			'What are the key challenges in integrating AI technologies into existing IT infrastructure?',
			'What is the immediate and medium term future for LLMs, and where are the next leaps & improvements going to be at?',
			'What ethical considerations should guide the use of AI in public sectors?',
		],
		issues: [
			'Obsolescence cycle is extremely fast, so we must avoid significant sunk costs and irreversible decisions',
			'Fast pace of product and technological improvements challenges rigid/aged organizational structures - impossible to keep up if tons of red-tape is needed for chopping and changing',
			'Generative AI is not the be-all and end-all, not everything needs to be an LLM-based chatbot',
			'Lock-in or sunk costs is an issue, e.g. sinking tons of money into deploying/finetuning your Llama2 something only to have it obsolete 12 months later',
		],
		objectives: [
			'See the opportunities and challenges across the AI value chain - GPU Chips, Foundational Models, Compute (Training, Inference) + Storage + Data Infrastructure, Application.',
			'Understand the different techniques and methods to enhance your business processes with AI',
			'Know which LLMs are good, how good, for what',
		],
		resources: {
			courses: [
				{
					text: 'Machine Learning Problem Framing | Google',
					url: 'https://developers.google.com/machine-learning/problem-framing',
				},
				{
					text: 'Deep Learning Specialization - DeepLearning.AI',
					url: 'https://www.deeplearning.ai/courses/deep-learning-specialization/',
				},
			],
			youtube: [
				'https://youtube.com/embed/jvqFAi7vkBc',
				'https://youtube.com/embed/Mf1P3n6TqCc',
				'https://www.youtube.com/embed/qTogNUV3CAI',
				'https://youtube.com/embed/5t1vTLU7s40?si=uEflOaOw_p1eyRoZ',
				'https://youtube.com/embed/bc6uFV9CJGg',
				'https://youtube.com/embed/cdiD-9MMpb0',
				'https://youtube.com/embed/Z0jqIk7MUfE',
				'https://youtube.com/embed/Dbog8Yw3kEM',
				'https://youtube.com/embed/yTAMrHVG1ew?si=P-UQWIr2LRn6O-H3&t=165',
			],
			links: [
				{
					text: 'LLM Visualization',
					url: 'https://bbycroft.net/llm',
				},
				{
					text: 'Introduction to Diffusion Models for Machine Learning',
					url: 'https://www.assemblyai.com/blog/diffusion-models-for-machine-learning-introduction/',
				},
				{
					text: "Chamath Palihapitiya podcast chat with Groq's Jonathan Ross",
					url: 'https://twitter.com/chamath/status/1754641005851328553?lang=en',
				},
				{
					text: 'Attention Is All You Need | 31st Conference on Neural Information Processing Systems (NIPS 2017)',
					url: 'https://proceedings.neurips.cc/paper_files/paper/2017/file/3f5ee243547dee91fbd053c1c4a845aa-Paper.pdf',
				},
				{
					text: 'Amenity Detection and Beyond: New Frontiers of Computer Vision at Airbnb',
					url: 'https://medium.com/airbnb-engineering/amenity-detection-and-beyond-new-frontiers-of-computer-vision-at-airbnb-144a4441b72e',
				},
				{
					text: 'Agents in Artificial Intelligence',
					url: 'https://www.geeksforgeeks.org/agents-artificial-intelligence/',
				},
				{
					text: 'LMSYS Chatbot Arena Leaderboard',
					url: 'https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard',
				},
				{
					text: 'Introducing Meta Llama 3: The most capable openly available LLM to date',
					url: 'https://ai.meta.com/blog/meta-llama-3/',
				},

				{
					text: 'Why Nvidia’s AI Supremacy is Only Temporary | HN',
					url: 'https://news.ycombinator.com/item?id=37467585',
				},
				{
					text: 'Why Nvidia’s AI Supremacy is Only Temporary',
					url: 'https://petewarden.com/2023/09/10/why-nvidias-ai-supremacy-is-only-temporary/',
				},
				{
					text: 'A Gentle Introduction to Diffusion',
					url: 'https://wandb.ai/byyoung3/ml-news/reports/A-Gentle-Introduction-to-Diffusion---Vmlldzo2MzgxNjc3',
				},
				{
					text: 'Understanding and Mitigating Bias in Large Language Models (LLMs)',
					url: 'https://www.datacamp.com/blog/understanding-and-mitigating-bias-in-large-language-models-llms',
				},
				{
					text: 'How Do Machines ‘Grok’ Data?',
					url: 'https://www.quantamagazine.org/how-do-machines-grok-data-20240412/',
				},
				{
					text: "	New GitHub Copilot research finds 'downward pressure on code quality' | HackerNews",
					url: 'https://news.ycombinator.com/item?id=39168105',
				},
				{
					text: 'Unlock Your LLM Coding Potential with StarCoder2',
					url: 'https://developer.nvidia.com/blog/unlock-your-llm-coding-potential-with-starcoder2/',
				},
			],
		},
	},
	{
		id: 12,
		name: 'Technical',
		intro:
			'Befriend the machines, learn to speak their language before they achieve world domination.',
		slug: 'technical',
		topics: [
			'programming',
			'languages',
			'development',
			'algorithms',
			'cli',
			'data',
			'databases',
			'structures',
			'engineering',
			'cybersecurity',
			'ci/cd',
			'git',
		],
		questions: [
			'What is <insert language> and what does it do well?',
			'How do I solve <X> problem? How do others solve it with <Y>?',
			'How do developers work in the normal world?',
			'What are difficulties that developers face in my environment?',
			'How hard is it to do <X>?',
		],
		issues: [
			'Reports, guidelines, restrictions are written by people with no idea of how something works, and decisions that come out of these materials cannot be good',
			'People with no understanding of what it takes to develop something cannot properly lead a product or project',
			'Costings/estimates/proposals by vendors are supported by officers without second thought, even though it sounds ludicrous when you compare it with external experiences (e.g. personal)',
			'No one is incentivized to improve developers\' lives, experience, productivity, because no one wants to bother with anything "technical"',
			'Productivity of engineering/research talent is wasted explaining basic concepts to non-technical people so that they can write their reports/slides',
			"Technical skills can very quickly become obsolete, so people who don't continuously keep up can also hinder innovation and give bad recommendations",
		],
		objectives: [
			'Learn about frontend, backend, fullstack development',
			'Know what the rest of the world does to solve computer engineering problems',
			'Learn a useful life skill using logic to solve problems',
			'Understand whether what you have around you is good or trash',
			"Opt for the simpler solutions you know people use but which we don't necessarily",
			'Scrutinize billable man effort, fees, proposed work by vendors',
		],
		resources: {
			courses: [
				{
					text: 'CS50: Introduction to Computer Science | Harvard University',
					url: 'https://pll.harvard.edu/course/cs50-introduction-computer-science',
				},
				{
					text: 'Fundamentals of Computing Specialization [7 courses] (Rice) | Coursera',
					url: 'https://www.coursera.org/specializations/computer-fundamentals',
				},
				{
					text: 'Computer Science 101 I Stanford Online',
					url: 'https://online.stanford.edu/courses/soe-ycscs101-computer-science-101',
				},
				{
					text: 'Meta Back-End Developer Professional Certificate | Coursera',
					url: 'https://www.coursera.org/professional-certificates/meta-back-end-developer',
				},
				{
					text: 'Meta Front-End Developer Professional Certificate | Coursera',
					url: 'https://www.coursera.org/professional-certificates/meta-front-end-developer',
				},
				{
					text: 'Introduction to Computer Science and Programming in Python | Electrical Engineering and Computer Science | MIT OpenCourseWare',
					url: 'https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/',
				},
				{
					text: 'Scrimba',
					url: 'https://scrimba.com/',
				},
			],
			youtube: [
				'https://youtube.com/embed/pEfrdAtAmqk?si=XbNLZmktdg7oQCis',
				'https://youtube.com/embed/-uleG_Vecis?si=R0MCXM6csXiGXyjD',
				'https://youtube.com/embed/erEgovG9WBs',
				'https://youtube.com/embed/lkIFF4maKMU',
				'https://youtube.com/embed/aXOChLn5ZdQ?si=-KXtJPY2mI3pRlIv',
				'https://youtube.com/embed/E8cM12jRH7k',
				'https://youtube.com/embed/ijQvgERWKjA',
				'https://youtube.com/embed/zOjov-2OZ0E?si=pQnCP85QMk1MNHIh',
			],
			links: [
				{
					text: 'Front-End Development: The Complete Guide',
					url: 'https://cloudinary.com/guides/front-end-development/front-end-development-the-complete-guide',
				},
				{
					text: 'How to Become a Backend Developer in 2024 | A Step-by-Step Guide',
					url: 'https://www.geeksforgeeks.org/back-end-developer-roadmap/',
				},
				{
					text: 'How Long Does It Take to Become a Back End Developer?',
					url: 'https://medium.com/bootdotdev/how-long-does-it-take-to-become-a-back-end-developer-226a4f1cece2',
				},
				{
					text: 'W3Schools Online Web Tutorials',
					url: 'https://www.w3schools.com/',
				},
				{
					text: 'GeeksforGeeks | A computer science portal for geeks',
					url: 'https://www.geeksforgeeks.org/',
				},
				{
					text: 'Full Stack JavaScript | The Odin Project',
					url: 'https://www.theodinproject.com/paths/full-stack-javascript',
				},
				{
					text: 'Deep Dive Into Modern Web Development',
					url: 'https://fullstackopen.com/en/',
				},
				{
					text: 'Full Stack Developer | Step by step guide to becoming a modern full stack developer in 2024',
					url: 'https://roadmap.sh/full-stack',
				},
				{
					text: 'Full Stack Web Development for Beginners (Full Course on HTML, CSS, JavaScript, Node.js, MongoDB)',
					url: 'https://www.youtube.com/watch?app=desktop&v=nu_pCVPKzTk',
				},
				{
					text: 'Kevin Powell - YouTube',
					url: 'https://www.youtube.com/@KevinPowell',
				},
				{
					text: 'Web Dev Simplified - YouTube',
					url: 'https://www.youtube.com/@WebDevSimplified',
				},
				{
					text: 'Joy of Code - YouTube',
					url: 'https://www.youtube.com/@JoyofCodeDev',
				},
				{
					text: 'BugBytes - YouTube',
					url: 'https://www.youtube.com/@bugbytes3923',
				},
				{
					text: "Ask HN: Startup Devs -What's your biggest pain while managing cloud deployments?",
					url: 'https://news.ycombinator.com/item?id=39836124',
				},
				{
					text: 'Forkful Open Source Coding Cookbook',
					url: 'https://forkful.ai/en/',
				},
				{
					text: 'Developer Tools on AWS',
					url: 'https://aws.amazon.com/products/developer-tools/',
				},
				{
					text: 'C++ Language',
					url: 'https://cplusplus.com/doc/tutorial/',
				},
				{
					text: 'Zig vs Rust: A Comprehensive Comparison for Modern Developers',
					url: 'https://medium.com/@priyanka.navgire11/zig-vs-rust-a-comprehensive-comparison-for-modern-developers-5a50f7650e98',
				},
				{
					text: 'Django Tutorial | W3Schools',
					url: 'https://www.w3schools.com/django/',
				},
				{
					text: 'Python Tutorial | W3Schools',
					url: 'https://www.w3schools.com/python/',
				},
				{
					text: 'AWS Cloud Databases',
					url: 'https://aws.amazon.com/products/databases/',
				},
				{
					text: 'Ask HN: What web development stack do you prefer in 2024?',
					url: 'https://news.ycombinator.com/item?id=39105013',
				},
				{
					text: 'How web bloat impacts users with slow devices',
					url: 'https://danluu.com/slow-device/',
				},
			],
		},
	},
];
