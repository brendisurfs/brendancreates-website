<script lang="ts">
	import { onMount } from "svelte";

	onMount(() => {
		console.log("the footer has loaded");
	});
	const footerItems = [{ name: "github", link: "github.com/brendisurfs" }];
</script>

<footer class="container">
	<!-- <p>github</p> -->
	<p>&copy;brendan prednis 2021</p>
</footer>

<style>
	.container {
		display: flex;
		justify-content: space-evenly;
		width: 100%;
		bottom: 0;
		margin: 0;
	}
	footer {
		width: 100%;
		/* background: #0062ff; */
		display: flex;
		justify-content: space-evenly;
	}
</style>
