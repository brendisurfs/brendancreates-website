<script lang="ts">
    import { link } from 'svelte-spa-router';
    import routes from './Navbar.svelte';
    let isHidden = true;
    function showMenu() {
        isHidden = !isHidden;
    }
</script>

<!-- modify to open and close -->
<div class="container">
    <div class="brand">
        <a href="/" use:link>
            <h1>brendancreates</h1>
            <p>| creative developer</p>
        </a>
    </div>

    <button class="mobile-menu" on:click={showMenu}> Menu </button>
</div>
<span class:isHidden>
    <ul>
        <li>nice</li>
        <li>menu item 2</li>
        <li>menu item 3</li>
    </ul>
</span>

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
    .isHidden {
        z-index: 3;
        position: fixed;
        visibility: hidden;
    }
</style>
