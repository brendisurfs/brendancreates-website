<script lang="ts">
	console.log("this is the about page");

	import {fly} from "svelte/transition"

	// components
	import Markdown from "../components/Markdown.svelte";

	// markdown
	import aboutMarkdown from "../markdown/about.md";
	import techMarkdown from "../markdown/tech.md";
</script>

<!-- page -->
<div class="md-container" in:fly="{{y: 200, duration: 200, delay: 100 }}">
	<div class="md-section">
		<Markdown markdown={aboutMarkdown} />
	</div>
	<div class="md-section">
		<Markdown markdown={techMarkdown} />
	</div>
</div>

<!-- style -->
<style>
	.md-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: stretch;
		height: 100%;
	}
	@media (max-width: 820px) {
		.md-container {
			display: flex;
			flex-direction: column;
			flex-wrap: inherit;
		}
	}
	.md-section {
		padding: 1em;
	}
</style>
