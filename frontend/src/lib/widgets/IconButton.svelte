<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Icon from './Icon.svelte';
	export let name: string;
	export let width = '1rem';
	export let height = '1rem';
	export let focusable: any = false;
	export let color = 'black';
	const dispatch = createEventDispatcher();
</script>

<div
	on:mouseenter={() => (color = 'grey')}
	on:mouseleave={() => (color = 'black')}
	on:mousedown={(e) => {
		dispatch('tap');
	}}
>
	<Icon {name} {width} {height} {focusable} {color} />
</div>
