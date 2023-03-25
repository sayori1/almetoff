<script lang="ts">
	import IconButton from '$lib/widgets/IconButton.svelte';
	import { getProjects } from '../../api/project';
	import type { Project } from '../../models/project';
	import { onMount } from 'svelte';
	import Spacer from '$lib/widgets/Spacer.svelte';
	import { goto } from '$app/navigation';

	let projects: Project[];

	onMount(async () => {
		projects = await getProjects();
	});
</script>

<h1>проекты</h1>

{#if projects}
	{#each projects ? projects : [] as project, index}
		<div class="card">
			<h2>{project.name}</h2>
			<p>
				{project.description}
			</p>
			<div style="flex:1" />
			<button
				on:click={() => {
					goto('projects/' + project._id);
				}}>подробнее</button
			>
		</div>
	{/each}
{:else}
	<!-- else content here -->
{/if}

<style>
	.card {
		border-radius: 10px;
		border: 1px grey solid;
		height: 200px;
		padding-left: 20px;
		padding-right: 20px;
		padding-bottom: 20px;
		display: flex;
		flex-flow: column;
		flex-direction: column;
		align-items: flex-start;
	}
</style>
