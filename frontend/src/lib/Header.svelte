<script>
	import Row from './widgets/Row.svelte';
	import SizedBox from './widgets/SizedBox.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<div
	style="background-color:#fbfbfa; position: fixed; top:0px; width: 100%; border-bottom: 1px solid #f5f5f4;"
>
	<Row>
		<SizedBox width="1vw" />
		<h2 style="margin: 10px; font-size: 3vh">almetoff</h2>
		<SizedBox width="4vw" />
		<a href="/journal">журнал</a>
		<a href="/projects">проекты</a>
		<a href="/me">про меня</a>
		<a href="/qa">QA</a>
	</Row>
</div>

<style>
	a {
		cursor: pointer;
		margin-right: 3%;
	}
	a:hover {
		color: rgb(71, 71, 71);
	}
	a {
		background-color: transparent;
		text-decoration: none;
	}

	a:hover {
		text-decoration: none;
	}
</style>
