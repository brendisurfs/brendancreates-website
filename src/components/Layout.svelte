<script lang="ts">
    import Footer from './Footer.svelte';
    import MobileNav from './MobileNav.svelte';
    import Navbar from './Navbar.svelte';

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
    <div>
        <slot />
    </div>
</div>

<style>
    .window-container {
        padding: 0.5em;
       justify-content: space-between; 
    }
    .spacer {
        height: 5%;
        width: 100%;
    }
</style>
