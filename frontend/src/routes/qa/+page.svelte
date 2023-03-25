<script>
	import SizedBox from '$lib/widgets/SizedBox.svelte';
	import Tab from '$lib/widgets/Tab.svelte';
</script>

<h1>QA</h1>
<br />
<b>Почему?</b>
Потому
<br />
<br />

<b>В чем смысл сайта?</b>
Этот сайт играет своего рода визитной карточки, с помощью которого я могу показать портфолио в наиболее
удобном виде. Блог просто дополнение и не более.
<br />
<br />

<b>Почему almetoff?</b>
Я не горжусь своей фамилией или родом. Это просто лишь псевдоним. Я просто повелся на западную тенденцию
называть бренд фамилией. Сейчас я понимаю, что это было опрометчивое решение, потому что юридически меня
ограничивает.
<br />
<br />

<b>Дизайн похож на дизайн Notion. Это плагиат?</b>
Да, я скопировал цветовую палитру из Notion. Как по мне выглядит очень даже симпатично.
<br />
<br />
<b>На чем написан сайт?</b>
Frontend на sveltekit с SSR, backend на nest. Web сервер - nginx.
<br />

<style>
	span {
		position: absolute;
		font-size: 5vw;
		user-select: none;
	}
	.badge-container {
		justify-content: center;
		display: flex;
		flex-wrap: wrap;
	}
	.badge {
		margin-left: 5px;
		margin-bottom: 5px;
	}
</style>
