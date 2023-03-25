<script>
	import SizedBox from '$lib/widgets/SizedBox.svelte';
	import Tab from '$lib/widgets/Tab.svelte';

	let option = 0;
</script>

<Tab options={['RUS', 'EN']} bind:selected={option} />

{#if option == 0}
	<h1>привет! 👋</h1>
	<br />
	Я пишу код.
	<br />
	Также стараюсь вести что-то наподобие блога, где делюсь знаниями и мыслями. Увлекаюсь темами личной
	эффективности, музыки и EdTech, играю на фортепиано и стараюсь уехать из России.
	<br />
	Приверженец функционального подхода в программировании.
	<br />
	<br />
	Мой стек технологий:
	<ul>
		<li>Mobile: Flutter</li>
		<li>Web: Svelte, SvelteKit, Typescript, Axios, Vue</li>
		<li>Backend: MongoDB, Nest, Node.js, Strapi</li>
		<li>Gamedev: Godot, Phaser.js</li>
		<li>Math: Mathcad, GNU Octave</li>
	</ul>

	<br />
	Открыт для интересных предложений. Контакты для связи:
{:else}
	<h1>hello! 👋</h1>
	<br />
	I'm a developer.
	<br />

	I also try to keep something like a blog where I share my knowledge and thoughts. I am fascinated
	by the topics of personal I am interested in the topics of personal effectiveness, music and
	EdTech, I play the piano and I am trying to leave Russia.
	<br />
	<br />
	My technology stack:
	<ul>
		<li>Mobile: Flutter</li>
		<li>Web: Svelte, SvelteKit, Typescript, Axios, Vue</li>
		<li>Backend: MongoDB, Nest, Node.js, Strapi</li>
		<li>Gamedev: Godot, Phaser.js</li>

		<li>Math: Mathcad, GNU Octave</li>
	</ul>

	<br />
	Open to interesting suggestions. Contacts for contact:
{/if}

<SizedBox height="20px" />
<div class="badge-container">
	<div class="badge">
		<a href="https://almetoff.ml"
			><img
				alt="almetoff.ml"
				src="https://img.shields.io/static/v1?label=&amp;message=almetoff.ml&amp;color=fsa&amp;labelColor=fd6&amp"
			/></a
		>
	</div>
	<div class="badge">
		<a href="https://t.me/flyingshine"
			><img
				alt="telegram"
				src="https://img.shields.io/static/v1?label=&amp;message=telegram&amp;logo=telegram&amp;color=08c&amp;labelColor=08c"
			/></a
		>
	</div>
	<div class="badge">
		<a href="https://vk.com/almetofff"
			><img
				alt="vkontakte"
				src="https://img.shields.io/static/v1?label=&amp;message=vkontakte&amp;logo=vk&amp;color=07f&amp;labelColor=07f"
			/></a
		>
	</div>
	<div class="badge">
		<a href="https://github.com/sayori1"
			><img
				alt="github"
				src="https://img.shields.io/static/v1?label=&amp;message=github&amp;logo=github&amp;color=333&amp;labelColor=333"
			/>
		</a>
	</div>
	<div class="badge">
		<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
			><!-- YouTube video link, SaveFromNet icon fix --><img
				alt="youtube"
				src="https://img.shields.io/static/v1?label=&amp;message=youtube&amp;color=cd201f&amp;labelColor=cd201f&amp;logo=youtube"
			/>
		</a>
	</div>
</div>

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
