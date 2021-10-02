<script lang="ts">
	import { onMount } from "svelte";
	let greeting = "";

	enum ContactGreeting {
		"Greetings Earthling",
		"Hello There",
		"Make yourself known",
		"Heyo",
	}

	function randNum(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	onMount(() => {
		console.log("contact page loaded.");
		let enumChoice = randNum(0, 3);
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

<div class="container">
	<div class="form-flex">
		<div class="title-container">
			<h1>Contact</h1>
			<p>{greeting}</p>
			<p>brendan.prednis@pm.me</p>
			<p>(contact form will be up soon)</p>
			<br /><br /><br />
		</div>

		<form on:submit|preventDefault={handleSubmit}>

				<label for="name">Name*</label>
				<input
				required
				type="text"
				id="name"
				aria-label="name box"
				placeholder="name"
				/>
				

			<label for="email-input">Email*</label>
			<input
				required
				type="email"
				id="email-input"
				placeholder="gonesurfing@brendan.com"
			/>
			<label for="subject-input">Subject*</label>
			<input
				required
				type="text"
				id="subject-input"
				placeholder="Subject"
			/>
			<br />
			<br />
			<label for="message-input">Message*</label>
			<textarea
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
		display: flex;
		justify-content: center;
		min-height: 100vh;
		font-size: larger;
	}
	.title-container {
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

		max-width: 40vw;
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
</style>
