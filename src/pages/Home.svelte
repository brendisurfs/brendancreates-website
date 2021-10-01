<script lang="ts">
	console.log("this is the home page");

	let message: string = "something 3D will be here soon.";
	let messageLength = message.length;

	console.log(messageLength);
</script>

<title>BRENDANCREATES</title>
<div class="container">
	<div class="typewriter">
		<p>something 3D will be here soon.</p>
	</div>
	<canvas />
</div>

<style>
	canvas {
		min-height: 100vh;
	}

	.container {
		display: flex;
		flex-direction: column;
		text-align: center;
		width: 100%;
		top: 50%;
	}
	/* typewriter effect */
	.typewriter {
		text-align: center;
		height: 100%;
	}
	.typewriter p {
		width: 26ch;
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
			width: 26ch;
		}
	}

	/* typwriter effect */
	@keyframes blink-caret {
		from,
		to {
			border-color: transparent;
		}
		18% {
			border-color: black;
		}
	}
</style>
