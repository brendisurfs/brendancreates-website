<script lang="ts">
	export let about: string;
	export let cardName: string;
	export let cardLink: string;
	import { link } from "svelte-spa-router";

	let imageSrc = "./images/Yula_AlbumArt_WebVersion.jpg";

</script>

	<a class="card-container" href={cardLink}>
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
		width: auto;
		height: auto;
	}

	.card-container {
		background: #151515;
		margin: 1em;
		display: flex;
		flex-direction: column;
		border: 1px solid white;
		text-align: left;
		height: 50vh;
		width: 30vw;
		min-width: 380px;
		justify-content: space-between;
		transition: color 0.2s ease-in-out, background 0.2s ease-in-out, border 0.2s ease-in-out;
	}
	
	.card-container:hover{
		border: 1px solid #151515;
		color: #151515;
		background: white;
	}

	.card-name {
		padding-left: 1rem;
		font-size: 2rem;
	}
	.about-text {
		background: #0062ff;
		color: white;
		width: 100%;
		font-size: large;
		text-align: start;
	}
	.about-text:hover {
		background: rgb(0, 48, 126);
	}
	p {
		padding: 0.15em;
	}
</style>
