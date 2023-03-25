<script lang="ts">
	import { getArticles } from '../../api/article';
	import { onMount } from 'svelte';
	import type { Article } from 'src/models/article';
	import Tab from '$lib/widgets/Tab.svelte';
	import SizedBox from '$lib/widgets/SizedBox.svelte';
	import ArticleCard from './article_card.svelte';
	import { tags } from './constants';
	import { isMobile } from '../../services/utils';

	let articles: Article[];

	let page = 0;
	let selected = -1;

	onMount(async () => {
		loadArticles();
	});

	async function loadArticles() {
		if (selected != -1) articles = await getArticles(tags[selected], page);
		else articles = await getArticles(null, page);
	}

	async function selectTag(i: number) {
		page = 0;
		if (selected == i) selected = -1;
		else selected = i;
		loadArticles();
	}

	async function changePage(newPage: number) {
		page = newPage;
		loadArticles();
	}
</script>

<div >
	<h1>журнал</h1>
	<Tab
		options={tags}
		on:select={(event) => {
			selectTag(event.detail.i);
		}}
	/>
	<SizedBox height="50px" />

	<div class="grid" style="grid-template-columns: {$isMobile ? '1fr' : '1fr 1fr 1fr'}">
		{#each articles ? articles : [] as item, i}
			<ArticleCard article={item} />
		{/each}
	</div>

	<SizedBox height="50px" />

	{#if page > 0}
		<button
			on:click={() => {
				changePage(page - 1);
			}}>пред.</button
		>
	{/if}

	<button
		on:click={() => {
			changePage(page + 1);
		}}>след.</button
	>

	<SizedBox height="50px" />
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		justify-items: center;
		row-gap: 50px;
	}
</style>
