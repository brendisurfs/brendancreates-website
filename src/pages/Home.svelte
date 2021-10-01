<script lang="ts">
	console.log("this is the home page");

	let message: string = "something 3D will be here soon.";
	let messageLength = message.length;

	console.log(messageLength);
</script>

<div class="container">
	<canvas />
	<div class="typewriter">
		<p>something 3D will be here soon.</p>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
	}
	.typewriter {
		text-align: center;
	}
	.typewriter p {
		position: absolute;
		left: 18%;
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
