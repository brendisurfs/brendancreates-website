<script lang="ts">
    export let about: string;
    export let cardName: string;
    export let cardLink: string;
    import { link } from 'svelte-spa-router';
</script>

<a class="card-container" href={cardLink} use:link>
    <div class="card-name-container">
        <h2 class="card-name">
            {cardName}
        </h2>
    </div>
    <br /><br /><br /><br /><br />
    <div class="about-text">
        <p>
            {about}
        </p>
    </div>
</a>

<style>
    a {
        text-decoration: none;
        font-style: normal;
        color: whitesmoke;
        width: 100%;
        height: auto;
    }

    .card-container {
        box-shadow: 0px -1px white;
        background: #151515;

        margin: 0.5em;
        display: flex;
        flex-direction: column;
        
        text-align: left;
        height: 50vh;
        min-width: 400px;
        max-width: 600px;
        justify-content: space-between;
        transition: color 0.2s ease-in-out, background 0.2s ease-in-out,
            border 0.2s ease-in-out;
    }

    .card-container:hover {
        background: #252525;
    }

    .card-name {
        padding-left: 1rem;
        font-size: 2rem;
    }
    .about-text {
        background: #0062ff;
        color: white;
        width: 90%;
        height: 2.2em;
        font-size: x-large;
    }
    .about-text p {
        padding: 0.5em;
        margin: 0;
        text-align: start;


    }
    .about-text:hover {
        background: rgb(0, 81, 212);
    }
    p {
        padding: 0.15em;
    }
</style>
