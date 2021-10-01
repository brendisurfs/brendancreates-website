<script lang="ts">
	console.log("this is the about page");

	// components
	import Markdown from "../components/Markdown.svelte";

	// markdown
	import aboutMarkdown from "../markdown/about.md";
</script>

<div>
	<Markdown markdown={aboutMarkdown} />
</div>
