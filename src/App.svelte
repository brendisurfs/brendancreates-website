<script lang="ts">
	console.log("this is the main app area.");

	import Router from "svelte-spa-router";
	import Navbar from "./components/Navbar.svelte";
	// pages
	import HomePage from "./pages/Home.svelte";
	import AboutPage from "./pages/About.svelte";
	import WorkPage from "./pages/WorkPage.svelte";

	// routes
	const routes = {
		"/": HomePage,
		"/about": AboutPage,
		"/work": WorkPage,
	};
</script>

<main>
	<Navbar />
	<Router {routes} />
</main>

<style>
	main {
		padding: 1em;
		text-align: center;
		max-width: 240px;
		margin: 0;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
