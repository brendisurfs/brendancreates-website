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
        color: white;
        width: 100%;
        height: auto;
    }

    .card-container {
        background: #252525;
        margin: 1em;
        display: flex;
        flex-direction: column;
        /* border: 1px solid white; */
        text-align: left;
        height: 50vh;
        min-width: 400px;
        max-width: 600px;
        justify-content: space-between;
        transition: color 0.2s ease-in-out, background 0.2s ease-in-out,
            border 0.2s ease-in-out;
    }

    .card-container:hover {
        background: #555555;
    }

    .card-name {
        padding-left: 1rem;
        font-size: 2rem;
    }
    .about-text {
        background: #0062ff;
        color: white;
        width: 90%;
        height: 20%;
        font-size: large;
        text-align: start;
    }
    .about-text p {
        padding: 0.5em;
    }
    .about-text:hover {
        background: rgb(0, 81, 212);
    }
    p {
        padding: 0.15em;
    }
</style>
