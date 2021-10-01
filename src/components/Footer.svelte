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
		justify-items: center;
		width: 100%;
	}
	footer {
		color: white;
		background-color: #cc6666;
	}
</style>
