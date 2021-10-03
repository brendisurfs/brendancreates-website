<script lang="ts">
	import { link } from "svelte-spa-router";
	import { onMount } from "svelte";
	onMount(() => {
		console.log("mobile nav is active ");
	});
</script>

<!-- modify to open and close -->
<div class="container">
	<div class="brand">
		<a href="/" use:link>
			<h1>brendancreates</h1>
			<p>| creative developer</p>
		</a>
	</div>

	<button class="mobile-menu">
		<button on:click> Menu </button>
	</button>
</div>

<style>
	a {
		text-decoration: none;
		font-style: normal;
	}
	.container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.brand a {
		text-transform: uppercase;
		color: black;
		font-weight: bold;
		font-size: xx-small;
		display: inline-flex;
		flex-direction: row;
		align-items: center;
	}
	.brand p {
		font-weight: lighter;
		padding: 0.5em;
	}
	button {
		border: none;
		background: none;
	}
	button:hover {
		color: #0062ff;
	}
	.mobile-menu {
		display: flex;
		justify-content: center;
	}
</style>
