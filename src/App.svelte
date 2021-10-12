<script lang="ts">
    import Router from 'svelte-spa-router';
    // pages
    import HomePage from './pages/Home.svelte';
    import AboutPage from './pages/AboutPage.svelte';
    import WorkPage from './pages/WorkPage.svelte';
    import ContactPage from './pages/ContactPage.svelte';
    import Layout from './components/Layout.svelte';
    import VisualsPage from './pages/VisualsPage.svelte';
    import BlogPage from './pages/BlogPage.svelte';

    // routes
    const routes = {
        '/': HomePage,
        '/blog': BlogPage,
        '/work': WorkPage,
        '/about': AboutPage,
        '/contact': ContactPage,
        '/visual': VisualsPage,
    };

</script>

<main>
    <Layout>
        <Router {routes} />
    </Layout>
</main>

<style>
    main {
        margin: 0;
        height: 100%;
        width: 100%;
        text-align: center;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
