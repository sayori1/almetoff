<script lang="ts">
	import { page } from '$app/stores';
	import { getArticle, likeArticle } from '../../../api/article';
	import type { Article } from '../../../models/article';
	import { onMount } from 'svelte';
	import SizedBox from '$lib/widgets/SizedBox.svelte';
	import Eye from '$lib/icons/eye.svelte';
	import Row from '$lib/widgets/Row.svelte';
	import Like from '$lib/icons/like.svelte';

	export let article: Article;

	onMount(async () => {
		console.log($page.params);
		article = await getArticle($page.params.page);
	});

	function onLikeButton() {
		article.likesCount += 1;
		likeArticle(article._id);
	}
</script>

<div width="50%">
	{#if article != null}
		<h2>{article.name}</h2>
		{@html article.content}
		<SizedBox height="50px" />
		<Row>
			<Eye />
			<SizedBox width="5px" />
			{article.watchesCount}
			<SizedBox width="20px" />
			<div on:click={onLikeButton}>
				<Like />
			</div>
			<SizedBox width="5px" />
			{article.likesCount}
		</Row>
	{:else}
		Загрузка...
	{/if}
</div>
