<script>
import {info} from "./data.js"
</script>

<div class="grid grid-cols-4 justify-items-center gap-y-6 px-[3rem]">

    <!--
    {#each Object.entries(data) as [category, value]}
    <div class="card w-full bg-base-300 shadow-xl">
        <figure><img src="" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">
            {category}
          </h2>
            <ul class="list-disc">
                {#each value as item}
                <li>{item}</li>
                {/each}
            </ul>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">XXX</div> 
            <div class="badge badge-outline">YYY</div>
          </div>
        </div>
    </div>
    {/each}-->

    {#each info as item}
    {#if item.name}
    <div class="card w-96 bg-base-300 shadow-xl">
        <figure><img src="" alt="" /></figure>
        <div class="card-body">
          <h2 class="card-title">
            {item.name}
          </h2>
          <p>{#each item.topics as topic}
                <span class="btn btn-primary btn-xs">{topic}</span>
            {/each}
        </p>
        <ul class="list-disc">
            {#each item.questions as question}
            <li>{question}</li>
            {/each}
        </ul>
        <ul class="list-disc">
            {#each item.objectives as objective}
            <li>{objective}</li>
            {/each}
        </ul>
        </div>
      </div>
      {/if}
      {/each}
</div>