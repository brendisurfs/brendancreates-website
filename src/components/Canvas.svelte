<script lang="ts">
    let threecanvas;

    import { onMount } from 'svelte';
    import { CreateScene } from '../three-components/ThreeCanvas';

    onMount(() => {
            CreateScene(threecanvas);
    });
</script>

<div class="canvas-container">
    <canvas class="canvas-item" bind:this={threecanvas} />
</div>

<style>
    .canvas-container {
        height: 100vh;
        width: 100vw;
        position: fixed;

        /* overflow-x: hidden; */
        left: 0; 
        top: 0;


        margin: 0; 
        padding: 0;

        height: 100%;
        width: 100%;
        z-index: -1;
        background-color: #111111;
        
    }
    .canvas-item {
        filter: blur(4px);
    }
</style>
