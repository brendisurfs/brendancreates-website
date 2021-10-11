<script lang="ts">
	import { onMount } from "svelte";
	import {fly, fade} from "svelte/transition"

	let greeting = "";
	let successMessage: string;
	let submitValue = false;

	// submit btn value to change
	let submitButtonValue = "Submit";

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

	// TODO: EMAIL REST API
	// FormType - form interface for REST API email backend. 
	type FormType = {
		name: string;
		email: string;
		subject: string;
		message: string;
	};

	let formValues: FormType = {
		name: "",
		email: "",
		subject: "",
		message: "",
	}



	//handleSubmit - handles form data, sends to backend.
	//	|
	//	v
	function handleSubmit() {

		fetch("http://127.0.0.1:8080/api/submit", {
			method: "POST", 
			headers: {
				"Content-Type": "application/json; charset=UTF-8"
			},
			body: JSON.stringify(formValues),
		})
		.then(res => {
			if (res.status === 200) {
				submitValue = true;
				submitButtonValue = "Submission successful";
			// clear the form after successful submit.
			Object.keys(formValues).map(key => {
				formValues[key] = "";	
			})} 
		})
		.catch(err => {
			submitValue = false;
			console.log(err);
		}).finally(() => {
			successMessage = "contact submission successful"
		});
	}
</script>

<!-- PAGE -->
<div class="container" in:fly="{{y: 200, duration: 200, delay: 100 }}" out:fade="{{duration: 100}}">
	<div class="form-flex">
		<div class="title-container">
			<h1 id="contact">Contact</h1>
			<p id="greeting">{greeting}</p>
			<div class="email-section">
				<!-- <h2 id="email-tag">brendan.prednis@pm.me</h2> -->
				<p>(currently over-engineering the contact form)</p>
			<!-- <span class={submitValue ? "success-msg": "hidden"}>
				{successMessage}
			</span> -->
			</div>
			<br /><br /><br />
		</div>

		<form method="POST" on:submit|preventDefault={handleSubmit}>
			<label for="name">Name*</label>
			<input
				required
				type="text"
				id="name"
				aria-label="name box"
				placeholder="name"
				bind:value={formValues.name}
			/>

			<label for="email-input">Email*</label>
			<input
				required
				type="email"
				id="email-input"
				placeholder="gonesurfing@brendan.com"
				bind:value={formValues.email}
			/>
			<label for="subject-input">Subject*</label>
			<input
				required
				type="text"
				id="subject-input"
				placeholder="Subject"
				bind:value={formValues.subject}
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
				bind:value={formValues.message}
			/>
			<br />
			<input type="submit" value={submitButtonValue} class={submitValue ? "submit-success" : "submit-btn"} />
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
		box-shadow: 0px -1px white;
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
	
	/* .success-msg {
		position: absolute;
		color: white;
		background: green;
		
		left: 0;
		bottom: 0;
		
		width: 50%;
		height: 50%;
		transform: translate(50%, 0);
	} */
	input[type="submit"] {
		text-align: left;
		color: whitesmoke;
		border: none;
	}
	.submit-btn {
		background: #0022ff;
	}
	.submit-success {
		background: #198038;
	}
	/* .hidden {
		visibility: hidden;
	} */
</style>
