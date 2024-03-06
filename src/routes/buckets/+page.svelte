<script>
const info = {
    'Basics': {
        'topics': ['cloud', 'Internet', 'computing', 'networking', 'development', 'software'],
        'questions': [
            "What is a computer?",
            "How do computers run?",
            "What is assembly language, C/C++,  interpreted languages, compilers?",
            "What are lower and higher level languages?",
            "How does the Internet work?",
            "How does a website get displayed on my computer?",
            "What are routers, servers, packets, DNS?",
            "What is the cloud, compute, storage?",
            "What is on-premises?",
            "What is virtualization, virtual machines, hypervisors, key management systems?",
        ],
        "objectives": [
            "Understand the Basics of Computer Science and Engineering",
            "Comprehend the broad differences between programming languages",
            "Grasp the Fundamentals of Internet, web technologies, network infrastructure",
            "Know what constitutes modern, digital infrastructure",
            "Explore cloud computing, cloud storage, virtualization and cloud infrastructure management tools",
        ]
    },
    "": {
        'topics': [],
        "questions": [],
        "objectives": [],
    },
    "Apps": {
        'topics': ["SaaS", "apps", "applications"],
        "questions": [
            "Cloud services on AWS, Azure, Google Cloud Platform",
            "Do office work on M365, Google Workspace, LibreOffice",
            "Meet virtually on Teams, Slack, Zoom",
            "Ticketing using Jira, Zendesk",
            "Project management on Jira, Asana, Trello, Monday.com",
            "Knowledge management on Confluence, Notion",
            "Visualize and collaborate on Miro, Mural, Figma",
            "Designing on Photoshop/Illustrator, Figma, Canva",
        ],
        "objectives": [
            "Know what the free world uses for work",
            "Identify how efficient and simple processes can be",
            "See the opportunity costs and trade-offs for not using them",
        ],
    },
    "Using WOG products": {
        'topics': ["SG Tech Stack", "GSIB", "GCC", "GDC", "SG-Teams"],
        "questions": [
            "Mainstays in WOG networks, especially the endpoint device, network, and backend infrastructure",
            "AI tools through Pair, Launchpad, AI Bots", 
            "Variants of M365 that GovTech deploys, across M365, SG-Teams, Sharepoint Online, ServiceNow ITSM",
            "GovTech's common applications for resource, visitor, asset, workflow management",
            "HR administration through HRPS, Workpal",
        ],
        "objectives": [
            "Avoid dumping money recreating what has already been developed",
            ""
        ],
    },
    "": {
        'topics': [],
        "questions": [],
        "objectives": [],
    },
    "": {
        'topics': [],
        "questions": [],
        "objectives": [],
    },
}

const data = {
    "Basics": [
        "Digital/internet Infrastructure (how do I get a website displayed? What are routers, servers, DNS?)",
        "Cloud (what is cloud? What is on-prem? Virtualization?)",
        "Computing/development work (what are languages? how do they work? Industry standards?)"
        ],
    "Using industry standard pdts": [
        "Cloud - AWS",
        "Office Productivity - M365, Miro, Google Workspace",
        "Ticketing - Jira",
        "KM - Confluence/Notion"
        ],
    "Using Govt standard pdts": [
        "SG Tech Stack",
        "Pair",
        "AI Bots",
        "GSIB, M365/Teams/SPO/ITSM",
        "Workpal/HRPS"
        ],
    "Products": [
        "UX",
        "Management",
        "Strategy",
        "Execution (proj mgmt.)",
        "Starting products/coys"
        ],
    "Philosophies": [
        "Agile",
        "Scrum/Lean/Kanban/etc"
        ],
    "Data": [
        "Producing data, cleaning, manipulating, visualizing",
        "Extraction, Transformation, Loading",
        "Database/ Warehousing/ Lakes"
        ],
    "AI": [
        "Basics (how it works, what is needed, what goes into final AI algo/model, prompting/training/finetuning/RAG)",
        "Gen AI, LLMs",
        "Under the hood with more traditional concepts about DL, ML, NN, GAN",
        "Image generation"
        ],
    "Technical": [
        "Programming/scripting",
        "Algorithms, data structures, classic \"hard\" problems",
        "Engineering mindset to solving problems",
        "Cybersecurity"
        ]
    }
</script>

<div class="grid grid-cols-4 min-h-dvh justify-items-center gap-y-6 gap-x-4 px-[3rem]">

    {#each Object.entries(data) as [category, value]}
    <div class="card w-full bg-base-300 shadow-xl">
        <figure><img src="" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">
            {category}
          </h2>
            <ul class="list-disc">
                {#each value as item}
                <li>{item}</li>
                {/each}
            </ul>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">XXX</div> 
            <div class="badge badge-outline">YYY</div>
          </div>
        </div>
    </div>
    {/each}


</div>

<div class="wrapper text-center">
{#each Object.entries(info) as [key, value]}
    {#if value && key}
        {#each Object.entries(value) as [k, v]}
        {k}
            {#if k === 'topics'}
                {#each v as val}   
                <span class="btn btn-primary btn-xs me-2">{val}</span>
                {/each}
            {:else}
            <ul class="list-decimal">
                {#each v as val}   
                <li>{val}</li>
                {/each}
            </ul>
            {/if}
        {/each}
    {/if}
{/each}
</div>