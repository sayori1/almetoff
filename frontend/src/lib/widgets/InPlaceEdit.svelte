<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	export let value: any,
		required = true;

	const dispatch = createEventDispatcher();
	let editing = false,
		original: any;

	onMount(() => {
		original = value;
	});

	function edit() {
		editing = true;
	}

	function submit() {
		if (value != original) {
			dispatch('submit', value);
		}

		editing = false;
	}

	function keydown(event: any) {
		if (event.key == 'Escape') {
			event.preventDefault();
			value = original;
			editing = false;
		}
	}
	function init(el: any) {
		el.focus();
	}
</script>

{#if editing}
	<form on:submit|preventDefault={submit} on:keydown={keydown} class="form">
		<textarea bind:value on:blur={submit} {required} use:init />
	</form>
{:else}
	<div on:click={edit}>
		{value}
	</div>
{/if}

<style>
	textarea {
		border: none;
		background: none;
		font-size: inherit;
		color: inherit;
		font-weight: inherit;
		text-align: inherit;
		box-shadow: none;
		line-height: normal;
		text-indent: 0px;
	}
	textarea:focus {
		all: inherit;
		margin: 0px;
		padding: 0px;
		height: inherit;
		width: 100%;
	}
</style>
