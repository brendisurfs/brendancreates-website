<script lang="ts">
	console.log("this is the main app area.");

	import Router from "svelte-spa-router";
	// pages
	import HomePage from "./pages/Home.svelte";
	import AboutPage from "./pages/About.svelte";
	import WorkPage from "./pages/WorkPage.svelte";
	import ContactPage from "./pages/ContactPage.svelte";
	import Layout from "./components/Layout.svelte";

	// routes
	const routes = {
		"/": HomePage,
		"/work": WorkPage,
		"/about": AboutPage,
		"/contact": ContactPage,
	};
</script>

<main>
	<Layout>
		<Router {routes} />
	</Layout>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		margin: 0;
		height: 100%;
		width: 100%;
		text-align: center;
		overflow: auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
