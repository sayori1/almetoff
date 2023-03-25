<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import Row from './Row.svelte';

	export let options = ['Дизайн', 'Программирование', 'IT', 'Продуктивность'];
	export let selected = -1;
	let dispatch = createEventDispatcher();

	function handleClick(i: number) {
		if (i == selected) selected = -1;
		else selected = i;
		dispatch('select', {
			i: i
		});
	}
</script>

<div class="container">
	{#each options as option, i}
		<div style="margin-right: 10px; cursor: pointer" on:click={() => handleClick(i)}>
			{#if selected == i}
				{option}
			{:else}
				<div style="color:#7C7C7C">{option}</div>
			{/if}
		</div>
	{/each}
</div>

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
	}
</style>
