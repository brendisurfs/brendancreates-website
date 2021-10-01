<script lang="ts">
	import { onMount } from "svelte";

	onMount(() => {
		console.log("the footer has loaded");
	});
	const footerItems = [{ name: "github", link: "github.com/brendisurfs" }];
</script>

<div class="container">
	<footer>
		<!-- {#each footerItems as item}
			<div>
				{item.name}
			</div>
			{/each} -->
		&copy;brendan prednis 2021
	</footer>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		position: absolute;
		justify-items: center;
		bottom: 0;
		width: 100%;
	}
	footer {
		position: absolute;
		left: 45%;
		bottom: 0;
		padding: 0.1em;
		height: 0vh;
	}
</style>
