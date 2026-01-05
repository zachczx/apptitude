<script lang="ts">
	let { content } = $props();
</script>

<div class="col-span-3 space-y-4 py-4 pe-8">
	{@render content()}
</div>
<div class="col-span-1 mx-4 content-center space-y-4"></div>
