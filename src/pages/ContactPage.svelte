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
			<h2>CONTACT</h2>
			<p>{greeting}</p>
			<br /><br /><br />
		</div>

		<form on:submit|preventDefault={handleSubmit}>
			<label for="first-name">First Name</label>
			<input
				required
				type="text"
				id="first-name"
				aria-label="first name box"
				placeholder="first name"
			/>

			<label for="last-name">Last Name</label>
			<input
				required
				type="text"
				id="last-name"
				placeholder="last name"
			/>

			<label for="email-input">email</label>
			<input
				required
				type="email"
				id="email-input"
				placeholder="gonesurfing@brendan.com"
			/>
			<label for="subject-input">Subject</label>
			<input
				required
				type="text"
				id="subject-input"
				placeholder="Subject"
			/>
			<br />
			<br />
			<label for="message-input">Message</label>
			<textarea
				required
				type="textarea"
				id="message-input"
				placeholder="say something nice"
				aria-label="contact message"
			/>
			<br />
			<input type="submit" value="submit" />
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
		text-align: center;
	}
	.form-flex {
		height: 70ch;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: left;
		width: 100%;
		min-width: 50vw;
	}
	textarea {
		border-radius: 0;
		height: 10vh;
		width: 100%;
		resize: none;
	}
	input[type="submit"],
	input[type="text"],
	input[type="email"] {
		width: 100%;
		border-radius: 0;
	}
</style>
