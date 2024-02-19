<script lang="ts">
	import ColorBlock from "$lib/components/ColorBlock.svelte";
	import { Color } from "$lib/interfaces/Color";
  import {guessed_color, actual_color} from '$lib/stores/store'

  import {Score} from '$lib/math/calculateScore'
	import InfoBlock from "$lib/components/InfoBlock.svelte";
	import { RandomColorFactory } from "$lib/helpers/generateRandomColor";

  let gameEnded = false

  $: score = Score.calculateScore($actual_color, $guessed_color)

  function resetGame(){
    $actual_color = RandomColorFactory.generateRandomColor()
    $guessed_color = new Color(0, 0, 0)
    gameEnded = false
  }

</script>

<p class="text-3xl text-center my-3">Match the color!</p>

<div class="w-full grid grid-cols-3 gap-3 place-items-center">

<div class="col-start-1 row-span-3">
  <InfoBlock></InfoBlock>
</div>

  <div class="col-start-2 flex flex-row justify-between w-full">
    <ColorBlock given_color={$actual_color}></ColorBlock>
    <ColorBlock given_color={$guessed_color}></ColorBlock>
  </div>
<button class="m-1 rounded-lg font-bold bg-blue-200 p-3 col-start-2" on:click={() => gameEnded = true}>Check</button>
<div class="row-start-4 col-start-2">
{#if gameEnded}
  <p class="text-3xl">Your score is {score}%</p>
  <button on:click={() => resetGame()}>Play again</button>
{/if}</div>

<div class="row-start-3 col-start-2">

<p>R: <input class="w-64" type="range" max="255" min="0" bind:value={$guessed_color.r} disabled={gameEnded}></p>
<p>G: <input class="w-64" type="range" max="255" min="0" bind:value={$guessed_color.g} disabled={gameEnded}></p>
<p>B: <input class="w-64" type="range" max="255" min="0"  bind:value={$guessed_color.b} disabled={gameEnded}></p>
</div>

</div>
