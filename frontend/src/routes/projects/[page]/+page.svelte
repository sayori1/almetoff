<script lang="ts">
	import { page } from '$app/stores';
	import { getProject } from '../../../api/project';
	import type { Project } from '../../../models/project';
	import { onMount } from 'svelte';
	import { imagePath } from '../../../api/api';

	export let project: Project;

	onMount(async () => {
		console.log($page.params);
		project = await getProject($page.params.page);
	});
</script>

{#if project != null}
	<h2>{project.name}</h2>
	{@html project.content}
{:else}
	Загрузка...
{/if}
