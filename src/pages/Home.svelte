<script lang="ts">
    import Canvas from '../components/Canvas.svelte';
    import {fade, fly} from "svelte/transition"

    let isMobileState: boolean;
    let message: string = 'something 3D will be here soon.';
    let mobileMessage: string = "this experience is much better on desktop."
    let messageLength = message.length;
    console.log(messageLength);

    // isMobile state
    if (/android|webOS|iPhone|iPad/i.test(navigator.userAgent)) {
        isMobileState = true;
    } else {
        isMobileState = false;
    }

</script>

<!-- <Canvas /> -->
<div class="container" in:fly="{{y: 200, duration: 200, delay: 100 }}" out:fade="{{duration: 100}}">

    {#if isMobileState}
    <div class="mobileType">
        <p>This experience is much better on desktop.</p>
    </div>
    {:else}
    <div class="typewriter">
            <p>something 3D will be here soon.</p>
        </div>
    {/if}
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 80vh;
    }
    /* typewriter effect */
    .typewriter {
        position: relative;
        text-align: center;
        align-items: center;
        display: flex;
        justify-content: center;
        height: 50vh;
        transform: translate(0em, -5em);
    }
    
    .typewriter p {
        width: 26ch;
        margin: 0 auto;
        overflow: hidden;
        color: whitesmoke;
        white-space: nowrap;
        border-right: 0.5em solid black;
        letter-spacing: 0.05em;
        animation: typing 2.5s steps(30, end),
            blink-caret 0.75s step-end infinite;
    }
    .mobileType {
        position: relative;
        text-align: center;
        align-items: center;
        display: flex;
        justify-content: center;
        height: 50vh;
        transform: translate(0em, -5em);
    }


    .mobileType p {
        /* width: 18ch; */
        margin: 0 auto;
        overflow: hidden;
        color: whitesmoke;
        white-space: nowrap;
        border-right: 0.5em solid black;
        animation: typing-mobile 2.5s steps(30, end),
            blink-mobile 0.75s step-end infinite;
    }


    /* typing effect */
    @keyframes typing {
        from {
            width: 0;
        }
        to {
            width: 27ch;
        }
    }
    @keyframes typing-mobile {
        from {
            width: 0;
        }
        to {
            width: 32ch;
        }
    }

    /* typwriter effect */
    @keyframes blink-caret {
        from,
        to {
            border-color: transparent;
        }
        18% {
            border-color: whitesmoke;
        }
    }
    @keyframes blink-mobile {
        from,
        to {
            border-color: transparent;
        }
        18% {
            border-color: whitesmoke;
        }
    }
</style>
