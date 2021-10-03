<script lang="ts">
	import { link } from "svelte-spa-router";

	interface SourceInterface {
		name: string;
		src: string;
		link: string;
		desc: string;
	}

	let imgSrc: SourceInterface[] = [
		{
			name: "Yula Album Art - A Narrow Road",
			src: "./images/anarrowroad_web.jpg",
			link: "https://soundcloud.com/officialyula/anarrowroad",
			desc: "Role - create visual concept for cover art. Box out, dress, texture, and render scene.",
		},
		{
			name: "Yula - Final Level",
			src: "./images/finallevel_web.jpg",
			link: "https://soundcloud.com/officialyula/final-level",
			desc: "Role - Create 3D scene based off of references provided.",
		},
		{
			name: "Yula Album Art - Live Free",
			src: "./images/livefree_web.jpg",
			link: "https://soundcloud.com/officialyula/livefree",
			desc: "Role - Create a visual concept and final render for the song release, based off of the music video for the song.",
		},
	];
</script>

<div class="container">
	<div class="visuals-layout">
		{#each imgSrc as image}
			<div class="grid-item">
				<img class="image-item" src={image.src} alt="artwork" />
				<div class="description">
					<h2>
						{image.name}
					</h2>
					<p>{image.desc}</p>
				</div>
				<a target="_blank" href={image.link}>
					<div class="card-link">
						<p>listen here</p>
					</div>
				</a>
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
	.visuals-layout {
		display: grid;
		align-items: center;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		column-gap: 0.5em;
	}
	.grid-item {
		background: #151515;
		position: relative;
		min-width: 240px;
		max-width: 500px;
		margin: 1em;
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
	.description {
		position: absolute;
		height: 500px;
		min-width: 240px;
		max-width: 500px;
		top: 44%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
		background: linear-gradient(rgba(184, 184, 184, 0), #151515);
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
		/* color */
		transition: opacity 0.2s ease-in-out, background 0.2s ease-in-out;
	}
	.card-link {
		height: 4em;
		display: flex;
		flex-direction: row;
		background: #0062ff;
		align-items: flex-start;
		text-align: center;
	}
	.card-link p {
		text-align: center;
		margin-left: 1em;
		color: white;
	}
	a {
		text-decoration: none;
	}
</style>
