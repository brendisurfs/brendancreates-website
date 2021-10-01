<script lang="ts">
	console.log("this is the main app area.");

	import Router from "svelte-spa-router";
	import Navbar from "./components/Navbar.svelte";
	// pages
	import HomePage from "./pages/Home.svelte";
	import AboutPage from "./pages/About.svelte";
	import WorkPage from "./pages/WorkPage.svelte";
	import Footer from "./components/Footer.svelte";
	import ContactPage from "./pages/ContactPage.svelte";
	import Layout from "./components/Layout.svelte";

	// routes
	const routes = {
		"/": HomePage,
		"/about": AboutPage,
		"/work": WorkPage,
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
		padding: 1em;
		text-align: center;
		/* max-width: 240px; */
		margin: 0;
		height: 100%;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
