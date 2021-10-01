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
		padding: 1.5em;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: stretch;
		height: 100%;
	}
	@media (max-width: 1250px) {
		.md-container {
			width: 100%;
			flex-direction: column;
		}
	}
</style>
