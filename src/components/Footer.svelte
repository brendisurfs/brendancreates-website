<script lang="ts">
	import { onMount } from "svelte";

	onMount(() => {
		console.log("the footer has loaded");
	});
	const footerItems = [{ name: "github", link: "github.com/brendisurfs" }];
</script>

<footer>
	{#each footerItems as item}
		<div>
			{item.name}
		</div>
	{/each}
</footer>

<style>
	footer {
		padding: 1em;
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 2vh;
	}
</style>
