<script>
	let { example } = $props();
</script>

<div class="mx-4 my-6 content-center space-y-4 rounded-2xl bg-primary-content/40 px-4 py-4">
	<h4 class="border-b-2 border-b-base-100 text-lg font-bold">Example</h4>
	{@render example()}
</div>
