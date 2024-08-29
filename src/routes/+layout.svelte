<script>
	import '../app.css';
	import PageTransition from '$lib/Transition.svelte';
	import TablerSquareRoundedPlusFilled from '$lib/assets/svg/TablerSquareRoundedPlusFilled.svelte';
	import { guides } from './guides/data_guides';
	import { info } from './learn/data_learn';
	import TablerChevronRight from '$lib/assets/svg/TablerChevronRight.svelte';
	import { onNavigate } from '$app/navigation';
	import { matchUrl } from '$lib/helpers';
	let { data } = $props();
	let viewTransition = $state('');
	onNavigate((navigation) => {
		if (!document.startViewTransition) {
			viewTransition = false;
			return;
		}

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<slot />

<footer class="footer footer-center gap-y-2 rounded bg-base-200 p-3 pt-5 text-base-content">
	<aside>
		<p class="mb-2 text-base">
			Copyright © 2024 Zixian Chen. All rights reserved. All views expressed on Apptitude are
			solely mine.
		</p>
	</aside>
	<div class="grid grid-cols-1 md:grid-flow-col md:gap-4">
		<div class="font-bold">My App Junkyard</div>
		<div class="z-10">
			<a href="https://abbreviation.zixian.dev" class="hover:text-primary"
				><TablerSquareRoundedPlusFilled
					class="mb-1 me-1 ms-2 inline fill-primary" />Abbreviation</a>
			<a href="https://titude.app/" class="hover:text-primary"
				><TablerSquareRoundedPlusFilled class="mb-1 me-1 ms-2 inline fill-primary" />Apptitude</a>
			<a href="https://appraize.zixian.dev/" class="hover:text-primary"
				><TablerSquareRoundedPlusFilled class="mb-1 me-1 ms-2 inline fill-primary" />Appraize</a>
			<a href="https://abbreviation.zixian.dev/" class="hover:text-primary"
				><TablerSquareRoundedPlusFilled
					class="mb-1 me-1 ms-2 inline fill-primary" />Abbreviation</a>
			<a href="https://app.zixian.dev/eatyourmeds/" class="hover:text-primary"
				><TablerSquareRoundedPlusFilled class="mb-1 me-1 ms-2 inline fill-primary" />Eat Your
				Medicine</a>
			<a href="https://app.zixian.dev/rank/" class="hover:text-primary"
				><TablerSquareRoundedPlusFilled class="mb-1 me-1 ms-2 inline fill-primary" />Rank a Mate</a>
			<a href="https://btonomics.com/" class="hover:text-primary"
				><TablerSquareRoundedPlusFilled class="mb-1 me-1 ms-2 inline fill-primary" />Btonomics</a>
		</div>
	</div>
	<div class="grid grid-cols-1 md:grid-flow-col md:gap-4">
		<div class="font-bold">Socials</div>
		<div class="z-10">
			<a href="https://www.linkedin.com/in/zixianchen/" class="hover:text-primary"
				><TablerSquareRoundedPlusFilled class="mb-1 me-1 ms-2 inline fill-primary" /> LinkedIn</a>
			<a href="https://zixianchen.com/" class="hover:text-primary"
				><TablerSquareRoundedPlusFilled class="mb-1 me-1 ms-2 inline fill-primary" /> Website</a>
		</div>
	</div>
</footer>

<style>
	/** {
		outline: 1px solid #f00 !important;
	}*/

	@media (min-width: 1281px) {
		@keyframes fade-in {
			from {
				opacity: 0;
			}
		}

		@keyframes fade-out {
			to {
				opacity: 0;
			}
		}

		@keyframes slide-from-right {
			from {
				transform: translateX(30px);
			}
		}

		@keyframes slide-to-left {
			to {
				transform: translateX(-30px);
			}
		}
		:root::view-transition-old(root) {
			animation:
				90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
				300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
		}

		:root::view-transition-new(root) {
			animation:
				210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
				300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
		}
	}
</style>
