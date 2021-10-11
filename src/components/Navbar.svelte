<script lang="ts" context="module">
    console.log('this is the navbar');

    import { link } from 'svelte-spa-router';

    interface RouteInterface {
        name: string;
        route: string;
    }

    export const routes: RouteInterface[] = [
        { name: 'Home', route: '/' },
        { name: 'Work', route: '/work' },
        // { name: 'Blog', route: '/blog' },
        { name: 'About', route: '/about' },
        { name: 'Contact', route: '/contact' },
    ];
</script>

<nav class="navbar">
    <div class="brand">
        <a href="/" use:link>
                <div class="boxed-brand">
                    <h1>brendancreates</h1>
                </div>
                    <p> Developer | creative director | 3D Artist</p>
        </a>
    </div>
    <div class="navbar-menu">
        {#each routes as route }
            <div class="navbar-item">
                <a href={route.route} use:link>
                    <button class="button">  {route.name}  </button>
                </a>
            </div>
        {/each}
    </div>
</nav>

<style>

    a {
        text-decoration: none;
        color: whitesmoke;
    }
    .brand {
        display: flex;
        flex-direction: row;
    }
    .boxed-brand {
        padding: 0.5em;
        box-shadow: 1px 0px white;

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
    .brand h1 {
        margin: 0;
    }
    .brand p {
        margin: 0;
        padding: 0.5em;
        font-weight: lighter;
        box-shadow: 1px 0px solid white;
    }
    
    .navbar {
        z-index: 999;
        /* margin: 0.5em; */
        display: flex;
        flex-direction: row;
        align-items: center;
       margin-top: 1em; 
       padding: 1em;
        justify-content: space-between;
        position: absolute;
        width: 100%;
        bottom: 1;
    }

    .navbar-menu {
        padding-right: 2em;
        display: flex;
        flex-direction: row;
        /* turn your navbar sideways here */
        /* writing-mode: sideways-lr; */
        font-weight: lighter;
        font-size: larger;
    }

    /* button styling */

    button {
        color: whitesmoke;
        border: none;
        background: none;
        margin: 0;
    }
    button:hover {
        color: #0062ff;
    }
    button:active {
        background: none;
        color: #0001ff;
    }
</style>
