<script>
    let threecanvas;

    import { onMount } from 'svelte';
    import { CreateScene } from '../three-components/ThreeCanvas';

    onMount(() => {
        setTimeout(() => {
            CreateScene(threecanvas);
        }, 3000);
    });
</script>

<div class="canvas-container">
    <canvas bind:this={threecanvas} />
</div>

<style>
    .canvas-container {
        height: 100vh;
    }
</style>
