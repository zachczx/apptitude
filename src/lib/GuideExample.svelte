<script lang="ts">
	let { example } = $props();
</script>

<div class="bg-primary-content/40 mx-4 my-6 content-center space-y-4 rounded-2xl px-4 py-4">
	<h4 class="border-b-base-100 border-b-2 text-lg font-bold">Example</h4>
	{@render example()}
</div>
