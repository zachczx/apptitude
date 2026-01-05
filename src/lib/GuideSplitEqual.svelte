<script lang="ts">
	let { content, example } = $props();
</script>

<div class="col-span-2 space-y-4 py-4 pe-8">
	{@render content()}
</div>
<div
	class="bg-primary-content/40 col-span-2 mx-4 my-2 content-center space-y-4 rounded-2xl px-4 py-4 saturate-50 hover:saturate-100">
	<h4 class="border-b-base-100 col-span-1 border-b-2 font-bold">Example</h4>
	{@render example()}
</div>
