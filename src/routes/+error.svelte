<script>
	import { page } from '$app/state';
	import ErrorSpaceship from '$lib/assets/error-alien-spaceship.svg';
	import ErrorAquarium from '$lib/assets/error-aquarium.svg?dataurl';
	import ErrorNaughtyDog from '$lib/assets/error-naughty-dog.svg?dataurl';
</script>

<main class="grid min-h-dvh">
	<div class="grid content-center justify-items-center gap-4">
		<img src={ErrorSpaceship} alt="Error" class="mb-4 h-96 brightness-125 hue-rotate-[110deg]" />
		<h1 class="text-4xl lg:text-6xl">Oops, an error!</h1>
		<p>This page wasn't found. Try something else.</p>
	</div>
</main>
