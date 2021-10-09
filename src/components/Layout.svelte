<script lang="ts" >
    import MobileNav from './MobileNav.svelte';
    import Navbar from './Navbar.svelte';
    import {link} from "svelte-spa-router"
    import {fade} from "svelte/transition"

    import {routes} from "./Navbar.svelte";


    // overlay var
    import {overlay} from "../store"

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
<div class="window-container" >
    <div>

        {#if windowSize <= 705}
        <MobileNav />
        {:else if windowSize > 705}
        <Navbar />
        {/if}
    </div>
    <div class="spacer">

    </div>
    <div on:click="{closeMobileMenu}" class={$overlay ? "overlay":"hidden"} in:fade>
        <div class={$overlay ? "overlay-content": "hidden"} in:fade>
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
    <div class="fixed-slot">
        <slot  />
    </div>
</div>

<style>
    .window-container {
        padding: 0.5em;
        justify-content: space-between; 
    }
    .spacer {
        height: 80px;
        width: 100%;
        /* border: 1px solid red; */
    }
    /* overlay mobile menu */
    .overlay {
        z-index: 1;
        position: absolute;
        
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        
        /* transform: translate(50%, 50%); */
        
        overflow-x: hidden;
        transition: 0.4s ;
        
        color: white;
        background: rgba(12,12,12,0.97);
    }
    .overlay-content {
        position: relative; 
        top: 25%;
        width: 100%;
        text-align: center;
        transition: 0.4s ;
    }
    .overlay-content ul {
        list-style-type: none;
        font-size: 3em;
        font-weight: bolder;
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
</style>
