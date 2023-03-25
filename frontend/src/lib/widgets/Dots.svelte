<script lang="ts">
	export let count = 0;
	export let current = 0;
</script>

<div class="dot_holder">
	{#each Array(count) as page, i}
		<div
			class="dot"
			class:dot_active={current == i}
			on:click={() => {
				current = i;
			}}
		/>
	{/each}
</div>

<style>
	.dot_holder {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.dot {
		border-radius: 100%;
		background-color: rgb(183, 183, 183);
		width: 10px;
		height: 10px;
		margin-right: 5px;
	}
	.dot:hover {
		background-color: grey;
	}
	.dot_active {
		padding: 1px;
	}
</style>
