<script lang="ts" >
    import MobileNav from './MobileNav.svelte';
    import Navbar from './Navbar.svelte';
    import {link} from "svelte-spa-router"

    import {routes} from "./Navbar.svelte";


    // overlay var
    import {overlay } from "../store"
import Canvas from './Canvas.svelte';


    function closeMobileMenu(): void {
        $overlay = false;
    }

    let windowSize = window.innerWidth;
    window.addEventListener('resize', () => {
        windowSize = window.innerWidth;
    });
</script>

<!-- meta stuff -->
<title>BRENDANCREATES</title>

<!-- actual page  -->
<div class="window-container">
    <div>
        {#if windowSize <= 705}
        <MobileNav />
        {:else if windowSize > 705}
        <Navbar />
        {/if}
    </div>
    <div class="spacer">
    </div>

    <!-- Overlay Menu -->
    <div on:click="{closeMobileMenu}" class={$overlay ? "overlay":"hidden"} >
        <!-- Mobile overlay herer -->
        <div class={$overlay ? "overlay-content": "hidden"} >
            <ul >
                {#each routes as route}
                <li class="mobile-list-item">
                    <a href={route.route} use:link>
                        {route.name}
                    </a>
                </li>
                {/each}
            </ul>
        </div>
    </div>

    <Canvas/>
    <!-- canvas section for background 3d -->
    <div class={$overlay ? "blurred-slot":""}>
        <div class="container">
            <slot  />
        </div>
    </div>
</div>


<!-- STYLING -->
<style>
    .container {
        padding: 2.5em;
    }
    .window-container {
        /* padding: 0.5em; */
        justify-content: space-between; 
    }
    .spacer {
        height: 80px;
        width: 100%;
        /* border: 1px solid red; */
    }




    /* overlay mobile menu */
    ul {
        margin: 0;
        padding: 0;
        align-items: center;
    }

    .overlay {
        z-index: 1;
        position: fixed;
        
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        
        /* transform: translate(50%, 50%); */
        overflow-x: hidden;
        transition: 0.2s ;
        
        color: white;
        background: rgba(12,12,12,0.87);
        backdrop-filter: blur(4px);
    }
    /* overlay blurring */
    .blurred-slot {
        filter: blur(4px);
    }
    
    .overlay-content {
        /* transform: translate(-24px, 0); */
        position: relative; 
        top: 25%;
        width: 100%;
        text-align: center;
        transition: 0.2s;

    }
    .overlay-content ul {
        list-style-type: none;
        
        font-size: 3em;
        font-weight: normal;
    }
    .mobile-list-item a {
        color: whitesmoke;
    }

    .hidden {
        visibility: hidden;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }

    /* 3d CANVAS  */
</style>
