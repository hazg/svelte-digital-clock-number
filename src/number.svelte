<script>
  import Digit from './digit.svelte'

  export let value, min

  $: {
    if(value !== undefined){
      value = String(value)
      if(min){ value = value.padStart(min,"!") }
    }
  }
</script>

<div class="digital-number">
  {#if value !== undefined}
    {#each [...value] as digit}
      <span><Digit {digit} /></span>
    {/each}
  {/if}
</div>
<style>
  .digital-number{
    display: flex;
  }
  span{
    padding-left: 5%;
    padding-right: 5%;
  }
</style>