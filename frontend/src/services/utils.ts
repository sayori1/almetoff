import { writable } from 'svelte/store';

export let isMobile = writable(false);

export async function onInit() {
	isMobile.set(window.screen.height > window.screen.width);
	console.log(isMobile);
}
