<script lang="ts">
    console.log('this is the navbar');

    import { link } from 'svelte-spa-router';

    interface RouteInterface {
        name: string;
        route: string;
    }

    let homeRoute: RouteInterface = { name: '~', route: '/' };
    export let routes: RouteInterface[] = [
        { name: 'Work', route: '/work' },
        // { name: 'Blog', route: '/blog' },
        { name: 'About', route: '/about' },
        { name: 'Contact', route: '/contact' },
    ];
</script>

<nav class="navbar">
    <div class="brand">
        <a href="/" use:link>
            <h1>brendancreates</h1>
            <p>| creative developer</p>
        </a>
    </div>
    <div class="navbar-menu">
            <div class="navbar-item">
                <a href={homeRoute.route} use:link>
                    <button class="button">  {homeRoute.name} / </button>
                </a>
        {#each routes as route }
            <div class="navbar-item">
                <a href={route.route} use:link>
                    <button class="button"> ~/ {route.name}  </button>
                </a>
            </div>
        {/each}
    </div>
</nav>

<style>
    nav {
        color: #151515;
    }
    a {
        text-decoration: none;
        color: whitesmoke;
    }
    .brand a {
        text-transform: uppercase;
        color: whitesmoke;
        font-weight: bold;
        font-size: medium;
        display: inline-flex;
        flex-direction: row;
        align-items: center;
    }
    .brand p {
        font-weight: lighter;
        padding: 0.5em;
    }
    .navbar {
        margin: 0.5em;
        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: space-between;
    }

    .navbar-menu {
        padding: 1em;
        display: flex;
        flex-direction: row;
        /* turn your navbar sideways here */
        /* writing-mode: sideways-lr; */
        font-weight: lighter;
    }

    /* button styling */

    button {
        color: whitesmoke;
        border: none;
        background: none;
    }
    button:hover {
        color: #0062ff;
    }
    button:active {
        background: none;
        color: blue;
    }
</style>
