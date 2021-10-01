<script lang="ts">
	import Footer from "../components/Footer.svelte";

	console.log("this is the home page");
</script>

<div class="container">
	<canvas />
	<div class="typewriter">
		<p>something 3D will be here soon.</p>
	</div>
	<Footer />
</div>

<style>
	.typewriter p {
		width: 20%;
		overflow: hidden;
		border-right: 0.5em solid black;
		white-space: nowrap;
		margin: 0 auto;
		letter-spacing: 0.05em;
		animation: typing 2.5s steps(35, end),
			blink-caret 0.75s step-end infinite;
	}

	/* typing effect */
	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 20%;
		}
	}

	/* typwriter effect */
	@keyframes blink-caret {
		from,
		to {
			border-color: transparent;
		}
		19% {
			border-color: black;
		}
	}
</style>
