<script lang="ts">
	import { onMount } from "svelte";

	onMount(() => {
		console.log("contact page loaded.");
	});

	interface IForm {
		firstName: string;
		lastName: string;
		email: string;
		subject: string;
		text: string;
	}

	const form = document.querySelector("form");
	form.addEventListener("submit", (e: Event) => {
		e.preventDefault();
		console.log("form is being submitted");
	});
</script>

<div class="container">
	<form class="form" action="/contact" method="POST">
		<h2>Contact</h2>
		<p>make yourself known</p>
		<br /><br /><br />
		<div class="form-section">
			<label for="first-name">First Name</label>
			<input
				type="text"
				id="first-name"
				aria-label="first name box"
				placeholder="first name"
			/>

			<label for="last-name">Last Name</label>
			<input type="text" id="last-name" placeholder="last name" />

			<label for="email-input">email</label>
			<input
				type="email"
				id="email-input"
				placeholder="surfing@brendan.com"
			/>
			<label for="subject-input">Subject</label>
			<input type="text" id="subject-input" placeholder="Subject" />
			<br />
			<br />
			<label for="message-input">Message</label>
			<textarea
				type="textarea"
				id="message-input"
				aria-label="contact message"
			/>
			<br />
			<input type="submit" value="Submit" />
		</div>
	</form>
</div>

<style>
	.container {
		padding: 2rem;
		display: flex;
		justify-content: center;
	}
	form {
		text-align: left;
	}
	textarea {
		height: 10vh;
		resize: none;
	}
	input[type="submit"],
	input[type="text"],
	input[type="email"] {
		width: 100%;
	}
</style>
