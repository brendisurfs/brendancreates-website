<script lang="ts">

    import {fly, fade} from "svelte/transition"

    interface SourceInterface {
        name: string;
        src: string;
        link: string;
        desc: string;
    }

    let imgSrc: SourceInterface[] = [
        {
            name: 'Yula - A Narrow Road',
            src: './images/anarrowroad_web.jpg',
            link: 'https://soundcloud.com/officialyula/anarrowroad',
            desc: 'Role - create visual concept for cover art. Box out, dress, texture, and render scene.',
        },
        {
            name: 'Yula - Final Level',
            src: './images/finallevel_web.jpg',
            link: 'https://soundcloud.com/officialyula/final-level',
            desc: 'Role - Create 3D scene based off of references provided.',
        },
        {
            name: 'Yula - Live Free',
            src: './images/livefree_web.jpg',
            link: 'https://soundcloud.com/officialyula/livefree',
            desc: 'Role - Create a visual concept and final render for the song release, based off of the music video for the song.',
        },
    ];
</script>

<!-- <h1 id="album-art-title">Album Art Visuals</h1> -->
<br><br><br>
<div class="container" in:fly="{{y: 200, duration: 200, delay: 100 }}" out:fade="{{duration: 100}}">
    <div class="visuals-layout">
        {#each imgSrc as image}
            <div class="grid-item ">
                <img class="image-item sibling-blur" src={image.src} alt="artwork" />
                <div class="description sibling-hover">
                    <h2>
                        {image.name}
                    </h2>
                    <p>{image.desc}</p>
                </div>
                <!-- <a target="_blank" href={image.link}>
                    <div class="card-link">
                        <p>listen here</p>
                    </div>
                </a> -->
            </div>
        {/each}
    </div>
</div>

<!-- styles -->
<style>
    .container {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    /* #album-art-title {
        width: 1fr 1fr 1fr;
    } */
    .visuals-layout {
        display: grid;
        align-items: center;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        /* column-gap: 0.5em; */
    }
    .grid-item {
        /* background: #151515; */
		box-shadow: 0px -1px white;
        position: relative;
        min-width: 240px;
        max-width: 500px;
        text-align: center;
    }
    .visuals-layout div:last-child:nth-child(3n -1) {
        grid-column: span 2;
        height: auto;
        padding-bottom: 0;
    }
    @media (max-width: 1440px) {
        .visuals-layout {
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (max-width: 960px) {
        .visuals-layout {
            grid-template-columns: 1fr;
        }
    }

    img {
        width: 100%;
        height: auto;
    }

    
    /* card description goes here */
    .description {
        position: absolute;
        min-height: 500px;
        max-height: 500px;
        height: 50%;
        width: 100%;
        min-width: 240px;
        max-width: 500px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        background: linear-gradient(rgba(184, 184, 184, 0), #111111);
        opacity: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .description p {
        width: 90%;
        font-size: larger;
        position: absolute;
        bottom: 0;
        padding: 1em;
    }

    .description:hover {
        opacity: 1;
        transition: opacity 0.2s ease-in-out, background 0.2s ease-in-out;
    }

/* 
    .card-link {
        height: 4em;
        display: flex;
        flex-direction: row;
        background: #252525;
        align-items: flex-start;
        text-align: center;
    } */
    /* .card-link p {
        text-align: center;
        margin-left: 1em;
        color : #0062ff;
    }
    a {
        text-decoration: none;
    } */
</style>
