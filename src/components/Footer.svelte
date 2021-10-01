<script lang="ts">
	import { onMount } from "svelte";

	onMount(() => {
		console.log("the footer has loaded");
	});
	const footerItems = [{ name: "github", link: "github.com/brendisurfs" }];
</script>

<div class="container">
	<footer>
		<div>github</div>
		<div>&copy;brendan prednis 2021</div>
	</footer>
</div>

<style>
	.container {
		display: flex;
		justify-content: space-between;
		width: 100%;
		bottom: 0;
		margin: 0;
	}
	footer {
		width: 100%;
		background: lightgray;
		display: flex;
		justify-content: space-around;
	}
</style>
