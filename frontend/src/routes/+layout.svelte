<script lang="ts">
	import Header from '$lib/Header.svelte';
	import SizedBox from '$lib/widgets/SizedBox.svelte';
	import { onMount } from 'svelte';
	import { isMobile, onInit } from '../services/utils';

	import './style.css';

	onMount(() => {
		onInit();
	});
</script>

<Header />
<SizedBox height="50px" />
<main style="width: {$isMobile ? '80%' : '50%'}">
	<slot />
</main>
