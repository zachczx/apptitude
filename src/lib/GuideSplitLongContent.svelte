<script>
	let { content, example } = $props();
</script>

<div class="col-span-3 space-y-4 py-4 pe-8">
	{@render content()}
</div>
<div
	class="col-span-1 mx-4 content-center space-y-4 rounded-2xl bg-primary-content/40 px-4 py-4 saturate-50 hover:saturate-100">
	{#if example !== ''}<h4 class="col-span-1 border-b-2 border-b-base-100 font-bold">
			Example
		</h4>{/if}
	{@render example()}
</div>
