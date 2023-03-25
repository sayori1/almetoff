<div class="grid">
	<slot />
</div>

<style>
	.grid {
		margin-top: 20px;
		width: 100%;
		display: grid;
		justify-content: center;
		grid-template-columns: 1fr 1fr 1fr;
	}
</style>
