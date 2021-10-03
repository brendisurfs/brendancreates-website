<script lang="ts">
	import MarkdownIt from "markdown-it";

	export let markdown = "";

	const md = new MarkdownIt();

	const rendered = md.render(markdown);
</script>

<!-- Render the markdown -->
<!-- Note: dont use the @html in prod for user input stuff, causes an XSS vulnerability, no bueno. -->
<div class="container">
	<p>
		{@html rendered}
	</p>
</div>

<style>
	.container {
		background: #151515;
		display: flex;
		justify-content: center;
		height: 100%;
		padding: 1em;
		max-width: 820px;
	}
	p {
		color: white;
		text-align: left;
		font-size: 20px;
		inline-size: 60vw;
	}
</style>
