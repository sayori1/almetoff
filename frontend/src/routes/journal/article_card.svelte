<script lang="ts">
	import { imagePath } from '../../api/api';
	import type { Article } from 'src/models/article';
	import { colors } from './constants';
	import { goto } from '$app/navigation';
	import Eye from '$lib/icons/eye.svelte';

	export let article: Article;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="card"
	on:click={() => {
		goto('journal/' + article._id);
	}}
>
	<div class="card-header">
		<img src={imagePath(article.image)} />
	</div>
	<div class="card-body">
		<div class="tags">
			{#each article.tags as tag}
				<span class="tag" style="background-color: {colors[tag]}">{tag}</span>
			{/each}
		</div>
		<h4>{article.name}</h4>
		<div class="user">
			<img src={imagePath('no-image.png')} alt="user" />
			<div class="user-info">
				<h5>Admin</h5>
				<small>{article.createdAt.substring(0, 10).replaceAll('-', '.')}</small>
			</div>
		</div>
	</div>
</div>

<style>
	.tags {
		display: flex;
		flex-wrap: wrap;
	}
	body {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0;
		background-color: #f7f8fc;
		font-family: 'Roboto', sans-serif;
		color: #10182f;
	}
	.container {
		display: flex;
		width: 1040px;
		justify-content: space-evenly;
		flex-wrap: wrap;
	}
	.card {
		margin: 10px;
		background-color: #fff;
		border-radius: 5px;
		box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
		overflow: hidden;
		width: 90%;
		cursor: pointer;
	}
	.card:hover {
		box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.2);
		transition: 0.3s;
	}
	.card-header img {
		width: 100%;
		height: 150px;
		object-fit: cover;
	}
	.card-body {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		padding: 20px;
		min-height: 100px;
	}

	.tag {
		background: #cccccc;
		border-radius: 50px;
		font-size: 12px;
		margin: 0;
		color: #fff;
		padding: 2px 10px;
		text-transform: uppercase;
		cursor: pointer;
	}

	.card-body p {
		font-size: 13px;
		margin: 0 0 40px;
	}
	.user {
		display: flex;
		margin-top: auto;
	}

	.user img {
		border-radius: 50%;
		width: 40px;
		height: 40px;
		margin-right: 10px;
	}
	.user-info h5 {
		margin: 0;
	}
	.user-info small {
		color: #545d7a;
	}
</style>
