<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import InPlaceEdit from './InPlaceEdit.svelte';
	import SizedBox from './SizedBox.svelte';
	export let value: any;
	const dispatch = createEventDispatcher();
	export let title: string;
</script>

<div style="display:flex; flex-direction:row">
	<a>{title}</a>
	<SizedBox width="5px" />
	<InPlaceEdit bind:value on:submit={(v) => dispatch('submit', v)} />
</div>
