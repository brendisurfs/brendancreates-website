<script lang="ts">
	import MarkdownIt from "markdown-it";

	export let markdown = "";

	const md = new MarkdownIt();

	const rendered = md.render(markdown);
</script>

<!-- Render the markdown -->
<!-- Note: dont use the @html in prod, causes an XSS vulnerability, no bueno. -->
<div class="container">
	<p>
		{@html rendered}
	</p>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
	}
	p {
		text-align: left;
		font-size: 18px;
		inline-size: 56vw;
		overflow-wrap: inherit;
	}
</style>
