<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import SizedBox from './SizedBox.svelte';

	export let value: any;
	const dispatch = createEventDispatcher();
	export let title: string;
	export let type: 'textarea' | 'text' = 'text';

	function submit(data: any) {
		dispatch('submit', data);
	}
</script>

<br />
<a>{title}</a>
<SizedBox height="5px" />
<form on:submit|preventDefault={submit}>
	{#if type == 'text'}
		<input bind:value on:blur={submit} />
	{:else if type == 'textarea'}
		<textarea bind:value />
	{/if}
</form>

<style>
	input,
	textarea {
		max-width: 99%;
		width: 99%;
	}
</style>
