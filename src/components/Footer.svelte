<script lang="ts">
	import { onMount } from "svelte";

	onMount(() => {
		console.log("the footer has loaded");
	});
	const footerItems = [{ name: "github", link: "github.com/brendisurfs" }];
</script>

<footer>
	<!-- {#each footerItems as item}
		<div>
			{item.name}
		</div>
	{/each} -->
	&copy;brendan prednis 2021
</footer>

<style>
	footer {
		padding: 2em;
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 3vh;
	}
</style>
