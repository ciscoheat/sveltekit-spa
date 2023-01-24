<main>
	<section>
		<slot />
	</section>
</main>

<style>
	:global(body) {
		border: 0;
		margin: 0;
	}

	main {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	section {
		max-width: 768px;
	}
</style>
