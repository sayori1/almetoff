<script lang="ts">
	import { showPopup } from '../../services/popup';

	import { baseURL, imagePath } from '../../api/api';

	let fileVar: any;
	export let types: string;
	export let value: string = '';

	let state: 'uploading' | 'uploaded' | 'error' | 'default' = 'default';

	function submitForm(e: any) {
		state = 'uploading';
		e.preventDefault();
		const dataArray = new FormData();
		dataArray.append('file', fileVar[0]);
		fetch(baseURL + 'file/upload', {
			method: 'POST',
			body: dataArray
		})
			.then(async (response) => {
				showPopup('Файл успешно загружен!');
				state = 'uploaded';
				value = await response.text();
			})
			.catch((error) => {
				showPopup(`Ошибка ${error}`);
				state = 'error';
			});
	}
</script>

<div>
	<br />
	{#if state == 'default'}
		<form on:submit={submitForm}>
			<input type="file" bind:files={fileVar} on:change={submitForm} accept={types} />
		</form>
	{:else if state == 'uploading'}
		<a>Загрузка...</a>
	{:else if state == 'uploaded'}
		<a>Загружено: {fileVar[0].name}</a>
	{/if}

	{#if value != undefined && value != ''}
		<img src={imagePath(value)} width="100px" height="100px" />
	{/if}
</div>
