<script lang="ts">
	import piggyBank from '$lib/assets/piggy-bank.webp?w=200&enhanced';
	import product from '$lib/assets/product.webp?w=200&enhanced';
	import problem from '$lib/assets/problem.webp?w=200&enhanced';
	import magnifyingGlass from '$lib/assets/magnifying-glass.webp?w=200&enhanced';
	import NavToc from '$lib/NavToc.svelte';
	import NewWrap from '$lib/NewWrap.svelte';

	let { data } = $props();
	let currentSection: any = $state();
	let path: any = $derived(data.url.split('/'));
	let category: any = $derived(path[1]);
	let page: any = $derived(path[2]);
	const pageTitle = 'The Playbook';
	const subtitle = `Frameworks for the messy parts of building products. From "should we build this?" to "why does this cost so much?"`;
</script>

<NewWrap title={pageTitle} {subtitle}>
	<div class="grid gap-6 md:grid-cols-2">
		<article
			class="group card bg-base-card border-base-content/10 hover:border-primary/40 border transition-all hover:shadow-lg">
			<div class="card-body">
				<div class="size-20 shrink-0">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						class="streamline-flex-color:rocket-flat size-20 hue-rotate-150"
						viewBox="0 0 14 14"
						><!-- Icon from Flex color icons by Streamline - https://creativecommons.org/licenses/by/4.0/ --><g
							fill="none"
							fill-rule="evenodd"
							clip-rule="evenodd"
							><path
								fill="#2859c5"
								d="M3.617 7.445h-.021c-.877-.011-2.11 1.08-2.549 1.864c-.441.79-.612 1.799-.396 3.063c.122.715.76 1.16 1.422 1.16h.238c.864 0 1.386-.73 1.64-1.256c.088-.182.504-.492.774-.626l.05-.07l-.022-.044c-.393-.955-.901-2.467-1.136-4.091m5.582 4.136l.05.069c.27.134.686.444.774.626c.254.526.775 1.256 1.64 1.256h.238c.661 0 1.3-.445 1.422-1.16c.216-1.264.045-2.273-.397-3.063c-.438-.785-1.671-1.875-2.548-1.864h-.02c-.236 1.624-.744 3.136-1.138 4.091z" /><path
								fill="#8fbffa"
								d="M6.807.251a.5.5 0 0 1 .36 0c1.265.487 2.11 1.3 2.628 2.29c.512.978.694 2.104.692 3.215c-.004 2.215-.739 4.498-1.267 5.78a.5.5 0 0 1-.462.31H5.216a.5.5 0 0 1-.463-.31c-.527-1.282-1.262-3.565-1.266-5.78c-.002-1.111.18-2.237.692-3.215c.519-.99 1.363-1.803 2.628-2.29" /><path
								fill="#2859c5"
								d="M3.75 3.636a7 7 0 0 0-.225 1.25h6.923a7 7 0 0 0-.225-1.25zm3.987 4.396a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0z" /></g
						></svg>
				</div>
				<h2 class="group-hover:text-primary mb-1 text-2xl font-semibold transition-colors">
					Product
				</h2>

				<p class="text-base-content/80 mb-4">
					Think about product-market fit, demand for your product, go-to market, success metrics.
				</p>

				<ul class="flex items-center gap-2">
					<li>
						<a href="/guides/product" class="btn btn-soft btn-primary rounded-full"
							>View Framework</a>
					</li>
					<li>
						<a href="/guides/product-plan" class="btn btn-soft btn-primary rounded-full"
							>Product Plan</a>
					</li>
				</ul>
			</div>
		</article>

		<article
			class="group card bg-base-card border-base-content/10 hover:border-primary/40 border transition-all hover:shadow-lg">
			<div class="card-body">
				<div class="h-20 w-20 shrink-0">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						class="streamline-flex-color:target size-20 hue-rotate-130"
						viewBox="0 0 14 14"
						><!-- Icon from Flex color icons by Streamline - https://creativecommons.org/licenses/by/4.0/ --><g
							fill="none"
							><path
								fill="#d7e0ff"
								fill-rule="evenodd"
								d="m8.947 4.526l.124.403l.404.125a2 2 0 0 0 2.003-.497l.81-.81c.461.888.701 1.98.701 3.258c0 3.837-2.158 5.995-5.994 5.995C3.158 13 1 10.842 1 7.005C1 3.17 3.158 1.011 6.995 1.011c1.278 0 2.37.24 3.258.701l-.81.81a2 2 0 0 0-.496 2.004"
								clip-rule="evenodd" /><path
								stroke="#4147d5"
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12.99 7.005c0 3.837-2.16 5.995-5.996 5.995S1 10.842 1 7.005C1 3.17 3.158 1.011 6.995 1.011" /><path
								stroke="#4147d5"
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M6.035 3.988c-1.391.316-2.158 1.368-2.158 3.017C3.877 9 5 10.122 6.995 10.122c1.729 0 2.803-.843 3.058-2.368m-3.058-.749l2.077-2.078" /><path
								fill="#fff"
								d="m9.071 4.93l-.124-.404a2 2 0 0 1 .497-2.004L10.965 1l.48 1.555l1.555.48l-1.522 1.522a2 2 0 0 1-2.003.497z" /><path
								stroke="#4147d5"
								stroke-linecap="round"
								stroke-linejoin="round"
								d="m9.071 4.93l-.124-.404a2 2 0 0 1 .497-2.004L10.965 1l.48 1.555l1.555.48l-1.522 1.522a2 2 0 0 1-2.003.497z" /></g
						></svg>
				</div>
				<h2 class="group-hover:text-primary mb-1 text-2xl font-semibold transition-colors">
					Problems
				</h2>

				<p class="text-base-content/80 mb-4">
					Investigate issues with identifying the problem you're solving, who you're trying to help,
					user pain points.
				</p>

				<ul class="flex items-center gap-2">
					<li>
						<a href="/guides/problems" class="btn btn-soft btn-primary rounded-full">
							View Framework
						</a>
					</li>
				</ul>
			</div>
		</article>

		<!-- Research Card -->
		<article
			class="group card bg-base-card border-base-content/10 hover:border-primary/40 border transition-all hover:shadow-lg">
			<div class="card-body">
				<div class="size-20 shrink-0">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						class="streamline-flex-color:magnifying-glass-flat size-20 hue-rotate-150"
						viewBox="0 0 14 14"
						><!-- Icon from Flex color icons by Streamline - https://creativecommons.org/licenses/by/4.0/ --><g
							fill="none"
							><path
								fill="#8fbffa"
								d="M6.002 11.109c3.201 0 5.002-1.8 5.002-5.002s-1.8-5.002-5.002-5.002S1 2.905 1 6.107s1.8 5.002 5.002 5.002" /><path
								fill="#2859c5"
								fill-rule="evenodd"
								d="M2.01 6.012c0-1.416.395-2.382 1.008-2.994c.612-.613 1.578-1.008 2.994-1.008s2.382.395 2.995 1.008c.612.612 1.007 1.578 1.007 2.994s-.395 2.382-1.007 2.995c-.613.612-1.578 1.007-2.995 1.007c-1.416 0-2.382-.395-2.994-1.007c-.613-.613-1.008-1.578-1.008-2.995M6.012.01c-1.785 0-3.32.505-4.409 1.593S.01 4.227.01 6.013c0 1.784.505 3.32 1.593 4.408s2.624 1.593 4.41 1.593c1.392 0 2.632-.307 3.627-.96l2.638 2.638a1 1 0 0 0 1.414-1.414l-2.637-2.637c.652-.996.96-2.236.96-3.629c0-1.785-.506-3.32-1.594-4.409S7.797.01 6.012.01"
								clip-rule="evenodd" /></g
						></svg>
				</div>
				<h2 class="group-hover:text-primary mb-1 text-2xl font-semibold transition-colors">
					Research
				</h2>

				<p class="text-base-content/80 mb-4">Do your own research.</p>

				<ul class="flex items-center gap-2">
					<li>
						<a href="/guides/research" class="btn btn-soft btn-primary rounded-full">
							View Framework
						</a>
					</li>
				</ul>
			</div>
		</article>

		<!-- Cost Card -->
		<article
			class="group card bg-base-card border-base-content/10 hover:border-primary/40 border transition-all hover:shadow-lg">
			<div class="card-body">
				<div class="size-20 shrink-0">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						class="streamline-flex-color:dollar-increase-flat size-20 hue-rotate-150"
						viewBox="0 0 14 14"
						><!-- Icon from Flex color icons by Streamline - https://creativecommons.org/licenses/by/4.0/ --><g
							fill="none"
							fill-rule="evenodd"
							clip-rule="evenodd"
							><path
								fill="#8fbffa"
								d="M5.073 0c-1.59 0-2.866.448-3.746 1.327C.447 2.207 0 3.484 0 5.073C0 6.663.448 7.94 1.327 8.82c.642.642 1.494 1.053 2.526 1.23a10 10 0 0 1 1.14-1.017c.248-.185.55-.383.888-.536a2.9 2.9 0 0 1 1.43-.272a2.6 2.6 0 0 1 1.484.62l.073-.074a2 2 0 0 1 .585-2.185c.194-.166.402-.297.613-.398q.08-.528.08-1.114c0-1.59-.447-2.866-1.327-3.746C7.94.447 6.663 0 5.073 0" /><path
								fill="#2859c5"
								d="M5.04 3.321h.077c.465.008.634.158.683.227a.625.625 0 0 0 1.019-.725c-.256-.36-.648-.586-1.116-.688a.625.625 0 0 0-1.249-.003a1.95 1.95 0 0 0-.813.363a1.51 1.51 0 0 0-.581 1.213c0 .946.91 1.485 1.93 1.63c.443.064.74.16.913.269c.138.087.158.15.158.234c0 .058-.03.164-.189.278c-.16.114-.429.213-.793.213c-.385 0-.662-.09-.822-.191c-.155-.099-.16-.175-.16-.196a.625.625 0 1 0-1.25 0c0 .557.325.987.738 1.25c.251.16.548.27.87.33a.625.625 0 0 0 1.248-.006c.336-.072.642-.201.897-.384c.409-.293.71-.746.71-1.294c0-.591-.311-1.02-.74-1.291c-.395-.25-.901-.377-1.403-.449c-.402-.057-.636-.17-.754-.262a.3.3 0 0 1-.093-.1a.1.1 0 0 1-.01-.031c0-.11.035-.176.104-.23c.082-.065.267-.151.626-.157m5.848 5.799l-.569-.404a.75.75 0 0 1-.053-1.181c.453-.388 1.096-.456 1.597-.418c.533.042 1.122.218 1.59.551a.75.75 0 0 1 .237.276c.257.515.341 1.124.3 1.657c-.039.5-.205 1.126-.658 1.514a.75.75 0 0 1-1.159-.235l-.31-.62a86 86 0 0 1-.902.787a34 34 0 0 1-1.036.862a9 9 0 0 1-.41.308a2 2 0 0 1-.386.226c-.218.09-.465.126-.718.067a1.2 1.2 0 0 1-.56-.31c-.228-.217-.388-.518-.486-.702l-.009-.015l-.013-.026c-.117-.22-.19-.357-.271-.458l-.014-.017a2.2 2.2 0 0 0-.422.254a8.3 8.3 0 0 0-1.002.927a19 19 0 0 0-1.259 1.493a18.5 18.5 0 0 1 .168-2.522c.368-.39.786-.793 1.197-1.1c.206-.153.428-.296.656-.4c.22-.1.505-.19.813-.164c.503.04.835.342 1.035.593c.173.216.31.477.407.659l.03.055l.075.139q.105-.078.24-.185c.275-.216.618-.504.987-.821c.296-.254.605-.525.905-.79M7.02 10.944l.003.002z" /></g
						></svg>
				</div>

				<h2 class="group-hover:text-primary mb-1 text-2xl font-semibold transition-colors">Cost</h2>

				<p class="text-base-content/80 mb-4">
					Vague requirements, cost evaluations based on inflation figures, vendors quoting an arm
					and a leg to change a hero banner.
				</p>

				<ul class="flex items-center gap-2">
					<li>
						<a href="/guides/cost" class="btn btn-soft btn-primary rounded-full">
							View Framework
						</a>
					</li>
				</ul>
			</div>
		</article>
	</div>
</NewWrap>
