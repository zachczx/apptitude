<script>
	let section, prevURL, nextURL;
</script>

<div class="grid grid-cols-2 font-bold">
	<div class="justify-self-start">
		<a href="/cacheup/{prevURL}"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-circle-chevron-left inline align-top"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13 15l-3 -3l3 -3" /><path
					d="M21 12a9 9 0 1 0 -18 0a9 9 0 0 0 18 0z" /></svg> Previous</a>
	</div>
	<div class="justify-self-end">
		<a href="/cacheup/{nextURL}"
			>Next <svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-circle-chevron-right inline align-top"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11 9l3 3l-3 3" /><path
					d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0z" /></svg
			></a>
	</div>
</div>
