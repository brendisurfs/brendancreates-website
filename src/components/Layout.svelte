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
    {#if windowSize <= 640}
        <MobileNav />
    {/if}
    {#if windowSize > 640}
        <Navbar />
    {/if}
    <div class="content">
        <slot />
    </div>
    <Footer />
</div>

<style>
    .window-container {
        display: flex;
        flex-direction: column;
        padding: 0.5em;
    }
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }
</style>
