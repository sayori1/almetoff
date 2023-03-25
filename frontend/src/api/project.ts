import type { Project } from 'src/models/project';
import { get, post, put, _delete } from './api';

export async function getProjects(): Promise<Project[]> {
	const response = await get(`project`);

	return response;
}

export async function getProject(id: string): Promise<Project> {
	let response = null;
	response = await get(`project/${id}`);

	return response;
}
