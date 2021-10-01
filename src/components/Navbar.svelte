<script lang="ts">
	console.log("this is the navbar");

	import { link } from "svelte-spa-router";

	interface RouteInterface {
		name: string;
		route: string;
	}

	const routes: RouteInterface[] = [
		{ name: ">", route: "/" },
		{ name: "About", route: "/about" },
		{ name: "Work", route: "/work" },
	];
</script>

<nav class="navbar">
	<div class="brand">
		<a href="/" use:link>
			<h1>brendancreates</h1>
		</a>
	</div>
	<div class="navbar-menu">
		{#each routes as route}
			<div class="navbar-item">
				<a href={route.route} use:link>
					<button class="button"> {route.name}</button>
				</a>
			</div>
		{/each}
	</div>
</nav>

<style>
	a {
		text-decoration: none;
		color: black;
	}
	.brand {
		text-transform: uppercase;
		color: black;
		font-weight: bold;
		font-size: large;
	}
	.navbar {
		display: flex;
		flex-direction: row;
		align-items: stretch;
		justify-content: space-between;
	}

	.navbar-menu {
		padding: 1em;
		display: flex;
		flex-direction: row;
		writing-mode: sideways-lr;
	}

	/* button styling */

	button {
		border: none;
		background: none;
	}
	button:hover {
		color: blue;
	}
	button:active {
		background: none;
		color: darkblue;
	}
</style>
