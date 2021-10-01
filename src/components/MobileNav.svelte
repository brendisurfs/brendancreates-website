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

	<div class="mobile-menu">
		<button> X </button>
	</div>
</div>

<style>
	.container {
		background: orange;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 90%;
		position: absolute;
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
</style>
