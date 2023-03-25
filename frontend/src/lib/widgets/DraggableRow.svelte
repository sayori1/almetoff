<script lang="ts">
	import { onMount } from 'svelte';

	let isDown = false;
	let startX: any;
	let scrollLeft: any;

	onMount(() => {
		const slider: any = document.querySelector('.items');
		if (slider != null) {
			slider.addEventListener('mousedown', (e: any) => {
				isDown = true;
				slider.classList.add('active');
				startX = e.pageX - slider.offsetLeft;
				scrollLeft = slider.scrollLeft;
			});
			slider.addEventListener('mouseleave', () => {
				isDown = false;
				slider.classList.remove('active');
			});
			slider.addEventListener('mouseup', () => {
				isDown = false;
				slider.classList.remove('active');
			});
			slider.addEventListener('mousemove', (e: any) => {
				if (!isDown) return;
				e.preventDefault();
				const x = e.pageX - slider.offsetLeft;
				const walk = (x - startX) * 1; //scroll-fast
				slider.scrollLeft = scrollLeft - walk;
			});
		}
	});
</script>

<div class="items">
	<slot />
</div>

<style>
	.items {
		position: relative;
		width: 100%;
		overflow-x: hidden;
		overflow-y: hidden;
		white-space: nowrap;
		transition: all 0.2s;
		transform: scale(0.98);
		will-change: transform;
		user-select: none;
		cursor: pointer;
		display: flex;
		flex-direction: row;
	}

	.items.active {
		background: rgba(255, 255, 255, 0.3);
		cursor: grabbing;
		cursor: -webkit-grabbing;
		transform: scale(1);
	}
</style>
