<script lang="ts">
	let x: number = 0;
	let y: number = 0;

	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { createEventDispatcher } from 'svelte';
	import { prevent_default } from 'svelte/internal';

	const dispatch = createEventDispatcher();

	const angle = tweened(0, {
		duration: 400,
		easing: cubicOut
	});

	let moving = false;

	function start(e: any) {
		moving = true;
		dispatch('startMoving', { x: e.clientX, y: e.clientX });
	}
	function stop(e: any) {
		x = y = 0;
		angle.set(0);
		if (moving) dispatch('stopMoving', { x: e.clientX, y: e.clientX });
		moving = false;
	}
	function move(e: any) {
		if (moving) {
			x += e.movementX;
			y += e.movementY;
			angle.set(e.movementX);
			dispatch('moving', { x: e.clientX, y: e.clientY });
		}
	}
	function rightClick() {
		dispatch('rightClick');
	}
</script>

<svelte:window on:mousemove={move} on:mouseup={stop} />
<div
	class="draggable"
	style="left:{x}px; top:{y}px; transform: rotate({$angle}deg)"
	on:mousedown={start}
	on:contextmenu|preventDefault={rightClick}
>
	<slot />
</div>

<style>
	.draggable {
		user-select: none;
		position: relative;
	}
</style>
