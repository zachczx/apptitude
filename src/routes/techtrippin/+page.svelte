<script>
	import Wip from "$lib/WIP.svelte";
	import { techtrippin } from "./data_techtrippin";
	import consultant from "$lib/assets/consultant.webp?enhanced&w=200;150;70";
	import yesChad from "$lib/assets/yeschad.webp?enhanced&w=200;150;70";
</script>


<div class="mb-10 text-center lg:mb-20">
	<h1
		class="inline-block bg-gradient-to-r from-emerald-200 via-orange-200 to-pink-200 bg-clip-text py-3 text-transparent"
	>
		Tech Trippin'
	</h1>
	<div><i>Decrypting garbled tech jargon-gibberish (wannabe) "tech" consultants, designed to use many words to say absolutely nothing.</i></div>
</div>
<div
	class="grid grid-cols-1 justify-items-center gap-x-8 gap-y-8 px-5 lg:grid-cols-2 lg:px-40 xl:grid-cols-1"
>
{#each techtrippin as techtrippinItem}


<div>
<div class="chat chat-start">
	<div class="chat-image avatar">
	  <div class="w-10 lg:w-[200px] rounded-full">
		<enhanced:img alt="Professional Tech Consultant" src={consultant} 
		sizes="(min-width:1920px) 200px, (min-width:1080px) 150px, (min-width:768px) 70px"
		/>
	  </div>
	</div>
	<div class="chat-header">
	</div>
	<div class="chat-bubble">{techtrippinItem.prompt}</div>
  </div>
  <div class="chat chat-end">
	<div class="chat-image avatar">
		<div class="w-10 lg:w-[200px] rounded-full">
		<enhanced:img alt="Chad" src={yesChad} 
		sizes="(min-width:1920px) 200px, (min-width:1080px) 150px, (min-width:768px) 70px"
		/>	  </div>
	</div>
	<div class="chat-header">
	</div>
	<div class="chat-bubble">{techtrippinItem.response}</div>
  </div>
</div>
{/each}
</div>
