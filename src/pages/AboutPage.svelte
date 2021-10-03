<script lang="ts">
	console.log("this is the about page");

	// components
	import Markdown from "../components/Markdown.svelte";

	// markdown
	import aboutMarkdown from "../markdown/about.md";
	import techMarkdown from "../markdown/tech.md";
</script>

<div class="md-container">
	<div class="md-section">
		<Markdown markdown={aboutMarkdown} />
	</div>
	<div class="md-section">
		<Markdown markdown={techMarkdown} />
	</div>
</div>

<style>
	.md-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: stretch;
		height: 100%;
	}
	@media (max-width: 720px) {
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
