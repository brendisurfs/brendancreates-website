<script lang="ts">
	import { onMount } from "svelte";
	import {fly} from "svelte/transition"
	let greeting = "";

	let ContactGreeting = [
		"Greetings Earthling",
		"Hello There",
		"Make yourself known",
		"Heyo",
		"Feel free to send an owl if that works",
	];

	// get contactGreeting length for truly dynamic updating

	let enumLen = ContactGreeting.length;

	function randNum(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	onMount(() => {
		console.log("contact page loaded.");
		let enumChoice = randNum(0, enumLen - 1);
		greeting = ContactGreeting[enumChoice];
		console.log(enumChoice);
	});

	type FormType = {
		firstName: string;
		lastName: string;
		email: string;
		subject: string;
		text: string;
	};

	async function handleSubmit(e: any) {
		const formData: FormData = new FormData(e.target);

		let data = {};
		for (let field of formData) {
			const [key, value] = field;
			data[key] = value;
		}
		console.log(data);
	}
</script>

<div class="container" in:fly="{{y: 200, duration: 200, delay: 100 }}">
	<div class="form-flex">
		<div class="title-container">
			<h1 id="contact">Contact</h1>
			<p id="greeting">{greeting}</p>
			<div class="email-section">
				<h2 id="email-tag">brendan.prednis@pm.me</h2>
				<p>(currently over-engineering the contact form)</p>
			</div>
			<br /><br /><br />
		</div>

		<form on:submit|preventDefault={handleSubmit}>
			<label for="name">Name*</label>
			<input
				disabled
				required
				type="text"
				id="name"
				aria-label="name box"
				placeholder="name"
			/>

			<label for="email-input">Email*</label>
			<input
				disabled
				required
				type="email"
				id="email-input"
				placeholder="gonesurfing@brendan.com"
			/>
			<label for="subject-input">Subject*</label>
			<input
				disabled
				required
				type="text"
				id="subject-input"
				placeholder="Subject"
			/>
			<br />
			<br />
			<label for="message-input">Message*</label>
			<textarea
				disabled
				required
				type="textarea"
				id="message-input"
				placeholder="say something nice"
				aria-label="contact message"
			/>
			<br />
			<input disabled type="submit" value="Submit" />
		</form>
	</div>
</div>

<style>
	.container {
		padding: 1em;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 90vh;
		font-size: larger;
	}

	#contact {
		padding:0;
		margin: 0;
	}

	.title-container {
		position: relative;

		text-align: left;
	}
	.form-flex {
		background: #151515;
		color: white;
		height: 70ch;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: left;
		width: 100%;

		max-width: 80vw;
	}

	label {
		padding: 0.15em;
	}

	textarea {
		border-radius: 0;
		height: 10vh;
		width: 100%;
		resize: none;
	}
	input[type="submit"] {
		text-align: left;
		background: #0062ff;
		border: none;
	}
	input[type="submit"],
	input[type="text"],
	input[type="email"] {
		width: 100%;
		border-radius: 0;
	}
	.email-section {
		display: flex;
		justify-content: center;
		flex-direction: column;
		text-align: center;
	}
	.email-section p {
		font-weight: 300;
	}

	#email-tag {
		font-weight: 500;
	}
	#greeting {
		font-weight: 300;
	}
</style>
