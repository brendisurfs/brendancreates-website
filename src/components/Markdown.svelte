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
		top: 20%;
		left: 30%;
		right: 30%;
		display: flex;
		justify-content: center;
		height: 100%;
	}
	p {
		text-align: left;
		font-size: 24px;
		inline-size: 60vw;
		overflow-wrap: inherit;
	}
</style>
