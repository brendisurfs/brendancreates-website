<script lang="ts" >
    import { link } from 'svelte-spa-router';
    

    // overlay global
    import {overlay} from "../store"
    
    // showMenu - toggles the menu display on or off
    // exporting to layout to be able to click out of it
    export function showMenu() {
        overlay.set(!$overlay);
        console.log("overlay value: ", $overlay);
        
        
    }
</script>

<!-- modify to open and close -->
<nav class="container">
    <div class="brand">
        <a href="/" use:link>
            <h1>brendancreates</h1>
            <p> creative developer</p>
        </a>
    </div>
    <button class="mobile-menu" on:click={showMenu}> Menu </button>
</nav>

<style>
    nav {
        position: fixed;
        display: flex;
    }
    a {
        text-decoration: none;
        font-style: normal;
    }
    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        width: 100%;
    }
    .brand h1 {
        margin: 0;

    }
    .brand a {
        text-transform: uppercase;
        color: whitesmoke;
        font-weight: bold;
        font-size: small;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .brand p {
        font-weight: lighter;
    }
    button {
        border: none;
        background: none;
    }
    button:hover {
        color: #0062ff;
    }
    .mobile-menu {
        justify-content: center;
        color: whitesmoke;
        margin: 0;
        padding: 1em;
        font-size: x-large;
        font-weight: 600;
    }
</style>
