<script lang="ts">
	console.log("this is the home page");

	let message: string = "something 3D will be here soon.";
	let messageLength = message.length;

	console.log(messageLength);
</script>

<title>BRENDANCREATES</title>
<!-- <div class="container"> -->
	<div class="typewriter">
		<p>something 3D will be here soon.</p>
	</div>
<!-- </div> -->

<style>
	.container {
		display: flex;
		flex-direction: column;
		text-align: center;
		width: 100%;
	}
	/* typewriter effect */
	.typewriter {
		top: 4vh;
		min-height: 90vh;
		position: relative;
		align-items: center;

	}

	.typewriter p {
		width: 26ch;
		margin: 0 auto;
		overflow: hidden;
		white-space: nowrap;
		border-right: 0.5em solid black;
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
