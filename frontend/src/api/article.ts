import type { Article } from 'src/models/article';
import { get, post, put, _delete } from './api';

export async function getArticles(tag: string | null, page: number): Promise<Article[]> {
	let response = [];
	if (tag != null) response = await get(`article?tag=${tag}&offset=${page * 10}`);
	else response = await get(`article?offset=${page * 10}`);

	return response;
}

export async function getArticle(id: string): Promise<Article> {
	let response = null;
	response = await get(`article/${id}`);

	return response;
}

export async function likeArticle(id: string): Promise<Article> {
	let response = null;
	response = await get(`article/${id}/like`);

	return response;
}
