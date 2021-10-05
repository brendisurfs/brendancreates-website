<script lang="ts">
	const testArray: Array<string> = ["one", "two", "three"];

	// add an axios call to the backend to serve up blog posts
	// axios.get("api/blogposts")
	// .then(
	//    console.log("this is a return blog item");
	// BLogPosts - defines our request return from the backend:
	// currently planning on doing only markdown, so most of those params are not needed.
	interface BlogPosts {
		markdownFile: string;
		name?: string;
		date?: string;
		subtitle?: string;
		content?: string;
	}
</script>

<div class="blog-list-container">
	<h1>blog under construction</h1>

	<!-- <ul id="blog-list">
		{#each testArray as item}
			<li class="blog-post">
				<p>
					{item}
				</p>
			</li>
		{/each}
	</ul> -->
</div>

<style>
	h1 {
		font-weight: bold;
	}
</style>
