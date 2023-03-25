import { get, writable } from 'svelte/store';

//you can get access to this variable in any place of app
export let user = writable(null);

export async function onInit() {
	//initialization
}
